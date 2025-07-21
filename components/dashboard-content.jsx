"use client"

import { useState } from "react"
import { Bell, Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import Sidebar from "./layout/sidebar"

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
              },
              {
                title: "Complete KYC/B",
                description: "Provide some documents to help us keep EnvoyX safe",
                status: "Not started",
                color: "bg-green-100",
                progress: "0%",
              },
              {
                title: "Financing preferences",
                description: "Help us identify you by submitting the basic government issue documents",
                status: "Not started",
                color: "bg-blue-100",
                progress: "0%",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-[#e4e4e7]">
                <div className={`w-16 h-16 ${item.color} rounded-xl mb-4 flex items-center justify-center`}>
                  <div className="w-8 h-8 bg-white rounded-lg"></div>
                </div>
                <h3 className="font-semibold text-[#272635] mb-2">{item.title}</h3>
                <p className="text-sm text-[#5f6057] mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#5f6057]">{item.status}</span>
                  <span className="text-xs text-[#5f6057]">{item.progress}</span>
                </div>
                <div className="w-full bg-[#e4e4e7] rounded-full h-1 mt-2">
                  <div className="bg-[#03a84e] h-1 rounded-full" style={{ width: item.progress }}></div>
                </div>
                <button className="text-[#03a84e] text-sm font-medium mt-3 hover:underline">Preview & start →</button>
              </div>
            ))}
          </div>
        </div>

        {/* Account overview */}
        <div className="bg-white rounded-xl p-6 border border-[#e4e4e7]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-[#272635]">Account overview</h2>
            <div className="flex items-center gap-4 text-sm">
              <select className="border border-[#e4e4e7] rounded-lg px-3 py-1">
                <option>Last 3 months</option>
              </select>
              <select className="border border-[#e4e4e7] rounded-lg px-3 py-1">
                <option>Daily</option>
              </select>
              <select className="border border-[#e4e4e7] rounded-lg px-3 py-1">
                <option>All invoices</option>
              </select>
            </div>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-sm text-[#5f6057] mb-2">Total invoice financed</h3>
            <div className="text-4xl font-bold text-[#272635] mb-2">
              00.0 <span className="text-lg text-[#5f6057]">XOF</span>
            </div>
            <div className="text-sm text-[#5f6057]">
              vs 32,500,650.00 XOF last period <span className="text-red-500">-8.38%</span>
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
