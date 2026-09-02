import { PricingClient } from "./pricing-client";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Pricing & Compliance Packages",
  description:
    "Transparent pricing for Nexus Solutions compliance packages and individual services — company registration, GST & TDS filing, accounting, trademark and ISO support. Request a quote or use the online estimator.",
  path: "/pricing",
  keywords: [
    "company compliance package price",
    "GST filing charges Kalaburagi",
    "accounting package pricing Karnataka",
    "business registration cost Gulbarga",
  ],
});

export default function PricingPage() {
  return (
    <>
      <JsonLd
        schemas={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing" },
          ]),
        ]}
      />
      <PricingClient />
    </>
  );
}
