"use client"

import InvoiceHistoryTabs from "@/components/invoices/invoice-history-tabs"
import MetricsCards from "@/components/invoices/metrics-cards"
import Header from "@/components/layout/header"
import Sidebar from "@/components/layout/sidebar"
import { useState } from "react"

export default function InvoiceDashboard() {
  const [activeItem, setActiveItem] = useState("invoices")

  return (
    <div className="flex h-screen bg-[#ffffff]">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      <div className="flex-1 bg-[#F7F7F7] flex flex-col">
        <Header />
        <main className="flex-1 p-8 overflow-auto">
          <MetricsCards />
          <InvoiceHistoryTabs />
        </main>
      </div>
    </div>
  )
}
