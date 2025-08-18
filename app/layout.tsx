import type { Metadata } from "next";
import "./globals.css"; // Ensure global CSS is imported
import Footer from "@/components/(home Components)/footer";
import Header from "@/components/header";

export const metadata = {
  metadataBase: new URL("https://www.superstore.com"),
  title: {
    default: "Won Solutions",
    template: "%s | Super Store",
  },
  description: "Won Solutions – Providing top-quality products and services with secure checkout and fast delivery.",
  keywords: ["shopping", "ecommerce", "super store", "deals", "online store"],
  authors: [{ name: "Super Store Team" }],
  openGraph: {
    type: "website",
    siteName: "Super Store",
    url: "https://www.superstore.com",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@superstore",
    creator: "@superstore",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, overflowX: "hidden" }}>
        <Header/>
        {children}
           <Footer />
      </body>
    </html>
  );
}