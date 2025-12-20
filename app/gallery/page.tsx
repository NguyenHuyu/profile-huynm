"use client";

import Navigation from "@/components/navigation";
import Gallery from "@/components/gallery";

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

