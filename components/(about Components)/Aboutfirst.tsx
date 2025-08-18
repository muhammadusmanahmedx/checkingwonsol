"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export interface ArcTimelineItem {
  time: string;
  steps: {
    icon: React.ReactNode;
    content: string;
  }[];
}

interface ArcTimelineProps {
  data: ArcTimelineItem[];
  defaultActiveStep?: { time: string; stepIndex: number };
  className?: string;
  arcConfig?: {
    circleWidth: number;
    angleBetweenMinorSteps: number;
    lineCountFillBetweenSteps: number;
    boundaryPlaceholderLinesCount: number;
  };
}

export function ArcTimeline({
  data,
  defaultActiveStep,
  className,
  arcConfig = {
    circleWidth: 7000,
    angleBetweenMinorSteps: 0.25,
    lineCountFillBetweenSteps: 12,
    boundaryPlaceholderLinesCount: 80,
  },
}: ArcTimelineProps) {
  const [activeStep, setActiveStep] = useState(
    defaultActiveStep || { time: data[0]?.time || "", stepIndex: 0 }
  );
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const responsiveArcConfig = {
    ...arcConfig,
    circleWidth: isMobile ? 4000 : arcConfig.circleWidth,
    angleBetweenMinorSteps: isMobile ? 0.4 : arcConfig.angleBetweenMinorSteps,
    lineCountFillBetweenSteps: isMobile
      ? 8
      : arcConfig.lineCountFillBetweenSteps,
    boundaryPlaceholderLinesCount: isMobile
      ? 40
      : arcConfig.boundaryPlaceholderLinesCount,
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
        {data.map((item) => (
          <button
            key={item.time}
            onClick={() => setActiveStep({ time: item.time, stepIndex: 0 })}
            className={cn(
              "px-3 py-2 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-200",
              "hover:scale-105 hover:shadow-md",
              activeStep.time === item.time
                ? "bg-[#2C74BC] text-white shadow-lg"
                : "bg-white text-gray-600 border border-gray-200 hover:border-[#2C74BC]"
            )}
          >
            {item.time}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            {activeStep.time}
          </h2>
          <div className="w-20 h-1 bg-[#2C74BC] rounded-full mx-auto"></div>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data
            .find((item) => item.time === activeStep.time)
            ?.steps.map((step, index) => (
              <div
                key={index}
                className={cn(
                  "p-4 sm:p-6 rounded-xl border transition-all duration-300 cursor-pointer hover:scale-105",
                  "hover:shadow-lg",
                  activeStep.stepIndex === index
                    ? "bg-blue-50 border-[#2C74BC] shadow-md"
                    : "bg-gray-50 border-gray-200 hover:border-[#2C74BC]"
                )}
                onClick={() =>
                  setActiveStep({ ...activeStep, stepIndex: index })
                }
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div
                    className={cn(
                      "flex-shrink-0 p-2 sm:p-3 rounded-lg",
                      activeStep.stepIndex === index
                        ? "bg-blue-100 text-[#2C74BC]"
                        : "bg-gray-200 text-gray-600"
                    )}
                  >
                    {step.icon}
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {step.content}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
