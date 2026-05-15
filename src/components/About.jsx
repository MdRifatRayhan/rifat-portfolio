import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-[#05060f]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Profile Image Section */}
        <div className="md:w-1/2 relative">
          <div className="w-64 h-64 md:w-80 md:h-80 mx-auto relative z-10">
            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#00f2fe]/20 to-[#7000ff]/20 border border-white/10 flex items-center justify-center overflow-hidden">
              {/* Replace the URL below with your actual image path later */}
              <img 
  src="/profile.png" 
  alt="Md. Rifat Rayhan" 
  className="w-full h-full object-cover" 
/>
            </div>
            {/* Animated background frame */}
            <div className="absolute -inset-4 border border-[#00f2fe]/30 rounded-2xl -z-10 translate-x-4 translate-y-4"></div>
          </div>
        </div>

        {/* Text Content Section */}
        <div className="md:w-1/2">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-[1px] w-8 bg-[#00f2fe]"></div>
            <span className="text-[#00f2fe] font-mono text-sm tracking-widest uppercase">About Me</span>
          </div>
          <h2 className="text-4xl font-bold mb-6 text-white tracking-tight">Who is Rifat?</h2>
          <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
            <p>
              I am a dedicated student and technology enthusiast currently immersing myself in the world of 
              <strong className="text-white"> Network Engineering and Cybersecurity</strong>. My journey is driven by a deep curiosity 
              about how data moves securely across the globe.
            </p>
            <p>
              With a solid foundation in <strong className="text-white">Linux (Ubuntu & Kali)</strong> and networking fundamentals, I enjoy 
              solving complex problems and building secure virtual environments. I believe that understanding 
              the underlying infrastructure is the key to mastering security.
            </p>
            <p>
              Whether it's configuring routers, subnetting complex networks, or exploring vulnerabilities, 
              I approach every challenge with a <strong className="text-[#00f2fe]">"Security-First"</strong> mindset.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;