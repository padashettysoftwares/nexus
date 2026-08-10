"use client";

import { Button } from "@/components/ui/button";
import { Building2, FileText, BadgeCheck, Shield, Globe, Briefcase, Calculator, Laptop, CheckCircle2, ArrowRight, AlertTriangle, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ResponsiveCarousel } from "@/components/ui/responsive-carousel";

const challenges = [
  "Lack of compliance awareness",
  "Complex government regulatory frameworks",
  "Cumbersome financial documentation",
  "Costly and time-consuming certification delays",
  "Poor understanding of available government grants",
  "Struggling to find reliable consulting partners"
];

const services = [
  { 
    name: "Business Registration", 
    desc: "Start your company legally with ease.",
    icon: Building2,
    href: "/services/business-registration/private-limited"
  },
  { 
    name: "GST & Tax Filing", 
    desc: "Ensure seamless tax compliance.",
    icon: FileText,
    href: "/services/gst-and-tax/gst-registration"
  },
  { 
    name: "Trade Licences", 
    desc: "Get necessary local & state permits.",
    icon: BadgeCheck,
    href: "/services/licences/fssai"
  },
  { 
    name: "ISO Certifications", 
    desc: "Build global trust and quality standards.",
    icon: Shield,
    href: "/services/quality-certifications/iso-9001"
  },
  { 
    name: "Trademark Registration", 
    desc: "Protect your IP and brand identity.",
    icon: Globe,
    href: "/services/trademark-and-ip/trademark-registration"
  },
  { 
    name: "Govt. Registrations", 
    desc: "MSME, Startup India, and more.",
    icon: Briefcase,
    href: "/services/govt-registrations/udyam-msme"
  },
  { 
    name: "Accounting & Audits", 
    desc: "Maintain clear financial health.",
    icon: Calculator,
    href: "/services/accounting/monthly-bookkeeping"
  },
  { 
    name: "Web Development", 
    desc: "Establish a strong digital presence.",
    icon: Laptop,
    href: "/contact"
  },
];

