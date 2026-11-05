import React from 'react';
import profilePic from '../assets/profile.png';
import About from './About';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Globe } from 'lucide-react';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="about" className="relative z-10 space-y-8 lg:space-y-12 pt-4 lg:pt-12">
      {/* Top Row: Balanced 2-Column Hero */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">
        
        {/* Left Column: Text & Intro */}
        <div className="flex-1 w-full flex flex-col justify-center order-2 lg:order-1 mt-6 lg:mt-0">
          <motion.div 
            variants={container}
            initial="hidden"
            animate="visible"
            className="space-y-4 md:space-y-5"
          >
            <motion.h1 variants={item} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight flex items-end gap-2">
              Hello
              <span className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] mb-2 md:mb-3"></span>
            </motion.h1>
            
            <motion.div variants={item} className="flex items-center gap-6 py-2">
              <motion.div 
                initial={{ width: 0 }} 
                animate={{ width: "6rem" }}
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                className="h-[3px] bg-gradient-to-r from-purple-500 to-cyan-400" 
              />
              <span className="text-2xl md:text-3xl lg:text-4xl text-slate-200 font-light">
                I'm Deshan
              </span>
            </motion.div>

            <motion.h2 variants={item} className="font-bold tracking-tight pb-2 flex flex-col gap-1 md:gap-2">
              <span className="text-3xl md:text-4xl lg:text-5xl text-slate-300">Full Stack</span>
              <span className="text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 pb-2 pt-1">Software Engineer</span>
            </motion.h2>

            <motion.div variants={item} className="flex flex-wrap items-center gap-2 pt-1 pb-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#151c28] text-red-300 border border-red-500/30">Laravel</span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#151c28] text-emerald-300 border border-emerald-500/30">Vue.js</span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#151c28] text-cyan-300 border border-cyan-500/30">React.js</span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#151c28] text-purple-300 border border-purple-500/30">Next.js</span>
            </motion.div>

            <motion.div 
              variants={item}
              className="flex flex-wrap items-center gap-6 mt-4 pb-6 border-b border-slate-800/50"
            >
              <a href="#contact" className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-medium transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:-translate-y-1">
                Contact Me
              </a>
              <a href="https://drive.google.com/file/d/1ibvqfeKr-2Gcz5oOt6zo9KUMsmOnctPU/view?usp=sharing" target="_blank" rel="noreferrer" className="px-8 py-3.5 border border-cyan-400 text-white font-medium hover:bg-cyan-400/10 transition-all hover:-translate-y-1">
                View Resume
              </a>
            </motion.div>
            
            {/* Paragraph 1 & 2 */}
            <motion.div variants={item}>
              <About />
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column: Visuals & Image Layering */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full lg:w-5/12 shrink-0 relative flex items-center justify-center order-1 lg:order-2"
        >
          <div className="absolute w-[85%] aspect-square rounded-full p-[12px] md:p-[20px] bg-gradient-to-tr from-purple-600 via-purple-500 to-cyan-400 opacity-90 shadow-[0_0_80px_rgba(168,85,247,0.3)] z-0">
            <div className="w-full h-full rounded-full bg-[#111620]"></div>
          </div>
          <div className="absolute w-[80%] aspect-square rounded-full bg-purple-500/20 blur-[100px] z-0"></div>
          <div className="absolute left-[-5%] top-1/2 -translate-y-1/2 hidden md:block z-0">
            <svg width="40" height="60" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </div>
          <div className="absolute right-[-5%] bottom-[15%] hidden md:block z-0">
            <svg width="40" height="60" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
          <div className="relative z-10 w-full aspect-square flex items-end justify-center translate-y-4 lg:translate-y-8 drop-shadow-2xl group">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-purple-400 z-0 opacity-0 group-hover:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user mb-2 opacity-50">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
              <span className="text-[10px] uppercase tracking-widest font-bold opacity-30 text-center px-4">Replace src/assets/profile.png</span>
            </div>
            <img 
              src={profilePic} 
              alt="Deshan Hettiarachchi" 
              className="w-full h-full object-contain object-bottom relative z-10 scale-[1.65] lg:scale-[1.8] brightness-75 contrast-[1.05] [-webkit-mask-image:linear-gradient(to_top,transparent_2%,black_20%)] [mask-image:linear-gradient(to_top,transparent_2%,black_20%)]"
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom Row: Full-Width 3-Column Bento Highlights for Paragraphs 3, 4 & 5 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4">
        {/* Highlight 1: Education & Product Bootcamp (Paragraph 3) */}
        <div className="p-6 rounded-2xl bg-gradient-to-b from-[#151c28]/90 to-[#0e131d]/95 border border-slate-800/80 backdrop-blur-md relative overflow-hidden group hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.1)] transition-all duration-300 flex flex-col justify-between">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 opacity-40 group-hover:opacity-100 transition-opacity"></div>
          <div>
            <div className="text-xs uppercase font-bold tracking-widest text-cyan-400 mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              Academic & Engineering Depth
            </div>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Holds a <span className="text-white font-semibold">BSc in Information Technology</span> from SIBA Campus (CGPA: 3.13), with advanced foundations in software engineering and database systems. Currently expanding product engineering depth via a full-stack bootcamp at <span className="text-cyan-300 font-semibold">STEMLink</span>.
            </p>
          </div>
        </div>

        {/* Highlight 2: Technical Excellence & Recognition (Paragraph 4) */}
        <div className="p-6 rounded-2xl bg-gradient-to-b from-[#151c28]/90 to-[#0e131d]/95 border border-slate-800/80 backdrop-blur-md relative overflow-hidden group hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.1)] transition-all duration-300 flex flex-col justify-between">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 opacity-40 group-hover:opacity-100 transition-opacity"></div>
          <div>
            <div className="text-xs uppercase font-bold tracking-widest text-purple-400 mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-yellow-400" />
              Core Stack & Recognition
            </div>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Specializing in <span className="text-white font-semibold">Laravel, Vue.js, React.js, and Next.js</span>, backed by high-scale database and caching experience with <span className="text-white font-semibold">MySQL, Supabase, and Redis</span>. Recognized with the prestigious <span className="text-yellow-400 font-semibold">Star Performer Award</span> in 2024.
            </p>
          </div>
        </div>

        {/* Highlight 3: Community & Education (Paragraph 5) */}
        <div className="p-6 rounded-2xl bg-gradient-to-b from-[#151c28]/90 to-[#0e131d]/95 border border-slate-800/80 backdrop-blur-md relative overflow-hidden group hover:border-pink-500/40 hover:shadow-[0_0_25px_rgba(236,72,153,0.1)] transition-all duration-300 flex flex-col justify-between">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-pink-500 to-red-500 opacity-40 group-hover:opacity-100 transition-opacity"></div>
          <div>
            <div className="text-xs uppercase font-bold tracking-widest text-pink-400 mb-3 flex items-center gap-2">
              <Globe className="w-4 h-4 text-pink-400" />
              Community & Knowledge Sharing
            </div>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Committed to empowering the developer community through <span className="text-white font-semibold">@desh_digital_hub</span>, educating over <span className="text-pink-400 font-semibold">14,100+ followers on TikTok</span> and amassing <span className="text-red-400 font-semibold">340,000+ views on YouTube</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
