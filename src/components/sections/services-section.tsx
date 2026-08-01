"use client";

import { motion } from "framer-motion";
import { 
  Building2, FileText, BadgeCheck, Shield, Globe, Landmark, 
  Calculator, Laptop, Calendar, LineChart, Briefcase, ChevronRight,
  Clock, FileStack, IndianRupee, Cpu, Code
} from "lucide-react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

const services = [
  { title: "Business Registration", desc: "Private Limited, LLP, Partnership, Proprietorship.", icon: Building2, time: "7-10 Days", docs: "PAN, Aadhaar, Proof", price: "Contact Us", href: "/services/business-registration/private-limited" },
  { title: "GST & Tax", desc: "Registration, Return Filing, TDS, and Income Tax.", icon: FileText, time: "3-5 Days", docs: "PAN, Aadhaar, Bank", price: "Contact Us", href: "/services/gst-and-tax/gst-registration" },
  { title: "Licences", desc: "FSSAI, Trade, Labour, Factory, Fire NOC.", icon: BadgeCheck, time: "10-15 Days", docs: "Varies by License", price: "Contact Us", href: "/services/licences/fssai" },
  { title: "Quality Certifications", desc: "ISO 9001, HACCP, GMP, CE, Halal, Organic.", icon: Shield, time: "15-20 Days", docs: "Business Proof", price: "Contact Us", href: "/services/quality-certifications/iso-9001" },
  { title: "Trademark & IP", desc: "Trademark, Copyright, Patent, and Design.", icon: Globe, time: "3-5 Days", docs: "Logo, User Affidavit", price: "Contact Us", href: "/services/trademark-and-ip/trademark-registration" },
  { title: "Import Export", desc: "IEC Code Registration and Export Compliance.", icon: Landmark, time: "2-4 Days", docs: "PAN, Bank Cert", price: "Contact Us" },
  { title: "Govt. Registrations", desc: "Udyam (MSME), Startup India, GeM, EPF.", icon: Briefcase, time: "2-3 Days", docs: "Aadhaar, Bank", price: "Contact Us", href: "/services/govt-registrations/udyam-msme" },
  { title: "Accounting", desc: "Bookkeeping, Payroll, and Financial Reporting.", icon: Calculator, time: "Monthly", docs: "Bank Statements", price: "Contact Us", href: "/services/accounting/monthly-bookkeeping" },
  { title: "Digital Services", desc: "Web Development, Logo Design, Business Email.", icon: Laptop, time: "10-20 Days", docs: "Requirements", price: "Contact Us" },
  { title: "Annual Compliance", desc: "ROC Filing, Annual Returns, Director KYC.", icon: Calendar, time: "Annually", docs: "Financials", price: "Contact Us" },
  { title: "Business Advisory", desc: "Strategic Consulting, Virtual CFO, Legal Drafts.", icon: LineChart, time: "Ongoing", docs: "Case Specific", price: "Contact Us" },
  { title: "Loan & Subsidy", desc: "Project Reports, MSME Subsidies, Business Loans.", icon: Landmark, time: "30-45 Days", docs: "Project Report", price: "Contact Us" },
  { title: "Web App Development", desc: "Custom Web Applications, Dashboards, and Portals.", icon: Code, time: "30-60 Days", docs: "Requirements", price: "Contact Us" },
  { title: "Automation & Tech", desc: "Business Process Automation and API Integrations.", icon: Cpu, time: "15-30 Days", docs: "Requirements", price: "Contact Us" },
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-plus-jakarta mb-6 text-text-primary">
              All Services Under One Roof
            </h2>
            <p className="text-lg text-text-secondary">
              We offer a complete suite of corporate services, ensuring your business stays compliant and primed for growth at every stage.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link href={service.href || "/services"} className="block h-full">
                <Card className="h-full flex flex-col group cursor-pointer hover:border-primary/50 transition-all duration-300 bg-white rounded-2xl shadow-sm hover:shadow-card">
                  <CardHeader className="p-6 pb-4">
                    <div className="w-16 h-16 rounded-2xl bg-surface-alt border border-border flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                      <service.icon className="w-10 h-10 text-primary" />
                    </div>
                    <CardTitle className="text-2xl mb-2 font-plus-jakarta">{service.title}</CardTitle>
                    <CardDescription className="text-base text-text-secondary leading-relaxed">{service.desc}</CardDescription>
                  </CardHeader>
                  <div className="px-6 py-4 bg-surface-alt/50 border-y border-border grid grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[10px] uppercase font-bold text-text-secondary tracking-wider">Processing Time</div>
                        <div className="text-sm font-semibold text-text-primary">{service.time}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <FileStack className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[10px] uppercase font-bold text-text-secondary tracking-wider">Documents</div>
                        <div className="text-sm font-semibold text-text-primary">{service.docs}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-grow" />
                  <CardFooter className="p-6 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase font-bold text-text-secondary tracking-wider mb-1">Pricing</div>
                      <div className="text-sm font-bold text-primary flex items-center">
                        Contact for details
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-surface-alt flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors border border-border">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
