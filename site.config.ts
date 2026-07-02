export interface NavLink {
  href: string;
  label: string;
}

export const siteConfig = {
  // Identity
  name: "TopAudiologists.com",
  shortName: "TopAudiologists",
  legalEntity: "TopAudiologists.com",
  domain: "topaudiologists.com",
  url: "https://topaudiologists.com",
  launchYear: 2026,

  // Wordmark
  wordmark: { top: "TOP", bottom: "AUDIOLOGISTS", tld: ".com" },

  // SEO / social
  title: "TopAudiologists.com — Get Your Practice Listed",
  description:
    "TopAudiologists.com is a national directory connecting patients with trusted audiologists and hearing care practices. Claim an enhanced listing to reach patients actively searching for hearing aids, cochlear implants, tinnitus management, and more.",
  ogDescription:
    "Get an enhanced listing on TopAudiologists.com — help patients find your hearing care practice when they're searching for hearing aids, cochlear implants, tinnitus management, and balance disorder care.",

  // Contact
  phone: "(855) 613-1467",
  phoneHref: "tel:+18556131467",
  salesEmail: "info@topaudiologists.com",

  // Analytics
  gaMeasurementId: "G-XXXXXXXXXX",

  // Lead notification email
  notifications: {
    fromEmail: "listings@topaudiologists.com",
    fromName: "TopAudiologists.com",
    replyTo: "sbansal@brianmarketinggroup.com",
    testEmail: "sbansal@brianmarketinggroup.com",
    recipients: [
      "sbansal@brianmarketinggroup.com",
    ],
  },

  // Traffic-source attribution cookie name
  trafficCookie: "ta_source",

  // Directory preview config
  directory: {
    subtext:
      "Every listing includes a ranked directory placement, a dedicated practice profile, and an optional Featured Listing upgrade. Switch between the views below.",
    browse: "Denver, CO",
    filter: "All Specialties",
    cta: "List Your Practice",
    headline: "Find Top Audiologists",
    listHeading: "Top Audiologists — Denver, CO",
    spotName: "Featured Listing",
    spotScope: "1 per city",
    servicesLabel: "Audiology Specialties",
    teamLabel: "About the Practice",
    noun: "audiology practice",
    recognition: "Listed 2026",
    launch: "September 2026",
    toggles: { spotlight: "Featured", profile: "Profile", directory: "Directory" },
    directorySlug: "denver-co",
    profileSlug: "denver-hearing-balance-care",
  },

  // Navigation
  nav: [
    { href: "/about", label: "About" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ] as NavLink[],

  footer: {
    company: [
      { href: "/about", label: "About Us" },
      { href: "/how-it-works", label: "How It Works" },
      { href: "/contact", label: "Contact" },
    ] as NavLink[],
    forShops: [
      { href: "/apply", label: "List Your Practice" },
      { href: "/how-it-works", label: "Why Get Listed" },
      { href: "/#pricing", label: "Pricing" },
    ] as NavLink[],
  },
} as const;

export type SiteConfig = typeof siteConfig;
