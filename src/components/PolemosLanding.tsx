import { useState, useEffect, type FormEvent } from "react";
import { ArrowRight, Mail, Menu, X } from "lucide-react";
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

      {/* ── NAV ── floating glass pill */}
      <nav className="fixed inset-x-0 top-4 z-50 px-4 md:top-6 md:px-8">
        <div className="mx-auto grid w-full max-w-[1120px] grid-cols-[auto_1fr_auto] items-center gap-4 rounded-full border border-white/15 bg-canvas/60 px-4 py-2.5 shadow-[0_24px_60px_-10px_rgba(0,0,0,0.7),0_0_0_1px_rgba(232,217,199,0.08),0_0_40px_-10px_rgba(232,217,199,0.25)] ring-1 ring-gold/15 backdrop-blur-2xl backdrop-saturate-150 md:px-5 md:py-3">
          <a
            href="#"
            className="justify-self-start inline-flex items-center gap-2.5 pl-2 font-display text-[1.05rem] font-semibold tracking-[0.02em] text-gold md:text-[1.15rem]"
          >
            <span className="relative flex h-2 w-2">
              {/* <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/70 opacity-70" /> */}
              {/* <span className="relative inline-flex h-2 w-2 rounded-full bg-gold shadow-[0_0_12px_rgba(232,217,199,0.9)]" /> */}
            </span>
            POLEMOS LABS
          </a>

          <div className="hidden items-center justify-center gap-8 lg:flex">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-[0.78rem] uppercase tracking-[0.12em] text-warm-muted transition-colors hover:text-warm-text"
              >
                {label}
              </a>
            ))}
          </div>
          <span className="lg:hidden" aria-hidden="true" />

          <a
            href="#contact"
            className="hidden justify-self-end items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-gold-foreground shadow-[0_10px_30px_rgba(232,217,199,0.18)] ring-1 ring-white/30 transition-transform hover:-translate-y-px hover:shadow-[0_14px_36px_rgba(232,217,199,0.26)] lg:inline-flex"
          >
            Get in touch
            <ArrowRight className="h-3.5 w-3.5" />
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            className="justify-self-end rounded-full border border-white/10 bg-white/5 p-2 text-warm-text lg:hidden"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu — sits below the floating nav */}
      {menuOpen && (
        <div className="fixed inset-x-4 top-[88px] z-40 rounded-3xl border border-white/10 bg-surface/80 px-5 py-5 shadow-[0_18px_50px_rgba(0,0,0,0.45)] backdrop-blur-2xl backdrop-saturate-150 md:inset-x-8 md:top-[96px] lg:hidden">
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

      {/* ── HERO ── minimal, centered, ambient line trails */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-32 md:px-16">
        {/* Aurora gradient mesh — drifting blobs blended via screen */}
        <div className="polemos-aurora" aria-hidden="true">
          <div className="polemos-aurora-blob b1" />
          <div className="polemos-aurora-blob b2" />
          <div className="polemos-aurora-blob b3" />
          <div className="polemos-aurora-blob b4" />
          <div className="polemos-aurora-blob b5" />
        </div>

        {/* Soft horizon line and edge vignette */}
        <div className="polemos-horizon" aria-hidden="true" />
        <div className="polemos-vignette" aria-hidden="true" />

        {/* Film grain on top */}
        <div className="polemos-noise absolute inset-0" aria-hidden="true" />

        {/* Centered text + single CTA */}
        <div className={`${SHELL_CLASS} relative z-10 flex flex-col items-center text-center`}>
          <h1 className="t-display t-shimmer max-w-[16ch]">
            AI built for business
          </h1>
          <p className="t-body mt-8 max-w-[56ch] animate-[polemos-fade-up_0.9s_0.5s_forwards] text-warm-muted opacity-0">
            Polemos Labs turns fragmented data, manual review, and tool sprawl into governed systems that sense what matters and route the next move — keeping humans in command.
          </p>
          <a
            href="#contact"
            className="mt-12 inline-flex animate-[polemos-fade-up_0.9s_0.8s_forwards] items-center justify-center gap-3 rounded-full bg-gold px-8 py-4 text-[0.82rem] font-semibold uppercase tracking-[0.12em] text-gold-foreground opacity-0 shadow-[0_18px_40px_-10px_rgba(0,0,0,0.55),0_0_40px_-8px_rgba(232,217,199,0.45)] ring-1 ring-white/30 transition-transform hover:-translate-y-px"
          >
            Get in touch <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className="border-y border-white/7 bg-surface/70 py-[0.9rem] backdrop-blur-xl">
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
        <div className={SHELL_CLASS}>
          <div data-reveal className="polemos-reveal mb-12 text-center">
            <SectionLabel>The problem</SectionLabel>
            <h2 className="t-h2 text-gradient-neutral mx-auto">Command is hard</h2>
            <p className="t-body-sm mx-auto mt-5 max-w-[60ch] text-warm-muted">
              AI fails when it's bolted onto broken process — the hard work is the wiring.
            </p>
          </div>

          <div
            data-reveal
            className="glass-tile polemos-reveal grid grid-cols-2 gap-px border border-white/10 bg-white/7 lg:grid-cols-4"
          >
            {problemStats.map(({ value, label }) => (
              <div key={value} className="box-gradient-neutral p-8 md:p-10">
                <div
                  className="font-display font-bold text-gold"
                  style={{ fontSize: "2.75rem", lineHeight: 1, letterSpacing: "-0.03em" }}
                >
                  {value}
                </div>
                <p className="t-body-sm mt-3 text-warm-muted">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUTCOMES ── */}
      <section id="outcomes" className="bg-canvas px-5 py-28 md:px-16">
        <div className={SHELL_CLASS}>
          <div data-reveal className="polemos-reveal mb-12 text-center">
            <SectionLabel>What deployed looks like</SectionLabel>
            <h2 className="t-h2 text-gradient-neutral mx-auto">What ships</h2>
            <p className="t-body-sm mx-auto mt-5 max-w-[60ch] text-warm-muted">
              What changes after a Polemos system goes live across operations.
            </p>
          </div>

          <div
            data-reveal
            className="glass-tile polemos-reveal grid gap-px border border-white/10 bg-white/7 lg:grid-cols-3"
          >
            {outcomes.map((outcome) => (
              <article
                key={outcome.industry}
                className="group relative overflow-hidden box-gradient-neutral p-8 transition-colors md:p-10"
              >
                <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
                <p className="t-eyebrow text-gold">{outcome.industry}</p>
                <h3 className="t-h3 mt-5 text-warm-text">{outcome.result}</h3>
                <p className="t-body-sm mt-4 text-warm-muted">
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
          <div data-reveal className="polemos-reveal mb-12 text-center">
            <SectionLabel>Implementation accelerators</SectionLabel>
            <h2 className="t-h2 text-gradient-neutral mx-auto">Accelerators</h2>
            <p className="t-body-sm mx-auto mt-5 max-w-[60ch] text-warm-muted">
              Battle-tested foundations adapted to your terrain — deployment in weeks.
            </p>
          </div>

          <div
            data-reveal
            className="glass-tile polemos-reveal grid gap-px border border-white/10 bg-white/7 lg:grid-cols-2"
          >
            {products.map((product) => (
              <article key={product.name} className="box-gradient-neutral p-8 md:p-10">
                <span className="t-label inline-block rounded-full border border-gold/40 px-3 py-[0.3rem] text-gold">
                  {product.tag}
                </span>
                <h3 className="t-h3 mt-5 text-warm-text">{product.name}</h3>
                <p className="t-label mt-2 text-warm-muted">{product.codename}</p>
                <p className="t-body-sm mt-4 text-warm-muted">{product.description}</p>
                <ul className="mt-6 flex flex-col gap-2">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="t-body-sm flex items-baseline gap-3 text-warm-muted"
                    >
                      <span className="shrink-0 text-gold" aria-hidden="true">—</span>
                      <span>{feature}</span>
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
          <div data-reveal className="polemos-reveal mb-12 text-center">
            <SectionLabel>Core services</SectionLabel>
            <h2 className="t-h2 text-gradient-neutral mx-auto">Built to ship</h2>
            <p className="t-body-sm mx-auto mt-5 max-w-[60ch] text-warm-muted">
              AI, software, and systems engineered for the production floor — not the demo deck.
            </p>
          </div>

          <div
            data-reveal
            className="glass-tile polemos-reveal grid border border-white/10 md:grid-cols-2"
          >
            {services.map((service, i) => (
              <article
                key={service.title}
                className={[
                  "box-gradient-neutral p-8 transition-colors md:p-10",
                  i < services.length - 2 || services.length % 2 !== 0
                    ? "border-b border-white/7"
                    : "",
                  i % 2 === 0 ? "md:border-r md:border-white/7" : "",
                ].join(" ")}
              >
                <p className="t-eyebrow text-gold">{service.problem}</p>
                <h3 className="t-h3 mt-5 text-warm-text">{service.title}</h3>
                <p className="t-body-sm mt-4 text-warm-muted">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" className="bg-surface px-5 py-28 md:px-16">
        <div className={SHELL_CLASS}>
          <div data-reveal className="polemos-reveal mb-12 text-center">
            <SectionLabel>How we work</SectionLabel>
            <h2 className="t-h2 text-gradient-neutral mx-auto">Validate before scale</h2>
            <p className="t-body-sm mx-auto mt-5 max-w-[60ch] text-warm-muted">
              We deploy what proves useful and retire what doesn't.
            </p>
          </div>

          <div
            data-reveal
            className="glass-tile polemos-reveal grid gap-px border border-white/10 bg-white/7 md:grid-cols-2 xl:grid-cols-4"
          >
            {processSteps.map((step) => (
              <article key={step.number} className="box-gradient-neutral p-8 md:p-10">
                <p className="t-eyebrow text-gold">{step.number}</p>
                <h3 className="t-h3 mt-5 text-warm-text">{step.title}</h3>
                <p className="t-label mt-2 text-warm-muted">{step.duration}</p>
                <p className="t-body-sm mt-4 text-warm-muted">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE WORK WITH ── */}
      <section className="border-y border-white/7 bg-canvas px-5 py-28 md:px-16">
        <div className={SHELL_CLASS}>
          <div data-reveal className="polemos-reveal mb-12 text-center">
            <SectionLabel>Who we work with</SectionLabel>
            <h2 className="t-h2 text-gradient-neutral mx-auto">Real stakes only</h2>
            <p className="t-body-sm mx-auto mt-5 max-w-[60ch] text-warm-muted">
              Painful workflow, proprietary data, mandate to ship — that's the fit.
            </p>
          </div>

          <ul
            data-reveal
            className="glass-tile polemos-reveal mx-auto max-w-[840px] border border-white/10 bg-white/[0.04]"
          >
            {fitItems.map((segments, i) => (
              <li
                key={i}
                className={`flex items-baseline gap-4 px-7 py-[1.4rem] text-[0.9rem] leading-[1.5] text-warm-muted ${i < fitItems.length - 1 ? "border-b border-white/7" : ""
                  }`}
              >
                <span className="shrink-0 text-[0.9rem] leading-[1.5] text-gold" aria-hidden="true">
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
          <div data-reveal className="polemos-reveal mb-12 text-center">
            <SectionLabel>Ready to take command?</SectionLabel>
            <h2 className="t-h2 text-gradient-neutral mx-auto">Take command</h2>
            <p className="t-body-sm mx-auto mt-5 max-w-[60ch] text-warm-muted">
              Tell us where work is slow, risky, or stuck — we'll figure out the right move.
            </p>
          </div>

          {/* Two-column layout */}
          <div
            data-reveal
            className="glass-tile polemos-reveal grid gap-px border border-white/10 bg-white/7 lg:grid-cols-[1.3fr_1fr]"
          >
            {/* Left — Form */}
            <div className="box-gradient-neutral p-10 md:p-12">
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
                      className="rounded-2xl border border-white/10 bg-surface-raised/70 px-4 py-3 text-[0.85rem] text-warm-text outline-none backdrop-blur-md transition-colors placeholder:text-warm-muted focus:border-gold/50"
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
                      className="rounded-2xl border border-white/10 bg-surface-raised/70 px-4 py-3 text-[0.85rem] text-warm-text outline-none backdrop-blur-md transition-colors placeholder:text-warm-muted focus:border-gold/50"
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
                      className="rounded-2xl border border-white/10 bg-surface-raised/70 px-4 py-3 text-[0.85rem] text-warm-text outline-none backdrop-blur-md transition-colors placeholder:text-warm-muted focus:border-gold/50"
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
                      className="rounded-2xl border border-white/10 bg-surface-raised/70 px-4 py-3 text-[0.85rem] text-warm-text outline-none backdrop-blur-md transition-colors placeholder:text-warm-muted focus:border-gold/50"
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
                    className="min-h-[120px] resize-y rounded-2xl border border-white/10 bg-surface-raised/70 px-4 py-3 text-[0.85rem] text-warm-text outline-none backdrop-blur-md transition-colors placeholder:text-warm-muted focus:border-gold/50"
                  />
                </div>
                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="mt-1 w-full rounded-full bg-gold py-4 text-[0.82rem] font-semibold uppercase tracking-[0.12em] text-gold-foreground shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition-opacity hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-55"
                >
                  {formStatus === "submitting" ? "Sending..." : "Brief the lab"}
                </button>
                {formMessage && (
                  <p
                    aria-live="polite"
                    className={`text-[0.82rem] leading-[1.6] ${formStatus === "success" ? "text-gold" : "text-warm-muted"
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
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
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
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
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
              <div className="box-gradient-neutral rounded-3xl border border-white/10 p-8">
                <p className="t-eyebrow text-gold">What to expect</p>
                <p className="t-body-sm mt-4 text-warm-muted">
                  We'll reply within 48 hours and set up a{" "}
                  <span className="text-warm-text">30-minute video call</span> to walk through fit, data, and what to ship first.
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
