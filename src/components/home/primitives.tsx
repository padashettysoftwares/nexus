import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Layout primitives shared by every marketing section.
 *
 * The whole surface is built on three rules: one 1200px measure, a vertical
 * rhythm expressed in a single `Section` padding scale, and hairline rules
 * instead of shadows. Sections opt into a tone rather than styling themselves,
 * which is what keeps the page from drifting into a stack of unrelated cards.
 */

export function Shell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-shell px-5 sm:px-6 lg:px-10", className)}>
      {children}
    </div>
  );
}

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** Background treatment. `paper` is the faint neutral used to group sections. */
  tone?: "white" | "paper" | "ink" | "ink-deep";
  /** Draw the top hairline that separates consecutive white sections. */
  divided?: boolean;
  size?: "default" | "compact";
};

export function Section({
  children,
  className,
  id,
  tone = "white",
  divided = false,
  size = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative",
        size === "default" ? "py-20 sm:py-24 lg:py-28" : "py-14 sm:py-16",
        tone === "white" && "bg-white",
        tone === "paper" && "bg-ink-50",
        tone === "ink" && "overflow-hidden bg-ink-900 text-white",
        tone === "ink-deep" && "overflow-hidden bg-ink-950 text-white",
        divided &&
          (tone === "ink" || tone === "ink-deep"
            ? "border-t border-rule-invert"
            : "border-t border-rule"),
        className
      )}
    >
      {children}
    </section>
  );
}

/**
 * The small uppercase label above a section heading. One per section — it is
 * the only place the marketing pages use letterspaced caps.
 */
export function Eyebrow({
  children,
  tone = "default",
  className,
}: {
  children: React.ReactNode;
  tone?: "default" | "invert" | "brass";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-[11px] font-semibold uppercase tracking-eyebrow",
        tone === "invert" && "text-white/55",
        tone === "brass" && "text-brass",
        tone === "default" && "text-ink-400",
        className
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "h-px w-6 origin-left animate-draw-rule",
          tone === "invert" && "bg-white/30",
          tone === "brass" && "bg-brass/60",
          tone === "default" && "bg-ink-300"
        )}
      />
      {children}
    </p>
  );
}

/**
 * Fine engineering grid for the dark bands. Gives the flat ink a surface
 * without resorting to a blurred colour wash, and fades out toward the edges
 * so it never competes with the type sitting on top of it.
 */
export function GridTexture({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,#000_55%,transparent_100%)]",
        tone === "dark" ? "bg-grid-fine" : "bg-grid-fine-light",
        className
      )}
    />
  );
}

/**
 * Framed content with brass corner ticks — a drafting detail that reads as
 * deliberate craft, and the only ornament allowed on imagery.
 */
export function TickFrame({
  children,
  className,
  tone = "brass",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "brass" | "rule";
}) {
  const tick = tone === "brass" ? "border-brass" : "border-ink-300";
  return (
    <div className={cn("relative", className)}>
      {children}
      <span aria-hidden="true" className={cn("absolute -left-px -top-px h-4 w-4 border-l-2 border-t-2", tick)} />
      <span aria-hidden="true" className={cn("absolute -right-px -top-px h-4 w-4 border-r-2 border-t-2", tick)} />
      <span aria-hidden="true" className={cn("absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2", tick)} />
      <span aria-hidden="true" className={cn("absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2", tick)} />
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  tone = "default",
  align = "left",
  className,
  action,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  tone?: "default" | "invert";
  align?: "left" | "center";
  className?: string;
  action?: React.ReactNode;
}) {
  const invert = tone === "invert";
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl",
        className
      )}
    >
      {eyebrow ? (
        <Eyebrow tone={tone} className={align === "center" ? "justify-center" : undefined}>
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2
        className={cn(
          "font-display mt-5 text-[1.75rem] font-semibold leading-[1.15] tracking-[-0.02em] sm:text-[2.125rem] lg:text-[2.5rem]",
          invert ? "text-white" : "text-ink-900"
        )}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={cn(
            "mt-5 text-base leading-[1.7] sm:text-[1.0625rem]",
            invert ? "text-white/70" : "text-ink-500",
            align === "center" && "mx-auto"
          )}
        >
          {lede}
        </p>
      ) : null}
      {action ? <div className="mt-7">{action}</div> : null}
    </div>
  );
}

/**
 * Entrance animation for above-the-fold content.
 *
 * Unlike `Reveal`, this is pure CSS and plays on load, so hero content can
 * never end up waiting for a scroll that a visitor on a short viewport has no
 * reason to make. Reduced-motion collapses the animation to an instant.
 */
export function RiseIn({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div className={cn("animate-rise-in", className)} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Actions                                                            */
/* ------------------------------------------------------------------ */

const actionBase =
  "inline-flex items-center justify-center gap-2 rounded-md text-[0.9375rem] font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

const actionSizes = {
  md: "h-11 px-5",
  lg: "h-[3.25rem] px-7",
};

const actionVariants = {
  solid: "bg-accent text-white hover:bg-accent-hover",
  outline: "border border-ink-200 bg-white text-ink-800 hover:border-ink-400 hover:bg-ink-50",
  invert: "bg-white text-ink-900 hover:bg-ink-100",
  "invert-outline": "border border-white/25 text-white hover:border-white/60 hover:bg-white/5",
  brass: "bg-brass text-ink-950 hover:bg-brass-bright",
  "brass-outline": "border border-brass-line text-brass hover:border-brass hover:bg-brass-wash",
};

type ActionVariant = keyof typeof actionVariants;

export function ActionLink({
  href,
  children,
  variant = "solid",
  size = "md",
  className,
  ...rest
}: {
  href: string;
  children: React.ReactNode;
  variant?: ActionVariant;
  size?: keyof typeof actionSizes;
  className?: string;
} & Omit<React.ComponentProps<typeof Link>, "href" | "className" | "children">) {
  return (
    <Link
      href={href}
      className={cn(actionBase, actionSizes[size], actionVariants[variant], className)}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function ActionButton({
  children,
  variant = "solid",
  size = "md",
  className,
  ...rest
}: {
  children: React.ReactNode;
  variant?: ActionVariant;
  size?: keyof typeof actionSizes;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={cn(actionBase, actionSizes[size], actionVariants[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
}

/** Quiet inline link with an arrow that nudges on hover. */
export function ArrowLink({
  href,
  children,
  tone = "default",
  className,
}: {
  href: string;
  children: React.ReactNode;
  tone?: "default" | "invert";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 text-[0.9375rem] font-semibold transition-colors",
        tone === "invert" ? "text-white hover:text-white/70" : "text-accent hover:text-accent-hover",
        className
      )}
    >
      {children}
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        fill="none"
        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
      >
        <path
          d="M3 8h9m0 0L8.5 4.5M12 8l-3.5 3.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
