"use client";

import { useState, useEffect } from "react";
import { Menu, X, FileText, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin as Linkedin, FaGithub as Github } from "react-icons/fa";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Posts", href: "#posts" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-surface-hover shadow-lg shadow-black/20"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="#"
              className="text-lg sm:text-xl font-bold tracking-tight text-foreground hover:opacity-90 transition-opacity font-mono flex items-center gap-1"
            >
              <span className="text-accent">{"<"}</span>
              <span>subham.dey</span>
              <span className="text-accent">{"/>"}</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Quick Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/subhamdey33"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-[#0A66C2] bg-[#0A66C2]/10 border border-[#0A66C2]/30 hover:bg-[#0A66C2] hover:text-white transition-all duration-200"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`${basePath}/subham_resume.pdf`}
              download="subham_resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-foreground bg-surface hover:bg-surface-hover border border-surface-hover transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-accent" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/subhamdey33"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 text-[#0A66C2] sm:hidden"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-muted hover:text-foreground focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-surface border-b border-surface-hover overflow-hidden"
          >
            <div className="px-4 pt-3 pb-5 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-base font-medium text-muted hover:text-accent hover:bg-surface-hover transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-3 border-t border-surface-hover/80 flex flex-col gap-2">
                <a
                  href="https://www.linkedin.com/in/subhamdey33"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#0A66C2] rounded-lg"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>Connect on LinkedIn</span>
                </a>
                <a
                  href={`${basePath}/subham_resume.pdf`}
                  download="subham_resume.pdf"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-foreground bg-background border border-surface-hover rounded-lg"
                >
                  <FileText className="w-4 h-4 text-accent" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
