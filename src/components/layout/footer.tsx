import Link from "next/link";
import Image from "next/image";
import { ORG } from "@/lib/seo";
import { SERVICE_GROUPS, SOCIAL_LINKS } from "@/lib/site-data";

const COMPANY_LINKS = [
  { name: "About", href: "/about" },
  { name: "All services", href: "/services" },
  { name: "Industries", href: "/#industries" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

/** The services most people arrive looking for, drawn from the real groups. */
const POPULAR_SERVICES = [
  SERVICE_GROUPS[0].services[0], // Private Limited Company
  SERVICE_GROUPS[1].services[0], // GST Registration
  SERVICE_GROUPS[2].services[0], // FSSAI Food Licence
  SERVICE_GROUPS[2].services[2], // ISO 9001:2015 Certification
  SERVICE_GROUPS[3].services[0], // Trademark Registration
  SERVICE_GROUPS[3].services[1], // Udyam / MSME Registration
  SERVICE_GROUPS[1].services[2], // Accounting & Bookkeeping
];

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  Instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </>
  ),
  YouTube: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10.5 9.5v5l4.2-2.5-4.2-2.5Z" fill="currentColor" />
    </>
  ),
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule-invert bg-ink-950 text-white">
      <div className="mx-auto w-full max-w-shell px-5 sm:px-6 lg:px-10">
        {/* Identity + link columns */}
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-20">
          <div className="lg:col-span-4 lg:pr-10">
            <Link href="/" className="flex items-center gap-2.5" aria-label="Nexus Solutions — home">
              <span className="relative h-10 w-10 overflow-hidden rounded-[5px] border border-white/15">
                <Image src="/Nexus-logo.jpeg" alt="" fill sizes="40px" className="object-cover" />
              </span>
              <span className="font-display text-base font-semibold tracking-[-0.01em] text-white">
                Nexus Solutions
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-[0.9375rem] leading-[1.7] text-white/60">
              An MSME-registered, ISO 9001:2015 certified business consulting firm in Kalaburagi
              (Gulbarga), Karnataka — providing end-to-end registration, tax, licensing and
              compliance services for startups and SMEs.
            </p>

            <div className="mt-8 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]" aria-hidden="true">
                    {SOCIAL_ICONS[social.name]}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <nav className="lg:col-span-2" aria-label="Company">
            <h2 className="text-[11px] font-semibold uppercase tracking-eyebrow text-white/45">
              Company
            </h2>
            <ul className="mt-5 space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.9375rem] text-white/70 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lg:col-span-3" aria-label="Popular services">
            <h2 className="text-[11px] font-semibold uppercase tracking-eyebrow text-white/45">
              Popular services
            </h2>
            <ul className="mt-5 space-y-3">
              {POPULAR_SERVICES.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-[0.9375rem] text-white/70 transition-colors hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="text-[11px] font-semibold uppercase tracking-eyebrow text-white/45">
              Contact
            </h2>
            <address className="mt-5 space-y-4 not-italic text-[0.9375rem] text-white/70">
              <p className="leading-[1.7]">
                {ORG.street},
                <br />
                {ORG.locality}, {ORG.region} {ORG.postalCode}
              </p>
              <p className="space-y-1">
                <a
                  href={`tel:${ORG.phone[0].replace(/-/g, "")}`}
                  className="block transition-colors hover:text-white"
                >
                  +91 94834 86111
                </a>
                <a
                  href={`tel:${ORG.phone[1].replace(/-/g, "")}`}
                  className="block transition-colors hover:text-white"
                >
                  +91 80737 26564
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${ORG.email}`}
                  className="break-all transition-colors hover:text-white"
                >
                  {ORG.email}
                </a>
              </p>
              <p className="text-white/50">Open daily, 9:30 am – 7:00 pm</p>
            </address>
          </div>
        </div>

        {/* Map — kept from the previous footer; it is genuinely useful here. */}
        <div className="border-t border-rule-invert py-10">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <h2 className="text-[11px] font-semibold uppercase tracking-eyebrow text-white/45">
                Find the office
              </h2>
              <p className="mt-4 max-w-xs text-[0.9375rem] leading-[1.7] text-white/60">
                We are on MG Road in Gubbi Colony, near Andola Hospital. Walk-ins are welcome
                during office hours.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="h-52 w-full overflow-hidden border border-white/10 bg-white/5">
                <iframe
                  title="Nexus Solutions location in Kalaburagi, Karnataka"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121753.8643195247!2d76.75705359740177!3d17.33230869687483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc65b7367ce71bb%3A0x6b4bb4c901e1dd73!2sKalaburagi%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1707567120300!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale transition-all duration-500 hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-4 border-t border-rule-invert py-7 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Nexus Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition-colors hover:text-white/80">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white/80">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
