import { ShieldCheck } from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { StickySidebar } from "@/components/services/StickySidebar";
import { DocumentChecklist } from "@/components/services/DocumentChecklist";
import { ProcessTimeline } from "@/components/services/ProcessTimeline";
import { FeeBreakdown } from "@/components/services/FeeBreakdown";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import React from "react";

export const metadata = {
  title: "ISO 9001:2015 Quality Certification | Nexus Solutions",
  description: "Get ISO 9001 Certified in India. Enhance your brand value, build trust, and qualify for government tenders with Nexus Solutions.",
};

export default function ISO9001Page() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceHero 
        category="Quality Certifications"
        title="ISO 9001:2015 Certification"
        description="The world's most recognized Quality Management System (QMS) standard. Prove your commitment to quality, qualify for government tenders, and win global clients."
        icon={<ShieldCheck className="w-8 h-8" />}
        benefits={[
          "Eligibility for Government Tenders",
          "Global Recognition & Trust",
          "Improved Operational Efficiency",
          "Use ISO Logo on Marketing Materials"
        ]}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          <div className="lg:col-span-8 space-y-20">
            
            <section id="overview">
              <h2 className="text-3xl font-bold font-plus-jakarta text-text-primary mb-6">Overview</h2>
              <div className="prose prose-lg text-text-secondary max-w-none">
                <p>
                  ISO 9001:2015 specifies requirements for a quality management system (QMS). Organizations use the standard to demonstrate the ability to consistently provide products and services that meet customer and regulatory requirements.
                </p>
                <div className="bg-surface-alt rounded-2xl p-6 border border-border mt-8">
                  <h4 className="text-lg font-bold text-primary mb-2">Why is it important?</h4>
                  <ul className="space-y-2 list-disc list-inside text-text-secondary">
                    <li>It is often a mandatory prerequisite for participating in Government and PSU tenders.</li>
                    <li>It instills extreme confidence in B2B clients and international buyers.</li>
                    <li>It helps identify and address risks in your business operations.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="documents">
              <h2 className="text-3xl font-bold font-plus-jakarta text-text-primary mb-6">Required Documents</h2>
              <DocumentChecklist 
                categories={[
                  {
                    title: "Business KYC Documents",
                    docs: [
                      "Company Registration Certificate",
                      "GST Registration Certificate",
                      "PAN Card of the Business",
                      "MSME / Udyam Certificate (Optional)",
                      "Letterhead / Visiting Card"
                    ]
                  },
                  {
                    title: "Operational Documents",
                    docs: [
                      "Purchase/Sale Invoices (2-3 copies)",
                      "Scope of Business Operations",
                      "List of Machinery / Equipment",
                      "Organizational Chart",
                      "Quality Manual (We will help draft this)"
                    ]
                  }
                ]}
              />
            </section>

            <section id="process">
              <h2 className="text-3xl font-bold font-plus-jakarta text-text-primary mb-6">Certification Process</h2>
              <ProcessTimeline 
                steps={[
                  {
                    title: "Gap Analysis & Pre-Audit",
                    description: "We review your current processes and identify gaps against ISO 9001:2015 standards.",
                    duration: "2-3 Days"
                  },
                  {
                    title: "QMS Documentation",
                    description: "Our experts draft your Quality Manual, standard operating procedures (SOPs), and necessary policy documents.",
                    duration: "3-5 Days"
                  },
                  {
                    title: "Implementation & Internal Audit",
                    description: "You implement the documented processes, and we conduct a mock internal audit to ensure readiness.",
                    duration: "4-7 Days"
                  },
                  {
                    title: "Final Certification Audit",
                    description: "An independent certification body (IAF/Non-IAF) audits your business.",
                    duration: "1-2 Days"
                  },
                  {
                    title: "Issuance of Certificate",
                    description: "Upon successful audit completion, the ISO 9001:2015 certificate is issued.",
                    duration: "3-5 Days"
                  }
                ]}
              />
            </section>

            <section id="pricing">
              <h2 className="text-3xl font-bold font-plus-jakarta text-text-primary mb-6">Pricing Breakdown (IAF Approved)</h2>
              <FeeBreakdown 
                professionalFee={4999}
                governmentFee={2000}
                gstAmount={1260}
                total={8259}
                notes="Note: Pricing above is for standard IAF-approved certification for a small business. Non-IAF certifications (for marketing purposes only) are available starting at ₹2,999."
              />
            </section>

            <section id="faq">
              <h2 className="text-3xl font-bold font-plus-jakarta text-text-primary mb-6">Frequently Asked Questions</h2>
              <ServiceFAQ 
                faqs={[
                  {
                    q: "What is the difference between IAF and Non-IAF ISO certification?",
                    a: "IAF (International Accreditation Forum) approved certificates are globally recognized and mandatory for government tenders. Non-IAF certificates are cheaper, issued quickly, and are generally only used for branding or marketing purposes."
                  },
                  {
                    q: "What is the validity of the ISO 9001 certificate?",
                    a: "An ISO certificate is valid for 3 years. However, a mandatory surveillance audit must be conducted every year to maintain the certification's validity."
                  },
                  {
                    q: "Can a completely new startup apply for ISO?",
                    a: "Yes, newly registered startups can apply, provided they have defined their operational processes and QMS documentation."
                  },
                  {
                    q: "Is a physical office inspection required?",
                    a: "For Non-IAF certificates, an online/document audit is usually sufficient. For IAF certificates, a physical or detailed virtual audit by the certification body may be required depending on the industry risk."
                  }
                ]}
              />
            </section>

          </div>

          <div className="lg:col-span-4">
            <StickySidebar 
              price="4,999"
              timeline="10-15 Days"
              documentsCount={10}
            />
          </div>

        </div>
      </div>
    </div>
  );
}
