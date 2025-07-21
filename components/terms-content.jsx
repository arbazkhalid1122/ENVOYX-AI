"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export function TermsContent() {
  const router = useRouter()

  const handleAcceptTerms = () => {
    router.push("/create-profile")
  }

  const handleDecline = () => {
    router.push("/validate-access-code")
  }

  return (
    <div className="flex-1 p-8">
      <div className="max-w-4xl">
        <h1 className="text-3xl font-semibold text-[#272635] mb-2">
          Read and agree the EnvoyX fund manager terms of service
        </h1>
        <p className="text-[#5f6057] mb-8">Last updated: 30th March, 2025.</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-[#272635] mb-4">7.1 Introduction</h2>
            <p className="text-[#272635] leading-relaxed">
              By using the EnvoyX Financial Manager Platform, you agree to comply with these Terms of Service ("Terms").
              These Terms govern your access to and use of the platform, including all features, functionalities, and
              services provided
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#03a84e] mb-4">7.2 User Responsibilities</h2>
            <ul className="space-y-2 text-[#272635]">
              <li>• Users must provide accurate and complete information during onboarding.</li>
              <li>• Users are responsible for maintaining the security of their accounts.</li>
              <li>• Users must comply with all applicable financial regulations and compliance requirements.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#272635] mb-4">7.3 Platform Usage</h2>
            <ul className="space-y-2 text-[#272635]">
              <li>
                • EnvoyX facilitates invoice verification and financial transactions but does not guarantee the
                creditworthiness of invoices.
              </li>
              <li>
                • Any financial decisions based on the platform's verification results are the sole responsibility of
                the financial institution.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#272635] mb-4">7.4 Fund Transactions</h2>
            <ul className="space-y-2 text-[#272635]">
              <li>• All transactions made via the platform are subject to verification and approval workflows.</li>
              <li>• Users must ensure sufficient funds in their EnvoyX wallets before approving payments.</li>
              <li>
                • EnvoyX is not liable for any financial losses incurred due to user decisions or fraudulent invoices.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#272635] mb-4">7.5 Termination & Suspension</h2>
            <ul className="space-y-2 text-[#272635]">
              <li>• EnvoyX reserves the right to suspend or terminate access to any user violating these Terms.</li>
              <li>• Financial institutions may request account closure by providing written notice.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#272635] mb-4">7.6 Liability & Indemnification</h2>
            <ul className="space-y-2 text-[#272635]">
              <li>• EnvoyX is not responsible for financial losses resulting from misinterpretation of data.</li>
              <li>
                • Users agree to indemnify EnvoyX against any claims, liabilities, or damages arising from their use of
                the platform.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#272635] mb-4">7.7 Changes to Terms</h2>
            <p className="text-[#272635] leading-relaxed">
              EnvoyX reserves the right to modify these Terms at any time. Users will be notified of significant
              changes.
            </p>
          </section>
        </div>

        <div className="mt-12 p-4 bg-[#f7f7f7] rounded-lg">
          <p className="text-sm text-[#5f6057] mb-4">
            By continuing you agree to EnvoyX{" "}
            <a href="#" className="text-[#03a84e] hover:underline">
              Terms of Service and Privacy Policy
            </a>
            .
          </p>
          <div className="flex gap-4">
            <Button variant="outline" className="px-8 bg-transparent" onClick={handleDecline}>
              Decline
            </Button>
            <Button className="bg-[#081f24] hover:bg-[#0d2c0d] text-white px-8" onClick={handleAcceptTerms}>
              Accept & proceed
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
