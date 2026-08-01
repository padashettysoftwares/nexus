import { Building2 } from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { StickySidebar } from "@/components/services/StickySidebar";
import { DocumentChecklist } from "@/components/services/DocumentChecklist";
import { ProcessTimeline } from "@/components/services/ProcessTimeline";
import { FeeBreakdown } from "@/components/services/FeeBreakdown";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";

export const metadata = {
  title: "Private Limited Company Registration in Kalaburagi | Nexus Solutions",
  description: "Register your Private Limited Company with Nexus Solutions. Fast processing, transparent pricing, and expert CA assistance.",
};

export default function PrivateLimitedPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceHero 
        category="Business Registration"
        title="Private Limited Company Registration"
        description="The most popular legal structure for businesses in India. Get your company registered in 7-10 days with complete MCA compliance, PAN, TAN, and free expert consultation."
        icon={<Building2 className="w-8 h-8" />}
        benefits={[
          "Limited Liability Protection",
          "Easy to Raise Funds & Capital",
          "Separate Legal Entity Status",
          "Highest Credibility & Trust"
        ]}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-20">
            
            {/* Overview Section */}
            <section id="overview">
              <h2 className="text-3xl font-bold font-plus-jakarta text-[#0F172A] mb-6">Overview</h2>
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  A Private Limited Company (Pvt Ltd) is a privately held small business entity. This type of business entity limits owner liability to their shares, restricts shareholders from publicly trading shares, and caps the maximum number of shareholders to 200.
                </p>
                <p>
                  It is the most highly recommended business structure for startups and growing businesses in India because it allows outside funding (Angel Investors/VCs), offers ESOPs to employees, and provides significant tax advantages under the Startup India scheme.
                </p>
                <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100 mt-8">
                  <h4 className="text-lg font-bold text-[#1E3A8A] mb-2">Who should register?</h4>
                  <ul className="space-y-2 list-disc list-inside text-gray-700">
                    <li>Startups looking to raise venture capital or angel investment.</li>
                    <li>Businesses with high revenue potential and multiple co-founders.</li>
                    <li>Tech companies planning to issue ESOPs to employees.</li>
                    <li>B2B businesses requiring high trust from large corporate clients.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Documents Section */}
            <section id="documents">
              <h2 className="text-3xl font-bold font-plus-jakarta text-[#0F172A] mb-6">Required Documents</h2>
              <p className="text-gray-600 mb-8">Please ensure all documents are clear, legible, and self-attested where necessary.</p>
              <DocumentChecklist 
                categories={[
                  {
                    title: "For Directors & Shareholders",
                    docs: [
                      "PAN Card (Mandatory)",
                      "Aadhaar Card / Voter ID / Passport",
                      "Latest Bank Statement (Not older than 2 months)",
                      "Passport Size Photograph",
                      "Specimen Signature (Blank paper with signature)"
                    ]
                  },
                  {
                    title: "For Registered Office Address",
                    docs: [
                      "Latest Electricity Bill / Water Bill",
                      "Rent Agreement (If property is rented)",
                      "NOC from Property Owner",
                      "Property Tax Receipt (If owned)"
                    ]
                  }
                ]}
              />
            </section>

            {/* Process Section */}
            <section id="process">
              <h2 className="text-3xl font-bold font-plus-jakarta text-[#0F172A] mb-6">Registration Process</h2>
              <ProcessTimeline 
                steps={[
                  {
                    title: "Digital Signature Certificate (DSC)",
                    description: "We apply for the DSC of all proposed directors. This is required to sign electronic documents securely on the MCA portal.",
                    duration: "1-2 Days"
                  },
                  {
                    title: "Director Identification Number (DIN)",
                    description: "Once DSC is approved, we apply for the DIN for the directors if they do not already possess one.",
                    duration: "1 Day"
                  },
                  {
                    title: "Name Approval (RUN)",
                    description: "We submit your top 2 preferred company names to the MCA for approval under the Reserve Unique Name facility.",
                    duration: "2-3 Days"
                  },
                  {
                    title: "MOA & AOA Drafting",
                    description: "Our experts draft the Memorandum of Association (MOA) and Articles of Association (AOA) tailored to your business objectives.",
                    duration: "1-2 Days"
                  },
                  {
                    title: "Final Incorporation (SPICe+)",
                    description: "Filing of the master SPICe+ form with MCA. Once approved, the Certificate of Incorporation, PAN, and TAN are issued.",
                    duration: "3-5 Days"
                  }
                ]}
              />
            </section>

            {/* Fees Section */}
            <section id="pricing">
              <h2 className="text-3xl font-bold font-plus-jakarta text-[#0F172A] mb-6">Pricing Breakdown</h2>
              <FeeBreakdown 
                professionalFee={4999}
                governmentFee={1500}
                gstAmount={899}
                total={7398}
                notes="Note: State-wise Stamp Duty on Authorized Capital is extra and varies depending on the state of registration (e.g., Karnataka, Maharashtra)."
              />
            </section>

            {/* FAQ Section */}
            <section id="faq">
              <h2 className="text-3xl font-bold font-plus-jakarta text-[#0F172A] mb-6">Frequently Asked Questions</h2>
              <ServiceFAQ 
                faqs={[
                  {
                    q: "How many minimum directors are required?",
                    a: "A minimum of 2 directors are required to register a Private Limited Company in India. The maximum limit is 15 directors."
                  },
                  {
                    q: "Is it mandatory to have a commercial office space?",
                    a: "No, it is not mandatory. You can register your company at a residential address as long as you can provide a utility bill and an NOC from the property owner."
                  },
                  {
                    q: "Do I need to be physically present during registration?",
                    a: "No, the entire process is 100% online. You just need to provide soft copies of the required documents and complete a video KYC for the Digital Signature."
                  },
                  {
                    q: "What is the minimum capital required?",
                    a: "There is no minimum paid-up capital requirement anymore. You can start a Private Limited Company with an authorized capital of as low as ₹10,000."
                  }
                ]}
              />
            </section>

          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-4">
            <StickySidebar 
              price="4,999"
              timeline="7-10 Days"
              documentsCount={9}
            />
          </div>

        </div>
      </div>
    </div>
  );
}
