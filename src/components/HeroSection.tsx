"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Mail } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin, FaDiscord as Discord, FaInstagram as Instagram } from "react-icons/fa";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-accent font-mono text-sm sm:text-base mb-4 tracking-wider uppercase">
            Hi, my name is
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-foreground mb-4">
            Subham Dey.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-muted mb-8 max-w-3xl">
            Computer Science | Robotics & Automation | Multimodal VLA
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-lg sm:text-xl text-muted max-w-2xl mb-10 leading-relaxed">
            I'm passionate about robotics, automation & systems. I am currently working on multimodal vla models and on system Architecture design & will be updating the progress here
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-background bg-accent hover:bg-accent-hover rounded-full transition-all hover:scale-105 active:scale-95"
          >
            View Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-foreground bg-surface hover:bg-surface-hover border border-surface-hover rounded-full transition-all hover:scale-105 active:scale-95"
          >
            Contact Me
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 flex items-center space-x-6"
        >
          {[
            { icon: Github, href: "https://github.com/cyan-ide7" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/subhamdey33" },
            { icon: Mail, href: "mailto:subhamdey228540@gmail.com" },
            { icon: Discord, href: "https://discordapp.com/users/1142797663234953296" },
            { icon: Instagram, href: "https://www.instagram.com/cyan_ide7/" },
            { icon: FileText, href: "/read.me/public/Subham_Dey_Resume.pdf" },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              target="_blank"
              className="text-muted hover:text-accent transition-colors hover:-translate-y-1 transform duration-200"
            >
              <item.icon className="w-6 h-6" />
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
