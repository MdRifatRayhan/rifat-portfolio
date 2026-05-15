import React from 'react';

const Skills = () => {
  const skillCategories = [
    { title: "Networking", skills: ["IPv4/Subnetting", "Routing & Switching", "VLAN", "Packet Tracer"] },
    { title: "Cybersecurity", skills: ["Network Security", "Kali Linux", "Traffic Analysis"] },
    { title: "Systems", skills: ["Linux (Ubuntu)", "Nginx", "Git & GitHub"] },
    { title: "Others", skills: ["Python Basic", "Problem Solving", "Wireshark"] }
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-white/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Technical Arsenal</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <div key={i} className="p-6 rounded-2xl bg-dark/50 border border-white/10 hover:border-[#00f2fe]/50 transition-all">
              <h3 className="text-xl font-bold text-[#00f2fe] mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(s => (
                  <span key={s} className="px-3 py-1 bg-white/5 rounded-md text-xs text-gray-300 font-mono">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;