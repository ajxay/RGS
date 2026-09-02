/** Copy and asset wiring transcribed from the Figma homepage frame (54:7485). */

// Root-relative so the bar resolves the same way from every route.
export const navLinks = [
  { label: "Practice Areas", href: "/services", hasMenu: true },
  { label: "About Us", href: "/about", hasMenu: false },
  { label: "Blogs & Articles", href: "/#insights", hasMenu: false },
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
    href: "/services/direct-taxation",
  },
  {
    title: "Securities Law",
    description: "SEBI regulations, capital markets, listings, and fund structuring.",
    icon: "/icons/practice/securities-law.svg",
    href: "/services/securities-law",
  },
  {
    title: "Insolvency Law",
    description: "IBC proceedings, resolution plans, and creditor rights representation.",
    icon: "/icons/practice/insolvency-law.svg",
    href: "/services/insolvency-law",
  },
  {
    title: "Commercial & Corporate Laws",
    description: "Entity structuring, M&A, joint ventures, and governance counsel.",
    icon: "/icons/practice/commercial-corporate.svg",
    href: "/services/commercial-corporate",
  },
  {
    title: "Drafting & Negotiating Contracts",
    description: "Bespoke agreements, review, and end-to-end negotiation support.",
    icon: "/icons/practice/drafting-contracts.svg",
    href: "/services/drafting-contracts",
  },
  {
    title: "Alternative Dispute Resolution",
    description: "Arbitration, mediation, and conciliation in domestic and international forums.",
    icon: "/icons/practice/alternative-dispute.svg",
    href: "/services/dispute-resolution",
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
    icon: "/icons/values/integrity.png",
    width: 20,
    height: 24,
  },
  {
    title: "Excellence",
    description:
      "We pursue the highest level of legal service, driven by precision and deep expertise.",
    icon: "/icons/values/excellence.png",
    width: 20,
    height: 24,
  },
  {
    title: "Collaboration",
    description:
      "We believe the best outcomes emerge from partnerships built on trust and open dialogue.",
    icon: "/icons/values/collaboration.png",
    width: 26,
    height: 24,
  },
  {
    title: "Innovation",
    description:
      "We embrace new & forward-thinking solutions to drive progress.",
    icon: "/icons/values/innovation.png",
    width: 25,
    height: 24,
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
/* Service detail pages — Figma 54:8875 and 202:157                  */
/* ---------------------------------------------------------------- */

export type ServiceOffering = {
  title: string;
  description: string;
  icon: string;
};

export type ServiceDetailContent = {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  hero: {
    src: string;
    width: number;
    height: number;
    alt: string;
    className: string;
    /** Defaults to the 569px column both taxation pages use. */
    titleMaxWidth?: string;
  };
  /** Optional scrim drawn over the hero photo. */
  heroOverlay?: string;
  overview: [string, string];
  valuePoints: string[];
  offerings: ServiceOffering[];
  advisory: { heading: string; body: string; points: string[] };
};

export const indirectTaxation: ServiceDetailContent = {
  eyebrow: "AREAS of Practice",
  titleLead: "Indirect Taxation",
  titleAccent: "GST, Customs & Trade",
  hero: {
    src: "/images/service-hero-books.png",
    width: 1672,
    height: 941,
    alt: "Law volumes titled GST, Customs, Excise and Service Tax beside a globe and scales",
    className: "absolute top-[-29.81%] left-0 h-[150.08%] w-full max-w-none object-cover",
  },
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
  offerings: [
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
  ],
  advisory: {
    heading: "Strategic Indirect Tax Advisory Built for Business",
    body: "Our team combines deep technical expertise with commercial insight to help businesses confidently manage indirect tax obligations. From advisory and compliance to dispute resolution and cross-border trade matters, we deliver practical legal solutions that protect your business while enabling sustainable growth.",
    points: [
      "Comprehensive expertise across GST, Customs, Excise, VAT, and Trade Laws",
      "Risk-focused compliance and regulatory advisory",
      "Strong representation in audits, investigations, and tax disputes",
      "Practical, business-oriented solutions with timely execution",
    ],
  },
};

export const directTaxation: ServiceDetailContent = {
  eyebrow: "AREAS of Practice",
  titleLead: "Direct Taxation",
  titleAccent: "Income Tax, Corporate & International Tax Advisory",
  hero: {
    src: "/images/direct-tax-hero.png",
    width: 2508,
    height: 941,
    alt: "A Direct Taxation volume on a desk beside tax law books, a calculator and reading glasses",
    className: "absolute top-[-0.01%] left-[0.04%] h-[100.01%] w-[99.96%] max-w-none object-cover",
  },
  heroOverlay:
    "linear-gradient(to left, rgba(36,33,33,0) 24.063%, #282626 100%)",
  overview: [
    "Our Direct Taxation practice provides comprehensive advisory, compliance and litigation support across the spectrum of Income Tax law and related legislations, including the Black Money Act.",
    "We assist businesses, individuals and international entities in navigating complex tax obligations, structuring transactions efficiently and ensuring compliance with evolving tax regulations. Our practice also represents clients before departmental authorities, the Income Tax Appellate Tribunal (ITAT), High Courts and the Supreme Court in matters relating to Direct Taxes",
  ],
  valuePoints: [
    "Strategic tax planning tailored to your financial and business objectives",
    "International transaction structuring with cross-border tax considerations",
    "Practical guidance on complex corporate and individual tax matters",
    "Strong representation before tax authorities and appellate forums",
  ],
  offerings: [
    {
      title: "International Taxation",
      description:
        "Strategic structuring of cross-border transactions to manage tax liabilities, treaty obligations and regulatory compliance.",
      icon: "/icons/direct-tax/international-taxation.svg",
    },
    {
      title: "Corporate Taxation",
      description:
        "Advisory and strategic support to help businesses understand tax implications and maintain efficient compliance systems.",
      icon: "/icons/direct-tax/corporate-taxation.svg",
    },
    {
      title: "Individual Taxation",
      description:
        "Comprehensive consultancy and litigation support for individuals in matters concerning Income Tax liabilities and compliance.",
      icon: "/icons/direct-tax/individual-taxation.svg",
    },
    {
      title: "Income Tax Advisory",
      description:
        "Practical advice on tax laws, transactions and evolving regulations to support informed financial and business decisions.",
      icon: "/icons/direct-tax/income-tax-advisory.svg",
    },
    {
      title: "Tax Litigation & Representation",
      description:
        "Representation before departmental authorities, the Income Tax Appellate Tribunal, High Courts and the Supreme Court.",
      icon: "/icons/direct-tax/tax-litigation.svg",
    },
    {
      title: "Black Money Act",
      description:
        "Advisory and representation concerning matters arising under the Black Money (Undisclosed Foreign Income and Assets) Act and related regulations.",
      icon: "/icons/direct-tax/black-money-act.svg",
    },
    {
      title: "Tax Compliance",
      description:
        "Structured guidance to help businesses and individuals meet their Direct Tax compliance and reporting obligations.",
      icon: "/icons/direct-tax/tax-compliance.svg",
    },
    {
      title: "Tax Assessments & Appeals",
      description:
        "Support throughout assessments, disputes and appellate proceedings involving Direct Tax matters.",
      icon: "/icons/direct-tax/tax-assessments.svg",
    },
    {
      title: "Cross-Border Tax Advisory",
      description:
        "Focused guidance on international transactions, Double Taxation Avoidance Agreements and related tax implications.",
      icon: "/icons/direct-tax/cross-border-advisory.svg",
    },
  ],
  advisory: {
    heading: "Strategic Direct Tax Advisory for Businesses & Individuals",
    body: "Our team combines deep technical expertise with a practical understanding of business and financial realities. From corporate transactions and international taxation to individual tax matters and complex litigation, we provide solutions designed around each client's specific requirements.",
    points: [
      "Comprehensive expertise across Corporate, International & Individual Taxation",
      "Strategic guidance on complex tax structures and transactions",
      "Strong representation in assessments, appeals and tax litigation",
      "Practical, client-focused solutions with timely execution",
    ],
  },
};

export const securitiesLaw: ServiceDetailContent = {
  eyebrow: "AREAS of Practice",
  titleLead: "Securities Law",
  titleAccent: "SEBI Compliance, Advisory & Securities Litigation",
  hero: {
    src: "/images/securities-hero.png",
    width: 2730,
    height: 1024,
    alt: "Scales of justice and a gavel on a Securities Law volume beside a laptop and market charts",
    className: "absolute top-0 left-[0.02%] h-full w-[99.98%] max-w-none object-cover",
    titleMaxWidth: "max-w-[476px]",
  },
  overview: [
    "Our Securities Law practice provides comprehensive advisory, compliance and litigation support in matters governed by the SEBI Act and the rules and regulations framed thereunder.",
    "We regularly assist individuals and entities in navigating regulatory requirements, responding to enforcement actions and addressing complex compliance issues. Our team advises clients on matters involving SEBI proceedings, show cause notices, penalties and other regulatory restrictions, while also representing them before adjudicating authorities, the Securities Appellate Tribunal (SAT) and the Supreme Court.",
  ],
  valuePoints: [
    "Practical guidance on SEBI laws, regulations and compliance requirements",
    "Strategic support in responding to show cause notices and regulatory proceedings",
    "Strong representation before SEBI, adjudicating authorities and appellate forums",
    "Focused legal strategies for managing regulatory risks, penalties and restrictions",
  ],
  offerings: [
    {
      title: "SEBI Compliance",
      description:
        "Advisory and legal support to help individuals and entities understand and comply with applicable SEBI laws, rules and regulations.",
      icon: "/icons/securities/sebi-compliance.svg",
    },
    {
      title: "Regulatory Advisory",
      description:
        "Strategic guidance on securities law matters, regulatory obligations and compliance-related issues.",
      icon: "/icons/securities/regulatory-advisory.svg",
    },
    {
      title: "Show Cause Notices",
      description:
        "Assistance in analysing, drafting and filing responses to show cause notices issued by SEBI and other regulatory authorities.",
      icon: "/icons/securities/show-cause-notices.svg",
    },
    {
      title: "SEBI Adjudication",
      description:
        "Representation and legal support in proceedings before Whole Time Members of SEBI and other adjudicating officers.",
      icon: "/icons/securities/sebi-adjudication.svg",
    },
    {
      title: "Securities Litigation",
      description:
        "Strategic representation in disputes, enforcement actions and proceedings arising under securities laws and regulations.",
      icon: "/icons/securities/securities-litigation.svg",
    },
    {
      title: "SAT Appeals",
      description:
        "Advisory and representation in challenging adverse orders before the Securities Appellate Tribunal.",
      icon: "/icons/securities/sat-appeals.svg",
    },
    {
      title: "Supreme Court Representation",
      description:
        "Legal support and representation in securities law matters before the Supreme Court of India.",
      icon: "/icons/securities/supreme-court.svg",
    },
    {
      title: "Market Conduct Regulations",
      description:
        "Advisory on matters arising under regulations governing fraudulent and unfair trade practices and other market conduct requirements.",
      icon: "/icons/securities/market-conduct.svg",
    },
    {
      title: "Regulatory Investigations",
      description:
        "Focused legal support for individuals and entities facing SEBI inquiries, investigations, enforcement actions and regulatory proceedings.",
      icon: "/icons/securities/regulatory-investigations.svg",
    },
  ],
  advisory: {
    heading: "Strategic Securities Law Advisory for a Complex Regulatory Environment",
    /* The artboard still carries the Direct Taxation paragraph here verbatim. */
    body: "Our team combines deep technical expertise with a practical understanding of business and financial realities. From corporate transactions and international taxation to individual tax matters and complex litigation, we provide solutions designed around each client's specific requirements.",
    points: [
      "Comprehensive understanding of SEBI laws and regulatory frameworks",
      "Strategic support for compliance, investigations and enforcement proceedings",
      "Strong representation before SEBI, SAT and the Supreme Court",
      "Practical, timely and commercially focused legal solutions",
    ],
  },
};

export const insolvencyLaw: ServiceDetailContent = {
  eyebrow: "AREAS of Practice",
  titleLead: "Insolvency Law",
  titleAccent: "Restructuring, Insolvency & Recovery Solutions",
  hero: {
    src: "/images/insolvency-hero.png",
    width: 2750,
    height: 1025,
    alt: "An Insolvency Law volume, gavel and scales on a desk beside an insolvency petition",
    className: "absolute top-0 left-[0.03%] h-full w-[99.98%] max-w-none object-cover",
    titleMaxWidth: "max-w-[476px]",
  },
  overview: [
    "Our Insolvency Law practice provides strategic advisory, restructuring and legal support to creditors, shareholders, lenders, investors and businesses navigating financial distress and insolvency-related challenges.",
    "We believe that early, practical and cautionary advice can play a critical role in protecting interests and maximising outcomes. Our team advises clients across the restructuring, insolvency, liquidation and recovery process, including matters arising under the Insolvency and Bankruptcy Code, 2016, the Companies Act, 2013 and other applicable legal and regulatory frameworks.",
  ],
  valuePoints: [
    "Early strategic advice to identify risks and protect stakeholder interests",
    "Practical support throughout restructuring, insolvency and liquidation processes",
    "Focused legal strategies for debt recovery and enforcement of security interests",
    "Commercially driven solutions for stressed assets, exits and recovery",
  ],
  offerings: [
    {
      title: "Insolvency & Bankruptcy Code",
      description:
        "Advisory and legal support on matters arising under the Insolvency and Bankruptcy Code, 2016, including restructuring and insolvency processes.",
      icon: "/icons/insolvency/ibc.svg",
    },
    {
      title: "Corporate Restructuring",
      description:
        "Strategic advice and assistance in implementing restructuring through formal court or tribunal processes.",
      icon: "/icons/insolvency/corporate-restructuring.svg",
    },
    {
      title: "Insolvency Strategy",
      description:
        "Development of restructuring and insolvency strategies aligned with the prevailing legal, regulatory and policy framework.",
      icon: "/icons/insolvency/insolvency-strategy.svg",
    },
    {
      title: "Liquidation Advisory",
      description:
        "Guidance and representation throughout liquidation processes under the Companies Act, 2013 and the Insolvency and Bankruptcy Code, 2016.",
      icon: "/icons/insolvency/liquidation-advisory.svg",
    },
    {
      title: "Management Advisory",
      description:
        "Advice to key managerial personnel regarding their liabilities, obligations and responsibilities during restructuring and insolvency processes.",
      icon: "/icons/insolvency/management-advisory.svg",
    },
    {
      title: "Debt Recovery",
      description:
        "Legal support for lenders and creditors in pursuing available recovery mechanisms and protecting their financial interests.",
      icon: "/icons/insolvency/debt-recovery.svg",
    },
    {
      title: "Security Enforcement",
      description:
        "Advice and assistance in enforcing security interests under applicable laws, including the SARFAESI framework and other debt recovery mechanisms.",
      icon: "/icons/insolvency/security-enforcement.svg",
    },
    {
      title: "Stressed Asset Resolution",
      description:
        "Strategic guidance for investors and stakeholders dealing with stressed assets, restructuring opportunities and asset resolution.",
      icon: "/icons/insolvency/stressed-asset-resolution.svg",
    },
    {
      title: "Exit Strategy Advisory",
      description:
        "Assistance in structuring and implementing exit strategies through strategic sales, demergers, slump sales, auctions and other available mechanisms.",
      icon: "/icons/insolvency/exit-strategy.svg",
    },
  ],
  advisory: {
    heading: "Strategic Insolvency & Restructuring Advisory",
    body: "Financial distress requires timely decisions, clear legal strategies and a practical understanding of commercial realities. We works closely with creditors, lenders, shareholders, investors, directors and businesses to identify risks, evaluate available options and develop effective restructuring or recovery strategies. From insolvency proceedings and liquidation to debt recovery, security enforcement and stressed asset exits, we provide focused legal support at every stage of the process.",
    points: [
      "Strategic advice across restructuring and insolvency matters",
      "Early risk assessment and stakeholder-focused solutions",
      "Support for recovery, liquidation and security enforcement",
      "Practical strategies for stressed assets and investor exits",
    ],
  },
};

export const commercialCorporate: ServiceDetailContent = {
  eyebrow: "AREAS of Practice",
  titleLead: "Commercial & Corporate Laws",
  titleAccent: "Strategic Legal Solutions for Businesses",
  hero: {
    src: "/images/commercial-hero.png",
    width: 2508,
    height: 941,
    alt: "A boardroom desk with a contract, a Commercial & Corporate Laws volume, laptop and scales",
    className:
      "absolute top-[-0.01%] left-[0.04%] h-[100.01%] w-[99.96%] max-w-none object-cover",
    titleMaxWidth: "max-w-[530px]",
  },
  heroOverlay: "linear-gradient(to left, rgba(52,49,49,0) 0%, #1b1a1a 100%)",
  overview: [
    "Our Commercial & Corporate Laws practice provides comprehensive legal and strategic support to businesses operating and establishing themselves in India. We advise clients across corporate, commercial, regulatory, compliance and corporate governance matters, helping them navigate the legal framework surrounding their business activities.",
    "From evaluating business opportunities and establishing appropriate corporate structures to managing transactions, regulatory requirements and day-to-day corporate matters, our team provides practical legal solutions tailored to each client's business objectives.",
  ],
  valuePoints: [
    "Strategic legal guidance for establishing and operating businesses in India",
    "Practical support across corporate, commercial and regulatory requirements",
    "Comprehensive assistance with structuring, transactions and compliance",
    "Business-focused legal solutions aligned with commercial objectives",
  ],
  offerings: [
    {
      title: "Business Structuring",
      description:
        "Strategic advice on evaluating business options and selecting the most suitable legal and corporate structure.",
      icon: "/icons/commercial/business-structuring.svg",
    },
    {
      title: "Company Incorporation",
      description:
        "Strategic advice on evaluating business options and selecting the most suitable legal and corporate structure.",
      icon: "/icons/commercial/company-incorporation.svg",
    },
    {
      title: "LLPs & Partnerships",
      description:
        "Advisory and support for establishing limited liability partnerships, partnerships and proprietorships.",
      icon: "/icons/commercial/llps-partnerships.svg",
    },
    {
      title: "Due Diligence",
      description:
        "Comprehensive legal due diligence to identify potential risks, obligations and opportunities in business transactions.",
      icon: "/icons/commercial/due-diligence.svg",
    },
    {
      title: "Subsidiaries & Joint Ventures",
      description:
        "Strategic support for establishing subsidiaries, joint ventures and other collaborative business structures.",
      icon: "/icons/commercial/subsidiaries-joint-ventures.svg",
    },
    {
      title: "Mergers & Acquisitions",
      description:
        "Legal advisory and transactional support for mergers, acquisitions and other corporate restructuring initiatives.",
      icon: "/icons/commercial/mergers-acquisitions.svg",
    },
    {
      title: "Corporate Governance",
      description:
        "Advice on corporate governance, regulatory obligations and compliance requirements for businesses and corporate entities.",
      icon: "/icons/commercial/corporate-governance.svg",
    },
    {
      title: "Regulatory Approvals",
      description:
        "Assistance in obtaining permissions, sanctions and approvals from relevant state and regulatory authorities.",
      icon: "/icons/commercial/regulatory-approvals.svg",
    },
    {
      title: "Commercial & Corporate Advisory",
      description:
        "Ongoing legal support for negotiations, transactions and day to day corporate and company law matters.",
      icon: "/icons/commercial/commercial-corporate-advisory.svg",
    },
  ],
  advisory: {
    heading: "Corporate & Commercial Advisory Supporting Businesses at Every Stage",
    body: "Building and operating a business involves navigating a complex range of corporate, commercial and regulatory considerations. Our team works closely with clients to provide clear legal guidance from the initial evaluation of business opportunities to incorporation, expansion, transactions and ongoing corporate compliance. Whether establishing a new entity, entering into a joint venture, undertaking an acquisition or managing day-to-day corporate matters, we provide practical and commercially focused legal support.",
    points: [
      "Strategic guidance for establishing and structuring businesses",
      "Comprehensive support across corporate transactions and compliance",
      "Assistance with regulatory approvals and legal due diligence",
      "Practical, business-focused advice for long-term growth",
    ],
  },
};

export const draftingContracts: ServiceDetailContent = {
  eyebrow: "AREAS of Practice",
  titleLead: "Drafting & Negotiating Contracts",
  titleAccent: "Clear Agreements. Stronger Protection.",
  hero: {
    src: "/images/drafting-hero.png",
    width: 2508,
    height: 941,
    alt: "A desk nameplate reading Drafting & Negotiating Contracts beside law volumes and a signed contract",
    className:
      "absolute top-[-0.01%] left-[0.04%] h-[100.01%] w-[99.96%] max-w-none object-cover",
    titleMaxWidth: "max-w-[530px]",
  },
  overview: [
    "Our Drafting & Negotiating Contracts practice provides strategic legal assistance in negotiating, drafting and finalising agreements that protect our clients' interests while minimising the risk of future disputes and consequential litigation.",
    "We believe that an effective contract begins with a clear understanding of the client's business, commercial objectives and practical requirements. Our team works closely with clients to develop well-structured agreements and negotiate terms that strike the right balance between business realities, commercial interests and legal protection.",
  ],
  valuePoints: [
    "Client-focused contracts built around practical business requirements",
    "Strategic negotiation to protect commercial and legal interests",
    "Clear, balanced and commercially viable contractual terms",
    "Proactive risk management to minimise future disputes and litigation",
  ],
  offerings: [
    {
      title: "Contract Drafting",
      description:
        "Drafting clear, comprehensive and legally robust agreements tailored to the specific requirements of each transaction and business relationship.",
      icon: "/icons/drafting/contract-drafting.svg",
    },
    {
      title: "Contract Negotiation",
      description:
        "Strategic assistance in negotiating contractual terms while protecting our clients' commercial interests and legal position.",
      icon: "/icons/drafting/contract-negotiation.svg",
    },
    {
      title: "Commercial Agreements",
      description:
        "Advisory and support for establishing limited liability partnerships, partnerships and proprietorships.",
      icon: "/icons/drafting/commercial-agreements.svg",
    },
    {
      title: "Business Contracts",
      description:
        "Preparation and finalisation of contracts aligned with the operational and commercial requirements of businesses.",
      icon: "/icons/drafting/business-contracts.svg",
    },
    {
      title: "Contract Review",
      description:
        "Detailed review and analysis of proposed agreements to identify potential risks, obligations and areas requiring negotiation.",
      icon: "/icons/drafting/contract-review.svg",
    },
    {
      title: "Risk Assessment",
      description:
        "Identifying contractual risks and developing appropriate provisions to minimise disputes and potential litigation",
      icon: "/icons/drafting/risk-assessment.svg",
    },
    {
      title: "Transaction Documentation",
      description:
        "Drafting and negotiating documentation required for commercial transactions and business arrangements.",
      icon: "/icons/drafting/transaction-documentation.svg",
    },
    {
      title: "Contract Finalization",
      description:
        "Assistance throughout the negotiation & finalisation process to ensure that agreements accurately reflect the agreed commercial understanding.",
      icon: "/icons/drafting/contract-finalization.svg",
    },
    {
      title: "Dispute Prevention",
      description:
        "Structuring contractual terms and obligations with a proactive focus on reducing ambiguity, disputes and consequential litigation.",
      icon: "/icons/drafting/dispute-prevention.svg",
    },
  ],
  advisory: {
    heading: "Strategic Contract Advisory to Protect Your Interests Before Disputes Arise",
    body: "Every business relationship and transaction comes with its own commercial realities and legal considerations.  From initial discussions and drafting to negotiation and finalisation, we work to ensure that every agreement supports the intended business relationship while providing appropriate legal protection.",
    points: [
      "Tailored agreements built around business and commercial objectives",
      "Strategic negotiation to secure balanced and favourable terms",
      "Clear identification and management of contractual risks",
      "Practical legal solutions designed to minimise future disputes",
    ],
  },
};

export const disputeResolution: ServiceDetailContent = {
  eyebrow: "AREAS of Practice",
  titleLead: "Alternative Dispute Resolution",
  titleAccent: "Efficient Solutions Beyond Traditional Litigation",
  hero: {
    src: "/images/adr-hero.png",
    width: 2730,
    height: 1024,
    alt: "Two parties seated across a table behind an Alternative Dispute Resolution nameplate",
    className: "absolute top-0 left-[0.02%] h-full w-[99.98%] max-w-none object-cover",
    titleMaxWidth: "max-w-[555px]",
  },
  heroOverlay: "linear-gradient(to left, rgba(52,52,52,0) 1.992%, #161313 100%)",
  overview: [
    "Our Alternative Dispute Resolution practice focuses on facilitating the efficient and effective resolution of disputes while helping clients avoid the time, cost and complexity often associated with prolonged litigation.",
    "We actively support the expeditious settlement of commercial and business disputes through appropriate alternative dispute resolution mechanisms. Our approach is focused on finding practical, commercially viable solutions that protect our clients' interests while preserving valuable business relationships wherever possible.",
  ],
  valuePoints: [
    "Strategic approaches focused on the timely resolution of disputes",
    "Practical and commercially viable alternatives to prolonged litigation",
    "Focus on reducing costs, delays and business disruption",
    "Solutions designed to protect interests and preserve business relationships",
  ],
  offerings: [
    {
      title: "Arbitration",
      description:
        "Strategic legal support in resolving commercial and contractual disputes through arbitration proceedings.",
      icon: "/icons/adr/arbitration.svg",
    },
    {
      title: "Mediation",
      description:
        "Assistance in facilitating negotiated settlements through structured and collaborative mediation processes.",
      icon: "/icons/adr/mediation.svg",
    },
    {
      title: "Conciliation",
      description:
        "Support in resolving disputes through conciliatory processes aimed at achieving mutually acceptable outcomes.",
      icon: "/icons/adr/conciliation.svg",
    },
    {
      title: "Commercial Dispute Resolution",
      description:
        "Practical strategies for resolving complex commercial and business disputes efficiently and effectively.",
      icon: "/icons/adr/commercial-dispute-resolution.svg",
    },
    {
      title: "Settlement Negotiations",
      description:
        "Strategic assistance in negotiating settlements that protect legal and commercial interests.",
      icon: "/icons/adr/settlement-negotiations.svg",
    },
    {
      title: "Pre-Litigation Advisory",
      description:
        "Early legal assessment and strategic guidance to explore suitable resolution mechanisms before initiating formal litigation.",
      icon: "/icons/adr/pre-litigation-advisory.svg",
    },
    {
      title: "Dispute Strategy",
      description:
        "Developing tailored dispute resolution strategies based on the nature of the dispute, commercial objectives and legal considerations.",
      icon: "/icons/adr/dispute-strategy.svg",
    },
    {
      title: "Contractual Dispute Resolution",
      description:
        "Assistance in addressing disputes arising from commercial agreements, contractual obligations and business relationships.",
      icon: "/icons/adr/contractual-dispute-resolution.svg",
    },
    {
      title: "Negotiated Settlements",
      description:
        "Representation and support throughout negotiations aimed at achieving timely and commercially practical settlements.",
      icon: "/icons/adr/negotiated-settlements.svg",
    },
  ],
  advisory: {
    heading: "Strategic Dispute Resolution Advisory for Resolving Disputes & Business.",
    body: "Prolonged disputes can affect business operations, relationships and long-term growth. From early-stage negotiations to arbitration, mediation and settlement discussions, we work towards solutions that minimise disruption and help clients move forward with greater certainty.",
    points: [
      "Strategic guidance across alternative dispute resolution mechanisms",
      "Focus on timely and cost-effective resolution of disputes",
      "Commercially practical approaches to complex business conflicts",
      "Solutions designed to minimise disruption and preserve relationships",
    ],
  },
};

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
