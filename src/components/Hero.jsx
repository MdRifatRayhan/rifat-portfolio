import React from 'react';
import { motion } from 'framer-motion';

// SVG Icons (যেহেতু লাইব্রেরি এরর দিচ্ছে)
const GithubSVG = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const LinkedinSVG = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden bg-[#05060f]">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00f2fe]/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-[#00f2fe] font-mono tracking-[0.3em] mb-4 text-sm">SECURE_PROTOCOL_INITIATED</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Md. Rifat Rayhan</h1>
          <h3 className="text-2xl text-gray-400 mb-8">Network & <span className="text-[#00f2fe]">Cybersecurity Enthusiast</span></h3>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
           <a 
  href="/Md_Rifat_Rayhan_CV.pdf" 
  download="Md_Rifat_Rayhan_CV.pdf" 
  className="px-8 py-3 bg-[#00f2fe] text-[#05060f] font-bold rounded-full transition-all hover:scale-105"
>
  Download CV
</a>
            <a href="#contact" className="px-8 py-3 border border-white/20 rounded-full font-bold text-white hover:bg-white/5">Contact Me</a>
          </div>

          <div className="flex items-center justify-center gap-8 text-gray-400">
            <a href="https://github.com/MdRifatRayhan" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#00f2fe]">
              <GithubSVG /> <span className="font-mono text-sm">MdRifatRayhan</span>
            </a>
            <a href="https://www.linkedin.com/in/md-rifat-rayhan-2b7078316/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#00f2fe]">
              <LinkedinSVG /> <span className="font-mono text-sm">Rifat-rayhan</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;