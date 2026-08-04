"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookConsultationModal } from "@/components/ui/book-consultation-modal";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [modalOpen, setModalOpen] = React.useState(false);
  const searchInputRef = React.useRef<HTMLInputElement>(null);

  const handleMenuHover = (menu: string | null) => {
    setActiveMenu(menu);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (!searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    } else {
      setSearchQuery("");
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 p-4 md:p-6 transition-all duration-300 flex justify-center">
      <header className="relative w-full max-w-7xl border border-white/20 bg-white/70 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl md:rounded-full transition-all hover:bg-white/90 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
        <div className="px-5 md:px-8 flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
             <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden border border-blue-100 shadow-sm shrink-0">
               <Image src="/Nexus-logo.jpeg" alt="Nexus Solutions Icon" fill className="object-cover" />
             </div>
             <div className="relative w-36 h-10 md:w-44 md:h-12 overflow-hidden hidden sm:block">
               <Image src="/name.png" alt="Nexus Solutions" fill className="object-contain object-left" />
             </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 h-full">
            {/* Services Dropdown */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => handleMenuHover('services')}
              onMouseLeave={() => handleMenuHover(null)}
            >
              <button className="flex items-center gap-1.5 text-base font-bold text-gray-800 hover:text-blue-700 transition-colors py-2 group">
                Services <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMenu === 'services' ? "rotate-180 text-blue-700" : "text-gray-400 group-hover:text-blue-700"}`} />
              </button>
              {activeMenu === 'services' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px] animate-in fade-in slide-in-from-top-2">
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden grid grid-cols-2 p-6 gap-6 relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-[#dc2626]"></div>
                    <div>
                      <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 px-2 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Business Setup</h5>
                      <Link href="/services" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg font-medium transition-colors">Private Limited Registration</Link>
                      <Link href="/services" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg font-medium transition-colors">LLP Registration</Link>
                      <Link href="/services" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg font-medium transition-colors">Partnership Firm</Link>
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 px-2 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#dc2626]"></span> Tax & Compliance</h5>
                      <Link href="/services" className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-[#dc2626] rounded-lg font-medium transition-colors">GST Registration & Filing</Link>
                      <Link href="/services" className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-[#dc2626] rounded-lg font-medium transition-colors">Income Tax Returns</Link>
                      <Link href="/services" className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-[#dc2626] rounded-lg font-medium transition-colors">Annual ROC Compliance</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => handleMenuHover('industries')}
              onMouseLeave={() => handleMenuHover(null)}
            >
              <button className="flex items-center gap-1.5 text-base font-bold text-gray-800 hover:text-blue-700 transition-colors py-2 group">
                Industries <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMenu === 'industries' ? "rotate-180 text-blue-700" : "text-gray-400 group-hover:text-blue-700"}`} />
              </button>
              {activeMenu === 'industries' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[500px] animate-in fade-in slide-in-from-top-2">
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden grid grid-cols-2 p-6 gap-2">
                    <Link href="/#industries" className="px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-700 rounded-lg font-medium transition-colors flex items-center gap-2">🍽️ Food & Beverage</Link>
                    <Link href="/#industries" className="px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-700 rounded-lg font-medium transition-colors flex items-center gap-2">👕 Textiles & Apparel</Link>
                    <Link href="/#industries" className="px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-700 rounded-lg font-medium transition-colors flex items-center gap-2">💊 Pharmaceuticals</Link>
                    <Link href="/#industries" className="px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-700 rounded-lg font-medium transition-colors flex items-center gap-2">🚗 Automotive</Link>
                    <Link href="/#industries" className="col-span-2 mt-4 pt-4 border-t border-gray-100 text-sm font-bold text-blue-600 hover:text-blue-800 text-center flex items-center justify-center gap-1">View All Industries <ArrowRight className="w-4 h-4" /></Link>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => handleMenuHover('resources')}
              onMouseLeave={() => handleMenuHover(null)}
            >
              <button className="flex items-center gap-1.5 text-base font-bold text-gray-800 hover:text-blue-700 transition-colors py-2 group">
                Resources <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMenu === 'resources' ? "rotate-180 text-blue-700" : "text-gray-400 group-hover:text-blue-700"}`} />
              </button>
              {activeMenu === 'resources' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[300px] animate-in fade-in slide-in-from-top-2">
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col p-3">
                    <Link href="/blog" className="px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-700 rounded-lg font-medium transition-colors">Knowledge Base & Blog</Link>
                    <Link href="/case-studies" className="px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-700 rounded-lg font-medium transition-colors">Case Studies</Link>
                    <Link href="/webinars" className="px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-700 rounded-lg font-medium transition-colors">Webinars & Events</Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link href="/about" className="text-base font-bold text-gray-800 hover:text-blue-700 transition-colors">
              About
            </Link>
            <Link href="/pricing" className="text-base font-bold text-gray-800 hover:text-blue-700 transition-colors">
              Pricing
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <div className={`flex items-center transition-all duration-300 ease-out overflow-hidden ${searchOpen ? 'w-64 bg-gray-50 border border-gray-200 rounded-full' : 'w-10 bg-transparent border-transparent'}`}>
              <button onClick={toggleSearch} className={`w-10 h-10 flex items-center justify-center shrink-0 rounded-full transition-colors ${searchOpen ? 'text-gray-500' : 'text-gray-600 hover:bg-gray-100'}`}>
                <Search className="w-5 h-5" />
              </button>
              <input 
                ref={searchInputRef}
                type="text" 
                placeholder="Search services..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full bg-transparent border-none focus:outline-none text-sm text-gray-700 font-medium placeholder:text-gray-400 transition-all ${searchOpen ? 'opacity-100 px-2' : 'opacity-0 w-0'}`}
                style={{ visibility: searchOpen ? 'visible' : 'hidden' }}
              />
            </div>
            <button onClick={() => setModalOpen(true)}>
              <Button className="rounded-full px-7 h-12 bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white font-bold shadow-lg shadow-blue-500/30 transition-all hover:shadow-blue-500/50 hover:-translate-y-0.5 group flex items-center gap-2">
                Book Appointment
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2 text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full mt-2 bg-white/95 backdrop-blur-2xl border border-gray-100 rounded-2xl shadow-2xl overflow-hidden lg:hidden flex flex-col p-4 animate-in fade-in slide-in-from-top-4">
            <Link href="/services" className="px-4 py-3 text-base font-bold text-gray-800 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/#industries" className="px-4 py-3 text-base font-bold text-gray-800 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors" onClick={() => setIsOpen(false)}>Industries</Link>
            <Link href="/about" className="px-4 py-3 text-base font-bold text-gray-800 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/pricing" className="px-4 py-3 text-base font-bold text-gray-800 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors" onClick={() => setIsOpen(false)}>Pricing</Link>
            <Link href="/resources" className="px-4 py-3 text-base font-bold text-gray-800 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors" onClick={() => setIsOpen(false)}>Resources</Link>
            <Link href="/contact" className="px-4 py-3 text-base font-bold text-gray-800 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
            <div className="pt-4 mt-2 border-t border-gray-100 flex justify-center">
              <button className="w-full" onClick={() => { setIsOpen(false); setModalOpen(true); }}>
                <Button className="w-full rounded-full h-12 bg-gradient-to-r from-blue-700 to-blue-500 text-white font-bold shadow-lg">Book Appointment</Button>
              </button>
            </div>
          </div>
        )}
      </header>
      <BookConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
