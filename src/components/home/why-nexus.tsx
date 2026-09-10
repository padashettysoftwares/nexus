import { SectionHeading, Section, Shell } from "./primitives";
import { Reveal } from "./reveal";

/**
 * Reasons stated as specifics the firm can stand behind — scope, location,
 * certification, and the technology work — rather than adjectives. Set as a
 * numbered two-by-two on hairlines, with no icons.
 */
const REASONS = [
  {
    title: "One firm for the whole lifecycle",
    body: "Incorporation, the licence that follows it, the GST returns after that and the annual ROC filing at the end of the year are handled by the same team. You brief us once, and nobody hands you between offices.",
  },
  {
    title: "An office you can walk into",
    body: "We work out of MG Road in Kalaburagi and serve clients across Karnataka, Maharashtra, Telangana and Andhra Pradesh. Documents get checked in person when that is faster than another round of email.",
  },
  {
    title: "A documented quality system",
    body: "Nexus Solutions is MSME registered and certified to ISO 9001:2015 — the same standard we implement for clients. Filings follow a written process, so the work does not depend on who happens to be at the desk.",
  },
  {
    title: "Technology alongside compliance",
    body: "The same team builds your website, sets up invoicing and inventory automation, and prepares project reports for bank funding. Growth work does not have to be outsourced to a second vendor.",
  },
];

export function WhyNexus() {
  return (
    <Section tone="paper" divided>
      <Shell>
        <SectionHeading
          eyebrow="Why Nexus Solutions"
          title="Specifics, rather than promises."
          lede="Four things that shape how the work actually gets done."
        />

        <div className="mt-14 grid grid-cols-1 gap-px border-t border-rule bg-rule sm:mt-16 sm:grid-cols-2">
          {REASONS.map((reason, i) => (
            <Reveal
              key={reason.title}
              delay={i * 70}
              className="bg-ink-50 py-9 sm:px-8 sm:py-10 sm:[&:nth-child(even)]:pr-0 sm:[&:nth-child(odd)]:pl-0 lg:py-12"
            >
              <div>
                <span
                  aria-hidden="true"
                  className="font-display block text-sm font-semibold tabular-nums text-accent"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-4 text-lg font-semibold tracking-[-0.01em] text-ink-900 sm:text-xl">
                  {reason.title}
                </h3>
                <p className="mt-3 max-w-prose text-[0.9375rem] leading-[1.75] text-ink-500">
                  {reason.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Shell>
    </Section>
  );
}
