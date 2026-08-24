/** Copy and asset wiring transcribed from the Figma homepage frame (54:7485). */

// Root-relative so the bar resolves the same way from every route.
export const navLinks = [
  { label: "Practice Areas", href: "/services", hasMenu: true },
  { label: "Expertise", href: "/#expertise", hasMenu: true },
  { label: "People", href: "/partners", hasMenu: false },
  { label: "About Us", href: "/about", hasMenu: false },
  { label: "Contact Us", href: "/contact", hasMenu: false },
];

export const strengths = [
  {
    title: "Legal Representation",
    description: "Expert advocacy across all courts and tribunals",
    icon: "/icons/features/legal-representation.svg",
  },
  {
    title: "Practical Solutions",
    description: "Business-focused legal advice tailored to your needs",
    icon: "/icons/features/practical-solutions.svg",
  },
  {
    title: "Collaborative Team",
    description: "Multidisciplinary experts working seamlessly together",
    icon: "/icons/features/collaborative-team.svg",
  },
  {
    title: "Communication Excellence",
    description: "Clear, transparent counsel at every stage",
    icon: "/icons/features/communication-excellence.svg",
  },
  {
    title: "Compliance Advisory",
    description: "Navigating complex regulatory landscapes",
    icon: "/icons/features/compliance-advisory.svg",
  },
];

export const practiceAreas = [
  {
    title: "Indirect Taxation",
    description: "GST, customs, excise, and indirect levy advisory across sectors.",
    icon: "/icons/practice/indirect-taxation.svg",
    href: "/services/indirect-taxation",
  },
  {
    title: "Direct Taxation",
    description: "Corporate tax, transfer pricing, and income tax compliance & planning.",
    icon: "/icons/practice/direct-taxation.svg",
    href: "/services",
  },
  {
    title: "Securities Law",
    description: "SEBI regulations, capital markets, listings, and fund structuring.",
    icon: "/icons/practice/securities-law.svg",
    href: "/services",
  },
  {
    title: "Insolvency Law",
    description: "IBC proceedings, resolution plans, and creditor rights representation.",
    icon: "/icons/practice/insolvency-law.svg",
    href: "/services",
  },
  {
    title: "Commercial & Corporate Laws",
    description: "Entity structuring, M&A, joint ventures, and governance counsel.",
    icon: "/icons/practice/commercial-corporate.svg",
    href: "/services",
  },
  {
    title: "Drafting & Negotiating Contracts",
    description: "Bespoke agreements, review, and end-to-end negotiation support.",
    icon: "/icons/practice/drafting-contracts.svg",
    href: "/services",
  },
  {
    title: "Alternative Dispute Resolution",
    description: "Arbitration, mediation, and conciliation in domestic and international forums.",
    icon: "/icons/practice/alternative-dispute.svg",
    href: "/services",
  },
  {
    title: "End to End Litigation Support",
    description: "Trial preparation, appellate advocacy, and courtroom representation.",
    icon: "/icons/practice/litigation-support.svg",
    href: "/services",
  },
];

export const taxLawAreas = [
  { title: "GST Laws", icon: "/icons/taxlaw/gst-laws.svg" },
  { title: "Custom Laws", icon: "/icons/taxlaw/custom-laws.svg" },
  { title: "Central Excise Laws", icon: "/icons/taxlaw/central-excise-laws.svg" },
  { title: "Service Tax Laws", icon: "/icons/taxlaw/service-tax-laws.svg" },
  { title: "Foreign Trade Policy", icon: "/icons/taxlaw/foreign-trade-policy.svg" },
  { title: "Income Tax Laws", icon: "/icons/taxlaw/income-tax-laws.svg" },
];

export const partners = [
  {
    name: "Nikhil Kumar Rungta",
    role: "Partner",
    expertise: "Expert Tax Law",
    photo: "/images/partners/partner-1.png",
    width: 1001,
    height: 1024,
    // Per-card image transform read off the Figma frames (88:3319, 88:3318,
    // 88:3321, 88:3320) — each portrait is cropped individually, not "cover".
    crop: "top-[-9.58%] left-[-33.4%] h-[166.25%] w-[166.51%]",
  },
  {
    name: "Nikhil Kumar Rungta",
    role: "Partner",
    expertise: "Expert Tax Law",
    photo: "/images/partners/partner-2.png",
    width: 1148,
    height: 1128,
    crop: "top-[-0.04%] left-[-2.35%] h-[100.09%] w-[104.36%]",
  },
  {
    name: "Nikhil Kumar Rungta",
    role: "Partner",
    expertise: "Expert Tax Law",
    photo: "/images/partners/partner-3.png",
    width: 1024,
    height: 1024,
    crop: "top-[-7.14%] left-[-23.37%] h-[143.17%] w-[146.57%]",
  },
  {
    name: "Nikhil Kumar Rungta",
    role: "Partner",
    expertise: "Expert Tax Law",
    photo: "/images/partners/partner-1.png",
    width: 1001,
    height: 1024,
    crop: "top-[-9.58%] left-[-33.4%] h-[166.25%] w-[166.51%]",
  },
];

