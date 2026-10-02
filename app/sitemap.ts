import type { MetadataRoute } from "next";
import { siteConfig } from "@/src/config/site";
import { work } from "@/src/data/work";
import { posts } from "@/src/data/writing";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.baseUrl) return [];
  const routes = ["", "/research", "/research/alignment-theory", "/research/human-agency-infrastructure", "/projects", "/writing", "/about"];
  return [
    ...routes.map((path) => ({ url: new URL(path || "/", siteConfig.baseUrl as string).toString() })),
    ...work.map((item) => ({ url: new URL("/projects/" + item.slug, siteConfig.baseUrl as string).toString() })),
    ...posts.filter((post) => !post.draft).map((post) => ({ url: new URL("/writing/" + post.slug, siteConfig.baseUrl as string).toString(), lastModified: post.date })),
  ];
}
