import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "GST Registration Limit for Services in Karnataka (2024)",
  description: "Find out if your service-based business in Karnataka needs to register for GST. We explain the ₹20 Lakh threshold and mandatory registration rules.",
  path: "/blog/gst-registration-limit-karnataka",
  ogType: "article",
});

export default function GstLimitArticle() {
  return (
    <div className="pt-32 pb-24 bg-[#FDFBF7] min-h-screen">
      <JsonLd
        schemas={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: "GST Limit Karnataka", path: "/blog/gst-registration-limit-karnataka" },
          ]),
        ]}
      />
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
          <div className="mb-8">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">GST & Taxation</span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-6 tracking-tight leading-tight">
              GST Registration Limit for Services in Karnataka (2024)
            </h1>
            <div className="text-gray-500 text-sm">Published on September 1, 2024</div>
          </div>
          
          <div className="prose prose-stone max-w-none text-gray-600 prose-headings:text-gray-900 prose-a:text-red-600">
            <p>
              One of the most common questions we receive from freelancers, consultants, and service providers in Kalaburagi and Bengaluru is: <em>"When do I actually need to register for GST?"</em>
            </p>
            
            <h2>The ₹20 Lakh Threshold</h2>
            <p>
              For service providers operating in Karnataka (and most other standard category states in India), the threshold limit for mandatory GST registration is an aggregate turnover of <strong>₹20 Lakhs</strong> in a financial year. 
            </p>
            <p>
              If your total receipts/billing in the current financial year cross ₹20 Lakhs, you are legally required to obtain a <a href="/services/gst-and-tax/gst-registration">GST Registration</a> within 30 days of crossing the limit.
            </p>

            <h2>What is "Aggregate Turnover"?</h2>
            <p>
              Aggregate turnover includes:
            </p>
            <ul>
              <li>Taxable sales/services</li>
              <li>Exempt sales/services</li>
              <li>Exports of goods or services</li>
              <li>Inter-state supplies made by persons having the same PAN</li>
            </ul>

            <h2>Exceptions: When is GST Mandatory Before ₹20 Lakhs?</h2>
            <p>
              Even if your turnover is zero or below ₹20 Lakhs, you must register for GST immediately if you fall under any of these categories:
            </p>
            <ol>
              <li><strong>Inter-state taxable supply:</strong> If you provide services to a client located in another state (e.g., you are in Karnataka billing a client in Maharashtra). <em>Note: The govt provided an exemption for inter-state service providers up to ₹20L, but check specific conditions.</em></li>
              <li><strong>Casual Taxable Person:</strong> Occasional business in a state where you don't have a fixed place of business.</li>
              <li><strong>Non-Resident Taxable Person.</strong></li>
              <li><strong>E-commerce Operators:</strong> If you sell services through aggregator platforms (like Urban Company, depending on specific section 9(5) rules).</li>
            </ol>

            <h2>Voluntary Registration</h2>
            <p>
              Many businesses choose to register for GST voluntarily even before hitting the ₹20 Lakh mark. Benefits include:
            </p>
            <ul>
              <li>Ability to claim Input Tax Credit (ITC) on business expenses (laptops, software, office rent).</li>
              <li>Higher credibility among corporate B2B clients who only deal with GST-registered vendors.</li>
            </ul>

            <div className="bg-red-50 p-6 rounded-xl mt-8 border border-red-100">
              <h3 className="text-red-800 mt-0">Need help with GST Registration?</h3>
              <p className="text-red-900 mb-0">
                Nexus Solutions provides fast and hassle-free <a href="/services/gst-and-tax/gst-registration" className="font-bold text-red-700">GST Registration services in Kalaburagi</a>. Contact us today for a free consultation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
