import { Hero } from "@/components/home/hero";
import { ServicesIndex } from "@/components/home/services-index";
import { WhyNexus } from "@/components/home/why-nexus";
import { Process } from "@/components/home/process";
import { Industries } from "@/components/home/industries";
import { AboutIntro } from "@/components/home/about-intro";
import { ClosingCta } from "@/components/home/closing-cta";
import { SmeServiceAreasSection } from "@/components/sections/sme-theme/sme-service-areas-section";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Nexus Solutions — Business, Tax & Compliance Consultants in Kalaburagi",
  titleAbsolute: true,
  description:
    "Nexus Solutions is a business consulting firm in Kalaburagi (Gulbarga), Karnataka. Company registration, GST & income-tax filing, FSSAI & trade licences, ISO 9001 certification, trademark registration, Udyam/MSME, accounting and annual compliance for startups and SMEs.",
  path: "/",
  keywords: [
    "business consultant Kalaburagi",
    "company registration Kalaburagi",
    "GST registration Gulbarga",
    "ISO certification Karnataka",
    "trademark registration Kalaburagi",
    "CA firm Gulbarga",
  ],
});

export default function Home() {
  return (
    <>
      <JsonLd schemas={[breadcrumbSchema([{ name: "Home", path: "/" }])]} />
      <Hero />
      <ServicesIndex />
      <WhyNexus />
      <Process />
      <Industries />
      <AboutIntro />
      <ClosingCta />
      {/* Screen-reader-only service-area list retained from the SEO pass. */}
      <SmeServiceAreasSection />
    </>
  );
}
