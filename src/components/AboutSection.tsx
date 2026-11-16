"use client";

import { motion } from "framer-motion";
import { GraduationCap, Terminal, Cpu } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-accent font-mono text-sm tracking-wider uppercase">Background</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-1 flex items-center">
            <span className="text-accent mr-3">01.</span> About Me
          </h2>
          <div className="mt-4 h-px bg-surface-hover w-full max-w-md"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-5"
          >
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              Computer Science undergraduate at <strong className="text-foreground">PES University</strong> and Software Engineering Intern at <strong className="text-foreground">Lam Research</strong>.
            </p>
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              I build at the intersection of scalable software systems and robotics — developing cloud REST microservices, automated CI/CD pipelines, dynamic control simulations, and multimodal Vision-Language-Action (VLA) robotic models.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-surface border border-surface-hover flex items-start gap-3">
                <Terminal className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-foreground font-semibold text-sm">System Reliability</h4>
                  <p className="text-xs text-muted mt-1">End-to-end regression suites, Docker Compose test frameworks, and CI/CD verification.</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-surface border border-surface-hover flex items-start gap-3">
                <Cpu className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-foreground font-semibold text-sm">Robotics & Simulation</h4>
                  <p className="text-xs text-muted mt-1">ROS / ROS 2, PyTorch VLA policies, CoppeliaSim, and mathematical control modeling.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education & Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-surface border border-surface-hover rounded-2xl p-6 sm:p-7 relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-muted tracking-wider">Education</span>
                  <h3 className="text-lg font-bold text-foreground">PES University</h3>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="text-accent font-medium text-sm">
                  Bachelor of Technology in Computer Science and Engineering
                </div>
                <div className="text-muted text-xs font-mono">
                  2023 – 2027 • Bengaluru, India
                </div>
              </div>

              <p className="text-xs text-muted leading-relaxed border-t border-surface-hover/80 pt-3">
                Focus on Computer Science fundamentals, software architectures, distributed systems, dynamic control theory, and machine learning pipelines.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
