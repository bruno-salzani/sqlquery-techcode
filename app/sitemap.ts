import type { MetadataRoute } from "next";
import { blogPosts, siteConfig } from "@/lib/site";

const staticLastModified = new Date("2026-05-11T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/sql-generator",
    "/como-funciona",
    "/exemplos",
    "/faq",
    "/privacy-policy",
    "/terms",
    "/contact",
    "/blog",
  ];

  return [
    ...pages.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: staticLastModified,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...blogPosts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
