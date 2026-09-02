import { SmeHeroSection } from "@/components/sections/sme-theme/sme-hero-section";
import { SmeSectorInfoSection } from "@/components/sections/sme-theme/sme-sector-info-section";
import { SmeCompaniesAvailedSection } from "@/components/sections/sme-theme/sme-companies-availed-section";
import { SmeChallengesServicesSection } from "@/components/sections/sme-theme/sme-challenges-services-section";
import { SmeIndustrySolutionsSection } from "@/components/sections/sme-theme/sme-industry-solutions-section";
import { StickyBottomBar } from "@/components/sections/sme-theme/sticky-bottom-bar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nexus Solutions | Complete Business Registration & Compliance Consultant",
  description: "Get instant, top-tier business compliance. We are the premier experts for Company Registration, GST, FSSAI, ISO, Trademarks, MSME, Accounting, and Web Development in Kalaburagi, Karnataka and all of South India.",
  keywords: ["Business Registration South India", "GST & Tax Filing Karnataka", "Trade Licences FSSAI", "ISO Certifications India", "Trademark Registration", "Startup India MSME", "Accounting & Audits Kalaburagi", "Web Development for Business", "Best Consultant Karnataka"],
};

export default function Home() {
  return (
    <>
      <SmeHeroSection />
      <SmeSectorInfoSection />
      <SmeCompaniesAvailedSection />
      <SmeChallengesServicesSection />
      <SmeIndustrySolutionsSection />
      <StickyBottomBar />
    </>
  );
}
