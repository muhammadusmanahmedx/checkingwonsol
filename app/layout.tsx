import type { Metadata } from "next";
import "./globals.css"; // Ensure global CSS is imported
import Footer from "@/components/(home Components)/footer";
import Header from "@/components/header";
import { NavigationLoaderProvider } from "@/components/navigationLoader";

// --- SEO Metadata ---
export const metadata: Metadata = {
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
        url: "/logo.png", // Now from public/logo.png
        width: 1200,
        height: 630,
        alt: "Won Solutions - IT Services & Technology Solutions",
      },
    ],
    locale: "en_US",
  },

  // Twitter/X Card
  twitter: {
    card: "summary_large_image",
    title: "Won Solutions - IT Services & Technology Solutions",
    description:
      "Expert IT services including web development, cloud solutions, cybersecurity, and digital transformation.",
    images: ["/logo.png"],
  },

  // Robots
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

  // Verification
  // verification: {
  //   google: "your-google-verification-code",
  //   yandex: "your-yandex-verification-code",
  //   bing: "your-bing-verification-code",
  // },

  // Structured data meta
  other: {
    "application-name": "Won Solutions",
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
  },

  // Canonical
  alternates: {
    canonical: "https://wonsol.com",
  },

  // 👇 Icons block added
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
};

// --- JSON-LD Schema ---
export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Won Solutions",
  url: "https://wonsol.com",
  logo: "https://www.wonsol.com/logo.png", // Use full URL
  description:
    "Won Solutions delivers premium products and exceptional services with secure checkout and fast delivery.",
  sameAs: [
    "https://linkedin.com/company/your-company-handle", // Update
    "https://instagram.com/your-instagram-handle", // Update
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+923316120479",
      contactType: "customer service",
    },
    {
      "@type": "ContactPoint",
      email: "info@wonsol.com",
      contactType: "customer service",
    },
  ],
};

// --- Layout ---
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Inject Organization JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ margin: 0, padding: 0, overflowX: "hidden" }}>
        <NavigationLoaderProvider
          logoUrl="/logo.png"
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
