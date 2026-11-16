"use client";

import { motion } from "framer-motion";
import { Gamepad2, Cuboid, BookOpen, Music } from "lucide-react";

const hobbies = [
  {
    name: "3D Printing & Hardware Prototyping",
    description: "Designing functional mechanisms and custom enclosures in CAD, printed with PETG and TPU.",
    icon: Cuboid,
  },
  {
    name: "Acoustic Instruments",
    description: "Playing acoustic guitar and ukulele, experimenting with harmonic structures.",
    icon: Music,
  },
  {
    name: "Indie Game Development",
    description: "Exploring physics-based game mechanics and 2D dynamic simulations.",
    icon: Gamepad2,
  },
  {
    name: "Sci-Fi & Technical Literature",
    description: "Hard sci-fi explorations by Isaac Asimov and Liu Cixin, plus dynamic systems literature.",
    icon: BookOpen,
  },
];

export default function HobbiesSection() {
  return (
    <section id="hobbies" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-accent font-mono text-sm tracking-wider uppercase">Interests</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-1 flex items-center">
            <span className="text-accent mr-3">06.</span> Beyond Engineering
          </h2>
          <div className="mt-4 h-px bg-surface-hover w-full max-w-md"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;
            return (
              <motion.div
                key={hobby.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-surface border border-surface-hover p-6 rounded-2xl hover:border-accent/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-background border border-surface-hover rounded-xl flex items-center justify-center mb-4 group-hover:border-accent/40 group-hover:text-accent transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {hobby.name}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{hobby.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
