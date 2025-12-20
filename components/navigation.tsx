"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMagneticMove = (
    e: React.MouseEvent<HTMLElement>,
    element: HTMLElement
  ) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    element.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleMagneticLeave = (element: HTMLElement) => {
    element.style.transform = `translate(0, 0)`;
  };

  const navItems = [
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    { label: "Education", href: "/#education" },
    { label: "Experience", href: "/#experience" },
    { label: "Projects", href: "/#projects" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed left-0 top-0 h-screen w-64 bg-linear-to-b from-card to-card/50 border-r border-border p-8 md:flex flex-col justify-between hidden lg:flex backdrop-blur-sm">
        <div>
          <Link
            href="#"
            className="text-3xl  text-primary font-bold  mb-16 block hover:scale-110 transition-transform magnetic"
          >
            NMH(huynm)
          </Link>
          <ul className="space-y-6">
            {navItems.map((item, idx) => (
              <li key={item.label}>
                {item.href.startsWith("/") ? (
                  <Link
                    href={item.href}
                    onMouseMove={(e) => handleMagneticMove(e, e.currentTarget)}
                    onMouseLeave={(e) => handleMagneticLeave(e.currentTarget)}
                    className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group magnetic"
                    style={{ transitionDelay: `${idx * 0.05}s` }}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    onMouseMove={(e) => handleMagneticMove(e, e.currentTarget)}
                    onMouseLeave={(e) => handleMagneticLeave(e.currentTarget)}
                    className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group magnetic"
                    style={{ transitionDelay: `${idx * 0.05}s` }}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4 justify-start">
          <a
            href="https://github.com/NguyenHuyu"
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={(e) => handleMagneticMove(e, e.currentTarget)}
            onMouseLeave={(e) => handleMagneticLeave(e.currentTarget)}
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 magnetic pulse-ring"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/nguyenhuyu/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={(e) => handleMagneticMove(e, e.currentTarget)}
            onMouseLeave={(e) => handleMagneticLeave(e.currentTarget)}
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 magnetic pulse-ring"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:yuhuynguyen.1204@gmail.com"
            onMouseMove={(e) => handleMagneticMove(e, e.currentTarget)}
            onMouseLeave={(e) => handleMagneticLeave(e.currentTarget)}
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 magnetic pulse-ring"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 lg:hidden text-foreground hover:text-primary transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-linear-to-b from-card to-background/95 z-40 lg:hidden pt-20 px-4">
          <ul className="space-y-6">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.href.startsWith("/") ? (
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-foreground hover:text-primary transition-colors text-lg font-medium"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-foreground hover:text-primary transition-colors text-lg font-medium"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
