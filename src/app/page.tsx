import { HeroSection } from "@/components/sections/hero-section";
import { QuoteCalculatorSection } from "@/components/sections/quote-calculator-section";
import { StatsSection } from "@/components/sections/stats-section";
import { ServicesSection } from "@/components/sections/services-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";
import { ProcessTimelineSection } from "@/components/sections/process-timeline-section";
import { PopularPackagesSection } from "@/components/sections/popular-packages-section";
import { ClientsSection } from "@/components/sections/clients-section";
import { TrustSection } from "@/components/sections/trust-section";
import { RoadmapSection } from "@/components/sections/roadmap-section";
import { KnowledgeCenterSection } from "@/components/sections/knowledge-center";
import { TestimonialsSection } from "@/components/sections/testimonials-reviews";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <QuoteCalculatorSection />
      <StatsSection />
      <ServicesSection />
      <IndustriesSection />
      <WhyChooseUsSection />
      <RoadmapSection />
      <ProcessTimelineSection />
      <TrustSection />
      <PopularPackagesSection />
      <KnowledgeCenterSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
