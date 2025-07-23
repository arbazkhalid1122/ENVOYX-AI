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
       
        router.push("/validate-access-code")
    }

    return (
        <div className="bg-white rounded-2xl p-4 sm:p-8 lg:p-16 max-w-xl w-full mx-4 shadow-2xl">
            <div className="text-center mb-6 sm:mb-8">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#081F24] mb-3 sm:mb-4">
                    Sign in to your account 👋
                </h1>
                <p className="text-sm sm:text-base text-[#5f6057] leading-relaxed px-2 sm:px-0">
                    <span className="block text-[#03A84E] text-xl">Continue to EnvoyX</span>
                </p>
            </div>
            <div className="mb-4">
                <label className="block text-sm text-[#272635] mb-2">Work email</label>
                <Input
                    type="text"
                    placeholder="Enter your work email"
                    className="w-full border-[#e4e4e7] focus:border-[#03a84e] focus:ring-[#03a84e] p-4 sm:p-6"
                    value=''
                />
            </div>
            <div>
                <label className="block text-sm text-[#272635] mb-2">Password</label>
                <Input
                    type="password"
                    placeholder="Enter your Password"
                    className="w-full border-[#e4e4e7] focus:border-[#03a84e] focus:ring-[#03a84e] p-4 sm:p-6"
                    value=''
                />
            </div>


            <div className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8 gap-4 sm:gap-0 mt-6 sm:mt-8">
                <Button
                    variant="default"
                    size="lg"
                    className="bg-white text-base text-black p-4 sm:p-6 rounded-lg w-full sm:w-auto order-1 sm:order-2 shadow-sm hover:bg-white"
                >
                    Forgot Password?
                </Button>
                <Button
                    onClick={handleValidate}
                    variant="default"
                    size="lg"
                    className="bg-[#081f24] text-base hover:bg-[#0d2c0d] text-white p-4 sm:p-6 rounded-lg w-full sm:w-auto order-1 sm:order-2 shadow-sm"
                >
                    Login to your account
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
