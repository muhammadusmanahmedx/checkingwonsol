"use client";

import ContactPage from "@/components/(conact us components)/contact";
import AboutUsSection from "@/components/breadcrum";

// import AboutUsSection from "@/components/breadcrumb";
// import ContactPage from "@/components/(contact us components)/contact";

export default function ContactClient() {
  return (
    <>
      <AboutUsSection
        title="Contact Us"
        backgroundImage="https://res.cloudinary.com/dshjm6hcx/image/upload/v1755452719/contract-male-sunny-sand-career_zl4x2p.jpg"
        subtitle="Get in touch to discuss your IT needs and explore our services"
      />
      <ContactPage />
    </>
  );
}
