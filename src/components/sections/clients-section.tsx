"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, MapPin } from "lucide-react";
import Link from "next/link";


const logos = [
  "SRI MAHA GANESH INDUSTRIES", "SRI MAHA GANESH INDUSTRIES UNIT 2", "SRI DEVI INDUSTRIES", "KUMAR MARKETING", "NIMITTA MATRAM"
];

const caseStudies = [
  {
    name: "M/s. Sri Maha Ganesh Industries",
    industry: "Mfg of All Kinds of Pulses",
    location: "Kalaburagi",
    initials: "MG",
    services: ["FSSAI", "MSME", "GST"],
    challenge: "Required comprehensive registration for pulse manufacturing at scale.",
    solution: "End-to-end legal compliance, taxation setup, and factory licensing.",
    result: "Operating smoothly with 100% compliance.",
    verified: true
  },
  {
    name: "M/s. Sri Maha Ganesh Industries Unit 2",
    industry: "Mfg of Chakki Atta Wheat Flour",
    location: "Kalaburagi",
    initials: "MG2",
    services: ["FSSAI", "Trademark", "GST"],
    challenge: "Expansion required separate licensing for Chakki Atta unit.",
    solution: "Obtained new unit licenses and secured product branding.",
    result: "Successfully launched the new unit with proper documentation.",
    verified: true
  },
  {
    name: "M/s. Sri Devi Industries",
    industry: "Mfg of Rawa, Poha & Tofu",
    location: "Kalaburagi",
    initials: "SD",
    services: ["Company Registration", "GST", "FSSAI"],
    challenge: "Needed structured registration for multiple food product lines.",
    solution: "Streamlined multi-category food licensing and entity registration.",
    result: "Expanded product portfolio safely and legally.",
    verified: true
  },
  {
    name: "M/s. Kumar Marketing",
    industry: "Mfg of All Kinds of Spices",
    location: "Kalaburagi",
    initials: "KM",
    services: ["GST", "Trademark", "ISO"],
    challenge: "Needed brand protection and quality assurance for spice products.",
    solution: "Registered trademarks and implemented quality management systems.",
    result: "Increased market trust and prevented brand counterfeiting.",
    verified: true
  },
  {
    name: "M/s. Nimitta Matram",
    industry: "Mfg of Perfumes",
    location: "Kalaburagi",
    initials: "NM",
    services: ["Company Registration", "MSME", "GST"],
    challenge: "Required initial setup and government subsidies for perfume manufacturing.",
    solution: "Registered as MSME and set up the corporate entity for funding.",
    result: "Secured MSME benefits and launched the brand successfully.",
    verified: true
  }
];

export function ClientsSection() {
  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1E3A8A 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px] relative z-10">
        
        {/* Top Header & Stats */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-sm font-bold text-[#1E3A8A] mb-6">
              <ShieldCheck className="w-4 h-4" /> Trusted by Leaders
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold font-plus-jakarta mb-6 text-[#0F172A] leading-[1.1]">
              Trusted by Businesses Across Karnataka
            </h2>
            <p className="text-lg text-[#5A6A7A] leading-relaxed">
              We proudly support manufacturers, retailers, exporters, startups and growing enterprises with registrations, compliance and business consulting.
            </p>
          </motion.div>

        </div>

        {/* Logo Carousel */}
        <div className="mb-24 -mx-4 md:-mx-6 lg:-mx-8 overflow-hidden bg-white py-10 border-y border-gray-100 flex items-center shadow-[inset_0_0_40px_rgba(0,0,0,0.02)]">
          <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="mx-12 text-2xl font-bold font-plus-jakarta text-gray-300 hover:text-[#1E3A8A] transition-colors cursor-default select-none tracking-tight">
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* Masonry / Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {caseStudies.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(30,58,138,0.08)] border border-gray-100 hover:border-blue-200 transition-all duration-500 overflow-hidden relative flex flex-col hover:-translate-y-2"
            >
              {/* Gradient Strip */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#1E3A8A] to-[#60A5FA]" />

              <div className="p-8 md:p-10 flex-grow">
                {/* Header */}
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-blue-50 text-[#1E3A8A] flex items-center justify-center font-bold text-xl border border-blue-100 shrink-0">
                      {study.initials}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-1">{study.name}</h3>
                      <div className="flex items-center gap-3 text-sm text-[#5A6A7A] font-medium">
                        <span>{study.industry}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300" />
                        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{study.location}</span>
                      </div>
                    </div>
                  </div>
                  {study.verified && (
                    <div className="hidden sm:flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold border border-green-100">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                    </div>
                  )}
                </div>

                {/* Services Chips */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {study.services.map((service, idx) => (
                    <span key={idx} className="bg-gray-50 text-[#1E3A8A] text-xs font-bold px-3 py-1.5 rounded-lg border border-gray-100">
                      ✓ {service}
                    </span>
                  ))}
                </div>

                {/* Case Study Content */}
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Challenge</h4>
                    <p className="text-sm text-[#0F172A] font-medium leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Solution</h4>
                    <p className="text-sm text-[#0F172A] font-medium leading-relaxed">{study.solution}</p>
                  </div>
                  <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-50">
                    <h4 className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider mb-1">Result</h4>
                    <p className="text-sm text-[#1E3A8A] font-bold leading-relaxed">{study.result}</p>
                  </div>
                </div>

                {/* Footer / CTA */}
                <div className="pt-6 border-t border-gray-100 flex justify-between items-center mt-auto">
                  <span className="text-sm font-bold text-[#1E3A8A] group-hover:text-[#1E40AF] transition-colors flex items-center gap-2">
                    Read Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center bg-[#1E3A8A] rounded-[32px] p-12 md:p-16 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,white,transparent_50%)]" />
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-plus-jakarta relative z-10">
            Want to become our next success story?
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto relative z-10">
            Join hundreds of businesses that trust Nexus Solutions for their compliance, registration, and growth needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <Link href="/contact" className="bg-white text-[#1E3A8A] px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg">
              Get Free Consultation
            </Link>
            <Link href="/contact" className="bg-transparent text-white border-2 border-white/20 hover:border-white/40 px-8 py-4 rounded-xl font-bold transition-colors">
              Book Appointment
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
