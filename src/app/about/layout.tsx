import type { Metadata } from "next";

// The About section is intentionally hidden; the page only redirects to home.
// Keep it out of the search index and off the sitemap.
export const metadata: Metadata = {
  title: "About",
  robots: { index: false, follow: false },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
