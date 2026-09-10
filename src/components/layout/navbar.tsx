"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SERVICE_GROUPS } from "@/lib/site-data";
import { BookConsultationModal } from "@/components/ui/book-consultation-modal";

const NAV_LINKS = [
  { name: "Industries", href: "/#industries" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

/**
 * Sticky, in-flow navigation.
 *
 * Deliberately not a floating pill: sitting in the document means page content
 * is never hidden underneath it, and a single hairline is enough separation on
 * a white page. The services mega-menu mirrors the five practice areas so the
 * navigation and the homepage index never drift apart.
 */
export function Navbar() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openGroup, setOpenGroup] = React.useState<string | null>(null);
  const [modalOpen, setModalOpen] = React.useState(false);
  const navRef = React.useRef<HTMLElement | null>(null);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  // Any navigation closes whatever is open.
  React.useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  // Escape closes; clicking outside the header closes the mega-menu.
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };
    const onPointerDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, []);

  // The mobile panel scrolls itself; lock the page behind it.
  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  React.useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  /** Small grace period so the pointer can travel from trigger to panel. */
  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleCloseServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 140);
  };

  const isActive = (href: string) =>
    href.startsWith("/#") ? false : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 border-b border-rule bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85"
    >
      <div className="mx-auto w-full max-w-shell px-5 sm:px-6 lg:px-10">
        <div className="flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]">
          <Link
            href="/"
            className="-my-1 flex shrink-0 items-center gap-2.5 rounded-sm py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            aria-label="Nexus Solutions — home"
          >
            <span className="relative h-9 w-9 overflow-hidden rounded-[5px] border border-rule">
              <Image src="/Nexus-logo.jpeg" alt="" fill sizes="36px" className="object-cover" />
            </span>
            <span className="font-display text-[0.9375rem] font-semibold tracking-[-0.01em] text-ink-900">
              Nexus Solutions
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            <div
              className="relative"
              onMouseEnter={openServices}
              onMouseLeave={scheduleCloseServices}
            >
              <button
                type="button"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                onClick={() => setServicesOpen((v) => !v)}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-[0.9375rem] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  servicesOpen || pathname.startsWith("/services")
                    ? "text-ink-900"
                    : "text-ink-600 hover:text-ink-900"
                )}
              >
                Services
                <svg
                  aria-hidden="true"
                  viewBox="0 0 12 12"
                  fill="none"
                  className={cn(
                    "h-3 w-3 text-ink-400 transition-transform duration-200",
                    servicesOpen && "rotate-180"
                  )}
                >
                  <path
                    d="M3 4.5 6 7.5 9 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-[0.9375rem] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  isActive(link.href) ? "text-ink-900" : "text-ink-600 hover:text-ink-900"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href="tel:+919483486111"
              className="text-[0.9375rem] font-medium text-ink-600 transition-colors hover:text-ink-900"
            >
              +91 94834 86111
            </a>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex h-10 items-center justify-center rounded-md bg-accent px-4 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Book a consultation
            </button>
          </div>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="-mr-2.5 inline-flex h-11 w-11 items-center justify-center rounded-md text-ink-700 transition-colors hover:bg-ink-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
              {mobileOpen ? (
                <path
                  d="m6 6 12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3.5 7h17M3.5 12h17M3.5 17h17"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop mega-menu */}
      {servicesOpen ? (
        <div
          className="absolute inset-x-0 top-full hidden border-b border-rule bg-white shadow-menu lg:block"
          onMouseEnter={openServices}
          onMouseLeave={scheduleCloseServices}
        >
          <div className="mx-auto w-full max-w-shell px-5 sm:px-6 lg:px-10">
            <div className="grid grid-cols-5 gap-px bg-rule py-0">
              {SERVICE_GROUPS.map((group) => (
                <div key={group.id} className="bg-white px-5 py-8 first:pl-0 last:pr-0">
                  <p className="text-[11px] font-semibold uppercase tracking-eyebrow text-ink-400">
                    {group.name}
                  </p>
                  <ul className="mt-4 space-y-1">
                    {group.services.map((service) => (
                      <li key={service.href}>
                        <Link
                          href={service.href}
                          className="block rounded-md px-2 py-1.5 text-[0.875rem] leading-snug text-ink-700 transition-colors hover:bg-ink-50 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between border-t border-rule py-4">
              <p className="text-sm text-ink-500">
                Not sure which applies to you? We will tell you in one call.
              </p>
              <Link
                href="/services"
                className="text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
              >
                View all services →
              </Link>
            </div>
          </div>
        </div>
      ) : null}

      {/* Mobile panel */}
      {mobileOpen ? (
        <div className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto overscroll-contain border-t border-rule bg-white lg:hidden">
          <div className="mx-auto w-full max-w-shell px-5 pb-10 pt-2 sm:px-6">
            <div className="divide-y divide-rule">
              {SERVICE_GROUPS.map((group) => {
                const open = openGroup === group.id;
                return (
                  <div key={group.id} className="py-1">
                    <button
                      type="button"
                      onClick={() => setOpenGroup(open ? null : group.id)}
                      aria-expanded={open}
                      className="flex w-full items-center justify-between gap-4 py-3.5 text-left text-[0.9375rem] font-medium text-ink-900"
                    >
                      {group.name}
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 12 12"
                        fill="none"
                        className={cn(
                          "h-3.5 w-3.5 shrink-0 text-ink-400 transition-transform duration-200",
                          open && "rotate-180"
                        )}
                      >
                        <path
                          d="M3 4.5 6 7.5 9 4.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    {open ? (
                      <ul className="animate-fade-in pb-3 pl-1">
                        {group.services.map((service) => (
                          <li key={service.href}>
                            <Link
                              href={service.href}
                              className="block py-2.5 text-[0.9375rem] text-ink-600"
                            >
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                );
              })}

              <div className="py-1">
                <Link
                  href="/services"
                  className="block py-3.5 text-[0.9375rem] font-medium text-ink-900"
                >
                  All services
                </Link>
              </div>

              {NAV_LINKS.map((link) => (
                <div key={link.href} className="py-1">
                  <Link
                    href={link.href}
                    className="block py-3.5 text-[0.9375rem] font-medium text-ink-900"
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  setModalOpen(true);
                }}
                className="inline-flex h-12 w-full items-center justify-center rounded-md bg-accent px-5 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                Book a consultation
              </button>
              <a
                href="tel:+919483486111"
                className="inline-flex h-12 w-full items-center justify-center rounded-md border border-ink-200 px-5 text-[0.9375rem] font-semibold text-ink-800 transition-colors hover:bg-ink-50"
              >
                Call +91 94834 86111
              </a>
            </div>
          </div>
        </div>
      ) : null}

      <BookConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </header>
  );
}
