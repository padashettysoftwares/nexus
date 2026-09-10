"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger, in milliseconds, applied as a CSS transition delay. */
  delay?: number;
  /** Render as a different element when the parent grid needs one. */
  as?: "div" | "li" | "section" | "article";
};

/** How far into the viewport an element must come before it is revealed. */
const REVEAL_MARGIN = 0.9;

function isInView(node: Element) {
  const rect = node.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top < viewportHeight * REVEAL_MARGIN && rect.bottom > 0;
}

/**
 * Reveals its children once they scroll into view.
 *
 * Deliberately a few lines rather than a motion library: the marketing pages
 * only need one gentle entrance, and this keeps the sections renderable as
 * server components behind a single small client boundary.
 *
 * Because the un-revealed state is `opacity: 0`, this must never be the only
 * thing standing between a visitor and the content. So visibility is resolved
 * three ways — a measurement on mount, a passive scroll listener, and an
 * IntersectionObserver where one is available — and the CSS is a no-op under
 * `prefers-reduced-motion` and inside `<noscript>`.
 */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const ref = React.useRef<HTMLElement | null>(null);
  const [shown, setShown] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frame = 0;
    let observer: IntersectionObserver | null = null;
    let done = false;

    const reveal = () => {
      if (done) return;
      done = true;
      setShown(true);
      cleanup();
    };

    const check = () => {
      frame = 0;
      if (isInView(node)) reveal();
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(check);
    };

    function cleanup() {
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      observer?.disconnect();
      observer = null;
    }

    // Anything already on screen at mount is shown without waiting for a scroll.
    if (isInView(node)) {
      setShown(true);
      return;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) reveal();
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
      );
      observer.observe(node);
    }

    return cleanup;
  }, []);

  const Tag = as as React.ElementType;

  return (
    <Tag
      ref={ref}
      data-shown={shown ? "true" : "false"}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
}
