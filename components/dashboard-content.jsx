"use client"

import { useState } from "react"
import { Bell, MoreHorizontal, MoveUpRight, Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import Sidebar from "./layout/sidebar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Button } from "./ui/button"

export function DashboardContent() {
  const [showProfileHelp, setShowProfileHelp] = useState(true)

  return (
    <div className="min-h-screen bg-[#f7f7f7] flex">
      <Sidebar />
      <div>
      {/* Header */}
      <header className="bg-white border-b border-[#e4e4e7] px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-[#272635] flex items-center gap-2">Hello Assi 👋</h1>
          <p className="text-sm text-[#5f6057]">Increase cashflow with your invoices</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#5f6057]" />
            <Input
              placeholder="Search"
              className="pl-10 w-64 border-[#e4e4e7] focus:border-[#03a84e] focus:ring-[#03a84e]"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#5f6057]">⌘K</span>
          </div>
          <Bell className="w-5 h-5 text-[#5f6057]" />
        </div>
      </header>

      {/* Dashboard content */}
      <div className="p-6 space-y-6">
        {/* Account setup */}
        <div>
          <h2 className="text-lg font-semibold text-[#272635] mb-4">Complete your account setup</h2>
          <div className="grid grid-cols-3 gap-6">
            {[
              {
                title: "Setup your business profile",
                description: "Pre-fill your business information to get started",
                status: "Not started",
                color: "bg-purple-100",
                progress: "0%",
                src:'/Frame.svg'
              },
              {
                title: "Complete KYC/B",
                description: "Provide some documents to help us keep EnvoyX safe",
                status: "Not started",
                color: "bg-green-100",
                progress: "0%",
                src:'/Frame1.svg'

              },
              {
                title: "Financing preferences",
                description: "Help us identify you by submitting the basic government issue documents",
                status: "Not started",
                color: "bg-blue-100",
                progress: "0%",
                src:'/Frame2.svg'

              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-[#e4e4e7]">
                {/* <div className={`w-16 h-16 ${item.color} rounded-xl mb-4 flex items-center justify-center`}>
                  <div className="w-8 h-8 bg-white rounded-lg"></div>
                </div> */}
                <img src={item?.src} alt="" className="mb-12" />
                <h3 className="font-semibold text-[#272635] mb-2">{item.title}</h3>
                <p className="text-sm mb-4">{item.description}</p>
                {index === 0 && <button className="text-[#03a84e] text-sm underline flex items-center gap-1">Preview & sign <MoveUpRight className="h-3 w-3"/></button>}
              </div>
            ))}
          </div>
        </div>

        {/* Account overview */}
        <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Account overview</h2>
              <p className="text-sm text-gray-500">Showing total visitors for the last 3 months</p>
            </div>
            <div className="flex items-center gap-3">
              <Select defaultValue="last-3-months">
                <SelectTrigger className="w-auto border-gray-200 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="last-3-months">Last 3 months</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="daily">
                <SelectTrigger className="w-auto border-gray-200 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all-invoices">
                <SelectTrigger className="w-auto border-gray-200 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-invoices">All invoices</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Main Metric */}
          <div className="text-center mb-12">
            <h3 className="text-sm text-gray-500 mb-3">Total invoice financed</h3>
            <div className="mb-3">
              <span className="text-5xl font-bold text-gray-900">00.0</span>
              <span className="text-lg text-gray-400 ml-2">XOF</span>
            </div>
            <div className="text-sm text-gray-500">
              vs. <span className="text-gray-700">32,500,650.00 XOF</span> last period{" "}
              <span className="text-green-600 font-medium">+38.7%</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 mb-8">
            {[
              {
                title: "Pending Invoices",
                value: "00.0",
                unit: "XOF",
                subtitle: "0% vs last month",
                pending: "0 pending invoices",
              },
              {
                title: "Rejected Invoices",
                value: "00.0",
                unit: "XOF",
                subtitle: "0% vs last month",
                pending: "0 rejected invoices",
              },
              {
                title: "Paid Invoices",
                value: "00.0",
                unit: "XOF",
                subtitle: "0% vs last month",
                pending: "You've received 0 invoices daily paid so far",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h4 className="text-sm text-[#5f6057] mb-2">{item.title}</h4>
                <div className="text-2xl font-bold text-[#272635] mb-1">
                  {item.value} <span className="text-sm text-[#5f6057]">{item.unit}</span>
              </div>
                <div className="text-xs text-[#5f6057] mb-2">{item.subtitle}</div>
                <div className="text-xs text-[#5f6057]">{item.pending}</div>
              </div>
            ))}
        </div>
      </div>

        {/* Profile completion help */}
        {showProfileHelp && (
          <div className="bg-white rounded-xl p-6 border border-[#e4e4e7] relative">
            <button
              onClick={() => setShowProfileHelp(false)}
              className="absolute top-4 right-4 text-[#5f6057] hover:text-[#272635]"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-[#f7f7f7] rounded-xl flex items-center justify-center">
                <div className="w-8 h-8 bg-[#e4e4e7] rounded"></div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-[#272635] mb-2">Having trouble completing your profile?</h3>
                <p className="text-sm text-[#5f6057] mb-4">
                  If you're having trouble with completing your profile, kindly reach out to one of our amazing humans
                  at EnvoyX to give you a helping hand. We really want you and your business to win.
                </p>
                <button className="text-[#03a84e] text-sm font-medium hover:underline">Contact support →</button>
              </div>
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  )
}
