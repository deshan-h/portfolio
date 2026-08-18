import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

export default function Footer() {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } }
  };

  return (
    <motion.footer 
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="border-t border-slate-800/50 bg-[#0d1117] py-8"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <span className="text-slate-400 font-medium text-sm md:text-base">Developed By</span>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-800/30">
              <img src={logo} alt="DESH Logo" className="w-5 h-5 object-contain" />
              <span className="font-bold text-white tracking-wider text-sm">DESH</span>
            </div>
          </div>
          <p className="text-slate-600 text-xs mt-3">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        
        <div className="flex items-center space-x-6">
          <a href="tel:+94719989000" className="text-slate-400 hover:text-purple-400 transition-colors p-2" aria-label="Phone">
            <Phone className="w-6 h-6" />
          </a>
          <a href="mailto:deshanhettiarachchi98@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors p-2" aria-label="Email">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/deshan-hettiarachchi" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-purple-500 transition-colors p-2" aria-label="LinkedIn">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/deshan-h" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors p-2" aria-label="GitHub">
            <FaGithub className="w-6 h-6" />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
