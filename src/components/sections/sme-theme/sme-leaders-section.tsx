import Image from "next/image";

const leaders = [
  { name: "The Financial Express", img: "/logos/financial-express.png" }, // Placeholders
  { name: "Award 1", img: "/logos/award-1.png" },
  { name: "Award 2", img: "/logos/award-2.png" },
  { name: "The Hindu", img: "/logos/the-hindu.png" },
  { name: "Indian Express", img: "/logos/indian-express.png" },
  { name: "Engineering Review", img: "/logos/engineering-review.png" },
];

export function SmeLeadersSection() {
  return (
    <div className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-600 font-plus-jakarta">
            Leaders In <span className="text-[#f97316]">Business Consulting</span>
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {/* We'll use text as placeholders if images aren't available, but we set up the structure for images */}
          {leaders.map((leader, i) => (
            <div 
              key={i} 
              className="w-[120px] h-[80px] md:w-[150px] md:h-[100px] border border-gray-200 flex items-center justify-center p-4 bg-white hover:shadow-md transition-shadow"
            >
              <div className="text-xs font-bold text-gray-400 text-center uppercase tracking-widest leading-relaxed">
                {leader.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
