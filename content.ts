// All copy for the 2e11 editorial site. Bracketed placeholders are kept
// exactly as written (e.g. [city], [Founder name]) so the client can find
// and replace them. No facts, stats, clients or testimonials are invented.

export const metaRow = {
  left: { tag: "Creative / digital / media / sound" },
};

export const hero = {
  eyebrow: "Digital and Media",
  h1Lines: ["Turned", "up to", "eleven."],
  aboutHeading: "About 2e11",
  aboutParagraphs: [
    "A creative studio that builds its own products, makes media and writes music. Same team, same standard: as far as it goes, then one more.",
    "Minimal noise.\nMaximum volume.",
  ],
  globeCaption: "Products, campaigns\n& scores, worldwide",
  founderAlt:
    "The 2e11 founder in black and white, sitting cross-legged on a studio floor, smiling at the camera",
  nameTag: {
    name: "Jules Bayes",
    role: "Director",
    vol: "Vol. 11 / 11",
  },
};

export const scaleCaption = {
  left: "2e11 = 2 × 10¹¹ = “to eleven”",
  right: "Everyone else stops at 10",
};

export const selectedWorkHeading = "Our brands —";

export type WorkItem = {
  n: string;
  title: string;
  kind: string;
  screen: string;
  bg: string;
  fg: string;
  href: string;
  external: boolean;
  logo?: { src: string; alt: string };
};

export const selectedWork: WorkItem[] = [
  {
    n: "01",
    title: "clrfy.io",
    kind: "Own product / digital",
    screen: "CLRFY",
    bg: "#111111",
    fg: "#ECE7DC",
    href: "https://clrfy.io",
    external: true,
    logo: { src: "/images/logos/clrfy-mark.png", alt: "clrfy.io" },
  },
  {
    n: "02",
    title: "getfoh.com",
    kind: "Own product / digital",
    screen: "FRONT OF HOUSE",
    bg: "#1C1C1C",
    fg: "#ECE7DC",
    href: "https://www.getfoh.com",
    external: true,
    logo: { src: "/images/logos/getfoh-logo-white.svg", alt: "getfoh.com" },
  },
];

export const services = [
  { n: "01", t: "Digital products" },
  { n: "02", t: "Websites & platforms" },
  { n: "03", t: "Brand & design" },
  { n: "04", t: "Media & content" },
  { n: "05", t: "Music & sound" },
  { n: "06", t: "Production & post" },
];

export const elevenRule = {
  heading: ["The eleven", "rule"],
  paragraphs: [
    "Most work stops when it is good enough. Ten. We think the interesting part starts after that.",
    "We build it properly.\nWe make it sound right.\nThen we turn it up.",
  ],
  italic: "No trends.\nOnly volume.",
};

export const ourOwn = {
  heading: "Our own",
  products: [
    {
      name: "clrfy.io",
      description:
        "Paid Q&A for creators and experts — ask a question, pay a fee and get a real answer from a real person.",
      href: "https://clrfy.io",
    },
    {
      name: "getfoh.com",
      description: "A crowd-funded home gig platform — fans back a show, and when the room is full, the gig is on.",
      href: "https://www.getfoh.com",
    },
  ],
  footer: "Products we run ourselves. ■",
};

export const statement = {
  lineOne: "We don’t",
  lineTwoOutlined: "do ten",
  body: "Stand out. Break the scale. Make something people hear before they see it.",
  cta: "Let’s build something loud ↗",
};

export const volumeType = {
  lines: ["We make it", "louder."],
  notes: [
    "Silence.",
    "A whisper.",
    "Polite.",
    "Background.",
    "Agency default.",
    "Fine.",
    "Getting there.",
    "Good.",
    "Strong.",
    "Very strong.",
    "Ten. Most stop here.",
    "Eleven. This is 2e11.",
  ],
  label: "Brand device — type that turns up",
  helper: "Click a level. One variable font, from a whisper to the full brand voice.",
};

export const footer = {
  vertical: ["Let’s make", "something loud."],
  headline: ["Ready to", "turn it up?"],
  sub: "Products, brands, films, records.\nTell us what you’re making.",
  contactHeading: "Contact",
  links: [
    { label: "hello@2e11.com", href: "mailto:hello@2e11.com" },
    { label: "2e11.com", href: "/" },
    { label: "clrfy.io ↗", href: "https://clrfy.io" },
    { label: "getfoh.com ↗", href: "https://www.getfoh.com" },
    { label: "[Instagram] / [SoundCloud]", href: "#" },
  ],
  stampLabel: "CREATIVE • DIGITAL • MEDIA • SOUND • 2E11 • ",
  barcode: "2E11—0011",
  legalName: "2E11 Digital & Media Ltd",
  companyNo: "17516294",
  registeredIn: "Registered in England & Wales",
};

export const contactReasonOptions = [
  "A product (like clrfy.io or getfoh.com)",
  "A website or platform",
  "Brand & design",
  "Media & content",
  "Music & sound",
  "Production & post",
  "Something else",
];

export const contactBudgetOptions = [
  "Under $10k",
  "$10k–$25k",
  "$25k–$75k",
  "$75k+",
  "Not sure yet",
];
