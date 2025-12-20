"use client";

import { useEffect, useRef, useState } from "react";
import { Code2, Database, Server } from "lucide-react";

export default function Skills() {
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

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      skills: [
        "React & Next.js",
        "TypeScript",
        "TailwindCSS",
        "Ant Design",
        "React Hook Form",
        "TanStack Query",
        "Server Components",
      ],
      color: "from-amber-400 to-rose-400",
    },
    {
      title: "Backend & APIs",
      icon: Server,
      skills: [
        "Node.js & Express.js",
        ".NET & C#",
        "RESTful APIs",
        "OAuth2 Authentication",
        "LDAP Integration",
        "Server Actions",
        "API Design",
      ],
      color: "from-rose-400 to-amber-500",
    },
    {
      title: "Database & DevOps",
      icon: Database,
      skills: [
        "PostgreSQL",
        "MongoDB",
        "Git & GitLab",
        "Docker",
        "SQL Server",
        "CI/CD Pipelines",
        "Redux Toolkit",
        "Zustand State Management",
        "Azure DevOps",
      ],
      color: "from-amber-300 to-rose-300",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="min-h-screen flex items-center justify-center px-4 md:px-8 md:py-20"
    >
      <div className="max-w-5xl w-full">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-4 gradient-text scroll-reveal ${
            isVisible ? "revealed" : ""
          }`}
        >
          Skills & Technologies
        </h2>
        <p
          className={`text-muted-foreground mb-12 text-lg scroll-reveal ${
            isVisible ? "revealed" : ""
          }`}
          style={{ transitionDelay: "0.1s" }}
        >
          A comprehensive toolkit for building modern, scalable applications
          across the full stack
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className={`p-0.5 rounded-xl card-hover group scroll-reveal ${
                  isVisible ? "revealed" : ""
                }`}
                style={{ transitionDelay: `${0.2 + idx * 0.1}s` }}
              >
                <div className="bg-card rounded-xl p-8 h-full border border-border/50 group-hover:border-primary/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className={`bg-linear-to-r ${category.color} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-bold text-primary">
                        {category.title}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {category.skills.map((skill, skillIdx) => (
                        <li
                          key={skill}
                          className="text-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 hover:translate-x-2"
                          style={{ transitionDelay: `${skillIdx * 0.05}s` }}
                        >
                          <span className="text-primary">•</span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
