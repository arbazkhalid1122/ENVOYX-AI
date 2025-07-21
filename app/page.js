"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Home, FileText, CreditCard, BarChart3, Search, Bell, LogOut, ChevronLeft, Command, Image, ChevronsUpDown, Gauge, ChartLine, File, AlertCircle, ExternalLink, CheckCircle2 } from "lucide-react"
import drawer from "@/public/drawer.svg"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Filter, ArrowUpDown, Infinity } from "lucide-react"
export default function Component() {
  const [activeItem, setActiveItem] = useState("invoices")

  const navigationItems = [
    { id: "home", label: "Home", icon: Gauge },
    { id: "invoices", label: "Invoices", icon: FileText },
    { id: "accounts", label: "Accounts", icon: CreditCard },
    { id: "insights", label: "Insights & Reports", icon: ChartLine  },
  ]

  return (
    <div className="flex h-screen bg-[#ffffff]">
      {/* Sidebar */}
      <div className="w-76 bg-white border-r border-[#e4e4e7] flex flex-col p-6">
        {/* Logo */}
        <div className="pb-4">
          <div className="flex items-center gap-2 justify-between">
            <div className="flex items-center gap-2">
            <div className="text-xl font-bold text-[#081F24]">ENVOY</div>
            <div className="w-2 h-2 bg-[#03A84E] rounded-full"></div>
            </div>
            <img src="/drawer.svg" alt="Drawer Icon" />

          </div>
        </div>

        {/* User Profile - Top */}
        <div className="border border-[#e4e4e7] rounded-lg">
          <div className="flex p-4 items-center gap-3">
            <Avatar className="w-10 h-10">
              <AvatarFallback className="text-[#03A84E] bg-[#0E363F0F] text-md font-medium">AP</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
              <div className="text-sm text-[#000000] truncate">Accessux Pharmacie</div>
            <ChevronsUpDown className="w-4 h-4 text-[#61c454]" />
              </div>
              <div className="text-xs text-[#a1a1aa] truncate">Cocody, Abidjan</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4">
          <ul className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon
              const isActive = activeItem === item.id
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveItem(item.id)}
                    style={{
                      boxShadow: isActive ?'rgba(17, 17, 26, 0.05) 0px 1px 0px, #081F2426 0px 0px 2px':'none',
                    }}
                    className={`w-full flex items-center text-[#081F24] gap-3 px-4 py-4 rounded-lg text-sm transition-colors ${
                      isActive ? "bg-[#F7F7F7]" : "hover:bg-[#F7F7F7]"
                    }`}
                  >
                     <Icon className={`w-4 h-4 ${isActive ? " text-[#03A84E]" : "text-black"}`} />
                    {item.label}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>

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

      {/* Main Content */}
      <div className="flex-1 bg-[#F7F7F7] flex flex-col">
        {/* Header */}
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
                  className="pl-10 pr-12 w-64 h-[40px] bg-white border-none"
                  style={{ boxShadow: 'none' }}
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1 text-xs text-[#a1a1aa]">
                  <Command className="w-3 h-3" />
                  <span>K</span>
                </div>
              </div>

              {/* Notification */}
              <Button variant="ghost" size="icon" className="text-[#ffcb37] bg-white h-10">
                <Bell/>
              </Button>

              {/* Finance New Invoice Button */}
              <Button className="bg-[#081f24] hover:bg-[#0e363f] text-white px-6 h-10">Finance New Invoice <File size={20} /></Button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        {/* <main className="flex-1 flex items-center justify-center p-8">
          <div className="text-center max-w-md flex flex-col items-center">
          <img src='/document.svg' alt="Drawer Icon" className="w-30 mb-4" />
            <p className="text-[#49454f] text-base leading-relaxed">
              Start increasing your business cashflow by submitting your first invoice for instant settlement within
              24hours.
            </p>
          </div>
        </main> */}
            {/* Main Content Area */}
        <main className="flex-1 p-8 overflow-auto">
          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-[#e4e4e7]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-[#000000]">13</span>
                  <Infinity className="w-5 h-5 text-[#61c454]" />
                </div>
                <p className="text-sm text-[#a1a1aa]">Your pending invoices</p>
              </CardContent>
            </Card>

            <Card className="border-[#e4e4e7]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-[#000000]">13</span>
                  <div className="text-xs text-[#a1a1aa]">...</div>
                </div>
                <p className="text-sm text-[#a1a1aa] mb-1">Invoices rejected</p>
                <p className="text-xs text-[#a1a1aa]">0% vs last month</p>
              </CardContent>
            </Card>

            <Card className="border-[#e4e4e7]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-[#000000]">7</span>
                  <AlertCircle className="w-5 h-5 text-[#ee6a5f]" />
                </div>
                <p className="text-sm text-[#a1a1aa] mb-1">Invoices to resolve</p>
                <p className="text-xs text-[#a1a1aa] mb-2">3.8% vs last month</p>
                <button className="text-xs text-[#000000] hover:text-[#61c454] flex items-center gap-1">
                  Resolve invoices
                  <ExternalLink className="w-3 h-3" />
                </button>
              </CardContent>
            </Card>

            <Card className="border-[#e4e4e7]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-[#000000]">7</span>
                  <CheckCircle2 className="w-5 h-5 text-[#61c454]" />
                </div>
                <p className="text-sm text-[#a1a1aa] mb-1">Processed invoices</p>
                <p className="text-xs text-[#a1a1aa]">0% vs last month</p>
              </CardContent>
            </Card>
          </div>

          {/* Invoice History Section */}
          <div className="bg-[#ffffff] rounded-lg border border-[#e4e4e7]">
            <div className="p-6 border-b border-[#e4e4e7]">
              <h2 className="text-lg font-semibold text-[#000000] mb-1">Invoice history</h2>
              <p className="text-sm text-[#a1a1aa]">Showing activities on the invoices submitted for financing</p>
            </div>

            <Tabs defaultValue="pending" className="w-full">
              <div className="flex items-center justify-between bg-[#FAFAFA] px-6 py-4 border-b border-[#e4e4e7]">
                <TabsList className="bg-transparent p-0 h-auto">
                  <TabsTrigger
                    value="pending"
                    className="bg-white rounded-none px-4 py-2"
                  >
                    Pending
                  </TabsTrigger>
                  <TabsTrigger
                    value="progress"
                    className="bg-white rounded-none px-4 py-2"
                  >
                    In progress
                  </TabsTrigger>
                  <TabsTrigger
                    value="resolve"
                    className="bg-white rounded-none px-4 py-2"
                  >
                    Resolve
                  </TabsTrigger>
                  <TabsTrigger
                    value="processed"
                    className="bg-white rounded-none px-4 py-2"
                  >
                    Processed
                  </TabsTrigger>
                  <TabsTrigger
                    value="rejected"
                    className="bg-white rounded-none px-4 py-2"
                  >
                    Rejected
                  </TabsTrigger>
                </TabsList>

                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#a1a1aa]" />
                    <Input
                      placeholder="Search"
                      className="pl-10 pr-12 w-64 bg-[#f7f7f7] border-[#e4e4e7] focus:border-[#61c454] focus:ring-[#61c454]"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1 text-xs text-[#a1a1aa]">
                      <Command className="w-3 h-3" />
                      <span>K</span>
                    </div>
                  </div>
                  <Button variant="outline" className="border-[#e4e4e7] text-[#49454f] bg-transparent">
                    <Filter className="w-4 h-4 mr-2" />
                    Filters
                  </Button>
                </div>
              </div>

              <TabsContent value="pending" className="mt-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-b border-[#e4e4e7]">
                        <TableHead className="text-[#49454f] font-medium p-6">
                          <button className="flex items-center gap-1 hover:text-[#000000]">
                            Insured ID
                            <ArrowUpDown className="w-3 h-3" />
                          </button>
                        </TableHead>
                        <TableHead className="text-[#49454f] font-medium">
                          <button className="flex items-center gap-1 hover:text-[#000000]">
                            Date created
                            <ArrowUpDown className="w-3 h-3" />
                          </button>
                        </TableHead>
                        <TableHead className="text-[#49454f] font-medium">
                          <button className="flex items-center gap-1 hover:text-[#000000]">
                            Submission date
                            <ArrowUpDown className="w-3 h-3" />
                          </button>
                        </TableHead>
                        <TableHead className="text-[#49454f] font-medium">Payment provider</TableHead>
                        <TableHead className="text-[#49454f] font-medium">
                          <button className="flex items-center gap-1 hover:text-[#000000]">
                            Amount Paid
                            <ArrowUpDown className="w-3 h-3" />
                          </button>
                        </TableHead>
                        <TableHead className="text-[#49454f] font-medium">
                          <button className="flex items-center gap-1 hover:text-[#000000]">
                            Status
                            <ArrowUpDown className="w-3 h-3" />
                          </button>
                        </TableHead>
                        <TableHead className="text-[#49454f] font-medium">
                          <button className="flex items-center gap-1 hover:text-[#000000]">
                            Invoice reference
                            <ArrowUpDown className="w-3 h-3" />
                          </button>
                        </TableHead>
                        <TableHead className="w-12"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { date: "Dec 1, 2025", provider: "ASCOMA" },
                        { date: "Nov 1, 2025", provider: "MCI" },
                        { date: "Oct 1, 2025", provider: "ASCOMA" },
                        { date: "Sep 1, 2025", provider: "VITALIS ASANTE" },
                        { date: "Aug 1, 2025", provider: "ASCOMA" },
                        { date: "Aug 1, 2025", provider: "ASCOMA" },
                        { date: "Aug 1, 2025", provider: "MCI" },
                        { date: "Aug 1, 2025", provider: "ASCOMA" },
                      ].map((row, index) => (
                        <TableRow key={index} className="border-b border-[#e4e4e7] hover:bg-[#f7f7f7]">
                          <TableCell className="font-medium text-[#000000] p-6">AS-127GH673</TableCell>
                          <TableCell className="text-[#49454f]">{row.date}</TableCell>
                          <TableCell className="text-[#49454f]">{row.date}</TableCell>
                          <TableCell className="text-[#49454f]">{row.provider}</TableCell>
                          <TableCell className="text-[#49454f]">
                            100.000 <span className="text-[#a1a1aa]">XOF</span>
                          </TableCell>
                          <TableCell>
                            <Badge variant="secondary" className="bg-[#f7f7f7] text-[#49454f] hover:bg-[#f7f7f7]">
                              Processing
                            </Badge>
                          </TableCell>
                          <TableCell className="text-[#49454f]">#61092</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="icon" className="w-8 h-8">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center gap-4 p-6 border-t border-[#e4e4e7]">
                  <Button variant="outline" className="border-[#e4e4e7] text-[#49454f] bg-transparent">
                    Previous
                  </Button>
                  <Button variant="outline" className="border-[#e4e4e7] text-[#49454f] bg-transparent">
                    Next
                  </Button>
                </div>
              </TabsContent>

              {/* Other tab contents would be similar */}
              <TabsContent value="progress" className="mt-0">
                <div className="p-8 text-center text-[#a1a1aa]">No invoices in progress</div>
              </TabsContent>

              <TabsContent value="resolve" className="mt-0">
                <div className="p-8 text-center text-[#a1a1aa]">No invoices to resolve</div>
              </TabsContent>

              <TabsContent value="processed" className="mt-0">
                <div className="p-8 text-center text-[#a1a1aa]">No processed invoices</div>
              </TabsContent>

              <TabsContent value="rejected" className="mt-0">
                <div className="p-8 text-center text-[#a1a1aa]">No rejected invoices</div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
      
    </div>
  )
}
