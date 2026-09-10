import Link from "next/link";
import { SERVICE_GROUPS } from "@/lib/site-data";
import { ArrowLink, Eyebrow, Section, Shell } from "./primitives";
import { Reveal } from "./reveal";

/**
 * The services section is an index, not a card grid.
 *
 * Grouping the practice areas and listing every service as a scannable row
 * means a visitor sees the whole scope in one screen and reaches the exact
 * inner page in one click — which is how firms of this kind are actually
 * shopped. Each row links to the existing service page.
 */
export function ServicesIndex() {
  return (
    <Section id="services" tone="white" divided>
      <Shell>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left rail — sticks while the index scrolls past it on desktop. */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Eyebrow>What we do</Eyebrow>
              <h2 className="font-display mt-5 text-[1.75rem] font-semibold leading-[1.15] tracking-[-0.02em] text-ink-900 sm:text-[2.125rem] lg:text-[2.5rem]">
                Five practice areas, one point of contact.
              </h2>
              <p className="mt-5 max-w-prose text-base leading-[1.7] text-ink-500">
                Most businesses need several of these at once — a registration, a licence and the
                filings that follow. Handling them together is faster than briefing three
                different people, and nothing falls between them.
              </p>
              <div className="mt-7">
                <ArrowLink href="/services">View all services</ArrowLink>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-rule">
              {SERVICE_GROUPS.map((group, groupIndex) => (
                <Reveal key={group.id} delay={groupIndex * 60}>
                  <div className="border-b border-rule py-9 first:pt-8 sm:py-10">
                    <div className="flex items-baseline gap-4">
                      <span
                        aria-hidden="true"
                        className="font-display text-sm font-semibold tabular-nums text-ink-300"
                      >
                        {String(groupIndex + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-semibold tracking-[-0.01em] text-ink-900">
                          {group.name}
                        </h3>
                        <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-500">
                          {group.blurb}
                        </p>
                      </div>
                    </div>

                    <ul className="mt-6 grid grid-cols-1 gap-px bg-rule sm:grid-cols-2 sm:ml-9">
                      {group.services.map((service) => (
                        <li key={service.href} className="bg-white">
                          <Link
                            href={service.href}
                            className="group flex h-full items-start justify-between gap-3 bg-white px-4 py-4 transition-colors duration-200 hover:bg-ink-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
                          >
                            <span className="min-w-0">
                              <span className="block text-[0.9375rem] font-semibold leading-snug text-ink-800 transition-colors group-hover:text-accent">
                                {service.name}
                              </span>
                              <span className="mt-1 block text-[0.8125rem] leading-relaxed text-ink-400">
                                {service.summary}
                              </span>
                            </span>
                            <svg
                              aria-hidden="true"
                              viewBox="0 0 16 16"
                              fill="none"
                              className="mt-0.5 h-4 w-4 shrink-0 text-ink-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-accent"
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
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Shell>
    </Section>
  );
}
