import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight, Award, CheckCircle } from "lucide-react";

export const metadata = pageMetadata({
  title: "Quality Certifications in Kalaburagi | ISO Certification",
  description: "Boost your brand trust with ISO 9001 and other quality certifications for your business in Kalaburagi.",
  path: "/services/quality-certifications",
  keywords: [
    "ISO certification Kalaburagi",
    "ISO 9001 registration",
    "quality certification consultant",
  ],
});

const SERVICES = [
  {
    title: "ISO 9001:2015 Certification",
    description: "Establish a recognized Quality Management System and bid for bigger tenders.",
    href: "/services/quality-certifications/iso-9001",
    icon: Award,
  },
  {
    title: "Other ISO Certifications",
    description: "Environmental, Occupational Health, and Information Security standards.",
    href: "/services/quality-certifications/other",
    icon: CheckCircle,
  },
];

export default function QualityCertificationsCategoryPage() {
  return (
    <div className="pt-32 pb-24 bg-[#FDFBF7] min-h-screen">
      <JsonLd
        schemas={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Quality Certifications", path: "/services/quality-certifications" },
          ]),
        ]}
      />
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Quality Certifications
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            Showcase your commitment to global standards and unlock new business opportunities with our hassle-free certification consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
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
