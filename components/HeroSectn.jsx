"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const cards = [
  {
    img: "/engineer.jpg",
    subtitle: "Specflicks",
    title: "Hire a Full-Stack Engineer in 2 weeks",
    tag: "5X Faster to hire",
  },
  {
    img: "/designer.jpg",
    subtitle: "PixelWorld",
    title: "UI/UX Designers ready in 10 days",
    tag: "80% Interview rate",
  },
  {
    img: "/marketer.jpg",
    subtitle: "Brandify",
    title: "Hire Digital Marketers instantly",
    tag: "Top Rated Talent",
  },
]

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // 🔁 Auto slide every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  // Get circular index (so that items repeat seamlessly)
  const getCircularIndex = (index) => {
    return (index + cards.length) % cards.length
  }

  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 bg-[#080808] text-white overflow-hidden">
      {/* LEFT TEXT */}
      <div className="flex-1 max-w-xl space-y-6 mt-20 lg:mt-0 text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
          Flexibility of a freelancer <br /> with commitment of an employee
        </h1>
        <p className="text-gray-300 text-lg">
          Hiring can be as easier as shopping
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-4">
          <button className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transition">
            Build your team
          </button>
          <p className="text-sm text-gray-400">☎️ Book a free discovery call</p>
        </div>
      </div>

      {/* RIGHT SIDE - CAROUSEL */}
      <div className="flex-1 w-full mt-16 lg:mt-0 flex justify-center lg:justify-end">
        {/* 🖥️ Desktop (Vertical auto-scaling) */}
        <div className="hidden lg:flex flex-col items-center justify-center relative h-[550px] w-[350px] overflow-hidden">
          {cards.map((card, i) => {
            const circularIndex = getCircularIndex(i - currentIndex)
            let y = 0
            let scale = 1
            let opacity = 1
            let zIndex = 10

            if (circularIndex === 0) {
              y = -200
              scale = 0.85
              opacity = 0.5
              zIndex = 1
            } else if (circularIndex === 1) {
              y = 0
              scale = 1.1
              opacity = 1
              zIndex = 10
            } else if (circularIndex === 2) {
              y = 200
              scale = 0.85
              opacity = 0.5
              zIndex = 1
            }

            return (
              <motion.div
                key={i}
                animate={{ y, scale, opacity, zIndex }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute w-[300px] h-[380px] rounded-3xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/10 shadow-2xl"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-sm opacity-80">{card.subtitle}</p>
                  <h3 className="text-lg font-semibold max-w-[200px]">
                    {card.title}
                  </h3>
                </div>
                <span className="absolute top-4 right-4 text-xs bg-white/20 px-3 py-1 rounded-full backdrop-blur-md">
                  {card.tag}
                </span>
              </motion.div>
            )
          })}
        </div>

        {/* 📱 Mobile/Tablet (Horizontal auto-scaling) */}
        <div className="flex lg:hidden items-center justify-center relative w-full h-[420px] overflow-hidden">
          {cards.map((card, i) => {
            const circularIndex = getCircularIndex(i - currentIndex)
            let x = 0
            let scale = 1
            let opacity = 1
            let zIndex = 10

            if (circularIndex === 0) {
              x = -200
              scale = 0.85
              opacity = 0.5
              zIndex = 1
            } else if (circularIndex === 1) {
              x = 0
              scale = 1.1
              opacity = 1
              zIndex = 10
            } else if (circularIndex === 2) {
              x = 200
              scale = 0.85
              opacity = 0.5
              zIndex = 1
            }

            return (
              <motion.div
                key={i}
                animate={{ x, scale, opacity, zIndex }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute w-[270px] h-[360px] rounded-3xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/10 shadow-xl"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-sm opacity-80">{card.subtitle}</p>
                  <h3 className="text-lg font-semibold max-w-[200px]">
                    {card.title}
                  </h3>
                </div>
                <span className="absolute top-4 right-4 text-xs bg-white/20 px-3 py-1 rounded-full backdrop-blur-md">
                  {card.tag}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
