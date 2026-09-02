import { Calculator } from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { StickySidebar } from "@/components/services/StickySidebar";
import { DocumentChecklist } from "@/components/services/DocumentChecklist";
import { ProcessTimeline } from "@/components/services/ProcessTimeline";
import { FeeBreakdown } from "@/components/services/FeeBreakdown";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/seo";
import React from "react";

const PATH = "/services/gst-and-tax/gst-registration";

const FAQS = [
  {
    q: "Is GST Registration mandatory for selling on Amazon/Flipkart?",
    a: "Yes, if you wish to sell products on e-commerce platforms like Amazon, Flipkart, or Meesho, GST registration is mandatory regardless of your turnover.",
  },
  {
    q: "Can I have multiple GST registrations on the same PAN?",
    a: "Yes. If you operate businesses in different states, you must obtain a separate GST registration for each state. You can also opt for multiple registrations within the same state for different business verticals.",
  },
  {
    q: "Do I have to pay GST every month?",
    a: "Not necessarily. If your turnover is under ₹5 Crores, you can opt for the QRMP scheme to file returns quarterly. However, you must still pay the tax monthly if there is a tax liability.",
  },
  {
    q: "What is the penalty for not registering under GST?",
    a: "If an eligible business fails to register for GST, the penalty is 10% of the tax amount due, subject to a minimum of ₹10,000.",
  },
];

export const metadata = pageMetadata({
  title: "GST Registration in Kalaburagi — GSTIN in 3–5 Days",
  description:
    "Apply for GST registration in Kalaburagi and Gulbarga district with Nexus Solutions. Document check, GST REG-01 filing, ARN, Aadhaar authentication and GSTIN certificate in 3–5 working days, plus ongoing GST return filing.",
  path: PATH,
  keywords: [
    "GST registration Kalaburagi",
    "GST registration Gulbarga",
    "GSTIN apply Karnataka",
    "GST return filing Kalaburagi",
    "GST consultant Gulbarga",
  ],
});

export default function GSTRegistrationPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd
        schemas={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "GST Registration", path: PATH },
          ]),
          serviceSchema({
            name: "GST Registration",
            description:
              "GST registration and return-filing service in Kalaburagi, Karnataka: eligibility check, GST REG-01 application, ARN generation, Aadhaar authentication and issuance of GSTIN and Form REG-06.",
            path: PATH,
            serviceType: "GST registration",
          }),
          faqSchema(FAQS),
        ]}
      />
      <ServiceHero
        category="GST & Tax"
        title="GST Registration"
        description="Mandatory for businesses crossing the ₹40 Lakhs turnover threshold (₹20 Lakhs for services). Apply online and get your GSTIN and Certificate in just 3-5 working days."
        icon={<Calculator className="w-8 h-8" />}
        benefits={[
          "Legally Recognized as Supplier",
          "Claim Input Tax Credit (ITC)",
          "Seamless Interstate Sales",
          "Sell on E-Commerce (Amazon/Flipkart)"
        ]}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          <div className="lg:col-span-8 space-y-20">
            
            <section id="overview">
              <h2 className="text-3xl font-bold font-plus-jakarta text-[#0F172A] mb-6">Overview</h2>
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  Goods and Services Tax (GST) is an indirect tax used in India on the supply of goods and services. It is a comprehensive, multi-stage, destination-based tax that has replaced many indirect taxes in India.
                </p>
                <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100 mt-8">
                  <h4 className="text-lg font-bold text-[#1E3A8A] mb-2">Mandatory Turnover Limits for Registration</h4>
                  <ul className="space-y-2 list-disc list-inside text-gray-700">
                    <li><strong>Sale of Goods:</strong> ₹40 Lakhs (₹20 Lakhs for Special Category States)</li>
                    <li><strong>Service Providers:</strong> ₹20 Lakhs (₹10 Lakhs for Special Category States)</li>
                    <li><strong>E-commerce Sellers:</strong> Mandatory regardless of turnover.</li>
                    <li><strong>Inter-state Sellers:</strong> Mandatory regardless of turnover.</li>
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
                      "Proprietor's PAN Card",
                      "Proprietor's Aadhaar Card",
                      "Passport Size Photo",
                      "Latest Bank Statement / Canceled Cheque",
                      "Electricity Bill of Business Place",
                      "Rent Agreement / NOC"
                    ]
                  },
                  {
                    title: "For Private Limited Companies",
                    docs: [
                      "Company PAN Card",
                      "Certificate of Incorporation (COI)",
                      "MOA & AOA",
                      "Directors' PAN & Aadhaar",
                      "Board Resolution for GST Registration",
                      "Electricity Bill & Rent Agreement"
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
                    title: "Document Collection & Verification",
                    description: "Our experts collect your documents securely and verify them to ensure no rejection from the department.",
                    duration: "1 Day"
                  },
                  {
                    title: "Application Filing (Form GST REG-01)",
                    description: "We prepare and file your GST application on the official GST portal along with the required attachments.",
                    duration: "1 Day"
                  },
                  {
                    title: "ARN Generation",
                    description: "An Application Reference Number (ARN) is generated immediately upon successful submission.",
                    duration: "Instant"
                  },
                  {
                    title: "Aadhaar Authentication",
                    description: "You will receive an email/SMS link from the GST portal to authenticate your Aadhaar via OTP.",
                    duration: "1 Day"
                  },
                  {
                    title: "GSTIN Issuance & Certificate",
                    description: "The tax officer verifies the application and issues the GSTIN and GST Certificate (Form REG-06).",
                    duration: "3-5 Days"
                  }
                ]}
              />
            </section>

            <section id="pricing">
              <h2 className="text-3xl font-bold font-plus-jakarta text-[#0F172A] mb-6">Pricing Breakdown</h2>
              <FeeBreakdown 
                professionalFee={1499}
                governmentFee={0}
                gstAmount={270}
                total={1769}
                notes="Note: There is ZERO government fee for GST Registration. You only pay for our professional service and expertise."
              />
            </section>

            <section id="faq">
              <h2 className="text-3xl font-bold font-plus-jakarta text-[#0F172A] mb-6">Frequently Asked Questions</h2>
              <ServiceFAQ faqs={FAQS} />
            </section>

          </div>

          <div className="lg:col-span-4">
            <StickySidebar 
              price="1,499"
              timeline="3-5 Days"
              documentsCount={6}
            />
          </div>

        </div>
      </div>
    </div>
  );
}
