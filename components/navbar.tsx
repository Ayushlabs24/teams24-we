"use client";

export function Navbar() {
  return (
    <nav
      className="
        fixed 
        top-[32px] left-[50px] 
        w-[1287px] h-[96px]
        z-[9999]
        rounded-[72px]
        border border-white/20
        backdrop-blur-[44px]
        bg-[#13131333]
        flex items-center justify-between
        px-10
        shadow-[0_8px_32px_rgba(0,0,0,0.25)]
      "
      style={{
        // Extra safety for the blur and transparent color
        WebkitBackdropFilter: "blur(44px)",
      }}
    >
      {/* Left Section - Logo */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-sm font-bold text-black">
          ⊗
        </div>
        <span className="text-white font-semibold text-lg tracking-wide">
          Teams24
        </span>
      </div>

      {/* Center Nav Items */}
      <div className="hidden md:flex items-center gap-10">
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
