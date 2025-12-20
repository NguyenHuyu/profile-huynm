"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // List of company images from public folder
  const companyImages = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const openLightbox = (image: string, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage) {
      const currentIndex = companyImages.indexOf(selectedImage);
      let newIndex;
      if (direction === "next") {
        newIndex = (currentIndex + 1) % companyImages.length;
      } else {
        newIndex =
          (currentIndex - 1 + companyImages.length) % companyImages.length;
      }
      setSelectedImage(companyImages[newIndex]);
      setSelectedIndex(newIndex);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") navigateImage("prev");
        if (e.key === "ArrowRight") navigateImage("next");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <>
      <section
        ref={sectionRef}
        className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20"
      >
        <div className="max-w-6xl w-full">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 gradient-text scroll-reveal text-center ${
              isVisible ? "revealed" : ""
            }`}
          >
            Company Gallery
          </h2>
          <p
            className={`text-muted-foreground mb-12 text-lg text-center scroll-reveal ${
              isVisible ? "revealed" : ""
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            A glimpse into our company culture, events, and achievements
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyImages.map((image, idx) => (
              <div
                key={idx}
                className={`scroll-reveal ${isVisible ? "revealed" : ""} group`}
                style={{ transitionDelay: `${0.2 + idx * 0.1}s` }}
              >
                <div
                  className="relative aspect-square rounded-xl overflow-hidden bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 card-hover cursor-pointer"
                  onClick={() => openLightbox(image, idx)}
                >
                  <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <Image
                    src={`/images/${image}`}
                    alt={`Gallery image ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 z-20 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium">
                      Click to view
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-50"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("prev");
            }}
            className="absolute left-4 text-white hover:text-primary transition-colors z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("next");
            }}
            className="absolute right-4 text-white hover:text-primary transition-colors z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div
            className="relative max-w-5xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/images/${selectedImage}`}
              alt={`Gallery image ${selectedIndex + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {selectedIndex + 1} / {companyImages.length}
          </div>
        </div>
      )}
    </>
  );
}
