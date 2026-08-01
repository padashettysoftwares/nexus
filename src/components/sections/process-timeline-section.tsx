"use client";

import { motion } from "framer-motion";
import { MessageSquareText, FileStack, ShieldCheck, Send, Stamp, MailCheck } from "lucide-react";

const steps = [
  { title: "Consultation", desc: "Discuss requirements with our experts.", icon: MessageSquareText },
  { title: "Document Collection", desc: "Securely upload required paperwork.", icon: FileStack },
  { title: "Verification", desc: "Our team validates all documents.", icon: ShieldCheck },
  { title: "Govt. Submission", desc: "We file with the Govt. authority.", icon: Send },
  { title: "Approval", desc: "Govt. processes and approves.", icon: Stamp },
  { title: "Delivery", desc: "Receive your official certificates.", icon: MailCheck },
];

export function ProcessTimelineSection() {
  return (
    <section className="py-24 bg-[#1E3A8A] text-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-plus-jakarta mb-6">
              Our Streamlined Process
            </h2>
            <p className="text-lg text-white/70">
              A transparent, hassle-free 6-step journey from initial consultation to final certification delivery.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative">
          {/* Horizontal Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-[48px] left-[8%] right-[8%] h-0.5 bg-white/20 -z-10" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-white/40 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                <step.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-white/60 font-semibold font-plus-jakarta mb-2 text-sm uppercase tracking-wider">Step {index + 1}</div>
              <h4 className="text-lg font-bold mb-2 leading-tight">{step.title}</h4>
              <p className="text-sm text-white/60">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
