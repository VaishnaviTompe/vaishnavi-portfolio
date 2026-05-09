"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Code2, Server, Database, Cloud, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Brain,
    title: "Generative AI & ML",
    color: "from-violet-500 to-purple-600",
    bg: "violet",
    skills: [
      { name: "Azure OpenAI / OpenAI API", level: 95 },
      { name: "LangChain / LangGraph", level: 92 },
      { name: "RAG Architectures", level: 95 },
      { name: "FAISS / Vector Search", level: 88 },
      { name: "Prompt Engineering", level: 95 },
      { name: "LLM / Multi-Agent Systems", level: 90 },
    ],
  },
  {
    icon: Code2,
    title: "Frontend",
    color: "from-blue-500 to-cyan-500",
    bg: "blue",
    skills: [
      { name: "React / Next.js", level: 92 },
      { name: "JavaScript / TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      // { name: "Framer Motion", level: 82 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "Redux / Zustand", level: 80 },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    color: "from-emerald-500 to-green-600",
    bg: "emerald",
    skills: [
      { name: "Python / FastAPI", level: 93 },
      { name: "Node.js / Express.js", level: 85 },
      { name: "REST APIs", level: 95 },
      { name: "API Integration", level: 90 },
      { name: "Backend Architecture", level: 88 },
      // { name: "Celery / Background Tasks", level: 78 },
    ],
  },
  {
    icon: Database,
    title: "Databases & Vector DBs",
    color: "from-orange-500 to-amber-500",
    bg: "orange",
    skills: [
      { name: "PostgreSQL", level: 70 },
      { name: "MongoDB", level: 92 },
      { name: "SQL", level: 88 },
      { name: "FAISS", level: 88 },
      { name: "Pinecone", level: 80 },
      { name: "Embeddings / Vector DB", level: 90 },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    color: "from-sky-500 to-blue-600",
    bg: "sky",
    skills: [
      { name: "Azure VM", level: 88 },
      { name: "Docker / Docker Compose", level: 90 },
      { name: "Nginx Reverse Proxy", level: 85 },
      { name: "SSL Configuration", level: 82 },
      { name: "CI/CD", level: 80 },
      { name: "Linux Deployment", level: 88 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Others",
    color: "from-pink-500 to-rose-600",
    bg: "pink",
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "API Latency Optimization", level: 85 },
      { name: "Postman", level: 88 },
      { name: "Streamlit", level: 85 },
      { name: "Production Monitoring", level: 82 },
      { name: "Environment Configuration", level: 85 },
    ],
  },
];

const bgColorMap: Record<string, string> = {
  violet: "bg-violet-500/10 border-violet-500/20 text-violet-400",
  blue: "bg-blue-500/10 border-blue-500/20 text-blue-400",
  emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
  orange: "bg-orange-500/10 border-orange-500/20 text-orange-400",
  sky: "bg-sky-500/10 border-sky-500/20 text-sky-400",
  pink: "bg-pink-500/10 border-pink-500/20 text-pink-400",
};
const barColorMap: Record<string, string> = {
  violet: "from-violet-500 to-purple-600",
  blue: "from-blue-500 to-cyan-500",
  emerald: "from-emerald-500 to-green-600",
  orange: "from-orange-500 to-amber-500",
  sky: "from-sky-500 to-blue-600",
  pink: "from-pink-500 to-rose-600",
};

function SkillCard({ category, index }: { category: (typeof skillCategories)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const iconColor = bgColorMap[category.bg];
  const barColor = barColorMap[category.bg];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="glass border border-slate-700/40 rounded-2xl p-6 card-hover"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${iconColor}`}>
          <category.icon size={18} />
        </div>
        <h3 className="font-bold text-slate-100 text-sm" style={{ fontFamily: "var(--font-space-grotesk)" }}>
          {category.title}
        </h3>
      </div>

      {/* Skill bars */}
      <div className="space-y-4">
        {category.skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-slate-400 text-xs font-medium">{skill.name}</span>
              <span className="text-slate-500 text-xs">{skill.level}%</span>
            </div>
            <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1, delay: index * 0.08 + 0.3, ease: "easeOut" }}
                className={`h-full rounded-full bg-gradient-to-r ${barColor}`}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/5 to-slate-950" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            What I Know
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-100"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            A comprehensive toolkit built over 2 years of hands-on GenAI and full-stack development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.title} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
