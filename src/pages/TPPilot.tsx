import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BarChart3, FileText, Layers, Mail, Scale } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import { applyHead } from "@/lib/head";
import { useCustomCursor } from "@/hooks/useCustomCursor";

const workflows = [
  {
    icon: FileText,
    title: "Form 3CEB / Form 48 drafting",
    body: "FAR templates, comparables shortlisted from Capitaline / Prowess, safe-harbour margins under Rule 10TD.",
    metric: "First draft in 20 minutes, not a day.",
  },
  {
    icon: Scale,
    title: "ITAT / DRP research & memos",
    body: "Cited tribunal orders retrieved, argument structure mapped, a first-draft submission in under an hour.",
    metric: "60–70% less senior research time.",
  },
  {
    icon: BarChart3,
    title: "Comparables benchmarking",
    body: "Automated shortlisting against your FAR profile, ALP calculation, and Rule 10TD eligibility flagged.",
    metric: "Defensible set, fully traceable.",
  },
  {
    icon: Layers,
    title: "Local / Master File & CbCR",
    body: "BEPS Action 13 templates auto-populated from entity data, with Pillar Two GloBE mapping for MNC mandates.",
    metric: "Assembled, not retyped.",
  },
];

const pilotSteps = [
  {
    step: "01",
    title: "Pick the bottleneck",
    body: "One real task from whichever workflow hurts most. Anonymised inputs are fine — no client names or sensitive data.",
  },
  {
    step: "02",
    title: "We run the system",
    body: "We handle all setup entirely. No internal project or process change required from your team.",
  },
  {
    step: "03",
    title: "You review the output",
    body: "Structured draft, citations, comparables — ready for senior review, not raw AI output.",
  },
  {
    step: "04",
    title: "Give us feedback",
    body: "That's all we ask at the end of the week. No obligation, no contract, no procurement.",
  },
];

const timeline = [
  { phase: "Day 1", label: "Kickoff & task definition" },
  { phase: "Days 2–5", label: "System setup & ingestion" },
  { phase: "Days 6–7", label: "Live output, review & feedback" },
];

const Divider = () => <div className="my-7 h-px w-full bg-white/8" />;

