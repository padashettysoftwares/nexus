"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

const companies = [
  { name: "Sri Maha Ganesh Industries", color: "bg-blue-50 text-[#1E3A8A] border-blue-100" },
  { name: "Sri Devi Industries", color: "bg-gray-50 text-gray-800 border-gray-200" },
  { name: "Kumar Marketing", color: "bg-[#1f2937] text-white border-transparent" },
  { name: "Nimitta Matram", color: "bg-surface-alt text-secondary border-border" },
  { name: "Aarav Foods", color: "bg-green-50 text-green-800 border-green-100" },
];

export function SmeCompaniesAvailedSection() {
  return (
    <div className="py-16 bg-transparent border-b border-border">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-600 font-plus-jakarta">
            Companies Availed <span className="text-secondary">Compliance Services</span>
          </h2>
        </div>
        
        <div className="relative flex items-center justify-center">
          <button className="hidden md:flex absolute left-0 w-10 h-10 rounded-full bg-white shadow flex-items-center justify-center text-[#2563eb] hover:bg-gray-50 z-10">
            <ChevronLeft className="w-6 h-6 m-auto" />
          </button>

          <div className="flex overflow-x-auto md:overflow-visible gap-6 px-4 md:px-12 py-4 hide-scrollbar w-full justify-start md:justify-center">
            {companies.map((company, i) => (
              <div 
                key={i} 
                className={`flex-shrink-0 w-[200px] h-[120px] md:w-[220px] md:h-[140px] rounded-md shadow-sm border border-gray-100 flex items-center justify-center p-4 transition-transform hover:scale-105 ${company.color}`}
              >
                <div className="font-bold text-center tracking-wide">
                  {company.name}
                </div>
              </div>
            ))}
          </div>

          <button className="hidden md:flex absolute right-0 w-10 h-10 rounded-full bg-white shadow flex-items-center justify-center text-[#2563eb] hover:bg-gray-50 z-10">
            <ChevronRight className="w-6 h-6 m-auto" />
          </button>
        </div>
      </div>
    </div>
  );
}
