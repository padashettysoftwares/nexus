"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Pizza, Shirt, Plane, Coffee, Car, FlaskConical, ShoppingCart, 
  Wrench, Pill, Settings, Cpu, Zap, CheckCircle2, MessageCircle, Phone
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ResponsiveCarousel } from "@/components/ui/responsive-carousel";

const industries = [
  { 
    name: "Food", 
    projects: "150+",
    price: "4,999",
    icon: Pizza,
    gradient: "from-orange-100 to-orange-50",
    iconColor: "text-orange-600",
    specs: ["FSSAI Registration & Licensing", "HACCP Certification", "Food Safety Audits", "Packaging Compliance", "Supply Chain Structuring"]
  },
  { 
    name: "Textile", 
    projects: "120+",
    price: "7,499",
    icon: Shirt,
    gradient: "from-blue-100 to-blue-50",
    iconColor: "text-blue-600",
    specs: ["Pollution Control Board Clearance", "Factory Licensing", "Labour Compliance", "Export Certifications", "ISO 9001 Implementation"]
  },
  { 
    name: "Aerospace", 
    projects: "30+",
    price: "15,000",
    icon: Plane,
    gradient: "from-slate-100 to-slate-50",
    iconColor: "text-slate-600",
    specs: ["AS9100 Certification", "ITAR Compliance", "MoD Vendor Registration", "Security Clearances", "Technology Transfer Agreements"]
  },
  { 
    name: "Beverage", 
    projects: "80+",
    price: "5,999",
    icon: Coffee,
    gradient: "from-amber-100 to-amber-50",
    iconColor: "text-amber-600",
    specs: ["FSSAI Licensing", "Water Testing & Approvals", "Excise Department Clearances", "Legal Metrology", "Trade Mark Registration"]
  },
  { 
    name: "Automotive", 
    projects: "90+",
    price: "12,500",
    icon: Car,
    gradient: "from-zinc-100 to-zinc-50",
    iconColor: "text-zinc-600",
    specs: ["ARAI Homologation", "IATF 16949 Certification", "Pollution Norms Compliance", "Vendor Registration", "Factory Setup Licensing"]
  },
  { 
    name: "Chemical", 
    projects: "60+",
    price: "9,999",
    icon: FlaskConical,
    gradient: "from-emerald-100 to-emerald-50",
    iconColor: "text-emerald-600",
    specs: ["Petroleum & Explosives Safety (PESO)", "Hazardous Waste Authorization", "Environmental Clearance", "REACH Compliance", "Fire NOC"]
  },
  { 
    name: "FMCG", 
    projects: "200+",
    price: "6,499",
    icon: ShoppingCart,
    gradient: "from-red-100 to-red-50",
    iconColor: "text-red-600",
    specs: ["Legal Metrology", "BIS Certification", "FSSAI Compliance", "Brand & Trademark Protection", "Supply Chain Audits"]
  },
  { 
    name: "Mechanical", 
    projects: "110+",
    price: "8,999",
    icon: Wrench,
    gradient: "from-gray-100 to-gray-50",
    iconColor: "text-gray-600",
    specs: ["ISO Certification", "Factory Act Compliance", "Machinery Valuation & Licensing", "Labour Registrations", "Trade License"]
  },
  { 
    name: "Pharmaceutical", 
    projects: "70+",
    price: "14,999",
    icon: Pill,
    gradient: "from-teal-100 to-teal-50",
    iconColor: "text-teal-600",
    specs: ["CDSCO Approvals", "WHO-GMP Certification", "Drug License", "Clinical Trial Registrations", "Pollution Control Board Clearance"]
  },
  { 
    name: "Machine Tools", 
    projects: "50+",
    price: "7,999",
    icon: Settings,
    gradient: "from-indigo-100 to-indigo-50",
    iconColor: "text-indigo-600",
    specs: ["CE Marking (Export)", "ISO 9001:2015", "OEMS Vendor Registration", "Safety Audits", "Import/Export Code (IEC)"]
  },
  { 
    name: "Electronics", 
    projects: "140+",
    price: "9,499",
    icon: Cpu,
    gradient: "from-cyan-100 to-cyan-50",
    iconColor: "text-cyan-600",
    specs: ["E-Waste Management", "BIS (CRS) Registration", "WPC Approval", "RoHS Compliance", "Factory Setup Approvals"]
  },
  { 
    name: "Electrical", 
    projects: "100+",
    price: "8,499",
    icon: Zap,
    gradient: "from-yellow-100 to-yellow-50",
    iconColor: "text-yellow-600",
    specs: ["BIS Certification", "CE Marking", "Electrical Inspectorate Approvals", "Energy Efficiency Ratings (BEE)", "Safety Standard Testing"]
  },
];

