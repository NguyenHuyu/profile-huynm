"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export default function Contact() {
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

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20 bg-card/50 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-amber-200/10 rounded-full blur-3xl wave" />
        <div
          className="absolute bottom-0 right-1/4 w-64 h-64 bg-rose-200/10 rounded-full blur-3xl wave"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="max-w-2xl w-full text-center relative z-10">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-6 text-balance gradient-text scroll-reveal ${
            isVisible ? "revealed" : ""
          }`}
        >
          Get in Touch
        </h2>
        <p
          className={`text-lg text-muted-foreground mb-12 scroll-reveal ${
            isVisible ? "revealed" : ""
          }`}
          style={{ transitionDelay: "0.1s" }}
        >
          I'm always interested in hearing about new opportunities and projects.
          Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a
            href="mailto:yuhuynguyen.1204@gmail.com"
            onMouseMove={handleMouseMove}
            className={`bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 group cursor-follow magnetic scroll-reveal ${
              isVisible ? "revealed" : ""
            } relative overflow-hidden`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Mail className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative z-10 bounce-slow" />
            <h3 className="font-semibold text-foreground mb-2 relative z-10">
              Email
            </h3>
            <p className="text-sm text-muted-foreground break-all relative z-10 group-hover:text-foreground transition-colors">
              yuhuynguyen.1204@gmail.com
            </p>
          </a>

          <a
            href="tel:+84898695613"
            onMouseMove={handleMouseMove}
            className={`bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 group cursor-follow magnetic scroll-reveal ${
              isVisible ? "revealed" : ""
            } relative overflow-hidden`}
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Phone
              className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative z-10 bounce-slow"
              style={{ animationDelay: "0.2s" }}
            />
            <h3 className="font-semibold text-foreground mb-2 relative z-10">
              Phone
            </h3>
            <p className="text-sm text-muted-foreground relative z-10 group-hover:text-foreground transition-colors">
              +84 898 695 613
            </p>
          </a>

          <div
            className={`bg-background border border-border rounded-lg p-6 scroll-reveal ${
              isVisible ? "revealed" : ""
            } relative overflow-hidden group`}
            style={{ transitionDelay: "0.4s" }}
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <MapPin
              className="w-6 h-6 text-primary mx-auto mb-3 relative z-10 bounce-slow"
              style={{ animationDelay: "0.4s" }}
            />
            <h3 className="font-semibold text-foreground mb-2 relative z-10">
              Location
            </h3>
            <p className="text-sm text-muted-foreground relative z-10 group-hover:text-foreground transition-colors">
              Ho Chi Minh City, Vietnam
            </p>
          </div>
        </div>

        <div
          className={`flex justify-center gap-6 mb-12 scroll-reveal ${
            isVisible ? "revealed" : ""
          }`}
          style={{ transitionDelay: "0.5s" }}
        >
          <a
            href="https://github.com/NguyenHuyu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 rotate-on-hover pulse-ring"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/nguyenhuyu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 rotate-on-hover pulse-ring"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        <div
          className={`text-sm text-muted-foreground scroll-reveal ${
            isVisible ? "revealed" : ""
          }`}
          style={{ transitionDelay: "0.6s" }}
        >
          <p>© 2025 Nguyễn Minh Huy. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
