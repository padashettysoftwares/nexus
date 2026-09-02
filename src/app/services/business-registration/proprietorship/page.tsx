import { ServiceHero } from "@/components/services/ServiceHero";
import { DocumentChecklist } from "@/components/services/DocumentChecklist";
import { ProcessTimeline } from "@/components/services/ProcessTimeline";
import { FeeBreakdown } from "@/components/services/FeeBreakdown";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Sole Proprietorship Registration in Kalaburagi",
  description: "Start your solo business instantly. Get MSME/Udyam and GST registration for your sole proprietorship in Kalaburagi.",
  path: "/services/business-registration/proprietorship",
  keywords: ["Sole proprietorship registration Kalaburagi", "Start a business", "Udyam registration", "GST for proprietorship"],
});

export default function ProprietorshipRegistrationPage() {
  const faqs = [
    { q: "Is there a specific 'Proprietorship Registration' certificate?", a: "No. A proprietorship is recognized through tax registrations like GST, Udyam (MSME), and Shop & Establishment Act." },
    { q: "Can a proprietor hire employees?", a: "Yes, a sole proprietor can hire any number of employees." }
  ];

  return (
    <>
      <JsonLd
        schemas={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Proprietorship Registration", path: "/services/business-registration/proprietorship" },
          ]),
          serviceSchema({
            name: "Sole Proprietorship Registration",
            description: "Registrations required to start a Sole Proprietorship",
            path: "/services/business-registration/proprietorship",
          }),
          faqSchema(faqs),
        ]}
      />
      
      <ServiceHero
        title="Sole Proprietorship Registration"
        description="The easiest and fastest way to start a business in India. Perfect for freelancers, traders, and local shop owners."
        badge="Business Formation"
      />
      
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl">
        <div className="lg:col-span-2 space-y-16">
          <DocumentChecklist 
            documents={[
              "Proprietor's PAN Card",
              "Aadhaar Card",
              "Bank Account details",
              "Office Address Proof (Electricity bill / rent agreement)"
            ]} 
          />
          <ProcessTimeline 
            steps={[
              { title: "Udyam (MSME) Registration", description: "Getting government recognition as a micro/small enterprise." },
              { title: "GST Registration", description: "Applying for GST if turnover exceeds limits or for inter-state sales." },
              { title: "Current Account", description: "Opening a bank account in the name of your business." }
            ]}
          />
          <ServiceFAQ faqs={faqs} />
        </div>
        <div>
          <FeeBreakdown 
            items={[
              { name: "Udyam Registration", amount: "₹999" },
              { name: "GST Registration", amount: "₹1,499" },
            ]}
            total="₹2,498"
            note="*Can be taken individually"
          />
        </div>
      </div>
    </>
  );
}
