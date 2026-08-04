"use client";

import { motion } from "framer-motion";
import { IndianRupee } from "lucide-react";

interface FeeBreakdownProps {
  professionalFee: number;
  governmentFee: number;
  gstAmount: number;
  total: number;
  notes?: string;
}

export function FeeBreakdown({ professionalFee, governmentFee, gstAmount, total, notes }: FeeBreakdownProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl border border-border shadow-card overflow-hidden max-w-2xl"
    >
      <div className="bg-surface-alt p-6 border-b border-border">
        <h4 className="text-xl font-bold font-plus-jakarta text-primary">Transparent Pricing</h4>
        <p className="text-sm text-text-secondary mt-1">Contact us for a detailed quotation tailored to your business.</p>
      </div>
      
      <div className="p-6 md:p-8 flex flex-col items-center justify-center text-center space-y-4">
        <p className="text-text-secondary font-medium">
          Every business is unique. We provide customized, transparent pricing with absolutely no hidden charges.
        </p>
        <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover transition-colors mt-4">
          Request a Quote
        </a>
      </div>
      
      {notes && (
        <div className="bg-surface-alt p-4 text-sm text-text-secondary text-center border-t border-border">
          {notes}
        </div>
      )}
    </motion.div>
  );
}
