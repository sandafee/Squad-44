const express = require('express')
const { body, validationResult } = require('express-validator')
const Report = require('../models/Report')
const User = require('../models/User')
const AuditTrail = require('../models/AuditTrail')
const { protect } = require('../middleware/auth')
const router = express.Router()

// Test endpoint
router.get('/test', (req, res) => {
  res.json({ message: 'Reports endpoint is working!', timestamp: new Date().toISOString() })
})

// @route   POST /api/reports
// @desc    Submit a new incident report
// @access  Private (requires authentication)
router.post('/', protect, [
  body('firstName').trim().isLength({ min: 2 }).withMessage('First name must be at least 2 characters'),
  body('lastName').trim().isLength({ min: 2 }).withMessage('Last name must be at least 2 characters'),
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('phone').isLength({ min: 10 }).withMessage('Please provide a valid phone number'),
  body('incidentType').notEmpty().withMessage('Incident type is required'),
  body('incidentDate').custom((value) => {
    const date = new Date(value)
    return !isNaN(date.getTime()) || 'Please provide a valid date'
  }),
  body('incidentTime').matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).withMessage('Please provide a valid time (HH:mm format)'),
  body('location').trim().isLength({ min: 5 }).withMessage('Location must be at least 5 characters'),
  body('description').trim().isLength({ min: 20 }).withMessage('Description must be at least 20 characters'),
  body('urgency').isIn(['low', 'medium', 'high', 'emergency']).withMessage('Invalid urgency level'),
  body('consentToContact').isBoolean().withMessage('Consent to contact is required'),
  body('consentToShare').isBoolean().withMessage('Consent to share is required')
], async (req, res) => {
  try {
    console.log('📝 Report submission received:', {
      body: req.body,
      headers: req.headers
    })

    // User is authenticated via protect middleware
    const userId = req.user._id

    // Check validation errors
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      console.error('❌ Validation errors:', errors.array())
      return res.status(400).json({ 
        message: 'Validation failed',
        errors: errors.array().map(err => ({
          msg: err.msg,
          param: err.param,
          value: err.value
        }))
      })
    }

    const {
      firstName,
      lastName,
      email,
      phone,
      incidentType,
      incidentDate,
      incidentTime,
      location,
      description,
      witnesses,
      evidence,
      urgency,
      consentToContact,
      consentToShare,
      isAnonymous
    } = req.body

    // Generate unique OB number
    const obNumber = `OB-${Date.now().toString().slice(-8)}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`

    // Create new report
    const report = new Report({
      obNumber,
      userId: isAnonymous ? null : userId, // Don't link to user if anonymous
      isAnonymous: isAnonymous || false,
      personalInfo: {
        firstName: isAnonymous ? 'Anonymous' : firstName,
        lastName: isAnonymous ? 'User' : lastName,
        email: isAnonymous ? `anonymous-${Date.now()}@empowerher.local` : email,
        phone: isAnonymous ? 'N/A' : phone
      },
      incidentDetails: {
        type: incidentType,
        date: new Date(incidentDate),
        time: incidentTime,
        location,
        description,
        witnesses: witnesses || '',
        evidence: evidence || ''
      },
      urgency,
      consent: {
        contact: consentToContact,
        share: consentToShare
      },
      status: 'submitted',
      submittedAt: new Date()
    })

    // Add initial status update
    report.statusUpdates.push({
      status: 'submitted',
      message: 'Report submitted successfully. Your case is under review.',
      updatedBy: userId,
      updatedAt: new Date(),
      isPublic: true
    })

    await report.save()

    // Create audit trail entry for report creation
    await AuditTrail.create({
      reportId: report._id,
      obNumber: report.obNumber,
      action: 'report_created',
      performedBy: isAnonymous ? null : userId,
      performedByRole: isAnonymous ? 'anonymous' : (await User.findById(userId))?.role || 'user',
      details: {
        isAnonymous: isAnonymous || false,
        urgency: urgency
      }
    })

    console.log('✅ Report saved successfully:', {
      obNumber: report.obNumber,
      status: report.status
    })

    // TODO: Send confirmation email
    // TODO: Notify relevant authorities if high urgency
    // TODO: Generate police database entry

    res.status(201).json({
      message: 'Report submitted successfully',
      obNumber: report.obNumber,
      status: report.status,
      submittedAt: report.submittedAt
    })

  } catch (error) {
    console.error('❌ Report submission error:', error)
    console.error('Error stack:', error.stack)
    res.status(500).json({ 
      message: 'Failed to submit report',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
      ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
    })
  }
})

