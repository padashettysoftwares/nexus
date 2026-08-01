"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  { name: "Rahul Deshmukh", role: "Founder, TechSolutions", review: "Nexus Solutions made our entire registration process seamless. Their expert advice saved us weeks of delays." },
  { name: "Priya Sharma", role: "Owner, GreenBite Cafe", review: "From FSSAI to GST, they handled everything. Very professional and transparent pricing." },
  { name: "Anil Kumar", role: "Director, Kumar Manufacturing", review: "The best compliance team in Kalaburagi. We rely on them for all our annual filings and ISO certifications." },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-surface-alt border-y border-border">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Google Reviews Block */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/3 bg-white p-8 rounded-[24px] border border-border shadow-card text-center"
          >
            <div className="w-16 h-16 bg-white border border-border rounded-full mx-auto flex items-center justify-center mb-6 shadow-sm overflow-hidden">
              <span className="font-bold text-2xl text-[#4285F4]">G</span>
            </div>
            <h3 className="text-5xl font-bold font-plus-jakarta text-text-primary mb-2">4.9/5</h3>
            <div className="flex justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-[#FBBC05] text-[#FBBC05]" />
              ))}
            </div>
            <p className="font-bold text-text-primary text-xl mb-1">Google Rating</p>
            <p className="text-text-secondary">Based on 250+ Reviews</p>
          </motion.div>

          {/* Testimonials Cards */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-full mb-4">
              <h2 className="text-3xl md:text-4xl font-bold font-plus-jakarta text-text-primary">
                Trusted by 500+ Businesses
              </h2>
            </div>
            {testimonials.map((test, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-border shadow-sm flex flex-col justify-between"
              >
                <div className="mb-6">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                    ))}
                  </div>
                  <p className="text-text-primary leading-relaxed italic">"{test.review}"</p>
                </div>
                <div>
                  <h4 className="font-bold text-text-primary">{test.name}</h4>
                  <p className="text-sm text-text-secondary">{test.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
