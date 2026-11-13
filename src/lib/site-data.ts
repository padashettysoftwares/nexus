/**
 * Single source of truth for the marketing surface (homepage, about, navigation,
 * footer). Everything here mirrors information that already exists on the site or
 * in `lib/seo.ts` — no invented services, statistics, clients or credentials.
 */

export type ServiceLink = {
  name: string;
  href: string;
  /** One-line plain-language summary shown in the services index. */
  summary: string;
};

export type ServiceGroup = {
  id: string;
  name: string;
  /** Short description of what the group covers as a whole. */
  blurb: string;
  services: ServiceLink[];
};

/**
 * The five practice areas, grouped from the service routes that actually exist
 * under `app/services`. Every href resolves to a real page.
 */
export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: "company-setup",
    name: "Business & Company Setup",
    blurb: "Choosing the right structure and getting it incorporated correctly the first time.",
    services: [
      {
        name: "Private Limited Company",
        href: "/services/business-registration/private-limited",
        summary: "Incorporation, DIN & DSC, MOA/AOA and PAN–TAN.",
      },
      {
        name: "Limited Liability Partnership",
        href: "/services/business-registration/llp",
        summary: "LLP incorporation and agreement drafting.",
      },
      {
        name: "Partnership Firm",
        href: "/services/business-registration/partnership",
        summary: "Deed drafting and firm registration.",
      },
      {
        name: "Proprietorship",
        href: "/services/business-registration/proprietorship",
        summary: "The quickest route to a legally recognised business.",
      },
    ],
  },
  {
    id: "tax-accounting",
    name: "Tax & Accounting",
    blurb: "Registration, monthly filings and the books that keep them defensible.",
    services: [
      {
        name: "GST Registration",
        href: "/services/gst-and-tax/gst-registration",
        summary: "GSTIN application, documentation and clarifications.",
      },
      {
        name: "GST & Income Tax Filing",
        href: "/services/gst-and-tax",
        summary: "Monthly, quarterly and annual returns.",
      },
      {
        name: "Accounting & Bookkeeping",
        href: "/services/accounting/monthly-bookkeeping",
        summary: "Monthly books, reconciliations and MIS.",
      },
      {
        name: "ROC Annual Compliance",
        href: "/services/annual-compliance/roc-filing",
        summary: "Annual returns and financial statement filings.",
      },
    ],
  },
  {
    id: "licences",
    name: "Licences & Certifications",
    blurb: "The approvals a business needs before it can trade, manufacture or export.",
    services: [
      {
        name: "FSSAI Food Licence",
        href: "/services/licences/fssai",
        summary: "Basic, State and Central registration.",
      },
      {
        name: "Trade & Statutory Licences",
        href: "/services/licences",
        summary: "Local and state permits for your activity.",
      },
      {
        name: "ISO 9001:2015 Certification",
        href: "/services/quality-certifications/iso-9001",
        summary: "Documentation, implementation and audit.",
      },
      {
        name: "Quality Certifications",
        href: "/services/quality-certifications",
        summary: "Standards that open up tenders and exports.",
      },
    ],
  },
  {
    id: "legal-ip",
    name: "Legal, IP & Government",
    blurb: "Protecting the brand and registering for the schemes you already qualify for.",
    services: [
      {
        name: "Trademark Registration",
        href: "/services/trademark-and-ip/trademark-registration",
        summary: "Search, class selection and TM-A filing.",
      },
      {
        name: "Udyam / MSME Registration",
        href: "/services/govt-registrations/udyam-msme",
        summary: "The registration most benefits are keyed to.",
      },
      {
        name: "Import Export Code (IEC)",
        href: "/services/import-export/iec-code",
        summary: "DGFT registration for cross-border trade.",
      },
    ],
  },
  {
    id: "digital-growth",
    name: "Digital & Growth",
    blurb: "Technology and financial groundwork for the stage that comes after compliance.",
    services: [
      {
        name: "Web Design & Development",
        href: "/services/digital/web-development",
        summary: "Fast, search-friendly websites for your business.",
      },
      {
        name: "Process Automation",
        href: "/services/automation",
        summary: "Automating invoicing, inventory and approvals.",
      },
      {
        name: "Virtual CFO",
        href: "/services/advisory/virtual-cfo",
        summary: "Financial oversight without a full-time hire.",
      },
      {
        name: "Project Reports & Subsidy",
        href: "/services/loans-subsidy/project-report",
        summary: "Bankable reports for loans and scheme applications.",
      },
    ],
  },
];

/** Flat list used by the navbar and the footer's service column. */
export const ALL_SERVICES: ServiceLink[] = SERVICE_GROUPS.flatMap((g) => g.services);

/**
 * Credentials that already appear elsewhere on the site (top bar, footer,
 * seo.ts). Nothing here is a claim the site does not already make.
 */
export const CREDENTIALS = [
  { label: "MSME Registered", detail: "Government recognised" },
  { label: "ISO 9001:2015", detail: "Certified quality system" },
  { label: "Kalaburagi, Karnataka", detail: "Office on MG Road" },
  { label: "Four states served", detail: "Karnataka, Maharashtra, Telangana, Andhra Pradesh" },
];

/** How an engagement actually runs, from consultation through ongoing filing. */
export const PROCESS_STEPS = [
  {
    title: "Consultation",
    body: "We start with what you are trying to do — not a package. You get a clear view of which registrations apply, what they cost and how long they take.",
  },
  {
    title: "Documentation",
    body: "We tell you exactly which documents are needed, check them before anything is submitted, and prepare the drafts, deeds and forms ourselves.",
  },
  {
    title: "Filing & follow-up",
    body: "We file with the relevant department and handle what comes back — queries, examination reports and clarifications — until the approval is in your hands.",
  },
  {
    title: "Ongoing compliance",
    body: "Registration is the start. We keep returns, books and annual filings on schedule so nothing lapses quietly in the background.",
  },
];

/** Sectors the firm already publishes compliance guidance for. */
export const INDUSTRIES = [
  { name: "Food & Beverage", focus: "FSSAI licensing, HACCP, packaging compliance" },
  { name: "Textiles & Apparel", focus: "Factory licensing, labour and export compliance" },
  { name: "Pharmaceuticals", focus: "CDSCO approvals, WHO-GMP, drug licence" },
  { name: "Automotive", focus: "ARAI homologation, IATF 16949, vendor registration" },
  { name: "Chemicals", focus: "PESO, hazardous waste authorisation, fire NOC" },
  { name: "Electronics", focus: "BIS (CRS), WPC approval, e-waste management" },
  { name: "Electrical", focus: "BIS, CE marking, inspectorate approvals" },
  { name: "Machine Tools", focus: "CE marking, ISO 9001, vendor registration" },
  { name: "Mechanical", focus: "Factories Act, machinery licensing, trade licence" },
  { name: "FMCG", focus: "Legal metrology, BIS, brand protection" },
  { name: "Aerospace", focus: "AS9100, MoD vendor registration, clearances" },
  { name: "Retail & Trade", focus: "GST, shop establishment, trade licence" },
];

/**
 * Social profiles. The real URLs have not been supplied yet — these are
 * deliberate placeholders so the footer layout is final. Replace each `href`
 * when the handles are confirmed.
 */
export const SOCIAL_LINKS = [
  { name: "Instagram", href: "#" },
  { name: "YouTube", href: "#" },
];
