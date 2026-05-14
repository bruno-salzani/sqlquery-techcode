import type { MetadataRoute } from "next";
import { resolveSiteUrl } from "@/lib/site";

const staticLastModified = new Date("2026-05-13T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    { path: "/sql-generator", priority: 0.95, changeFrequency: "weekly" as const },
    { path: "/exemplos", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/faq", priority: 0.75, changeFrequency: "weekly" as const },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "monthly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.4, changeFrequency: "monthly" as const },
  ];

  return pages.map((page) => ({
    url: resolveSiteUrl(page.path),
    lastModified: staticLastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
