"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Bell, Command, File } from "lucide-react"

export default function Header() {
  return (
    <header className="px-8 py-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-[#000000] mb-1">Invoices</h1>
          <p className="text-sm text-[#000000]">Increase cashflow with your invoices</p>
        </div>
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#a1a1aa]" />
            <Input
              placeholder="Search"
              className="pl-10 pr-12 w-84 h-[40px] bg-white border-none"
              style={{ boxShadow: "none" }}
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1 text-xs text-[#a1a1aa]">
              <Command className="w-3 h-3" />
              <span>K</span>
            </div>
          </div>

          {/* Notification */}
          <Button variant="ghost" size="icon" className="text-[#ffcb37] bg-white h-10">
<Bell className="fill-[#ffcb37] stroke-[#ffcb37]" />
          </Button>

          {/* Finance New Invoice Button */}
          <Button className="bg-[#081f24] hover:bg-[#0e363f] text-white px-6 h-10">
            Finance New Invoice <File size={20} />
          </Button>
        </div>
      </div>
    </header>
  )
}
