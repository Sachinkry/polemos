import { useState, useEffect, type FormEvent } from "react";
import { Menu, X, Mail } from "lucide-react";
import Footer from "./Footer";
import SectionLabel from "./SectionLabel";
import XLogo from "./XLogo";
import { useCustomCursor } from "@/hooks/useCustomCursor";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  tickerItems,
  outcomes,
  products,
  services,
  processSteps,
  fitItems,
  problemStats,
  navLinks,
  type TextSegment,
} from "@/lib/content";

/** Renders a mix of plain and bold text segments from structured data. */
const RichText = ({ segments }: { segments: TextSegment[] }) => (
  <>
    {segments.map((seg, i) =>
      seg.bold ? (
        <strong key={i} className="font-medium text-warm-text">
          {seg.text}
        </strong>
      ) : (
        seg.text
      ),
    )}
  </>
);

const SHELL_CLASS = "mx-auto w-full max-w-[960px] xl:max-w-[1040px] 2xl:max-w-[1120px]";
type ContactFormStatus = "idle" | "submitting" | "success" | "error";

const FREE_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "ymail.com",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "aol.com",
  "proton.me",
  "protonmail.com",
  "pm.me",
  "zoho.com",
  "mail.com",
  "gmx.com",
  "gmx.net",
  "hey.com",
]);

const isCompanyEmail = (email: string) => {
  const domain = email.split("@").at(1)?.toLowerCase();
  return Boolean(domain && !FREE_EMAIL_DOMAINS.has(domain));
};

