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
        url: "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/598974846_2368969780188371_3888231183088188503_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEFgfaI_vYoRh_zAGFab7TUb-dCq18lG4lv50KrXyUbiRLdyWHv1j8hONMoZD7zHpOrteWJ2Rf9uoHZYNi25f0_&_nc_ohc=yF47WG2XK5MQ7kNvwFCPkhU&_nc_oc=Adk8SDrjcxQ1lrapZw_Nw9gi83iq_B3GjaOwbzQ3vmvu-tfPIl337s-Jih71fSBN-DM&_nc_zt=23&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=Gf9sjAC7qOFSQ99fYl7aOg&oh=00_AfnMBvay5khjWoqt-WEa7dQ0iTjHdBYwew7wdvHxcuB7SQ&oe=694C74B2",
      },
    ],
  },

  openGraph: {
    title: "Nguyễn Minh Huy | Full-Stack Software Engineer",
    description:
      "Full-stack software engineer with expertise in React, Next.js, Node.js, and .NET.",
    type: "website",
    images: [
      "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/598974846_2368969780188371_3888231183088188503_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEFgfaI_vYoRh_zAGFab7TUb-dCq18lG4lv50KrXyUbiRLdyWHv1j8hONMoZD7zHpOrteWJ2Rf9uoHZYNi25f0_&_nc_ohc=yF47WG2XK5MQ7kNvwFCPkhU&_nc_oc=Adk8SDrjcxQ1lrapZw_Nw9gi83iq_B3GjaOwbzQ3vmvu-tfPIl337s-Jih71fSBN-DM&_nc_zt=23&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=Gf9sjAC7qOFSQ99fYl7aOg&oh=00_AfnMBvay5khjWoqt-WEa7dQ0iTjHdBYwew7wdvHxcuB7SQ&oe=694C74B2",
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nguyễn Minh Huy | Full-Stack Software Engineer",
    description:
      "Full-stack software engineer with expertise in React, Next.js, Node.js, and .NET.",
    images: [
      "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/598974846_2368969780188371_3888231183088188503_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEFgfaI_vYoRh_zAGFab7TUb-dCq18lG4lv50KrXyUbiRLdyWHv1j8hONMoZD7zHpOrteWJ2Rf9uoHZYNi25f0_&_nc_ohc=yF47WG2XK5MQ7kNvwFCPkhU&_nc_oc=Adk8SDrjcxQ1lrapZw_Nw9gi83iq_B3GjaOwbzQ3vmvu-tfPIl337s-Jih71fSBN-DM&_nc_zt=23&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=Gf9sjAC7qOFSQ99fYl7aOg&oh=00_AfnMBvay5khjWoqt-WEa7dQ0iTjHdBYwew7wdvHxcuB7SQ&oe=694C74B2",
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
