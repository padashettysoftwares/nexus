import { ServiceHero } from "@/components/services/ServiceHero";
import { DocumentChecklist } from "@/components/services/DocumentChecklist";
import { ProcessTimeline } from "@/components/services/ProcessTimeline";
import { FeeBreakdown } from "@/components/services/FeeBreakdown";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Virtual CFO & Business Advisory Services in Kalaburagi",
  description: "Scale your business with expert financial strategy. Hire a Virtual CFO in Kalaburagi for budgeting, cash flow, and tax planning.",
  path: "/services/advisory/virtual-cfo",
  keywords: ["Virtual CFO Kalaburagi", "Financial advisory", "Business consulting", "Cash flow management"],
});

export default function VirtualCfoPage() {
  const faqs = [
    { q: "What does a Virtual CFO do?", a: "A Virtual CFO provides strategic financial advice, manages cash flow, oversees accounting, and helps with fundraising and budgeting without the cost of a full-time executive." },
    { q: "Is this service suitable for startups?", a: "Yes, startups benefit greatly from early financial planning and investor-ready reporting." }
  ];

  return (
    <>
      <JsonLd
        schemas={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Virtual CFO", path: "/services/advisory/virtual-cfo" },
          ]),
          serviceSchema({
            name: "Virtual CFO Services",
            description: "Expert Financial Advisory and Virtual CFO Services",
            path: "/services/advisory/virtual-cfo",
          }),
          faqSchema(faqs),
        ]}
      />
      
      <ServiceHero
        title="Virtual CFO & Advisory"
        description="Get executive-level financial strategy and insights at a fraction of the cost of a full-time CFO."
        badge="Strategic Advisory"
      />
      
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl">
        <div className="lg:col-span-2 space-y-16">
          <DocumentChecklist 
            documents={[
              "Past 2 Years Financial Statements",
              "Current Business Plan / Pitch Deck",
              "Details of Existing Debts/Loans",
              "Access to Accounting Software"
            ]} 
          />
          <ProcessTimeline 
            steps={[
              { title: "Financial Audit", description: "Reviewing your current financial health and accounting practices." },
              { title: "Strategy & Budgeting", description: "Creating cash flow forecasts and annual budgets." },
              { title: "Monthly Reviews", description: "Providing actionable insights through monthly MIS reports." }
            ]}
          />
          <ServiceFAQ faqs={faqs} />
        </div>
        <div>
          <FeeBreakdown 
            items={[
              { name: "Basic Advisory Retainer", amount: "₹10,000/mo" },
              { name: "Comprehensive VCFO", amount: "₹25,000/mo" },
            ]}
            total="Custom"
            note="*Tailored to business size and complexity"
          />
        </div>
      </div>
    </>
  );
}
