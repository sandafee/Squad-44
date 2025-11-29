import { useState, useEffect } from 'react'
import { authService } from '../utils/auth'
import { ClockIcon, UserIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

interface AuditEntry {
  id: string
  action: string
  performedBy: {
    id?: string
    name: string
    email?: string
    role: string
  }
  performedByRole: string
  details: any
  timestamp: string
  ipAddress?: string
}

interface AuditTrailViewProps {
  obNumber: string
  onClose: () => void
}

export default function AuditTrailView({ obNumber, onClose }: AuditTrailViewProps) {
  const [auditTrail, setAuditTrail] = useState<AuditEntry[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadAuditTrail = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'
        const response = await fetch(`${API_URL}/audit/reports/${obNumber}`, {
          headers: authService.getAuthHeaders()
        })

        if (!response.ok) {
          if (response.status === 403) {
            setError('You do not have permission to view the audit trail for this report.')
          } else {
            setError('Failed to load audit trail.')
          }
          return
        }

        const data = await response.json()
        setAuditTrail(data.auditTrail || [])
      } catch (error) {
        console.error('Error loading audit trail:', error)
        setError('Failed to load audit trail.')
      } finally {
        setIsLoading(false)
      }
    }

    loadAuditTrail()
  }, [obNumber])

  const getActionLabel = (action: string) => {
    const labels: Record<string, string> = {
      report_created: 'Report Created',
      report_accessed: 'Report Accessed',
      report_updated: 'Report Updated',
      report_status_changed: 'Status Changed',
      case_note_added: 'Case Note Added',
      officer_assigned: 'Officer Assigned',
      reports_list_accessed: 'Reports List Accessed',
      admin_action: 'Admin Action'
    }
    return labels[action] || action.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">{error}</p>
        </div>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
        >
          Close
        </button>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <DocumentTextIcon className="h-6 w-6 text-purple-600 mr-2" />
          <h3 className="text-xl font-bold text-gray-900">Audit Trail</h3>
          <span className="ml-3 text-sm text-gray-500">OB: {obNumber}</span>
        </div>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          Close
        </button>
      </div>

      {auditTrail.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No audit trail entries found for this report.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {auditTrail.map((entry) => (
            <div
              key={entry.id}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center">
                  <div className="bg-purple-100 rounded-full p-2 mr-3">
                    <ClockIcon className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {getActionLabel(entry.action)}
                    </h4>
                    <div className="flex items-center mt-1 text-sm text-gray-600">
                      <UserIcon className="h-4 w-4 mr-1" />
                      <span>{entry.performedBy.name}</span>
                      <span className="ml-2 px-2 py-0.5 bg-gray-100 rounded text-xs">
                        {entry.performedByRole}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">{formatDate(entry.timestamp)}</p>
                  {entry.ipAddress && (
                    <p className="text-xs text-gray-400 mt-1">IP: {entry.ipAddress}</p>
                  )}
                </div>
              </div>

              {entry.details && Object.keys(entry.details).length > 0 && (
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <details className="text-sm">
                    <summary className="cursor-pointer text-gray-600 hover:text-gray-900">
                      View Details
                    </summary>
                    <div className="mt-2 bg-gray-50 rounded p-3">
                      <pre className="text-xs text-gray-700 whitespace-pre-wrap">
                        {JSON.stringify(entry.details, null, 2)}
                      </pre>
                    </div>
                  </details>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

