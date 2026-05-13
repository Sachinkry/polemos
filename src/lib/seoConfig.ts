import { posts } from "./blog";

export const SITE_ORIGIN = "https://polemos.in";

export type SeoConfig = {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  ogType: "website" | "article";
  jsonLd?: object;
  // ISO date — only set for blog posts; used by sitemap and meta
  publishedTime?: string;
};

const absUrl = (path?: string) => {
  if (!path) return `${SITE_ORIGIN}/og-image.png`;
  if (path.startsWith("http")) return path;
  return `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
};

const HOME: SeoConfig = {
  title: "Polemos Labs — AI Systems for Enterprise Operations",
  description:
    "Polemos Labs is an applied AI studio that turns fragmented data, manual review, and tool sprawl into governed, production-grade AI systems. We design retrieval, agentic workflows, and private model deployments for finance, logistics, and professional services teams that need real operational outcomes — not demos.",
  canonical: `${SITE_ORIGIN}/`,
  ogImage: `${SITE_ORIGIN}/og-image.png`,
  ogType: "website",
};

const BLOG_INDEX: SeoConfig = {
  title: "Blog · Polemos Labs",
  description:
    "Engineering notes from Polemos Labs on retrieval, agentic workflows, and AI for regulated enterprise operations.",
  canonical: `${SITE_ORIGIN}/blog`,
  ogImage: `${SITE_ORIGIN}/og-image.png`,
  ogType: "website",
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Polemos Labs Blog",
    url: `${SITE_ORIGIN}/blog`,
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${SITE_ORIGIN}/blog/${p.slug}`,
      datePublished: p.date,
      author: { "@type": "Person", name: p.author },
      description: p.description,
    })),
  },
};

const PRIVACY: SeoConfig = {
  title: "Privacy · Polemos Labs",
  description: "Polemos Labs privacy policy.",
  canonical: `${SITE_ORIGIN}/privacy`,
  ogImage: `${SITE_ORIGIN}/og-image.png`,
  ogType: "website",
};

const TERMS: SeoConfig = {
  title: "Terms · Polemos Labs",
  description: "Polemos Labs terms of service.",
  canonical: `${SITE_ORIGIN}/terms`,
  ogImage: `${SITE_ORIGIN}/og-image.png`,
  ogType: "website",
};

const buildPostConfig = (slug: string): SeoConfig | undefined => {
  const post = posts.find((p) => p.slug === slug);
  if (!post) return undefined;
  const url = `${SITE_ORIGIN}/blog/${post.slug}`;
  const ogImage = absUrl(post.hero);
  return {
    title: `${post.title} · Polemos Labs`,
    description: post.description,
    canonical: url,
    ogImage,
    ogType: "article",
    publishedTime: post.date,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      author: { "@type": "Person", name: post.author },
      publisher: {
        "@type": "Organization",
        name: "Polemos Labs",
        logo: { "@type": "ImageObject", url: `${SITE_ORIGIN}/polemos-logo-nav.svg` },
      },
      datePublished: post.date,
      dateModified: post.date,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      image: ogImage,
      keywords: (post.tags || []).join(", "),
    },
  };
};

export const getSeoConfig = (pathname: string): SeoConfig => {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (path === "/") return HOME;
  if (path === "/blog") return BLOG_INDEX;
  if (path === "/privacy") return PRIVACY;
  if (path === "/terms") return TERMS;
  const postMatch = path.match(/^\/blog\/([^/]+)$/);
  if (postMatch) {
    const cfg = buildPostConfig(postMatch[1]);
    if (cfg) return cfg;
  }
  return HOME;
};

export const listPrerenderRoutes = (): string[] => [
  "/",
  "/blog",
  "/privacy",
  "/terms",
  ...posts.map((p) => `/blog/${p.slug}`),
];
