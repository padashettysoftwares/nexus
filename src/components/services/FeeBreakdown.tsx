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
      className="bg-white rounded-3xl border border-blue-100 shadow-[0_8px_30px_rgba(30,58,138,0.06)] overflow-hidden max-w-2xl"
    >
      <div className="bg-slate-50 p-6 border-b border-blue-100">
        <h4 className="text-xl font-bold font-plus-jakarta text-[#1E3A8A]">Transparent Pricing</h4>
        <p className="text-sm text-gray-500 mt-1">Contact us for a detailed quotation tailored to your business.</p>
      </div>
      
      <div className="p-6 md:p-8 flex flex-col items-center justify-center text-center space-y-4">
        <p className="text-gray-600 font-medium">
          Every business is unique. We provide customized, transparent pricing with absolutely no hidden charges.
        </p>
        <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-[#1E3A8A] text-white font-bold rounded-xl hover:bg-[#1E40AF] transition-colors mt-4">
          Request a Quote
        </a>
      </div>
      
      {notes && (
        <div className="bg-blue-50/50 p-4 text-sm text-gray-600 text-center border-t border-blue-100">
          {notes}
        </div>
      )}
    </motion.div>
  );
}
