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
    <div className="w-90 bg-white border-r border-[#E4E4E7] min-h-[calc(100vh-73px)] px-14 pt-24">
      <div className="space-y-4">
        {sections.map((item) => (
          <div
            key={item.num}
            className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer w-[fit-content] ${
              item.num === activeSection ? "text-[#03A84E]" : "text-[#272635]"
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
