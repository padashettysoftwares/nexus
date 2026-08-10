"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquareText } from "lucide-react";
import { BookConsultationModal } from "@/components/ui/book-consultation-modal";

export function StickyBottomBar() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 w-full bg-[#dc2626] text-white py-3 z-50 shadow-[0_-4px_10px_-1px_rgba(0,0,0,0.2)]">
        <div className="container mx-auto px-4 flex justify-center items-center gap-4 flex-wrap">
          <div className="hidden md:flex items-center gap-2 font-medium">
            <MessageSquareText className="w-5 h-5 text-red-200" />
            <span>Need expert advice? Get a Free Consultation</span>
          </div>
          
          <Button 
            onClick={() => setModalOpen(true)}
            variant="outline" 
            className="bg-white text-[#dc2626] hover:bg-red-50 hover:text-[#b91c1c] border-transparent font-bold text-sm md:text-base px-6 py-2 h-auto flex items-center gap-2 rounded-full shadow-md"
          >
            Book Now <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <BookConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
