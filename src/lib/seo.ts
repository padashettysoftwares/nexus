import type { Metadata } from "next";

/**
 * Canonical production origin. The site is served on the apex domain
 * (nexusolutions.in) with no www redirect, so every canonical / structured-data
 * URL is built from this single constant to keep signals consistent.
 */
export const SITE_URL = "https://nexusolutions.in";
export const SITE_NAME = "Nexus Solutions";

export const ORG = {
  name: SITE_NAME,
  legalName: "Nexus Solutions",
  url: SITE_URL,
  logo: `${SITE_URL}/Nexus-logo.jpeg`,
  phone: ["+91-9483486111", "+91-8073726564"],
  email: "nexussolutionsglb@gmail.com",
  street: "#2-909/2967/4/14 Sharan Nilaya, Near Andola Hospital, Gubbi Colony, MG Road",
  locality: "Kalaburagi",
  region: "Karnataka",
  postalCode: "585105",
  country: "IN",
  // Approx. coordinates for Kalaburagi (Gulbarga) city centre.
  latitude: 17.3297,
  longitude: 76.8343,
  areaServed: ["Kalaburagi", "Gulbarga", "Bengaluru", "Hubli", "Kalyana Karnataka", "Karnataka", "India"],
};

const DEFAULT_OG_IMAGE = {
  url: `${SITE_URL}/api/og`, // fallback without title
  width: 1200,
  height: 630,
  alt: "Nexus Solutions — business registration, tax and compliance consultants in Kalaburagi",
};

type PageMetaInput = {
  title: string;
  description: string;
  /** Path beginning with "/" — used for the self-referencing canonical. */
  path: string;
  keywords?: string[];
  /** Set false for utility pages that should stay out of the index. */
  index?: boolean;
  /** When true the title bypasses the "%s | Nexus Solutions" template. */
  titleAbsolute?: boolean;
  ogType?: "website" | "article";
  image?: { url: string; width?: number; height?: number; alt?: string };
};

/**
 * Builds a complete, self-consistent Metadata object for a route:
 * absolute canonical, Open Graph and Twitter cards derived from the same copy.
 */
export function pageMetadata({
  title,
  description,
  path,
  keywords,
  index = true,
  titleAbsolute = false,
  ogType = "website",
  image,
}: PageMetaInput): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const ogImage = image
    ? { width: 1200, height: 630, alt: title, ...image }
    : { ...DEFAULT_OG_IMAGE, url: `${SITE_URL}/api/og?title=${encodeURIComponent(title)}`, alt: title };

  return {
    title: titleAbsolute ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: url },
    robots: index
      ? undefined
      : { index: false, follow: true },
    openGraph: {
      type: ogType,
      locale: "en_IN",
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}

/* ------------------------------------------------------------------ */
/*  JSON-LD builders                                                    */
/* ------------------------------------------------------------------ */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "Organization", "LocalBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: ORG.name,
    legalName: ORG.legalName,
    url: SITE_URL,
    logo: ORG.logo,
    image: ORG.logo,
    telephone: ORG.phone[0],
    email: ORG.email,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: ORG.street,
      addressLocality: ORG.locality,
      addressRegion: ORG.region,
      postalCode: ORG.postalCode,
      addressCountry: ORG.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: ORG.latitude,
      longitude: ORG.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:30",
      closes: "19:00"
    },
    areaServed: ORG.areaServed.map((name) => ({ "@type": "AdministrativeArea", name })),
    description:
      "Nexus Solutions is a business consulting firm in Kalaburagi (Gulbarga), Karnataka providing company registration, GST and income-tax filing, FSSAI and trade licences, ISO certification, trademark and IP registration, Udyam/MSME registration, accounting and annual compliance for startups and SMEs.",
    knowsAbout: [
      "Company registration",
      "GST registration and return filing",
      "FSSAI food licence",
      "ISO 9001 certification",
      "Trademark registration",
      "Udyam MSME registration",
      "Accounting and bookkeeping",
      "ROC annual compliance",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-IN",
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: serviceType ?? name,
    url: `${SITE_URL}${path}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: ORG.areaServed.map((n) => ({ "@type": "AdministrativeArea", name: n })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Renders one or more schema objects as a single JSON-LD script tag payload. */
export function jsonLd(...schemas: object[]) {
  return { __html: JSON.stringify(schemas.length === 1 ? schemas[0] : schemas) };
}
