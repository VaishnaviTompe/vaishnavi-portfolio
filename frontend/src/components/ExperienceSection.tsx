"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, CalendarDays, MapPin } from "lucide-react";

const experiences = [
  {
    type: "work",
    role: "GenAI Full Stack Engineer",
    company: "GenAIKit Pvt Ltd",
    location: "India",
    period: "Jan 2024 – Present",
    description:
      "I am working as a GenAI Full Stack Engineer, building production-ready AI applications, RAG-based systems, backend APIs, and cloud deployments. My work includes developing AI chatbots, multi-agent workflows, retrieval pipelines, and scalable full-stack applications using React, FastAPI, Azure OpenAI, LangChain, LangGraph, Docker, and Azure VM.",
    highlights: ["Built RAG-based AI applications", "Developed LangGraph multi-agent workflows", "Deployed apps on Azure VM with Docker"],
    color: "blue",
  },
  {
    type: "work",
    role: "AI & Full Stack Developer ( Intern )",
    company: "GenAIKit Pvt Ltd",
    location: "India",
    period: "Oct 2023 – Dec 2023",
    description:
      "Built AI powered SaaS features including intelligent chatbots, voice assistants, and automated document processing pipelines using LangChain and OpenAI APIs.",
    highlights: ["Integrated Whisper STT for voice interfaces", "Built document Q&A with LangChain", "Shipped 5+ production AI features"],
    color: "violet",
  },
  {
    type: "work",
    role: "Trainee ( Intern )",
    company: "DRDL",
    location: "On-site, Hyderabad, India",
    period: "April 2022 – June 2022",
    description:
      "Testing PXI models to validate their performance, accuracy, and reliability across different scenarios. The focus is on checking model outputs, identifying issues, comparing results, and ensuring the model behaves correctly before deployment.",
    highlights: ["Verified model responses across multiple test cases", "eported issues for further model tuning", "Checked output correctness and consistency"],
    color: "emerald",
  },
  {
    type: "education",
    role: "B.Tech in Computer Science",
    company: "Dr.Babasaheb Ambedkar Technological University.",
    location: "India",
    period: "2018 – 2022",
    description:
      "Specialized in Computer Science & Engineering. Final year project: AI-powered crop disease detection system using CNNs.",
    highlights: ["CGPA: 7.99/10", "ML specialization", "Final project: AI + Computer Vision"],
    color: "orange",
  },
];

const colorMap: Record<string, { dot: string; badge: string; icon: string; bar: string }> = {
  blue: {
    dot: "bg-blue-500",
    badge: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    icon: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    bar: "bg-blue-500/20",
  },
  violet: {
    dot: "bg-violet-500",
    badge: "bg-violet-500/10 border-violet-500/20 text-violet-300",
    icon: "bg-violet-500/10 border-violet-500/20 text-violet-400",
    bar: "bg-violet-500/20",
  },
  emerald: {
    dot: "bg-emerald-500",
    badge: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300",
    icon: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    bar: "bg-emerald-500/20",
  },
  orange: {
    dot: "bg-orange-500",
    badge: "bg-orange-500/10 border-orange-500/20 text-orange-300",
    icon: "bg-orange-500/10 border-orange-500/20 text-orange-400",
    bar: "bg-orange-500/20",
  },
};

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/5 to-slate-950" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            My Journey
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-100"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Experience &amp; <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-violet-500/30 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const colors = colorMap[exp.color];
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className={`relative flex items-start gap-4 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-slate-950 mt-6">
                    <div className={`w-full h-full rounded-full ${colors.dot} animate-pulse`} />
                  </div>

                  {/* Card offset */}
                  <div className={`pl-12 md:pl-0 w-full md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-10" : "md:pl-10"}`}>
                    <div className={`glass border border-slate-700/40 rounded-2xl p-5 card-hover`}>
                      {/* Header */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <div className={`w-7 h-7 rounded-lg border flex items-center justify-center ${colors.icon}`}>
                              {exp.type === "work" ? <Briefcase size={13} /> : <GraduationCap size={13} />}
                            </div>
                            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${colors.badge}`}>
                              {exp.type === "work" ? "Work" : "Education"}
                            </span>
                          </div>
                          <h3 className="text-slate-100 font-bold text-base" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                            {exp.role}
                          </h3>
                          <p className="text-slate-400 text-sm font-medium">{exp.company}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 mb-3 text-xs text-slate-500">
                        <span className="flex items-center gap-1"><CalendarDays size={11} /> {exp.period}</span>
                        <span className="flex items-center gap-1"><MapPin size={11} /> {exp.location}</span>
                      </div>

                      <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                      <ul className="space-y-1.5">
                        {exp.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-xs text-slate-400">
                            <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} mt-1.5 flex-shrink-0`} />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
