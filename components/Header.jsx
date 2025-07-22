const { Phone, Globe, ChevronDown, Headset } = require("lucide-react")

function Header({ variant = "light", showSupport = true }) {
  const isDark = variant === "dark"

  return (
    <header
      className={`px-6 py-4 flex items-center border-b border-[#192517] justify-between ${
        isDark ? "relative z-10" : "bg-white "
      }`}
    >
      <div className="flex items-center gap-2">
        <img
          src={"/logo.svg"}
          alt="Envoy Logo"
        />
      </div>

      <div className={`flex items-center gap-6 ${isDark ? "text-white" : "text-[#272635]"}`}>
        {showSupport && (
          <div className="flex items-center gap-2">
            <span className="text-[#babdb9] text-[14px]">Call support</span>
            <Headset className="w-5 h-5 text-[#03a84e]" strokeWidth={2.5} />
            <span className="">+225-27-21-29-35-27</span>
          </div>
        )}

        <div className="bg-white w-[1px] h-6"></div>
        <div className="flex items-center gap-2">
          <span>English</span>
            <ChevronDown className="w-5 h-5 text-[#03A84E]" strokeWidth={3} />
        </div>
      </div>
    </header>
  )
}

export default Header