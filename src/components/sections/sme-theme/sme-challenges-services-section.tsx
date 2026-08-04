import { Button } from "@/components/ui/button";
import { Building2, FileText, BadgeCheck, Shield, Globe, Briefcase, Calculator, Laptop } from "lucide-react";
import Link from "next/link";

const services = [
  { name: "Registration", icon: Building2 },
  { name: "GST & Tax", icon: FileText },
  { name: "Licences", icon: BadgeCheck },
  { name: "Certifications", icon: Shield },
  { name: "Trademark", icon: Globe },
  { name: "Govt. Regs", icon: Briefcase },
  { name: "Accounting", icon: Calculator },
  { name: "Web Dev", icon: Laptop },
];

export function SmeChallengesServicesSection() {
  return (
    <div className="py-16 bg-transparent border-b border-border">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column - Challenges */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 font-plus-jakarta mb-6">
              Challenges Faced by Businesses
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-justify">
              Despite their vital role in the economy and the support from the government, the businesses in the country continue to face several challenges. Some of the major challenges include low awareness about compliance, complex regulatory frameworks, poor infrastructure facilities, availability of skilled workforce, availability of funds, etc.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6 text-justify">
              The government is implementing numerous schemes to provide financial assistance. However, most businesses have little awareness about how to get financial assistance or comply with legal requirements. There exists a huge gap which is eventually impacting the reach of government schemes.
            </p>
            <Link href="#" className="text-secondary font-medium mb-8 hover:underline">
              Read More
            </Link>
            <Button className="bg-secondary hover:bg-secondary-hover text-white rounded-full px-8 py-6 text-base shadow-md transition-transform hover:-translate-y-1">
              Get Details
            </Button>
          </div>

          {/* Right Column - Services */}
          <div>
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 font-plus-jakarta">
                Services
              </h2>
              <div className="w-16 h-1 bg-secondary mx-auto mt-2"></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {services.map((service, i) => (
                <div 
                  key={i}
                  className="bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col items-center justify-center text-center gap-3 aspect-square cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-surface-alt flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">
                    {service.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
