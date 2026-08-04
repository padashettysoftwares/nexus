"use client";

import { ChevronLeft, ChevronRight, Building2, Calendar } from "lucide-react";

const companies = [
  { name: "Sri Maha Ganesh Industries", industry: "Manufacturing", since: "2018", initial: "SG", color: "from-blue-500 to-blue-700" },
  { name: "Sri Devi Industries", industry: "Food Processing", since: "2022", initial: "SD", color: "from-green-500 to-green-700" },
  { name: "Kumar Marketing", industry: "Retail & Trade", since: "2019", initial: "KM", color: "from-purple-500 to-purple-700" },
  { name: "Nimitta Matram", industry: "Textiles", since: "2021", initial: "NM", color: "from-orange-500 to-orange-700" },
  { name: "Aarav Foods", industry: "FMCG", since: "2022", initial: "AF", color: "from-red-500 to-red-700" },
];

export function SmeCompaniesAvailedSection() {
  return (
    <div className="py-20 bg-gray-50 border-b border-gray-100 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-red-100/50 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px] relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-plus-jakarta mb-4">
            Companies That Trust <span className="text-[#dc2626]">Our Expertise</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We have successfully partnered with industry leaders across various sectors to streamline their compliance and business registrations.
          </p>
        </div>
        
        <div className="relative flex items-center justify-center">
          <button className="hidden md:flex absolute -left-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-[#dc2626] hover:scale-110 transition-all z-20 border border-gray-100">
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex overflow-x-auto md:overflow-visible gap-6 px-4 py-8 hide-scrollbar w-full justify-start md:justify-center">
            {companies.map((company, i) => (
              <div 
                key={i} 
                className="group flex-shrink-0 w-[260px] bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col items-center text-center cursor-pointer relative overflow-hidden"
              >
                {/* Top Border Accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${company.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Logo Placeholder */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${company.color} flex items-center justify-center shadow-lg shadow-gray-200 mb-5 text-white font-bold text-xl`}>
                  {company.initial}
                </div>

                <h3 className="font-bold text-gray-800 text-lg leading-tight mb-2 group-hover:text-blue-700 transition-colors">
                  {company.name}
                </h3>
                
                <div className="w-8 h-0.5 bg-gray-200 mb-4 group-hover:bg-[#dc2626] transition-colors duration-300"></div>

                <div className="flex flex-col gap-2 w-full mt-auto">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <Building2 className="w-4 h-4 text-gray-400" />
                    <span>{company.industry}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span>Since {company.since}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="hidden md:flex absolute -right-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-[#dc2626] hover:scale-110 transition-all z-20 border border-gray-100">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
