"use client"

import Sidebar from "@/components/layout/sidebar"
import InvoiceCard from "@/components/invoice-card"
import { ArrowUpRight, Bell, Menu, MoveUpRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { BusinessProfileForm } from "@/components/onBoarding/sidebar"
import { useState } from "react"
import { BusinessVerificationModal } from "@/components/onBoarding/business-verification-modal"

function DashboardContent() {
    const [isOpen, setIsOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(true)

  const handleCancel = () => {
    console.log("User cancelled verification")
  }

  const handleProceed = () => {
    console.log("User proceeded with verification")
  }
    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }


    

    return (
        <div className=" bg-[#f7f7f7] flex">
            <Sidebar />
            <div className=" bg-[#f7f7f7] flex-1">
                {/* Main Content */}
                <div className="flex-col">
                    {/* Main Content Area */}
                    <main className="p-6 lg:p-8">
                        <div className="">
                            <div className="flex items-center justify-between">
                                {/* Welcome Section */}
                                <div className="mb-8">
                                    <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-2">Hello Assi 👋</h1>
                                    <p className="text-gray-600 text-base lg:text-lg max-w-2xl">
                                        Complete your business profile to start enjoying instant cashflow using your insurance claims invoices
                                    </p>
                                </div>
                                <Button variant="ghost" size="icon" className="text-[#ffcb37] bg-white h-10">
                                    <Bell className="fill-[#ffcb37] stroke-[#ffcb37]" />
                                </Button>
                            </div>

                            {/* Cards Grid with proper spacing */}
                            <div className="grid grid-cols-3 gap-6">
                                {[
                                    {
                                        title: "Setup your business profile",
                                        description: "Pre-fill your business information to get started",
                                        status: "Not started",
                                        color: "bg-purple-100",
                                        progress: "0%",
                                        src: '/Frame.svg'
                                    },
                                    {
                                        title: "Complete KYC/B",
                                        description: "Provide some documents to help us keep EnvoyX safe",
                                        status: "Not started",
                                        color: "bg-green-100",
                                        progress: "0%",
                                        src: '/Frame1.svg'

                                    },
                                    {
                                        title: "Financing preferences",
                                        description: "Help us identify you by submitting the basic government issue documents",
                                        status: "Not started",
                                        color: "bg-blue-100",
                                        progress: "0%",
                                        src: '/Frame2.svg'

                                    },
                                ].map((item, index) => (
                                    <div key={index} className="bg-white rounded-xl p-6 border border-[#e4e4e7]">

                                        <img src={item?.src} alt="" className="mb-12" />
                                        <h3 className="font-semibold text-[#272635] mb-2">{item.title}</h3>
                                        <p className="text-sm mb-4">{item.description}</p>
                                        {index === 1 && <button
                                            onClick={toggleSidebar}
                                            className="text-[#03a84e] text-sm underline flex items-center gap-1">Setup Profile <MoveUpRight className="h-3 w-3" /></button>}


                                    </div>
                                ))}
                            </div>

                        </div>
                        <Card className="border-0 shadow-sm bg-white rounded-xl mt-6 p-0">
                            <CardContent className="p-6">
                                <div className="flex gap-6">
                                    <div className="w-20 h-20 lg:w-24 lg:h-24 flex-shrink-0">
                                        <Image
                                            src="/help.svg"
                                            alt="Customer support illustration"
                                            width={96}
                                            height={96}
                                            className="w-full h-full"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                                            Having trouble completing your profile?
                                        </h3>
                                        <p className="text-gray-600 text-base leading-relaxed mb-4 max-w-xl">
                                            If you're having trouble with completing your profile, kindly reach out to one of our amazing
                                            humans of EnvoyX to give you a helping hand. We really want you and your business to win.
                                        </p>
                                        <Button variant="link" className="text-[#03a84e] hover:text-[#0e363f] p-0 h-auto font-medium">
                                            Contact support
                                            <ArrowUpRight className="ml-1 h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </main>
                    <SidebarProvider open={isOpen} onOpenChange={setIsOpen} className={"fixed "}>
                        {isOpen && (
                            <>
                                {/* Dark backdrop overlay */}
                                <div
                                    className="fixed inset-0 bg-black/40 z-40 transition-all duration-300 ease-in-out"
                                    onClick={() => setIsOpen(false)}
                                    aria-hidden="true"
                                />

                                <BusinessProfileForm
                                    onSave={(data) => {
                                        console.log("Business profile saved:", data)
                                        setIsOpen(false)
                                    }}
                                    onCancel={() => setIsOpen(false)}
                                />
                            </>
                        )}
                    </SidebarProvider>
                </div>
            </div>

              <BusinessVerificationModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        onCancel={handleCancel}
        onProceed={handleProceed}
      />
        </div>
    )
}

export default DashboardContent
