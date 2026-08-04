import Link from "next/link";
import { Button } from "@/components/ui/button";

export function StickyBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#f97316] text-white py-3 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <Link href="/contact">
          <Button variant="ghost" className="text-white hover:bg-[#ea580c] hover:text-white font-bold text-sm md:text-base px-6 py-2 h-auto flex items-center gap-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            Consult Now - Only 3 Slots Left!
          </Button>
        </Link>
      </div>
    </div>
  );
}
