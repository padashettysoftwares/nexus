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
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white shadow-sm">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex h-24 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
             <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-blue-100 shadow-sm shrink-0">
               <Image src="/Nexus-logo.jpeg" alt="Nexus Solutions Icon" fill className="object-cover" />
             </div>
             <div className="relative w-40 h-10 overflow-hidden">
               <Image src="/name.png" alt="Nexus Solutions" fill className="object-contain object-left" />
             </div>
          </Link>

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
                className="pl-10 pr-4 py-2.5 bg-surface-alt border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-56 transition-all font-medium text-text-primary placeholder:text-text-secondary"
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
              <Button variant="primary">Book Appointment</Button>
            </Link>
          </div>

          <button className="lg:hidden p-2 text-text-primary" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
}
