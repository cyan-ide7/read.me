"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  highlight?: string;
  points: string[];
  tech: string[];
  linkedinUrl?: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "Lam Research",
    role: "Software Engineering Intern",
    period: "Jun. 2026 – Present",
    location: "Bengaluru, India",
    current: true,
    highlight: "62.5% Build Pipeline Speedup (8 hrs → 3 hrs)",
    points: [
      "Developed and packaged REST integrations across 50+ internal and cloud endpoints, enabling seamless microservice synchronization across legacy platforms and modern infrastructure.",
      "Engineered dynamic Jira and IPLM ticketing system synchronizations to connect legacy platforms with modern workflows, implementing Power BI dashboards over PostgreSQL databases for real-time monitoring.",
      "Optimized product build automation pipelines, reducing overall execution build times from 8 hours to 3 hours (62.5% execution speedup).",
    ],
    tech: [
      "REST APIs",
      "Microservices",
      "PostgreSQL",
      "Power BI",
      "Jira & IPLM",
      "CI/CD Automation",
      "Build Pipelines",
    ],
    linkedinUrl: "https://www.linkedin.com/in/subhamdey33",
  },
  {
    company: "Infotact Solutions",
    role: "Data Analytics Intern",
    period: "May 2025 – Jun. 2025",
    location: "Bengaluru, India",
    highlight: "LangChain Agentic Ticket Triage & Verification",
    points: [
      "Delivered LLM-based agentic system using LangChain for automated ticket triage, classification, and routing, streamlining technical support operations.",
      "Engineered a Python data pipeline for automated notification delivery and PostgreSQL extraction via REST APIs, integrating Jenkins CI/CD pipelines for continuous build verification and automated testing.",
    ],
    tech: [
      "Python",
      "LangChain",
      "Agentic Workflows",
      "Jenkins CI/CD",
      "PostgreSQL",
      "REST APIs",
      "Data Pipelines",
    ],
    linkedinUrl: "https://www.linkedin.com/in/subhamdey33",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative bg-surface/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div>
            <span className="text-accent font-mono text-sm tracking-wider uppercase">Career History</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-1 flex items-center">
              <span className="text-accent mr-3">02.</span> Experience
            </h2>
          </div>
          <div className="mt-4 h-px bg-surface-hover w-full max-w-md"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-surface border border-surface-hover rounded-2xl p-6 sm:p-8 hover:border-accent/40 transition-all duration-300 shadow-lg relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-2xl pointer-events-none group-hover:bg-accent/10 transition-colors" />

              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                    {exp.current && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Present Role
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-accent font-semibold text-lg">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-sm text-muted">
                  <div className="flex items-center gap-1.5 font-mono">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {exp.highlight && (
                <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
                  <TrendingUp className="w-4 h-4 shrink-0" />
                  <span>Key Impact: {exp.highlight}</span>
                </div>
              )}

              <div className="space-y-3 mb-6">
                {exp.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <p className="text-muted leading-relaxed text-sm sm:text-base">{point}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-surface-hover/70 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono uppercase text-muted tracking-wider mr-2">Skills:</span>
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-background/80 border border-surface-hover text-foreground/90"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
