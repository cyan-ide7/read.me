"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Database, Layout, Terminal, Wrench } from "lucide-react";

const skills = [
  { category: "Languages", items: "Python, C++, TypeScript, JavaScript, Rust" },
  { category: "Robotics", items: "ROS2, Gazebo, MoveIt, Navigation2, OpenCV" },
  { category: "Embedded", items: "Arduino, Raspberry Pi, ESP32, FreeRTOS" },
  { category: "AI / ML", items: "PyTorch, TensorFlow, YOLO, SLAM algorithms" },
  { category: "Web Dev", items: "React, Next.js, Tailwind CSS, Node.js" },
  { category: "Tools", items: "Git, Docker, Linux, CMake, GitHub Actions" },
];

const timeline = [
  {
    year: "2023 - Present",
    title: "Robotics Software Engineer",
    company: "Tech Innovators Inc.",
    description: "Developing autonomous navigation systems for warehouse robots using ROS2 and C++.",
  },
  {
    year: "2021 - 2023",
    title: "M.S. in Robotics",
    company: "University of Technology",
    description: "Focus on Computer Vision and Autonomous Systems. Thesis on multi-agent SLAM.",
  },
  {
    year: "2019 - 2021",
    title: "Embedded Systems Developer",
    company: "IoT Solutions Ltd.",
    description: "Programmed microcontrollers for smart home devices using C and FreeRTOS.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 flex items-center">
            <span className="text-accent mr-3">01.</span> About Me
            <div className="ml-6 h-px bg-surface-hover flex-grow max-w-xs"></div>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Text and Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-muted text-lg mb-6 leading-relaxed">
              Hello! I'm a passionate robotics engineer and developer who loves building things that move, think, and solve real-world problems. My journey started with a simple Arduino kit, and today I build complex autonomous systems.
            </p>
            <p className="text-muted text-lg mb-8 leading-relaxed">
              Whether it's designing a PCB, writing low-level firmware, or building a sleek web dashboard to monitor a fleet of robots, I enjoy working across the entire tech stack.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-4">Core Competencies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="bg-surface p-4 rounded-lg border border-surface-hover hover:border-accent/50 transition-colors">
                  <h4 className="text-accent font-medium text-sm mb-1">{skill.category}</h4>
                  <p className="text-muted text-sm">{skill.items}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">Experience & Education</h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-surface-hover before:to-transparent">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-surface-hover group-hover:bg-accent group-hover:border-accent/30 text-muted shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors z-10">
                    <div className="w-2 h-2 bg-foreground rounded-full"></div>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surface p-5 rounded-lg border border-surface-hover shadow">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-foreground text-lg">{item.title}</h4>
                    </div>
                    <div className="text-accent text-sm font-medium mb-2">{item.company} | {item.year}</div>
                    <p className="text-muted text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
