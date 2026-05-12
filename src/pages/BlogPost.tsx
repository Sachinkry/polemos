import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "@/components/Footer";
import NotFound from "./NotFound";
import { getPostBySlug } from "@/lib/blog";
import { applyHead } from "@/lib/head";
import { useCustomCursor } from "@/hooks/useCustomCursor";

const BlogPost = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug);
  const { cursorRef, ringRef } = useCustomCursor();

  useEffect(() => {
    if (!post) return;
    const canonical = `https://polemos.in/blog/${post.slug}`;
    const ogImage = post.hero
      ? post.hero.startsWith("http")
        ? post.hero
        : `https://polemos.in${post.hero}`
      : "https://polemos.in/og-image.png";
    applyHead({
      title: `${post.title} · Polemos Labs`,
      description: post.description,
      canonical,
      ogImage,
      ogType: "article",
    });
  }, [post]);

  if (!post) return <NotFound />;

  return (
    <main className="polemos-page min-h-screen bg-canvas text-warm-text">
      <div ref={cursorRef} aria-hidden="true" className="polemos-cursor hidden md:block" />
      <div ref={ringRef} aria-hidden="true" className="polemos-cursor-ring hidden md:block" />

      <section className="px-5 py-10 md:px-16">
        <div className="mx-auto flex w-full max-w-[960px] items-center justify-between gap-6 border-b border-white/7 pb-8">
          <Link
            to="/"
            className="font-display text-[1.1rem] font-semibold uppercase tracking-[0.08em] text-gold"
          >
            POLEMOS LABS
          </Link>
          <Link
            to="/blog"
            className="font-display text-[0.7rem] uppercase tracking-[0.16em] text-warm-text/70 transition-colors hover:text-gold"
          >
            Back to blog
          </Link>
        </div>
      </section>

      <article className="px-5 pb-20 pt-6 md:px-16 md:pb-28">
        <div className="mx-auto w-full max-w-[820px]">
          <p className="font-display text-[0.78rem] uppercase tracking-[0.18em] text-gold">
            Blog
          </p>
          <h1 className="mt-5 text-[clamp(2.4rem,5.6vw,4.4rem)] font-display font-bold leading-[1.02] tracking-[-0.03em] text-gradient-neutral">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-display text-[0.72rem] uppercase tracking-[0.14em] text-warm-text/70">
            <span>{post.author}</span>
            <span>·</span>
            <span>{post.readingMinutes} min read</span>
          </div>

          {post.hero && (
            <img
              src={post.hero}
              alt=""
              className="mt-8 w-full rounded-lg border border-white/7 md:mt-10"
              loading="eager"
            />
          )}

          <div
            className="prose-polemos mx-auto mt-10 md:mt-12"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <div className="glass-tile box-gradient-neutral mt-16 max-w-[820px] border border-white/10 p-5 sm:p-6 md:mt-20 md:p-7">
            <p className="font-display text-[0.72rem] uppercase tracking-[0.18em] text-gold">Working on this?</p>
            <p className="mt-3 text-[1rem] leading-[1.75] text-warm-text/90">
              Polemos Labs is running free 2-week audit pilots with three TP practices in India and the UAE
              this quarter. If that's your team, write to us.
            </p>
            <a
              href="mailto:hello@polemos.in"
              className="mt-4 inline-flex items-center gap-2 text-[0.92rem] text-gold underline underline-offset-4 hover:text-warm-text"
            >
              hello@polemos.in
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default BlogPost;
