"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FileText, CreditCard, LogOut, ChevronLeft, Image, Gauge, LineChartIcon as ChartLine } from "lucide-react"
import UserProfile from "../invoices/user-profile"
import Navigation from "../invoices/navigation"

export default function Sidebar({ activeItem, setActiveItem }) {
  const navigationItems = [
    { id: "dashboard", label: "Home", icon: Gauge , href: "/dashboard" },
    { id: "invoices", label: "Invoices", icon: FileText,href: "/invoices" },
    { id: "accounts", label: "Accounts", icon: CreditCard, href: "/dashboard" },
    { id: "insights", label: "Insights & Reports", icon: ChartLine, href: "/dashboard" },
  ]

  return (
    <div className="w-76 bg-white border-r border-[#e4e4e7] flex flex-col p-6">
      {/* Logo */}
      <div className="pb-4">
        <div className="flex items-center gap-2 justify-between">
          <div className="flex items-center gap-2">
            <div className="text-xl font-bold text-[#081F24]">ENVOY</div>
            <div className="w-2 h-2 bg-[#03A84E] rounded-full"></div>
          </div>
          <Image src="/drawer.svg" alt="Drawer Icon" />
        </div>
      </div>

      {/* User Profile - Top */}
      <UserProfile name="Accessux Pharmacie" location="Cocody, Abidjan" initials="AP" showChevron={true} />

      {/* Navigation */}
      <Navigation items={navigationItems} activeItem={activeItem} setActiveItem={setActiveItem} />

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
