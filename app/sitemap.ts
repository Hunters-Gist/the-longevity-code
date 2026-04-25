import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/content/sila";
import { absoluteUrl } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
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
    "/legal/refund",
    "/legal/shipping",
    "/legal/subscription",
    "/legal/research",
    "/legal/assessment",
    "/legal/support",
  ];

  return [
    ...coreRoutes.map((route) => ({
      url: absoluteUrl(route),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...BLOG_POSTS.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
