import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import Link from "next/link";
import { Calendar } from "lucide-react";

export const metadata = pageMetadata({
  title: "Knowledge Base & Blog | Business Insights",
  description: "Expert insights, guides, and updates on GST, company registration, FSSAI, and tax compliance for businesses in Karnataka.",
  path: "/blog",
});

const ARTICLES = [
  {
    title: "GST Registration Limit for Services in Karnataka (2024)",
    excerpt: "Find out if your service-based business in Karnataka needs to register for GST. We explain the ₹20 Lakh threshold and inter-state rules.",
    date: "Sep 01, 2024",
    href: "/blog/gst-registration-limit-karnataka",
  },
  {
    title: "FSSAI Licence Cost and Validity: Basic vs State vs Central",
    excerpt: "A complete guide to FSSAI food licence fees, eligibility criteria based on turnover, and renewal processes.",
    date: "Aug 28, 2024",
    href: "/blog/fssai-licence-cost-validity",
  },
  {
    title: "Documents Required for Private Limited Company Registration",
    excerpt: "Preparing to register a Pvt Ltd company? Here is the exact checklist of documents required for directors and the registered office.",
    date: "Aug 15, 2024",
    href: "/blog/documents-required-pvt-ltd",
  },
  {
    title: "Is Udyam Registration Mandatory? Benefits Explained",
    excerpt: "Discover why MSME Udyam registration is highly recommended for small businesses and the subsidies it unlocks.",
    date: "Aug 10, 2024",
    href: "/blog/udyam-registration-mandatory-benefits",
  }
];

export default function BlogIndexPage() {
  return (
    <div className="pt-32 pb-24 bg-[#FDFBF7] min-h-screen">
      <JsonLd
        schemas={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ]}
      />
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Knowledge Base
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            Actionable insights and compliance guides for startups and SMEs in Karnataka.
          </p>
        </div>

        <div className="space-y-8">
          {ARTICLES.map((article, index) => (
            <Link key={index} href={article.href} className="block group">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {article.date}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {article.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
