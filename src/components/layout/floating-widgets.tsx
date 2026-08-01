"use client";

import { MessageCircle, Phone, FileText, ArrowUp } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function FloatingWidgets() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3">
      <Link href="https://wa.me/918073726564" target="_blank" className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
        <MessageCircle className="w-7 h-7" />
      </Link>
      <Link href="tel:+918073726564" className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
        <Phone className="w-7 h-7" />
      </Link>
      <Link href="/contact" className="w-14 h-14 bg-secondary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
        <FileText className="w-7 h-7" />
      </Link>
      {isVisible && (
        <button onClick={scrollToTop} className="w-14 h-14 bg-[#1E3A8A] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform mt-4">
          <ArrowUp className="w-7 h-7" />
        </button>
      )}
    </div>
  );
}
