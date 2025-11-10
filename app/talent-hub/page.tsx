"use client"

import { useEffect, useState } from "react"
import { GlassmorphicNavbar } from "@/components/glassmorphic-navbar"
import { TalentHubHero } from "@/components/talent-hub-hero"
import { TalentHubServices } from "@/components/talent-hub-services"
import HeroSection from "@/components/HeroSection"

export default function TalentHub() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Main container */}

      <div className="relative w-full min-h-screen overflow-hidden bg-black">
        {/* Glassmorphic navbar */}
        <GlassmorphicNavbar />
        <HeroSection/>
        
       
      </div>
      
    </>
  )
}