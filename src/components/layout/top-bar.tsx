import { MapPin, Phone, Mail, Award, CheckCircle } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-[#2E2E2E] text-white py-2 text-sm hidden md:block">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl flex justify-between items-center">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#C8A96A]" />
            <span>+91 9483486111, +91 8073726564</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#C8A96A]" />
            <span>nexussolutionsglb@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#C8A96A]" />
            <span>Kalaburagi</span>
          </div>
        </div>
        <div className="flex items-center gap-4 font-medium text-xs tracking-wider">
          <div className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-[#C8A96A]" />
            <span className="uppercase">MSME Registered</span>
          </div>
          <div className="w-px h-4 bg-white/20"></div>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-[#C8A96A]" />
            <span className="uppercase">ISO Certified</span>
          </div>
        </div>
      </div>
    </div>
  );
}
