import { ContactClient } from "./contact-client";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, breadcrumbSchema, organizationSchema, SITE_URL } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact — Business & Tax Consultants in Kalaburagi",
  description:
    "Contact Nexus Solutions in Kalaburagi (Gulbarga), Karnataka for company registration, GST, FSSAI, ISO, trademark, MSME and accounting help. Call +91 94834 86111 or +91 80737 26564, or visit our office on MG Road.",
  path: "/contact",
  keywords: [
    "Nexus Solutions contact",
    "business consultant Kalaburagi phone number",
    "CA office MG Road Kalaburagi",
    "company registration office Gulbarga",
  ],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        schemas={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            url: `${SITE_URL}/contact`,
            name: "Contact Nexus Solutions",
            about: { "@id": `${SITE_URL}/#organization` },
          },
          organizationSchema(),
        ]}
      />
      <ContactClient />
    </>
  );
}