// @route   GET /api/reports/:obNumber
// @desc    Get report status by OB number
// @access  Public
router.get('/:obNumber', async (req, res) => {
  try {
    const { obNumber } = req.params

    const report = await Report.findOne({ obNumber })
    if (!report) {
      return res.status(404).json({ message: 'Report not found' })
    }

    // Create audit trail entry for report access
    let userId = null
    let userRole = 'public'
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      try {
        const jwt = require('jsonwebtoken')
        const token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret')
        userId = decoded.userId || decoded.id
        const user = await User.findById(userId)
        userRole = user?.role || 'user'
      } catch (err) {
        // Invalid token, treat as public access
      }
    }

    try {
      await AuditTrail.create({
        reportId: report._id,
        obNumber: report.obNumber,
        action: 'report_accessed',
        performedBy: userId,
        performedByRole: userRole,
        details: {
          accessMethod: userId ? 'authenticated' : 'public',
          ipAddress: req.ip || req.connection.remoteAddress
        }
      })
    } catch (auditError) {
      // Log but don't fail the request if audit trail creation fails
      console.error('Failed to create audit trail:', auditError)
    }

    // Return only safe information
    const response = {
      obNumber: report.obNumber,
      status: report.status,
      submittedAt: report.submittedAt,
      lastUpdated: report.lastUpdated,
      assignedOfficer: report.assignedOfficer,
      handlingParties: report.handlingParties || [],
      caseNotes: report.caseNotes?.filter(note => note.isPublic) || [],
      nextSteps: report.nextSteps || []
    }

    // If user is authenticated and owns the report, return more details
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      try {
        const jwt = require('jsonwebtoken')
        const token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret')
        const userId = decoded.userId || decoded.id

        if (report.userId && report.userId.toString() === userId.toString()) {
          response.incidentDetails = {
            type: report.incidentDetails.type,
            date: report.incidentDetails.date,
            location: report.incidentDetails.location
          }
          response.urgency = report.urgency
        }
      } catch (err) {
        // Invalid token, return limited info
      }
    }

    res.json(response)

  } catch (error) {
    console.error('Report retrieval error:', error)
    res.status(500).json({ 
      message: 'Failed to retrieve report',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    })
  }
})

// @route   PUT /api/reports/:obNumber/status
// @desc    Update report status (admin only)
// @access  Private (Admin)
router.put('/:obNumber/status', protect, async (req, res) => {
  try {
    const { obNumber } = req.params
    const { status, notes, assignedOfficer } = req.body

    // Check if user is admin
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' })
    }

    const report = await Report.findOne({ obNumber })
    if (!report) {
      return res.status(404).json({ message: 'Report not found' })
    }

    // Update report
    report.status = status || report.status
    report.lastUpdated = new Date()
    
    if (notes) {
      report.caseNotes.push({
        note: notes,
        addedBy: req.user.id,
        addedAt: new Date()
      })
    }

    if (assignedOfficer) {
      report.assignedOfficer = assignedOfficer
    }

    await report.save()

    res.json({
      message: 'Report status updated successfully',
      obNumber: report.obNumber,
      status: report.status,
      lastUpdated: report.lastUpdated
    })

  } catch (error) {
    console.error('Report update error:', error)
    res.status(500).json({ 
      message: 'Failed to update report',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    })
  }
})

// @route   GET /api/reports/user/my-reports
// @desc    Get all reports for the authenticated user
// @access  Private
router.get('/user/my-reports', protect, async (req, res) => {
  try {
    // Get reports where user is the owner (not anonymous)
    const reports = await Report.find({ 
      $or: [
        { userId: req.user._id },
        { userId: null, isAnonymous: false } // Include non-anonymous reports without userId (edge case)
      ]
    })
      .sort({ submittedAt: -1 })
      .select('-personalInfo -consent') // Don't return sensitive info

    // Create audit trail entry
    await AuditTrail.create({
      action: 'reports_list_accessed',
      performedBy: req.user._id,
      performedByRole: req.user.role,
      details: {
        reportCount: reports.length
      }
    })

    res.json({
      reports: reports.map(report => ({
        obNumber: report.obNumber,
        status: report.status,
        urgency: report.urgency,
        incidentDetails: {
          type: report.incidentDetails.type,
          date: report.incidentDetails.date,
          location: report.incidentDetails.location
        },
        assignedOfficer: report.assignedOfficer,
        handlingParties: report.handlingParties || [],
        statusUpdates: report.statusUpdates?.filter(update => update.isPublic).sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)) || [],
        submittedAt: report.submittedAt,
        lastUpdated: report.lastUpdated,
        resolvedAt: report.resolvedAt,
        caseNotes: report.caseNotes?.filter(note => note.isPublic) || [],
        nextSteps: report.nextSteps || []
      }))
    })
  } catch (error) {
    console.error('Get user reports error:', error)
    res.status(500).json({ 
      message: 'Failed to retrieve reports',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    })
  }
})

module.exports = router
