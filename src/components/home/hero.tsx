import Image from "next/image";
import { ORG } from "@/lib/seo";
import { CREDENTIALS } from "@/lib/site-data";
import { ActionLink, RiseIn, Shell } from "./primitives";
import { ConsultationCta } from "./consultation-cta";

/**
 * Asymmetric editorial hero: the claim and the two actions carry the left
 * column, a real photograph of the practice sits in the right, and the
 * credentials the firm can actually evidence run along a hairline beneath both.
 * No badge row, no floating stat cards, no background wash.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <Shell className="relative">
        {/* A single faint vertical rule on the grid gutter — the only
            decoration, and scoped so it stops above the credential strip. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-rule lg:block"
        />
        <div className="grid grid-cols-1 items-center gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:py-24">
          <div className="lg:col-span-7 lg:pr-10">
            <RiseIn>
              <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-eyebrow text-ink-400">
                <span aria-hidden="true" className="h-px w-6 bg-ink-300" />
                Kalaburagi, Karnataka
              </p>
            </RiseIn>

            <RiseIn delay={60}>
              <h1 className="font-display mt-6 text-[2.125rem] font-semibold leading-[1.1] tracking-[-0.025em] text-ink-900 sm:text-[2.75rem] lg:text-[3.375rem]">
                Build, manage and grow your business with one professional partner.
              </h1>
            </RiseIn>

            <RiseIn delay={120}>
              <p className="mt-6 max-w-prose text-[1.0625rem] leading-[1.75] text-ink-500 sm:text-lg">
                Nexus Solutions is a business consulting firm in Kalaburagi. We handle company
                registration, GST and income tax, licences and certifications, trademarks,
                accounting and annual compliance — along with the websites and process automation
                that keep day-to-day operations running.
              </p>
            </RiseIn>

            <RiseIn delay={180}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ConsultationCta size="lg" className="w-full sm:w-auto">
                  Book a consultation
                </ConsultationCta>
                <ActionLink
                  href="/services"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Explore services
                </ActionLink>
              </div>
            </RiseIn>

            <RiseIn delay={240}>
              <p className="mt-7 text-sm text-ink-400">
                Prefer to talk first? Call{" "}
                <a
                  href={`tel:${ORG.phone[0].replace(/-/g, "")}`}
                  className="font-medium text-ink-700 underline decoration-ink-300 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  +91 94834 86111
                </a>{" "}
                during office hours, 9:30 am to 7:00 pm.
              </p>
            </RiseIn>
          </div>

          <RiseIn delay={160} className="lg:col-span-5">
            <div className="relative">
              {/* Offset rule behind the frame gives the image a considered edge
                  without resorting to a shadow. */}
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -right-3 hidden h-full w-full border border-accent-line sm:block"
              />
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-rule bg-ink-50 sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src="/about_consultation_premium_1785602885849.png"
                  alt="A business consultation meeting"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </RiseIn>
        </div>
      </Shell>

      {/* Credential strip — facts already stated elsewhere on the site. */}
      <div className="border-t border-rule bg-ink-50">
        <Shell>
          <dl className="grid grid-cols-1 gap-y-6 py-7 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8 lg:grid-cols-4 lg:gap-y-0 lg:divide-x lg:divide-rule">
            {CREDENTIALS.map((item, i) => (
              <div key={item.label} className={i === 0 ? "lg:pr-8" : "lg:px-8 lg:last:pr-0"}>
                <dt className="text-[0.9375rem] font-semibold text-ink-900">{item.label}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-ink-500">{item.detail}</dd>
              </div>
            ))}
          </dl>
        </Shell>
      </div>
    </section>
  );
}
