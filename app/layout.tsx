import type { Metadata } from "next";
import { Geist, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 
                (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PAUSE",
    template: "%s — PAUSE",
  },
  description: "A proof-of-work exploring product portfolio, repeat behavior, and original design.",
  keywords: ["PAUSE", "product strategy", "consumer behavior", "D2C", "quick commerce", "founder outreach", "proof of work", "Bengaluru startup"],
  authors: [{ name: "Tharun Gajula" }],
  creator: "Tharun Gajula",
  publisher: "Tharun Gajula",
  applicationName: "PAUSE",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    title: "PAUSE",
    description: "A brand concept exploration on product, moments, repeat logic, and execution clarity.",
    siteName: "PAUSE",
  },
  twitter: {
    card: "summary_large_image",
    title: "PAUSE",
    description: "A brand concept exploration on product, moments, repeat logic, and execution clarity.",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${cormorant.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent/30 selection:text-foreground">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
