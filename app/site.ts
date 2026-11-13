// Canonical site URL. Set NEXT_PUBLIC_SITE_URL in Vercel once you attach a custom
// domain; until then Vercel's production URL is used automatically.
function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();

export const seo = {
  title: "Collins Vincent — Senior Full-Stack Engineer (React, Next.js, React Native)",
  shortTitle: "Collins Vincent",
  description:
    "Senior full-stack engineer in Port Harcourt, Nigeria. 8 years building fintech and payment products with React, Next.js, React Native, Node.js and NestJS.",
  keywords: [
    "Collins Vincent",
    "Vincent Collins",
    "Ogheneovie Collins Vincent",
    "codrexy",
    "senior full-stack engineer",
    "full-stack developer Nigeria",
    "React developer Port Harcourt",
    "Next.js developer",
    "React Native developer",
    "Node.js developer",
    "NestJS developer",
    "MERN stack developer",
    "fintech developer Nigeria",
    "payment platform engineer",
    "remote software engineer Nigeria",
  ],
};
