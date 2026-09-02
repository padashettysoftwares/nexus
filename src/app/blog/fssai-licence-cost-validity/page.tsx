import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "FSSAI Licence Cost and Validity: Basic vs State vs Central",
  description: "A complete guide to FSSAI food licence fees, eligibility criteria based on turnover, and renewal processes in India.",
  path: "/blog/fssai-licence-cost-validity",
  ogType: "article",
});

export default function FssaiArticle() {
  return (
    <div className="pt-32 pb-24 bg-[#FDFBF7] min-h-screen">
      <JsonLd
        schemas={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: "FSSAI Licence Guide", path: "/blog/fssai-licence-cost-validity" },
          ]),
        ]}
      />
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
          <div className="mb-8">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Licences</span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-6 tracking-tight leading-tight">
              FSSAI Licence Cost and Validity: Basic vs State vs Central
            </h1>
            <div className="text-gray-500 text-sm">Published on August 28, 2024</div>
          </div>
          
          <div className="prose prose-stone max-w-none text-gray-600 prose-headings:text-gray-900 prose-a:text-red-600">
            <p>
              If you are starting a food business in India—whether it's a small home kitchen, a restaurant, or a large manufacturing unit—obtaining an FSSAI licence is mandatory. 
            </p>
            
            <h2>Types of FSSAI Registration</h2>
            <p>
              FSSAI issues three types of licences based on the scale and turnover of the business:
            </p>
            
            <h3>1. Basic FSSAI Registration</h3>
            <ul>
              <li><strong>Who is it for?</strong> Petty food business operators, small startups, temporary stall holders, and small-scale industries.</li>
              <li><strong>Turnover Limit:</strong> Up to ₹12 Lakhs per annum.</li>
              <li><strong>Government Fee:</strong> ₹100 per year.</li>
            </ul>

            <h3>2. State FSSAI Licence</h3>
            <ul>
              <li><strong>Who is it for?</strong> Mid-sized businesses like restaurants, standard food manufacturers, and marketers operating within a single state.</li>
              <li><strong>Turnover Limit:</strong> Between ₹12 Lakhs and ₹20 Crores per annum.</li>
              <li><strong>Government Fee:</strong> ₹2,000 to ₹5,000 per year (depending on the type of business).</li>
            </ul>

            <h3>3. Central FSSAI Licence</h3>
            <ul>
              <li><strong>Who is it for?</strong> Large food manufacturers, importers, 100% export-oriented units, operators across multiple states, and businesses operating in airports/seaports.</li>
              <li><strong>Turnover Limit:</strong> Above ₹20 Crores per annum.</li>
              <li><strong>Government Fee:</strong> ₹7,500 per year.</li>
            </ul>

            <h2>Validity and Renewal</h2>
            <p>
              An FSSAI licence can be issued for a validity period ranging from <strong>1 to 5 years</strong>, depending on what you choose at the time of application. 
            </p>
            <p>
              You must apply for renewal <strong>at least 30 days before</strong> the expiry date. Late renewals attract a penalty of ₹100 per day.
            </p>

            <div className="bg-red-50 p-6 rounded-xl mt-8 border border-red-100">
              <h3 className="text-red-800 mt-0">Apply for FSSAI Today</h3>
              <p className="text-red-900 mb-0">
                Ensure your food business is fully compliant. We provide seamless <a href="/services/licences/fssai" className="font-bold text-red-700">FSSAI Registration services</a> across Karnataka.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
