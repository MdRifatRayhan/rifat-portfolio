import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Download, Activity, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div className="flex-1 text-center lg:text-left" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6">
              <Activity size={14} /> Open to Network Engineering Roles
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight">Hi, I'm Md. Rifat <span className="text-primary">Rayhan</span></h1>
            <h2 className="text-xl lg:text-2xl font-mono text-muted mb-6">Aspiring <span className="text-white">Network Engineer</span></h2>
            <p className="text-lg text-muted max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">Detail-oriented CSE graduate (2026) building resilient multi-tier network infrastructures and diagnosing packet-level connectivity issues.</p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
              <a href="/Md_Rifat_Rayhan_CV.pdf" download className="px-7 py-4 bg-primary text-background font-bold uppercase tracking-widest rounded-xl hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all flex items-center gap-2"><Download size={18} /> Download CV</a>
              <Link to="networking" smooth={true} className="px-7 py-4 border border-white/10 text-white font-bold uppercase tracking-widest rounded-xl hover:bg-white/5 transition-all flex items-center gap-2 cursor-pointer">View Projects <ArrowRight size={18} /></Link>
            </div>
            <div className="flex justify-center lg:justify-start items-center gap-6">
              <a href="https://github.com/MdRifatRayhan" target="_blank" rel="noreferrer" className="text-muted hover:text-primary transition-colors flex items-center gap-2 font-mono text-sm">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                /MdRifatRayhan
              </a>
              <a href="https://www.linkedin.com/in/md-rifat-rayhan-2b7078316/" target="_blank" rel="noreferrer" className="text-muted hover:text-primary transition-colors flex items-center gap-2 font-mono text-sm">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                /rifat-rayhan
              </a>
            </div>
          </motion.div>
          <motion.div className="flex-shrink-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px]" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img src="/profile.png" alt="Md. Rifat Rayhan" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;