import React, { useEffect, useRef } from 'react';
import { FaTiktok, FaYoutube, FaArrowRight, FaGraduationCap } from 'react-icons/fa';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

function AnimatedCounter({ to }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration: 2.5, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, to]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function SocialImpact() {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.section 
      id="social-impact" 
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="space-y-12"
    >
      <div className="text-center max-w-4xl mx-auto space-y-4 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Community Impact</h2>
        <p className="text-slate-400 text-base md:text-lg leading-relaxed italic border-l-4 border-cyan-500/50 pl-4 py-2 text-left md:text-center md:border-l-0 md:border-b-4 md:inline-block md:pb-2 md:pl-0">
          "Beyond the code, I am committed to democratizing technical knowledge and empowering the next generation of developers."
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        
        {/* YouTube Community Card */}
        <motion.div variants={item} className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 p-7 md:p-8 rounded-3xl flex flex-col items-center text-center relative overflow-hidden group-hover:border-red-500/30 transition-colors duration-500 shadow-xl">
            
            {/* Background Watermark Icon */}
            <FaYoutube className="absolute -bottom-10 -right-10 w-48 h-48 text-red-500/5 rotate-12 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-700 pointer-events-none" />
            
            <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mb-5 border border-red-500/20 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(239,68,68,0.2)] group-hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] z-10">
              <FaYoutube className="w-8 h-8 text-red-500" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-1 z-10">Tech Content Creator</h3>
            <div className="text-red-400 font-medium mb-6 z-10 text-sm">@desh_digital_hub</div>
            
            <h4 className="text-3xl md:text-4xl font-extrabold text-white mb-1 drop-shadow-md z-10 tabular-nums tracking-tight">
              <AnimatedCounter to={340000} /><span className="text-red-500">+</span>
            </h4>
            <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[11px] mb-6 z-10">Total Views</p>
            
            <p className="text-slate-300 text-sm leading-relaxed mb-8 flex-1 z-10 max-w-xs">
              Sharing comprehensive tech guides, tutorials, and industry insights for the local IT community.
            </p>
            
            <a href="https://desh.s.gy/youtube" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-2.5 bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white border border-red-500/30 hover:border-red-500 rounded-full text-sm font-semibold transition-all duration-300 z-10 shadow-[0_0_15px_rgba(239,68,68,0.1)] hover:shadow-[0_0_25px_rgba(239,68,68,0.5)] group/btn">
              Subscribe <FaArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* TikTok Community Card */}
        <motion.div variants={item} className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 p-7 md:p-8 rounded-3xl flex flex-col items-center text-center relative overflow-hidden group-hover:border-cyan-500/30 transition-colors duration-500 shadow-xl">
            
            {/* Background Watermark Icon */}
            <FaTiktok className="absolute -bottom-10 -left-10 w-48 h-48 text-cyan-500/5 -rotate-12 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700 pointer-events-none" />
            
            <div className="w-16 h-16 bg-[#151b23] rounded-2xl flex items-center justify-center mb-5 border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(6,182,212,0.1)] group-hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] z-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-pink-500/20"></div>
              {/* Dual color effect for TikTok icon */}
              <FaTiktok 
                className="w-8 h-8 text-white relative z-10" 
                style={{ filter: "drop-shadow(2px 2px 0px #ec4899) drop-shadow(-2px -2px 0px #06b6d4)" }}
              />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-1 z-10">Tech Educator</h3>
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 font-medium mb-6 z-10 text-sm">@desh_digital_hub</div>
            
            <h4 className="text-3xl md:text-4xl font-extrabold text-white mb-1 drop-shadow-md z-10 tabular-nums tracking-tight">
              <AnimatedCounter to={14100} /><span className="text-pink-500">+</span>
            </h4>
            <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[11px] mb-6 z-10">Followers</p>
            
            <p className="text-slate-300 text-sm leading-relaxed mb-8 flex-1 z-10 max-w-xs">
              Educating tech enthusiasts through bite-sized, practical tech tips and development hacks.
            </p>
            
            <a href="https://desh.s.gy/tiktok" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/5 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-pink-500 text-slate-200 hover:text-white border border-white/10 hover:border-transparent rounded-full text-sm font-semibold transition-all duration-300 z-10 shadow-lg hover:shadow-[0_0_25px_rgba(236,72,153,0.4)] group/btn">
              Follow <FaArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* DESH EduHub Platform Card */}
        <motion.div variants={item} className="relative group md:col-span-2 lg:col-span-1">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 p-7 md:p-8 rounded-3xl flex flex-col items-center text-center relative overflow-hidden group-hover:border-emerald-500/30 transition-colors duration-500 shadow-xl">
            
            {/* Background Watermark Icon */}
            <FaGraduationCap className="absolute -bottom-10 -right-10 w-48 h-48 text-emerald-500/5 rotate-12 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-700 pointer-events-none" />
            
            <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-5 border border-emerald-500/20 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(16,185,129,0.2)] group-hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] z-10">
              <FaGraduationCap className="w-8 h-8 text-emerald-400" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-1 z-10">Educational Platform</h3>
            <div className="text-emerald-400 font-medium mb-6 z-10 text-sm">DESH EduHub (PWA)</div>
            
            <h4 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-1 drop-shadow-md z-10 tracking-tight">
              100% Free
            </h4>
            <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[11px] mb-6 z-10">Ad-Free Access</p>
            
            <p className="text-slate-300 text-sm leading-relaxed mb-8 flex-1 z-10 max-w-xs">
              Providing Sri Lankan students with 1-click access to past papers and revision materials with fast cloud downloads.
            </p>
            
            <a href="https://desh.s.gy/edu-hub" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-500/10 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-cyan-500 text-emerald-400 hover:text-white border border-emerald-500/30 hover:border-transparent rounded-full text-sm font-semibold transition-all duration-300 z-10 shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] group/btn">
              Visit EduHub <FaArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}
