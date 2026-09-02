import { ServiceHero } from "@/components/services/ServiceHero";
import { DocumentChecklist } from "@/components/services/DocumentChecklist";
import { ProcessTimeline } from "@/components/services/ProcessTimeline";
import { FeeBreakdown } from "@/components/services/FeeBreakdown";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Import Export Code (IEC) Registration in Kalaburagi",
  description: "Get your IEC Code for import-export business in India. Expert IEC registration consultants in Kalaburagi.",
  path: "/services/import-export/iec-code",
  keywords: ["IEC code registration", "Import Export Code Kalaburagi", "IEC consultant"],
});

export default function IecCodePage() {
  const faqs = [
    { q: "Is IEC mandatory for export/import?", a: "Yes, IEC is mandatory unless specifically exempted." },
    { q: "What is the validity of IEC?", a: "IEC is valid for a lifetime, but it must be updated annually between April and June." }
  ];

  return (
    <>
      <JsonLd
        schemas={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "IEC Code", path: "/services/import-export/iec-code" },
          ]),
          serviceSchema({
            name: "IEC Code Registration",
            description: "Import Export Code Registration Services",
            path: "/services/import-export/iec-code",
          }),
          faqSchema(faqs),
        ]}
      />
      
      <ServiceHero
        title="Import Export Code (IEC) Registration"
        description="Expand your business globally. We provide hassle-free IEC registration with DGFT."
        badge="DGFT Registration"
      />
      
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl">
        <div className="lg:col-span-2 space-y-16">
          <DocumentChecklist 
            documents={[
              "PAN Card of the individual/business",
              "Aadhaar Card / Voter ID",
              "Current Bank Account Cancelled Cheque",
              "Address Proof (Electricity Bill / Rent Agreement)"
            ]} 
          />
          <ProcessTimeline 
            steps={[
              { title: "Document Collection", description: "Submit the required documents online." },
              { title: "Application Drafting", description: "We draft and file the IEC application on the DGFT portal." },
              { title: "Certificate Issuance", description: "Receive your IEC certificate within 1-3 working days." }
            ]}
          />
          <ServiceFAQ faqs={faqs} />
        </div>
        <div>
          <FeeBreakdown 
            items={[
              { name: "Govt Fee", amount: "₹500" },
              { name: "Professional Fee", amount: "₹1,500" },
            ]}
            total="₹2,000"
            note="*Taxes applicable"
          />
        </div>
      </div>
    </>
  );
}
