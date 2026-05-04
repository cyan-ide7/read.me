"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Database, Layout, Terminal, Wrench } from "lucide-react";

const skills = [
  { category: "Languages", items: "Python, C/C++, TypeScript, JavaScript, Lua" },
  { category: "Robotics & Simulation", items: "ROS/ROS2, Gazebo, CoppeliaSim, MoveIt, OpenCV, Unity, CAD" },
  { category: "Embedded Systems", items: "Microcontrollers, Arduino, ESP32, FreeRTOS, QNX Architecture," },
  { category: "AI & Machine Learning", items: "PyTorch, TensorFlow, YOLO, SLAM, LLMs, Agentic AI" },
  { category: "Tools & DevOps", items: "Git, GitHub Actions, CI/CD, Docker, Linux, Android Studio" },
];

const timeline = [
  {
    year: "Summer 2025",
    title: "Robotics Intern",
    company: "IEEE PES CRAIS LABS",
    description: "Performed simulation and gait analysis of quadruped robots (Spot, ANYmal) and supported migration of legacy ROS1 systems to ROS2, resolving compatibility issues in existing packages.",
  },
  {
    year: "May - June 2025",
    title: "Data Analytics Intern",
    company: "INFOTACT SOLUTIONS",
    description: "Developed a web data extraction and visualization app using APIs, BeautifulSoup, and Selenium.",
  },
  {
    year: "2023 - 2027",
    title: "B.Tech in Computer Science and Engineering",
    company: "PES UNIVERSITY",
    description: "Pursuing Bachelor of Technology in Computer Science and Engineering.",
  },
  {
    year: "2022",
    title: "Class 12 & Class 10",
    company: "AMARA JYOTHI PUBLIC SCHOOL",
    description: "Class 12: 91% | Class 10: 92.8%",
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
              I just love engineering physics for building things that think, and solve problems along with theoretical and fictional ideas.
            </p>


            <h3 className="text-xl font-semibold text-foreground mb-4">buzzwords for myself  </h3>
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
