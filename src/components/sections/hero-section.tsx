"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Users, CheckCircle2, ChevronRight } from "lucide-react";
import Image from "next/image";

const trustBadges = [
  { icon: ShieldCheck, label: "MSME Registered" },
  { icon: ShieldCheck, label: "ISO 9001:2015" },
  { icon: Zap, label: "Fast Processing" },
  { icon: Users, label: "Dedicated Experts" },
];

const logos = [
  "SRI RENUKA", "MAHA GANESH", "SHREE SIDDESHWARA", "AARAV FOODS", "MAHALAXMI SOLVENT"
];

export function HeroSection() {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* --- ANIMATED BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 50, 0], 
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-blue-50/80 to-blue-100/40 blur-[100px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 0], 
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-indigo-50/60 to-transparent blur-[80px]"
        />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'linear-gradient(#1E3A8A 1px, transparent 1px), linear-gradient(90deg, #1E3A8A 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px] pt-16 lg:pt-24 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ─── LEFT SIDE CONTENT ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-5 flex flex-col items-start"
          >
            {/* Top Label */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8 shadow-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#1E3A8A] animate-pulse" />
              <span className="text-xs font-bold text-[#1E3A8A] uppercase tracking-widest">
                Business Registration & Compliance
              </span>
            </motion.div>

            {/* Massive Headline */}
            <h1 className="text-5xl lg:text-6xl xl:text-[68px] font-bold tracking-tight font-plus-jakarta leading-[1.05] mb-6 text-[#0F172A]">
              Everything Your <br />
              Business Needs. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6]">
                One Trusted Partner.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-[#5A6A7A] mb-10 max-w-[480px] leading-relaxed">
              Start, register, and grow your business with confidence. Nexus Solutions provides end-to-end professional assistance with quick processing and transparent pricing.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="w-full bg-[#1E3A8A] hover:bg-[#1E40AF] text-white px-8 py-7 text-base font-bold rounded-xl shadow-[0_8px_20px_rgba(30,58,138,0.2)] hover:shadow-[0_12px_24px_rgba(30,58,138,0.3)] transition-all hover:-translate-y-1 flex items-center gap-2 justify-center">
                  Get Free Consultation <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services" className="w-full sm:w-auto">
                <Button className="w-full bg-white hover:bg-gray-50 text-[#0F172A] border-2 border-gray-200 px-8 py-7 text-base font-bold rounded-xl transition-all hover:-translate-y-1 flex items-center justify-center">
                  Explore Services
                </Button>
              </Link>
            </div>

            {/* Small Trust Badges below CTA */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {trustBadges.map((badge, i) => (
                <div key={i} className="flex items-center gap-1.5 opacity-80">
                  <badge.icon className="w-4 h-4 text-[#1E3A8A]" />
                  <span className="text-xs font-semibold text-[#0F172A]">{badge.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ─── RIGHT SIDE VISUALS ─── */}
          <div className="lg:col-span-6 xl:col-span-7 relative h-full flex items-center justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[700px] aspect-[4/3] lg:aspect-auto lg:h-[600px]"
            >
              {/* Premium Illustration */}
              <div className="absolute inset-0 rounded-[32px] overflow-hidden bg-white shadow-[0_20px_60px_rgba(30,58,138,0.08)] border border-blue-50/50">
                <Image
                  src="/hero_premium_v2.png"
                  alt="Nexus Solutions - Premium Business Compliance Illustration"
                  fill
                  className="object-cover object-center scale-[1.02]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
              </div>

              {/* Floating Stat Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute top-10 -left-6 sm:-left-12 bg-white rounded-2xl p-4 shadow-[0_12px_30px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center gap-4 backdrop-blur-md bg-white/90"
              >
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold font-plus-jakarta text-[#0F172A]">500+</div>
                  <div className="text-xs font-semibold text-[#5A6A7A]">Businesses Served</div>
                </div>
              </motion.div>

              {/* Removed Floating Stat Card 2 as requested */}

              {/* Floating Element 3 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-full px-5 py-2.5 shadow-[0_8px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center gap-2"
              >
                <span className="flex h-2 w-2 rounded-full bg-green-500" />
                <span className="text-xs font-bold text-[#0F172A]">ISO 9001:2015 Certified</span>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>

      {/* --- INTEGRATED CLIENT LOGOS STRIP --- */}
      <div className="border-t border-gray-100 bg-white/50 backdrop-blur-sm relative z-10 py-6">
        <div className="container mx-auto px-4 max-w-[1400px]">
          <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-12 justify-center opacity-70">
            <span className="text-xs font-bold text-[#5A6A7A] uppercase tracking-wider text-center md:text-left shrink-0">
              Trusted by Local Leaders:
            </span>
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
              {logos.map((logo, i) => (
                <span key={i} className="text-base md:text-lg font-bold font-plus-jakarta text-gray-400">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
