"use client";

import { motion } from "framer-motion";
import { ServicesSection } from "@/components/sections/services-section";

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-plus-jakarta text-text-primary mb-6">
              Our Premium Services
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Explore our comprehensive suite of corporate services designed to manage compliance, mitigate risk, and facilitate growth for your enterprise.
            </p>
          </motion.div>
        </div>
      </div>
      <ServicesSection />
    </div>
  );
}
