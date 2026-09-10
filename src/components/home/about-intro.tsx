import Image from "next/image";
import { ORG } from "@/lib/seo";
import { ArrowLink, Eyebrow, Section, Shell } from "./primitives";
import { Reveal } from "./reveal";

/**
 * Homepage introduction to the firm. Kept factual and short — the full story
 * and the leadership sit on /about, which this links to.
 */
export function AboutIntro() {
  const facts = [
    {
      label: "Office",
      value: `${ORG.street}, ${ORG.locality} ${ORG.postalCode}`,
    },
    { label: "Hours", value: "Monday to Sunday, 9:30 am – 7:00 pm" },
    { label: "Serving", value: "Karnataka, Maharashtra, Telangana and Andhra Pradesh" },
  ];

  return (
    <Section tone="white" divided>
      <Shell>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -left-3 hidden h-full w-full border border-accent-line sm:block"
              />
              <div className="relative aspect-[5/4] w-full overflow-hidden border border-rule bg-ink-50">
                <Image
                  src="/hero_office_premium_1785602875601.png"
                  alt="A meeting room set up for a client consultation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-7 lg:pl-4">
            <Eyebrow>About the firm</Eyebrow>
            <h2 className="font-display mt-5 text-[1.75rem] font-semibold leading-[1.15] tracking-[-0.02em] text-ink-900 sm:text-[2.125rem]">
              A consulting firm built around Kalaburagi&rsquo;s businesses.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-[1.75] text-ink-500">
              <p>
                Nexus Solutions is an MSME-registered, ISO 9001:2015 certified business consulting
                firm in Kalaburagi (Gulbarga), Karnataka. We provide end-to-end registration, tax,
                licensing and compliance services for startups and small and medium businesses.
              </p>
              <p>
                Most of our clients are owner-run manufacturers, traders and service businesses who
                need the paperwork to be correct and predictable so they can get back to running
                the business. That is the standard we work to.
              </p>
            </div>

            <dl className="mt-9 space-y-4 border-t border-rule pt-7">
              {facts.map((fact) => (
                <div key={fact.label} className="grid grid-cols-1 gap-1 sm:grid-cols-12 sm:gap-4">
                  <dt className="text-[11px] font-semibold uppercase tracking-eyebrow text-ink-400 sm:col-span-3 sm:pt-0.5">
                    {fact.label}
                  </dt>
                  <dd className="text-[0.9375rem] leading-relaxed text-ink-700 sm:col-span-9">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8">
              <ArrowLink href="/about">Read more about Nexus Solutions</ArrowLink>
            </div>
          </Reveal>
        </div>
      </Shell>
    </Section>
  );
}
