"use client"
import { ArrowLeft, ChevronsLeft, User, Building, Banknote, FileText, Users, Bell, Shield, LogOut } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { Sidebar as SidebarPrimitive, SidebarContent, SidebarHeader, SidebarFooter } from "@/components/ui/sidebar"
import { signOut } from "next-auth/react"
import Image from "next/image"

export default function SettingsSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const navigationSections = [
    {
      title: "GENERAL",
      items: [
        { id: "contact-person", label: "Contact Person", icon: User, href: "/account-mangment/contact-person" },
        { id: "company-setup", label: "Company Setup", icon: Building, href: "/account-mangment/company-setup" },
      ]
    },
    {
      title: "FINANCE",
      items: [
        { id: "banks", label: "Banks", icon: Banknote, href: "/account-mangment/banks" },
        { id: "invoice-preferences", label: "Invoice preferences", icon: FileText, href: "/account-mangment/invoice-preferences" },
      ]
    },
    {
      title: "ACCOUNT MANAGEMENT",
      items: [
        { id: "team-members", label: "Team members", icon: Users, href: "/account-mangment/team-members" },
        { id: "notifications", label: "Notifications", icon: Bell, href: "/account-mangment/notifications" },
        { id: "security", label: "Security", icon: Shield, href: "/account-mangment/security" },
      ]
    }
  ]

  const isActive = (href) => pathname === href

  return (
    <SidebarPrimitive className="w-76 bg-white border-r border-[#e4e4e7] " style={{ backgroundColor: "white" }}>
      <SidebarHeader className="p-6 pb-4 bg-white">
        {/* Header with back arrow and collapse button */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => router.back()}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <span className="font-semibold text-lg">Settings</span>
          </div>
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronsLeft className="w-5 h-5" />
          </button>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-6 flex-1 bg-white">
        {/* Navigation Sections */}
        <div className="space-y-6">
          {navigationSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                {section.title}
              </h3>
              <div className="space-y-1">
                {section.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => router.push(item.href)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "bg-green-50 text-green-700"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* User Profile Card */}
        <div className="mt-auto mb-4">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
              <span className="text-orange-600 font-semibold">A</span>
            </div>
            <div className="flex-1">
              <div className="font-medium text-sm">Assi Konate</div>
              <div className="flex items-center gap-1 text-xs text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Risk Analyst
              </div>
            </div>
            <button className="p-1 hover:bg-gray-200 rounded">
              {/* <ChevronUpDown className="w-4 h-4 text-gray-500" /> */}
            </button>
          </div>
        </div>
      </SidebarContent>

      <SidebarFooter className="p-6 bg-white">
        <div className="border-t border-[#e4e4e7] pt-6">
          <button
            onClick={() => signOut({ callbackUrl: '/sign-in' })}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-black font-medium hover:bg-[#ee6a5f]/10 transition-colors border border-[#e4e4e7] rounded-full w-[fit-content]"
          >
            <LogOut className="w-4 h-4 text-[#ee6a5f]" />
            Logout
          </button>
        </div>
      </SidebarFooter>
    </SidebarPrimitive>
  )
}
