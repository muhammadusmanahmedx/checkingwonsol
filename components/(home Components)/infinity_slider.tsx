"use client"
import { cn } from "@/lib/utils"
import type React from "react"

import { useMotionValue, animate, motion } from "framer-motion"
import { useState, useEffect } from "react"
import useMeasure from "react-use-measure"

type InfiniteSliderProps = {
  children: React.ReactNode
  gap?: number
  duration?: number
  durationOnHover?: number
  direction?: "horizontal" | "vertical"
  reverse?: boolean
  className?: string
}

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = "horizontal",
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentDuration, setCurrentDuration] = useState(duration)
  const [ref, { width, height }] = useMeasure()
  const translation = useMotionValue(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [key, setKey] = useState(0)

  useEffect(() => {
    let controls
    const size = direction === "horizontal" ? width : height
    const contentSize = size + gap
    const from = reverse ? -contentSize / 2 : 0
    const to = reverse ? 0 : -contentSize / 2

    if (isTransitioning) {
      controls = animate(translation, [translation.get(), to], {
        ease: "linear",
        duration: currentDuration * Math.abs((translation.get() - to) / contentSize),
        onComplete: () => {
          setIsTransitioning(false)
          setKey((prevKey) => prevKey + 1)
        },
      })
    } else {
      controls = animate(translation, [from, to], {
        ease: "linear",
        duration: currentDuration,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        repeatDelay: 0,
        onRepeat: () => {
          translation.set(from)
        },
      })
    }

    return controls?.stop
  }, [key, translation, currentDuration, width, height, gap, isTransitioning, direction, reverse])

  const hoverProps = durationOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true)
          setCurrentDuration(durationOnHover)
        },
        onHoverEnd: () => {
          setIsTransitioning(true)
          setCurrentDuration(duration)
        },
      }
    : {}

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        className="flex w-max"
        style={{
          ...(direction === "horizontal" ? { x: translation } : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === "horizontal" ? "row" : "column",
        }}
        ref={ref}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}
//  <div className="relative">
//               <InfiniteSlider gap={64} duration={25} className="py-4">
//                 <img
//                   className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity"
//                   src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lFMbGhgRlFWdJl9MlPf7hfpQOqHucs.png"
//                   alt="NVIDIA"
//                   height="32"
//                 />
//                 <img
//                   className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity"
//                   src="/placeholder.svg?height=32&width=80&text=Column"
//                   alt="Column"
//                   height="32"
//                 />
//                 <img
//                   className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity"
//                   src="/placeholder.svg?height=32&width=80&text=GitHub"
//                   alt="GitHub"
//                   height="32"
//                 />
//                 <img
//                   className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity"
//                   src="/placeholder.svg?height=32&width=60&text=Nike"
//                   alt="Nike"
//                   height="32"
//                 />
//                 <img
//                   className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity"
//                   src="/placeholder.svg?height=32&width=80&text=Logo"
//                   alt="Company Logo"
//                   height="32"
//                 />
//               </InfiniteSlider>
//               <ProgressiveBlur direction="left" className="pointer-events-none absolute inset-y-0 left-0 w-12" />
//               <ProgressiveBlur direction="right" className="pointer-events-none absolute inset-y-0 right-0 w-12" />
//             </div>