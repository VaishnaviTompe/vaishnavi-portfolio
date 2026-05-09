"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, Target, Coffee, Award } from "lucide-react";

const stats = [
  { icon: Award, label: "Years Experience", value: "2+" },
  { icon: Target, label: "Production GenAI Apps", value: "3+" },
  { icon: Coffee, label: "LLM Integrations", value: "15+" },
  { icon: User, label: "Manual Effort Reduced", value: "40%" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative bg-slate-950" ref={ref}>
      {/* subtle bg */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Who I Am
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-100"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Avatar / Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/30 to-violet-500/30 blur-2xl scale-105" />
              <div className="relative w-72 h-80 rounded-3xl glass border border-blue-500/20 overflow-hidden flex flex-col items-center justify-center gap-4 p-8">
                {/* Profile avatar placeholder */}
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-4xl font-bold text-white shadow-lg shadow-blue-900/40" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  VT
                </div>
                <div className="text-center">
                  <p className="text-slate-100 font-semibold text-lg" style={{ fontFamily: "var(--font-space-grotesk)" }}>Vaishnavi Tompe</p>
                  <p className="text-blue-400 text-sm mt-1">GenAI & Full Stack Developer</p>
                  <p className="text-slate-500 text-xs mt-2">📍 Pune, India</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-slate-400 text-xs">Open to Work</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <div className="space-y-6">
            <motion.div
              custom={0}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
            >
              <h3
                className="text-2xl font-bold text-slate-100 mb-4"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Building Production-Ready {" "}
                <span className="gradient-text">GenAI & Full Stack Applications</span>
              </h3>
              <p className="text-slate-400 leading-relaxed text-base">
                I&apos;m a GenAI & Full Stack Engineer with 2+ years of experience building production-grade AI applications, scalable backend systems, and cloud-based deployments. I specialize in developing RAG pipelines, LLM-powered applications, multi-agent workflows, REST APIs, and full-stack web applications using React, FastAPI, Azure OpenAI, LangChain, LangGraph, Docker, and Azure VM.
              </p>
            </motion.div>

            <motion.p
              custom={1}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="text-slate-400 leading-relaxed text-base"
            >
              From designing intelligent chatbots and retrieval-based systems to deploying scalable applications on Linux-based Azure VM environments, I work across the complete AI product lifecycle — from frontend UI and backend APIs to cloud deployment, monitoring, and optimization.
            </motion.p>

            <motion.p
              custom={2}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="text-slate-400 leading-relaxed text-base"
            >
              I have built and deployed AI solutions such as BharatShodh, RAG Q&A platforms, AI interview assistants, and LLM-based automation workflows. My focus is on creating reliable, fast, and user-friendly AI systems that solve real business problems.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="flex flex-wrap gap-3 pt-2"
            >
              {["Azure OpenAI", "LangChain", "RAG", "FastAPI", "React", "Docker"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {stats.map(({ icon: Icon, label, value }, i) => (
            <motion.div
              key={label}
              custom={i}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="glass border border-slate-700/40 rounded-2xl p-6 text-center card-hover"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-3">
                <Icon size={18} className="text-blue-400" />
              </div>
              <p className="text-3xl font-bold gradient-text mb-1" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                {value}
              </p>
              <p className="text-slate-500 text-xs">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
