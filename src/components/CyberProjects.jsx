import React from 'react';
import { ExternalLink, Code2 } from 'lucide-react';

const GithubIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
);

const cyberProjects = [
  { title: "Sentinel: Security Log Analyzer", period: "May - Jun 2026", github: "https://github.com/MdRifatRayhan/my-security-dashboard", summary: "Full-stack SOC dashboard to parse unstructured logs via Regex and detect Brute Force/Unauthorized Access in real-time.", tags: ["Node.js", "Socket.io", "MongoDB Atlas", "JWT"] },
  { title: "Phishing URL Detection Tool", period: "May 2026", github: "https://github.com/MdRifatRayhan/Phishing-URL-Detector-Pro", summary: "Security tool integrating VirusTotal API with custom heuristic rules to detect malicious patterns and insecure protocols.", tags: ["VirusTotal API", "Express.js", "Axios"] },
  { title: "SecureVault Auth System", period: "May 2026", github: "https://github.com/MdRifatRayhan/securevault-auth-system", live: "https://securevault-j3v9.onrender.com", summary: "Complete auth system with OTP, JWT, CSRF protection, and login attempt limiting for application security.", tags: ["bcrypt", "CSRF Protection", "OTP Verification"] }
];

const CyberProjects = () => {
  return (
    <section id="cyber" className="py-24 bg-surface/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12">Cybersecurity & Development</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cyberProjects.map((p, idx) => (
            <div key={idx} className="bg-surface border border-white/5 rounded-2xl p-8 flex flex-col h-full group hover:bg-white/[0.02] transition-all">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-accent/10 rounded-xl text-accent"><Code2 size={24} /></div>
                <div className="flex gap-3 text-muted">
                  <a href={p.github} target="_blank" rel="noreferrer" className="hover:text-white"><GithubIcon /></a>
                  {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="hover:text-white"><ExternalLink size={20} /></a>}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
              <p className="text-xs font-mono text-primary mb-4">{p.period}</p>
              <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">{p.summary}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map(t => <span key={t} className="px-2 py-1 bg-white/5 text-[10px] font-bold text-gray-400 rounded uppercase">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CyberProjects;