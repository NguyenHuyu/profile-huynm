import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://huynm.com";
const ogImage = "/images/images.jpeg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nguyễn Minh Huy | Full-Stack Software Engineer",
    template: "%s | Huynm Portfolio",
  },

  description:
    "Nguyen Minh Huy - Full-stack software engineer with 2+ years of experience. Expert in React, Next.js, Node.js, .NET/C#, TypeScript. Building scalable web applications and enterprise solutions.",
  keywords: [
    "Nguyen Minh Huy",
    "huynm",
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    ".NET Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Web Developer Vietnam",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
    ".NET",
    "C#",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "TailwindCSS",
    "Software Engineering",
    "Web Development",
    "Ho Chi Minh City",
    "Vietnam Developer",
  ],
  authors: [{ name: "Nguyen Minh Huy" }],
  creator: "Nguyen Minh Huy",
  publisher: "Nguyen Minh Huy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: ogImage,
        sizes: "any",
      },
    ],
    apple: [
      {
        url: ogImage,
        sizes: "180x180",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Huynm Portfolio",
    title: "Nguyễn Minh Huy | Full-Stack Software Engineer",
    description:
      "Full-stack software engineer with expertise in React, Next.js, Node.js, and .NET. 2+ years building scalable web applications and enterprise solutions.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Nguyen Minh Huy - Full-Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyễn Minh Huy | Full-Stack Software Engineer",
    description:
      "Full-stack software engineer with expertise in React, Next.js, Node.js, and .NET. Building scalable web applications.",
    images: [ogImage],
    creator: "@huynm",
  },
  alternates: {
    canonical: siteUrl,
  },

  category: "Technology",
};

// Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nguyen Minh Huy",
  alternateName: "Huynm",
  jobTitle: "Full-Stack Software Engineer",
  description:
    "Full-stack software engineer with expertise in React, Next.js, Node.js, and .NET",
  url: siteUrl,
  image: ogImage,
  sameAs: [
    "https://github.com/NguyenHuyu",
    "https://www.linkedin.com/in/nguyenhuyu/",
  ],
  email: "yuhuynguyen.1204@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ho Chi Minh City",
    addressCountry: "VN",
  },
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    ".NET",
    "C#",
    "PostgreSQL",
    "MongoDB",
    "Web Development",
    "Software Engineering",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "The Saigon International University",
  },
  worksFor: {
    "@type": "Organization",
    name: "Opus Solution",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