const TPPilot = () => {
  const { cursorRef, ringRef } = useCustomCursor();

  useEffect(() => {
    applyHead({
      title: "Free One-Week Transfer Pricing Pilot · Polemos Labs",
      description:
        "AI systems that draft Form 3CEB, ITAT/DRP memos, comparables benchmarking, and BEPS Action 13 documentation for transfer pricing teams. Run a free one-week pilot — no cost, no commitment.",
      canonical: "https://polemos.in/tp-pilot",
      ogImage: "https://polemos.in/og-image.png",
      ogType: "website",
    });
    document.documentElement.classList.add("tp-pilot-page");
    return () => document.documentElement.classList.remove("tp-pilot-page");
  }, []);

  return (
    <main className="polemos-page relative overflow-hidden bg-canvas px-0 py-0 text-warm-text md:px-6 md:py-16">
      <div ref={cursorRef} aria-hidden="true" className="polemos-cursor hidden lg:block" />
      <div ref={ringRef} aria-hidden="true" className="polemos-cursor-ring hidden lg:block" />

      {/* Ambient background */}
      <div className="polemos-aurora" aria-hidden="true">
        <div className="polemos-aurora-blob b1" />
        <div className="polemos-aurora-blob b3" />
        <div className="polemos-aurora-blob b5" />
      </div>
      <div className="polemos-vignette" aria-hidden="true" />
      <div className="polemos-noise pointer-events-none absolute inset-0" aria-hidden="true" />

      {/* Mobile: card gradient spans the whole page */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 md:hidden"
        style={{
          background:
            "radial-gradient(120% 90% at 0% 0%, rgba(232,217,199,0.16) 0%, transparent 55%), radial-gradient(90% 80% at 100% 6%, rgba(160,120,80,0.14) 0%, transparent 55%)",
        }}
      />

      {/* ── Masthead — full width, outside the card ── */}
      <header className="relative z-10 mx-auto mb-6 flex w-full max-w-[920px] flex-wrap items-center justify-between gap-4 border-b border-white/8 px-7 pb-6 pt-7 sm:px-9 md:mb-7 md:px-2 md:pt-0">
        <Link
          to="/"
          className="font-display text-[1.05rem] font-semibold uppercase tracking-[0.1em] text-gold"
        >
          POLEMOS LABS
        </Link>
        <span className="t-label rounded-full border border-gold/40 px-3 py-[0.3rem] text-gold">
          Free one-week pilot · No cost, no commitment
        </span>
      </header>

      {/* ── The one-pager sheet ── */}
      <article className="relative z-10 mx-auto w-full max-w-[920px] md:overflow-hidden md:rounded-[28px] md:border md:border-white/12 md:shadow-[0_40px_120px_-30px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.05)]">
        <div className="md:bg-[linear-gradient(180deg,rgba(34,30,38,0.92)_0%,rgba(20,18,24,0.92)_100%)] md:backdrop-blur-[28px] md:backdrop-saturate-150">

          {/* ── Hero band — gradient ── */}
          <div className="relative overflow-hidden px-7 pb-9 pt-7 sm:px-9 md:px-12 md:pb-10 md:pt-9">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 hidden md:block"
              style={{
                background:
                  "radial-gradient(120% 90% at 0% 0%, rgba(232,217,199,0.16) 0%, transparent 55%), radial-gradient(90% 80% at 100% 8%, rgba(160,120,80,0.14) 0%, transparent 55%)",
              }}
            />
            <div className="relative">
              {/* Hero */}
              <section>
                <p className="t-eyebrow text-gold">For transfer pricing teams</p>
                <h1 className="t-h2 text-gradient-neutral mt-4 max-w-[20ch]">
                  AI systems for transfer pricing workflows
                </h1>
                <p className="t-body-sm mt-5 max-w-[68ch] text-warm-muted">
                  Polemos Labs builds governed AI systems that draft your Form 3CEB, ITAT and DRP
                  submissions, comparables benchmarking, and BEPS Action 13 documentation — every
                  output cited back to source, ready for senior review.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <a
                    href="mailto:hello@polemos.in?subject=Transfer%20pricing%20pilot"
                    className="inline-flex items-center gap-2.5 rounded-full bg-gold px-6 py-3 text-[0.85rem] font-semibold text-gold-foreground ring-1 ring-white/30 transition-transform hover:-translate-y-px"
                  >
                    <Mail className="h-4 w-4" />
                    hello@polemos.in
                  </a>
                  {/* <span className="text-[0.82rem] text-warm-muted">Reply within 48 hours.</span> */}
                </div>
              </section>
            </div>
          </div>

          {/* ── One-pager body ── */}
          <div className="border-t border-white/8 px-7 pb-7 pt-8 sm:px-9 md:px-12 md:pb-12">

          {/* Four workflows */}
          <section>
            <SectionLabel>Four workflows we automate</SectionLabel>
            <div className="mt-5 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {workflows.map(({ icon: Icon, title, body, metric }) => (
                <div key={title} className="flex gap-3.5">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                    <Icon className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display text-[0.98rem] font-semibold leading-snug text-warm-text">
                      {title}
                    </h3>
                    <p className="mt-1.5 text-[0.84rem] leading-[1.55] text-warm-muted">{body}</p>
                    <p className="mt-3 text-[0.8rem] font-medium text-gold">{metric}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <Divider />

          {/* How the pilot works — compact 4-across strip */}
          <section>
            <SectionLabel>How the pilot works</SectionLabel>
            <div className="mt-5 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {pilotSteps.map(({ step, title, body }) => (
                <div key={step} className="flex gap-2.5">
                  <span className="font-display text-[0.95rem] font-bold leading-snug text-gold/70">
                    {step}
                  </span>
                  <div>
                    <h3 className="font-display text-[0.95rem] font-semibold leading-snug text-warm-text">
                      {title}
                    </h3>
                    <p className="mt-1 text-[0.82rem] leading-[1.55] text-warm-muted">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <Divider />

          {/* Timeline */}
          <section>
            <SectionLabel>Pilot timeline · 1 week</SectionLabel>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {timeline.map(({ phase, label }) => (
                <div
                  key={phase}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <p className="font-display text-[1.05rem] font-bold leading-none text-gold">
                    {phase}
                  </p>
                  <p className="mt-2 text-[0.82rem] leading-[1.5] text-warm-muted">{label}</p>
                </div>
              ))}
            </div>
          </section>

          <Divider />

          {/* Trust line + closing CTA */}
          <section className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-[48ch]">
              <p className="font-display text-[0.98rem] font-semibold text-warm-text">
                Every output traces back to source.
              </p>
              <p className="mt-1.5 text-[0.84rem] leading-[1.55] text-warm-muted">
                ITAT orders, CBDT circulars, OECD guidelines, Capitaline / Prowess data. Nothing
                uncited reaches your team. The system drafts; your senior team decides.
              </p>
            </div>
            <div className="flex shrink-0 sm:justify-end">
              <a
                href="mailto:hello@polemos.in?subject=Transfer%20pricing%20pilot"
                className="inline-flex items-center gap-2.5 rounded-full bg-gold px-6 py-3 text-[0.85rem] font-semibold text-gold-foreground ring-1 ring-white/30 transition-transform hover:-translate-y-px"
              >
                <Mail className="h-4 w-4" />
                hello@polemos.in
              </a>
            </div>
          </section>

          {/* Foot */}
          <p className="mt-6 text-center font-mono text-[0.6rem] uppercase tracking-[0.14em] text-warm-muted">
            polemos.in · hello@polemos.in
          </p>
          </div>
        </div>
      </article>
    </main>
  );
};

export default TPPilot;
