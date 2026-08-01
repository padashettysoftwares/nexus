"use client";

import { motion } from "framer-motion";
import { QuotationGenerator } from "@/components/demos/quotation-generator";

export function QuoteCalculatorSection() {
  return (
    <section className="py-20 bg-[#1E3A8A] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-plus-jakarta mb-6 text-white">
              Estimate Your Cost
            </h2>
            <p className="text-lg text-white/70">
              Get an instant quotation for your compliance requirements.
            </p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <QuotationGenerator />
        </motion.div>
      </div>
    </section>
  );
}
