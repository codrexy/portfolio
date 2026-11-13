import Guilloche from "./Guilloche";
import JsonLd from "./JsonLd";
import { education, experience, products, profile, skills, stats } from "./data";

export default function Home() {
  return (
    <>
      <JsonLd />
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header className="nav wrap">
        <a href="#top" className="mark" aria-label="Collins Vincent, back to top">
          CV
        </a>
        <nav aria-label="Sections">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="main">
        <section id="top" className="hero wrap">
          <div className="hero-text">
            <h1>{profile.name}</h1>
            <p className="hero-role">
              {profile.role} in {profile.location}
            </p>
            <p className="hero-summary">{profile.summary}</p>
            <div className="actions">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                Email me
              </a>
              <a className="btn" href={profile.resume} download>
                Download résumé
              </a>
            </div>
          </div>
          <div className="hero-art">
            <Guilloche />
          </div>
        </section>

        <section className="wrap" aria-label="At a glance">
          <dl className="stats">
            {stats.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="work" className="wrap section">
          <h2>Live products</h2>
          <p className="lede">Products in the hands of real users, on the web and in the app stores.</p>
          <div className="products">
            {products.map((p) => (
              <article key={p.name} className="product">
                <div className="product-head">
                  <h3>{p.name}</h3>
                  <p className="tagline">{p.tagline}</p>
                  <ul className="stack" aria-label="Built with">
                    {p.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
                <div className="product-body">
                  <p className="product-role">{p.role}</p>
                  <p>{p.description}</p>
                  <ul className="links">
                    {p.links.map((l) => (
                      <li key={l.href}>
                        <a href={l.href} target="_blank" rel="noopener noreferrer">
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="wrap section">
          <h2>Experience</h2>
          <ol className="ledger">
            {experience.map((r) => (
              <li key={r.company + r.start} className="entry">
                <p className="dates">
                  <time>{r.start}</time>
                  <span aria-hidden="true"> – </span>
                  <span className="sr-only"> to </span>
                  <time>{r.end}</time>
                </p>
                <div>
                  <h3>{r.title}</h3>
                  <p className="company">{r.company}</p>
                  <ul>
                    {r.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
          <div className="entry education">
            <p className="dates">{education.dates}</p>
            <div>
              <h3>{education.degree}</h3>
              <p className="company">{education.school}</p>
            </div>
          </div>
        </section>

        <section id="skills" className="wrap section">
          <h2>Skills</h2>
          <div className="skills">
            {skills.map((s) => (
              <div key={s.group}>
                <h3>{s.group}</h3>
                <p>{s.items.join(", ")}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="contact">
        <div className="wrap">
          <h2>Let’s build something people pay with</h2>
          <p>{profile.availability}. The fastest way to reach me is email.</p>
          <a className="email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <ul className="social">
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={profile.resume} download>
                Résumé (PDF)
              </a>
            </li>
          </ul>
          <p className="fine">© {new Date().getFullYear()} {profile.fullName}</p>
        </div>
      </footer>
    </>
  );
}
