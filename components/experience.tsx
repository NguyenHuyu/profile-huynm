"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Experience() {
  const [expandedIdx, setExpandedIdx] = useState(0);
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

  const experiences = [
    {
      period: "08/2025 - Present",
      company: "Opus Solution",
      position: "Software Engineer",
      description:
        "Developed and optimized Tasken, an enterprise-grade ERP SaaS platform. Built large-scale frontend modules using React 18/19, Redux Toolkit, and RTK Query. Worked with .NET backend services, developing RESTful APIs and integrating with frontend applications.",
      highlights: [
        "Designed and implemented feature-based architecture with code splitting and lazy loading",
        "Integrated complex backend APIs with server-side pagination and advanced filtering",
        "Developed .NET backend services and RESTful APIs using C# and .NET framework",
        "Built and maintained .NET Web APIs for enterprise features and business logic",
        "Participated in migration from React 18 to React 19, improving build speed and stability",
        "Collaborated with Backend, QA, and Product teams in Agile/Scrum workflow",
      ],
    },
    {
      period: "01/2023 - 05/2025",
      company: "SIU AILAB",
      position: "Frontend Developer",
      description:
        "Led frontend development for multiple projects including academic management systems and AI platforms.",
      highlights: [
        "Built Academic Affairs Management System using Next.js 15, TailwindCSS, and Server Actions",
        "Integrated TanStack Query for efficient data fetching and implemented SSR/SSG",
        "Developed Forgot Password System with React.js, OAuth2, and LDAP integration",
        "Created AI Painting Contest Website for national competition platform",
      ],
    },
    {
      period: "02/2023 - 06/2023",
      company: "EXCEDO",
      position: "Frontend Developer",
      description:
        "Built Real Estate Map web application using Next.js and Maplibre for interactive real estate data visualization.",
      highlights: [
        "Implemented interactive map visualization similar to Google Maps",
        "Built responsive UI for real estate data display",
        "Optimized performance for map-based data handling",
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="min-h-screen flex items-center justify-center px-4 md:px-8 md:py-20"
    >
      <div className="max-w-3xl w-full">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-4 gradient-text scroll-reveal ${
            isVisible ? "revealed" : ""
          }`}
        >
          Work Experience
        </h2>
        <p
          className={`text-muted-foreground mb-12 text-lg scroll-reveal ${
            isVisible ? "revealed" : ""
          }`}
          style={{ transitionDelay: "0.1s" }}
        >
          Professional experience and achievements
        </p>

        <div className="space-y-4">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`border border-border rounded-xl overflow-hidden bg-card/50 hover:bg-card/80 transition-all duration-300 border-gradient scroll-reveal ${
                isVisible ? "revealed" : ""
              } relative group`}
              style={{ transitionDelay: `${0.2 + idx * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <button
                onClick={() => setExpandedIdx(expandedIdx === idx ? -1 : idx)}
                className="w-full p-6 flex items-start justify-between hover:bg-card/50 transition-colors text-left relative z-10"
              >
                <div className="flex-1">
                  <p className="text-sm text-primary font-semibold mb-1">
                    {exp.period}
                  </p>
                  <h3 className="text-xl font-bold text-foreground">
                    {exp.position}
                  </h3>
                  <p className="text-foreground font-medium">{exp.company}</p>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-primary transition-transform duration-300 ${
                    expandedIdx === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedIdx === idx && (
                <div className="px-6 pb-6 border-t border-border/50 pt-4 animate-in fade-in duration-300 relative z-10">
                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        className="text-muted-foreground flex gap-3 hover:text-foreground transition-colors duration-300"
                        style={{ animationDelay: `${hIdx * 0.05}s` }}
                      >
                        <span className="text-primary mt-1 shrink-0">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
