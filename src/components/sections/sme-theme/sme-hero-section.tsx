"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShieldCheck, Zap, Users, CheckCircle } from "lucide-react";
import Image from "next/image";

export function SmeHeroSection() {
  const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;

    const message = `Hi, I am looking for business compliance/registration services.%0A%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}`;
    const whatsappUrl = `https://wa.me/919999999999?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="relative bg-[#1a1c23] overflow-hidden min-h-[600px] flex items-center">
      {/* Background with gear/target subtle graphics */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex items-center justify-center">
         {/* Placeholder for gear/target background image, using CSS pattern instead for now */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-[#1a1c23] to-[#1a1c23]"></div>
        <div className="w-[800px] h-[800px] border-[40px] border-gray-500 rounded-full absolute -right-40 -top-40 border-dashed"></div>
        <div className="w-[600px] h-[600px] border-[20px] border-gray-500 rounded-full absolute -right-20 -top-20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px] py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 xl:col-span-8 flex flex-col items-start text-white"
          >
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 text-white">
              <span className="text-secondary">Your Trusted Partner</span> for Business Growth & Compliance
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 font-medium">
              Connect with India's Top Business Consultants
            </p>

            {/* Client Logos Row */}
            <div className="mt-8">
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
                Trusted by Local Leaders:
              </p>
              <div className="flex flex-wrap items-center gap-6 md:gap-8 opacity-80">
                {["SRI RENUKA", "MAHA GANESH", "SHREE SIDDESHWARA", "AARAV FOODS", "MAHALAXMI SOLVENT"].map((logo, i) => (
                  <span key={i} className="text-base md:text-lg font-bold font-plus-jakarta text-gray-300">
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Lead Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 xl:col-span-4 w-full"
          >
            <div className="bg-white rounded-xl shadow-2xl p-8 border-t-4 border-secondary">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Talk to Our <span className="text-secondary">SME Consultants</span>
                </h3>
              </div>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-sm text-gray-600 font-medium">Name / Company Name</Label>
                  <Input 
                    id="name" 
                    name="name"
                    required 
                    className="bg-gray-50 border-gray-200 focus-visible:ring-secondary"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-sm text-gray-600 font-medium">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email"
                    name="email"
                    required 
                    className="bg-gray-50 border-gray-200 focus-visible:ring-secondary"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="text-sm text-gray-600 font-medium">Mobile Number</Label>
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center px-3 border border-r-0 border-gray-200 bg-gray-50 rounded-l-md text-sm text-gray-500">
                      🇮🇳 +91
                    </div>
                    <Input 
                      id="phone" 
                      type="tel"
                      name="phone"
                      required 
                      className="bg-gray-50 border-gray-200 rounded-l-none focus-visible:ring-secondary"
                    />
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-2 pb-4">
                  <input type="checkbox" id="terms" required className="mt-1 accent-secondary" />
                  <label htmlFor="terms" className="text-xs text-gray-500">
                    Accept Terms & conditions <a href="/terms" className="text-blue-600 underline">View</a>
                  </label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold py-6 rounded-md shadow-lg"
                >
                  SUBMIT REQUEST
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
