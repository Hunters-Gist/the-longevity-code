import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/content/sila";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.thesilacode.com";
  const coreRoutes = [
    "",
    "/about",
    "/the-code",
    "/shop",
    "/shop/sila-focus",
    "/assessment",
    "/community",
    "/subscribe",
    "/blog",
    "/faq",
    "/contact",
    "/legal/terms",
    "/legal/privacy",
    "/legal/disclaimer",
  ];

  return [
    ...coreRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...BLOG_POSTS.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
