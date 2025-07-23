"use client"

import { CircleIcon as CircleQuestionMark } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Header from "@/components/Header"

function ValidateAccessCodePage() {
  return (
    <div className="min-h-screen bg-[#081f24] relative overflow-hidden">
      <BackgroundElements />
      <Header variant="dark" className="relative z-20" />
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] sm:min-h-[calc(100vh-120px)] px-4 py-4 sm:py-0">
        <ValidationForm />
      </div>
    </div>
  )
}

export default ValidateAccessCodePage

function ValidationForm() {
  const [accessCode, setAccessCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleValidate = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    router.push("/terms-and-conditions")
  }

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-8 lg:p-16 max-w-xl w-full mx-4 shadow-2xl">
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#081F24] mb-3 sm:mb-4">
          Validate your access code
        </h1>
        <p className="text-sm sm:text-base text-[#5f6057] leading-relaxed px-2 sm:px-0">
          <span className="block sm:hidden">Check your email for the code</span>
          <span className="hidden sm:block">
            Access code is way we validate each of our partner financial partner to avoid spam and reduce fraud.
          </span>
        </p>
      </div>

      <div className="mb-6 sm:mb-8">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 justify-between">
          <span className="text-[#081F24] text-xs sm:text-sm">Provide the 6-digit code sent to your email</span>
        <CircleQuestionMark className="w-4 h-4 sm:w-5 sm:h-5 fill-[#03A84E] text-white stroke-white" />
        </div>

        <div className="flex gap-2 sm:gap-4 mb-6 w-full">
          {[...Array(5)].map((_, i) => (
            <Input
              key={i}
              type="text"
              placeholder="."
              maxLength={1}
              className="flex-1 h-12 sm:h-16 lg:h-18 text-center text-base sm:text-lg font-semibold border-1 border-[#E4E4E7] rounded-sm shadow-none"
              onChange={(e) => {
                const value = e.target.value
                if (value && i < 4) {
                  const nextInput = e.target.parentElement?.children[i + 1] 
                  nextInput?.focus()
                }
              }}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8 gap-4 sm:gap-0">
        <button className="text-[#081F24] hover:text-[#03a84e] transition-colors text-sm sm:text-base order-2 sm:order-1">
          {"Didn't receive any access code?"}
        </button>
        <Button
          className="bg-[#081f24] hover:bg-[#0d2c0d] text-white px-6 sm:px-8 py-3 sm:py-6 rounded-lg w-full sm:w-auto order-1 sm:order-2"
          onClick={handleValidate}
          disabled={isLoading}
        >
          {isLoading ? "Validating..." : "Validate"}
        </Button>
      </div>

      <div className="border-t border-[#E4E4E7] my-6 sm:my-8" />

      <div className="text-center text-xs sm:text-sm text-gray-400 space-y-2 sm:space-y-1">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-0">
          <a href="#" className="hover:text-[#03a84e]">
            Privacy Policy
          </a>
          <span className="hidden sm:inline mx-2">|</span>
          <a href="#" className="hover:text-[#03a84e]">
            Terms of Use
          </a>
          <span className="hidden sm:inline mx-2">|</span>
          <a href="#" className="hover:text-[#03a84e]">
            Service Provider Agreement
          </a>
        </div>
      </div>
    </div>
  )
}

function BackgroundElements() {
  return (
    <div className="absolute inset-0">
      <img src="HeroBackgroun1.svg" alt="Mountains" className="absolute bottom-0 left-0 w-full h-auto object-cover" />
    </div>
  )
}