export function SmeIndustrySolutionsSection() {
  const [selectedIndustry, setSelectedIndustry] = useState<typeof industries[0] | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleIndustryConsult = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("ind-name") as string;
    const phone = formData.get("ind-phone") as string;
    const industry = selectedIndustry?.name || "General";
    const message = encodeURIComponent(`Hello Nexus Solutions! 👋\n\nI am interested in compliance services for the *${industry} Industry*.\n\nName: ${name}\nPhone: +91 ${phone}\n\nPlease provide more details and contact me. Thank you!`);
    window.open(`https://wa.me/919483486111?text=${message}`, "_blank");
    setFormSubmitted(true);
  };

  return (
    <div id="industries" className="py-24 bg-[#FCFBF8] border-b border-[#EAE7E0] relative overflow-hidden">
      {/* Light theme red glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-100/50 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-50/80 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight mb-4">
            Specialized <span className="text-red-600">Industry Solutions</span>
          </h2>
          <p className="text-stone-600 text-lg">
            We understand that every industry has unique compliance challenges. Select your industry to discover our tailored solutions.
          </p>
        </div>

        <Dialog>
          <ResponsiveCarousel desktopClassName="max-w-6xl mx-auto" mobileGapClassName="gap-4 md:gap-6 lg:gap-6">
            {industries.map((industry, i) => (
              <DialogTrigger 
                key={i} 
                onClick={() => setSelectedIndustry(industry)}
                className="group bg-white border border-[#EAE7E0] rounded-3xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-red-900/5 hover:-translate-y-2 hover:border-red-200 relative overflow-hidden w-[82vw] sm:w-[260px] md:w-[280px] lg:w-[280px] shrink-0 snap-start flex-none h-full min-h-[220px]"
              >
                  {/* Subtle red top border on hover */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="w-16 h-16 rounded-2xl bg-[#FCFBF8] flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 border border-[#EAE7E0] group-hover:bg-red-50 group-hover:border-red-100">
                    <industry.icon className="w-8 h-8 text-stone-400 group-hover:text-red-600 transition-colors" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-stone-800 mb-2 group-hover:text-red-600 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-xs font-bold text-stone-500 bg-stone-100 px-3 py-1 rounded-full group-hover:bg-red-100 group-hover:text-red-700 transition-colors border border-[#EAE7E0]">
                    {industry.projects} Projects
                  </p>
              </DialogTrigger>
            ))}
          </ResponsiveCarousel>

          <DialogContent className="sm:max-w-2xl bg-white border border-gray-200 shadow-2xl rounded-2xl z-50 p-0 overflow-hidden max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className={`h-32 sm:h-40 w-full bg-gradient-to-r ${selectedIndustry?.gradient || 'from-gray-100 to-gray-50'} relative flex items-center justify-center overflow-hidden`}>
               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
               {selectedIndustry && <selectedIndustry.icon className={`w-32 h-32 opacity-20 ${selectedIndustry.iconColor} absolute -right-4 -bottom-4`} />}
               
               <div className="relative z-10 flex flex-col items-center text-center px-6">
                 <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-2 sm:mb-3">
                   {selectedIndustry && <selectedIndustry.icon className={`w-7 h-7 sm:w-8 sm:h-8 ${selectedIndustry.iconColor}`} />}
                 </div>
                 <DialogTitle className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                   {selectedIndustry?.name} Industry
                 </DialogTitle>
               </div>
            </div>

            <div className="p-5 sm:p-8">
              <DialogDescription className="text-sm sm:text-base text-gray-600 mb-5 font-medium">
                Nexus Solutions provides end-to-end legal, regulatory, and compliance assistance tailored for the {selectedIndustry?.name} industry.
              </DialogDescription>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Services List */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 uppercase text-xs tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#dc2626]"></span> Key Services Included
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedIndustry?.specs.map((spec, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm font-medium">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Consultation Form */}
                <div className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                  {!formSubmitted ? (
                    <>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Contact for More Information</p>
                      <p className="text-sm text-gray-600 mb-4">Get a free consultation for <strong>{selectedIndustry?.name}</strong> compliance.</p>
                      <form onSubmit={handleIndustryConsult} className="space-y-3">
                        <div>
                          <Label htmlFor="ind-name" className="text-xs font-bold text-gray-700 mb-1 block">Your Name</Label>
                          <Input
                            id="ind-name"
                            name="ind-name"
                            required
                            placeholder="Rahul Sharma"
                            className="h-10 bg-white border-gray-200 rounded-lg text-sm"
                          />
                        </div>
                        <div>
                          <Label htmlFor="ind-phone" className="text-xs font-bold text-gray-700 mb-1 block">Phone Number</Label>
                          <div className="flex">
                            <div className="flex items-center px-2.5 bg-gray-100 border border-r-0 border-gray-200 rounded-l-lg text-xs font-bold text-gray-600">
                              🇮🇳 +91
                            </div>
                            <Input
                              id="ind-phone"
                              name="ind-phone"
                              type="tel"
                              required
                              maxLength={10}
                              placeholder="98765 43210"
                              className="h-10 bg-white border-gray-200 rounded-l-none rounded-r-lg text-sm"
                            />
                          </div>
                        </div>
                        <Button
                          type="submit"
                          className="w-full h-10 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold rounded-lg text-sm flex items-center justify-center gap-2 shadow-md"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Book via WhatsApp
                        </Button>
                      </form>
                    </>
                  ) : (
                    <div className="flex flex-col items-center text-center py-4">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-3">
                        <CheckCircle2 className="w-8 h-8 text-green-500" />
                      </div>
                      <h4 className="text-lg font-extrabold text-gray-900 mb-1">Thank You! 🎉</h4>
                      <p className="text-gray-500 text-sm mb-3">Request sent! We will get back to you <strong>shortly.</strong></p>
                      <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-lg p-3 w-full">
                        <Phone className="w-4 h-4 text-green-600 shrink-0" />
                        <p className="text-xs font-bold text-gray-700">+91 9483486111 / +91 8073726564</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
