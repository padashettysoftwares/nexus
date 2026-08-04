"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Pizza, Shirt, Plane, Coffee, Car, FlaskConical, ShoppingCart, 
  Wrench, Pill, Settings, Cpu, Zap, ArrowRight, CheckCircle2 
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

  return (
    <div className="py-24 bg-white border-b border-gray-100 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-50/50 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-plus-jakarta mb-4">
            Specialized <span className="text-[#dc2626]">Industry Solutions</span>
          </h2>
          <p className="text-gray-500 text-lg">
            We understand that every industry has unique compliance challenges. Select your industry to discover our tailored solutions.
          </p>
        </div>

        <Dialog>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {industries.map((industry, i) => (
              <DialogTrigger 
                key={i} 
                onClick={() => setSelectedIndustry(industry)}
                className="group bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:border-[#dc2626]/30 relative overflow-hidden w-full h-full"
              >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${industry.gradient} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                    <industry.icon className={`w-8 h-8 ${industry.iconColor}`} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-[#dc2626] transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 bg-gray-50 px-3 py-1 rounded-full mt-2 group-hover:bg-red-50 transition-colors">
                    {industry.projects} Projects
                  </p>
              </DialogTrigger>
            ))}
          </div>

          <DialogContent className="sm:max-w-2xl bg-white border border-gray-200 shadow-2xl rounded-2xl z-50 p-0 overflow-hidden">
            {/* Modal Image/Header Header */}
            <div className={`h-40 w-full bg-gradient-to-r ${selectedIndustry?.gradient || 'from-gray-100 to-gray-50'} relative flex items-center justify-center overflow-hidden`}>
               {/* Abstract pattern */}
               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
               {selectedIndustry && <selectedIndustry.icon className={`w-32 h-32 opacity-20 ${selectedIndustry.iconColor} absolute -right-4 -bottom-4`} />}
               
               <div className="relative z-10 flex flex-col items-center text-center px-6">
                 <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-3">
                   {selectedIndustry && <selectedIndustry.icon className={`w-8 h-8 ${selectedIndustry.iconColor}`} />}
                 </div>
                 <DialogTitle className="text-3xl font-extrabold text-gray-900 tracking-tight">
                   {selectedIndustry?.name} Industry Compliance
                 </DialogTitle>
               </div>
            </div>

            <div className="p-8">
              <DialogDescription className="text-base text-gray-600 mb-6 font-medium">
                Nexus Solutions provides end-to-end legal, regulatory, and compliance assistance strictly tailored to the dynamic needs of the {selectedIndustry?.name} industry.
              </DialogDescription>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Services List */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#dc2626]"></span> Key Services Included
                  </h4>
                  <ul className="space-y-3">
                    {selectedIndustry?.specs.map((spec, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span className="text-gray-700 text-sm font-medium">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Pricing & CTA */}
                <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 flex flex-col justify-center text-center">
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-2">Packages Starting From</p>
                  <div className="flex items-start justify-center mb-6">
                    <span className="text-2xl font-bold text-gray-400 mt-1 mr-1">₹</span>
                    <span className="text-5xl font-extrabold text-gray-900">{selectedIndustry?.price}</span>
                  </div>
                  
                  <Button className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold py-6 rounded-lg shadow-lg transition-transform hover:-translate-y-1 mb-3 text-base">
                    Book Free Consultation
                  </Button>
                  <p className="text-xs text-gray-400">No hidden fees. 100% transparent pricing.</p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
