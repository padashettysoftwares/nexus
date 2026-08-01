import { Calculator } from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { StickySidebar } from "@/components/services/StickySidebar";
import { DocumentChecklist } from "@/components/services/DocumentChecklist";
import { ProcessTimeline } from "@/components/services/ProcessTimeline";
import { FeeBreakdown } from "@/components/services/FeeBreakdown";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import React from "react";

export const metadata = {
  title: "Monthly Accounting & Bookkeeping | Nexus Solutions",
  description: "Professional accounting, bookkeeping, and payroll services for businesses in India. Outsource your accounting to Nexus Solutions.",
};

export default function AccountingPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceHero 
        category="Accounting"
        title="Monthly Bookkeeping & Accounting"
        description="Focus on growing your business while our expert CAs and accountants manage your ledgers, payroll, and tax compliance using Tally or Zoho Books."
        icon={<Calculator className="w-8 h-8" />}
        benefits={[
          "Dedicated Virtual Accountant",
          "Monthly Profit & Loss Reports",
          "Automated GST Reconciliation",
          "Audit-Ready Financials"
        ]}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          <div className="lg:col-span-8 space-y-20">
            
            <section id="overview">
              <h2 className="text-3xl font-bold font-plus-jakarta text-[#0F172A] mb-6">Overview</h2>
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  Proper accounting is the backbone of any successful business. Our Monthly Accounting Service provides you with a dedicated accounting team that records your daily transactions, reconciles your bank statements, manages payroll, and ensures you are fully compliant with GST and TDS regulations.
                </p>
                <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100 mt-8">
                  <h4 className="text-lg font-bold text-[#1E3A8A] mb-2">What we deliver every month:</h4>
                  <ul className="space-y-2 list-disc list-inside text-gray-700">
                    <li>Updated Ledgers & Trial Balance</li>
                    <li>Bank & Credit Card Reconciliation</li>
                    <li>Monthly Profit & Loss Statement (P&L)</li>
                    <li>Accounts Payable & Receivable Aging Reports</li>
                    <li>GST Input Tax Credit (ITC) matching</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="process">
              <h2 className="text-3xl font-bold font-plus-jakarta text-[#0F172A] mb-6">Our Monthly Workflow</h2>
              <ProcessTimeline 
                steps={[
                  {
                    title: "Document Sharing",
                    description: "You share your monthly bank statements, purchase invoices, and sales registers via a secure cloud folder by the 5th of every month.",
                  },
                  {
                    title: "Data Entry & Ledger Posting",
                    description: "Our accountants update your books in Tally Prime, Zoho Books, or QuickBooks, recording every transaction accurately.",
                  },
                  {
                    title: "Reconciliation",
                    description: "We reconcile your bank statements, payment gateways (Razorpay/Stripe), and GST portals to ensure zero discrepancies.",
                  },
                  {
                    title: "Payroll & TDS Calculation",
                    description: "If you have employees, we process the payroll, generate payslips, and calculate PF, ESI, and TDS liabilities.",
                  },
                  {
                    title: "Reporting & Tax Filing",
                    description: "By the 15th, we provide your financial health reports and file your monthly GST and TDS returns.",
                  }
                ]}
              />
            </section>

            <section id="pricing">
              <h2 className="text-3xl font-bold font-plus-jakarta text-[#0F172A] mb-6">Pricing Breakdown (Starting Base Plan)</h2>
              <FeeBreakdown 
                professionalFee={3999}
                governmentFee={0}
                gstAmount={720}
                total={4719}
                notes="Note: Pricing is Per Month. This base plan covers up to 100 transactions/month. Custom pricing applies for larger volumes or complex e-commerce integrations."
              />
            </section>

          </div>

          <div className="lg:col-span-4">
            <StickySidebar 
              price="3,999/mo"
              timeline="Monthly"
              documentsCount={0}
            />
          </div>

        </div>
      </div>
    </div>
  );
}
