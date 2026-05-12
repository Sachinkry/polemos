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

const setMeta = (selector: string, attr: "content", value: string | undefined) => {
  const el = document.querySelector(selector);
  if (!el || value === undefined) return;
  el.setAttribute(attr, value);
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
  setMeta('meta[name="description"]', "content", cfg.description);
  setLink("canonical", cfg.canonical);
  setMeta('meta[property="og:title"]', "content", cfg.ogTitle ?? cfg.title);
  setMeta('meta[property="og:description"]', "content", cfg.ogDescription ?? cfg.description);
  setMeta('meta[property="og:image"]', "content", cfg.ogImage);
  setMeta('meta[property="og:url"]', "content", cfg.canonical);
  setMeta('meta[property="og:type"]', "content", cfg.ogType ?? "website");
  setMeta('meta[name="twitter:title"]', "content", cfg.twitterTitle ?? cfg.title);
  setMeta('meta[name="twitter:description"]', "content", cfg.twitterDescription ?? cfg.description);
  setMeta('meta[name="twitter:image"]', "content", cfg.twitterImage ?? cfg.ogImage);
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
