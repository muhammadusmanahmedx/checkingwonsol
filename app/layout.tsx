import type { Metadata } from "next";
import "./globals.css"; // Ensure global CSS is imported
import Footer from "@/components/(home Components)/footer";
import Header from "@/components/header";
import { NavigationLoaderProvider } from "@/components/navigationLoader";
// import { NavigationLoaderProvider } from "@/components/navigationLoader";

export const metadata = {
  metadataBase: new URL("https://wonsol.com"),
  title: {
    default: "Won Solutions - IT Services & Technology Solutions",
    template: "%s | Won Solutions",
  },
  description:
    "Won Solutions provides comprehensive IT services including web development, cloud solutions, cybersecurity, and digital transformation. Expert technology consulting for businesses of all sizes.",
  keywords: [
    "IT services",
    "technology solutions",
    "web development",
    "cloud computing",
    "cybersecurity",
    "digital transformation",
    "IT consulting",
    "software development",
    "network services",
    "tech support",
    "won solutions",
    "IT company",
  ],
  authors: [{ name: "Won Solutions Team" }],
  creator: "Won Solutions",
  publisher: "Won Solutions",

  // Open Graph for social media sharing
  openGraph: {
    type: "website",
    siteName: "Won Solutions",
    title: "Won Solutions - IT Services & Technology Solutions",
    description:
      "Expert IT services including web development, cloud solutions, cybersecurity, and digital transformation. Trusted technology partner for your business growth.",
    url: "https://wonsol.com",
    images: [
      {
        url: "/og-image.png", // Should be 1200x630px
        width: 1200,
        height: 630,
        alt: "Won Solutions - IT Services & Technology Solutions",
      },
    ],
    locale: "en_US",
  },

  // Twitter/X Card (optional - you can remove this section if not on Twitter)
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Won Solutions - Top-Quality Products & Services",
  //   description: "Premium products, secure checkout, fast delivery. Shop with confidence at Won Solutions.",
  //   images: ["/og-image.png"],
  // },

  // Additional SEO enhancements
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification (add your actual verification codes)
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    bing: "your-bing-verification-code",
  },

  // Structured data
  other: {
    "application-name": "Won Solutions",
    "msapplication-TileColor": "#000000", // Update with your brand color
    "theme-color": "#000000", // Update with your brand color
  },

  // Canonical URL (important for SEO)
  alternates: {
    canonical: "https://wonsol.com",
  },
};

// Additional JSON-LD structured data for better SEO
export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Won Solutions",
  url: "https://wonsol.com",
  logo: "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755367351/bg_set_big_zgfqyi.png",
  description:
    "Won Solutions delivers premium products and exceptional services with secure checkout and fast delivery.",
  sameAs: [
    "https://linkedin.com/company/your-company-handle", // Update with your actual LinkedIn URL
    "https://instagram.com/your-instagram-handle", // Update with your actual Instagram handle
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+923316120479", // Add your actual phone number
      contactType: "customer service",
    },
    {
      "@type": "ContactPoint",
      email: "info@wonsol.com", // Add your actual email
      contactType: "customer service",
    },
  ],
};

// till here seo

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, overflowX: "hidden" }}>
        <NavigationLoaderProvider
          logoUrl="https://res.cloudinary.com/dshjm6hcx/image/upload/v1755367351/bg_set_big_zgfqyi.png"
          logoAlt="Won Solutions Logo"
        >
          <Header />
          {children}
          <Footer />
        </NavigationLoaderProvider>
      </body>
    </html>
  );
}
