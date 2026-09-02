import { ServicesSection } from "@/components/sections/services-section";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, breadcrumbSchema, SITE_URL } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Business, Tax, Licence & Compliance Services in Kalaburagi",
  description:
    "The full range of Nexus Solutions services for startups and SMEs in Kalaburagi and Karnataka: company & LLP registration, GST and income-tax filing, FSSAI and trade licences, ISO certification, trademark & IP, Udyam/MSME, import-export code, accounting and annual ROC compliance.",
  path: "/services",
  keywords: [
    "business services Kalaburagi",
    "company registration services Gulbarga",
    "tax and compliance consultant Karnataka",
    "licence registration Kalaburagi",
    "startup compliance services",
  ],
});

const SERVICE_LINKS = [
  { name: "Private Limited Company Registration", path: "/services/business-registration/private-limited" },
  { name: "GST Registration", path: "/services/gst-and-tax/gst-registration" },
  { name: "FSSAI Food Licence", path: "/services/licences/fssai" },
  { name: "ISO 9001:2015 Certification", path: "/services/quality-certifications/iso-9001" },
  { name: "Trademark Registration", path: "/services/trademark-and-ip/trademark-registration" },
  { name: "Udyam / MSME Registration", path: "/services/govt-registrations/udyam-msme" },
  { name: "Monthly Accounting & Bookkeeping", path: "/services/accounting/monthly-bookkeeping" },
];

export default function ServicesPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Nexus Solutions services",
    itemListElement: SERVICE_LINKS.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      url: `${SITE_URL}${s.path}`,
    })),
  };

  return (
    <div className="pt-24 pb-20">
      <JsonLd
        schemas={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          itemList,
        ]}
      />
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-plus-jakarta text-text-primary mb-6">
            Business, Tax &amp; Compliance Services in Kalaburagi
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            Nexus Solutions handles company formation, taxation, licensing, certification and
            ongoing compliance for startups and SMEs across Kalaburagi, Gulbarga district and
            wider Karnataka. Explore each service below, or{" "}
            <a href="/contact" className="text-primary font-semibold underline underline-offset-4">
              talk to our team
            </a>{" "}
            about a combined engagement.
          </p>
        </div>
      </div>
      <ServicesSection />
    </div>
  );
}
