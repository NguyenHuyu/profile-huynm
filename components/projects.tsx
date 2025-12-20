"use client";

import { useEffect, useRef, useState } from "react";

export default function Projects() {
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
  const projects = [
    {
      title: "Ride on Adventure",
      description:
        "Web app and website for brands, stay, and tour booking platform",
      tech: [
        "Next.js 15",
        "TailwindCSS",
        "Node.js",
        "Express.js",
        "PostgreSQL",
      ],
      highlights: [
        "Fullstack development with Server Components",
        "RESTful APIs for booking logic",
        "Responsive UI with SSR/SSG optimization",
      ],
    },
    {
      title: "Academic Affairs Management System",
      description:
        "Portal for managing student records and academic operations",
      tech: ["Next.js 15", "TailwindCSS", "TanStack Query", "Server Actions"],
      highlights: [
        "Led frontend development as Lead Frontend Developer",
        "Implemented efficient data fetching and caching",
        "Built with SSR/SSG for SEO and performance optimization",
      ],
    },
    {
      title: "Pages Builder",
      description:
        "Drag-and-drop page builder allowing users to configure custom pages",
      tech: ["React", "TypeScript", "TailwindCSS"],
      highlights: [
        "Implemented drag-and-drop functionality",
        "Team collaboration on feature development",
        "Reusable component architecture",
      ],
    },
    {
      title: "AI Painting Contest Website",
      description:
        "National contest platform for AI art submissions and tracking",
      tech: ["Next.js", "React", "TypeScript"],
      highlights: [
        "Built submission and tracking system",
        "Created competition platform UI",
        "Handled user entry management",
      ],
    },
    {
      title: "Accounting Management System",
      description:
        "Full-stack accounting application for managing financial records and transactions",
      tech: ["React", ".NET", "C#", "SQL Server", "TailwindCSS"],
      highlights: [
        "Built responsive frontend with React and modern UI components",
        "Developed backend APIs using .NET and C# for business logic",
        "Implemented financial transaction tracking and reporting features",
        "Designed database schema for accounting data management",
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="min-h-screen flex items-center justify-center px-4 md:px-8 py-10 md:py-20"
    >
      <div className="max-w-4xl w-full">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-4 gradient-text scroll-reveal ${
            isVisible ? "revealed" : ""
          }`}
        >
          Featured Projects
        </h2>
        <p
          className={`text-muted-foreground mb-12 text-lg scroll-reveal ${
            isVisible ? "revealed" : ""
          }`}
          style={{ transitionDelay: "0.1s" }}
        >
          Showcase of key projects and achievements
        </p>

        <div className="space-y-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`group bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 border-gradient card-hover scroll-reveal ${
                isVisible ? "revealed" : ""
              } relative overflow-hidden`}
              style={{ transitionDelay: `${0.2 + idx * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-rose-200/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold gradient-text mb-2 group-hover:scale-105 transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="text-sm font-medium text-foreground mb-3">
                    Technologies:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-sm text-foreground hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                        style={{ transitionDelay: `${techIdx * 0.05}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        className="text-sm text-muted-foreground flex gap-2 hover:text-foreground hover:translate-x-2 transition-all duration-300"
                        style={{ transitionDelay: `${hIdx * 0.05}s` }}
                      >
                        <span className="text-primary">▸</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
