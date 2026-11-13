"use client";

import { useEffect, useRef, useState, type ReactNode, type FormEvent } from "react";

const reduced = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Fixed header: scroll progress, active section, mobile menu */
export function Header({ links }: { links: { href: string; label: string }[] }) {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? h.scrollTop / max : 0);
      setScrolled(h.scrollTop > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, [links]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <div className="header-inner wrap">
        <a href="#top" className="mark" aria-label="Collins Vincent, back to top" onClick={() => setOpen(false)}>
          <span className="mark-seal" aria-hidden="true">CV</span>
          <span className="mark-name">Collins Vincent</span>
        </a>
        <nav id="site-nav" aria-label="Sections">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={active === l.href ? "true" : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
            Hire me
          </a>
        </nav>
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}

/* Reveal children when they scroll into view */
export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  as?: "div" | "section" | "li" | "article";
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced()) return setShown(true);
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag
      ref={ref as any}
      className={`reveal ${shown ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* Number that counts up once visible */
export function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(value);
  useEffect(() => {
    const el = ref.current;
    if (!el || reduced()) return;
    setN(0);
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const dur = 1400;
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / dur);
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

/* Card that tilts toward the pointer and moves a holographic sheen */
export function Tilt({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || reduced() || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", `${(0.5 - y) * 10}deg`);
    el.style.setProperty("--ry", `${(x - 0.5) * 14}deg`);
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
  };
  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };
  return (
    <div ref={ref} className={`tilt ${className}`} onPointerMove={onMove} onPointerLeave={reset}>
      {children}
    </div>
  );
}

/* Skills with filter tabs */
export function SkillTabs({ groups }: { groups: { group: string; items: string[] }[] }) {
  const [i, setI] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const onKey = (e: React.KeyboardEvent) => {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    const next = (i + dir + groups.length) % groups.length;
    setI(next);
    tabs.current[next]?.focus();
  };
  return (
    <div className="skill-tabs">
      <div role="tablist" aria-label="Skill areas" className="tablist" onKeyDown={onKey}>
        {groups.map((g, k) => (
          <button
            key={g.group}
            ref={(el) => {
              tabs.current[k] = el;
            }}
            role="tab"
            id={`tab-${k}`}
            aria-selected={i === k}
            aria-controls={`panel-${k}`}
            tabIndex={i === k ? 0 : -1}
            onClick={() => setI(k)}
          >
            {g.group}
          </button>
        ))}
      </div>
      {groups.map((g, k) => (
        <ul
          key={g.group}
          role="tabpanel"
          id={`panel-${k}`}
          aria-labelledby={`tab-${k}`}
          hidden={i !== k}
          className="chips"
        >
          {g.items.map((s, j) => (
            <li key={s} style={{ animationDelay: `${j * 45}ms` }}>
              {s}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

/* Terminal that types its lines once visible */
export function Terminal({ lines }: { lines: { cmd: string; out: string[] }[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const total = lines.reduce((a, l) => a + l.cmd.length, 0);
  const [typed, setTyped] = useState(total);
  useEffect(() => {
    const el = ref.current;
    if (!el || reduced()) return;
    setTyped(0);
    let id: ReturnType<typeof setInterval>;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      id = setInterval(() => {
        setTyped((t) => {
          if (t >= total) clearInterval(id);
          return t + 1;
        });
      }, 38);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      clearInterval(id);
    };
  }, [total]);

  let budget = typed;
  return (
    <div className="terminal" ref={ref}>
      <div className="term-bar" aria-hidden="true">
        <span />
        <span />
        <span />
        <p>collins@portfolio: ~</p>
      </div>
      <div className="term-body" aria-label="Terminal summary">
        {lines.map((l, k) => {
          const show = Math.max(0, Math.min(l.cmd.length, budget));
          const done = budget >= l.cmd.length;
          budget -= l.cmd.length;
          if (show === 0 && !done && k > 0) return null;
          return (
            <div key={k}>
              <p className="cmd">
                <span className="prompt">$</span> {l.cmd.slice(0, show)}
                {!done && <span className="caret" aria-hidden="true" />}
              </p>
              {done && l.out.map((o) => <p key={o} className="out">{o}</p>)}
            </div>
          );
        })}
        {typed >= total && (
          <p className="cmd">
            <span className="prompt">$</span> <span className="caret" aria-hidden="true" />
          </p>
        )}
      </div>
    </div>
  );
}

/* Contact form: opens WhatsApp or email with the message filled in */
export function ContactForm({ email, whatsapp }: { email: string; whatsapp: string }) {
  const [status, setStatus] = useState("");
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const via = (e.nativeEvent as SubmitEvent).submitter?.getAttribute("value") ?? "email";
    const name = String(data.get("name") ?? "").trim();
    const kind = String(data.get("kind") ?? "");
    const message = String(data.get("message") ?? "").trim();
    if (!name || !message) {
      setStatus("Add your name and a message, then send again.");
      return;
    }
    const text = `Hi Collins, I'm ${name}.${kind ? ` I'm reaching out about: ${kind}.` : ""}\n\n${message}`;
    if (via === "whatsapp") {
      window.open(`${whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
      setStatus("WhatsApp opened in a new tab with your message.");
    } else {
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(
        kind ? `${kind} — from ${name}` : `Hello from ${name}`,
      )}&body=${encodeURIComponent(text)}`;
      setStatus("Your email app opened with the message ready to send.");
    }
  };
  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <label>
        Your name
        <input name="name" autoComplete="name" required />
      </label>
      <label>
        What it’s about
        <select name="kind" defaultValue="">
          <option value="">Choose one</option>
          <option>Full-time role</option>
          <option>Contract or freelance project</option>
          <option>Payment or fintech product</option>
          <option>Mobile app</option>
          <option>Something else</option>
        </select>
      </label>
      <label className="full">
        Message
        <textarea name="message" rows={5} required placeholder="Tell me about the product, team and timeline." />
      </label>
      <div className="form-actions full">
        <button type="submit" value="whatsapp" className="btn btn-holo">
          Send on WhatsApp
        </button>
        <button type="submit" value="email" className="btn btn-ghost">
          Send by email
        </button>
      </div>
      <p className="form-status full" role="status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 900);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <a href="#top" className={`to-top${show ? " is-shown" : ""}`} aria-label="Back to top" tabIndex={show ? 0 : -1}>
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}
