import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms and Conditions",
  description: "Terms and Conditions for Nexus Solutions business consulting services.",
  path: "/terms",
  index: false,
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        schemas={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Terms and Conditions", path: "/terms" },
          ]),
        ]}
      />
      <div className="pt-32 pb-24 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-8 tracking-tight">Terms and Conditions</h1>
            <div className="prose prose-stone max-w-none text-gray-600">
              <p>Last updated: September 2024</p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using the services of Nexus Solutions ("we," "us," or "our"), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Services</h2>
              <p className="mb-4">
                Nexus Solutions provides business consulting, company registration, tax compliance, and related advisory services. The specific scope of services for each client will be outlined in a separate service agreement or engagement letter.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Client Responsibilities</h2>
              <p className="mb-4">
                You agree to provide accurate, complete, and timely information required for us to perform our services. We are not responsible for delays, penalties, or compliance failures resulting from inaccurate or delayed information provided by you.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Fees and Payment</h2>
              <p className="mb-4">
                Fees for our services will be communicated prior to the commencement of any work. Unless otherwise stated, all fees are exclusive of applicable taxes. Payment terms will be specified in the invoice or engagement agreement. Government fees for registrations and filings are separate and must be borne by the client.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Limitation of Liability</h2>
              <p className="mb-4">
                While we strive to provide accurate and up-to-date professional advice, Nexus Solutions shall not be held liable for any direct, indirect, incidental, or consequential damages resulting from the use of our services, changes in government regulations, or business decisions made based on our consultation. Our total liability shall not exceed the total fees paid by you for the specific service in question.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Governing Law</h2>
              <p className="mb-4">
                These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Kalaburagi, Karnataka.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