const PolemosLanding = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<ContactFormStatus>("idle");
  const [formMessage, setFormMessage] = useState("");
  const { cursorRef, ringRef } = useCustomCursor();
  useScrollReveal();

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormMessage("");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    const email = String(payload.email ?? "").trim();

    if (!isCompanyEmail(email)) {
      setFormStatus("error");
      setFormMessage("Please use your company email address.");
      return;
    }

    setFormStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const responseBody = (await response.json().catch(() => ({}))) as { error?: string };
        throw new Error(responseBody.error ?? "Contact request failed");
      }

      form.reset();
      setFormStatus("success");
      setFormMessage("Message sent. We'll review it and get back to you.");
    } catch (error) {
      setFormStatus("error");
      setFormMessage(
        error instanceof Error && error.message !== "Failed to fetch"
          ? error.message
          : "Something went wrong. Please email hello@polemos.in directly.",
      );
    }
  };

  // Close mobile menu on hash navigation
  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <main className="polemos-page min-h-screen bg-canvas text-warm-text">
      {/* Custom cursor */}
      <div ref={cursorRef} aria-hidden="true" className="polemos-cursor hidden md:block" />
      <div ref={ringRef} aria-hidden="true" className="polemos-cursor-ring hidden md:block" />

      {/* ── NAV ── */}
      <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-white/7 bg-canvas/85 px-5 py-5 backdrop-blur-xl md:px-16 md:py-6">
        <a
          href="#"
          className="font-serif text-[1.3rem] font-semibold tracking-[0.05em] text-gold"
        >
          POLEMOS LABS
        </a>

        <div className="hidden items-center gap-10 lg:flex">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-[0.8rem] uppercase tracking-[0.12em] text-warm-muted transition-colors hover:text-warm-text"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="border border-gold/40 px-5 py-2 text-[0.8rem] uppercase tracking-[0.1em] text-gold transition-colors hover:bg-gold/12"
          >
            Get in touch
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          className="text-warm-text lg:hidden"
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu — top offset matches nav height (py-6 * 2 + content) */}
      {menuOpen && (
        <div className="fixed inset-x-0 top-[73px] z-40 border-t border-white/7 bg-surface px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {[...navLinks, { label: "Start the conversation", href: "#contact" }].map(
              ({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm uppercase tracking-[0.12em] text-gold"
                >
                  {label}
                </a>
              ),
            )}
          </div>
        </div>
      )}

      {/* ── HERO ── */}
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-5 pt-24 pb-16 md:justify-end md:px-16 md:pb-20">
        <div className="polemos-grid absolute inset-0" />
        <div className="polemos-noise absolute inset-0" />

        {/* Rotating compass / radar pattern */}
        <div
          className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-[0.08]"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 1000 1000"
            className="h-auto w-[160vw] animate-[spin_120s_linear_infinite] md:w-[90vw]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="500" cy="500" r="150" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
            <circle cx="500" cy="500" r="280" stroke="currentColor" strokeWidth="1" />
            <circle cx="500" cy="500" r="400" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
            <circle cx="500" cy="500" r="480" stroke="currentColor" strokeWidth="1" />
            <line x1="0" y1="500" x2="1000" y2="500" stroke="currentColor" strokeWidth="1" />
            <line x1="500" y1="0" x2="500" y2="1000" stroke="currentColor" strokeWidth="1" />
            <line x1="146" y1="146" x2="854" y2="854" stroke="currentColor" strokeWidth="1" opacity="0.5" strokeDasharray="4 4" />
            <line x1="146" y1="854" x2="854" y2="146" stroke="currentColor" strokeWidth="1" opacity="0.5" strokeDasharray="4 4" />
            <circle cx="500" cy="20" r="4" fill="currentColor" />
            <circle cx="500" cy="980" r="4" fill="currentColor" />
            <circle cx="20" cy="500" r="4" fill="currentColor" />
            <circle cx="980" cy="500" r="4" fill="currentColor" />
            <circle cx="650" cy="500" r="6" fill="currentColor" />
            <circle cx="500" cy="220" r="8" fill="currentColor" opacity="0.5" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[900px]">
          <p className="animate-[polemos-fade-up_0.8s_0.2s_forwards]  font-mono text-[0.7rem] tracking-[0.15em] text-gold opacity-0">
            ENTERPRISE AI 
          </p>
          <h1 className="mt-8 animate-[polemos-fade-up_0.9s_0.4s_forwards] font-serif text-[clamp(3rem,5vw,5.5rem)] font-semibold leading-[1.05] tracking-[-0.02em] opacity-0">
            Turn messy workflows into AI systems your team can actually <em className="font-serif italic text-gold">use.</em>
          </h1>
          <p className="mt-10 max-w-[520px] animate-[polemos-fade-up_0.9s_0.6s_forwards] text-[1.05rem] leading-[1.7] text-warm-muted opacity-0">
            We help enterprise teams automate operational workflows, build ingestion and retrieval systems, deploy AI agents, and run open-source models securely in production.
          </p>
          <div className="mt-12 flex animate-[polemos-fade-up_0.9s_0.8s_forwards] flex-col gap-4 opacity-0 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-gold px-8 py-[1.2rem] text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-gold-foreground transition-opacity hover:opacity-85"
            >
              Fix a workflow
            </a>
            <a
              href="#outcomes"
              className="inline-flex items-center gap-2 text-[0.8rem] uppercase tracking-[0.1em] text-warm-muted transition-colors hover:text-warm-text"
            >
              See the work →
            </a>
          </div>
        </div>

        {/* Hero quote — bottom-right on large screens */}
        <div className="absolute bottom-20 right-16 hidden text-right xl:block" aria-hidden="true">
          <div className="animate-[polemos-fade-up_0.9s_1s_forwards] opacity-0">
            <p className="max-w-[240px] font-serif text-[1rem] italic leading-[1.6] text-warm-muted">
              "Polemos is the father of all things."
            </p>
            <cite className="mt-2 block font-mono text-[0.65rem] not-italic tracking-[0.1em] text-gold">
              — Heraclitus
            </cite>
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className="border-y border-white/7 bg-surface py-[0.9rem]">
        <div className="polemos-ticker">
          <div className="polemos-ticker-track">
            {/* Doubled for seamless loop */}
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span
                key={i}
                className={
                  item.accent
                    ? "px-12 font-mono text-[0.72rem] tracking-[0.08em] text-gold"
                    : "px-12 font-mono text-[0.72rem] tracking-[0.08em] text-warm-muted"
                }
              >
                {item.text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── PROBLEM ── */}
      <section className="bg-surface px-5 py-28 md:px-16">
        <div className={`${SHELL_CLASS} grid gap-24 lg:grid-cols-2 lg:items-center`}>
          <div data-reveal className="polemos-reveal">
            <SectionLabel>The problem</SectionLabel>
            <h2 className="font-serif text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
              AI pilots are easy.
              <br />
              <em className="italic text-gold">Operational change is not.</em>
            </h2>
            <p className="mt-6 text-[1rem] leading-[1.8] text-warm-muted">
              Enterprise AI fails when it is treated like a chatbot project. The hard work is connecting messy systems, enforcing permissions, validating outputs, and fitting automation into the way your teams already work.
            </p>
          </div>

          <div
            data-reveal
            className="polemos-reveal grid grid-cols-2 gap-px border border-white/7 bg-white/7"
          >
            {problemStats.map(({ value, label }) => (
              <div key={value} className="bg-surface-raised p-[1.8rem]">
                <div className="font-serif text-[3rem] font-bold leading-none text-gold">
                  {value}
                </div>
                <p className="mt-[0.4rem] text-[0.8rem] leading-[1.5] text-warm-muted">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUTCOMES ── */}
      <section id="outcomes" className="bg-canvas px-5 py-28 md:px-16">
        <div className={SHELL_CLASS}>
          <div data-reveal className="polemos-reveal mb-16">
            <SectionLabel>What deployed looks like</SectionLabel>
            <h2 className="max-w-[480px] font-serif text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
              Less manual drag.
              <br />
              <em className="italic text-gold">More operational leverage.</em>
            </h2>
          </div>

          <div
            data-reveal
            className="polemos-reveal grid gap-px border border-white/7 bg-white/7 lg:grid-cols-3"
          >
            {outcomes.map((outcome) => (
              <article
                key={outcome.industry}
                className="group relative overflow-hidden bg-surface p-10 transition-colors hover:bg-surface-raised"
              >
                <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-gold">
                  {outcome.industry}
                </p>
                <h3 className="mt-5 font-serif text-[1.9rem] font-semibold leading-[1.15] tracking-[-0.02em] text-warm-text">
                  {outcome.result}
                </h3>
                <p className="mt-5 text-[0.9rem] leading-[1.75] text-warm-muted">
                  <strong className="font-medium text-warm-text">{outcome.highlight}</strong>{" "}
                  {outcome.story}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section id="products" className="bg-surface px-5 py-28 md:px-16">
        <div className={SHELL_CLASS}>
          <div data-reveal className="polemos-reveal mb-16">
            <SectionLabel>Implementation accelerators</SectionLabel>
            <h2 className="font-serif text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
              Reusable foundations.
              <br />
              <em className="italic text-gold">Customized for your environment.</em>
            </h2>
          </div>

          <div
            data-reveal
            className="polemos-reveal grid gap-px border border-white/7 bg-white/7 lg:grid-cols-2"
          >
            {products.map((product) => (
              <article key={product.name} className="bg-canvas p-12">
                <span className="inline-block border border-gold/40 px-3 py-[0.3rem] font-mono text-[0.6rem] uppercase tracking-[0.2em] text-gold">
                  {product.tag}
                </span>
                <h3 className="mt-8 font-serif text-[2.4rem] font-bold leading-none tracking-[-0.02em]">
                  {product.name}
                </h3>
                <p className="mt-[0.4rem] font-mono text-[0.7rem] tracking-[0.1em] text-warm-muted">
                  {product.codename}
                </p>
                <p className="mt-[1.8rem] text-[0.95rem] leading-[1.8] text-warm-muted">
                  {product.description}
                </p>
                <ul className="mt-8 flex flex-col gap-2">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="relative pl-5 text-[0.82rem] leading-[1.75] text-warm-muted"
                    >
                      <span className="absolute left-0 top-0 text-[0.7rem] text-gold" aria-hidden="true">
                        —
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="bg-canvas px-5 py-28 md:px-16">
        <div className={SHELL_CLASS}>
          <div data-reveal className="polemos-reveal mb-16">
            <SectionLabel>Core services</SectionLabel>
            <h2 className="font-serif text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
              Focused capabilities.
              <br />
              <em className="italic text-gold">Built around deployment.</em>
            </h2>
          </div>

          <div
            data-reveal
            className="polemos-reveal grid border border-white/7 md:grid-cols-2"
          >
            {services.map((service, i) => (
              <article
                key={service.title}
                className={[
                  "bg-canvas p-10 transition-colors hover:bg-surface",
                  i < services.length - 2 || services.length % 2 !== 0
                    ? "border-b border-white/7"
                    : "",
                  i % 2 === 0 ? "md:border-r md:border-white/7" : "",
                ].join(" ")}
              >
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-gold">
                  {service.problem}
                </p>
                <h3 className="mt-4 font-serif text-[1.5rem] font-semibold leading-[1.2] tracking-[-0.02em]">
                  {service.title}
                </h3>
                <p className="mt-3 text-[0.88rem] leading-[1.75] text-warm-muted">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" className="bg-surface px-5 py-28 md:px-16">
        <div className={SHELL_CLASS}>
          <div data-reveal className="polemos-reveal mb-16">
            <SectionLabel>How we work</SectionLabel>
            <h2 className="font-serif text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
              Start narrow.
              <br />
              <em className="italic text-gold">Scale what proves useful.</em>
            </h2>
          </div>

          <div
            data-reveal
            className="polemos-reveal grid gap-px border border-white/7 bg-white/7 md:grid-cols-2 xl:grid-cols-4"
          >
            {processSteps.map((step) => (
              <article key={step.number} className="bg-canvas p-10 md:p-8">
                <p className="font-mono text-[0.6rem] tracking-[0.2em] text-gold">
                  {step.number}
                </p>
                <h3 className="mt-6 font-serif text-[1.6rem] font-semibold tracking-[-0.02em]">
                  {step.title}
                </h3>
                <p className="mt-2 font-mono text-[0.65rem] tracking-[0.08em] text-warm-muted">
                  {step.duration}
                </p>
                <p className="mt-5 text-[0.85rem] leading-[1.75] text-warm-muted">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE WORK WITH ── */}
      <section className="border-y border-white/7 bg-canvas px-5 py-28 md:px-16">
        <div
          data-reveal
          className={`polemos-reveal ${SHELL_CLASS} grid gap-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-start`}
        >
          <div>
            <SectionLabel>Who we work with</SectionLabel>
            <h2 className="font-serif text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
              Best for teams with
              <br />
              <em className="italic text-gold">real operational friction.</em>
            </h2>
            <p className="mt-6 text-[0.95rem] leading-[1.8] text-warm-muted">
              We are not trying to be a general AI agency. We work best when there is a painful workflow, valuable proprietary data, and a clear path to deploying into production.
            </p>
          </div>

          <ul className="border border-white/7">
            {fitItems.map((segments, i) => (
              <li
                key={i}
                className={`flex items-start gap-4 px-7 py-[1.4rem] text-[0.9rem] leading-[1.5] text-warm-muted ${
                  i < fitItems.length - 1 ? "border-b border-white/7" : ""
                }`}
              >
                <span className="mt-[0.15rem] shrink-0 font-mono text-[0.65rem] tracking-[0.08em] text-gold" aria-hidden="true">
                  —
                </span>
                <span>
                  <RichText segments={segments} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA / CONTACT ── */}
      <section id="contact" className="relative overflow-hidden bg-surface px-5 py-28 md:px-16">
        <div className="polemos-cta-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className={`relative z-10 ${SHELL_CLASS}`}>

          {/* Header */}
          <div data-reveal className="polemos-reveal mb-16">
            <SectionLabel>Ready for practical AI?</SectionLabel>
            <h2 className="font-serif text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
              Turn AI into
              <br />
              operational <em className="italic text-gold">leverage.</em>
            </h2>
            <p className="mt-6 max-w-[560px] text-[1rem] leading-[1.8] text-warm-muted">
              Let's discuss where practical AI can remove manual work, improve your operations, and create measurable business value.
            </p>
          </div>

          {/* Two-column layout */}
          <div
            data-reveal
            className="polemos-reveal grid gap-px border border-white/7 bg-white/7 lg:grid-cols-[1.3fr_1fr]"
          >
            {/* Left — Form */}
            <div className="bg-surface p-10 md:p-12">
              <form className="flex flex-col gap-5" onSubmit={handleContactSubmit}>
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[0.6rem] uppercase tracking-[0.15em] text-warm-muted">
                      Name <span className="text-gold" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Smith"
                      maxLength={120}
                      required
                      className="border border-white/10 bg-surface-raised px-4 py-3 text-[0.85rem] text-warm-text outline-none transition-colors placeholder:text-warm-muted focus:border-gold/50"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[0.6rem] uppercase tracking-[0.15em] text-warm-muted">
                      Work Email <span className="text-gold" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      maxLength={254}
                      title="Please use your company email address."
                      required
                      className="border border-white/10 bg-surface-raised px-4 py-3 text-[0.85rem] text-warm-text outline-none transition-colors placeholder:text-warm-muted focus:border-gold/50"
                    />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[0.6rem] uppercase tracking-[0.15em] text-warm-muted">
                      Organization
                    </label>
                    <input
                      type="text"
                      name="organization"
                      placeholder="Company Name"
                      maxLength={160}
                      className="border border-white/10 bg-surface-raised px-4 py-3 text-[0.85rem] text-warm-text outline-none transition-colors placeholder:text-warm-muted focus:border-gold/50"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[0.6rem] uppercase tracking-[0.15em] text-warm-muted">
                      Timeline
                    </label>
                    <input
                      type="text"
                      name="timeline"
                      placeholder="e.g. Q3 2026"
                      maxLength={120}
                      className="border border-white/10 bg-surface-raised px-4 py-3 text-[0.85rem] text-warm-text outline-none transition-colors placeholder:text-warm-muted focus:border-gold/50"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[0.6rem] uppercase tracking-[0.15em] text-warm-muted">
                    What should stop being manual?{" "}
                    <span className="text-gold" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <textarea
                    name="message"
                    placeholder="Example: We review 2,000 vendor documents a month and need extraction, validation, approval routing, and audit logs."
                    maxLength={3000}
                    required
                    className="min-h-[120px] resize-y border border-white/10 bg-surface-raised px-4 py-3 text-[0.85rem] text-warm-text outline-none transition-colors placeholder:text-warm-muted focus:border-gold/50"
                  />
                  <p className="text-[0.75rem] leading-[1.6] text-warm-muted">
                    Please don't include passwords, API keys, private customer data, or regulated data.
                  </p>
                </div>
                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="mt-1 w-full bg-gold py-4 text-[0.82rem] font-semibold uppercase tracking-[0.12em] text-gold-foreground transition-opacity hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-55"
                >
                  {formStatus === "submitting" ? "Sending..." : "Send it →"}
                </button>
                {formMessage && (
                  <p
                    aria-live="polite"
                    className={`text-[0.82rem] leading-[1.6] ${
                      formStatus === "success" ? "text-gold" : "text-warm-muted"
                    }`}
                  >
                    {formMessage}
                  </p>
                )}
              </form>
            </div>

            {/* Right — Contact info + proof card */}
            <div className="flex flex-col justify-between gap-12 bg-canvas p-10 md:p-12">
              <div>
                <p className="mb-8 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-warm-muted">
                  Contact
                </p>
                <div className="space-y-7">
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-gold/30 text-gold">
                      <Mail className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <p className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-warm-muted">
                        Email
                      </p>
                      <a
                        href="mailto:hello@polemos.in"
                        className="mt-1 block text-[0.88rem] text-warm-text transition-colors hover:text-gold"
                      >
                        hello@polemos.in
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-gold/30 text-gold">
                      <XLogo className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <p className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-warm-muted">
                        Social
                      </p>
                      <a
                        href="https://x.com/polemos_labs"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 block text-[0.88rem] text-warm-text transition-colors hover:text-gold"
                      >
                        @polemos_labs
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Proof card */}
              <div className="border border-white/7 p-7">
                <p className="mb-3 font-mono text-[0.6rem] uppercase tracking-[0.15em] text-gold">
                  What to expect
                </p>
                <p className="text-[0.88rem] leading-[1.75] text-warm-muted">
                  We'll respond with a practical read: whether AI is the right tool, what data and integrations matter, and what a first deployable automation could look like.{" "}
                  <span className="text-warm-text">No generic transformation deck.</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PolemosLanding;
