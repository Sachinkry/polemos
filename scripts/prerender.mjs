// Post-build SSG step:
//   1) Loads the SSR bundle built by `vite build --ssr`.
//   2) Renders each known route to a string via ReactDOMServer.
//   3) Rewrites <head> tags (title, description, canonical, og/twitter, JSON-LD)
//      from the per-route SEO config.
//   4) Injects the rendered HTML into <div id="root"> of the client index.html.
//   5) Writes the result to dist/<route>/index.html so Vercel serves real HTML
//      to crawlers; the client hydrates over it via hydrateRoot in main.tsx.

import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const DIST = join(ROOT, "dist");
const SERVER_ENTRY = join(DIST, "server/entry-server.js");

const escapeAttr = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const escapeHtml = escapeAttr;

const replaceMetaByName = (html, name, content) =>
  html.replace(
    new RegExp(`<meta\\s+name="${name}"[^>]*>`),
    `<meta name="${name}" content="${escapeAttr(content)}" />`,
  );

const replaceMetaByProperty = (html, property, content) =>
  html.replace(
    new RegExp(`<meta\\s+property="${property}"[^>]*>`),
    `<meta property="${property}" content="${escapeAttr(content)}" />`,
  );

const ensureMetaByProperty = (html, property, content) => {
  if (new RegExp(`<meta\\s+property="${property}"`).test(html)) {
    return replaceMetaByProperty(html, property, content);
  }
  return html.replace(
    "</head>",
    `    <meta property="${property}" content="${escapeAttr(content)}" />\n  </head>`,
  );
};

const replaceCanonical = (html, href) =>
  html.replace(
    /<link\s+rel="canonical"[^>]*>/,
    `<link rel="canonical" href="${escapeAttr(href)}" />`,
  );

const replaceTitle = (html, title) =>
  html.replace(/<title[^>]*>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`);

const injectBeforeHeadClose = (html, snippet) =>
  html.replace("</head>", `${snippet}\n  </head>`);

const setRootContent = (html, inner) =>
  html.replace(/<div id="root"><\/div>/, `<div id="root">${inner}</div>`);

const writePage = (relativePath, html) => {
  const out = join(DIST, relativePath);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html, "utf8");
  console.log(`prerender → ${relativePath}`);
};

const routePath = (url) => {
  if (url === "/") return "index.html";
  return `${url.replace(/^\/+/, "").replace(/\/+$/, "")}/index.html`;
};

const SITE = "https://polemos.in";

// Static routes that aren't React-rendered but should appear in sitemap.
// `/ai` is served from public/ai.html.
const STATIC_SITEMAP_ENTRIES = [
  { loc: `${SITE}/ai`, changefreq: "monthly", priority: "0.9" },
];

const SITEMAP_META = {
  "/": { changefreq: "weekly", priority: "1.0" },
  "/blog": { changefreq: "weekly", priority: "0.8" },
  "/privacy": { changefreq: "yearly", priority: "0.3" },
  "/terms": { changefreq: "yearly", priority: "0.3" },
};

const writeSitemap = async (render, routes) => {
  const today = new Date().toISOString().slice(0, 10);
  const entries = [];

  for (const url of routes()) {
    const { seo } = render(url);
    const meta = SITEMAP_META[url] || { changefreq: "monthly", priority: "0.7" };
    const lastmod = seo.publishedTime ? seo.publishedTime.slice(0, 10) : today;
    entries.push({ loc: seo.canonical, lastmod, ...meta });
  }

  for (const e of STATIC_SITEMAP_ENTRIES) {
    entries.push({ lastmod: today, ...e });
  }

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    entries
      .map(
        (e) =>
          `  <url>\n` +
          `    <loc>${e.loc}</loc>\n` +
          `    <lastmod>${e.lastmod}</lastmod>\n` +
          `    <changefreq>${e.changefreq}</changefreq>\n` +
          `    <priority>${e.priority}</priority>\n` +
          `  </url>`,
      )
      .join("\n") +
    `\n</urlset>\n`;

  writeFileSync(join(DIST, "sitemap.xml"), xml, "utf8");
  console.log(`prerender → sitemap.xml (${entries.length} urls)`);
};

const main = async () => {
  const template = readFileSync(join(DIST, "index.html"), "utf8");
  const mod = await import(pathToFileURL(SERVER_ENTRY).href);
  const { render, routes } = mod;

  for (const url of routes()) {
    const { html: appHtml, seo } = render(url);

    let page = template;
    page = replaceTitle(page, seo.title);
    page = replaceMetaByName(page, "description", seo.description);
    page = replaceCanonical(page, seo.canonical);
    page = replaceMetaByProperty(page, "og:title", seo.title);
    page = replaceMetaByProperty(page, "og:description", seo.description);
    page = replaceMetaByProperty(page, "og:url", seo.canonical);
    page = replaceMetaByProperty(page, "og:type", seo.ogType);
    page = replaceMetaByProperty(page, "og:image", seo.ogImage);
    page = replaceMetaByName(page, "twitter:title", seo.title);
    page = replaceMetaByName(page, "twitter:description", seo.description);
    page = replaceMetaByName(page, "twitter:image", seo.ogImage);

    if (seo.publishedTime) {
      page = ensureMetaByProperty(page, "article:published_time", seo.publishedTime);
    }

    if (seo.jsonLd) {
      const items = Array.isArray(seo.jsonLd) ? seo.jsonLd : [seo.jsonLd];
      const ld = items
        .map((item) => `    <script type="application/ld+json">${JSON.stringify(item)}</script>`)
        .join("\n");
      page = injectBeforeHeadClose(page, ld);
    }

    page = setRootContent(page, appHtml);
    writePage(routePath(url), page);
  }

  console.log(`prerender: wrote ${routes().length} pages`);

  await writeSitemap(render, routes);

  rmSync(join(DIST, "server"), { recursive: true, force: true });
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
