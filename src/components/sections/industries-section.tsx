"use client";

import { motion } from "framer-motion";
import { Utensils, HeartPulse, Factory, GraduationCap, ShoppingBag, Laptop, HeartHandshake, Ship, Stethoscope, HardHat } from "lucide-react";

const industries = [
  { name: "Restaurants", desc: "FSSAI • GST • Trademark", icon: Utensils },
  { name: "Hospitals", desc: "Pollution NOC • EPF • Bio-Waste", icon: HeartPulse },
  { name: "Manufacturing", desc: "GST • Factory Lic • Pollution", icon: Factory },
  { name: "Education", desc: "Trust/Society • ISO • EPF", icon: GraduationCap },
  { name: "Retail", desc: "Trade Lic • GST • Labor Law", icon: ShoppingBag },
  { name: "IT Companies", desc: "Pvt Ltd • STPI • ISO 27001", icon: Laptop },
  { name: "NGOs", desc: "12A/80G • CSR • FCRA", icon: HeartHandshake },
  { name: "Exporters", desc: "IEC Code • AD Code • RCMC", icon: Ship },
  { name: "Healthcare", desc: "Drug Lic • Clinic Reg • Tax", icon: Stethoscope },
  { name: "Construction", desc: "Labor Lic • GST • Contracts", icon: HardHat },
];

export function IndustriesSection() {
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
              Industries We Serve
            </h2>
            <p className="text-lg text-text-secondary">
              Our deep domain expertise allows us to provide tailored compliance and registration solutions across diverse sectors.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white p-6 rounded-2xl border border-border shadow-sm flex flex-col items-center text-center gap-3 hover:border-primary hover:shadow-card transition-all"
            >
              <div className="w-14 h-14 bg-surface-alt rounded-full flex items-center justify-center mb-2">
                <industry.icon className="w-7 h-7 text-secondary" />
              </div>
              <span className="font-bold text-lg text-text-primary font-plus-jakarta">{industry.name}</span>
              <span className="text-xs font-semibold text-text-secondary bg-surface-alt px-3 py-1.5 rounded-full">{industry.desc}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
