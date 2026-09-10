import Image from "next/image";
import { ActionLink, Eyebrow, Section, Shell } from "@/components/home/primitives";
import { ConsultationCta } from "@/components/home/consultation-cta";
import { Leadership } from "@/components/home/leadership";
import { Process } from "@/components/home/process";
import { ClosingCta } from "@/components/home/closing-cta";
import { Reveal } from "@/components/home/reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, breadcrumbSchema, SITE_URL, ORG } from "@/lib/seo";
import { CREDENTIALS, SERVICE_GROUPS } from "@/lib/site-data";

const PATH = "/about";

export const metadata = pageMetadata({
  title: "About Nexus Solutions — Business Consultants in Kalaburagi",
  description:
    "Nexus Solutions is an MSME-registered, ISO 9001:2015 certified business consulting firm on MG Road, Kalaburagi (Gulbarga), Karnataka. Meet the directors and see how we work with startups and SMEs across four states.",
  path: PATH,
  keywords: [
    "about Nexus Solutions",
    "business consultants Kalaburagi",
    "Nexus Solutions directors",
    "consulting firm Gulbarga",
  ],
});

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE_URL}${PATH}#page`,
    url: `${SITE_URL}${PATH}`,
    name: "About Nexus Solutions",
    about: { "@id": `${SITE_URL}/#organization` },
  };

  return (
    <>
      <JsonLd
        schemas={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: PATH },
          ]),
          aboutSchema,
        ]}
      />

      {/* Page header */}
      <Section tone="white" size="compact" className="pb-0 sm:pb-0">
        <Shell>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow>About us</Eyebrow>
              <h1 className="font-display mt-6 text-[2.125rem] font-semibold leading-[1.1] tracking-[-0.025em] text-ink-900 sm:text-[2.75rem] lg:text-[3.25rem]">
                A consulting firm built around Kalaburagi&rsquo;s businesses.
              </h1>
              <p className="mt-6 max-w-prose text-[1.0625rem] leading-[1.75] text-ink-500">
                Nexus Solutions is an MSME-registered, ISO 9001:2015 certified business consulting
                firm in Kalaburagi (Gulbarga), Karnataka. We provide end-to-end registration, tax,
                licensing and compliance services for startups and small and medium businesses.
              </p>
            </div>
            <div className="lg:col-span-5">
              <dl className="space-y-5 border-t border-rule pt-7 lg:mt-16">
                {CREDENTIALS.map((item) => (
                  <div key={item.label} className="grid grid-cols-1 gap-1 sm:grid-cols-12 sm:gap-4">
                    <dt className="text-[0.9375rem] font-semibold text-ink-900 sm:col-span-5">
                      {item.label}
                    </dt>
                    <dd className="text-[0.9375rem] leading-relaxed text-ink-500 sm:col-span-7">
                      {item.detail}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Shell>
      </Section>

      {/* Story + office */}
      <Section tone="white">
        <Shell>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-6">
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
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={100} className="lg:col-span-6">
              <h2 className="font-display text-[1.75rem] font-semibold leading-[1.15] tracking-[-0.02em] text-ink-900 sm:text-[2.125rem]">
                What we actually do
              </h2>
              <div className="mt-5 space-y-4 text-base leading-[1.75] text-ink-500">
                <p>
                  Most of our clients are owner-run manufacturers, traders and service businesses.
                  They come to us to get a company incorporated, a licence issued, a trademark
                  filed or a set of returns brought back on schedule — and they stay because the
                  same team keeps handling it afterwards.
                </p>
                <p>
                  The work spans five practice areas: business and company setup, tax and
                  accounting, licences and certifications, legal and intellectual property, and the
                  digital and growth work that follows — websites, process automation, virtual CFO
                  support and project reports for bank funding.
                </p>
                <p>
                  We operate from MG Road in Kalaburagi and serve clients across Karnataka,
                  Maharashtra, Telangana and Andhra Pradesh.
                </p>
              </div>

              <div className="mt-9 border-t border-rule pt-7">
                <p className="text-[11px] font-semibold uppercase tracking-eyebrow text-ink-400">
                  Practice areas
                </p>
                <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                  {SERVICE_GROUPS.map((group) => (
                    <li key={group.id} className="text-[0.9375rem] text-ink-700">
                      {group.name}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <ActionLink href="/services" variant="outline">
                    Browse all services
                  </ActionLink>
                  <ConsultationCta variant="solid">Book a consultation</ConsultationCta>
                </div>
              </div>
            </Reveal>
          </div>
        </Shell>
      </Section>

      <Leadership />

      <Process />

      {/* Office details */}
      <Section tone="white" divided size="compact">
        <Shell>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-eyebrow text-ink-400">
                Office
              </p>
              <p className="mt-3 text-[0.9375rem] leading-[1.7] text-ink-700">
                {ORG.street},
                <br />
                {ORG.locality}, {ORG.region} {ORG.postalCode}
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-eyebrow text-ink-400">
                Contact
              </p>
              <p className="mt-3 space-y-1 text-[0.9375rem] text-ink-700">
                <a href="tel:+919483486111" className="block hover:text-accent">
                  +91 94834 86111
                </a>
                <a href="tel:+918073726564" className="block hover:text-accent">
                  +91 80737 26564
                </a>
                <a href={`mailto:${ORG.email}`} className="block break-all hover:text-accent">
                  {ORG.email}
                </a>
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-eyebrow text-ink-400">
                Hours
              </p>
              <p className="mt-3 text-[0.9375rem] leading-[1.7] text-ink-700">
                Monday to Sunday
                <br />
                9:30 am – 7:00 pm
              </p>
            </div>
          </div>
        </Shell>
      </Section>

      <ClosingCta />
    </>
  );
}
