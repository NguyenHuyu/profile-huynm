"use client";

import { useEffect, useRef, useState } from "react";

export default function Education() {
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
  const educationData = [
    {
      period: "2020-2024",
      school: "The Saigon International University",
      degree: "Software Engineering",
      details:
        "Bachelor's degree in Software Engineering with focus on web development and software architecture",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="education"
      className="min-h-screen flex items-center justify-center px-4 md:px-8 md:py-20"
    >
      <div className="max-w-3xl w-full">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 gradient-text scroll-reveal ${
            isVisible ? "revealed" : ""
          }`}
        >
          Education
        </h2>

        <div className="space-y-6">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className={`border border-border rounded-xl p-8 bg-card/50 hover:bg-card/80 transition-all duration-300 border-gradient scroll-reveal ${
                isVisible ? "revealed" : ""
              } relative group overflow-hidden`}
              style={{ transitionDelay: `${0.1 + idx * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <p className="text-sm text-primary font-semibold mb-2">
                      {edu.period}
                    </p>
                    <h3 className="text-2xl font-bold text-primary mb-1 group-hover:scale-105 transition-transform duration-300">
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-semibold text-foreground">
                      {edu.school}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300">
                  {edu.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
