import { ORG } from "@/lib/seo";

/**
 * Thin utility bar above the navigation. Desktop only, and deliberately quiet —
 * it carries contact details and the two credentials, nothing promotional.
 */
export function TopBar() {
  return (
    <div className="hidden border-b border-rule bg-ink-950 text-white lg:block">
      <div className="mx-auto flex w-full max-w-shell items-center justify-between gap-6 px-5 py-2 text-[0.8125rem] sm:px-6 lg:px-10">
        <div className="flex items-center gap-6 text-white/70">
          <a
            href={`tel:${ORG.phone[0].replace(/-/g, "")}`}
            className="transition-colors hover:text-white"
          >
            +91 94834 86111
          </a>
          <span aria-hidden="true" className="h-3 w-px bg-white/15" />
          <a href={`mailto:${ORG.email}`} className="transition-colors hover:text-white">
            {ORG.email}
          </a>
          <span aria-hidden="true" className="h-3 w-px bg-white/15" />
          <span>Kalaburagi, Karnataka</span>
        </div>
        <div className="flex items-center gap-5 text-white/55">
          <span>MSME Registered</span>
          <span aria-hidden="true" className="h-3 w-px bg-white/15" />
          <span>ISO 9001:2015 Certified</span>
        </div>
      </div>
    </div>
  );
}
