const mongoose = require('mongoose')

const auditTrailSchema = new mongoose.Schema({
  reportId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Report',
    index: true
  },
  obNumber: {
    type: String,
    index: true
  },
  action: {
    type: String,
    required: true,
    enum: [
      'report_created',
      'report_accessed',
      'report_updated',
      'report_status_changed',
      'report_deleted',
      'reports_list_accessed',
      'case_note_added',
      'officer_assigned',
      'admin_action'
    ]
  },
  performedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  performedByRole: {
    type: String,
    enum: ['user', 'admin', 'officer', 'anonymous', 'public'],
    default: 'public'
  },
  details: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  },
  ipAddress: {
    type: String
  },
  userAgent: {
    type: String
  }
}, {
  timestamps: true
})

// Indexes for better query performance
auditTrailSchema.index({ reportId: 1, createdAt: -1 })
auditTrailSchema.index({ obNumber: 1, createdAt: -1 })
auditTrailSchema.index({ performedBy: 1, createdAt: -1 })
auditTrailSchema.index({ action: 1, createdAt: -1 })

module.exports = mongoose.model('AuditTrail', auditTrailSchema)

