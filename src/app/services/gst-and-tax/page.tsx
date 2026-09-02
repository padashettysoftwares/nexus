import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight, Calculator, FileText, Briefcase } from "lucide-react";

export const metadata = pageMetadata({
  title: "GST & Tax Filing Services in Kalaburagi",
  description: "Comprehensive GST registration, return filing, and income tax consulting services for businesses in Kalaburagi, Karnataka.",
  path: "/services/gst-and-tax",
  keywords: [
    "GST registration Kalaburagi",
    "GST return filing Gulbarga",
    "income tax consultant Karnataka",
    "tax advisory services",
  ],
});

const SERVICES = [
  {
    title: "GST Registration",
    description: "Get your business GST registered quickly with full compliance.",
    href: "/services/gst-and-tax/gst-registration",
    icon: Calculator,
  },
  {
    title: "GST Return Filing",
    description: "Monthly and quarterly GST return filing (GSTR-1, GSTR-3B) by experts.",
    href: "/services/gst-and-tax/gst-returns",
    icon: FileText,
  },
  {
    title: "Income Tax Returns",
    description: "Corporate and individual income tax return filing and planning.",
    href: "/services/gst-and-tax/income-tax",
    icon: Briefcase,
  },
];

export default function GstAndTaxCategoryPage() {
  return (
    <div className="pt-32 pb-24 bg-[#FDFBF7] min-h-screen">
      <JsonLd
        schemas={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "GST & Tax", path: "/services/gst-and-tax" },
          ]),
        ]}
      />
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            GST &amp; Tax Services
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            Ensure your business remains 100% compliant with our end-to-end GST and income tax services. We manage the filings so you can manage your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <Link key={index} href={service.href} className="group">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-red-100 transition-all h-full flex flex-col relative overflow-hidden">
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-8 flex-grow">{service.description}</p>
                <div className="flex items-center text-red-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
