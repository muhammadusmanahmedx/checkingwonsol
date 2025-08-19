import Script from "next/script";
import ServicesClient from "./client";
import CTASection from "@/components/(home Components)/Calltoaction";

// Metadata for SEO
export async function generateMetadata() {
  return {
    title:
      "IT Services - Web Development, Cloud & Cybersecurity | Won Solutions",
    description:
      "Comprehensive IT services including web development, cloud computing, cybersecurity, digital transformation, and technical support. Expert solutions for your business needs.",
    keywords: [
      "IT services",
      "web development services",
      "cloud computing solutions",
      "cybersecurity services",
      "digital transformation",
      "software development",
      "network management",
      "IT consulting services",
    ],
    openGraph: {
      title: "Professional IT Services | Won Solutions",
      description:
        "Transform your business with our comprehensive IT services. From web development to cybersecurity, we deliver expert solutions tailored to your needs.",
      url: "https://wonsol.com/services",
    },
    alternates: {
      canonical: "https://wonsol.com/services",
    },
  };
}

// JSON-LD for structured data
const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: {
    "@type": "Organization",
    name: "Won Solutions",
    url: "https://wonsol.com",
  },
  serviceType: "Information Technology Services",
  description:
    "Comprehensive IT services including web development, cloud solutions, cybersecurity, and digital transformation.",
  offers: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Web Development",
        description: "Custom web applications and responsive websites",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Cloud Solutions",
        description: "Cloud migration, infrastructure, and management services",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Cybersecurity",
        description:
          "Security assessments, monitoring, and protection services",
      },
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <Script id="services-jsonld" type="application/ld+json">
        {JSON.stringify(servicesJsonLd)}
      </Script>
      <ServicesClient />
      <CTASection />
    </>
  );
}
