"use client";

import { motion } from "framer-motion";
import { ExternalLink, FolderGit2, Star } from "lucide-react";
import { FaGithub as Github, FaYoutube as Youtube } from "react-icons/fa";
import Link from "next/link";

type Project = {
  title: string;
  category: string;
  description: string;
  bullets?: string[];
  tech: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Online Food Delivery System – QA Framework",
    category: "Software QA & CI/CD Automation",
    description:
      "A containerized end-to-end QA automation framework featuring boundary-value, negative, and edge-case testing protocols integrated into CI/CD build gates.",
    bullets: [
      "Designed & containerized Docker Compose QA automation suite covering functional, integration, regression, security, and performance test suites.",
      "Authored regression artifacts integrated into CI/CD gates to isolate component failure modes.",
    ],
    tech: ["Docker Compose", "Python", "REST APIs", "CI/CD", "Jenkins", "PyTest"],
    github: "https://github.com/cyan-ide7",
    featured: true,
  },
  {
    title: "Control System Simulation & Dynamic Verification",
    category: "Dynamic Modeling & Simulation",
    description:
      "Real-time mathematical simulation environment evaluating closed-loop stability for single and double inverted pendulums under noise and latency constraints.",
    bullets: [
      "Leveraged fourth-order Runge–Kutta numerical integration for real-time trajectory stability evaluation.",
      "Benchmarked PID, LQR, and Model Predictive Control (MPC) against Gaussian noise, signal quantization, actuator deadzones, and latency.",
    ],
    tech: ["Python", "JavaScript", "Three.js", "NumPy", "SciPy", "Control Systems"],
    github: "https://github.com/cyan-ide7/control_algorithms",
    demo: "https://www.youtube.com/watch?v=bdfsF4BGl44&list=PLLppfgRDKGwIE5ULX0aQIiCxNyj5cWP5L&index=1",
    featured: true,
  },
  {
    title: "Vision-Language-Action (VLA) Robotic Pipeline",
    category: "Multimodal AI & Robotics",
    description:
      "Offline multi-modal control architecture for a 6-DOF NiryoOne robotic arm fusing dual-camera spatial perception, natural language goal embeddings, and telemetry.",
    bullets: [
      "Trained a 22.6M-parameter behavioral cloning policy on 100 teleoperated expert trajectories.",
      "Fused dual ResNet-18 vision backbones with multi-layer perceptrons for 7D end-effector trajectory planning.",
    ],
    tech: ["Python", "PyTorch", "YOLOv8", "OpenCV", "CoppeliaSim", "VLA Models"],
    github: "https://github.com/cyan-ide7/vla_arm",
    demo: "https://youtu.be/eMsCmyZP-U8",
    featured: true,
  },
  {
    title: "Quadruped Robot Simulation & Gait Analysis",
    category: "Robotics & Kinematics",
    description:
      "Simulated quadruped robots (Spot, ANYmal) with realistic gait analysis and dynamic locomotion patterns in Gazebo.",
    bullets: [
      "Performed simulation and gait analysis of quadruped platforms.",
      "Supported migration of legacy ROS1 packages to modern ROS2 systems.",
    ],
    tech: ["ROS", "ROS 2", "Gazebo", "C++", "Python", "Kinematics"],
    demo: "https://youtu.be/RT7ClBp0tSs?si=uSeqIIAvbpHPvBJB",
  },
  {
    title: "Digital Twin Space Suit Telemetry Platform",
    category: "Digital Twins & IoT",
    description:
      "A real-time telemetry monitoring system and digital twin implementation for tracking vital space suit physiological and environmental metrics.",
    bullets: [
      "Containerized microservice architecture reading real-time bio-gear and environmental telemetry.",
      "Real-time event logging and fault alert monitoring.",
    ],
    tech: ["Python", "Docker", "Digital Twin", "Bio-Gears", "Telemetry"],
    github: "https://github.com/cyan-ide7/digital_twin_spaceSuite_monitoring",
  },
  {
    title: "3D Reconstruction with Gaussian Splatting",
    category: "Computer Vision & NeRF",
    description:
      "High-fidelity 3D radiance field reconstruction of real-world objects and physical scenes using 3D Gaussian Splatting techniques.",
    bullets: [
      "Extracted point cloud features and camera poses via COLMAP.",
      "Synthesized view-dependent real-time scene renders with superSplat.",
    ],
    tech: ["Python", "COLMAP", "Gaussian Splatting", "NeRF", "SuperSplat"],
    demo: "https://youtu.be/Xunfdvgz9Kc?si=CYLgU-H1GxIUN-C6",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-accent font-mono text-sm tracking-wider uppercase">Portfolio Work</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-1 flex items-center">
            <span className="text-accent mr-3">04.</span> Featured Projects
          </h2>
          <div className="mt-4 h-px bg-surface-hover w-full max-w-md"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="bg-surface border border-surface-hover rounded-2xl h-full flex flex-col p-6 hover:border-accent/40 hover:-translate-y-1.5 transition-all duration-300 shadow-md group relative overflow-hidden">
                {project.featured && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/25">
                    <Star className="w-3 h-3 fill-accent" />
                    <span>Featured</span>
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-background border border-surface-hover flex items-center justify-center text-accent group-hover:border-accent/50 transition-colors">
                    <FolderGit2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-muted tracking-wider block">
                      {project.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-muted text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {project.bullets && (
                  <ul className="space-y-2 mb-6">
                    {project.bullets.map((b, i) => (
                      <li key={i} className="text-xs text-muted/90 flex items-start gap-2">
                        <span className="text-accent mt-0.5">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-auto pt-4 border-t border-surface-hover/80 flex flex-col gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-background text-muted border border-surface-hover"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-1">
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-muted hover:text-accent transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </Link>
                    )}
                    {project.demo && (
                      <Link
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-muted hover:text-accent transition-colors"
                      >
                        {project.demo.includes("youtu") ? (
                          <Youtube className="w-4 h-4 text-red-400" />
                        ) : (
                          <ExternalLink className="w-4 h-4" />
                        )}
                        <span>Demo</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
