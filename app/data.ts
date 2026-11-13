export const profile = {
  name: "Collins Vincent",
  fullName: "Ogheneovie Collins Vincent",
  role: "Senior full-stack engineer",
  location: "Port Harcourt, Nigeria",
  summary:
    "I build web and mobile products that move money — payment platforms, trading apps and member benefits — across React, Next.js and React Native on the client and Node.js and NestJS services behind them.",
  availability: "Open to remote and hybrid engineering roles",
  email: "vincentovie39@gmail.com",
  linkedin: "https://www.linkedin.com/in/codrexy",
  github: "https://github.com/codrexy",
  resume: "/Collins-Vincent-Resume.pdf",
};

export const stats = [
  { value: "8", label: "years shipping web and mobile" },
  { value: "15", label: "people led on one product team" },
  { value: "12+", label: "client products delivered" },
];

export type Product = {
  name: string;
  tagline: string;
  stack: string[];
  role: string;
  description: string;
  links: { label: string; href: string }[];
};

export const products: Product[] = [
  {
    name: "Puplar",
    tagline: "Payment infrastructure for businesses",
    stack: ["React", "TypeScript", "NestJS"],
    role: "Web developer across all three surfaces",
    description:
      "The marketing site, the merchant dashboard for collecting payments and requesting payouts, and the customer app. I built onboarding and KYC flows, multi-currency wallets, transaction views and reporting exports against one shared API layer.",
    links: [
      { label: "puplar.com", href: "https://puplar.com" },
      { label: "Merchant dashboard", href: "https://business.puplar.com" },
      { label: "Customer app", href: "https://app.puplar.com" },
    ],
  },
  {
    name: "4GeeHub",
    tagline: "Gift-card and crypto trading app",
    stack: ["React Native", "Node.js"],
    role: "Mobile app developer",
    description:
      "Converts gift cards to cash or crypto. I implemented live gift-card and crypto rate feeds, BTC and USDT payouts alongside bank transfers, PIN-based two-factor authentication, exportable transaction history and the store release cycle.",
    links: [{ label: "4geehub.ng", href: "https://4geehub.ng" }],
  },
  {
    name: "Activ8",
    tagline: "Lifestyle benefits platform",
    stack: ["React Native", "Next.js"],
    role: "Web and mobile developer",
    description:
      "A members’ app with curated deals across health, fitness, travel, entertainment and finance. I built partner-offer browsing, membership and benefit management, service booking and secure sign-in from one design system across web and app.",
    links: [{ label: "activ8.ng", href: "https://activ8.ng" }],
  },
];

export type Role = {
  title: string;
  company: string;
  start: string;
  end: string;
  points: string[];
};

export const experience: Role[] = [
  {
    title: "Full-Stack Developer",
    company: "Usepuplar (Puplar)",
    start: "Apr 2023",
    end: "Aug 2026",
    points: [
      "Shipped three production surfaces of a cross-border payment platform: puplar.com, the merchant dashboard and the customer app.",
      "Implemented merchant onboarding and KYC, multi-currency wallets, payout requests and transaction histories in React and TypeScript against NestJS services.",
      "Restructured data fetching around RTK Query, removing duplicate requests and cutting median dashboard interaction time by roughly 40%.",
      "Designed PostgreSQL schemas and REST endpoints for auth, payments and reporting, with automated tests that reduced regressions reaching production.",
    ],
  },
  {
    title: "Chief Digital Officer",
    company: "Definity Innovations & Solutions",
    start: "Jul 2024",
    end: "Jan 2026",
    points: [
      "Set technical direction across the product portfolio, including 4GeeHub and Activ8, and led a cross-functional team of 15.",
      "Introduced a shared component library and CI/CD pipeline that cut new project setup from weeks to days.",
      "Ran scoping and roadmapping for new engagements and set review, release and on-call practices.",
    ],
  },
  {
    title: "Senior Frontend Developer",
    company: "Techfaithful",
    start: "Nov 2022",
    end: "Oct 2023",
    points: [
      "Rebuilt the customer dashboard in Next.js with server-side rendering, improving first paint on the low-bandwidth connections most users were on.",
      "Established reusable UI patterns in Tailwind CSS and MUI, shortening build time for new screens.",
      "Mentored three mid-level developers through structured code review and pairing.",
    ],
  },
  {
    title: "Senior Mobile App Developer",
    company: "Expectoo Nigeria",
    start: "Feb 2022",
    end: "Mar 2023",
    points: [
      "Shipped a cross-platform React Native app to the App Store and Play Store with onboarding, in-app payments and push notifications.",
      "Cut cold-start time and crash rate through profiling, list virtualisation and offline-first caching.",
      "Built staged rollouts and over-the-air updates, shortening fix-to-user time from days to hours.",
    ],
  },
  {
    title: "Full-Stack Web & Mobile Developer",
    company: "The Devsyners",
    start: "Mar 2020",
    end: "Nov 2022",
    points: [
      "Delivered 12+ client web and mobile products on the MERN stack as lead developer, from scoping to post-launch support.",
      "Integrated payment, SMS and analytics providers and moved releases to automated builds.",
    ],
  },
  {
    title: "Full-Stack Web Developer & Instructor",
    company: "Harvoxx Tech Hub",
    start: "Jul 2017",
    end: "Jan 2020",
    points: [
      "Built websites and internal tools in JavaScript, Node.js and MySQL for small-business and NGO clients.",
      "Taught web development fundamentals to training cohorts and reviewed student projects.",
    ],
  },
];

export const skills = [
  {
    group: "Frontend",
    items: ["React", "Next.js", "Vue.js", "TypeScript", "Redux Toolkit & RTK Query", "Tailwind CSS", "MUI"],
  },
  {
    group: "Mobile",
    items: ["React Native", "Expo", "Native modules", "App Store & Play Store release"],
  },
  {
    group: "Backend and data",
    items: ["Node.js", "NestJS", "Express", "REST APIs", "PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    group: "Delivery",
    items: ["Git", "CI/CD", "Testing", "Code review", "Agile planning", "Leading teams of 5–15"],
  },
];

export const education = {
  degree: "B.Sc. Computer Science",
  school: "Ignatius Ajuru University of Education, Rivers State",
  dates: "Sep 2022 – Sep 2026",
};
