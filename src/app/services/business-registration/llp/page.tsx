import { ServiceHero } from "@/components/services/ServiceHero";
import { DocumentChecklist } from "@/components/services/DocumentChecklist";
import { ProcessTimeline } from "@/components/services/ProcessTimeline";
import { FeeBreakdown } from "@/components/services/FeeBreakdown";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "LLP Registration Services in Kalaburagi",
  description: "Register your Limited Liability Partnership (LLP) in India quickly and affordably. Expert LLP registration consultants in Kalaburagi.",
  path: "/services/business-registration/llp",
  keywords: ["LLP registration Kalaburagi", "Limited Liability Partnership", "LLP consultant", "company registration"],
});

export default function LlpRegistrationPage() {
  const faqs = [
    { q: "What is an LLP?", a: "A Limited Liability Partnership (LLP) combines the limited liability of a company with the flexibility of a partnership." },
    { q: "How many partners are required?", a: "A minimum of 2 partners are required, with no maximum limit." }
  ];

  return (
    <>
      <JsonLd
        schemas={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "LLP Registration", path: "/services/business-registration/llp" },
          ]),
          serviceSchema({
            name: "LLP Registration",
            description: "Limited Liability Partnership Registration Services",
            path: "/services/business-registration/llp",
          }),
          faqSchema(faqs),
        ]}
      />
      
      <ServiceHero
        title="LLP Registration"
        description="Start your business with limited liability and fewer compliance requirements than a private limited company."
        badge="Business Formation"
      />
      
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl">
        <div className="lg:col-span-2 space-y-16">
          <DocumentChecklist 
            documents={[
              "PAN Card of all partners",
              "Aadhaar Card / Voter ID of all partners",
              "Latest Bank Statement (Proof of Address)",
              "NOC from property owner for registered office"
            ]} 
          />
          <ProcessTimeline 
            steps={[
              { title: "Name Approval", description: "Filing RUN-LLP to secure your unique business name." },
              { title: "DSC & DPIN", description: "Applying for Digital Signatures and Partner IDs." },
              { title: "Incorporation & Agreement", description: "Filing FiLLiP and drafting the LLP agreement." }
            ]}
          />
          <ServiceFAQ faqs={faqs} />
        </div>
        <div>
          <FeeBreakdown 
            items={[
              { name: "Professional Fees", amount: "₹4,999" },
              { name: "Govt Fees & Stamps", amount: "₹2,500" },
            ]}
            total="₹7,499"
            note="*Includes DSC for 2 partners"
          />
        </div>
      </div>
    </>
  );
}
