"use client";

import { Building2, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const companies = [
  { name: "Sri Maha Ganesh Industries", industry: "Manufacturing", since: "2018", initial: "SG" },
  { name: "Sri Devi Industries", industry: "Food Processing", since: "2022", initial: "SD" },
  { name: "Kumar Marketing", industry: "Retail & Trade", since: "2019", initial: "KM" },
  { name: "Nimitta Matram", industry: "Textiles", since: "2021", initial: "NM" },
  { name: "Aarav Foods", industry: "FMCG", since: "2022", initial: "AF" },
];

export function SmeCompaniesAvailedSection() {
  // Duplicate for seamless scroll
  const scrollItems = [...companies, ...companies, ...companies, ...companies];

  return (
    <div className="py-24 bg-white border-b border-[#EAE7E0] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px] mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight mb-4">
            Trusted by Industry <span className="text-red-600">Leaders</span>
          </h2>
          <p className="text-stone-500 max-w-2xl mx-auto text-lg">
            We partner with growing businesses across sectors to streamline their compliance and formalize their operations.
          </p>
        </div>
      </div>

      <div className="relative w-full flex overflow-hidden group">
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        <motion.div 
          className="flex gap-6 px-3 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {scrollItems.map((company, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 w-[280px] bg-[#FCFBF8] rounded-2xl border border-[#EAE7E0] p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-white hover:shadow-2xl hover:shadow-red-900/5 hover:border-red-100/60 hover:-translate-y-1 cursor-pointer grayscale group-hover:opacity-50 hover:!opacity-100 hover:!grayscale-0"
            >
              <div className={`w-16 h-16 rounded-xl bg-white text-stone-400 border border-[#EAE7E0] flex items-center justify-center mb-5 font-bold text-xl transition-colors duration-300`}>
                {company.initial}
              </div>

              <h3 className="font-bold text-stone-800 text-lg leading-tight mb-4">
                {company.name}
              </h3>

              <div className="flex flex-col gap-2 w-full mt-auto">
                <div className="flex items-center justify-center gap-2 text-sm text-stone-500">
                  <Building2 className="w-4 h-4 text-stone-400" />
                  <span>{company.industry}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-stone-500">
                  <Calendar className="w-4 h-4 text-stone-400" />
                  <span>Since {company.since}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
