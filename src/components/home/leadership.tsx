import Image from "next/image";
import { DIRECTORS } from "@/lib/site-data";
import { SectionHeading, Section, Shell } from "./primitives";
import { Reveal } from "./reveal";

/**
 * Leadership, set as a corporate roster rather than profile cards: portraits in
 * the same hairline frame used elsewhere, name and role only. No invented
 * biographies, and a lettered plate stands in wherever a portrait is not on
 * file so the row keeps its rhythm.
 */
export function Leadership() {
  return (
    <Section tone="paper" divided>
      <Shell>
        <SectionHeading
          eyebrow="Leadership"
          title="The people responsible for the work."
          lede="Nexus Solutions is directed by three members of the Padashetty family, who remain personally involved in client engagements."
        />

        <ul className="mt-14 grid grid-cols-1 gap-10 sm:mt-16 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
          {DIRECTORS.map((director, i) => (
            <Reveal as="li" key={director.name} delay={i * 80}>
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-rule bg-white">
                {director.image ? (
                  <Image
                    src={director.image}
                    alt={`${director.name}, ${director.role} at Nexus Solutions`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-white">
                    <span
                      aria-hidden="true"
                      className="font-display text-4xl font-semibold tracking-[0.06em] text-ink-300"
                    >
                      {director.initials}
                    </span>
                  </div>
                )}
              </div>
              <div className="mt-5 border-t border-rule-strong pt-5">
                <h3 className="font-display text-lg font-semibold tracking-[-0.01em] text-ink-900">
                  {director.name}
                </h3>
                <p className="mt-1.5 text-[0.9375rem] text-ink-500">{director.role}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Shell>
    </Section>
  );
}
