"use client"

import { FileText, CreditCard, LogOut, ChevronLeft, Gauge, LineChartIcon as ChartLine } from "lucide-react"
import UserProfile from "../invoices/user-profile"
import Navigation from "../invoices/navigation"
import { usePathname } from "next/navigation"
import Image from "next/image"

export default function Sidebar({ activeItem, setActiveItem }) {
  const pathname = usePathname()
  const isOnboarding = pathname.includes("/on-boarding")
  const navigationItems = [
    { id: "dashboard", label: "Home", icon: Gauge , href: "/dashboard" },
    { id: "invoices", label: "Invoices", icon: FileText,href: "/invoices" },
    { id: "accounts", label: "Accounts", icon: CreditCard, href: "/dashboard" },
    { id: "insights", label: "Insights & Reports", icon: ChartLine, href: "/dashboard" },
  ]

    const navigationItem = [
    { id: "on-boarding", label: "Onboarding", icon: Gauge , href: "/on-boarding" }
  ]

  return (
    <div className="w-76 bg-white border-r border-[#e4e4e7] flex flex-col pb-0 p-6">
      {/* Logo */}
      <div className="pb-4 flex items-center justify-between">        
          <Image src="/darkLogo.svg" alt="Drawer Icon" width={100} height={100} />
          <Image src="/drawer.svg" alt="Drawer Icon" width={20} height={20} />
      </div>

      {/* User Profile - Top */}
    {!isOnboarding &&  <UserProfile name="Accessux Pharmacie" location="Cocody, Abidjan" initials="AP" showChevron={true} />}

      {/* Navigation */}
      <Navigation items={isOnboarding ?navigationItem : navigationItems} activeItem={activeItem} setActiveItem={setActiveItem} />

      {/* User Profile - Bottom */}
           <UserProfile name="Accessux Pharmacie" location="Cocody, Abidjan" initials="AP" showChevron={true} />
      <div className="p-4 border-t border-[#e4e4e7] mt-6">

        <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-black font-medium hover:bg-[#ee6a5f]/10 transition-colors border border-[#e4e4e7] rounded-full w-[fit-content]">
          <LogOut className="w-4 h-4 text-[#ee6a5f]" />
          Logout
        </button>
      </div>
    </div>
  )
}
