"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, ShieldCheck, FileText } from "lucide-react";

const stats = [
  { value: "Fast Turnaround", icon: Clock, description: "Quick processing times" },
  { value: "Dedicated Experts", icon: CheckCircle2, description: "Personalized consultant" },
  { value: "Transparent Pricing", icon: FileText, description: "No hidden charges" },
  { value: "Complete Documentation", icon: ShieldCheck, description: "End-to-end support" },
];

export function StatsSection() {
  return (
    <section className="py-12 bg-surface-alt border-y border-border">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center text-center space-y-3"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-1">
                <stat.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-plus-jakarta text-text-primary">
                {stat.value}
              </h3>
              <p className="text-sm text-text-secondary font-medium">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
