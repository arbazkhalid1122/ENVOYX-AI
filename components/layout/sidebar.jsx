"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FileText, CreditCard, LogOut, ChevronLeft, Image, Gauge, LineChartIcon as ChartLine } from "lucide-react"
import UserProfile from "../invoices/user-profile"
import Navigation from "../invoices/navigation"

export default function Sidebar({ activeItem, setActiveItem }) {
  const navigationItems = [
    { id: "home", label: "Home", icon: Gauge },
    { id: "invoices", label: "Invoices", icon: FileText },
    { id: "accounts", label: "Accounts", icon: CreditCard },
    { id: "insights", label: "Insights & Reports", icon: ChartLine },
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
      <div className="p-4 border-t border-[#e4e4e7]">
        <div className="flex items-center gap-3 mb-4">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback className="bg-[#f5bd4f] text-white text-sm font-medium">AK</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-[#000000] truncate">Assi Konate</div>
            <div className="text-xs text-[#a1a1aa] truncate">Risk Analyst</div>
          </div>
          <ChevronLeft className="w-4 h-4 text-[#a1a1aa] rotate-90" />
        </div>
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-[#ee6a5f] hover:bg-[#ee6a5f]/10 transition-colors">
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </div>
  )
}
