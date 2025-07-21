const { Phone, Globe, ChevronDown } = require("lucide-react")

function Header({ variant = "light", showSupport = true }) {
  const isDark = variant === "dark"

  return (
    <header
      className={`px-6 py-4 flex items-center justify-between ${
        isDark ? "relative z-10" : "bg-white border-b border-[#e4e4e7]"
      }`}
    >
      <div className="flex items-center gap-2">
        <div className={`text-2xl font-bold ${isDark ? "text-white" : "text-[#272635]"}`}>ENVOY</div>
        <div className="w-6 h-6 bg-[#03a84e] rounded-full flex items-center justify-center">
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
      </div>

      <div className={`flex items-center gap-6 ${isDark ? "text-white" : "text-[#272635]"}`}>
        {showSupport && (
          <div className="flex items-center gap-2">
            <span>Call support</span>
            <Phone className="w-4 h-4 text-[#03a84e]" />
            <span className="text-[#03a84e]">+225-27-21-29-35-27</span>
          </div>
        )}
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4" />
          <span>English</span>
          {variant === "light" ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <div className="w-2 h-2 bg-[#03a84e] rounded-full"></div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header