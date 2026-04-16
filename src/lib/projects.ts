import { createServerFn } from "@tanstack/react-start";

const GITHUB_REPO = "servicesbeckers/whb";
const GITHUB_BRANCH = "main";
const RAW_BASE = `https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}`;
const API_BASE = `https://api.github.com/repos/${GITHUB_REPO}/contents`;

export interface Project {
  title: string;
  slug: string;
  material: string;
  category: string;
  application: string;
  summary: string;
  cover: string;
  body: string;
}

function parseFrontmatter(raw: string): { frontmatter: Record<string, string>; body: string } {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if (!match) return { frontmatter: {}, body: raw };
  const fm: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    fm[key] = val;
  }
  return { frontmatter: fm, body: match[2].trim() };
}

function toSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

function coverToUrl(cover: string): string {
  if (cover.startsWith("http")) return cover;
  const clean = cover.startsWith("/") ? cover.slice(1) : cover;
  return `${RAW_BASE}/${encodeURI(clean)}`;
}

export const fetchAllProjects = createServerFn({ method: "GET" }).handler(async () => {
  try {
    const res = await fetch(`${API_BASE}/_projects`, {
      headers: { Accept: "application/vnd.github.v3+json" },
    });
    if (!res.ok) {
      console.error(`GitHub API error: ${res.status}`);
      return { projects: [] as Project[], error: null };
    }
    const files: Array<{ name: string; download_url: string }> = await res.json();
    const mdFiles = files.filter((f) => f.name.endsWith(".md"));

    const projects: Project[] = [];
    const results = await Promise.allSettled(
      mdFiles.map(async (file) => {
        const r = await fetch(file.download_url);
        if (!r.ok) return null;
        const text = await r.text();
        const { frontmatter, body } = parseFrontmatter(text);
        return {
          title: frontmatter.title || file.name.replace(".md", ""),
          slug: toSlug(frontmatter.slug || frontmatter.title || file.name.replace(".md", "")),
          material: frontmatter.material || "",
          category: frontmatter.category || "",
          application: frontmatter.application || "",
          summary: frontmatter.summary || "",
          cover: coverToUrl(frontmatter.cover || ""),
          body,
        } satisfies Project;
      }),
    );

    for (const r of results) {
      if (r.status === "fulfilled" && r.value) projects.push(r.value);
    }

    return { projects, error: null };
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return { projects: [] as Project[], error: "Kon projecten niet laden" };
  }
});

export const fetchProjectBySlug = createServerFn({ method: "GET" })
  .inputValidator((input: { slug: string }) => input)
  .handler(async ({ data }) => {
    const { projects } = await fetchAllProjects();
    const project = projects.find((p) => p.slug === data.slug);
    if (!project) return { project: null, images: [] as string[] };

    // Fetch images from the project's assets folder
    const images: string[] = [];
    try {
      const folderPath = `assets/projects/${encodeURIComponent(project.title)}`;
      const res = await fetch(`${API_BASE}/${folderPath}`, {
        headers: { Accept: "application/vnd.github.v3+json" },
      });
      if (res.ok) {
        const files: Array<{ name: string; download_url: string }> = await res.json();
        for (const f of files) {
          const lower = f.name.toLowerCase();
          if (
            lower.endsWith(".jpg") ||
            lower.endsWith(".jpeg") ||
            lower.endsWith(".png") ||
            lower.endsWith(".webp")
          ) {
            if (lower !== "projectinfo.md") {
              images.push(f.download_url);
            }
          }
        }
      }
    } catch {
      // Images folder might not exist
    }

    return { project, images };
  });
