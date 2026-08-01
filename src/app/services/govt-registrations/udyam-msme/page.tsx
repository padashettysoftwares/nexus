import { Briefcase } from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { StickySidebar } from "@/components/services/StickySidebar";
import { DocumentChecklist } from "@/components/services/DocumentChecklist";
import { ProcessTimeline } from "@/components/services/ProcessTimeline";
import { FeeBreakdown } from "@/components/services/FeeBreakdown";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import React from "react";

export const metadata = {
  title: "Udyam (MSME) Registration | Nexus Solutions",
  description: "Get your MSME (Udyam) Registration. Unlock government subsidies, cheaper bank loans, and 50% discount on Trademark fees.",
};

export default function MSMEPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceHero 
        category="Government Registrations"
        title="Udyam (MSME) Registration"
        description="Unlock massive government benefits, collateral-free bank loans, and protection against delayed payments with an MSME Registration."
        icon={<Briefcase className="w-8 h-8" />}
        benefits={[
          "50% Discount on Trademark & Patents",
          "Protection against Delayed Payments",
          "Collateral-Free Bank Loans (CGTMSE)",
          "Subsidies on Electricity Bills"
        ]}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          <div className="lg:col-span-8 space-y-20">
            
            <section id="overview">
              <h2 className="text-3xl font-bold font-plus-jakarta text-[#0F172A] mb-6">Overview</h2>
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  Udyam Registration is a government certification provided to micro, small, and medium enterprises (MSMEs) in India. Previously known as Udyog Aadhaar, it is an essential registration that formally registers your business under the Ministry of MSME.
                </p>
                <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100 mt-8">
                  <h4 className="text-lg font-bold text-[#1E3A8A] mb-2">Are you an MSME?</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Micro:</strong> Investment &lt; ₹1 Crore AND Turnover &lt; ₹5 Crores</li>
                    <li><strong>Small:</strong> Investment &lt; ₹10 Crores AND Turnover &lt; ₹50 Crores</li>
                    <li><strong>Medium:</strong> Investment &lt; ₹50 Crores AND Turnover &lt; ₹250 Crores</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="documents">
              <h2 className="text-3xl font-bold font-plus-jakarta text-[#0F172A] mb-6">Required Documents</h2>
              <DocumentChecklist 
                categories={[
                  {
                    title: "For Proprietorships",
                    docs: [
                      "Aadhaar Card (Linked with Mobile Number)",
                      "PAN Card",
                      "Bank Account Details (IFSC & A/c No)",
                      "Business Address Details",
                      "NIC Code (Nature of Business)"
                    ]
                  },
                  {
                    title: "For Companies / Partnerships",
                    docs: [
                      "Company / Firm PAN Card",
                      "Aadhaar Card of Authorized Director/Partner",
                      "GST Certificate (If registered)",
                      "Bank Account Details"
                    ]
                  }
                ]}
              />
            </section>

            <section id="process">
              <h2 className="text-3xl font-bold font-plus-jakarta text-[#0F172A] mb-6">Registration Process</h2>
              <ProcessTimeline 
                steps={[
                  {
                    title: "Data Collection & NIC Mapping",
                    description: "We collect your PAN/Aadhaar details and determine the correct NIC (National Industrial Classification) codes for your business activities.",
                    duration: "1 Day"
                  },
                  {
                    title: "Aadhaar OTP Authentication",
                    description: "We initiate the application on the Udyam portal. You must provide the OTP sent to your Aadhaar-linked mobile number.",
                    duration: "Instant"
                  },
                  {
                    title: "Filing Application",
                    description: "Our experts file the complete application with plant/office details, investment data, and employee count.",
                    duration: "1 Day"
                  },
                  {
                    title: "Udyam Certificate Generation",
                    description: "The government processes the application and issues the Udyam Registration Certificate with a unique Udyam Registration Number (URN).",
                    duration: "2-3 Days"
                  }
                ]}
              />
            </section>

            <section id="pricing">
              <h2 className="text-3xl font-bold font-plus-jakarta text-[#0F172A] mb-6">Pricing Breakdown</h2>
              <FeeBreakdown 
                professionalFee={499}
                governmentFee={0}
                gstAmount={90}
                total={589}
                notes="Note: The Udyam registration portal does not charge any government fees. You are only paying for our professional filing services."
              />
            </section>

          </div>

          <div className="lg:col-span-4">
            <StickySidebar 
              price="499"
              timeline="2-3 Days"
              documentsCount={5}
            />
          </div>

        </div>
      </div>
    </div>
  );
}
