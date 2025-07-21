"use client"

export function TermsSidebar({ activeSection = "2" }) {
  const sections = [
    { num: "1", title: "Introduction", active: false },
    { num: "2", title: "User Responsibilities", active: true },
    { num: "3", title: "Platform Usage", active: false },
    { num: "4", title: "Fund Transactions", active: false },
    { num: "5", title: "Termination & Suspension", active: false },
    { num: "6", title: "Liability & Indemnification", active: false },
    { num: "7", title: "Change to Terms", active: false },
  ]

  return (
    <div className="w-80 bg-white border-r border-[#e4e4e7] min-h-[calc(100vh-73px)] p-6">
      <div className="space-y-4">
        {sections.map((item) => (
          <div
            key={item.num}
            className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer ${
              item.num === activeSection ? "bg-[#edfeef] text-[#03a84e]" : "text-[#272635] hover:bg-[#f7f7f7]"
            }`}
          >
            <span className="font-medium">{item.num}.</span>
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
