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
    default: "FMCG Whitespace OS",
    template: "%s — FMCG Whitespace OS",
  },
  description: "An interactive FMCG strategy prototype exploring the unit economics, positioning, and 'Better-For-You' optimization of functional indulgence.",
  keywords: ["FMCG Whitespace OS", "product strategy", "consumer behavior", "D2C", "quick commerce", "founder outreach", "proof of work", "Bengaluru startup"],
  authors: [{ name: "Tharun Gajula" }],
  creator: "Tharun Gajula",
  publisher: "Tharun Gajula",
  applicationName: "FMCG Whitespace OS",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    title: "FMCG Whitespace OS | Growth Strategy Concept",
    description: "An interactive FMCG strategy prototype exploring the unit economics, positioning, and 'Better-For-You' optimization of functional indulgence.",
    siteName: "FMCG Whitespace OS",
  },
  twitter: {
    card: "summary_large_image",
    title: "FMCG Whitespace OS | Growth Strategy Concept",
    description: "An interactive FMCG strategy prototype exploring the unit economics, positioning, and 'Better-For-You' optimization of functional indulgence.",
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
