import { Utensils } from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { StickySidebar } from "@/components/services/StickySidebar";
import { DocumentChecklist } from "@/components/services/DocumentChecklist";
import { ProcessTimeline } from "@/components/services/ProcessTimeline";
import { FeeBreakdown } from "@/components/services/FeeBreakdown";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import React from "react";

export const metadata = {
  title: "FSSAI Food License Registration | Nexus Solutions",
  description: "Get your FSSAI Food License quickly and legally. Mandatory for all food businesses, restaurants, and cloud kitchens in India.",
};

export default function FSSAIPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceHero 
        category="Licences"
        title="FSSAI Food License"
        description="Mandatory for all food businesses, restaurants, cloud kitchens, grocers, and food manufacturers. Ensure food safety compliance and build consumer trust with an FSSAI Certificate."
        icon={<Utensils className="w-8 h-8" />}
        benefits={[
          "Mandatory Legal Compliance",
          "Consumer Trust & Safety",
          "Use FSSAI Logo on Packaging",
          "Required for Swiggy/Zomato Listing"
        ]}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          <div className="lg:col-span-8 space-y-20">
            
            <section id="overview">
              <h2 className="text-3xl font-bold font-plus-jakarta text-[#0F172A] mb-6">Overview</h2>
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  FSSAI (Food Safety and Standards Authority of India) is an autonomous body established under the Ministry of Health & Family Welfare. Securing an FSSAI license is a mandatory requirement before commencing any food business operation in India.
                </p>
                <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100 mt-8">
                  <h4 className="text-lg font-bold text-[#1E3A8A] mb-2">Types of FSSAI Registration</h4>
                  <ul className="space-y-4 text-gray-700">
                    <li>
                      <strong>Basic Registration:</strong> For petty food businesses, small startups, and hawkers with an annual turnover of up to ₹12 Lakhs.
                    </li>
                    <li>
                      <strong>State License:</strong> For medium-sized businesses like restaurants, hotels, and manufacturers with a turnover between ₹12 Lakhs and ₹20 Crores.
                    </li>
                    <li>
                      <strong>Central License:</strong> For large businesses, 100% Export Oriented Units, importers, and businesses operating in multiple states with a turnover above ₹20 Crores.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="documents">
              <h2 className="text-3xl font-bold font-plus-jakarta text-[#0F172A] mb-6">Required Documents</h2>
              <DocumentChecklist 
                categories={[
                  {
                    title: "For Basic FSSAI Registration",
                    docs: [
                      "Applicant's Passport Size Photo",
                      "Photo ID (Aadhaar / Voter ID)",
                      "Proof of Address of Business",
                      "Declaration regarding Food Safety",
                      "Nature of Business Details"
                    ]
                  },
                  {
                    title: "For State/Central License (Extra)",
                    docs: [
                      "Blueprint/Layout of Processing Unit",
                      "List of Directors/Partners with ID Proofs",
                      "List of Food Categories to be Manufactured",
                      "Water Testing Report",
                      "NOC from Municipality/Panchayat"
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
                    title: "Determine License Type",
                    description: "Based on your projected annual turnover and business scale, our experts help you determine if you need a Basic, State, or Central license.",
                    duration: "1 Day"
                  },
                  {
                    title: "Application Drafting",
                    description: "We prepare Form A (for Basic) or Form B (for State/Central) precisely mapped to your specific food categories.",
                    duration: "1-2 Days"
                  },
                  {
                    title: "FoSCoS Portal Submission",
                    description: "Submission of the application along with all declarations and document uploads to the government's FoSCoS portal.",
                    duration: "1 Day"
                  },
                  {
                    title: "Government Processing & Inspection",
                    description: "The Food Safety Officer reviews the application. In some cases, a physical inspection of the premises may be requested.",
                    duration: "7-15 Days"
                  },
                  {
                    title: "Certificate Issuance",
                    description: "Upon approval, a 14-digit FSSAI registration number and digital certificate are issued.",
                    duration: "Upon Approval"
                  }
                ]}
              />
            </section>

            <section id="pricing">
              <h2 className="text-3xl font-bold font-plus-jakarta text-[#0F172A] mb-6">Pricing Breakdown (Basic License - 1 Year)</h2>
              <FeeBreakdown 
                professionalFee={999}
                governmentFee={100}
                gstAmount={180}
                total={1279}
                notes="Note: Government fees vary based on the license type (State/Central) and duration (1 to 5 years). The above pricing is for a 1-Year Basic Registration."
              />
            </section>

            <section id="faq">
              <h2 className="text-3xl font-bold font-plus-jakarta text-[#0F172A] mb-6">Frequently Asked Questions</h2>
              <ServiceFAQ 
                faqs={[
                  {
                    q: "Is FSSAI mandatory for selling homemade food on Swiggy or Zomato?",
                    a: "Yes, it is strictly mandatory. Food delivery aggregators will not onboard you unless you provide a valid FSSAI 14-digit registration number, even if you are operating from a home kitchen."
                  },
                  {
                    q: "What is the validity of an FSSAI License?",
                    a: "An FSSAI license can be issued for a period ranging from 1 year to a maximum of 5 years. You must renew it 30 days before its expiry."
                  },
                  {
                    q: "What is the penalty for running a food business without an FSSAI license?",
                    a: "Operating without an FSSAI license is an offense punishable by imprisonment of up to 6 months and a penalty of up to ₹5,00,000."
                  },
                  {
                    q: "Do I need a separate FSSAI license for different locations?",
                    a: "Yes. If your business operates in multiple locations, you must obtain a separate State/Basic license for each premises, and one Central License for the Head Office."
                  }
                ]}
              />
            </section>

          </div>

          <div className="lg:col-span-4">
            <StickySidebar 
              price="999"
              timeline="7-10 Days"
              documentsCount={5}
            />
          </div>

        </div>
      </div>
    </div>
  );
}
