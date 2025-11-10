"use client"

import { useState } from "react"

export function ProblemWeSolve() {
  const [isWithTeams24, setIsWithTeams24] = useState(false)
  const [sliderValue, setSliderValue] = useState(isWithTeams24 ? 1 : 12)

  const handleToggle = (withTeams: boolean) => {
    setIsWithTeams24(withTeams)
    setSliderValue(withTeams ? 1 : 12)
  }

  const calculateMetrics = () => {
    if (isWithTeams24) {
      // With Teams 24: Fast deployment (1-48 hours)
      const costReduction = Math.round((sliderValue / 48) * 60)
      const deploymentDays = Math.min(2 + Math.round((sliderValue / 48) * 46), 48)
      const successRate = Math.round(90 + (sliderValue / 48) * 4)

      return {
        sliderLabel: "Team deployed in 48 hours",
        sliderMin: 1,
        sliderMax: 48,
        metric1Label: "Team cost reduction",
        metric1Value: `${costReduction}%`,
        metric2Label: "Team deployment",
        metric2Value: deploymentDays > 2 ? `2-${deploymentDays} hours` : "2 hours",
        metric3Label: "Client success rate",
        metric3Value: `${successRate}%`,
      }
    } else {
      // Without Teams 24: Slow recruitment (1-12 months)
      const annualCost = Math.round(500000 + (sliderValue / 12) * 1130000)
      const monthsLost = Math.round((sliderValue / 12) * 12)
      const failureRate = Math.round(50 + (sliderValue / 12) * 17)

      return {
        sliderLabel: "Team in Month 12",
        sliderMin: 1,
        sliderMax: 12,
        metric1Label: "Your annual team costs",
        metric1Value: `$${(annualCost / 1000000).toFixed(2)}M+`,
        metric2Label: "Months lost to recruitment",
        metric2Value: `${monthsLost}-12 months`,
        metric3Label: "First-year failure rate",
        metric3Value: `${failureRate}%`,
      }
    }
  }

  const metrics = calculateMetrics()
  const sliderPercentage = ((sliderValue - metrics.sliderMin) / (metrics.sliderMax - metrics.sliderMin)) * 100

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-gray-600 mb-8 pb-8 border-b border-gray-400">
            The problem we solve
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-black mb-12">
            {isWithTeams24 ? "Our solution delivers results." : "Traditional hiring kills momentum."}
          </h3>
        </div>

        {/* Slider Section */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <div className="flex items-center justify-between mb-4">
            <p className="text-lg font-semibold text-gray-900">{metrics.sliderLabel}</p>
          </div>

          {/* Custom range slider */}
          <div className="relative pt-4 pb-8">
            <input
              type="range"
              min={metrics.sliderMin}
              max={metrics.sliderMax}
              value={sliderValue}
              onChange={(e) => setSliderValue(Number(e.target.value))}
              className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-blue-500"
              style={{
                background: isWithTeams24
                  ? `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${sliderPercentage}%, #e5e7eb ${sliderPercentage}%, #e5e7eb 100%)`
                  : `linear-gradient(to right, #ef4444 0%, #ef4444 ${sliderPercentage}%, #e5e7eb ${sliderPercentage}%, #e5e7eb 100%)`,
              }}
            />
            <div className="flex justify-between text-xs text-gray-600 mt-2">
              <span>Day 01</span>
              <span>{metrics.sliderMax === 48 ? "Month 24" : "Month 24"}</span>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left metric */}
          <div className="border-l-4 pl-6" style={{ borderColor: isWithTeams24 ? "#3b82f6" : "#ef4444" }}>
            <p className="text-gray-600 text-sm mb-2">{metrics.metric1Label}</p>
            <p className="text-5xl font-bold text-black">{metrics.metric1Value}</p>
          </div>

          {/* Right metrics */}
          <div className="space-y-8">
            <div className="border-l-4 pl-6" style={{ borderColor: isWithTeams24 ? "#3b82f6" : "#ef4444" }}>
              <p className="text-gray-600 text-sm mb-2">{metrics.metric2Label}</p>
              <p className="text-2xl font-bold text-black">{metrics.metric2Value}</p>
            </div>
            <div className="border-l-4 pl-6" style={{ borderColor: isWithTeams24 ? "#3b82f6" : "#ef4444" }}>
              <p className="text-gray-600 text-sm mb-2">{metrics.metric3Label}</p>
              <p className="text-2xl font-bold text-black">{metrics.metric3Value}</p>
            </div>
          </div>
        </div>

        {/* Toggle Buttons */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => handleToggle(false)}
            className="px-8 py-3 rounded-full font-semibold transition-all duration-300"
            style={{
              backgroundColor: isWithTeams24 ? "#f3f4f6" : "#ef4444",
              color: isWithTeams24 ? "#9ca3af" : "white",
            }}
          >
            Without Teams 24
          </button>
          <button
            onClick={() => handleToggle(true)}
            className="px-8 py-3 rounded-full font-semibold transition-all duration-300"
            style={{
              backgroundColor: isWithTeams24 ? "#3b82f6" : "#f3f4f6",
              color: isWithTeams24 ? "white" : "#9ca3af",
            }}
          >
            With Teams 24
          </button>
        </div>
      </div>
    </section>
  )
}
