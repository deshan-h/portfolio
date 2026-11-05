import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const highlight = "font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400";

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="visible"
      id="about-details" 
      className="pt-6 text-slate-300 text-base md:text-lg leading-relaxed bg-transparent"
    >
      <div className="flex flex-col gap-3.5">
        <motion.p variants={item}>
          My journey in software engineering is driven by a passion for <span className={highlight}>solving complex business challenges</span> through clean architecture and highly efficient code.
        </motion.p>
        <motion.p variants={item}>
          Over the past <span className={highlight}>3+ years</span>, I have progressed from an intern to an <span className={highlight}>Associate Software Engineer</span> at Parallax Technologies. Currently, I operate as a <span className={highlight}>Freelance Full-Stack Software Engineer</span> at DESH Digital Hub, delivering scalable web products and enterprise solutions while actively seeking new full-time opportunities.
        </motion.p>
      </div>
    </motion.div>
  );
}
