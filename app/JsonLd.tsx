import { education, experience, products, profile, skills } from "./data";
import { seo, siteUrl } from "./site";

// Structured data so search engines understand who this page is about.
export default function JsonLd() {
  const personId = `${siteUrl}/#person`;
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: seo.shortTitle,
        description: seo.description,
        inLanguage: "en-NG",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profilepage`,
        url: siteUrl,
        name: seo.title,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": personId },
        mainEntity: { "@id": personId },
        primaryImageOfPage: `${siteUrl}/opengraph-image`,
        inLanguage: "en-NG",
      },
      {
        "@type": "Person",
        "@id": personId,
        name: profile.name,
        alternateName: [profile.fullName, "Vincent Collins", "Vincent Ovie", "codrexy"],
        givenName: "Collins",
        familyName: "Vincent",
        additionalName: "Ogheneovie",
        jobTitle: "Senior Full-Stack Engineer",
        description: profile.summary,
        url: siteUrl,
        image: `${siteUrl}/opengraph-image`,
        email: `mailto:${profile.email}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Port Harcourt",
          addressRegion: "Rivers State",
          addressCountry: "NG",
        },
        nationality: { "@type": "Country", name: "Nigeria" },
        sameAs: [profile.linkedin, profile.github, "https://vincentcollins.netlify.app"],
        worksFor: { "@type": "Organization", name: experience[0].company },
        alumniOf: { "@type": "CollegeOrUniversity", name: education.school },
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: education.degree,
        },
        knowsAbout: skills.flatMap((s) => s.items),
        knowsLanguage: "English",
        hasOccupation: {
          "@type": "Occupation",
          name: "Full-Stack Software Engineer",
          occupationLocation: { "@type": "City", name: "Port Harcourt" },
          skills: skills.flatMap((s) => s.items).join(", "),
        },
      },
      ...products.map((p) => ({
        "@type": "SoftwareApplication",
        name: p.name,
        description: `${p.tagline}. ${p.description}`,
        url: p.links[0].href,
        applicationCategory: "FinanceApplication",
        operatingSystem: p.stack.includes("React Native") ? "iOS, Android, Web" : "Web",
        creator: { "@id": personId },
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }}
    />
  );
}
