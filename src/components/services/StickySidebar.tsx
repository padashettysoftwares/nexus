"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, Clock, Phone, IndianRupee, MessageSquare, Download } from "lucide-react";

interface StickySidebarProps {
  price: string;
  timeline: string;
  documentsCount: number;
}

export function StickySidebar({ price, timeline, documentsCount }: StickySidebarProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-white rounded-2xl border border-gray-100 shadow-[0_12px_40px_rgba(30,58,138,0.08)] overflow-hidden sticky top-32"
    >
      <div className="bg-[#1E3A8A] p-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
        <div className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-2 relative z-10">Professional Services</div>
        <div className="text-3xl font-bold font-plus-jakarta text-white flex items-center justify-center relative z-10">
          Contact for Pricing
        </div>
        <div className="text-blue-100/70 text-xs mt-2 relative z-10">*Custom tailored to your business</div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
            <Clock className="w-5 h-5 text-[#1E3A8A] mb-2" />
            <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-0.5">Processing Time</div>
            <div className="text-sm font-bold text-gray-900">{timeline}</div>
          </div>
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
            <FileText className="w-5 h-5 text-[#1E3A8A] mb-2" />
            <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-0.5">Documents</div>
            <div className="text-sm font-bold text-gray-900">{documentsCount} Required</div>
          </div>
        </div>

        <div className="space-y-3">
          <Button className="w-full bg-[#1E3A8A] hover:bg-[#1E40AF] text-white py-6 text-base font-bold shadow-lg shadow-blue-900/20">
            Start Application Now
          </Button>
          <Button variant="outline" className="w-full border-gray-200 hover:bg-gray-50 py-6 text-base font-bold text-gray-700 flex items-center gap-2">
            <Download className="w-4 h-4" /> Download Checklist
          </Button>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-100 space-y-4">
          <div className="text-sm font-bold text-center text-gray-500 uppercase tracking-widest">Need Help?</div>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="w-full bg-green-50 hover:bg-green-100 text-green-700 border-green-200 flex items-center gap-2 font-bold py-5">
              <MessageSquare className="w-4 h-4" /> WhatsApp
            </Button>
            <Button variant="outline" className="w-full bg-blue-50 hover:bg-blue-100 text-[#1E3A8A] border-blue-200 flex items-center gap-2 font-bold py-5">
              <Phone className="w-4 h-4" /> Call Us
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
