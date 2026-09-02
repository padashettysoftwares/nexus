import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Geist } from "next/font/google";
import { ProfessionalService, WithContext } from "schema-dts";
import "./globals.css";
import { ConditionalHeader, ConditionalFooter } from "@/components/layout/conditional-wrapper";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nexusolutions.in"),
  title: {
    default: "Nexus Solutions | Top Business, MSME & ISO Consultant in Karnataka",
    template: "%s | Nexus Solutions",
  },
  description: "Karnataka's premier business consultant. Expert in Company Registration, GST & Tax Filing, FSSAI & Trade Licences, ISO Certification, Trademark Registration, MSME/Udyam, Accounting & Audits, and Web Development across South India.",
  keywords: ["Company Registration Karnataka", "GST Filing South India", "FSSAI Licence Kalaburagi", "ISO Certification Consultant", "Trademark Registration South India", "MSME Udyam Registration", "Startup India Registration", "Accounting & Audits Karnataka", "Business Web Development", "Business Consultant Kalaburagi", "Legal Compliance South India"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.nexusolutions.in",
    siteName: "Nexus Solutions",
    title: "Nexus Solutions | Top Business & ISO Consultant in Karnataka",
    description: "Expert Company Registration, GST, FSSAI, ISO, Trademark, Accounting, and Web Development services across Karnataka and South India.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus Solutions | Top Business & ISO Consultant",
    description: "Expert MSME & ISO Certification across Karnataka and South India.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'wh4kYawkb7QKFeTZHfqzgjlyZesP-L-JQAzl3Oik-sA',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd: WithContext<ProfessionalService> = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Nexus Solutions",
    image: "https://www.nexusolutions.in/logo.png",
    "@id": "https://www.nexusolutions.in",
    url: "https://www.nexusolutions.in",
    telephone: "+91-9483486111",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kalaburagi",
      addressRegion: "Karnataka",
      addressCountry: "IN"
    },
    areaServed: ["Kalaburagi", "Bengaluru", "Hubli", "Mangaluru", "Karnataka", "South India", "India"],
    priceRange: "₹₹",
    description: "Top business consultant in Karnataka offering Private Limited Company Registration, GST & Tax Filing, Trade Licences (FSSAI), ISO Certification, Trademark Registration, MSME/Udyam, Accounting & Audits, and Web Development across South India.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Corporate Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Registration (Pvt Ltd, LLP, Partnership)" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "GST, TDS & Income Tax Filing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Trade Licences (FSSAI, Labour, Factory, Fire NOC)" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Quality Certifications (ISO 9001, HACCP, GMP, Halal, Organic)" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Trademark, Copyright & Patent Registration" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Import Export (IEC Code Registration)" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Govt Registrations (Udyam MSME, Startup India, GeM, EPF)" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Accounting, Bookkeeping & Payroll" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Services (Web Development, Logo Design)" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Annual Compliance (ROC Filing, Director KYC)" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Advisory & Virtual CFO" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Loans & Subsidies (Project Reports, MSME Subsidies)" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web App Development & Portals" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Process Automation & Tech Integrations" } }
      ]
    }
  };

  return (
    <html lang="en" className={cn(inter.variable, plusJakartaSans.variable, "font-sans", geist.variable)}>
      <body className="antialiased min-h-screen flex flex-col selection:bg-primary selection:text-white bg-background text-text-primary">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