export const articles = [
  {
    category: "Compliance",
    title: "Understanding the new compliance landscape in India",
    author: "Rohan Mehta",
    date: "12 June 2025",
    image: "/images/articles/compliance-landscape.jpeg",
  },
  {
    category: "Corporate",
    title: "Contractual clarity for profit: liability considerations in focus",
    author: "Priya Sharma",
    date: "5 June 2025",
    image: "/images/articles/contractual-clarity.jpeg",
  },
  {
    category: "Tax",
    title: "Key updates on transfer pricing regulations: FY 2026-27",
    author: "Aditya Rao",
    date: "28 May 2025",
    image: "/images/articles/transfer-pricing.jpeg",
  },
  {
    category: "Compliance",
    title: "Understanding the new compliance landscape in India",
    author: "Rohan Mehta",
    date: "12 June 2025",
    image: "/images/articles/compliance-landscape.jpeg",
  },
];

export const footerColumns = [
  {
    heading: "About Us",
    links: ["Our Story", "Leadership", "Awards", "CSR Initiatives"],
  },
  {
    heading: "Expertise",
    links: ["Litigation", "Corporate", "Tax", "Employment", "Real Estate", "Aviation"],
  },
  {
    heading: "Insights",
    links: ["Articles", "News", "Media", "Blog", "Events"],
  },
];

export const socialLinks = [
  { label: "RGS Legal", icon: "/icons/social/linkedin.png", name: "LinkedIn" },
  { label: "RGS Legal", icon: "/icons/social/facebook.png", name: "Facebook" },
  { label: "RGS Legal", icon: "/icons/social/twitter.png", name: "Twitter" },
];

export const legalLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Disclaimer",
  "Cookie Policy",
];

/* ---------------------------------------------------------------- */
/* About Us page — Figma frame 54:8048                              */
/* ---------------------------------------------------------------- */

export const aboutStats = [
  { value: "2500+", label: "Cases Solved" },
  { value: "25+", label: "Practice Areas" },
  { value: "8", label: "Offices Across India" },
  { value: "40+", label: "Years of Excellence" },
];

export const advisoryPoints = [
  "Comprehensive expertise across GST, Customs, Excise, VAT, and Trade Laws",
  "Risk-focused compliance and regulatory advisory",
  "Strong representation in audits, investigations, and tax disputes",
  "Practical, business-oriented solutions with timely execution",
];

export const coreValues = [
  {
    title: "Integrity",
    description:
      "We hold ourselves to the highest ethical standards in all client relationships and proceedings.",
  },
  {
    title: "Excellence",
    description:
      "We pursue the highest level of legal service, driven by precision and deep expertise.",
  },
  {
    title: "Collaboration",
    description:
      "We believe the best outcomes emerge from partnerships built on trust and open dialogue.",
  },
  {
    title: "Integrity",
    description:
      "We hold ourselves to the highest ethical standards in all client relationships and proceedings.",
  },
];

/* ---------------------------------------------------------------- */
/* Partners page — Figma frame 116:3573                             */
/* ---------------------------------------------------------------- */

/* Same three bitmaps and per-node crops as the partner grid, so the profile
   rows reuse `partners` rather than re-declaring the image wiring. */
export const partnerProfiles = partners.slice(0, 3).map((partner) => ({
  ...partner,
  bio: 
    "Our team combines deep technical expertise with commercial insight to help businesses confidently manage indirect tax obligations. From advisory and compliance to dispute resolution and cross-border trade matters, we deliver practical legal solutions that protect your business while enabling sustainable growth. Our team combines deep technical expertise with commercial insight to help businesses confidently manage indirect tax obligations. From advisory and compliance to dispute resolution and cross-border trade matters, we deliver practical legal solutions that protect your business while enabling sustainable growth.",
}));

/* ---------------------------------------------------------------- */
/* Service detail — Figma frame 54:8875 (Indirect Taxation)          */
/* ---------------------------------------------------------------- */

