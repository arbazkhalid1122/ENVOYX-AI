"use client"

import * as React from "react"
import { File, Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, useSidebar } from "@/components/ui/sidebar"
import { Sheet, SheetContent, SheetHeader, SheetFooter } from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import Image from "next/image"

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

function InvoiceUploadDialog({  open = true,setIsOpen}) {
  const isMobile = useIsMobile()
  const [agreedToTerms, setAgreedToTerms] = React.useState(false)
  const [dragActive, setDragActive] = React.useState(false)
  const fileInputRef = React.useRef(null)

  const handleSave = () => {
    if (!agreedToTerms) return
   setIsOpen(false)
    console.log("Submitting invoice")
  }

  const handleCancel = () => {
   setIsOpen(false)
  }

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // Handle file upload
      console.log("Files dropped:", e.dataTransfer.files)
    }
  }

  const handleFileSelect = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      // Handle file selection
      console.log("File selected:", e.target.files[0])
    }
  }

  // Form content component
  const FormContent = () => (
    <div className="flex flex-col h-full">
      {/* Main content */}
      <div className="flex-1 px-6 py-6 pt-2">
        {/* Description */}
        <div className="mb-8 pb-4 border-b border-gray-100">
          <p className="text-sm text-gray-600 leading-relaxed">
            Carefully confirm your invoices and supporting documents before submitting
          </p>
        </div>

        {/* Upload Area */}
        <div
          className={`
            relative bg-[#F7F7F7] rounded-xl p-4 text-center transition-all duration-200 cursor-pointer
            
          `}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={handleFileSelect}
        >
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            onChange={handleFileChange}
          />
          <div className="flex flex-col items-center space-y-4">
            {/* Upload Icon */}
            <div className="w-16 h-16 flex items-center justify-center">
              <Image src='/Image.png' 
              width={50}
              height={50}
              />
            </div>

            {/* Upload Text */}
            <div className="space-y-2">
              <p className="text-sm text-gray-700">
                Drag 'n' drop your invoice here or{" "}
                <span className="text-green-600 font-medium">click here to upload</span>
              </p>
              <p className="text-xs text-gray-500">Word, PDF, JPEG, PNG (Max. 5mb)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Terms and conditions */}
      <div className="px-6 pb-6">
        <div className="flex items-start space-x-3">
          <Checkbox
            id="terms"
            checked={agreedToTerms}
            onCheckedChange={setAgreedToTerms}
            className="mt-0.5 data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
          />
          <div className="text-sm text-gray-600 leading-relaxed">
            By continuing you agree to Envoy's
            <span className="text-[#03A84E] underline cursor-pointer"> Terms of Service</span> 
            <span className="text-[#03A84E] underline cursor-pointer"> Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  )

  // Header component
  const HeaderContent = () => (
    <div className="flex items-center justify-between px-6 py-4 pb-0">
      <h1 className="text-lg font-semibold text-gray-900">Submit invoice</h1>
      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleCancel}>
        <X className="h-4 w-4 text-gray-600" />
      </Button>
    </div>
  )

  // Footer component
  const FooterContent = () => (
    <div className="px-6 py-4 border-t border-gray-100 bg-white">
      <div className="flex justify-between ">
        <Button
          variant="outline"
          onClick={handleCancel}
          className="h-10 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg bg-white"
        >
          Cancel
        </Button>
        <Button
          onClick={handleSave}
          disabled={!agreedToTerms}
          className="h-10 bg-gray-900 text-white hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed rounded-lg"
        >
         <File className="fill-white" />Submit Invoice
        </Button>
      </div>
    </div>
  )

  // Mobile drawer
  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent side="right" className="w-full p-0 flex flex-col bg-white">
          <SheetHeader className="p-0 bg-white shrink-0">
            <HeaderContent />
          </SheetHeader>
          <div className="flex-1 overflow-y-auto">
            <FormContent />
          </div>
          <SheetFooter className="p-0 bg-white shrink-0">
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
      className="w-full max-w-md mr-4 rounded-2xl shadow-xl border border-gray-200 overflow-hidden bg-white"
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
      <SidebarHeader className="p-0 bg-white">
        <HeaderContent />
      </SidebarHeader>
      <SidebarContent className="p-0 overflow-y-auto bg-white">
        <FormContent />
      </SidebarContent>
      <SidebarFooter className="p-0 bg-white">
        <FooterContent />
      </SidebarFooter>
    </Sidebar>
  )
}

export default InvoiceUploadDialog
