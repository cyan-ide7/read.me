"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import {
  FaGithub as Github,
  FaLinkedin as Linkedin,
  FaDiscord as Discord,
  FaInstagram as Instagram,
} from "react-icons/fa";

const socials = [
  {
    icon: Github,
    href: "https://github.com/cyan-ide7",
    label: "GitHub",
    color: "hover:text-foreground",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/subhamdey33",
    label: "LinkedIn",
    color: "hover:text-[#0A66C2]",
  },
  {
    icon: Discord,
    href: "https://discordapp.com/users/1142797663234953296",
    label: "Discord",
    color: "hover:text-[#5865F2]",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/cyan_ide7/",
    label: "Instagram",
    color: "hover:text-[#E1306C]",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative bg-surface/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-accent font-mono text-sm sm:text-base mb-4 tracking-wider uppercase">
            04. What&apos;s Next?
          </h2>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-muted text-lg mb-12 max-w-2xl mx-auto">
            I&apos;m currently looking for new opportunities in robotics and software engineering.
            Whether you have a question or just want to say hi, would love to nerd out if you have similar ideas and get feedback!
          </p>

          {/* Email card */}
          <div className="bg-surface border border-surface-hover p-12 rounded-2xl max-w-xl mx-auto text-center shadow-lg mb-16">
            <Mail className="w-12 h-12 text-accent mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-4">Email Me Directly</h3>
            <p className="text-muted mb-8 font-mono">subhamdey228540@gmail.com</p>
            <a
              href="mailto:subhamdey228540@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-background bg-accent hover:bg-accent-hover rounded-lg transition-all hover:scale-105 active:scale-95"
            >
              <Send className="w-5 h-5 mr-2" />
              Say Hello
            </a>
          </div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-muted font-mono text-sm uppercase tracking-widest mb-8">
              Or find me on
            </p>
            <div className="flex items-center justify-center gap-5 flex-wrap">
              {socials.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`group flex flex-col items-center gap-2 text-muted ${color} transition-all duration-200 hover:-translate-y-1`}
                >
                  <span className="flex items-center justify-center w-14 h-14 rounded-xl bg-surface border border-surface-hover group-hover:border-accent/40 shadow transition-colors duration-200">
                    <Icon className="w-6 h-6" />
                  </span>
                  <span className="text-xs font-mono">{label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
