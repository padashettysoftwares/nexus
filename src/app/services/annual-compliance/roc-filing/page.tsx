import { ServiceHero } from "@/components/services/ServiceHero";
import { DocumentChecklist } from "@/components/services/DocumentChecklist";
import { ProcessTimeline } from "@/components/services/ProcessTimeline";
import { FeeBreakdown } from "@/components/services/FeeBreakdown";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Annual ROC Compliance & Filing Services in Kalaburagi",
  description: "Ensure your Private Limited Company or LLP stays compliant with MCA. Expert ROC filing consultants in Kalaburagi.",
  path: "/services/annual-compliance/roc-filing",
  keywords: ["ROC filing Kalaburagi", "MCA compliance", "Annual return filing", "Company secretarial services"],
});

export default function RocFilingPage() {
  const faqs = [
    { q: "What is the due date for ROC annual filing?", a: "Generally, AOC-4 must be filed within 30 days and MGT-7 within 60 days of the AGM." },
    { q: "What happens if we don't file ROC returns?", a: "Late filing attracts heavy penalties of ₹100 per day of default, and directors may face disqualification." }
  ];

  return (
    <>
      <JsonLd
        schemas={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "ROC Filing", path: "/services/annual-compliance/roc-filing" },
          ]),
          serviceSchema({
            name: "Annual ROC Compliance",
            description: "Company Annual Filing and MCA Compliance Services",
            path: "/services/annual-compliance/roc-filing",
          }),
          faqSchema(faqs),
        ]}
      />
      
      <ServiceHero
        title="Annual ROC Compliance & Filing"
        description="Stay 100% compliant with MCA regulations. We handle board resolutions, auditor appointments, and annual returns."
        badge="Corporate Compliance"
      />
      
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl">
        <div className="lg:col-span-2 space-y-16">
          <DocumentChecklist 
            documents={[
              "Audited Financial Statements",
              "Board Report and Audit Report",
              "Digital Signature Certificate (DSC) of Directors",
              "List of Shareholders and Directors"
            ]} 
          />
          <ProcessTimeline 
            steps={[
              { title: "Audit Completion", description: "Ensure statutory audit is completed." },
              { title: "AGM Documentation", description: "Draft notice of AGM, director's report, and resolutions." },
              { title: "Filing AOC-4 & MGT-7", description: "Upload forms to the MCA portal with DSC." }
            ]}
          />
          <ServiceFAQ faqs={faqs} />
        </div>
        <div>
          <FeeBreakdown 
            items={[
              { name: "Small Company ROC Filing", amount: "₹4,999" },
              { name: "Govt Challan Fees", amount: "As Actuals" },
            ]}
            total="Starts from ₹4,999"
            note="*Does not include Statutory Audit Fees"
          />
        </div>
      </div>
    </>
  );
}
