"use client";

import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck, Clock, FileText, UserCheck, Map, Lock, UserCog } from "lucide-react";
import Image from "next/image";

const reasons = [
  { title: "One-Stop Business Compliance", desc: "All your registration, tax, and licensing needs managed under a single roof.", icon: CheckCircle },
  { title: "100% Confidential", desc: "Your business data and ideas are strictly protected and never shared.", icon: Lock },
  { title: "End-to-End Documentation", desc: "We handle the paperwork so you can focus on running your business.", icon: FileText },
  { title: "Transparent Pricing", desc: "No hidden fees or surprise charges. You know exactly what you pay for.", icon: ShieldCheck },
  { title: "Timely Updates", desc: "Proactive communication and real-time tracking of your application status.", icon: Clock },
  { title: "Dedicated Consultant", desc: "A personal expert assigned to your account for customized advisory.", icon: UserCheck },
  { title: "Govt. Compliance Experts", desc: "Former officials and seasoned professionals navigating bureaucracy for you.", icon: UserCog },
  { title: "Pan-India Service", desc: "Serving clients locally in Kalaburagi and across the entire nation.", icon: Map },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold font-plus-jakarta mb-6 text-text-primary">
                Why Choose Nexus?
              </h2>
              <p className="text-lg text-text-secondary mb-10 leading-relaxed">
                We are more than just service providers; we are your strategic partners in growth. Discover what sets Nexus Solutions apart from the rest.
              </p>
            </motion.div>
            
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface-alt transition-colors group"
                >
                  <div className="w-12 h-12 bg-surface-alt rounded-full flex items-center justify-center shrink-0 mt-1">
                    <reason.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-text-primary font-plus-jakarta mb-1 group-hover:text-primary transition-colors">{reason.title}</h4>
                    <p className="text-sm text-text-secondary">{reason.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[800px] rounded-[24px] overflow-hidden shadow-2xl border-4 border-white hidden xl:block"
          >
            <Image 
              src="/about_consultation_premium_1785602885849.png" 
              alt="Professional Business Consultation" 
              fill 
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
