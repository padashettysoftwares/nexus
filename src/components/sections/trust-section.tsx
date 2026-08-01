"use client";

import { motion } from "framer-motion";
import { Users, FileStack, Zap, Lock, Map, Headset } from "lucide-react";
import Image from "next/image";

const trustFactors = [
  { title: "Expert Guidance", desc: "Top-tier professionals ensuring 100% compliance.", icon: Users },
  { title: "Transparent Pricing", desc: "Clear fee structure with zero hidden costs.", icon: FileStack },
  { title: "Fast Processing", desc: "Expedited application filing and follow-ups.", icon: Zap },
  { title: "Secure Documentation", desc: "Enterprise-level data protection for all files.", icon: Lock },
  { title: "Pan-India Support", desc: "Serving clients in Kalaburagi and nationwide.", icon: Map },
  { title: "Dedicated Consultant", desc: "One point of contact for all your needs.", icon: Headset },
];

export function TrustSection() {
  return (
    <section className="py-24 bg-surface-alt border-y border-border">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-plus-jakarta mb-6 text-text-primary">
              Why Thousands Trust Nexus
            </h2>
            <p className="text-lg text-text-secondary">
              We have built a reputation on reliability, speed, and absolute transparency.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustFactors.map((factor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-border shadow-sm flex flex-col items-center text-center gap-4 hover:border-primary hover:shadow-card hover:-translate-y-1 transition-all"
            >
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center">
                <factor.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-plus-jakarta text-text-primary">{factor.title}</h3>
              <p className="text-text-secondary">{factor.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 max-w-5xl mx-auto bg-white p-8 rounded-3xl border border-border shadow-sm text-center"
        >
          <h3 className="text-sm font-bold text-text-secondary uppercase tracking-widest mb-8">Registered & Recognized By</h3>
          <div className="w-full flex justify-center">
             <Image 
                src="/certifications.png" 
                alt="Government Certifications including FSSAI, ISO, IEC, Trademark, MSME, Startup India" 
                width={1200}
                height={300}
                className="w-full h-auto object-contain max-w-4xl" 
             />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
