import Image from "next/image";
import Guilloche from "./Guilloche";
import JsonLd from "./JsonLd";
import {
  BackToTop,
  ContactForm,
  CountUp,
  Header,
  Reveal,
  SkillTabs,
  Terminal,
  Tilt,
} from "./components/interactive";
import { education, experience, process, products, profile, services, skills, stats } from "./data";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
];

const marquee = [
  "React",
  "Next.js",
  "React Native",
  "TypeScript",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "MongoDB",
  "Redux Toolkit",
  "Expo",
  "Tailwind CSS",
  "CI/CD",
];

const cardThemes = ["card-mint", "card-violet", "card-gold"];

function Icon({ name }: { name: "linkedin" | "github" | "whatsapp" | "mail" | "download" | "external" }) {
  const p = {
    linkedin:
      "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.8v1.5h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1v6.45h-4v-5.72c0-1.36-.03-3.12-1.9-3.12-1.9 0-2.2 1.48-2.2 3.02v5.82h-4v-11Z",
    github:
      "M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z",
    whatsapp:
      "M12 2a9.9 9.9 0 0 0-8.53 14.94L2 22l5.2-1.43A9.95 9.95 0 1 0 12 2Zm5.8 14.03c-.24.68-1.42 1.3-1.95 1.35-.5.05-.97.24-3.27-.68-2.77-1.1-4.52-3.94-4.66-4.12-.13-.18-1.1-1.47-1.1-2.8 0-1.33.7-1.99.95-2.26.24-.27.53-.34.71-.34h.51c.16 0 .38-.06.6.46.23.55.77 1.88.84 2.02.07.13.11.3.02.48-.09.18-.13.3-.27.46l-.4.47c-.13.14-.27.28-.12.55.16.27.7 1.15 1.5 1.86 1.03.92 1.9 1.2 2.17 1.34.27.13.43.11.58-.07.16-.18.67-.78.85-1.05.18-.27.36-.23.6-.14.25.09 1.57.74 1.84.88.27.13.45.2.52.31.07.11.07.65-.17 1.33Z",
    mail: "M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1 2.4V17h16V7.4l-8 5.33L4 7.4ZM18.2 7H5.8L12 11.13 18.2 7Z",
    download: "M12 3v11m0 0 4.5-4.5M12 14 7.5 9.5M4 17v3h16v-3",
    external: "M14 4h6v6M20 4l-9 9M18 14v6H4V6h6",
  }[name];
  const stroke = name === "download" || name === "external";
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" className="icon">
      <path
        d={p}
        fill={stroke ? "none" : "currentColor"}
        stroke={stroke ? "currentColor" : "none"}
        strokeWidth={stroke ? 2 : 0}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <JsonLd />
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header links={navLinks} />

      <main id="main">
        <section id="top" className="hero">
          <div className="hero-glow" aria-hidden="true" />
          <div className="wrap hero-grid">
            <div className="hero-text">
              <p className="status">
                <span className="pulse" aria-hidden="true" />
                {profile.availability}
              </p>
              <h1>
                <span className="h1-line">Collins</span>
                <span className="h1-line h1-holo">Vincent</span>
              </h1>
              <p className="hero-role">
                Senior full-stack engineer building payment, trading and benefits products — from Port Harcourt, for
                anywhere.
              </p>
              <div className="actions">
                <a className="btn btn-holo" href="#work">
                  See my work
                </a>
                <a className="btn btn-ghost" href={profile.resume} download>
                  <Icon name="download" /> Résumé
                </a>
              </div>
              <ul className="socials" aria-label="Find me online">
                <li>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Icon name="linkedin" />
                  </a>
                </li>
                <li>
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Icon name="github" />
                  </a>
                </li>
                <li>
                  <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <Icon name="whatsapp" />
                  </a>
                </li>
                <li>
                  <a href={`mailto:${profile.email}`} aria-label="Email">
                    <Icon name="mail" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="hero-visual">
              <div className="rosette-spin" aria-hidden="true">
                <Guilloche />
              </div>
              <Tilt className="portrait-frame">
                <Image
                  src="/images/portrait.webp"
                  alt="Collins Vincent smiling, wearing a black and white striped shirt"
                  width={860}
                  height={896}
                  priority
                  sizes="(max-width: 860px) 80vw, 440px"
                />
                <span className="sheen" aria-hidden="true" />
              </Tilt>
              <div className="float-card fc-1">
                <strong>8 years</strong>
                <span>web and mobile</span>
              </div>
              <div className="float-card fc-2">
                <strong>3 live products</strong>
                <span>Puplar, 4GeeHub, Activ8</span>
              </div>
            </div>
          </div>
          <a href="#about" className="scroll-cue" aria-label="Scroll to About">
            <span />
          </a>
        </section>

        <div className="marquee" role="region" aria-label="Technologies I work with">
          <div className="marquee-track">
            {[0, 1].map((dup) => (
              <ul key={dup} aria-hidden={dup === 1 ? true : undefined}>
                {marquee.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <section id="about" className="section wrap about">
          <Reveal className="collage">
            <figure className="ph ph-1">
              <Image
                src="/images/thesis.webp"
                alt="Collins holding his bound final-year project on blockchain certificate verification"
                width={800}
                height={1110}
                sizes="(max-width: 860px) 60vw, 320px"
              />
            </figure>
            <figure className="ph ph-2">
              <Image
                src="/images/outdoor.webp"
                alt="Collins standing on a lawn at golden hour"
                width={800}
                height={1120}
                sizes="(max-width: 860px) 50vw, 260px"
              />
            </figure>
            <div className="collage-badge">
              <strong>B.Sc.</strong>
              <span>Computer Science</span>
            </div>
          </Reveal>
          <Reveal className="about-text" delay={120}>
            <h2>Engineer, team lead and builder of things people pay with.</h2>
            <p>
              I’ve spent eight years shipping live web and mobile products — most recently the cross-border payment
              platform at Puplar, and the 4GeeHub and Activ8 apps as Chief Digital Officer at Definity Innovations.
            </p>
            <p>
              I work end to end: React, Next.js and React Native on the client, Node.js and NestJS behind them, and the
              release pipelines that get it all to users safely. I’ve led teams of 5 to 15 from discovery through store
              release.
            </p>
            <dl className="stats">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt>{s.label}</dt>
                  <dd>
                    <CountUp value={s.value} suffix={s.suffix} />
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </section>

        <section id="work" className="section wrap">
          <Reveal className="section-head">
            <h2>Live products</h2>
            <p>Shipped, in production and in the app stores.</p>
          </Reveal>
          <div className="products">
            {products.map((p, i) => (
              <Reveal as="article" key={p.name} className={`product${i % 2 ? " flip" : ""}`}>
                <Tilt className={`pay-card ${cardThemes[i]}`}>
                  <div className="pc-pattern" aria-hidden="true">
                    <Guilloche />
                  </div>
                  <div className="pc-top">
                    <svg className="chip" viewBox="0 0 48 36" aria-hidden="true">
                      <rect x="1" y="1" width="46" height="34" rx="6" />
                      <path d="M1 12h14M1 24h14M33 12h14M33 24h14M15 1v34M33 1v34M15 18h18" />
                    </svg>
                    <span className="pc-stack">{p.stack.join(" / ")}</span>
                  </div>
                  <p className="pc-number" aria-hidden="true">
                    •••• •••• •••• {p.name.length * 1000 + 2026 - i * 7}
                  </p>
                  <div className="pc-bottom">
                    <h3>{p.name}</h3>
                    <span className="pc-tag">{p.tagline}</span>
                  </div>
                  <span className="sheen" aria-hidden="true" />
                </Tilt>
                <div className="product-body">
                  <p className="product-role">{p.role}</p>
                  <p>{p.description}</p>
                  <ul className="links">
                    {p.links.map((l) => (
                      <li key={l.href}>
                        <a href={l.href} target="_blank" rel="noopener noreferrer">
                          {l.label} <Icon name="external" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="services" className="section wrap">
          <Reveal className="section-head">
            <h2>What I build</h2>
            <p>The kinds of work teams bring me in for.</p>
          </Reveal>
          <ul className="services">
            {services.map((s, i) => (
              <Reveal as="li" key={s.title} className="service" delay={i * 60}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <ul className="mini-tags">
                  {s.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ul>
        </section>

        <section className="section wrap" aria-labelledby="process-h">
          <Reveal className="section-head">
            <h2 id="process-h">How I work</h2>
            <p>From the first call to the release after the release.</p>
          </Reveal>
          <ol className="process">
            {process.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 90}>
                <span className="step" aria-hidden="true">
                  {i + 1}
                </span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </Reveal>
            ))}
          </ol>
        </section>

        <section id="experience" className="section wrap">
          <Reveal className="section-head">
            <h2>Experience</h2>
            <p>2017 to today, newest first.</p>
          </Reveal>
          <ol className="timeline">
            {experience.map((r) => (
              <Reveal as="li" key={r.company + r.start} className="t-item">
                <p className="dates">
                  <time>{r.start}</time> – <time>{r.end}</time>
                </p>
                <div className="t-card">
                  <h3>{r.title}</h3>
                  <p className="company">{r.company}</p>
                  <ul>
                    {r.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
            <Reveal as="li" className="t-item t-edu">
              <p className="dates">{education.dates}</p>
              <div className="t-card">
                <h3>{education.degree}</h3>
                <p className="company">{education.school}</p>
              </div>
            </Reveal>
          </ol>
        </section>

        <section id="skills" className="section wrap skills-sec">
          <Reveal className="skills-left">
            <h2>Skills</h2>
            <p className="lede">Choose an area to see the tools I use there every week.</p>
            <SkillTabs groups={skills} />
          </Reveal>
          <Reveal delay={150}>
            <Terminal
              lines={[
                { cmd: "whoami", out: ["Collins Vincent, senior full-stack engineer"] },
                { cmd: "cat focus.txt", out: ["payments / fintech / web + mobile"] },
                { cmd: "ls shipped/", out: ["puplar/   4geehub/   activ8/   +12 client apps"] },
                { cmd: "status", out: ["● available for remote and hybrid roles"] },
              ]}
            />
          </Reveal>
        </section>
      </main>

      <footer id="contact" className="contact">
        <div className="contact-rosette" aria-hidden="true">
          <Guilloche />
        </div>
        <div className="wrap contact-grid">
          <Reveal className="contact-intro">
            <h2>Let’s build something people pay with.</h2>
            <p>Tell me about the role or the product. I usually reply within a day.</p>
            <ul className="contact-list">
              <li>
                <Icon name="mail" />
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <Icon name="whatsapp" />
                <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer">
                  {profile.phone}
                </a>
              </li>
              <li>
                <Icon name="linkedin" />
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/codrexy
                </a>
              </li>
              <li>
                <Icon name="github" />
                <a href={profile.github} target="_blank" rel="noopener noreferrer">
                  github.com/codrexy
                </a>
              </li>
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <ContactForm email={profile.email} whatsapp={profile.whatsapp} />
          </Reveal>
        </div>
        <div className="wrap footer-bottom">
          <p>
            © {new Date().getFullYear()} {profile.fullName}. {profile.location}.
          </p>
          <a href={profile.resume} download>
            Download résumé (PDF)
          </a>
        </div>
      </footer>
      <BackToTop />
    </>
  );
}
