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
    <div className="relative bg-[#FDFBF7] overflow-hidden min-h-[700px] flex items-center">
      {/* Premium Ivory Background with Subtle Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#F7F5F0]/40">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#3F3F46_1px,transparent_1px),linear-gradient(to_bottom,#3F3F46_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        {/* Soft, static ambient glows (optimized for performance) */}
        <div 
          className="absolute -top-[30%] -right-[10%] w-[70%] h-[90%] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-100 via-red-50/40 to-transparent blur-[120px]" 
        />
        <div 
          className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[80%] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#EAE7E0] to-transparent blur-[120px]" 
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px] py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text & Illustration Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 xl:col-span-7 flex flex-col items-start text-stone-900"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-[#E5E0D8] text-sm font-semibold text-stone-600 mb-8 shadow-sm backdrop-blur-md">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" /> Rated 4.9/5 by 200+ Businesses
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-6 leading-[1.15] text-[#1C1917]">
              Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-500">Trusted Partner</span> <br className="hidden md:block" /> for Business Growth
            </h1>
            
            <p className="text-lg md:text-xl text-stone-600 mb-10 font-normal max-w-2xl leading-relaxed">
              Connect with India's Top Business Consultants. We handle the paperwork so you can focus entirely on scaling your business.
            </p>

            {/* Illustration with Floating Stats */}
            <div className="relative w-full max-w-lg mt-2 hidden md:block">
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-white/10 ring-1 ring-white/5">
                <Image src="/images/hero-consulting.png" alt="Consulting Team" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80"></div>
              </div>

              {/* Singular, elegant floating stat */}
              <motion.div 
                animate={{ y: [-5, 5, -5] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 bg-[#FCFBF8]/95 backdrop-blur-md border border-[#EAE7E0] rounded-2xl p-5 shadow-[0_20px_40px_rgb(0,0,0,0.06)] flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center border border-red-100 shadow-inner">
                  <ShieldCheck className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-stone-800 leading-none tracking-tight">99%</p>
                  <p className="text-sm text-stone-500 font-semibold mt-1">Client Satisfaction</p>
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
            <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] p-8 sm:p-10 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 to-red-400"></div>
              
              {!submitted ? (
                <>
                  <div className="mb-8 mt-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                      Talk to an <span className="text-red-600">Expert</span>
                    </h3>
                    <p className="text-sm text-gray-500 mt-2 font-medium">Book a free consultation call in seconds.</p>
                  </div>

                  <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                    <div className="space-y-1.5 text-left">
                      <Label htmlFor="name" className="text-xs font-bold text-gray-600 uppercase tracking-wider">Full Name</Label>
                      <Input 
                        id="name" 
                        name="name"
                        required 
                        placeholder="e.g. Rahul Sharma"
                        className="bg-gray-50/50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus-visible:ring-red-500 focus-visible:border-red-500 h-12 rounded-xl font-medium transition-all"
                      />
                    </div>
                    
                    <div className="space-y-1.5 text-left">
                      <Label htmlFor="email" className="text-xs font-bold text-gray-600 uppercase tracking-wider">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email"
                        name="email"
                        required 
                        placeholder="name@company.com"
                        className="bg-gray-50/50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus-visible:ring-red-500 focus-visible:border-red-500 h-12 rounded-xl font-medium transition-all"
                      />
                    </div>

                    <div className="space-y-1.5 text-left">
                      <Label htmlFor="phone" className="text-xs font-bold text-gray-600 uppercase tracking-wider">Mobile Number</Label>
                      <div className="flex">
                        <div className="flex-shrink-0 flex items-center px-4 border border-r-0 border-gray-200 bg-gray-100 rounded-l-xl text-sm text-gray-600 font-bold">
                          🇮🇳 +91
                        </div>
                        <Input 
                          id="phone" 
                          type="tel"
                          name="phone"
                          required 
                          maxLength={10}
                          placeholder="98765 43210"
                          className="bg-gray-50/50 border-gray-200 text-gray-900 placeholder:text-gray-400 rounded-l-none focus-visible:ring-red-500 focus-visible:border-red-500 h-12 rounded-r-xl font-medium transition-all"
                        />
                      </div>
                    </div>

                    <div className="flex items-start gap-2 pt-2 pb-4 text-left">
                      <input type="checkbox" id="terms" required className="mt-1 w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-600 cursor-pointer" />
                      <label htmlFor="terms" className="text-xs text-gray-500 font-medium leading-tight mt-0.5 cursor-pointer">
                        Accept Terms &amp; conditions <a href="/terms" className="text-red-600 hover:text-red-700 underline transition-colors">View</a>
                      </label>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-6 rounded-xl shadow-lg shadow-red-600/20 transition-all hover:shadow-red-600/40 hover:-translate-y-0.5 text-base flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Book Consultation
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
