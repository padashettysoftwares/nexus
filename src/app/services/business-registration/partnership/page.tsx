import { ServiceHero } from "@/components/services/ServiceHero";
import { DocumentChecklist } from "@/components/services/DocumentChecklist";
import { ProcessTimeline } from "@/components/services/ProcessTimeline";
import { FeeBreakdown } from "@/components/services/FeeBreakdown";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Partnership Firm Registration in Kalaburagi",
  description: "Draft your partnership deed and register your firm legally in Kalaburagi. Fast and affordable partnership registration.",
  path: "/services/business-registration/partnership",
  keywords: ["Partnership registration Kalaburagi", "Partnership deed drafting", "Firm registration", "Register of Firms"],
});

export default function PartnershipRegistrationPage() {
  const faqs = [
    { q: "Is registration of a partnership mandatory?", a: "It is not strictly mandatory, but an unregistered firm cannot file a suit against third parties. Registration is highly recommended." },
    { q: "How long does it take?", a: "Drafting the deed takes 1-2 days. Registration with the Registrar of Firms takes a few weeks depending on the state." }
  ];

  return (
    <>
      <JsonLd
        schemas={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Partnership Registration", path: "/services/business-registration/partnership" },
          ]),
          serviceSchema({
            name: "Partnership Registration",
            description: "Partnership Deed Drafting and Firm Registration",
            path: "/services/business-registration/partnership",
          }),
          faqSchema(faqs),
        ]}
      />
      
      <ServiceHero
        title="Partnership Firm Registration"
        description="Formalize your business relationship with a legally binding partnership deed and official registration."
        badge="Business Formation"
      />
      
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl">
        <div className="lg:col-span-2 space-y-16">
          <DocumentChecklist 
            documents={[
              "PAN Card of all partners",
              "Address Proof of all partners",
              "Registered Office Address Proof",
              "Draft details of profit sharing ratios"
            ]} 
          />
          <ProcessTimeline 
            steps={[
              { title: "Drafting the Deed", description: "Preparing the partnership deed based on mutual agreements." },
              { title: "Notarization & Stamping", description: "Printing the deed on stamp paper and notarizing it." },
              { title: "PAN & Registration", description: "Applying for firm PAN and registering with Registrar of Firms." }
            ]}
          />
          <ServiceFAQ faqs={faqs} />
        </div>
        <div>
          <FeeBreakdown 
            items={[
              { name: "Deed Drafting & Notary", amount: "₹2,500" },
              { name: "RoF Registration Fees", amount: "₹1,500" },
            ]}
            total="₹4,000"
            note="*Stamp paper cost extra as per capital"
          />
        </div>
      </div>
    </>
  );
}
