import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

type LegalSection = {
  title: string;
  body: string[];
};

type LegalPageProps = {
  title: string;
  eyebrow: string;
  intro: string;
  sections: LegalSection[];
};

const LegalPage = ({ title, eyebrow, intro, sections }: LegalPageProps) => (
  <main className="min-h-screen bg-canvas text-warm-text">
    <section className="px-5 py-10 md:px-16">
      <div className="mx-auto flex w-full max-w-[960px] items-center justify-between gap-6 border-b border-white/7 pb-8">
        <Link
          to="/"
          className="font-serif text-[1.1rem] font-semibold uppercase tracking-[0.08em] text-gold"
        >
          POLEMOS LABS
        </Link>
        <Link
          to="/"
          className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-warm-muted transition-colors hover:text-gold"
        >
          Back home
        </Link>
      </div>
    </section>

    <section className="px-5 pb-20 pt-6 md:px-16 md:pb-28">
      <article className="mx-auto w-full max-w-[960px]">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-gold">
          {eyebrow}
        </p>
        <h1 className="mt-5 text-[clamp(3rem,9vw,7rem)] leading-[0.88] tracking-[-0.04em] text-warm-text">
          {title}
        </h1>
        <p className="mt-8 max-w-[720px] text-[1rem] leading-[1.85] text-warm-muted md:text-[1.08rem]">
          {intro}
        </p>
        <p className="mt-4 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-warm-muted">
          Last updated: April 8, 2026
        </p>

        <div className="mt-14 space-y-10 border-t border-white/7 pt-10">
          {sections.map((section) => (
            <section key={section.title} className="grid gap-4 md:grid-cols-[220px_1fr]">
              <h2 className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-gold">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-[0.95rem] leading-[1.85] text-warm-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </section>

    <Footer />
  </main>
);

export default LegalPage;
