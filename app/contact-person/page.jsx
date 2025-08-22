import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Search, Bell, AlertCircle } from "lucide-react"

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
        {/* Personal Information */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-1">Personal Information</h2>
            <p className="text-sm text-gray-600">Real-time information about you</p>
          </div>

          <div className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                  First name
                </Label>
                <Input id="firstName" defaultValue="Kendall" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                  Last name
                </Label>
                <Input id="lastName" defaultValue="Kendall" className="mt-1" />
              </div>
            </div>

            {/* Profile Picture */}
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-3 block">Profile picture</Label>
              <p className="text-xs text-gray-500 mb-3">PNG, JPG (MAX)</p>
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder.svg?height=48&width=48" />
                  <AvatarFallback>K</AvatarFallback>
                </Avatar>
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

        {/* Account Email */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-1">Account Email</h2>
            <p className="text-sm text-gray-600">This is the email linked to your account</p>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="workEmail" className="text-sm font-medium text-gray-700">
                Work email
              </Label>
              <Input id="workEmail" defaultValue="kendall@example.com" className="mt-1 bg-gray-50" disabled />
            </div>

            <Alert className="bg-red-50 border-red-200">
              <AlertCircle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-800">
                To keep your account safe we need to confirm you're the actual owner of this account.
              </AlertDescription>
            </Alert>

            <Button className="bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300">
              Request change for email
            </Button>
          </div>
        </div>

        {/* Contact Number */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-1">Contact number</h2>
            <p className="text-sm text-gray-600">Modify your contact number</p>
          </div>

          <div>
            <Label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700">
              Phone number
            </Label>
            <div className="flex mt-1">
              <div className="flex items-center px-3 bg-gray-50 border border-r-0 border-gray-300 rounded-l-md">
                <div className="w-4 h-3 bg-green-500 rounded-sm mr-2"></div>
                <span className="text-sm text-gray-700">+250</span>
              </div>
              <Input id="phoneNumber" defaultValue="123 456 789" className="rounded-l-none border-l-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
