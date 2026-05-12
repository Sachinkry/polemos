import { marked } from "marked";

export type PostFrontmatter = {
  title: string;
  slug: string;
  author: string;
  date: string;
  hero?: string;
  description: string;
  tags?: string[];
};

export type Post = PostFrontmatter & {
  html: string;
  readingMinutes: number;
};

const rawPosts = import.meta.glob("/src/content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

marked.setOptions({ gfm: true, breaks: false });

const FRONTMATTER_RE = /^---\n([\s\S]*?)\n---\n?/;

const parseFrontmatter = (raw: string): { data: Record<string, unknown>; body: string } => {
  const match = raw.match(FRONTMATTER_RE);
  if (!match) return { data: {}, body: raw };
  const body = raw.slice(match[0].length);
  const data: Record<string, unknown> = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value: string = line.slice(idx + 1).trim();
    if (value.startsWith("[") && value.endsWith("]")) {
      data[key] = value
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
      continue;
    }
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    data[key] = value;
  }
  return { data, body };
};

const wordCount = (text: string) => text.trim().split(/\s+/).length;

const buildPosts = (): Post[] => {
  const posts: Post[] = [];
  for (const [path, raw] of Object.entries(rawPosts)) {
    const { data, body } = parseFrontmatter(raw);
    const fm = data as Partial<PostFrontmatter>;
    if (!fm.slug || !fm.title || !fm.date) {
      console.warn(`Skipping post missing required frontmatter: ${path}`);
      continue;
    }
    const html = (marked.parse(body) as string)
      .replace(/<table>/g, '<div class="table-scroll"><table>')
      .replace(/<\/table>/g, "</table></div>");
    posts.push({
      title: fm.title,
      slug: fm.slug,
      author: fm.author ?? "Polemos Labs",
      date: fm.date,
      hero: fm.hero,
      description: fm.description ?? "",
      tags: fm.tags ?? [],
      html,
      readingMinutes: Math.max(1, Math.round(wordCount(body) / 220)),
    });
  }
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
};

export const posts = buildPosts();

export const getPostBySlug = (slug: string): Post | undefined =>
  posts.find((p) => p.slug === slug);

export const formatDate = (iso: string): string => {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
};
