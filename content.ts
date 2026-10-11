// All copy, lists and content for the 2e11 landing page.
// Wording is verbatim from design_handoff_2e11_landing/README.md and the
// design/2e11 Website v11.dc.html reference.

export type ReelSlide = {
  id: string;
  name: string;
  src: string;
  alt: string;
};

export const reelSlides: ReelSlide[] = [
  { id: "clrfy", name: "clrfy.io", src: "/images/reel-clrfy.png", alt: "clrfy.io branding" },
  { id: "getfoh", name: "getfoh.com", src: "/images/reel-getfoh.png", alt: "getfoh.com branding" },
  { id: "records", name: "Records & publishing", src: "/images/reel-records.png", alt: "Records & publishing studio" },
];

// Volume comments, 0 to 11 (README "Copy" section, verbatim).
export const volumeMessages: string[] = [
  "Off. Like most agency proposals.",
  "Barely audible.",
  "Dentist waiting room.",
  "Polite.",
  "Inoffensive. Forgettable.",
  "Middle of the road.",
  "Getting somewhere.",
  "Respectable. Fine. Sure.",
  "Now we're talking.",
  "Loud.",
  "Maximum. Allegedly.",
  "One louder. This is where we work.",
];

export type BrandStatus = "Live" | "Building" | "Planned" | "Free";

export type Brand = {
  id: string;
  name: string;
  status: BrandStatus;
  level: number; // 0-11, lit segments on the meter at full scroll progress
  body: string;
  href: string;
  external: boolean;
  logo?: { src: string; alt: string; bg?: "white" | "dark" };
};

export const brands: Brand[] = [
  {
    id: "clrfy",
    name: "clrfy.io",
    status: "Live",
    level: 11,
    body: "Digital and media solutions and content, built for people who need things made clear.",
    href: "https://clrfy.io",
    external: true,
    logo: { src: "/images/clrfy-mark-white.png", alt: "clrfy logo" },
  },
  {
    id: "getfoh",
    name: "getfoh.com",
    status: "Building",
    level: 6,
    body: "Crowd-sourced living-room concerts. Fans pick the artist, someone offers the sofa.",
    href: "https://www.getfoh.com",
    external: true,
    logo: { src: "/images/logo-getfoh.png", alt: "getfoh logo" },
  },
  {
    id: "records",
    name: "Records & publishing",
    status: "Planned",
    level: 3,
    body: "A label and publishing company for the artists we meet along the way.",
    href: "#contact",
    external: false,
  },
  {
    id: "open",
    name: "Open channel",
    status: "Free",
    level: 0,
    body: "Got an idea that deserves an eleven? Pitch us.",
    href: "#contact",
    external: false,
  },
];

export type WorkItem = {
  id: string;
  image: string | null;
  imageAlt: string;
  tags: string[];
  title: string;
  body: string;
};

export const workItems: WorkItem[] = [
  {
    id: "clrfy-work",
    image: "/images/work-1.png",
    imageAlt: "clrfy.io project image",
    tags: ["clrfy.io", "Digital", "Content"],
    title: "clrfy.io: making the complicated clear",
    body: "A product and content system that turns dense information into something people actually read, shipped in weeks rather than quarters.",
  },
  {
    id: "getfoh-work",
    image: "/images/work-2.png",
    imageAlt: "getfoh gig photo",
    tags: ["getfoh", "Music", "Community"],
    title: "getfoh: the sofa tour",
    body: "Crowd-sourced living-room concerts. Fans vote for the artist, a host offers the room, and everyone chips in for a night nobody forgets.",
  },
  {
    id: "records-work",
    image: null,
    imageAlt: "Label artwork",
    tags: ["Records & publishing", "Coming soon"],
    title: "The label: first signings",
    body: "A record label and publishing company for the artists we meet along the way, built around releases, rights and the long game.",
  },
];

export const marqueeWords: string[] = [
  "2e11",
  "clrfy.io",
  "getfoh.com",
  "Records & publishing",
  "Media",
  "Music",
  "Digital",
];

export const contactReasons: string[] = [
  "Working with clrfy.io",
  "Playing or hosting a getfoh gig",
  "Records & publishing",
  "Pitching a new brand",
  "Press",
  "Something else",
];

export const nav = [
  { label: "Brands", href: "#brands" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const headerPills = [
  { label: "clrfy.io", href: "https://clrfy.io" },
  { label: "getfoh", href: "https://www.getfoh.com" },
];

export const footerColumns = [
  {
    heading: "2e11",
    links: [
      { label: "Brands", href: "#brands" },
      { label: "Work", href: "#work" },
      { label: "About", href: "#about" },
    ],
  },
  {
    heading: "The house",
    links: [
      { label: "clrfy.io", href: "https://clrfy.io", external: true },
      { label: "getfoh.com", href: "https://www.getfoh.com", external: true },
      { label: "Records & publishing", href: "#contact" },
    ],
  },
  {
    heading: "Say hello",
    links: [
      { label: "hello@2e11.com", href: "mailto:hello@2e11.com" },
      { label: "LinkedIn", href: "#" },
      { label: "Instagram", href: "#" },
    ],
  },
];

export const DEFAULT_VOLUME = 8;
export const WAVE_BAR_COUNT = 96;
export const WAVE_PEAK_INDEX = WAVE_BAR_COUNT - 14; // bar 82
