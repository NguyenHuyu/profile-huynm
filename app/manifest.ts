import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://huynm.com";

  return {
    name: "Huynm Portfolio - Nguyen Minh Huy",
    short_name: "Huynm",
    description:
      "Full-stack software engineer portfolio - React, Next.js, Node.js, .NET",
    start_url: "/",
    display: "standalone",
    background_color: "#faf9f6",
    theme_color: "#d4af82",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
