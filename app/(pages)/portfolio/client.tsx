"use client";
import { useRef } from "react";
// import AboutUsSection from "@/components/breadcrumb";
import Portfolio from "@/components/(portfolio Components)/projects";
import AboutUsSection from "@/components/breadcrum";

export default function PortfolioClient() {
  const nextSectionRef = useRef<HTMLDivElement>(null);

  const handlePortfolioScrollEnd = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div>
      <AboutUsSection
        title="Our Projects"
        backgroundImage="https://res.cloudinary.com/dshjm6hcx/image/upload/v1755459467/social-media-entertainment-lifestyle-graphic-concept-min_ddgskp.jpg"
        subtitle="Explore our portfolio of innovative technology solutions and client success stories"
      />
      <Portfolio ref={nextSectionRef} />
    </div>
  );
}
