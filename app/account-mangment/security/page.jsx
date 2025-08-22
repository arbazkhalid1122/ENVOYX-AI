import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Bell, AlertCircle } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Account Management</h1>
            <p className="text-sm text-gray-600 mt-1">Increase cashflow with your invoices</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search" className="pl-10 w-64 bg-gray-50 border-gray-200" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">3K</span>
              <div className="relative">
                <Bell className="h-5 w-5 text-gray-600" />
                <div className="absolute -top-1 -right-1 h-2 w-2 bg-yellow-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto p-6 space-y-8">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-1">Manage Password</h2>
            <p className="text-sm text-gray-600">Real-time information about you</p>
          </div>

          {/* Password Security Alert */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm text-red-800">
                  To keep your account safe we need the button below to send a password change request and we'll send
                  you a confirmation link to the email linked to this account.
                </p>
                <div className="mt-3">
                  <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50 bg-white">
                    Request change password
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-1">Sign-in Security</h2>
            <p className="text-sm text-gray-600">Real-time information about you</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-1">Two-Factor authentication</h2>
            <p className="text-sm text-gray-600">This is the email linked to your account</p>
          </div>
        </div>
      </div>
    </div>
  )
}
