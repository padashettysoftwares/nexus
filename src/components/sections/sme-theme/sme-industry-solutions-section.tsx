import { Button } from "@/components/ui/button";
import { 
  Pizza, Shirt, Plane, Coffee, Car, FlaskConical, ShoppingCart, 
  Wrench, Pill, Settings, Cpu, Zap 
} from "lucide-react";

const industries = [
  { name: "Food", icon: Pizza },
  { name: "Textile", icon: Shirt },
  { name: "Aerospace & Defence", icon: Plane },
  { name: "Beverage", icon: Coffee },
  { name: "Automotive", icon: Car },
  { name: "Chemical", icon: FlaskConical },
  { name: "FMCG", icon: ShoppingCart },
  { name: "Mechanical", icon: Wrench },
  { name: "Pharmaceutical", icon: Pill },
  { name: "Machine Tools", icon: Settings },
  { name: "Electronics", icon: Cpu },
  { name: "Electrical", icon: Zap },
];

export function SmeIndustrySolutionsSection() {
  return (
    <div className="py-16 bg-transparent border-b border-border pb-32"> {/* extra pb for the sticky footer */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] font-plus-jakarta">
            Industry Solutions
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 max-w-6xl mx-auto">
          {industries.map((industry, i) => (
            <div 
              key={i}
              className="bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1 p-4 md:p-6 flex flex-col items-center justify-center text-center gap-4 cursor-pointer"
            >
              <industry.icon className="w-10 h-10 text-[#f97316]" strokeWidth={1.5} />
              <span className="text-sm font-medium text-gray-700">
                {industry.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button className="bg-[#f97316] hover:bg-[#ea580c] text-white rounded-full px-8 py-6 text-base shadow-md transition-transform hover:-translate-y-1 font-semibold">
            View More
          </Button>
        </div>
      </div>
    </div>
  );
}
