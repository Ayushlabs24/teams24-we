"use client";

export function GlassmorphicNavbar() {
  return (
    <nav
      className="
        fixed 
        top-8 left-8 right-8
        z-[9999]
        rounded-[48px]
        border border-white/20
        backdrop-blur-[40px]
        bg-[#13131333]
        flex items-center justify-between
        px-8 py-4
        shadow-[0_8px_32px_rgba(0,0,0,0.25)]
      "
      style={{
        WebkitBackdropFilter: "blur(40px)",
      }}
    >
      {/* Left Section - Logo */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-sm font-bold text-black">
          ⊗
        </div>
        <span className="text-white font-semibold text-lg tracking-wide">
          Your Dream Team
        </span>
      </div>

      {/* Center Nav Items */}
      <div className="hidden lg:flex items-center gap-8">
        <a href="#" className="text-white/90 hover:text-white transition text-sm font-medium">
          Your Dream Team
        </a>
        <a href="#" className="text-white/90 hover:text-white transition text-sm font-medium">
          What we do
        </a>
        <a href="#" className="text-white/90 hover:text-white transition text-sm font-medium">
          How it works
        </a>
        <a href="#" className="text-white/90 hover:text-white transition text-sm font-medium">
          Services
        </a>
        <a href="#" className="text-white/90 hover:text-white transition text-sm font-medium">
          Careers
        </a>
      </div>

      {/* Right Section - CTA */}
      <button
        className="
          bg-white text-black 
          px-6 py-2 
          rounded-full 
          font-semibold 
          hover:bg-gray-200 
          transition-all duration-300
          text-sm
        "
      >
        Get in touch
      </button>
    </nav>
  );
}