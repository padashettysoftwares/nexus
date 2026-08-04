"use client";

import { MessageCircle, Phone, FileText, ArrowUp } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export function FloatingWidgets() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 300);
      setIsActive(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setIsActive(false);
      }, 3000); // Hide after 3 seconds of inactivity
    };

    const handleMouseMove = () => {
      setIsActive(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setIsActive(false);
      }, 3000);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    // Initial timer
    timeoutRef.current = setTimeout(() => {
      setIsActive(false);
    }, 3000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div 
      className={`fixed bottom-20 right-6 z-50 flex flex-col gap-4 transition-all duration-700 ease-in-out ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-30 hover:translate-x-0 hover:opacity-100'}`}
      onMouseEnter={() => setIsActive(true)}
    >
      <div className="flex flex-col gap-3 bg-white/40 backdrop-blur-md p-2 rounded-full border border-white/50 shadow-[0_8px_32px_rgb(0,0,0,0.12)]">
        
        {/* WhatsApp */}
        <Link href="https://wa.me/918073726564" target="_blank" className="group relative w-12 h-12 bg-white/80 hover:bg-[#25D366] text-[#25D366] hover:text-white rounded-full flex items-center justify-center shadow-sm transition-all duration-300">
          <MessageCircle className="w-6 h-6" />
          <span className="absolute right-full mr-4 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
            Chat with us
            <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></span>
          </span>
        </Link>
        
        {/* Phone */}
        <Link href="tel:+918073726564" className="group relative w-12 h-12 bg-white/80 hover:bg-blue-600 text-blue-600 hover:text-white rounded-full flex items-center justify-center shadow-sm transition-all duration-300">
          <Phone className="w-6 h-6" />
          <span className="absolute right-full mr-4 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
            Call now
            <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></span>
          </span>
        </Link>
        
        {/* Get Quote */}
        <Link href="/contact" className="group relative w-12 h-12 bg-white/80 hover:bg-[#dc2626] text-[#dc2626] hover:text-white rounded-full flex items-center justify-center shadow-sm transition-all duration-300">
          <FileText className="w-6 h-6" />
          <span className="absolute right-full mr-4 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
            Get Quote
            <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></span>
          </span>
        </Link>

      </div>

      {/* Scroll to top - separate from the glass container */}
      <div className={`transition-all duration-500 flex justify-center ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <button onClick={scrollToTop} className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-black transition-colors">
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
