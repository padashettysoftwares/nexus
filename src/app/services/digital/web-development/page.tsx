import { ServiceHero } from "@/components/services/ServiceHero";
import { DocumentChecklist } from "@/components/services/DocumentChecklist";
import { ProcessTimeline } from "@/components/services/ProcessTimeline";
import { FeeBreakdown } from "@/components/services/FeeBreakdown";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Web Design & Development Services in Kalaburagi",
  description: "Get a professional, SEO-optimized website for your business. Top web development agency in Kalaburagi.",
  path: "/services/digital/web-development",
  keywords: ["Web development Kalaburagi", "Website design Gulbarga", "SEO friendly website"],
});

export default function WebDevelopmentPage() {
  const faqs = [
    { q: "Do you provide domain and hosting?", a: "Yes, our packages include 1 year of free domain and premium hosting." },
    { q: "Will the website be mobile-friendly?", a: "Absolutely! All our websites are 100% responsive and optimized for mobile devices." }
  ];

  return (
    <>
      <JsonLd
        schemas={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Web Development", path: "/services/digital/web-development" },
          ]),
          serviceSchema({
            name: "Web Design & Development",
            description: "Custom Web Design & Development Services",
            path: "/services/digital/web-development",
          }),
          faqSchema(faqs),
        ]}
      />
      
      <ServiceHero
        title="Web Design & Development"
        description="Transform your digital presence with lightning-fast, SEO-optimized, and conversion-focused websites."
        badge="Digital Services"
      />
      
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl">
        <div className="lg:col-span-2 space-y-16">
          <DocumentChecklist 
            documents={[
              "Company Logo (High Resolution)",
              "Brand Colors & Guidelines (if any)",
              "Content / Text for pages",
              "Images of your business/products"
            ]} 
          />
          <ProcessTimeline 
            steps={[
              { title: "Discovery & Planning", description: "Understanding your business goals and audience." },
              { title: "Design & Mockups", description: "Creating the visual layout and getting your approval." },
              { title: "Development", description: "Coding the website using modern frameworks (Next.js/React)." },
              { title: "Testing & Launch", description: "Ensuring cross-browser compatibility and going live." }
            ]}
          />
          <ServiceFAQ faqs={faqs} />
        </div>
        <div>
          <FeeBreakdown 
            items={[
              { name: "Basic Website (5 Pages)", amount: "₹15,000" },
              { name: "Corporate Website", amount: "₹25,000" },
              { name: "E-commerce Website", amount: "₹45,000+" },
            ]}
            total="Custom"
            note="*Domain & Hosting included for 1st year"
          />
        </div>
      </div>
    </>
  );
}
