"use client"

import * as React from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, useSidebar } from "@/components/ui/sidebar"

function BusinessProfileForm({ onSave, onCancel }) {
  const { setOpen } = useSidebar()
  const [formData, setFormData] = React.useState({
    businessName: "",
    industry: "",
    businessType: "",
    businessAddress: "",
    city: "",
    country: "",
    multipleBranches: "yes",
  })

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    onSave?.(formData)
    console.log("Saving business profile:", formData)
  }

  const handleCancel = () => {
    onCancel?.()
    setOpen(false)
  }

  return (
    <Sidebar
      side="right"
      className="w-full max-w-md mr-2 rounded-2xl shadow-2xl border border-gray-200/50 bg-black"
      style={{
        position: "fixed",
        top: "16px",
        right: "16px",
        bottom: "16px",
        width: "calc(100% - 32px)",
        maxWidth: "448px",
        height: "calc(100vh - 32px)",
        zIndex: 50,
        
      }}
    >
      {/* Header */}
      <SidebarHeader className="border-b border-gray-100/80 p-0">
        <div className="flex items-center gap-3 px-6 py-4">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full hover:bg-gray-100/80 transition-colors"
            onClick={handleCancel}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-lg font-medium text-gray-900">Setup business profile</h1>
        </div>
      </SidebarHeader>

      {/* Form Content */}
      <SidebarContent className="px-6 py-6 overflow-y-auto bg-transparent rounded-2xl">
        <div className="space-y-6">
          {/* Business Name */}
          <div className="space-y-2">
            <Label htmlFor="businessName" className="text-sm font-medium text-gray-700">
              Name of your business
            </Label>
            <Input
              id="businessName"
              value={formData.businessName}
              onChange={(e) => handleInputChange("businessName", e.target.value)}
              className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg transition-all"
              placeholder="Enter business name"
            />
          </div>

          {/* Industry and Business Type Row */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Industry</Label>
              <Select value={formData.industry} onValueChange={(value) => handleInputChange("industry", value)}>
                <SelectTrigger className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Type of business</Label>
              <Select value={formData.businessType} onValueChange={(value) => handleInputChange("businessType", value)}>
                <SelectTrigger className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="llc">LLC</SelectItem>
                  <SelectItem value="corporation">Corporation</SelectItem>
                  <SelectItem value="partnership">Partnership</SelectItem>
                  <SelectItem value="sole-proprietorship">Sole Proprietorship</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Business Address */}
          <div className="space-y-2">
            <Label htmlFor="businessAddress" className="text-sm font-medium text-gray-700">
              Specify your business address
            </Label>
            <Input
              id="businessAddress"
              value={formData.businessAddress}
              onChange={(e) => handleInputChange("businessAddress", e.target.value)}
              className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg transition-all"
              placeholder="Enter business address"
            />
          </div>

          {/* City and Country Row */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="city" className="text-sm font-medium text-gray-700">
                City
              </Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg transition-all"
                placeholder="Enter city"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Country of Location</Label>
              <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                <SelectTrigger className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="au">Australia</SelectItem>
                  <SelectItem value="de">Germany</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Multiple Branches */}
          <div className="space-y-3">
            <Label className="text-sm font-medium text-gray-700">Do you have multiple branches?</Label>
            <RadioGroup
              value={formData.multipleBranches}
              onValueChange={(value) => handleInputChange("multipleBranches", value)}
              className="flex gap-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="yes" className="border-gray-300 text-green-600 focus:ring-green-500" />
                <Label htmlFor="yes" className="text-sm font-medium text-gray-700">
                  Yes
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="no" className="border-gray-300 text-green-600 focus:ring-green-500" />
                <Label htmlFor="no" className="text-sm font-medium text-gray-700">
                  No
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </SidebarContent>

      {/* Footer Actions */}
      <SidebarFooter className="border-t border-gray-100/80 p-0 rounded-b-2xl bg-white/90">
        <div className="px-6 py-4">
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={handleCancel}
              className="flex-1 h-11 border-gray-200 text-gray-700 hover:bg-gray-50 bg-transparent rounded-lg transition-all"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              className="flex-1 h-11 bg-gray-900 text-white hover:bg-gray-800 rounded-lg transition-all"
            >
              Save
            </Button>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

export { BusinessProfileForm }
