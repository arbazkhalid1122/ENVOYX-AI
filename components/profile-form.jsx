"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Eye, EyeOff } from "lucide-react"

export function ProfileForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    phoneNumber: "",
    role: "",
    password: "",
    confirmPassword: "",
  })
  const router = useRouter()

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleActivateAccount = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    router.push("/dashboard")
  }

  const handleDoLater = () => {
    router.push("/dashboard")
  }

  return (
    <div className="bg-white rounded-2xl p-12 max-w-2xl w-full shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-[#272635] mb-4">Create contact profile</h1>
        <p className="text-[#5f6057] leading-relaxed">
          Provide basic details to help us identify the contact person for your business
        </p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-[#272635] mb-2">First name</label>
            <Input
              className="w-full border-[#e4e4e7] focus:border-[#03a84e] focus:ring-[#03a84e]"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#272635] mb-2">Last name</label>
            <Input
              className="w-full border-[#e4e4e7] focus:border-[#03a84e] focus:ring-[#03a84e]"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-[#272635] mb-2">Work email</label>
            <Input
              type="email"
              className="w-full border-[#e4e4e7] focus:border-[#03a84e] focus:ring-[#03a84e]"
              value={formData.workEmail}
              onChange={(e) => handleInputChange("workEmail", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#272635] mb-2">Personal phone number</label>
            <div className="flex">
              <div className="flex items-center gap-2 px-3 border border-r-0 border-[#e4e4e7] rounded-l-md bg-[#f7f7f7]">
                <div className="w-6 h-4 bg-orange-500 rounded-sm"></div>
                <span className="text-sm">+225</span>
              </div>
              <Input
                placeholder="123 456 789"
                className="flex-1 border-[#e4e4e7] rounded-l-none focus:border-[#03a84e] focus:ring-[#03a84e]"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#272635] mb-2">What's your role?</label>
          <Select value={formData.role} onValueChange={(value) => handleInputChange("role", value)}>
            <SelectTrigger className="w-full border-[#e4e4e7] focus:border-[#03a84e] focus:ring-[#03a84e]">
              <SelectValue placeholder="Select or create a role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ceo">CEO</SelectItem>
              <SelectItem value="cfo">CFO</SelectItem>
              <SelectItem value="manager">Manager</SelectItem>
              <SelectItem value="accountant">Accountant</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-[#272635] mb-2">Create password</label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                className="w-full border-[#e4e4e7] focus:border-[#03a84e] focus:ring-[#03a84e] pr-12"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#03a84e] hover:text-[#58a942]"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            <button className="text-sm text-[#03a84e] hover:underline mt-1">Hide</button>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#272635] mb-2">Confirm password</label>
            <div className="relative">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                className="w-full border-[#e4e4e7] focus:border-[#03a84e] focus:ring-[#03a84e] pr-12"
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#03a84e] hover:text-[#58a942]"
              >
                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            <button className="text-sm text-[#03a84e] hover:underline mt-1">Hide</button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-12">
        <Button variant="outline" className="px-8 bg-transparent" onClick={handleDoLater}>
          Do this later
        </Button>
        <Button
          className="bg-[#081f24] hover:bg-[#0d2c0d] text-white px-8"
          onClick={handleActivateAccount}
          disabled={isLoading}
        >
          {isLoading ? "Activating..." : "Activate your account"}
        </Button>
      </div>
    </div>
  )
}