export const serviceDetail = {
  eyebrow: "AREAS of Practice",
  titleLead: "Indirect Taxation",
  titleAccent: "GST, Customs & Trade",
  overview: [
    "Our Indirect Taxation practice provides comprehensive legal and strategic support across the full spectrum of indirect tax laws in India. We advise domestic and international businesses on GST, Customs, Central Excise, Service Tax, VAT, Foreign Trade Policy, Anti-Dumping, Safeguard Duty, and Special Economic Zone (SEZ) regulations",
    "With a commercially driven approach, we assist clients in structuring transactions, ensuring regulatory compliance, managing audits and investigations, handling disputes, and representing them before tax authorities and appellate forums. Our objective is to minimize tax risks while enabling efficient and compliant business operations.",
  ],
  valuePoints: [
    "Strategic indirect tax planning tailored to your business",
    "Practical advice backed by strong regulatory expertise",
    "End-to-end support for compliance, audits, and litigation",
    "Effective representation before tax authorities and tribunals",
    "Commercially focused solutions with timely execution",
  ],
};

export const serviceOfferings = [
  {
    title: "GST Law",
    description:
      "Advisory, compliance, litigation and appellate services in all aspects of Goods and Services Tax.",
    icon: "/icons/services/gst-law.svg",
  },
  {
    title: "Service Tax",
    description:
      "End-to-end legal services on service tax including advisory, compliance, refunds, and disputes resolution.",
    icon: "/icons/services/service-tax.svg",
  },
  {
    title: "Excise",
    description:
      "Comprehensive excise duty matters including classification, valuation, exemptions and litigation.",
    icon: "/icons/services/excise.svg",
  },
  {
    title: "VAT",
    description:
      "Support for VAT registration, compliance, returns, assessments and appeals across all states.",
    icon: "/icons/services/vat.svg",
  },
  {
    title: "Customs",
    description:
      "Assistance on customs compliance, import-export regulations, assessments and duty matters.",
    icon: "/icons/services/customs.svg",
  },
  {
    title: "Foreign Trade Policy",
    description:
      "Advisory on import-export policy, schemes, licensing, approvals and regulatory compliance.",
    icon: "/icons/services/foreign-trade-policy.svg",
  },
  {
    title: "Anti Dumping",
    description:
      "Representation and advisory in anti-dumping investigations and import-related trade remedies.",
    icon: "/icons/services/anti-dumping.svg",
  },
  {
    title: "Safeguard Duty",
    description:
      "Guidance and representation in safeguard investigations to protect industries from import surges.",
    icon: "/icons/services/safeguard-duty.svg",
  },
  {
    title: "Special Economic Zones",
    description:
      "Advisory on SEZ policy, compliance, approvals and dispute resolution under the SEZ Act.",
    icon: "/icons/services/special-economic-zones.svg",
  },
];

/* ---------------------------------------------------------------- */
/* Contact Us page — Figma frame 54:8434                             */
/* ---------------------------------------------------------------- */

export const contactChannels = [
  {
    label: "Call Us",
    primary: "+91 98765 43210",
    secondary: "+91 11 4567 8900",
    icon: "phone" as const,
  },
  {
    label: "Email Us",
    primary: "info@rgslaw.in",
    secondary: "support@rgslaw.in",
    icon: "mail" as const,
  },
  {
    label: "Working Hours",
    primary: "Mon \u2013 Fri: 9:00 AM \u2013 7:00 PM",
    secondary: "Sat: 10:00 AM \u2013 2:00 PM",
    icon: "clock" as const,
  },
];

/* The artboard repeats the same three cities twice, as a 3x2 grid. */
const officeList = [
  {
    city: "New Delhi",
    address: "12/3, Barakhamba Road, Connaught Place, New Delhi \u2013 110 001",
    phone: "+91 11 4567 8900",
    email: "delhi@rgslaw.in",
  },
  {
    city: "Mumbai",
    address:
      "Unit 402, 4th Floor, One Indiabulls Centre, Lower Parel, Mumbai \u2013 400 013",
    phone: "+91 22 6789 0123",
    email: "mumbai@rgslaw.in",
  },
  {
    city: "Bangalore",
    address: "No. 5, St. Marks Road, Prestige Polygon, Bengaluru \u2013 560 001",
    phone: "+91 80 4567 1234",
    email: "bangalore@rgslaw.in",
  },
];

export const offices = [...officeList, ...officeList];

/* Bar heights of the decorative skyline panel — Figma 54:8611..54:8621. */
export const officeSkyline = [
  20.792, 36.396, 57.198, 46.792, 72.792, 52, 36.396, 26, 41.594, 62.396, 31.198,
];

export const consultationChannels = [
  { label: "Call us", value: "+91 22 4100 0000", icon: "phone" as const },
  { label: "Write to us", value: "consult@veritaslegal.in", icon: "mail" as const },
  {
    label: "Visit us",
    value: "One BKC, Bandra Kurla Complex, Mumbai 400 051",
    icon: "pin" as const,
  },
];

export const matterOptions = [
  "Indirect Taxation",
  "Direct Taxation",
  "Securities Law",
  "Insolvency Law",
  "Commercial & Corporate Laws",
  "Drafting & Negotiating Contracts",
  "Alternative Dispute Resolution",
  "End to End Litigation Support",
];
