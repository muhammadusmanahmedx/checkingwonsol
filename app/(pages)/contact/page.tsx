import Script from "next/script";
import ContactClient from "./client";

// Metadata for SEO
export async function generateMetadata() {
  return {
    title: "Contact Us - Get IT Support & Consultation | Won Solutions",
    description:
      "Contact Won Solutions for IT services consultation. Reach us via phone, email, WhatsApp, or LinkedIn. Free initial consultation available.",
    keywords: [
      "contact IT company",
      "IT consultation",
      "get IT support",
      "technology consultation",
      "IT services quote",
      "contact won solutions",
      "IT help",
    ],
    openGraph: {
      title: "Contact Won Solutions - Let's Discuss Your IT Needs",
      description:
        "Ready to transform your business with technology? Contact our IT experts for a free consultation. Multiple ways to reach us.",
      url: "https://wonsol.com/contact",
    },
    alternates: {
      canonical: "https://wonsol.com/contact",
    },
  };
}

// JSON-LD for structured data
const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  mainEntity: {
    "@type": "Organization",
    name: "Won Solutions",
    url: "https://wonsol.com",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-555-123-4567", // Replaced placeholder with default; update with actual phone
        contactType: "customer service",
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        email: "info@wonsol.com", // Kept default email; update with actual email if needed
        contactType: "customer service",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <Script id="contact-jsonld" type="application/ld+json">
        {JSON.stringify(contactJsonLd)}
      </Script>
      <ContactClient />
    </>
  );
}
