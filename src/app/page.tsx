import { SmeHeroSection } from "@/components/sections/sme-theme/sme-hero-section";
import { SmeSectorInfoSection } from "@/components/sections/sme-theme/sme-sector-info-section";
import { SmeCompaniesAvailedSection } from "@/components/sections/sme-theme/sme-companies-availed-section";
import { SmeChallengesServicesSection } from "@/components/sections/sme-theme/sme-challenges-services-section";
import { SmeIndustrySolutionsSection } from "@/components/sections/sme-theme/sme-industry-solutions-section";
import { SmeServiceAreasSection } from "@/components/sections/sme-theme/sme-service-areas-section";
import { StickyBottomBar } from "@/components/sections/sme-theme/sticky-bottom-bar";
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
      <SmeHeroSection />
      <SmeSectorInfoSection />
      <SmeCompaniesAvailedSection />
      <SmeChallengesServicesSection />
      <SmeIndustrySolutionsSection />
      <SmeServiceAreasSection />
      <StickyBottomBar />
    </>
  );
}
