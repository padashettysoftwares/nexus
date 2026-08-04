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
      className="bg-white rounded-2xl border border-border shadow-card overflow-hidden sticky top-32"
    >
      <div className="bg-primary p-6 text-center relative overflow-hidden">
        <div className="text-white/70 text-xs font-bold uppercase tracking-widest mb-2 relative z-10">Professional Services</div>
        <div className="text-3xl font-bold font-plus-jakarta text-white flex items-center justify-center relative z-10">
          Contact for Pricing
        </div>
        <div className="text-white/60 text-xs mt-2 relative z-10">*Custom tailored to your business</div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-surface-alt p-3 rounded-xl border border-border">
            <Clock className="w-5 h-5 text-primary mb-2" />
            <div className="text-xs text-text-secondary font-semibold uppercase tracking-wider mb-0.5">Processing Time</div>
            <div className="text-sm font-bold text-text-primary">{timeline}</div>
          </div>
          <div className="bg-surface-alt p-3 rounded-xl border border-border">
            <FileText className="w-5 h-5 text-primary mb-2" />
            <div className="text-xs text-text-secondary font-semibold uppercase tracking-wider mb-0.5">Documents</div>
            <div className="text-sm font-bold text-text-primary">{documentsCount} Required</div>
          </div>
        </div>

        <div className="space-y-3">
          <Button className="w-full bg-primary hover:bg-primary-hover text-white py-6 text-base font-bold shadow-soft">
            Start Application Now
          </Button>
          <Button variant="outline" className="w-full border-border hover:bg-surface-alt py-6 text-base font-bold text-text-primary flex items-center gap-2">
            <Download className="w-4 h-4" /> Download Checklist
          </Button>
        </div>

        <div className="mt-6 pt-6 border-t border-border space-y-4">
          <div className="text-sm font-bold text-center text-text-secondary uppercase tracking-widest">Need Help?</div>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="w-full bg-surface-alt hover:bg-border text-primary border-border flex items-center gap-2 font-bold py-5">
              <MessageSquare className="w-4 h-4" /> WhatsApp
            </Button>
            <Button variant="outline" className="w-full bg-surface-alt hover:bg-border text-primary border-border flex items-center gap-2 font-bold py-5">
              <Phone className="w-4 h-4" /> Call Us
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
