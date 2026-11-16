"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Sparkles, Navigation } from "lucide-react";

const achievements = [
  {
    title: "Lam Research Robotics Challenge 2025",
    badge: "Top 10 Finalist (Selected among 7,000+ national applicants)",
    date: "2025",
    category: "Hardware Verification & Embedded Robotics",
    description:
      "Architected an embedded arena control unit integrating load cells, relays, and peristaltic pumps for closed-loop fluid dispensing and hardware verification under strict competitive tolerances.",
    icon: Trophy,
    highlight: "Top 10 out of 7,000+ applicants nationwide",
    tags: ["Embedded Systems", "Load Cells", "Hardware Verification", "Relays & Pumps", "Control Units"],
  },
  {
    title: "ISRO Robotics Challenge (IRoC-U) 2026",
    badge: "Selected National Finalist / Contender",
    date: "2026",
    category: "Autonomous Flight & Computer Vision",
    description:
      "Engineered vision-guided computer vision modules utilizing ArUco fiducial marker tracking for autonomous precision landing in GPS-denied quadcopter environments.",
    icon: Navigation,
    highlight: "Autonomous precision landing in GPS-denied environments",
    tags: ["Computer Vision", "ArUco Markers", "ISRO IRoC-U", "UAV / Quadcopters", "GPS-Denied Landing"],
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-accent font-mono text-sm tracking-wider uppercase">Honors & Competitions</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-1 flex items-center">
            <span className="text-accent mr-3">03.</span> Achievements
          </h2>
          <div className="mt-4 h-px bg-surface-hover w-full max-w-md"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-surface border border-surface-hover rounded-2xl p-7 hover:border-accent/40 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl pointer-events-none group-hover:bg-accent/20 transition-colors" />

                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-accent/15 text-accent border border-accent/30 text-right">
                      {item.badge}
                    </span>
                  </div>

                  <div className="mb-2">
                    <span className="text-xs font-mono uppercase text-muted tracking-widest">{item.category}</span>
                    <h3 className="text-xl font-bold text-foreground mt-1 group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-muted text-sm sm:text-base leading-relaxed my-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-surface-hover flex flex-wrap gap-2 mt-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-1 rounded bg-background text-muted border border-surface-hover"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
