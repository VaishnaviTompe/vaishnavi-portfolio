"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Sparkles } from "lucide-react";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const GithubIconLg = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const projects = [
  {
    title: "AI Resume Screener",
    description:
      "A full-stack SaaS tool that uses RAG + OpenAI to automatically parse, rank, and summarize resumes against job descriptions. HR teams can process 500+ resumes in minutes.",
    tags: ["Next.js", "FastAPI", "OpenAI", "ChromaDB", "PostgreSQL"],
    aiHighlight: "GPT-4o + RAG pipeline for semantic resume matching",
    gradient: "from-blue-600/20 to-violet-600/20",
    border: "border-blue-500/30",
    accent: "text-blue-400",
    github: "https://github.com/",
    demo: "#",
    featured: true,
  },
  {
    title: "Kronos Financial Predictor",
    description:
      "A voice-enabled financial prediction app with Whisper STT, Edge-TTS for responses, and Plotly dashboards. Built with Streamlit and real-time data ingestion.",
    tags: ["Python", "Streamlit", "Whisper", "Plotly", "Edge-TTS"],
    aiHighlight: "OpenAI Whisper for voice commands + time-series prediction models",
    gradient: "from-emerald-600/20 to-teal-600/20",
    border: "border-emerald-500/30",
    accent: "text-emerald-400",
    github: "https://github.com/",
    demo: "#",
    featured: true,
  },
  {
    title: "LLM SQL Code Generator",
    description:
      "Fine-tuned a Qwen 4B model on a Text-to-SQL dataset using Unsloth. Accepts natural language queries and outputs accurate SQL — deployed as a REST API.",
    tags: ["Python", "Unsloth", "Qwen", "FastAPI", "HuggingFace"],
    aiHighlight: "Fine-tuned Qwen 4B with LoRA adapters on spider/bird SQL datasets",
    gradient: "from-orange-600/20 to-amber-600/20",
    border: "border-orange-500/30",
    accent: "text-orange-400",
    github: "https://github.com/",
    demo: "#",
    featured: false,
  },
  {
    title: "Multi-Agent Code Assistant",
    description:
      "An AI-powered code assistant with file explorer, real-time code preview, and a design mode. Uses LangGraph multi-agent orchestration for reasoning and generation.",
    tags: ["Next.js", "LangGraph", "FastAPI", "OpenAI", "WebSockets"],
    aiHighlight: "LangGraph multi-agent with specialized planner, coder & reviewer agents",
    gradient: "from-pink-600/20 to-rose-600/20",
    border: "border-pink-500/30",
    accent: "text-pink-400",
    github: "https://github.com/",
    demo: "#",
    featured: false,
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative glass border ${project.border} rounded-2xl p-6 card-hover overflow-hidden group`}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30 group-hover:opacity-50 transition-opacity`} />

      {project.featured && (
        <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-medium">
          <Sparkles size={10} />
          Featured
        </div>
      )}

      <div className="relative z-10">
        {/* Title */}
        <h3
          className="text-xl font-bold text-slate-100 mb-2"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          {project.title}
        </h3>

        {/* AI Highlight */}
        <div className={`flex items-start gap-2 mb-4 px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-700/40`}>
          <Sparkles size={13} className={`${project.accent} mt-0.5 flex-shrink-0`} />
          <p className={`${project.accent} text-xs font-medium leading-relaxed`}>
            {project.aiHighlight}
          </p>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-slate-800/60 border border-slate-700/40 text-slate-400 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/60 border border-slate-700/40 text-slate-300 hover:text-slate-100 hover:border-slate-500 text-xs font-medium transition-all"
          >
            <GithubIcon />
            Code
          </a>
          <a
            href={project.demo}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-300 hover:bg-blue-600/40 text-xs font-medium transition-all"
          >
            <ExternalLink size={13} />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-slate-950 relative" ref={ref}>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            My Work
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-100"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Real-world AI applications I&apos;ve built — each one solving a problem with intelligent, production-ready engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/VaishnaviTompe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-slate-600/60 text-slate-300 hover:border-blue-500/40 hover:text-blue-300 text-sm font-medium transition-all"
          >
            <GithubIconLg />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
