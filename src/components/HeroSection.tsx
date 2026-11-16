"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Mail, Sparkles, MapPin } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin, FaDiscord as Discord, FaInstagram as Instagram } from "react-icons/fa";
import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const stats = [
  { value: "50+", label: "REST Endpoints Integrated" },
  { value: "62.5%", label: "Build Pipeline Speedup" },
  { value: "Top 10", label: "Lam Robotics Challenge '25" },
  { value: "IRoC-U", label: "ISRO Challenge Contender" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-accent/15 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface border border-surface-hover text-xs font-mono text-muted shadow-sm hover:border-accent/40 transition-colors"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-foreground font-medium">Software Engineering Intern @ Lam Research</span>
          <span className="text-muted/60">•</span>
          <span className="text-muted hidden sm:inline">PES University &apos;27</span>
        </motion.div>

        {/* Name Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-foreground mb-4">
            Subham Dey
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-muted via-foreground to-accent mb-6 max-w-3xl">
            Software Engineer & Robotics Practitioner
          </h2>
        </motion.div>

        {/* Summary Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-base sm:text-lg text-muted max-w-2xl mb-10 leading-relaxed">
            Building at the intersection of reliable software infrastructure and robotics — from cloud microservices and automated CI/CD pipelines to dynamic control simulations and multimodal VLA models.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
        >
          {/* Primary LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/subhamdey33"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-[#0A66C2] hover:bg-[#004182] rounded-xl shadow-lg shadow-[#0A66C2]/20 hover:scale-105 active:scale-95 transition-all duration-200 gap-2.5"
          >
            <Linkedin className="w-5 h-5 fill-current" />
            <span>Connect on LinkedIn</span>
          </a>

          {/* View Projects */}
          <Link
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-background bg-accent hover:bg-accent-hover rounded-xl shadow-lg shadow-accent/20 hover:scale-105 active:scale-95 transition-all duration-200 gap-2"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* Download Resume */}
          <a
            href={`${basePath}/subham_resume.pdf`}
            download="subham_resume.pdf"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-foreground bg-surface hover:bg-surface-hover border border-surface-hover rounded-xl hover:scale-105 active:scale-95 transition-all duration-200 gap-2"
          >
            <FileText className="w-4 h-4 text-accent" />
            <span>Resume</span>
          </a>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 w-full grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl pt-6 border-t border-surface-hover/70"
        >
          {stats.map((s, idx) => (
            <div key={idx} className="p-3 sm:p-4 rounded-xl bg-surface/50 border border-surface-hover/50 text-center">
              <div className="text-xl sm:text-2xl font-black text-accent font-mono">{s.value}</div>
              <div className="text-xs text-muted mt-1 leading-snug">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Social Icons row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex items-center gap-6"
        >
          {[
            { icon: Linkedin, href: "https://www.linkedin.com/in/subhamdey33", label: "LinkedIn", color: "hover:text-[#0A66C2]" },
            { icon: Github, href: "https://github.com/cyan-ide7", label: "GitHub", color: "hover:text-foreground" },
            { icon: Mail, href: "mailto:subhamdey228540@gmail.com", label: "Email", color: "hover:text-accent" },
            { icon: Discord, href: "https://discordapp.com/users/1142797663234953296", label: "Discord", color: "hover:text-[#5865F2]" },
            { icon: Instagram, href: "https://www.instagram.com/cyan_ide7/", label: "Instagram", color: "hover:text-[#E1306C]" },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className={`text-muted ${item.color} transition-all duration-200 hover:-translate-y-1`}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
