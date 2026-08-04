"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Star, ShieldCheck, Users, CheckCircle2, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";

export function SmeHeroSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;

    const message = encodeURIComponent(`Hello Nexus Solutions! 👋\n\nI would like to book a free consultation.\n\nName: ${name}\nEmail: ${email}\nPhone: +91 ${phone}\n\nPlease get back to me at your earliest convenience. Thank you!`);
    const whatsappUrl = `https://wa.me/919483486111?text=${message}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };


  return (
    <div className="relative bg-[#0f172a] overflow-hidden min-h-[700px] flex items-center">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.1, 1] }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[60%] h-[80%] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#dc2626]/20 to-transparent blur-[80px]" 
        />
        <motion.div 
          animate={{ rotate: -360, scale: [1, 1.2, 1] }} 
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[70%] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 to-transparent blur-[100px]" 
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px] py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text & Illustration Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 xl:col-span-7 flex flex-col items-start text-white"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-semibold text-white mb-6 backdrop-blur-md">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> Rated 4.9/5 by 200+ Businesses
            </div>
            
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight mb-6 leading-tight text-white">
              <span className="text-[#dc2626]">Your Trusted Partner</span> for Business Growth & Compliance
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 font-medium max-w-2xl">
              Connect with India's Top Business Consultants. We handle the paperwork so you can focus on scaling your business.
            </p>

            {/* Illustration with Floating Stats */}
            <div className="relative w-full max-w-lg mt-4 hidden md:block">
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image src="/images/hero-consulting.png" alt="Consulting Team" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 to-transparent"></div>
              </div>

              {/* Floating Stat 1 */}
              <motion.div 
                animate={{ y: [-5, 5, -5] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-xl flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-[#dc2626] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white leading-none">99%</p>
                  <p className="text-xs text-gray-300 font-medium mt-1">Client Satisfaction</p>
                </div>
              </motion.div>

              {/* Floating Stat 2 */}
              <motion.div 
                animate={{ y: [5, -5, 5] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-xl flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white leading-none">10+</p>
                  <p className="text-xs text-gray-300 font-medium mt-1">Industry Experts</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Lead Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 xl:col-span-5 w-full relative z-20"
          >
            <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] p-8 border border-white/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#991b1b] to-[#dc2626]"></div>
              
              {!submitted ? (
                <>
                  <div className="text-center mb-8 mt-2">
                    <h3 className="text-2xl font-extrabold text-gray-900">
                      Talk to Our <span className="text-[#991b1b]">SME Consultants</span>
                    </h3>
                    <p className="text-sm text-gray-500 mt-2 font-medium">Fill the form to get a free consultation</p>
                  </div>

                  <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
                    <div className="space-y-2 text-left">
                      <Label htmlFor="name" className="text-sm text-gray-700 font-bold">Name / Company Name</Label>
                      <Input 
                        id="name" 
                        name="name"
                        required 
                        placeholder="Enter your name"
                        className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus-visible:ring-[#991b1b] h-12 rounded-lg font-medium"
                      />
                    </div>
                    
                    <div className="space-y-2 text-left">
                      <Label htmlFor="email" className="text-sm text-gray-700 font-bold">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email"
                        name="email"
                        required 
                        placeholder="name@company.com"
                        className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus-visible:ring-[#991b1b] h-12 rounded-lg font-medium"
                      />
                    </div>

                    <div className="space-y-2 text-left">
                      <Label htmlFor="phone" className="text-sm text-gray-700 font-bold">Mobile Number</Label>
                      <div className="flex">
                        <div className="flex-shrink-0 flex items-center px-4 border border-r-0 border-gray-200 bg-gray-100 rounded-l-lg text-sm text-gray-600 font-bold">
                          🇮🇳 +91
                        </div>
                        <Input 
                          id="phone" 
                          type="tel"
                          name="phone"
                          required 
                          maxLength={10}
                          placeholder="98765 43210"
                          className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 rounded-l-none focus-visible:ring-[#991b1b] h-12 rounded-r-lg font-medium"
                        />
                      </div>
                    </div>

                    <div className="flex items-start gap-2 pt-2 pb-4 text-left">
                      <input type="checkbox" id="terms" required className="mt-1 w-4 h-4 rounded border-gray-300 text-[#991b1b] focus:ring-[#991b1b] cursor-pointer" />
                      <label htmlFor="terms" className="text-xs text-gray-500 font-medium leading-tight mt-0.5 cursor-pointer">
                        Accept Terms &amp; conditions <a href="/terms" className="text-[#991b1b] hover:text-[#7f1d1d] underline transition-colors">View</a>
                      </label>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold py-6 rounded-xl shadow-lg shadow-red-900/20 transition-all hover:shadow-red-900/40 hover:-translate-y-0.5 text-lg flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      SUBMIT REQUEST
                    </Button>
                  </form>
                </>
              ) : (
                <div className="py-6 flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-12 h-12 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
                    Thank You! 🎉
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-1">
                    Your request has been sent on WhatsApp.
                  </p>
                  <p className="text-gray-500 text-sm font-medium mb-6">
                    We will get back to you <strong>shortly!</strong>
                  </p>
                  <div className="bg-gray-50 rounded-xl border border-gray-100 p-4 w-full text-left flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">Call us directly</p>
                      <p className="text-sm font-bold text-gray-800">+91 9483486111 / +91 8073726564</p>
                    </div>
                  </div>
                  <Button
                    onClick={() => setSubmitted(false)}
                    className="w-full rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 transition-colors"
                  >
                    Submit Another Request
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