export function SmeChallengesServicesSection() {
  return (
    <>
      <div className="py-24 bg-[#FCFBF8] border-b border-[#EAE7E0] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text and Challenges */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-block bg-red-50 text-red-600 font-bold px-4 py-1.5 rounded-full text-sm mb-6 border border-red-100">
              Why Choose Nexus?
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight mb-4 leading-tight">
              Don't Let Compliance <br className="hidden md:block"/> <span className="text-red-600">Hold You Back</span>
            </h2>
            <p className="text-stone-600 text-base mb-6 leading-relaxed max-w-xl">
              The government provides numerous schemes to support businesses, yet many fail to benefit due to a massive gap in awareness and complex legal requirements. Don't let these hurdles slow your growth.
            </p>
              
              <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 gap-3 mb-8 w-full snap-x snap-mandatory no-scrollbar pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
                {challenges.map((challenge, i) => (
                  <div key={i} className="flex-none w-[75vw] sm:w-auto snap-center sm:snap-align-none flex flex-col items-start bg-white p-4 rounded-xl border border-[#EAE7E0] shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:bg-white hover:-translate-y-1 hover:border-red-100/60 transition-all duration-300">
                    <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center mb-2">
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                    <span className="text-stone-800 font-semibold text-sm leading-snug">{challenge}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-[#dc2626] hover:bg-[#b91c1c] text-white rounded-full px-6 py-5 text-sm shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                Let Us Help You Overcome These
              </Button>
            </motion.div>

            {/* Right Column - Illustration & Stats */}
            <div className="relative w-full h-auto lg:h-full min-h-[160px] lg:min-h-[400px] rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 p-6 lg:p-8 flex flex-row lg:flex-col items-center justify-center gap-5 lg:gap-0">
              {/* Abstract pattern background */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
              
              <div className="relative z-10 w-[110px] h-[110px] lg:w-full lg:max-w-[300px] lg:h-auto lg:aspect-square shrink-0 bg-white rounded-full shadow-xl lg:shadow-2xl flex items-center justify-center p-2 lg:p-6 border-4 lg:border-[6px] border-gray-50">
                <div className="text-center">
                  <div className="text-[#dc2626] flex justify-center mb-1 lg:mb-3">
                    <TrendingUp className="w-6 h-6 lg:w-12 lg:h-12" />
                  </div>
                  <h3 className="text-2xl lg:text-4xl font-extrabold text-gray-800 mb-0 lg:mb-2">85%</h3>
                  <p className="hidden lg:block text-gray-500 font-medium text-base leading-snug">of SMEs struggle with regulatory compliance</p>
                </div>
              </div>

              {/* Mobile text (hidden on desktop) */}
              <div className="relative z-10 lg:hidden flex flex-col justify-center">
                <p className="text-stone-800 font-bold text-sm sm:text-base leading-snug mb-3">of SMEs struggle with regulatory compliance</p>
                <div className="bg-white px-3 py-2 rounded-xl shadow-sm border border-gray-100 flex items-center gap-2 w-max">
                  <div className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <FileText className="w-3 h-3" />
                  </div>
                  <span className="text-xs text-stone-500 font-medium">Risk: <strong className="text-stone-800 font-bold">High</strong></span>
                </div>
              </div>

              {/* Floating Element (Desktop only) */}
              <div className="hidden lg:flex absolute top-12 left-8 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Compliance Risk</p>
                  <p className="text-lg font-bold text-gray-800">High</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-24 bg-[#f8fafc]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-plus-jakarta mb-4">
              Comprehensive <span className="text-[#dc2626]">Business Solutions</span>
            </h2>
            <p className="text-gray-500 text-lg">
              We provide end-to-end professional services to ensure your business stays compliant, legally protected, and ready for exponential growth.
            </p>
          </div>

          <ResponsiveCarousel desktopClassName="" mobileGapClassName="gap-6 lg:gap-8">
            {services.map((service, i) => (
              <div 
                key={i}
                className="group relative h-[320px] w-[82vw] sm:w-[280px] md:w-[320px] lg:w-[320px] shrink-0 snap-start flex-none [perspective:1000px] cursor-pointer"
              >
                <div className="w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] relative rounded-2xl">
                                    {/* Front Side */}
                    <div className="absolute inset-0 h-full w-full rounded-3xl bg-[#FCFBF8] p-6 md:p-8 [backface-visibility:hidden] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-[#EAE7E0] flex flex-col justify-center items-center text-center transition-all duration-300">
                      <div className="w-16 h-16 rounded-2xl bg-white border border-[#EAE7E0] flex items-center justify-center mb-6 text-stone-400 group-hover:bg-red-50 group-hover:text-red-600 group-hover:border-red-100 group-hover:scale-110 transition-all duration-500 shadow-sm">
                        <service.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-lg md:text-xl font-extrabold text-stone-900 group-hover:text-red-600 transition-colors">{service.name}</h3>
                      <div className="mt-6 w-10 h-1 bg-stone-200 rounded-full group-hover:bg-red-600 group-hover:w-16 transition-all duration-500"></div>
                    </div>

                    {/* Back Side - Premium Light Theme */}
                    <div className="absolute inset-0 h-full w-full rounded-3xl bg-red-600 p-6 md:p-8 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-center items-center text-center shadow-2xl border border-red-500 relative overflow-hidden">
                      {/* Subtle Glow */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
                      
                      <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-5 border border-white/20">
                         <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                      <p className="text-red-50 text-sm mb-6 leading-relaxed font-medium">
                        {service.desc}
                      </p>
                      <Link href={service.href} className="mt-auto group/btn flex items-center gap-2 text-sm font-bold text-red-600 bg-white hover:bg-gray-50 px-5 py-2.5 rounded-full transition-colors shadow-sm">
                        Explore Service <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                  </div>
              </div>
            ))}
          </ResponsiveCarousel>
        </div>
      </div>
    </>
  );
}
