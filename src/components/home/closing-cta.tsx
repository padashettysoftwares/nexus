import { ORG } from "@/lib/seo";
import { ActionLink, Eyebrow, Section, Shell } from "./primitives";
import { ConsultationCta } from "./consultation-cta";
import { Reveal } from "./reveal";

/**
 * Closing action. A full-bleed ink band with a hairline grid — no rounded
 * gradient panel, and only one primary action.
 */
export function ClosingCta() {
  return (
    <Section tone="ink">
      <Shell>
        <Reveal>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow tone="invert">Get started</Eyebrow>
              <h2 className="font-display mt-5 text-[1.75rem] font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-[2.125rem] lg:text-[2.5rem]">
                Tell us what you are trying to set up.
              </h2>
              <p className="mt-5 max-w-prose text-base leading-[1.7] text-white/65">
                A first conversation costs nothing and usually settles the two questions that
                matter — which registrations actually apply to you, and what the timeline looks
                like. Bring what you have; we will tell you what is missing.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:justify-end">
                <ConsultationCta variant="invert" size="lg" className="w-full sm:w-auto">
                  Book a consultation
                </ConsultationCta>
                <ActionLink
                  href="/contact"
                  variant="invert-outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Contact the office
                </ActionLink>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 border-t border-rule-invert pt-8 sm:grid-cols-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-eyebrow text-white/45">
              Call
            </p>
            <p className="mt-2 text-[0.9375rem] text-white/85">
              <a
                href={`tel:${ORG.phone[0].replace(/-/g, "")}`}
                className="transition-colors hover:text-white"
              >
                +91 94834 86111
              </a>
              <span className="px-2 text-white/30">/</span>
              <a
                href={`tel:${ORG.phone[1].replace(/-/g, "")}`}
                className="transition-colors hover:text-white"
              >
                +91 80737 26564
              </a>
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-eyebrow text-white/45">
              Email
            </p>
            <p className="mt-2 text-[0.9375rem] text-white/85">
              <a
                href={`mailto:${ORG.email}`}
                className="break-all transition-colors hover:text-white"
              >
                {ORG.email}
              </a>
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-eyebrow text-white/45">
              Office
            </p>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-white/85">
              Gubbi Colony, MG Road,
              <br />
              Kalaburagi 585105
            </p>
          </div>
        </div>
      </Shell>
    </Section>
  );
}
