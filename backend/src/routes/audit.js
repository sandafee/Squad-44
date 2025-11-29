const express = require('express')
const AuditTrail = require('../models/AuditTrail')
const Report = require('../models/Report')
const { protect } = require('../middleware/auth')
const router = express.Router()

// @route   GET /api/audit/reports/:obNumber
// @desc    Get audit trail for a specific report
// @access  Private (User can see their own reports, Admin can see all)
router.get('/reports/:obNumber', protect, async (req, res) => {
  try {
    const { obNumber } = req.params
    
    // Find the report
    const report = await Report.findOne({ obNumber })
    if (!report) {
      return res.status(404).json({ message: 'Report not found' })
    }

    // Check if user has access
    // Users can only see audit trails for their own reports
    // Admins and officers can see all
    if (req.user.role !== 'admin' && req.user.role !== 'officer') {
      if (report.userId && report.userId.toString() !== req.user._id.toString()) {
        return res.status(403).json({ message: 'Access denied' })
      }
      // Anonymous reports without userId cannot be accessed by regular users
      if (!report.userId && report.isAnonymous) {
        return res.status(403).json({ message: 'Access denied' })
      }
    }

    // Get audit trail for this report
    const auditTrail = await AuditTrail.find({ 
      $or: [
        { reportId: report._id },
        { obNumber: obNumber }
      ]
    })
      .populate('performedBy', 'firstName lastName email role')
      .sort({ createdAt: -1 })

    res.json({
      obNumber: report.obNumber,
      reportId: report._id,
      auditTrail: auditTrail.map(entry => ({
        id: entry._id,
        action: entry.action,
        performedBy: entry.performedBy ? {
          id: entry.performedBy._id,
          name: `${entry.performedBy.firstName} ${entry.performedBy.lastName}`,
          email: entry.performedBy.email,
          role: entry.performedBy.role
        } : {
          role: entry.performedByRole,
          name: entry.performedByRole === 'anonymous' ? 'Anonymous User' : 'Public User'
        },
        performedByRole: entry.performedByRole,
        details: entry.details,
        timestamp: entry.createdAt,
        ipAddress: entry.ipAddress
      }))
    })

  } catch (error) {
    console.error('Get audit trail error:', error)
    res.status(500).json({ 
      message: 'Failed to get audit trail',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    })
  }
})

// @route   GET /api/audit/my-reports
// @desc    Get audit trails for all user's reports
// @access  Private
router.get('/my-reports', protect, async (req, res) => {
  try {
    // Get all reports for this user
    const reports = await Report.find({ userId: req.user._id }).select('_id obNumber')
    const reportIds = reports.map(r => r._id)
    const obNumbers = reports.map(r => r.obNumber)

    // Get audit trails for these reports
    const auditTrails = await AuditTrail.find({
      $or: [
        { reportId: { $in: reportIds } },
        { obNumber: { $in: obNumbers } }
      ]
    })
      .populate('performedBy', 'firstName lastName email role')
      .sort({ createdAt: -1 })
      .limit(100) // Limit to recent 100 entries

    // Group by report
    const grouped = {}
    auditTrails.forEach(entry => {
      const key = entry.obNumber || entry.reportId?.toString()
      if (!grouped[key]) {
        grouped[key] = {
          obNumber: entry.obNumber,
          reportId: entry.reportId,
          entries: []
        }
      }
      grouped[key].entries.push({
        id: entry._id,
        action: entry.action,
        performedBy: entry.performedBy ? {
          id: entry.performedBy._id,
          name: `${entry.performedBy.firstName} ${entry.performedBy.lastName}`,
          email: entry.performedBy.email,
          role: entry.performedBy.role
        } : {
          role: entry.performedByRole,
          name: entry.performedByRole === 'anonymous' ? 'Anonymous User' : 'Public User'
        },
        performedByRole: entry.performedByRole,
        details: entry.details,
        timestamp: entry.createdAt,
        ipAddress: entry.ipAddress
      })
    })

    res.json({
      reports: Object.values(grouped)
    })

  } catch (error) {
    console.error('Get my audit trails error:', error)
    res.status(500).json({ 
      message: 'Failed to get audit trails',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    })
  }
})

// @route   GET /api/audit/all
// @desc    Get all audit trails (Admin only)
// @access  Private (Admin only)
router.get('/all', protect, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. Admin only.' })
    }

    const { page = 1, limit = 50, action, obNumber } = req.query
    const query = {}

    if (action) query.action = action
    if (obNumber) query.obNumber = obNumber

    const auditTrails = await AuditTrail.find(query)
      .populate('performedBy', 'firstName lastName email role')
      .populate('reportId', 'obNumber status')
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)

    const total = await AuditTrail.countDocuments(query)

    res.json({
      auditTrails: auditTrails.map(entry => ({
        id: entry._id,
        reportId: entry.reportId?._id,
        obNumber: entry.obNumber,
        action: entry.action,
        performedBy: entry.performedBy ? {
          id: entry.performedBy._id,
          name: `${entry.performedBy.firstName} ${entry.performedBy.lastName}`,
          email: entry.performedBy.email,
          role: entry.performedBy.role
        } : {
          role: entry.performedByRole,
          name: entry.performedByRole === 'anonymous' ? 'Anonymous User' : 'Public User'
        },
        performedByRole: entry.performedByRole,
        details: entry.details,
        timestamp: entry.createdAt,
        ipAddress: entry.ipAddress
      })),
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    })

  } catch (error) {
    console.error('Get all audit trails error:', error)
    res.status(500).json({ 
      message: 'Failed to get audit trails',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    })
  }
})

module.exports = router

