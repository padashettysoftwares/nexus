"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [showSuggestions, setShowSuggestions] = React.useState(false);

  const suggestions = [
    "GST Registration",
    "GST Returns",
    "GST Cancellation",
    "GST Amendment",
    "FSSAI License",
    "Trademark Registration",
    "ISO Certification"
  ].filter(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="fixed top-0 left-0 w-full z-50 p-3 md:p-6 transition-all duration-300 flex justify-center">
      <header className="relative w-full max-w-6xl border border-border bg-white/80 backdrop-blur-xl shadow-lg rounded-2xl md:rounded-full">
        <div className="px-4 md:px-6 lg:px-8 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
             <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-xl overflow-hidden border border-blue-100 shadow-sm shrink-0">
               <Image src="/Nexus-logo.jpeg" alt="Nexus Solutions Icon" fill className="object-cover" />
             </div>
             <div className="relative w-32 h-8 md:w-40 md:h-10 overflow-hidden hidden sm:block">
               <Image src="/name.png" alt="Nexus Solutions" fill className="object-contain object-left" />
             </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-bold text-text-primary hover:text-primary transition-colors py-2">
                Services <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {isServicesOpen && (
                  <div className="absolute top-full left-0 pt-2 w-[500px]">
                    <div className="bg-white rounded-xl shadow-xl border border-border overflow-hidden grid grid-cols-2 p-4 gap-4">
                      <div>
                        <h5 className="text-xs font-bold text-text-secondary uppercase mb-3 px-2">Business Setup</h5>
                        <Link href="/services" className="block px-3 py-2 text-sm text-text-primary hover:bg-surface-alt hover:text-primary rounded-lg font-bold">Private Limited</Link>
                        <Link href="/services" className="block px-3 py-2 text-sm text-text-primary hover:bg-surface-alt hover:text-primary rounded-lg font-bold">LLP Registration</Link>
                        <Link href="/services" className="block px-3 py-2 text-sm text-text-primary hover:bg-surface-alt hover:text-primary rounded-lg font-bold">Partnership Firm</Link>
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-text-secondary uppercase mb-3 px-2">Tax & Compliance</h5>
                        <Link href="/services" className="block px-3 py-2 text-sm text-text-primary hover:bg-surface-alt hover:text-primary rounded-lg font-bold">GST Registration</Link>
                        <Link href="/services" className="block px-3 py-2 text-sm text-text-primary hover:bg-surface-alt hover:text-primary rounded-lg font-bold">GST Returns</Link>
                        <Link href="/services" className="block px-3 py-2 text-sm text-text-primary hover:bg-surface-alt hover:text-primary rounded-lg font-bold">Annual Filing</Link>
                      </div>
                      <div className="col-span-2 border-t border-border pt-4 mt-2">
                        <Link href="/services" className="text-sm font-bold text-primary flex items-center justify-center gap-2 hover:underline">
                          View All Services &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
              )}
            </div>
            
            <Link href="/about" className="text-base font-semibold text-text-primary hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/pricing" className="text-base font-semibold text-text-primary hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="/resources" className="text-base font-semibold text-text-primary hover:text-primary transition-colors">
              Resources
            </Link>
            <Link href="/contact" className="text-base font-semibold text-text-primary hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop Search & Button */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
              <input 
                type="text" 
                placeholder="Search services..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                className="pl-10 pr-4 py-2 bg-surface-alt border border-border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-48 transition-all font-medium text-text-primary placeholder:text-text-secondary"
              />
              {showSuggestions && searchQuery && (
                <div className="absolute top-full mt-2 w-full bg-white border border-border rounded-lg shadow-lg overflow-hidden z-50">
                  {suggestions.length > 0 ? suggestions.map((s, i) => (
                    <Link key={i} href="/services" className="block px-4 py-2 text-sm text-text-primary hover:bg-surface-alt hover:text-primary transition-colors border-b border-border last:border-b-0">
                      {s}
                    </Link>
                  )) : (
                    <div className="px-4 py-2 text-sm text-text-secondary">No results found</div>
                  )}
                </div>
              )}
            </div>
            <Link href="/contact">
              <Button variant="primary" className="rounded-full px-6">Book Appointment</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2 text-text-primary bg-surface-alt rounded-full" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full mt-2 bg-white/95 backdrop-blur-xl border border-border rounded-2xl shadow-xl overflow-hidden lg:hidden flex flex-col p-4 animate-in fade-in slide-in-from-top-4">
            <Link href="/services" className="px-4 py-3 text-sm font-semibold text-text-primary hover:bg-surface-alt rounded-lg" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/about" className="px-4 py-3 text-sm font-semibold text-text-primary hover:bg-surface-alt rounded-lg" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/pricing" className="px-4 py-3 text-sm font-semibold text-text-primary hover:bg-surface-alt rounded-lg" onClick={() => setIsOpen(false)}>Pricing</Link>
            <Link href="/resources" className="px-4 py-3 text-sm font-semibold text-text-primary hover:bg-surface-alt rounded-lg" onClick={() => setIsOpen(false)}>Resources</Link>
            <Link href="/contact" className="px-4 py-3 text-sm font-semibold text-text-primary hover:bg-surface-alt rounded-lg" onClick={() => setIsOpen(false)}>Contact</Link>
            <div className="pt-4 mt-2 border-t border-border flex justify-center">
              <Link href="/contact" className="w-full" onClick={() => setIsOpen(false)}>
                <Button variant="primary" className="w-full rounded-full">Book Appointment</Button>
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
