import { Globe } from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { StickySidebar } from "@/components/services/StickySidebar";
import { DocumentChecklist } from "@/components/services/DocumentChecklist";
import { ProcessTimeline } from "@/components/services/ProcessTimeline";
import { FeeBreakdown } from "@/components/services/FeeBreakdown";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import React from "react";

export const metadata = {
  title: "Trademark Registration in Kalaburagi | Nexus Solutions",
  description: "Protect your brand name and logo with Trademark Registration. Prevent competitors from copying your identity.",
};

export default function TrademarkPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceHero 
        category="Trademark & IP"
        title="Trademark Registration"
        description="Protect your brand identity, logo, and business name from being copied. Get legal ownership and start using the ™ symbol in just 3 days."
        icon={<Globe className="w-8 h-8" />}
        benefits={[
          "Exclusive Legal Rights to Brand Name",
          "Use ™ Symbol Immediately",
          "Prevents Competitor Copying",
          "Asset Creation & Valuation"
        ]}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          <div className="lg:col-span-8 space-y-20">
            
            <section id="overview">
              <h2 className="text-3xl font-bold font-plus-jakarta text-[#0F172A] mb-6">Overview</h2>
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  A trademark is a unique symbol, word, logo, or design used to represent a business or its products. Registering a trademark gives you exclusive legal rights to use it and prevents others from stealing your brand identity.
                </p>
                <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100 mt-8">
                  <h4 className="text-lg font-bold text-[#1E3A8A] mb-2">What can you trademark?</h4>
                  <ul className="space-y-2 list-disc list-inside text-gray-700">
                    <li><strong>Wordmark:</strong> The exact name of your brand (e.g., "NEXUS").</li>
                    <li><strong>Logo/Device Mark:</strong> The visual graphic or symbol of your brand.</li>
                    <li><strong>Slogan/Tagline:</strong> A catchy phrase (e.g., "Just Do It").</li>
                    <li><strong>Color/Sound:</strong> Unique packaging colors or jingles.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="documents">
              <h2 className="text-3xl font-bold font-plus-jakarta text-[#0F172A] mb-6">Required Documents</h2>
              <DocumentChecklist 
                categories={[
                  {
                    title: "For Individuals / Proprietorships",
                    docs: [
                      "Applicant's PAN & Aadhaar",
                      "Brand Logo (if applying for Device Mark)",
                      "Signed Form-48 (Authorization Letter)",
                      "User Affidavit (If trademark is already in use)"
                    ]
                  },
                  {
                    title: "For Companies / LLPs",
                    docs: [
                      "Company Incorporation Certificate (COI)",
                      "Udyam (MSME) Certificate (Required for 50% Govt Fee Discount)",
                      "Signed Form-48 by Authorized Signatory",
                      "Board Resolution"
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
                    title: "Comprehensive Trademark Search",
                    description: "Our legal experts conduct a thorough search across 45 TM classes to ensure your brand name isn't already taken or similar to an existing one.",
                    duration: "1 Day"
                  },
                  {
                    title: "Class Selection & Drafting",
                    description: "We determine the correct classes for your products/services and draft the application and Form-48.",
                    duration: "1 Day"
                  },
                  {
                    title: "Application Filing",
                    description: "We file the TM-A application on the IP India portal. You can instantly start using the ™ symbol next to your brand.",
                    duration: "1 Day"
                  },
                  {
                    title: "Vienna Codification & Examination",
                    description: "The registry examines the application. If they find issues, they issue an Examination Report (objection), to which we must file a legal reply.",
                    duration: "1-3 Months"
                  },
                  {
                    title: "Journal Publication & Registration",
                    description: "If accepted, it is published in the TM Journal. If no third party opposes it within 4 months, the final ® Certificate is issued.",
                    duration: "6-12 Months"
                  }
                ]}
              />
            </section>

            <section id="pricing">
              <h2 className="text-3xl font-bold font-plus-jakarta text-[#0F172A] mb-6">Pricing Breakdown (For Individuals / MSMEs)</h2>
              <FeeBreakdown 
                professionalFee={1999}
                governmentFee={4500}
                gstAmount={360}
                total={6859}
                notes="Note: Government fee is ₹4,500 per class for Individuals, Startups, and MSMEs. For Companies without an MSME certificate, the government fee is ₹9,000 per class."
              />
            </section>

            <section id="faq">
              <h2 className="text-3xl font-bold font-plus-jakarta text-[#0F172A] mb-6">Frequently Asked Questions</h2>
              <ServiceFAQ 
                faqs={[
                  {
                    q: "When can I use the ™ and ® symbols?",
                    a: "You can use the ™ symbol immediately after we file the application and provide you with the acknowledgement receipt. You can only use the ® symbol after the trademark is officially registered (usually takes 6-12 months)."
                  },
                  {
                    q: "Is trademark registration valid worldwide?",
                    a: "No, a trademark registered in India is valid only within India. For global protection, you must file international applications through the Madrid Protocol."
                  },
                  {
                    q: "What is an Examination Report (Objection)?",
                    a: "An objection occurs when the Trademark Examiner feels your mark is too similar to an existing one, or is generic. Our lawyers will draft and file a legal reply to overcome this (additional charges may apply)."
                  },
                  {
                    q: "What is the validity of a Trademark?",
                    a: "A registered trademark is valid for 10 years. It can be renewed indefinitely for subsequent 10-year periods."
                  }
                ]}
              />
            </section>

          </div>

          <div className="lg:col-span-4">
            <StickySidebar 
              price="1,999"
              timeline="3 Days to File"
              documentsCount={4}
            />
          </div>

        </div>
      </div>
    </div>
  );
}
