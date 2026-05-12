import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Footer from "@/components/Footer";
import { posts, type Post } from "@/lib/blog";
import { applyHead } from "@/lib/head";
import { useCustomCursor } from "@/hooks/useCustomCursor";

const HeroMedia = ({ post }: { post: Post }) => {
  if (post.hero) {
    return (
      <img
        src={post.hero}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover"
      />
    );
  }
  const label = post.tags?.[0] ?? "Note";
  return (
    <div className="relative flex h-full w-full items-end overflow-hidden p-5">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 0% 0%, rgba(232,217,199,0.18) 0%, transparent 55%), radial-gradient(100% 80% at 100% 100%, rgba(120,90,60,0.22) 0%, transparent 55%), linear-gradient(160deg, rgba(34,30,38,0.96) 0%, rgba(18,16,22,0.96) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, rgba(232,217,199,0.18) 0 1px, transparent 1px 160px), repeating-linear-gradient(25deg, rgba(232,217,199,0.08) 0 1px, transparent 1px 220px)",
        }}
      />
      <span className="relative font-display text-[0.7rem] uppercase tracking-[0.18em] text-gold/85">
        {label}
      </span>
    </div>
  );
};

const Blog = () => {
  const { cursorRef, ringRef } = useCustomCursor();

  useEffect(() => {
    applyHead({
      title: "Blog · Polemos Labs",
      description:
        "Engineering notes from Polemos Labs on retrieval, agentic workflows, and AI for regulated enterprise operations.",
      canonical: "https://polemos.in/blog",
      ogImage: "https://polemos.in/og-image.png",
      ogType: "website",
    });
  }, []);

  return (
    <main className="polemos-page min-h-screen bg-canvas text-warm-text">
      <div ref={cursorRef} aria-hidden="true" className="polemos-cursor hidden md:block" />
      <div ref={ringRef} aria-hidden="true" className="polemos-cursor-ring hidden md:block" />

      <section className="px-5 py-10 md:px-16">
        <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between gap-6 border-b border-white/7 pb-8">
          <Link
            to="/"
            className="font-display text-[1.1rem] font-semibold uppercase tracking-[0.08em] text-gold"
          >
            POLEMOS LABS
          </Link>
          <Link
            to="/"
            className="font-display text-[0.7rem] uppercase tracking-[0.16em] text-warm-text/70 transition-colors hover:text-gold"
          >
            Back home
          </Link>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 pb-10 pt-6 md:px-16 md:pt-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 18% 30%, rgba(232,217,199,0.10) 0%, transparent 60%), radial-gradient(40% 40% at 90% 0%, rgba(160,120,80,0.10) 0%, transparent 60%)",
          }}
        />
        <div className="polemos-noise pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative mx-auto w-full max-w-[1120px]">
          <p className="font-display text-[0.78rem] uppercase tracking-[0.18em] text-gold">
            Notes from the studio
          </p>
          <h1 className="mt-5 font-display text-[clamp(2.6rem,7vw,6.4rem)] font-bold leading-[0.95] tracking-[-0.035em] text-gradient-neutral">
            Blog
          </h1>
          <p className="mt-6 max-w-[640px] font-sans text-[0.98rem] leading-[1.75] text-warm-text/85 md:mt-7 md:text-[1.05rem] md:leading-[1.8]">
            Engineering notes on what it actually takes to ship AI systems inside regulated enterprise
            workflows: retrieval, agents, evals, and the human review layer that holds it all together.
          </p>
        </div>
      </section>

      <section className="px-5 pb-24 pt-10 md:px-16 md:pb-32">
        <div className="mx-auto w-full max-w-[1120px]">
          {posts.length === 0 && (
            <p className="text-[1rem] text-warm-text/80">No posts yet. Check back soon.</p>
          )}

          <ul className="space-y-7 md:space-y-8">
            {posts.map((post) => {
              const primaryTag = post.tags?.[0]?.replace(/-/g, " ");
              return (
                <li key={post.slug}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="glass-tile group block overflow-hidden border border-white/10 transition-all hover:border-gold/35"
                  >
                    <div className="box-gradient-neutral grid gap-0 md:grid-cols-[300px_1fr] lg:grid-cols-[340px_1fr]">
                      <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[240px] md:border-r md:border-white/7">
                        <HeroMedia post={post} />
                      </div>

                      <div className="flex flex-col gap-3.5 p-5 sm:p-6 md:gap-4 md:p-8">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-display text-[0.62rem] uppercase tracking-[0.16em] text-warm-text/65 sm:text-[0.68rem]">
                          {primaryTag && (
                            <span className="text-gold/90">{primaryTag}</span>
                          )}
                          {primaryTag && <span aria-hidden>·</span>}
                          <span>{post.readingMinutes} MIN READ</span>
                        </div>

                        <h2 className="font-display text-[1.35rem] font-semibold leading-[1.18] tracking-[-0.02em] text-warm-text transition-colors group-hover:text-gold sm:text-[1.55rem] md:text-[1.85rem]">
                          {post.title}
                        </h2>

                        <p className="max-w-[640px] text-[0.94rem] leading-[1.65] text-warm-text/85 sm:text-[0.98rem] sm:leading-[1.7]">
                          {post.description}
                        </p>

                        <div className="mt-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-2 pt-1">
                          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-display text-[0.62rem] uppercase tracking-[0.14em] text-warm-text/65 sm:text-[0.68rem]">
                            <span>{post.author}</span>
                          </div>
                          <span className="flex items-center gap-1.5 font-display text-[0.62rem] uppercase tracking-[0.16em] text-gold transition-transform group-hover:translate-x-0.5 sm:text-[0.68rem]">
                            Read
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;
