import { TermsSidebar } from "@/components/terms-sidebar"
import { TermsContent } from "@/components/terms-content"
import Header from "@/components/Header"

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <Header variant="light" showSupport={false} />
      <div className="flex px-30 py-10">
        <TermsSidebar />
        <TermsContent />
      </div>
    </div>
  )
}
