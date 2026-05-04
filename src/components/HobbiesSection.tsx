"use client";

import { motion } from "framer-motion";
import { Gamepad2, Wrench, Cuboid, Camera, Code, BookOpen } from "lucide-react";

const hobbies = [
  {
    name: "3D Printing & Design",
    description: "Designing custom parts in Fusion 360 and printing them in PETG/TPU.",
    icon: Cuboid,
  },
  {
    name: "Hardware Hacking",
    description: "Reverse engineering old electronics and repurposing them.",
    icon: Wrench,
  },
  {
    name: "Indie Gaming",
    description: "Playing and occasionally developing small 2D platformers.",
    icon: Gamepad2,
  },
  {
    name: "Photography",
    description: "Capturing landscapes and macro shots of circuits.",
    icon: Camera,
  },
  {
    name: "Open Source",
    description: "Contributing to ROS packages and various Linux tools.",
    icon: Code,
  },
  {
    name: "Sci-Fi Books",
    description: "Avid reader of hard sci-fi and cyberpunk literature.",
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
          className="mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 inline-flex items-center">
            <span className="text-accent mr-3">03.</span> Beyond Coding
          </h2>
          <p className="text-muted max-w-2xl mx-auto mt-4">
            When I'm not staring at a terminal or debugging C++ pointers, you can find me exploring these other passions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-surface border border-surface-hover p-6 rounded-xl text-center hover:border-accent/50 transition-colors group"
            >
              <div className="w-14 h-14 mx-auto bg-background rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                <hobby.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{hobby.name}</h3>
              <p className="text-sm text-muted">{hobby.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
