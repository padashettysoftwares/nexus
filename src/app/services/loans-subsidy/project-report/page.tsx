import { ServiceHero } from "@/components/services/ServiceHero";
import { DocumentChecklist } from "@/components/services/DocumentChecklist";
import { ProcessTimeline } from "@/components/services/ProcessTimeline";
import { FeeBreakdown } from "@/components/services/FeeBreakdown";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Project Reports & MSME Loans/Subsidies in Kalaburagi",
  description: "Get bankable project reports and assistance with MSME loans and government subsidies in Kalaburagi.",
  path: "/services/loans-subsidy/project-report",
  keywords: ["Project report preparation", "MSME loan consultant Kalaburagi", "PMEGP subsidy", "Bank loan report"],
});

export default function ProjectReportPage() {
  const faqs = [
    { q: "What is a bankable project report?", a: "It is a detailed document containing your business model, market analysis, and financial projections (usually 5 years) required by banks to approve a loan." },
    { q: "Can you help with PMEGP/Mudra loans?", a: "Yes, we guide you through the documentation and application process for various government subsidy schemes like PMEGP and Mudra." }
  ];

  return (
    <>
      <JsonLd
        schemas={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Project Reports", path: "/services/loans-subsidy/project-report" },
          ]),
          serviceSchema({
            name: "Project Reports & Subsidy Assistance",
            description: "Bankable Project Reports and MSME Subsidy Consultation",
            path: "/services/loans-subsidy/project-report",
          }),
          faqSchema(faqs),
        ]}
      />
      
      <ServiceHero
        title="Project Reports & MSME Subsidies"
        description="Secure funding faster with professionally drafted, bank-ready CMA data and project reports."
        badge="Funding & Loans"
      />
      
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl">
        <div className="lg:col-span-2 space-y-16">
          <DocumentChecklist 
            documents={[
              "Business Concept/Plan Details",
              "Quotations for Machinery/Equipment",
              "KYC of Promoters/Directors",
              "Existing Bank Statements (if any)"
            ]} 
          />
          <ProcessTimeline 
            steps={[
              { title: "Data Collection", description: "Gathering technical and commercial details of your project." },
              { title: "Financial Modeling", description: "Preparing 5-year projections, ROI, and CMA data." },
              { title: "Report Delivery", description: "Providing a CA-certified project report ready for bank submission." }
            ]}
          />
          <ServiceFAQ faqs={faqs} />
        </div>
        <div>
          <FeeBreakdown 
            items={[
              { name: "Standard Project Report", amount: "Starts at ₹5,000" },
              { name: "CMA Data Preparation", amount: "Starts at ₹7,500" },
            ]}
            total="Varies"
            note="*Depends on loan amount and complexity"
          />
        </div>
      </div>
    </>
  );
}
