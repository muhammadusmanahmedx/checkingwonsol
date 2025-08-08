// pages/index.tsx
import HeroSection from "@/components/hero";
import ServicesSection from "@/components/services";
import WhyChooseUs from "@/components/why-choose-us";
import FeaturedCaseStudies from "@/components/featured-case-studies";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <HeroSection />
      <ServicesSection />
        <WhyChooseUs />
      <FeaturedCaseStudies />
    </div>
  );
}