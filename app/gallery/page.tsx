import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Gallery from "@/components/gallery";

export const metadata: Metadata = {
  title: "Company Gallery",
  description:
    "Browse our company gallery showcasing events, achievements, and team moments. A visual journey through our company culture and accomplishments.",
  openGraph: {
    title: "Company Gallery | Huynm Portfolio",
    description:
      "Browse our company gallery showcasing events, achievements, and team moments.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GalleryPage() {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="flex-1 lg:pl-64">
        <Gallery />
      </main>
    </div>
  );
}
