import { INDUSTRIES } from "@/lib/site-data";
import { ArrowLink, SectionHeading, Section, Shell } from "./primitives";
import { Reveal } from "./reveal";

/**
 * Sectors set as a dense reference table rather than twelve hoverable cards.
 * Each entry names the approvals that sector actually turns on, which is more
 * useful to a visitor than an icon and a project count.
 */
export function Industries() {
  return (
    <Section id="industries" tone="paper" divided>
      <Shell>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Industries"
            title="Compliance differs by sector. So does our checklist."
            lede="A food unit, an electronics assembler and a pharma manufacturer face entirely different approvals. These are the sectors we work in most often."
            className="max-w-2xl"
          />
          <div className="shrink-0 sm:pb-2">
            <ArrowLink href="/contact">Discuss your sector</ArrowLink>
          </div>
        </div>

        <Reveal>
          <div className="mt-12 grid grid-cols-1 gap-px border border-rule bg-rule sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((industry) => (
              <div key={industry.name} className="bg-white px-6 py-7">
                <h3 className="text-[0.9375rem] font-semibold text-ink-900">{industry.name}</h3>
                <p className="mt-2 text-[0.8125rem] leading-relaxed text-ink-500">
                  {industry.focus}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Shell>
    </Section>
  );
}
