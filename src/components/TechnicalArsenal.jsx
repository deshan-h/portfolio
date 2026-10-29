import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Layers, 
  Database, 
  Cloud, 
  Wrench, 
  Sparkles, 
  Palette,
  Terminal,
  BrainCircuit
} from 'lucide-react';
import { 
  SiPhp, 
  SiNodedotjs, 
  SiJavascript, 
  SiCplusplus,
  SiLaravel, 
  SiVuedotjs, 
  SiInertia, 
  SiReact, 
  SiTailwindcss, 
  SiSocketdotio, 
  SiHtml5,
  SiSass,
  SiShadcnui,
  SiMysql, 
  SiPostgresql, 
  SiRedis, 
  SiFirebase,
  SiHuawei, 
  SiJenkins, 
  SiGithubactions, 
  SiLinux, 
  SiDigitalocean, 
  SiTermius,
  SiGit, 
  SiSentry, 
  SiFigma, 
  SiMiro, 
  SiClickup,
  SiGoogle, 
  SiOpenai, 
  SiAnthropic, 
  SiGooglegemini, 
  SiGithubcopilot 
} from 'react-icons/si';
import { FaJava, FaCss3Alt, FaMicrosoft } from 'react-icons/fa6';
import { 
  TbBrandAdobePhotoshop, 
  TbBrandAdobePremier, 
  TbBrandAdobeAfterEffect 
} from 'react-icons/tb';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-5 h-5" />,
    skills: [
      { name: "PHP", icon: SiPhp, color: "text-[#777BB4]" },
      { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-[#5FA04E]", tag: "Familiar" },
      { name: "Java", icon: FaJava, color: "text-[#ED8B00]", tag: "Academic" },
      { name: "C++", icon: SiCplusplus, color: "text-[#00599C]", tag: "Academic" }
    ],
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20 group-hover:border-blue-500/40",
    glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
    topGradient: "from-blue-500 via-indigo-500 to-transparent"
  },
  {
    title: "Frameworks & Libraries",
    icon: <Layers className="w-5 h-5" />,
    skills: [
      { name: "Laravel", icon: SiLaravel, color: "text-[#FF2D20]" },
      { name: "Vue.js", icon: SiVuedotjs, color: "text-[#4FC08D]" },
      { name: "React.js", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "shadcn/ui", icon: SiShadcnui, color: "text-slate-100" },
      { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-[#1572B6]" },
      { name: "SCSS", icon: SiSass, color: "text-[#CC6699]" },
      { name: "Inertia.js", icon: SiInertia, color: "text-[#9553E9]", tag: "Familiar" },
      { name: "WebSockets", icon: SiSocketdotio, color: "text-[#25C2A0]", tag: "Integrated" }
    ],
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20 group-hover:border-emerald-500/40",
    glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    topGradient: "from-emerald-500 via-teal-500 to-transparent"
  },
  {
    title: "Databases & Caching",
    icon: <Database className="w-5 h-5" />,
    skills: [
      { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
      { name: "Redis", icon: SiRedis, color: "text-[#DC382D]" },
      { name: "Firebase / Firestore", icon: SiFirebase, color: "text-[#FFCA28]" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]", tag: "Familiar" }
    ],
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20 group-hover:border-amber-500/40",
    glow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]",
    topGradient: "from-amber-500 via-orange-500 to-transparent"
  },
  {
    title: "DevOps & Cloud",
    icon: <Cloud className="w-5 h-5" />,
    skills: [
      { name: "Jenkins", icon: SiJenkins, color: "text-[#D24939]" },
      { name: "Terminus", icon: SiTermius, color: "text-[#00D2FF]" },
      { name: "DO Bucket", icon: SiDigitalocean, color: "text-[#0080FF]" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "text-[#2088FF]", tag: "CI/CD" },
      { name: "Linux Server", icon: SiLinux, color: "text-[#FCC624]", tag: "Familiar" },
      { name: "Huawei Cloud", icon: SiHuawei, color: "text-[#C7000B]", tag: "Monitored" }
    ],
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20 group-hover:border-cyan-500/40",
    glow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
    topGradient: "from-cyan-500 via-sky-500 to-transparent"
  },
  {
    title: "Tools & Analytics",
    icon: <Wrench className="w-5 h-5" />,
    skills: [
      { name: "Git", icon: SiGit, color: "text-[#F05032]" },
      { name: "Sentry", icon: SiSentry, color: "text-[#FF4081]" },
      { name: "ClickUp", icon: SiClickup, color: "text-[#7B68EE]", tag: "Power User" },
      { name: "Microsoft Clarity", icon: FaMicrosoft, color: "text-[#00A4EF]", tag: "Analytics" },
      { name: "Figma", icon: SiFigma, color: "text-[#F24E1E]", tag: "Inspect & Assets" },
      { name: "Miro", icon: SiMiro, color: "text-[#FFD02F]", tag: "Workflows" }
    ],
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20 group-hover:border-orange-500/40",
    glow: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]",
    topGradient: "from-orange-500 via-rose-500 to-transparent"
  },
  {
    title: "AI-Assisted Development",
    icon: <Sparkles className="w-5 h-5" />,
    skills: [
      { name: "Google Antigravity Pro", icon: SiGoogle, color: "text-[#4285F4]" },
      { name: "Cursor Pro", icon: Terminal, color: "text-[#00E5FF]" },
      { name: "ChatGPT Pro", icon: SiOpenai, color: "text-[#10A37F]" },
      { name: "Gemini", icon: SiGooglegemini, color: "text-[#8E75FF]" },
      { name: "GitHub Copilot", icon: SiGithubcopilot, color: "text-[#A855F7]" },
      { name: "Claude AI", icon: SiAnthropic, color: "text-[#D97757]", tag: "Exploring" },
      { name: "Google AI Studio", icon: SiGoogle, color: "text-[#EA4335]", tag: "Familiar" },
      { name: "DeepSeek", icon: BrainCircuit, color: "text-[#3B82F6]", tag: "Exploring" }
    ],
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20 group-hover:border-purple-500/40",
    glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
    topGradient: "from-purple-500 via-fuchsia-500 to-transparent"
  },
  {
    title: "Design & Multimedia",
    icon: <Palette className="w-5 h-5" />,
    skills: [
      { name: "Adobe Photoshop", icon: TbBrandAdobePhotoshop, color: "text-[#31A8FF]" },
      { name: "Premiere Pro", icon: TbBrandAdobePremier, color: "text-[#EA77FF]" },
      { name: "After Effects", icon: TbBrandAdobeAfterEffect, color: "text-[#D291FF]", tag: "Familiar" },
      { name: "UI/UX Prototyping", icon: Palette, color: "text-[#FF7262]", tag: "Familiar" }
    ],
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20 group-hover:border-pink-500/40",
    glow: "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]",
    topGradient: "from-pink-500 via-rose-500 to-transparent"
  }
];

export default function TechnicalArsenal() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const tile = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const getTagBadgeClass = (tag) => {
    switch (tag) {
      case 'Power User':
        return 'bg-purple-500/15 text-purple-300 border-purple-500/30';
      case 'CI/CD':
        return 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30';
      case 'Academic':
        return 'bg-blue-500/15 text-blue-300 border-blue-500/30';
      case 'Inspect & Assets':
      case 'Workflows':
        return 'bg-amber-500/15 text-amber-300 border-amber-500/30';
      case 'Integrated':
      case 'Analytics':
      case 'Monitored':
        return 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30';
      case 'Exploring':
        return 'bg-pink-500/15 text-pink-300 border-pink-500/30';
      default:
        return 'bg-slate-800/80 text-slate-400 border-slate-700/60';
    }
  };

  return (
    <section id="skills" className="space-y-10">
      {/* Centered on mobile, Left-aligned on Desktop */}
      <div className="text-center sm:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Technical Arsenal
        </h2>
        <p className="text-slate-400 text-sm md:text-base mt-2 max-w-2xl mx-auto sm:mx-0">
          Battle-tested production technologies, core frameworks, and specialized tools I leverage to build scalable software.
        </p>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-lg sm:max-w-none mx-auto [column-fill:_balance]"
      >
        {skillCategories.map((category, idx) => (
          <motion.div 
            key={idx} 
            variants={tile}
            className={`break-inside-avoid mb-6 relative rounded-2xl bg-gradient-to-b from-[#151c28]/90 to-[#0e131d]/95 backdrop-blur-md border border-slate-800/80 p-5 sm:p-6 group transition-all duration-300 hover:border-slate-700/80 ${category.glow}`}
          >
            {/* Top subtle gradient accent line */}
            <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${category.topGradient} opacity-30 group-hover:opacity-100 transition-opacity duration-500`} />

            {/* Ambient background glow on hover */}
            <div className={`absolute -right-6 -bottom-6 w-32 h-32 rounded-full ${category.bg} blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none`} />

            {/* Card Header */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-4 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${category.bg} ${category.color} border ${category.border} shadow-inner group-hover:scale-105 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-base font-bold text-slate-100 group-hover:text-white transition-colors">
                  {category.title}
                </h3>
              </div>

              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800/60 text-slate-400 border border-slate-700/50">
                {category.skills.length} skills
              </span>
            </div>
            
            {/* Skills Pills: Starts directly under header with zero empty space */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
              {category.skills.map((skill, sIdx) => {
                const IconComponent = skill.icon;
                return (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1.5 text-xs font-medium rounded-xl bg-[#111722]/90 text-slate-200 border border-slate-800/80 hover:border-slate-600 hover:text-white hover:bg-slate-800/90 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 flex items-center gap-2 group/chip shadow-sm"
                  >
                    <IconComponent className={`w-4 h-4 ${skill.color} shrink-0 transition-transform duration-200 group-hover/chip:scale-115`} />
                    <span className="tracking-wide">{skill.name}</span>
                    {skill.tag && (
                      <span className={`text-[10px] font-semibold tracking-wide px-1.5 py-0.5 rounded-md border ${getTagBadgeClass(skill.tag)}`}>
                        {skill.tag}
                      </span>
                    )}
                  </span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
