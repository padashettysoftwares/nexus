import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-[#f97316] text-white pt-20 pb-32 md:pb-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden border-2 border-white/20 shrink-0 bg-white">
                <Image src="/Nexus-logo.jpeg" alt="Nexus Solutions Icon" fill className="object-cover" />
              </div>
              <div className="relative w-40 h-10">
                <Image src="/name.png" alt="Nexus Solutions" fill className="object-contain object-left brightness-0 invert" />
              </div>
            </Link>
            <p className="text-white/90 mb-8 leading-relaxed max-w-sm font-medium">
              Your partner in business growth and compliance. We provide end-to-end professional assistance for all your corporate needs.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-[#f97316] transition-colors text-sm font-bold">FB</Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-[#f97316] transition-colors text-sm font-bold">X</Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-[#f97316] transition-colors text-sm font-bold">IG</Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-[#f97316] transition-colors text-sm font-bold">IN</Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 font-plus-jakarta text-white">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-white/80 hover:text-white font-medium transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-white/80 hover:text-white font-medium transition-colors">Services</Link></li>
              <li><Link href="/industries" className="text-white/80 hover:text-white font-medium transition-colors">Industries</Link></li>
              <li><Link href="/resources" className="text-white/80 hover:text-white font-medium transition-colors">Resources</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-white font-medium transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 font-plus-jakarta text-white">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-white/80 hover:text-white font-medium transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white font-medium transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white font-medium transition-colors">Refund Policy</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white font-medium transition-colors">Disclaimer</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold mb-6 font-plus-jakarta text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <span className="text-white/90 font-medium">#2-909/2967/4/14 Sharan Nilaya,<br />Near Andola Hospital, Gubbi Colony,<br />MG Road, Kalaburagi - 585 105</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-white shrink-0 mt-1" />
                <span className="text-white/90 font-medium">+91 9483486111<br/>+91 8073726564</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-white shrink-0 mt-1" />
                <span className="text-white/90 font-medium">nexussolutionsglb@gmail.com<br/>info@nexusolutions.com</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 lg:col-start-10">
            <h4 className="text-lg font-bold mb-6 font-plus-jakarta text-white">Newsletter</h4>
            <p className="text-white/90 mb-4 text-sm font-medium">Subscribe to get the latest government updates and compliance guides.</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/20 border border-white/40 rounded-md px-4 py-2.5 text-white placeholder:text-white/70 focus:outline-none focus:border-white"
              />
              <Button className="w-full bg-white text-[#f97316] hover:bg-gray-100 font-bold">Subscribe</Button>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/80 text-sm font-medium">
            © {new Date().getFullYear()} Nexus Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-white/80 text-sm font-medium">
            <span>ISO Certified</span>
            <span>•</span>
            <span>MSME Registered</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
