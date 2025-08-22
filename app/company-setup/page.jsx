import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Bell } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">General</h1>
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
            <h2 className="text-lg font-medium text-gray-900 mb-1">Company Setup</h2>
            <p className="text-sm text-gray-600">Real-time information about you</p>
          </div>

          <div className="space-y-6">
            {/* Company Name */}
            <div>
              <Label htmlFor="companyName" className="text-sm font-medium text-gray-700">
                Company Name
              </Label>
              <Input id="companyName" defaultValue="Ascendant" className="mt-1" />
            </div>

            {/* Industry and Type of Business */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-gray-700">Industry</Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-700">Type of business</Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="startup">Startup</SelectItem>
                    <SelectItem value="corporation">Corporation</SelectItem>
                    <SelectItem value="llc">LLC</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Company Logo */}
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-3 block">Company logo</Label>
              <p className="text-xs text-gray-500 mb-3">PNG, JPG (5MB)</p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-medium text-sm">AP</span>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-blue-600 border-blue-200 hover:bg-blue-50 bg-transparent"
                  >
                    Upload photo
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-50">
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-1">Location</h2>
            <p className="text-sm text-gray-600">Real-time information about you</p>
          </div>

          <div>
            <Label htmlFor="country" className="text-sm font-medium text-gray-700">
              Country
            </Label>
            <div className="flex mt-1">
              <div className="flex items-center px-3 bg-gray-50 border border-r-0 border-gray-300 rounded-l-md">
                <div className="w-4 h-3 bg-orange-500 rounded-sm mr-2"></div>
              </div>
              <Input id="country" defaultValue="Cote D'Ivoire" className="rounded-l-none border-l-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
