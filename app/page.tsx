"use client";

import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Education from "@/components/education";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="flex-1 lg:pl-64">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen flex items-center justify-center px-4 md:px-8 py-10 md:py-20"
    >
      <div className="max-w-3xl w-full">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-8 gradient-text scroll-reveal ${
            isVisible ? "revealed" : ""
          }`}
        >
          About Me
        </h2>
        <div
          className={`space-y-6 text-muted-foreground leading-relaxed text-lg scroll-reveal ${
            isVisible ? "revealed" : ""
          }`}
          style={{ transitionDelay: "0.1s" }}
        >
          <p className="hover:text-foreground transition-colors duration-300 text-justify">
            I'm a Full-Stack Software Engineer with 2+ years of experience
            specializing in modern web development. I excel at building
            enterprise-grade applications using React, Next.js, and TypeScript
            on the frontend, while leveraging Node.js, Express.js, and .NET/C#
            for robust backend solutions. My expertise includes designing
            RESTful APIs, implementing authentication systems with OAuth2, and
            integrating complex services like LDAP.
          </p>
          <p className="hover:text-foreground transition-colors duration-300 text-justify">
            On the frontend, I work extensively with React 18/19, Next.js 15
            Server Components, TanStack Query for efficient data management, and
            modern state management solutions like Redux Toolkit and Zustand.
            I'm proficient in TypeScript, TailwindCSS, and Ant Design for
            creating responsive, accessible user interfaces. For backend
            development, I build scalable APIs using .NET framework, implement
            server-side logic with Server Actions, and work with both PostgreSQL
            and MongoDB databases.
          </p>
          <p className="hover:text-foreground transition-colors duration-300 text-justify">
            I'm passionate about writing clean, maintainable code and following
            best practices in software engineering. I have hands-on experience
            with Docker containerization, CI/CD pipelines, and Git workflows. My
            approach combines technical excellence with collaborative
            problem-solving, working effectively within Agile/Scrum teams to
            deliver high-quality solutions that meet business objectives and
            exceed user expectations.
          </p>
        </div>
      </div>
    </section>
  );
}
