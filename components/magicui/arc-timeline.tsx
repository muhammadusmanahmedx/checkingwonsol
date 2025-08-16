"use client"

import type React from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export interface ArcTimelineItem {
  time: string
  steps: {
    icon: React.ReactNode
    content: string
  }[]
}

interface ArcTimelineProps {
  data: ArcTimelineItem[]
  defaultActiveStep?: { time: string; stepIndex: number }
  arcConfig?: {
    circleWidth: number
    angleBetweenMinorSteps: number
    lineCountFillBetweenSteps: number
    boundaryPlaceholderLinesCount: number
  }
  className?: string
}

export function ArcTimeline({ data, defaultActiveStep, className }: ArcTimelineProps) {
  const [activeItem, setActiveItem] = useState(
    defaultActiveStep ? data.find((item) => item.time === defaultActiveStep.time) : data[0],
  )

  return (
    <div className={cn("w-full max-w-4xl mx-auto p-6", className)}>
      {/* Timeline Navigation */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {data.map((item, index) => (
          <button
            key={item.time}
            onClick={() => setActiveItem(item)}
            className={cn(
              "px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 border-2",
              activeItem?.time === item.time
                ? "text-white shadow-lg"
                : "bg-white text-gray-600 hover:bg-gray-50 border-gray-200",
            )}
            style={activeItem?.time === item.time ? { backgroundColor: "#2C74BC", borderColor: "#2C74BC" } : {}}
          >
            {item.time}
          </button>
        ))}
      </div>

      {/* Active Timeline Content */}
      {activeItem && (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2" style={{ color: "#2C74BC" }}>
              {activeItem.time}
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: "#2C74BC" }}></div>
          </div>

          <div className="grid gap-6 md:gap-8">
            {activeItem.steps.map((step, stepIndex) => (
              <div
                key={stepIndex}
                className="flex items-start gap-4 p-6 rounded-lg border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-200"
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: "#2C74BC" }}
                >
                  {step.icon}
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed text-lg">{step.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Progress Indicator */}
      <div className="mt-12 flex justify-center">
        <div className="flex gap-2">
          {data.map((item, index) => (
            <div
              key={item.time}
              className={cn(
                "h-2 rounded-full transition-all duration-200",
                activeItem?.time === item.time ? "w-8" : "w-2 bg-gray-300",
              )}
              style={activeItem?.time === item.time ? { backgroundColor: "#2C74BC" } : {}}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
