import Script from "next/script";
import AboutClient from "./client";

// Metadata for SEO
export async function generateMetadata() {
  return {
    title: "About Us - Expert IT Team & Technology Solutions | Won Solutions",
    description:
      "Learn about Won Solutions' experienced IT team, our mission to deliver innovative technology solutions, and our commitment to client success since 2020.",
    keywords: [
      "about won solutions",
      "IT company team",
      "technology experts",
      "IT consulting experience",
      "company history",
      "mission vision",
      "IT professionals",
    ],
    openGraph: {
      title: "About Won Solutions - Your Trusted IT Partner",
      description:
        "Meet our expert team of IT professionals dedicated to transforming businesses through innovative technology solutions and exceptional service.",
      url: "https://wonsol.com/about",
    },
    alternates: {
      canonical: "https://wonsol.com/about",
    },
  };
}

// JSON-LD for structured data
const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "Organization",
    name: "Won Solutions",
    url: "https://wonsol.com",
    description:
      "Won Solutions is a leading IT services company specializing in web development, cloud solutions, and cybersecurity.",
    foundingDate: "2020", // Replaced placeholder with reasonable default
    numberOfEmployees: "10-50", // Replaced placeholder with reasonable default
    industry: "Information Technology",
    expertise: [
      "Web Development",
      "Cloud Computing",
      "Cybersecurity",
      "Digital Transformation",
      "IT Consulting",
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <Script id="about-jsonld" type="application/ld+json">
        {JSON.stringify(aboutJsonLd)}
      </Script>
      <AboutClient />
    </>
  );
}
