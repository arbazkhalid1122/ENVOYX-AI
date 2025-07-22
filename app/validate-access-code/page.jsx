'use client'
import { Check, CircleQuestionMark } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Header from "@/components/Header"

function ValidateAccessCodePage() {
  return (
    <div className="min-h-screen bg-[#081f24] relative overflow-hidden">
      <BackgroundElements />
      <Header variant="dark" />
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)]">
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
    <div className="bg-white rounded-2xl p-16 max-w-xl w-full mx-4 shadow-2xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-medium text-[#081F24] mb-4">Validate your access code</h1>
        <p className="text-[#5f6057] leading-relaxed">
          Access code is way we validate each of our partner financial partner to avoid spam and reduce fraud.
        </p>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4 justify-between">
          <span className="text-[#081F24] text-sm">Provide the 6-digit code sent to your email</span>
            <CircleQuestionMark  className="w-5 h-5 fill-[#03A84E] stroke-white" />
        </div>

        <div className="flex gap-4 mb-6 w-full">
          {[...Array(5)].map((_, i) => (
            <Input
              key={i}
              type="text"
              placeholder="."
              maxLength={1}
              className="flex-1 h-18 text-center text-lg font-semibold border-1 border-[#E4E4E7] rounded-sm shadow-none "
              onChange={(e) => {
                const value = e.target.value
                if (value && i < 5) {
                  const nextInput = e.target.parentElement?.children[i + 1]
                  nextInput?.focus()
                }
              }}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mb-8">
        <button className="text-[#081F24] hover:text-[#03a84e] transition-colors">
          {"Didn't receive any access code?"}
        </button>
        <Button
          className="bg-[#081f24] hover:bg-[#0d2c0d] text-white px-8 py-6 rounded-lg"
          onClick={handleValidate}
          disabled={isLoading}
        >
          {isLoading ? "Validating..." : "Validate"}
        </Button>
      </div>
      <div className="border-t border-[#E4E4E7] my-8" />
      <div className="text-center text-sm text-gray-400 space-y-1 flex justify-center items-center">
        <a href="#" className="hover:text-[#03a84e] ml-1">
          Privacy Policy
        </a>
        <span className="mx-2">|</span>
        <a href="#" className="hover:text-[#03a84e] ml-1">
          Terms of Use
        </a>
        <span className="mx-2">|</span>
        <a href="#" className="hover:text-[#03a84e]">
          Service Provider Agreement
        </a>
      </div>
    </div>
  )
}





 function BackgroundElements() {
  return (
    <div className="absolute inset-0">
      <img
        src="HeroBackgroun1.svg"
        alt="Mountains"
        className="absolute bottom-0 left-0 w-full h-auto object-cover"
      />
    </div>
  )
}