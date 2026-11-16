"use client";

import Link from "next/link";
import { ArrowUp, Heart } from "lucide-react";
import { FaLinkedin as Linkedin, FaGithub as Github, FaDiscord as Discord } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-surface-hover/80 bg-background py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <Link
              href="#"
              className="text-lg font-bold font-mono tracking-tight text-foreground hover:text-accent transition-colors"
            >
              <span className="text-accent">{"<"}</span>subham.dey<span className="text-accent">{"/>"}</span>
            </Link>
            <p className="text-xs text-muted mt-1">
              Software Engineer & Robotics Practitioner • Bengaluru, India
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted">
            <Link href="#about" className="hover:text-accent transition-colors">
              About
            </Link>
            <Link href="#experience" className="hover:text-accent transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="hover:text-accent transition-colors">
              Projects
            </Link>
            <a
              href="https://www.linkedin.com/in/subhamdey33"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A66C2] hover:underline flex items-center gap-1 font-medium"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/cyan-ide7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors p-2"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/subhamdey33"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-[#0A66C2] transition-colors p-2"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-surface border border-surface-hover text-muted hover:text-accent hover:border-accent/40 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-surface-hover/50 text-center text-xs text-muted font-mono">
          © {new Date().getFullYear()} Subham Dey. Built with Next.js, React & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
