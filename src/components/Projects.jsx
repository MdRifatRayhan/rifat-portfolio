import React from 'react';

// SVG Icons
const FolderIcon = () => (
  <svg stroke="#00f2fe" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
);

const ExternalIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

const Projects = () => {
  const allProjects = [
    {
      title: "Sentinel: Security Log Analyzer",
      desc: "Built a SOC dashboard to detect Brute Force, Port Scans, and Unauthorized Access via log heuristic analysis and Regex-based parsing.",
      points: [
        "Real-time alerts using Socket.io",
        "Risk scoring system (0-100)",
        "Automated PDF/CSV security reporting"
      ],
      tech: ["Node.js", "Socket.io", "MongoDB", "Chart.js"],
      link: "https://github.com/MdRifatRayhan/my-security-dashboard"
    },
    {
      title: "SecureVault Authentication System",
      desc: "A secure full-stack authentication system with OTP verification and JWT-based protection for enhanced application security.",
      points: [
        "CSRF protection & Password hashing",
        "Login attempt limiter (Rate Limiting)",
        "Login activity tracking & OTP system"
      ],
      tech: ["Express.js", "JWT", "bcrypt", "MongoDB Atlas"],
      link: "https://github.com/MdRifatRayhan/securevault-auth-system"
    },
    {
      title: "Phishing URL Detection Tool",
      desc: "Full-stack security application analyzing URLs for phishing threats using VirusTotal API and custom heuristic patterns.",
      points: [
        "60+ security engines integration",
        "IP-based hosting analysis",
        "Persistent analysis history"
      ],
      tech: ["Node.js", "VirusTotal API", "MongoDB", "Axios"],
      link: "https://github.com/MdRifatRayhan/Phishing-URL-Detector-Pro"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-[#05060f]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-4">
          Recent Missions <span className="h-[1px] bg-white/10 flex-grow"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-[#0b0d18] border border-white/10 hover:border-[#00f2fe]/40 transition-all flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <FolderIcon />
                <a href={project.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#00f2fe] transition-colors">
                  <ExternalIcon />
                </a>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00f2fe] transition-colors line-clamp-1">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">{project.desc}</p>
              
              {/* Bullet Points */}
              <ul className="mb-6 space-y-1 flex-grow">
                {project.points.map((point, i) => (
                  <li key={i} className="text-[12px] text-gray-500 flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#00f2fe] rounded-full"></span> {point}
                  </li>
                ))}
              </ul>

              {/* Tech Stack Tags */}
              <div className="mt-auto flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[10px] font-mono text-[#00f2fe] bg-[#00f2fe]/10 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;