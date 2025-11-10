"use client"

import type React from "react"

interface DecorationIcon {
  id: string
  icon: React.ReactNode
  top: string
  left: string
  size: string
}

const decorationIcons: DecorationIcon[] = [
  {
    id: "link",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
    top: "10%",
    left: "5%",
    size: "w-12 h-12",
  },
  {
    id: "share",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
    top: "8%",
    left: "55%",
    size: "w-10 h-10",
  },
  {
    id: "building",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9h18v12H3z" />
        <path d="M3 9V5h6v4" />
        <path d="M9 9v4" />
        <path d="M15 9v4" />
        <line x1="6" y1="13" x2="6" y2="21" />
        <line x1="12" y1="13" x2="12" y2="21" />
        <line x1="18" y1="13" x2="18" y2="21" />
      </svg>
    ),
    top: "25%",
    left: "8%",
    size: "w-16 h-16",
  },
  {
    id: "x",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    ),
    top: "60%",
    left: "10%",
    size: "w-12 h-12",
  },
  {
    id: "connect",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="5" r="3" />
        <circle cx="6" cy="14" r="3" />
        <circle cx="18" cy="14" r="3" />
        <line x1="12" y1="8" x2="12" y2="11" />
        <line x1="9" y1="12" x2="6" y2="13" />
        <line x1="15" y1="12" x2="18" y2="13" />
      </svg>
    ),
    top: "70%",
    left: "85%",
    size: "w-14 h-14",
  },
  {
    id: "settings",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m6.08 6.08l4.24 4.24M1 12h6m6 0h6M4.22 19.78l4.24-4.24m6.08-6.08l4.24-4.24" />
      </svg>
    ),
    top: "15%",
    left: "88%",
    size: "w-12 h-12",
  },
]

export function WhatWeDeliver() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-slate-100 to-blue-50 py-20 overflow-hidden font-sans">
      {/* Decorative icons */}
      {decorationIcons.map((item) => (
        <div
          key={item.id}
          className={`absolute ${item.size} text-gray-400 opacity-60 pointer-events-none`}
          style={{
            top: item.top,
            left: item.left,
          }}
        >
          {item.icon}
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center justify-center h-full text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white bg-opacity-60 rounded-full backdrop-blur-sm border border-gray-200">
          <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
          </svg>
          <span className="text-sm font-semibold text-gray-700">What we deliver</span>
        </div>

        {/* Main heading */}
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          At Teams24, we eliminate startup hiring{" "}
          <span className="block">complexity with precision-assembled teams.</span>
        </h2>

        {/* Secondary text */}
        <p className="text-xl md:text-2xl text-gray-400 font-light">
          No <span className="text-gray-500 font-medium">recruitment chaos</span>, just immediate{" "}
          <span className="text-gray-500 font-medium">execution power</span>.
        </p>
      </div>
    </section>
  )
}
