import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Documents Required for Private Limited Company Registration",
  description: "Preparing to register a Pvt Ltd company? Here is the exact checklist of documents required for directors and the registered office.",
  path: "/blog/documents-required-pvt-ltd",
  ogType: "article",
});

export default function PvtLtdDocsArticle() {
  return (
    <div className="pt-32 pb-24 bg-[#FDFBF7] min-h-screen">
      <JsonLd
        schemas={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: "Pvt Ltd Docs Guide", path: "/blog/documents-required-pvt-ltd" },
          ]),
        ]}
      />
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
          <div className="mb-8">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Business Registration</span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-6 tracking-tight leading-tight">
              Documents Required for Private Limited Company Registration
            </h1>
            <div className="text-gray-500 text-sm">Published on August 15, 2024</div>
          </div>
          
          <div className="prose prose-stone max-w-none text-gray-600 prose-headings:text-gray-900 prose-a:text-red-600">
            <p>
              Registering a Private Limited Company is the most popular way to start a scalable business in India. To ensure a smooth incorporation process with the Ministry of Corporate Affairs (MCA), you need to have your documentation perfectly aligned.
            </p>
            
            <h2>Documents for Directors & Shareholders</h2>
            <p>
              Every proposed director must submit the following identity and address proofs:
            </p>
            
            <h3>Identity Proofs</h3>
            <ul>
              <li><strong>PAN Card:</strong> Mandatory for Indian nationals.</li>
              <li><strong>Passport / Voter ID / Driving Licence:</strong> Any one of these is required as a secondary ID proof.</li>
            </ul>

            <h3>Address Proofs (Not older than 2 months)</h3>
            <ul>
              <li><strong>Bank Statement</strong> or</li>
              <li><strong>Electricity Bill</strong> or</li>
              <li><strong>Mobile/Telephone Bill</strong></li>
            </ul>
            <p><em>Note: The name on the address proof must match exactly with the PAN card.</em></p>

            <h2>Documents for the Registered Office</h2>
            <p>
              You don't need a commercial space to start; a residential address can be used as the registered office. You need:
            </p>
            <ul>
              <li><strong>Utility Bill:</strong> Electricity, gas, or water bill in the name of the property owner (not older than 2 months).</li>
              <li><strong>NOC:</strong> A No-Objection Certificate from the property owner allowing the company to use the premises.</li>
              <li><strong>Rent Agreement:</strong> If the property is rented.</li>
            </ul>

            <div className="bg-red-50 p-6 rounded-xl mt-8 border border-red-100">
              <h3 className="text-red-800 mt-0">Ready to Incorporate?</h3>
              <p className="text-red-900 mb-0">
                Our experts make incorporation seamless. Learn more about our <a href="/services/business-registration/private-limited" className="font-bold text-red-700">Private Limited Company Registration</a> package.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
