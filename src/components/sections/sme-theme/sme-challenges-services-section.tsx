"use client";

import { Button } from "@/components/ui/button";
import { Building2, FileText, BadgeCheck, Shield, Globe, Briefcase, Calculator, Laptop, CheckCircle2, ArrowRight, AlertTriangle, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
    <div className="bg-white">
      {/* Challenges Section */}
      <div className="py-20 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Challenges Content */}
            <div className="flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 text-red-700 text-sm font-semibold mb-6">
                <AlertTriangle className="w-4 h-4" /> Industry Insights
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-plus-jakarta mb-6 leading-tight">
                Navigating the Complexities of <span className="text-[#dc2626]">Business Compliance</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                The government provides numerous schemes to support businesses, yet many fail to benefit due to a massive gap in awareness and complex legal requirements. Don't let these hurdles slow your growth.
              </p>
              
              <ul className="space-y-4 mb-10 w-full">
                {challenges.map((challenge, i) => (
                  <li key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm">
                    <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{challenge}</span>
                  </li>
                ))}
              </ul>

              <Button className="bg-[#dc2626] hover:bg-[#b91c1c] text-white rounded-full px-8 py-6 text-base shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                Let Us Help You Overcome These
              </Button>
            </div>

            {/* Right Column - Illustration & Stats */}
            <div className="relative w-full h-[500px] lg:h-full min-h-[500px] rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 p-8 flex flex-col items-center justify-center">
              {/* Abstract pattern background */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
              
              <div className="relative z-10 w-full max-w-sm aspect-square bg-white rounded-full shadow-2xl flex items-center justify-center p-8 border-8 border-gray-50">
                <div className="text-center">
                  <div className="text-[#dc2626] flex justify-center mb-4">
                    <TrendingUp className="w-16 h-16" />
                  </div>
                  <h3 className="text-5xl font-extrabold text-gray-800 mb-2">85%</h3>
                  <p className="text-gray-500 font-medium text-lg leading-snug">of SMEs struggle with regulatory compliance</p>
                </div>
              </div>

              {/* Floating Element */}
              <div className="absolute top-12 left-8 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <div 
                key={i}
                className="group relative h-[320px] w-full [perspective:1000px] cursor-pointer"
              >
                <div className="w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] relative rounded-2xl">
                  
                  {/* Front of Card */}
                  <div className="absolute inset-0 [backface-visibility:hidden] bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                      <service.icon className="w-10 h-10 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {service.name}
                    </h3>
                    <p className="text-sm font-bold text-gray-400 mt-2">Hover to explore <ArrowRight className="inline w-4 h-4 ml-1" /></p>
                  </div>

                  {/* Back of Card */}
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#dc2626] rounded-2xl p-8 flex flex-col items-center justify-center text-center text-white shadow-xl border border-[#b91c1c]">
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">
                      {service.name}
                    </h3>
                    <p className="text-white/90 mb-6 leading-relaxed font-medium">
                      {service.desc}
                    </p>
                    <Link href={service.href} className="mt-auto inline-flex items-center text-sm font-bold bg-white text-[#dc2626] px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
