import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Factory, HeartPulse } from "lucide-react";

export const metadata = pageMetadata({
  title: "Business Licences in Kalaburagi (FSSAI, Trade, etc.)",
  description: "Get essential business licences in Kalaburagi including FSSAI food licence, trade licence, and Shop & Establishment Act registration.",
  path: "/services/licences",
  keywords: [
    "FSSAI registration Kalaburagi",
    "Trade licence Gulbarga",
    "Shop establishment registration Karnataka",
    "business licences",
  ],
});

const SERVICES = [
  {
    title: "FSSAI Food Licence",
    description: "Mandatory registration for any business involved in food manufacturing, processing, or retail.",
    href: "/services/licences/fssai",
    icon: HeartPulse,
  },
  {
    title: "Trade Licence",
    description: "Local municipal trade licence for operating a commercial establishment safely.",
    href: "/services/licences/trade-licence",
    icon: Factory,
  },
  {
    title: "Shop & Establishment",
    description: "Labour department registration required for shops, offices, and commercial spaces.",
    href: "/services/licences/shop-establishment",
    icon: ShieldCheck,
  },
];

export default function LicencesCategoryPage() {
  return (
    <div className="pt-32 pb-24 bg-[#FDFBF7] min-h-screen">
      <JsonLd
        schemas={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Licences", path: "/services/licences" },
          ]),
        ]}
      />
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Business Licences
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            Operating legally is the first step to success. We help you obtain all necessary local and central licences required for your specific industry.
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
