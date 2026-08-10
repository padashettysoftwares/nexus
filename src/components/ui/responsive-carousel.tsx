"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ResponsiveCarouselProps {
  children: React.ReactNode;
  /**
   * The desktop grid classes (e.g., "lg:grid lg:grid-cols-4 lg:gap-8")
   */
  desktopClassName?: string;
  /**
   * The mobile gap class (e.g., "gap-4", "gap-6")
   */
  mobileGapClassName?: string;
}

export function ResponsiveCarousel({
  children,
  desktopClassName = "",
  mobileGapClassName = "gap-4 md:gap-6",
}: ResponsiveCarouselProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  const checkScroll = React.useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  }, []);

  React.useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      checkScroll();
      // Use passive listener for better scroll performance
      el.addEventListener("scroll", checkScroll, { passive: true });
      window.addEventListener("resize", checkScroll);
      return () => {
        el.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, [checkScroll, children]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Scroll by approximately 1 card width or clientWidth * 0.8
      const cardElement = scrollRef.current.firstElementChild as HTMLElement;
      // Calculate scroll amount based on first card or fallback to 85% of container width
      const scrollAmount = cardElement
        ? cardElement.getBoundingClientRect().width + 16
        : clientWidth * 0.85;

      const targetScroll =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`relative group/carousel w-full ${desktopClassName}`}>
      {/* Navigation Arrows */}
      <button
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        aria-label="Previous items"
        className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white text-stone-800 shadow-[0_4px_20px_rgb(0,0,0,0.15)] border border-stone-200 flex items-center justify-center transition-all duration-200 active:scale-95 hover:bg-[#dc2626] hover:text-white hover:border-[#dc2626] disabled:opacity-30 disabled:pointer-events-none"
      >
        <ChevronLeft className="w-6 h-6 ml-[-2px]" />
      </button>

      <button
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
        aria-label="Next items"
        className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white text-stone-800 shadow-[0_4px_20px_rgb(0,0,0,0.15)] border border-stone-200 flex items-center justify-center transition-all duration-200 active:scale-95 hover:bg-[#dc2626] hover:text-white hover:border-[#dc2626] disabled:opacity-30 disabled:pointer-events-none"
      >
        <ChevronRight className="w-6 h-6 mr-[-2px]" />
      </button>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className={`flex overflow-x-auto snap-x snap-mandatory no-scrollbar ${mobileGapClassName} pb-4 lg:pb-0 px-2 lg:px-0 -mx-2 lg:mx-0 w-full`}
      >
        {children}
      </div>
    </div>
  );
}
