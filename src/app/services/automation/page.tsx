import { ServiceHero } from "@/components/services/ServiceHero";
import { DocumentChecklist } from "@/components/services/DocumentChecklist";
import { ProcessTimeline } from "@/components/services/ProcessTimeline";
import { FeeBreakdown } from "@/components/services/FeeBreakdown";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Business Process Automation Services in Kalaburagi",
  description: "Streamline operations with custom business process automation (BPA), ERP implementation, and digital workflows.",
  path: "/services/automation",
  keywords: ["Business Process Automation", "ERP implementation Kalaburagi", "Digital transformation", "Workflow automation"],
});

export default function AutomationPage() {
  const faqs = [
    { q: "What processes can be automated?", a: "Almost any repetitive task: invoicing, inventory management, HR onboarding, lead tracking, and customer support." },
    { q: "Do we need to buy expensive software?", a: "Not necessarily. We often implement cloud-based SaaS tools (like Zoho, Google Workspace) that are highly affordable." }
  ];

  return (
    <>
      <JsonLd
        schemas={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Process Automation", path: "/services/automation" },
          ]),
          serviceSchema({
            name: "Business Process Automation",
            description: "Digital Transformation and Workflow Automation Services",
            path: "/services/automation",
          }),
          faqSchema(faqs),
        ]}
      />
      
      <ServiceHero
        title="Business Process Automation"
        description="Cut costs, eliminate manual errors, and scale faster by automating your routine business workflows."
        badge="Digital Transformation"
      />
      
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl">
        <div className="lg:col-span-2 space-y-16">
          <DocumentChecklist 
            documents={[
              "List of current manual processes",
              "Existing software tools used (if any)",
              "Team hierarchy and approval matrix",
              "Key pain points in operations"
            ]} 
          />
          <ProcessTimeline 
            steps={[
              { title: "Workflow Audit", description: "Identifying bottlenecks in your current operations." },
              { title: "Tool Selection", description: "Choosing the right ERP/CRM or automation tools." },
              { title: "Implementation", description: "Setting up automated workflows and training your team." }
            ]}
          />
          <ServiceFAQ faqs={faqs} />
        </div>
        <div>
          <FeeBreakdown 
            items={[
              { name: "Initial Process Audit", amount: "₹5,000" },
              { name: "Implementation setup", amount: "Custom" },
            ]}
            total="Contact Us"
            note="*Software subscription costs are separate"
          />
        </div>
      </div>
    </>
  );
}
