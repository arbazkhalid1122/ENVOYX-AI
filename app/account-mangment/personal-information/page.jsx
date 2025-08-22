import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Bell, Plus } from "lucide-react"

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
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-sm">
          {/* Team Members Header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-1">Team Members</h2>
                <p className="text-sm text-gray-600">Invite people to join your workspace</p>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Invite Member
              </Button>
            </div>
          </div>

          {/* Tabs */}
          <div className="px-6 pt-4">
            <div className="flex gap-6 border-b border-gray-200">
              <button className="pb-2 px-1 text-sm font-medium text-blue-600 border-b-2 border-blue-600">
                Accepted
              </button>
              <button className="pb-2 px-1 text-sm font-medium text-gray-500 hover:text-gray-700">Pending</button>
            </div>
          </div>

          {/* Search and Filter Bar */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Search name" className="pl-10 w-64 bg-gray-50 border-gray-200" />
              </div>
              <select className="px-3 py-2 text-sm border border-gray-200 rounded-md bg-white">
                <option>All roles</option>
              </select>
            </div>
          </div>

          {/* Table Header */}
          <div className="px-6 py-3 bg-gray-50 border-b border-gray-200">
            <div className="grid grid-cols-4 gap-4">
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Name</div>
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Date Invited</div>
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Role</div>
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</div>
            </div>
          </div>

          {/* Team Members List */}
          <div className="divide-y divide-gray-200">
            {/* Member 1 */}
            <div className="px-6 py-4">
              <div className="grid grid-cols-4 gap-4 items-center">
                <div>
                  <div className="text-sm font-medium text-gray-900">devonlane@oux</div>
                </div>
                <div>
                  <div className="text-sm text-gray-900">02/3/15</div>
                </div>
                <div>
                  <select className="text-sm border border-gray-200 rounded px-2 py-1 bg-white">
                    <option>Admin</option>
                    <option>Member</option>
                  </select>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-blue-600 border-blue-200 hover:bg-blue-50 bg-transparent"
                  >
                    Resend invitation
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
                  >
                    Revoke
                  </Button>
                </div>
              </div>
            </div>

            {/* Member 2 */}
            <div className="px-6 py-4">
              <div className="grid grid-cols-4 gap-4 items-center">
                <div>
                  <div className="text-sm font-medium text-gray-900">Eleanor Pena</div>
                  <div className="text-sm text-gray-500">eleanor@company.com</div>
                </div>
                <div>
                  <div className="text-sm text-gray-900">08/16/13</div>
                </div>
                <div>
                  <select className="text-sm border border-gray-200 rounded px-2 py-1 bg-white">
                    <option>Member</option>
                    <option>Admin</option>
                  </select>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-blue-600 border-blue-200 hover:bg-blue-50 bg-transparent"
                  >
                    Resend invitation
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
                  >
                    Revoke
                  </Button>
                </div>
              </div>
            </div>

            {/* Member 3 */}
            <div className="px-6 py-4">
              <div className="grid grid-cols-4 gap-4 items-center">
                <div>
                  <div className="text-sm font-medium text-gray-900">Marvin McKinney</div>
                  <div className="text-sm text-gray-500">marvin@company.com</div>
                </div>
                <div>
                  <div className="text-sm text-gray-900">5/7/16</div>
                </div>
                <div>
                  <select className="text-sm border border-gray-200 rounded px-2 py-1 bg-white">
                    <option>Member</option>
                    <option>Admin</option>
                  </select>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-blue-600 border-blue-200 hover:bg-blue-50 bg-transparent"
                  >
                    Resend invitation
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
                  >
                    Revoke
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-gray-200">
            <div className="flex items-center justify-center gap-4">
              <Button variant="outline" size="sm" disabled className="text-gray-400 bg-transparent">
                Previous
              </Button>
              <Button variant="outline" size="sm" disabled className="text-gray-400 bg-transparent">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
