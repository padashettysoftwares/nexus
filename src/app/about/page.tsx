"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-plus-jakarta text-text-primary mb-6">
            About Nexus Solutions
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            Founded with a vision to simplify corporate compliance and foster business growth, Nexus Solutions is the premier business consultancy in Kalaburagi. We believe in providing transparent, efficient, and premium services to businesses of all sizes.
          </p>
        </motion.div>

        {/* Leadership Section */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.2 }}
           className="mb-24"
        >
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold font-plus-jakarta text-text-primary mb-4">Meet Our Leadership</h2>
              <p className="text-text-secondary text-lg">
                The visionaries driving Nexus Solutions to be the premier corporate consultancy partner in Karnataka.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                {/* Founder */}
                <div className="bg-surface-alt/50 border border-border rounded-3xl p-8 text-center hover:shadow-card transition-all duration-300">
                    <div className="w-32 h-32 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center border-4 border-white shadow-sm overflow-hidden relative">
                        <Image src="/abhijeet.jpeg" alt="Abhijeet Padashetty" fill className="object-cover object-top" />
                    </div>
                    <h3 className="text-2xl font-bold font-plus-jakarta text-text-primary mb-2">Abhijeet Padashetty</h3>
                    <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-primary font-semibold text-sm mb-4">
                        Founder
                    </div>
                    <p className="text-text-secondary">
                        The founding visionary behind Nexus Solutions. Abhijeet brings extensive expertise in corporate compliance, taxation, and strategic business consulting to ensure every client achieves seamless growth.
                    </p>
                </div>

                {/* Managing Director */}
                <div className="bg-surface-alt/50 border border-border rounded-3xl p-8 text-center hover:shadow-card transition-all duration-300">
                    <div className="w-32 h-32 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center border-4 border-white shadow-sm overflow-hidden relative">
                        <Image src="/omkar.png" alt="Omkar Padashetty" fill className="object-cover" />
                    </div>
                    <h3 className="text-2xl font-bold font-plus-jakarta text-text-primary mb-2">Omkar Padashetty</h3>
                    <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-primary font-semibold text-sm mb-4">
                        Managing Director (Tech)
                    </div>
                    <p className="text-text-secondary">
                        Leading the digital and technological front. Omkar spearheads Nexus Solutions' technical infrastructure and digital services, ensuring automated and highly efficient solutions for modern businesses.
                    </p>
                </div>
            </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-surface-alt p-10 rounded-3xl border border-border"
          >
            <h2 className="text-2xl font-bold font-plus-jakarta text-text-primary mb-4">Our Mission</h2>
            <p className="text-text-secondary leading-relaxed">
              To empower entrepreneurs and enterprises by handling the complexities of registration, taxation, and compliance, allowing them to focus on what they do best: growing their business.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-primary text-white p-10 rounded-3xl"
          >
            <h2 className="text-2xl font-bold font-plus-jakarta mb-4">Our Vision</h2>
            <p className="text-white/90 leading-relaxed">
              To be the most trusted and sought-after corporate consultancy in India, recognized for our premium service quality, unyielding integrity, and commitment to client success.
            </p>
          </motion.div>
        </div>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
        >
            <h2 className="text-3xl font-bold font-plus-jakarta text-text-primary mb-8 text-center">Why Businesses Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    "Unmatched Industry Expertise",
                    "Dedicated Account Managers",
                    "Premium Client Experience",
                    "End-to-End Compliance",
                    "Transparent Pricing Structure",
                    "Timely Delivery of Services"
                ].map((reason, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-border shadow-card">
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                        <span className="font-medium text-text-primary">{reason}</span>
                    </div>
                ))}
            </div>
        </motion.div>
      </div>
    </div>
  );
}
