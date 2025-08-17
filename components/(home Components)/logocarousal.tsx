"use client";
import { cn } from "@/lib/utils";
import type React from "react";
import { useMotionValue, animate, motion } from "framer-motion";
import { useState, useEffect } from "react";
import useMeasure from "react-use-measure";

type InfiniteSliderProps = {
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  className?: string;
  // Optional: allow custom children to override default logos
  children?: React.ReactNode;
};

const defaultLogos = [
  { src: "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755407279/sahillogo_q37krn.png", alt: "SSA Consultants" },
  { src: "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755408781/Asset_3_mzz7s1.png", alt: "SalSabeel Scents" },
  { src: "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755409128/workforce_1_skhflu.png", alt: "WorkForce Pro" },
  { src: "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755410338/Group_99_isujtj.png", alt: "Agritech" },
  { src: "/spotify-logo.png", alt: "Fn Nails Studio" },
  // { src: "/tesla-logo.png", alt: "Tesla" },
];

export function InfiniteSlider({
  gap = 16,
  duration = 50,
  durationOnHover = 100,
  direction = "horizontal",
  reverse = false,
  className,
  children,
}: InfiniteSliderProps) {
  const [currentDuration, setCurrentDuration] = useState(duration);
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    let controls;
    const size = direction === "horizontal" ? width : height;
    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    if (isTransitioning) {
      controls = animate(translation, [translation.get(), to], {
        ease: "linear",
        duration:
          currentDuration * Math.abs((translation.get() - to) / contentSize),
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prevKey) => prevKey + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: "linear",
        duration: currentDuration,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        repeatDelay: 0,
        onRepeat: () => {
          translation.set(from);
        },
      });
    }

    return controls?.stop;
  }, [
    key,
    translation,
    currentDuration,
    width,
    height,
    gap,
    isTransitioning,
    direction,
    reverse,
  ]);

  const hoverProps = durationOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true);
          setCurrentDuration(durationOnHover);
        },
        onHoverEnd: () => {
          setIsTransitioning(true);
          setCurrentDuration(duration);
        },
      }
    : {};

  // Use custom children if provided, otherwise use default logos
  const content = children || (
    <>
      {defaultLogos.map((logo, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-48 h-32 flex items-center justify-center p-6"
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      ))}
    </>
  );

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        className="flex w-max"
        style={{
          ...(direction === "horizontal"
            ? { x: translation }
            : { y: translation }),
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
  );
}