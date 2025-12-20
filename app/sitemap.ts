import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // TODO: Replace with your actual domain
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://huynm.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 1,
    },
  ];
}
