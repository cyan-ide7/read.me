"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink, Send } from "lucide-react";
import {
  FaGithub as Github,
  FaLinkedin as Linkedin,
  FaDiscord as Discord,
  FaInstagram as Instagram,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative bg-surface/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-accent font-mono text-sm tracking-wider uppercase">
            Let&apos;s Connect
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mt-1">
            Get In Touch
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto mt-4">
            Whether you want to discuss software engineering, QA automation, dynamic control systems, or robotics research — feel free to reach out.
          </p>
          <div className="mt-4 h-px bg-surface-hover w-24 mx-auto"></div>
        </motion.div>

        {/* Featured LinkedIn Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-r from-[#0A66C2]/15 via-surface to-surface border border-[#0A66C2]/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden group">
            <div className="flex items-center gap-5 text-left w-full md:w-auto">
              <div className="w-16 h-16 rounded-2xl bg-[#0A66C2] flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#0A66C2]/30">
                <Linkedin className="w-8 h-8 fill-current" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#0A66C2] font-semibold">
                  Preferred Professional Channel
                </span>
                <h3 className="text-2xl font-bold text-foreground mt-0.5">
                  Connect on LinkedIn
                </h3>
                <p className="text-muted text-sm mt-1 max-w-xl">
                  Stay updated on my software engineering projects at Lam Research, robotics research, and tech updates.
                </p>
                <div className="text-xs font-mono text-muted/80 mt-2">
                  linkedin.com/in/subhamdey33
                </div>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/subhamdey33"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#0A66C2] hover:bg-[#004182] rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all duration-200 shrink-0 w-full md:w-auto justify-center"
            >
              <span>View LinkedIn Profile</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Contact Grid: Email & Quick Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Email card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-surface border border-surface-hover p-6 sm:p-7 rounded-2xl flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">Email Directly</h3>
              <p className="text-muted text-sm mb-4">
                For project inquiries, internship feedback, or collaborative opportunities.
              </p>
              <div className="text-sm font-mono text-accent mb-6 break-all">
                subhamdey228540@gmail.com
              </div>
            </div>

            <a
              href="mailto:subhamdey228540@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-background bg-accent hover:bg-accent-hover rounded-xl transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Send an Email</span>
            </a>
          </motion.div>

          {/* Quick info card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="bg-surface border border-surface-hover p-6 sm:p-7 rounded-2xl flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">Details & Location</h3>
              <p className="text-muted text-sm mb-4">
                Available for software engineering and robotics opportunities.
              </p>

              <div className="space-y-3 pt-2 text-sm">
                <div className="flex items-center gap-3 text-muted">
                  <MapPin className="w-4 h-4 text-accent shrink-0" />
                  <span>Bengaluru, Karnataka, India</span>
                </div>
                <div className="flex items-center gap-3 text-muted">
                  <Phone className="w-4 h-4 text-accent shrink-0" />
                  <span className="font-mono">+91-9606006563</span>
                </div>
                <div className="flex items-center gap-3 text-muted">
                  <Github className="w-4 h-4 text-accent shrink-0" />
                  <a
                    href="https://github.com/cyan-ide7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono hover:text-accent transition-colors"
                  >
                    github.com/cyan-ide7
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-surface-hover flex items-center gap-4">
              <a
                href="https://github.com/cyan-ide7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/subhamdey33"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-[#0A66C2] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://discordapp.com/users/1142797663234953296"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-[#5865F2] transition-colors"
                aria-label="Discord"
              >
                <Discord className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/cyan_ide7/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-[#E1306C] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
