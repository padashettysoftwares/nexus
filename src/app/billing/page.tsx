import { BillingSystem } from "@/components/billing/billing-system";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Billing & Quotation | Nexus Solutions",
  description: "Generate professional bills and quotations for Nexus Solutions.",
};

export default function BillingPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <BillingSystem />
    </main>
  );
}
