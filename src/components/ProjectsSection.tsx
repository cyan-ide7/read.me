"use client";

import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { Architects_Daughter } from "next/font/google";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image?: string;
};

const projects: Project[] = [


  {
    title: "Quadruped Robot Simulation",
    description: "Simulated quadruped robots (Spot) with gait patterns.",
    tech: ["ROS", "ROS2", "Gazebo", "C++", "Python"],
    github: "",
    demo: "https://youtu.be/RT7ClBp0tSs?si=uSeqIIAvbpHPvBJB",
  },

  {
    title: "3D Reconstruction with Gaussian Splatting",
    description: "Generated 3D meshes of real-world objects using Gaussian Splatting techniques, enabling efficient scene reconstruction and visualization.",
    tech: ["colmap", "gaussian Splatting  ", "nerf", "superSplat", "python"],
    github: "",
    demo: "https://youtu.be/Xunfdvgz9Kc?si=CYLgU-H1GxIUN-C6",
  },
  {
    title: "Digital Twin Space Suite Monitoring",
    description: "A monitoring system and digital twin implementation for tracking space suite telemetry.",
    tech: ["Python", "Digital Twin", "Simulation", "Docker", "bio-gears"],
    github: "https://github.com/cyan-ide7/digital_twin_spaceSuite_monitoring",
    demo: "",
  },
  {
    title: "TouchDesigner Sensor Art System",
    description: "Built an interactive visual system integrating ESP32 sensors with TouchDesigner to generate real-time fire simulations based on sound and distance inputs.",
    tech: ["TouchDesigner", "ESP32", "Sensors", "Python"],
    github: "https://github.com/cyan-ide7/touchdesigner-esp32-art",
    demo: "",
  },

  {
    title: "Inverted Pendulum Sim",
    description: "Control system algorithms for dynamic system modeling, simulation, and analysis, including feedback control, PID tuning, and system response visualization.",
    tech: ["javascript", "Control Systems", "PID", "threejs"],
    github: "https://github.com/cyan-ide7/control_algorithms",
    demo: "https://cyan-ide7.github.io/control_algorithms/",
  },

  {
    title: "VLA Robotic Arm (Vision-Language-Action)",
    description: "Developed a robotic manipulation system integrating vision-language-action models to enable task understanding and execution using multimodal inputs.",
    tech: ["Python", "Computer Vision", "LLMs", "PyTorch", "MLP", "Model Architecture"],
    github: "https://github.com/cyan-ide7/vla_arm",
    demo: "https://youtu.be/eMsCmyZP-U8",
  },
  {
    title: "ROS2 CoppeliaSim Interface",
    description: "Created an interface layer to integrate ROS2 with CoppeliaSim, enabling real-time communication, control, and simulation synchronization.",
    tech: ["ROS2", "CoppeliaSim", "Python", "Simulation"],
    github: "https://github.com/cyan-ide7/ros2_coppeliasim_interface",
    demo: "",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 flex items-center">
            <span className="text-accent mr-3">02.</span> Featured Projects
            <div className="ml-6 h-px bg-surface-hover flex-grow max-w-xs"></div>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-surface border border-surface-hover rounded-xl h-full flex flex-col hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-300 group overflow-hidden">
                {project.image && (
                  <div className="w-full h-48 relative overflow-hidden bg-surface-hover shrink-0 border-b border-surface-hover">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-6">
                    {!project.image && <Folder className="w-10 h-10 text-accent" />}
                    <div className={`flex gap-4 ${project.image ? 'ml-auto' : ''}`}>
                      {project.github && (
                        <Link href={project.github} target="_blank" className="text-muted hover:text-accent transition-colors">
                          <Github className="w-5 h-5" />
                        </Link>
                      )}
                      {project.demo && (
                        <Link href={project.demo} target="_blank" className="text-muted hover:text-accent transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </Link>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    <Link href={project.demo || project.github || "#"} target="_blank">
                      {project.title}
                    </Link>
                  </h3>

                  <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  <ul className="flex flex-wrap gap-3 mt-auto">
                    {project.tech.map((tech, i) => (
                      <li key={i} className="text-xs font-mono text-muted bg-background px-2 py-1 rounded">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
