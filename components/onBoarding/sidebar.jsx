"use client"

import * as React from "react"
import { Check, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, useSidebar } from "@/components/ui/sidebar"
import { Sheet, SheetContent, SheetHeader, SheetFooter } from "@/components/ui/sheet"

// Hook to detect mobile screen
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)

    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  return isMobile
}

function BusinessProfileForm({ onSave, onCancel, open = true, onOpenChange }) {
  const { setOpen } = useSidebar()
  const isMobile = useIsMobile()
  const [selected, setSelected] = React.useState("yes")
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
    onOpenChange?.(false)
    setOpen(false)
  }

  // Form content component to reuse in both mobile and desktop
  const FormContent = () => (
    <div className="space-y-4 sm:space-y-6">
      {/* Business Name */}
      <div className="space-y-2">
        <Label htmlFor="businessName" className="text-sm font-normal text-[#081F24]">
          Name of your business
        </Label>
        <Input
          id="businessName"
          value={formData.businessName}
          onChange={(e) => handleInputChange("businessName", e.target.value)}
          className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg transition-all"
        />
      </div>

      {/* Industry and Business Type Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2 w-full">
          <Label className="text-sm font-normal text-[#081F24]">Industry</Label>
          <Select>
            <SelectTrigger className="!h-12 !min-h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg w-full">
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

        <div className="space-y-2 w-full">
          <Label className="text-sm font-normal text-[#081F24]">Type of business</Label>
          <Select value={formData.businessType} onValueChange={(value) => handleInputChange("businessType", value)}>
            <SelectTrigger className="!h-12 !min-h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg w-full">
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

      <div className="space-y-2">
        <Label htmlFor="businessAddress" className="text-sm font-normal text-[#081F24]">
          Specify your business address
        </Label>
        <Input
          id="businessAddress"
          value={formData.businessAddress}
          onChange={(e) => handleInputChange("businessAddress", e.target.value)}
          className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg transition-all"
        />
      </div>

      {/* City and Country Row */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="city" className="text-sm font-normal text-[#081F24]">
            City
          </Label>
          <Input
            id="city"
            value={formData.city}
            onChange={(e) => handleInputChange("city", e.target.value)}
            className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg transition-all"
          />
        </div>

        <div className="space-y-2 w-full">
          <Label className="text-sm font-normal text-[#081F24]">Country of Location</Label>
          <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
            <SelectTrigger className="h-12 min-h-12 w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg">
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

      <div className="space-y-2">
        <Label htmlFor="multipleBranches" className="text-sm font-normal text-[#081F24]">
          Do you have multiple branches?
        </Label>
        <div
          className="flex bg-white rounded-lg mt-1 border border-gray-200 overflow-hidden shadow-sm"
          id="multipleBranches"
        >
          {/* Yes Option */}
          <button
            onClick={() => setSelected("yes")}
            className={`
              relative flex-1 p-3 sm:p-4 flex items-center justify-center transition-colors text-sm sm:text-base
              ${selected === "yes" ? "bg-[#FAFAFA]" : "bg-white text-[#081F24] hover:bg-gray-50"}
            `}
          >
            <span className="">Yes</span>
            {selected === "yes" && (
              <div className="absolute top-1 right-1 w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="w-2 h-2 text-white" />
              </div>
            )}
          </button>

          {/* Divider */}
          <div className="w-px bg-gray-200"></div>

          {/* No Option */}
          <button
            onClick={() => setSelected("no")}
            className={`
              relative flex-1 p-3 sm:p-4 flex items-center justify-center transition-colors text-sm sm:text-base
              ${selected === "no" ? "bg-[#FAFAFA]" : "bg-white text-[#081F24] hover:bg-gray-50"}
            `}
          >
            <span className="">No</span>
            {selected === "no" && (
              <div className="absolute top-1 right-1 w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="w-2 h-2 text-white" />
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  )

  // Header component to reuse
  const HeaderContent = () => (
    <div className="flex items-center gap-3 px-4 sm:px-6 py-4">
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 rounded-lg border border-gray-100/80"
        onClick={handleCancel}
      >
        <ChevronLeft className="h-5 w-5 text-[#03A84E]" />
      </Button>
      <h1 className="sm:text-lg text-gray-900 font-semibold">Setup business profile</h1>
    </div>
  )

  // Footer component to reuse
  const FooterContent = () => (
    <div className="px-4 sm:px-6 py-4">
      <div className="flex gap-3 justify-between">
        <Button
          variant="outline"
          onClick={handleCancel}
          className="h-11 border-gray-200 text-[#081F24] hover:bg-gray-50 bg-transparent rounded-lg transition-all flex-1 sm:flex-none"
        >
          Cancel
        </Button>
        <Button
          onClick={handleSave}
          className="h-11 bg-gray-900 text-white hover:bg-gray-800 rounded-lg transition-all flex-1 sm:flex-none"
        >
          Save
        </Button>
      </div>
    </div>
  )

  // Mobile drawer
  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent side="right" className="w-full p-0 flex flex-col bg-white">
          <SheetHeader className="border-b border-gray-100/80 p-0 bg-white shrink-0">
            <HeaderContent />
          </SheetHeader>

          <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6">
            <FormContent />
          </div>

          <SheetFooter className="border-t border-gray-100/80 p-0 bg-white/90 shrink-0">
            <FooterContent />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    )
  }

  // Desktop sidebar
  return (
    <Sidebar
      side="right"
      collapsible="none"
      className="w-full max-w-md mr-2 rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden bg-white"
      style={{
        position: "fixed",
        top: "16px",
        right: "16px",
        bottom: "16px",
        width: "calc(100% - 32px)",
        maxWidth: "448px",
        height: "calc(100vh - 32px)",
        zIndex: 500,
      }}
    >
      <SidebarHeader className="border-b border-gray-100/80 p-0 bg-white">
        <HeaderContent />
      </SidebarHeader>

      <SidebarContent className="px-4 sm:px-6 py-6 overflow-y-auto bg-white rounded-2xl">
        <FormContent />
      </SidebarContent>

      <SidebarFooter className="border-t border-gray-100/80 p-0 rounded-b-2xl bg-white/90">
        <FooterContent />
      </SidebarFooter>
    </Sidebar>
  )
}

export { BusinessProfileForm }
