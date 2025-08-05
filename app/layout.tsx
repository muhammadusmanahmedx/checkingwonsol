import type { Metadata } from "next";
import "./globals.css"; // Ensure global CSS is imported

export const metadata: Metadata = {
  title: "Your App",
  description: "Your App Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, overflowX: "hidden" }}>
        {children}
      </body>
    </html>
  );
}