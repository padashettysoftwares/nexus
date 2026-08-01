"use client";

import { motion } from "framer-motion";
import { Check, CheckCircle2 } from "lucide-react";

interface TimelineStep {
  title: string;
  description: string;
  duration?: string;
}

interface ProcessTimelineProps {
  steps: TimelineStep[];
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="relative">
      <div className="absolute top-0 bottom-0 left-[23px] w-0.5 bg-blue-100" />
      
      <div className="space-y-8 relative">
        {steps.map((step, i) => (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            key={i} 
            className="flex gap-6 relative"
          >
            <div className="relative shrink-0">
              <div className="w-12 h-12 rounded-full bg-white border-4 border-blue-50 flex items-center justify-center shadow-sm relative z-10">
                <div className="w-8 h-8 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </div>
              </div>
            </div>
            
            <div className="pt-2 pb-2">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                <h4 className="text-xl font-bold text-gray-900">{step.title}</h4>
                {step.duration && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-800 border border-orange-200">
                    {step.duration}
                  </span>
                )}
              </div>
              <p className="text-gray-600 leading-relaxed max-w-2xl">{step.description}</p>
            </div>
          </motion.div>
        ))}
        
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex gap-6 relative"
        >
          <div className="relative shrink-0">
            <div className="w-12 h-12 rounded-full bg-green-500 border-4 border-green-50 flex items-center justify-center shadow-sm relative z-10">
              <Check className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="pt-3">
            <h4 className="text-xl font-bold text-green-600">Process Complete</h4>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
