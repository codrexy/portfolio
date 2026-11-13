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
  whatsapp: "https://wa.me/2347041528380",
  phone: "+234 704 152 8380",
};

export const stats = [
  { value: 8, suffix: "", label: "years shipping web and mobile" },
  { value: 15, suffix: "", label: "people led on one product team" },
  { value: 12, suffix: "+", label: "client products delivered" },
  { value: 40, suffix: "%", label: "faster dashboard interactions at Puplar" },
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

export const services = [
  {
    title: "Payment and fintech products",
    body: "Wallets, payouts, KYC onboarding, rate feeds and transaction histories that hold up under real money.",
    tags: ["Multi-currency", "KYC", "Payouts"],
  },
  {
    title: "Web applications",
    body: "Fast, server-rendered dashboards and marketing sites in React and Next.js that work on low-bandwidth connections.",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    title: "Mobile apps",
    body: "One React Native codebase shipped to the App Store and Play Store, with push, in-app payments and offline caching.",
    tags: ["React Native", "Expo", "OTA updates"],
  },
  {
    title: "APIs and backend",
    body: "NestJS and Express services on PostgreSQL or MongoDB, with the tests that keep regressions out of production.",
    tags: ["NestJS", "PostgreSQL", "REST"],
  },
  {
    title: "Release pipelines",
    body: "CI/CD, staged rollouts and shared component libraries that turn weeks of project setup into days.",
    tags: ["CI/CD", "Design systems"],
  },
  {
    title: "Technical leadership",
    body: "Scoping, roadmaps, code review and on-call practice for cross-functional teams of 5 to 15.",
    tags: ["Mentoring", "Agile"],
  },
];

export const process = [
  { title: "Discover", body: "Understand the users, the money flow and the constraints before any code is written." },
  { title: "Design", body: "Agree screens, data models and API contracts so web, mobile and backend move together." },
  { title: "Build", body: "Ship in small reviewed increments behind automated tests and preview deployments." },
  { title: "Release and support", body: "Staged rollouts, monitoring and fast fixes after launch, not a hand-off and goodbye." },
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
