import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Award, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-[#991b1b] text-white pt-20 pb-32 md:pb-10 border-t-4 border-[#7f1d1d]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        
        {/* Top Section - Badges & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-b border-white/10 pb-12 mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex items-center gap-3 bg-black/20 p-4 rounded-xl border border-white/10">
              <Award className="w-10 h-10 text-yellow-400" />
              <div>
                <p className="text-xs text-white/70 font-bold uppercase tracking-wider">Govt. Recognized</p>
                <p className="font-bold text-white text-lg">MSME Registered</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-black/20 p-4 rounded-xl border border-white/10">
              <ShieldCheck className="w-10 h-10 text-blue-300" />
              <div>
                <p className="text-xs text-white/70 font-bold uppercase tracking-wider">Quality Standard</p>
                <p className="font-bold text-white text-lg">ISO 9001:2015</p>
              </div>
            </div>
          </div>

          <div className="bg-[#7f1d1d] p-6 rounded-2xl shadow-xl flex flex-col sm:flex-row items-center gap-6 border border-white/10">
            <div className="flex-1">
              <h4 className="text-xl font-bold mb-1 text-white">Subscribe to Newsletter</h4>
              <p className="text-white/80 text-sm">Get the latest compliance updates.</p>
            </div>
            <div className="flex w-full sm:w-auto gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:border-white focus:bg-black/30 w-full sm:w-48"
              />
              <Button className="bg-white text-[#991b1b] hover:bg-gray-100 font-bold px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-white/20 shrink-0 bg-white">
                <Image src="/Nexus-logo.jpeg" alt="Nexus Solutions Icon" fill className="object-cover" />
              </div>
            </Link>
            <p className="text-white/80 mb-8 leading-relaxed max-w-sm">
              Nexus Solutions is a premier consultancy firm based in Kalaburagi, providing end-to-end legal, regulatory, and corporate compliance services.
            </p>
            <div className="flex gap-3">
              <Link href="#" className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center hover:bg-white hover:text-[#991b1b] transition-colors text-sm font-bold border border-white/10">FB</Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center hover:bg-white hover:text-[#991b1b] transition-colors text-sm font-bold border border-white/10">X</Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center hover:bg-white hover:text-[#991b1b] transition-colors text-sm font-bold border border-white/10">IG</Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center hover:bg-white hover:text-[#991b1b] transition-colors text-sm font-bold border border-white/10">IN</Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 font-plus-jakarta text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white/80"></span> Quick Links
            </h4>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-white/80 hover:text-white transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /> All Services</Link></li>
              <li><Link href="/industries" className="text-white/80 hover:text-white transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /> Industries</Link></li>
              <li><Link href="/resources" className="text-white/80 hover:text-white transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /> Resources</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-white transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /> Contact Us</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold mb-6 font-plus-jakarta text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white/80"></span> Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center shrink-0 mt-0.5 border border-white/10"><MapPin className="w-4 h-4 text-white" /></div>
                <span className="text-white/80 text-sm leading-relaxed">#2-909/2967/4/14 Sharan Nilaya,<br />Near Andola Hospital, Gubbi Colony,<br />MG Road, Kalaburagi - 585 105</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center shrink-0 border border-white/10"><Phone className="w-4 h-4 text-white" /></div>
                <span className="text-white/80 text-sm">+91 9483486111<br/>+91 8073726564</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center shrink-0 border border-white/10"><Mail className="w-4 h-4 text-white" /></div>
                <span className="text-white/80 text-sm">nexussolutionsglb@gmail.com<br/>info@nexusolutions.com</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold mb-6 font-plus-jakarta text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white/80"></span> Find Us
            </h4>
            <div className="w-full h-48 bg-black/20 rounded-xl overflow-hidden border border-white/10 relative">
              {/* Google Maps Embed for Kalaburagi */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121753.8643195247!2d76.75705359740177!3d17.33230869687483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc65b7367ce71bb%3A0x6b4bb4c901e1dd73!2sKalaburagi%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1707567120300!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale contrast-125 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              ></iframe>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Nexus Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-white/60 text-sm">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
