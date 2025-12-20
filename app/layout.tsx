import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Huynm | Full-Stack Software Engineer",
  description:
    "Nguyen Minh Huy - Full-stack software engineer with expertise in React, Next.js, Node.js, and .NET. 2+ years building scalable web applications.",
  generator: "huynm.com",
  keywords: ["huynm", "nguyen minh huy"],
  icons: {
    icon: [
      {
        url: "https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/592534066_2353918168360199_958764074878040352_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=yf6oOTT9XXoQ7kNvwEUvnLn&_nc_oc=Admpn0Z8c87e052-citgMTkf_bWAB2UQ1y0BjmZEXP8lx-WU0gVUvYHR6jJNrCglHxLKOoqG_6wzGA16OT38qP_l&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=3x_cTcmMccinS-C2sH1dLQ&oh=00_AfkYoKBP07QJ64KMhtsaxZaXdyaxh7Z2KoZcFYQubFn8Vg&oe=6938239D",
      },
    ],
  },

  openGraph: {
    title: "Nguyễn Minh Huy | Full-Stack Developer",
    description:
      "Full-stack developer with expertise in React, Next.js, Node.js, and .NET.",
    type: "website",
    images: [
      "https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/592534066_2353918168360199_958764074878040352_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=yf6oOTT9XXoQ7kNvwEUvnLn&_nc_oc=Admpn0Z8c87e052-citgMTkf_bWAB2UQ1y0BjmZEXP8lx-WU0gVUvYHR6jJNrCglHxLKOoqG_6wzGA16OT38qP_l&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=3x_cTcmMccinS-C2sH1dLQ&oh=00_AfkYoKBP07QJ64KMhtsaxZaXdyaxh7Z2KoZcFYQubFn8Vg&oe=6938239D",
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nguyễn Minh Huy | Full-Stack Developer",
    description:
      "Full-stack developer with expertise in React, Next.js, Node.js, and .NET.",
    images: [
      "https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/592534066_2353918168360199_958764074878040352_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=yf6oOTT9XXoQ7kNvwEUvnLn&_nc_oc=Admpn0Z8c87e052-citgMTkf_bWAB2UQ1y0BjmZEXP8lx-WU0gVUvYHR6jJNrCglHxLKOoqG_6wzGA16OT38qP_l&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=3x_cTcmMccinS-C2sH1dLQ&oh=00_AfkYoKBP07QJ64KMhtsaxZaXdyaxh7Z2KoZcFYQubFn8Vg&oe=6938239D",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
