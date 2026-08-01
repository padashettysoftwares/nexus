"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const roadmapSteps = [
  { id: "01", title: "Choose Business Structure", desc: "Pvt Ltd, LLP, or Proprietorship." },
  { id: "02", title: "Company Registration", desc: "Name approval and ROC incorporation." },
  { id: "03", title: "PAN & TAN", desc: "Obtain tax identification numbers." },
  { id: "04", title: "Current Account", desc: "Open a corporate bank account." },
  { id: "05", title: "GST Registration", desc: "Register for Goods & Services Tax." },
  { id: "06", title: "Trademark", desc: "Protect your brand name and logo." },
  { id: "07", title: "FSSAI / Special Licenses", desc: "Get industry-specific permits." },
  { id: "08", title: "ISO Certification", desc: "Establish quality management." },
];

export function RoadmapSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-plus-jakarta mb-6 text-text-primary">
              Business Startup Roadmap
            </h2>
            <p className="text-lg text-text-secondary">
              Follow this proven pathway to successfully launch and protect your new business.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-[27px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-border z-0" />
          
          <div className="space-y-12">
            {roadmapSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between w-full"
                >
                  {/* Mobile layout keeps everything left-aligned, Desktop alternates */}
                  <div className={`md:w-5/12 pl-16 md:pl-0 ${isEven ? "md:text-right md:pr-12" : "md:order-3 md:text-left md:pl-12"}`}>
                    <h3 className="text-xl font-bold text-text-primary font-plus-jakarta mb-2">{step.title}</h3>
                    <p className="text-text-secondary">{step.desc}</p>
                  </div>
                  
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-14 h-14 bg-white border-4 border-primary rounded-full flex items-center justify-center font-bold text-primary shadow-lg z-20">
                    {step.id}
                  </div>
                  
                  <div className={`hidden md:block md:w-5/12 ${isEven ? "md:order-3" : "md:order-1"}`} />
                  
                  {/* Arrow connecting steps on mobile */}
                  {index < roadmapSteps.length - 1 && (
                    <div className="md:hidden absolute left-[22px] top-14 text-border">
                      <ArrowDown className="w-4 h-4" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="relative z-10 flex flex-col items-center justify-center mt-12"
          >
            <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg mb-4">
              ✓
            </div>
            <h3 className="text-2xl font-bold text-text-primary font-plus-jakarta text-center">
              Grow Your Business!
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
