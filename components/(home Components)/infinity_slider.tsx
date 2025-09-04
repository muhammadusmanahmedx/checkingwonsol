"use client"
import { cn } from "@/lib/utils"
import type React from "react"
import { useMotionValue, animate, motion } from "framer-motion"
import { useState, useEffect } from "react"
import useMeasure from "react-use-measure"

// Define the image data type
type ImageData = {
  src: string
  alt: string
  height?: string | number
}

// Default images array - change this in one place
const defaultImages: ImageData[] = [
  {
    src: "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755407279/sahillogo_q37krn.png",
    alt: "NVIDIA",
    height: "32"
  },
  // {
  //   src: "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755408781/Asset_3_mzz7s1.png",
  //   alt: "Column",
  //   height: "32"
  // },
  {
    src: "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755414869/Frame_150_rd1ng3.png",
    alt: "GitHub",
    height: "32"
  },
  {
    src: "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755413216/Frame_148_1_g7ibmy.png",
    alt: "Nike",
    height: "32"
  },
  {
    src: "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755428469/Frame_151_1_fnaqaz.png",
    alt: "Company Logo",
    height: "32"
  },
  {
    src: "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755414094/Frame_149_2_j3k8qj.png",
    alt: "Company Logo",
    height: "32"
  }
]

type InfiniteSliderProps = {
  images?: ImageData[]
  children?: React.ReactNode
  gap?: number
  duration?: number
  durationOnHover?: number
  direction?: "horizontal" | "vertical"
  reverse?: boolean
  className?: string
  imageClassName?: string
}

export function InfiniteSlider({
  images = defaultImages,
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = "horizontal",
  reverse = false,
  className,
  imageClassName = "h-12 w-auto opacity-100  transition-opacity",
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

  // Generate content based on images or children
  const content = children ? children : images.map((image, index) => (
    <img
      key={index}
      className={imageClassName}
      src={image.src}
      alt={image.alt}
      height={image.height}
    />
  ))

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
        {content}
        {content}
      </motion.div>
    </div>
  )
}