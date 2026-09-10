import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Geist } from "next/font/google";
import "./globals.css";
import { ConditionalHeader, ConditionalFooter } from "@/components/layout/conditional-wrapper";
import { cn } from "@/lib/utils";
import { SITE_URL, organizationSchema, websiteSchema, jsonLd } from "@/lib/seo";

const geist = Geist({subsets:['latin'],variable:'--font-sans', display: 'swap'});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap'
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nexus Solutions | Company Registration, GST, ISO & Trademark Consultants in Kalaburagi",
    template: "%s | Nexus Solutions",
  },
  description:
    "Nexus Solutions is a business consulting firm in Kalaburagi (Gulbarga), Karnataka. Company registration, GST & income-tax filing, FSSAI & trade licences, ISO 9001 certification, trademark registration, Udyam/MSME, accounting and annual compliance for startups and SMEs.",
  keywords: [
    "business consultant Kalaburagi",
    "company registration Kalaburagi",
    "GST registration Gulbarga",
    "FSSAI licence Kalaburagi",
    "ISO certification Karnataka",
    "trademark registration Kalaburagi",
    "Udyam MSME registration",
    "accounting services Kalaburagi",
    "CA firm Gulbarga",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Nexus Solutions",
    title: "Nexus Solutions | Company Registration, GST, ISO & Trademark Consultants in Kalaburagi",
    description:
      "Business registration, GST & tax filing, FSSAI & trade licences, ISO certification, trademark and MSME registration, accounting and compliance for startups and SMEs in Kalaburagi, Karnataka.",
    images: [{ url: "/hero_premium_v2.png", width: 1200, height: 630, alt: "Nexus Solutions consultants in Kalaburagi, Karnataka" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus Solutions | Business, Tax & Compliance Consultants in Kalaburagi",
    description:
      "Company registration, GST, FSSAI, ISO, trademark, MSME, accounting and compliance for SMEs in Kalaburagi, Karnataka.",
    images: ["/hero_premium_v2.png"],
  },
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
  verification: {
    google: "wh4kYawkb7QKFeTZHfqzgjlyZesP-L-JQAzl3Oik-sA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={cn(inter.variable, plusJakartaSans.variable, "font-sans", geist.variable)}>
      <body className="antialiased min-h-screen flex flex-col selection:bg-primary selection:text-white bg-background text-text-primary">
        {/* Scroll-reveal hides sections until JavaScript reveals them. Without
            JavaScript there is nothing to run the observer, so undo the hiding
            outright rather than leaving the page blank. */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<style>.reveal{opacity:1 !important;transform:none !important}</style>`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(organizationSchema(), websiteSchema())}
        />
        <ConditionalHeader />
        <main className="flex-grow">
          {children}
        </main>
        <ConditionalFooter />
      </body>
    </html>
  );
}
