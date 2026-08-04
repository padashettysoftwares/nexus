import { SmeHeroSection } from "@/components/sections/sme-theme/sme-hero-section";
import { SmeSectorInfoSection } from "@/components/sections/sme-theme/sme-sector-info-section";
import { SmeCompaniesAvailedSection } from "@/components/sections/sme-theme/sme-companies-availed-section";
import { SmeChallengesServicesSection } from "@/components/sections/sme-theme/sme-challenges-services-section";
import { SmeIndustrySolutionsSection } from "@/components/sections/sme-theme/sme-industry-solutions-section";
import { StickyBottomBar } from "@/components/sections/sme-theme/sticky-bottom-bar";

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
