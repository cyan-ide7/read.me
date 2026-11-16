"use client";

import { motion } from "framer-motion";
import { Code, CheckSquare, Server, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "C/C++", "JavaScript", "TypeScript", "SQL", "Bash"],
    description: "Core languages used for systems programming, backend architectures, and robotics control.",
  },
  {
    title: "Software Testing & Automation",
    icon: CheckSquare,
    skills: [
      "Integration Testing",
      "Regression Testing",
      "API Testing",
      "Test Automation",
      "CI/CD Pipeline Verification",
      "Edge-case Testing Protocols",
    ],
    description: "Containerized QA test suites, automated build gate verification, and robust regression isolation.",
  },
  {
    title: "Backend, Data & AI Systems",
    icon: Server,
    skills: [
      "REST APIs",
      "LangChain",
      "Agentic Workflows",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Linux",
      "Jenkins",
      "GitHub Actions",
      "Power BI",
    ],
    description: "Microservice synchronization, LLM ticket triage pipelines, and containerized deployment infrastructure.",
  },
  {
    title: "Robotics & Simulation",
    icon: Cpu,
    skills: [
      "ROS / ROS 2",
      "PyTorch",
      "OpenCV",
      "YOLOv8",
      "Gazebo",
      "CoppeliaSim",
      "Model Predictive Control (MPC)",
      "Runge–Kutta Numerical Integration",
    ],
    description: "Multimodal VLA policy training, mathematical dynamic modeling, and visual fiducial tracking.",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative bg-surface/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-accent font-mono text-sm tracking-wider uppercase">Capabilities</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-1 flex items-center">
            <span className="text-accent mr-3">05.</span> Technical Skills
          </h2>
          <div className="mt-4 h-px bg-surface-hover w-full max-w-md"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-surface border border-surface-hover rounded-2xl p-7 hover:border-accent/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{cat.title}</h3>
                </div>

                <p className="text-muted text-sm mb-5 leading-relaxed">
                  {cat.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs sm:text-sm font-mono px-3 py-1.5 rounded-lg bg-background border border-surface-hover hover:border-accent/50 text-foreground transition-colors"
                    >
                      {skill}
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
