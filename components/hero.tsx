"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [particles, setParticles] = useState<
    Array<{ id: number; left: number; delay: number; size: number }>
  >([]);

  useEffect(() => {
    // Create floating particles
    const particleArray = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      size: Math.random() * 4 + 2,
    }));
    setParticles(particleArray);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 md:py-20 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-300/20 rounded-full blur-3xl float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-rose-300/20 rounded-full blur-3xl float-delayed" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-200/10 rounded-full blur-3xl float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `radial-gradient(circle, rgba(212, 175, 130, 0.6) 0%, transparent 70%)`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      <div className="max-w-3xl w-full text-center md:text-left relative z-10 fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-balance text-reveal">
          <span className="text-gray-600" style={{ animationDelay: "0.1s" }}>
            Nguyễn
          </span>{" "}
          <span className="text-gray-600" style={{ animationDelay: "0.2s" }}>
            Minh
          </span>{" "}
          <span className="text-gray-600" style={{ animationDelay: "0.3s" }}>
            Huy
          </span>
        </h1>
        <p
          className="text-2xl md:text-3xl text-foreground mb-6 font-semibold slide-up bounce-slow"
          style={{ animationDelay: "0.4s" }}
        >
          Software Engineer
        </p>
        <p
          className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl slide-up"
          style={{ animationDelay: "0.5s" }}
        >
          Crafting high-performance web applications with modern technologies.
          Specializing in React, Next.js, Node.js, and .NET to build scalable
          solutions that matter.
        </p>

        <div
          className="flex gap-4 flex-wrap md:flex-nowrap slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          <Link
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-medium glow-effect hover:scale-105 relative overflow-hidden group magnetic cursor-follow"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 font-medium hover:border-primary/80 hover:scale-105 relative overflow-hidden group magnetic cursor-follow"
          >
            <span className="relative z-10">Get in Touch</span>
            <div className="absolute inset-0 bg-primary/5 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
          </Link>
        </div>
      </div>
    </section>
  );
}
