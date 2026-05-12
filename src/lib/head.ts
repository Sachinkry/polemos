type HeadConfig = {
  title?: string;
  description?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
};

type MetaKey = { name: string } | { property: string };

const ensureMeta = (key: MetaKey, value: string | undefined) => {
  if (value === undefined) return;
  const [attr, name] = "name" in key ? ["name", key.name] : ["property", key.property];
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
};

const setLink = (rel: string, href: string | undefined) => {
  if (!href) return;
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

export const applyHead = (cfg: HeadConfig) => {
  if (cfg.title) document.title = cfg.title;
  ensureMeta({ name: "description" }, cfg.description);
  setLink("canonical", cfg.canonical);
  ensureMeta({ property: "og:title" }, cfg.ogTitle ?? cfg.title);
  ensureMeta({ property: "og:description" }, cfg.ogDescription ?? cfg.description);
  ensureMeta({ property: "og:image" }, cfg.ogImage);
  ensureMeta({ property: "og:url" }, cfg.canonical);
  ensureMeta({ property: "og:type" }, cfg.ogType ?? "website");
  ensureMeta({ name: "twitter:title" }, cfg.twitterTitle ?? cfg.title);
  ensureMeta({ name: "twitter:description" }, cfg.twitterDescription ?? cfg.description);
  ensureMeta({ name: "twitter:image" }, cfg.twitterImage ?? cfg.ogImage);
};

const HOME_DEFAULTS: HeadConfig = {
  title: "Polemos Labs — AI Systems for Enterprise Operations",
  description:
    "Polemos Labs is an applied AI studio that turns fragmented data, manual review, and tool sprawl into governed, production-grade AI systems.",
  canonical: "https://polemos.in/",
  ogImage: "https://polemos.in/og-image.png",
  ogType: "website",
};

export const resetHead = () => applyHead(HOME_DEFAULTS);
