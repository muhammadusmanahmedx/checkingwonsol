import Script from "next/script";
import PortfolioClient from "./client";

// Metadata for SEO
export async function generateMetadata() {
  return {
    title: "Portfolio - IT Projects & Success Stories | Won Solutions",
    description:
      "Explore Won Solutions' portfolio of successful IT projects including web applications, cloud migrations, and digital transformation case studies.",
    keywords: [
      "IT portfolio",
      "web development projects",
      "cloud migration case studies",
      "cybersecurity implementations",
      "digital transformation examples",
      "client success stories",
      "IT project showcase",
    ],
    openGraph: {
      title: "Our Work - IT Portfolio | Won Solutions",
      description:
        "See how we've helped businesses transform through technology. Browse our portfolio of web development, cloud, and cybersecurity projects.",
      url: "https://wonsol.com/portfolio",
    },
    alternates: {
      canonical: "https://wonsol.com/portfolio",
    },
  };
}

// JSON-LD for structured data
const portfolioJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Won Solutions Portfolio",
  description:
    "A showcase of successful IT projects and client solutions delivered by Won Solutions.",
  mainEntity: {
    "@type": "ItemList",
    name: "IT Projects Portfolio",
    description:
      "Collection of web development, cloud, and cybersecurity projects",
    itemListElement: [
      {
        "@type": "CreativeWork",
        name: "E-Commerce Platform",
        description:
          "Developed a scalable e-commerce web application with advanced payment integration.",
        url: "https://wonsol.com/portfolio/ecommerce-platform",
      },
      {
        "@type": "CreativeWork",
        name: "Cloud Migration for Enterprise",
        description:
          "Successfully migrated enterprise infrastructure to AWS with zero downtime.",
        url: "https://wonsol.com/portfolio/cloud-migration",
      },
      {
        "@type": "CreativeWork",
        name: "Cybersecurity Audit",
        description:
          "Conducted a comprehensive cybersecurity audit and implemented robust protections.",
        url: "https://wonsol.com/portfolio/cybersecurity-audit",
      },
    ],
  },
};

export default function PortfolioPage() {
  return (
    <>
      <Script id="portfolio-jsonld" type="application/ld+json">
        {JSON.stringify(portfolioJsonLd)}
      </Script>
      <PortfolioClient />
    </>
  );
}
