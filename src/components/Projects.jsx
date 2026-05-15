import React from 'react';

const FolderIcon = () => (
  <svg stroke="#00f2fe" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
);

const Projects = () => {
  const ProjectCard = ({ title, desc }) => (
    <div className="p-8 rounded-2xl bg-[#05060f] border border-white/10 hover:border-[#00f2fe]/40 transition-all">
      <div className="mb-6"><FolderIcon /></div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 text-sm mb-6">{desc}</p>
      <span className="text-[10px] font-mono text-[#00f2fe] bg-[#00f2fe]/10 px-2 py-1 rounded">SECURE_PROJECT</span>
    </div>
  );

  return (
    <section id="projects" className="py-24 px-4 bg-[#05060f]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">Recent Missions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard title="Secure Campus Network" desc="Simulated campus network architecture with VLAN and firewall rules." />
          <ProjectCard title="Linux Home Server" desc="Ubuntu server featuring Nginx reverse proxy and SSH access." />
          <ProjectCard title="Cyber Lab" desc="Virtualized environment for penetration testing using Kali Linux." />
        </div>
      </div>
    </section>
  );
};
export default Projects;