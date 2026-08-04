"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

interface ServiceFAQProps {
  faqs: FAQItem[];
}

export function ServiceFAQ({ faqs }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4 max-w-3xl">
      {faqs.map((faq, i) => (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          key={i} 
          className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === i ? 'border-primary bg-surface-alt shadow-md' : 'border-border bg-white hover:border-primary/50'}`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
          >
            <span className="flex items-center gap-4">
              <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${openIndex === i ? 'text-primary' : 'text-text-secondary'}`} />
              <span className={`font-bold text-lg ${openIndex === i ? 'text-primary' : 'text-text-primary'}`}>
                {faq.q}
              </span>
            </span>
            <ChevronDown className={`w-5 h-5 text-text-secondary transition-transform duration-300 shrink-0 ${openIndex === i ? 'rotate-180 text-primary' : ''}`} />
          </button>
          
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="px-6 pb-6 pt-2 pl-14 pr-10 text-text-secondary leading-relaxed">
                  {faq.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
