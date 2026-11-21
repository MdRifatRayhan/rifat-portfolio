import React, { useState } from 'react';
import { Layers, ArrowRight, X, CheckCircle2 } from 'lucide-react';

const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
);

const projects = [
  {
    id: 1,
    title: "Enterprise Multi-Tier Campus Infrastructure",
    date: "Sep - Nov 2026",
    summary: "Designed a resilient 3-tier hierarchical network (Core, Distribution, Access) in Cisco Packet Tracer with high availability and security hardening.",
    tags: ["OSPFv2", "HSRPv2", "Rapid PVST+", "EtherChannel", "DAI", "Cisco WLC"],
    github: "https://github.com/MdRifatRayhan/Enterprise-Multi-Tier-Network-Infrastructure",
    overview: "Designed and simulated a resilient 3-tier hierarchical network featuring default gateway failover and Layer-2 security.",
    implementations: [
      "Configured OSPFv2 dynamic routing and Layer-3 EtherChannel.",
      "Engineered redundancy using HSRPv2 failover and Rapid PVST+.",
      "Hardened security via DAI, DHCP Snooping, and Sticky Port-Security.",
      "Deployed centralized wireless management with Cisco WLC."
    ],
    verification: "Validated failover timing under 2 seconds during distribution switch simulated power loss. Verified zero unauthorized DHCP leases through Snooping validation."
  },
  {
    id: 2,
    title: "Network Troubleshooting & Incident Response Lab",
    date: "Nov 2026",
    summary: "Diagnosed and resolved 20 end-to-end network incidents following a structured 6-stage Root Cause Analysis (RCA) workflow.",
    tags: ["Wireshark", "Packet Analysis", "RCA", "TCP/IP", "802.1Q", "STP"],
    github: "https://github.com/MdRifatRayhan/Real-World-Network-Troubleshooting-Lab",
    overview: "Resolved 20 complex technical tickets ranging from DNS timeouts to STP split-brain failures.",
    implementations: [
      "Remediated DNS timeouts and stalled DHCP DORA handshakes.",
      "Resolved asymmetric routing metrics and MTU blackholes.",
      "Fixed 802.1Q VLAN mismatches and STP Root Bridge faults.",
      "Authored 20 standardized incident reports with .pcapng captures."
    ],
    verification: "Successful remediation confirmed via ping sweeps, Wireshark handshake timing analysis, and Cisco IOS CLI 'show' command verification."
  },
  {
    id: 3,
    title: "Network Monitoring System (Zabbix & SNMP)",
    date: "Nov 2026",
    summary: "Deployed a containerized Zabbix 7.0 monitoring stack on Kali Linux for real-time telemetry and automated incident alerting.",
    tags: ["Zabbix 7.0", "Docker", "SNMPv2c", "ICMP", "Nginx", "MySQL"],
    github: "https://github.com/MdRifatRayhan/Zabbix-Network-Monitoring-Lab",
    overview: "Built a NOC dashboard monitoring 21 real-time telemetry metrics across simulated enterprise routers.",
    implementations: [
      "Deployed Zabbix stack inside custom Docker bridge subnets.",
      "Integrated SNMPv2c polling for interface throughput and discards.",
      "Created custom NOC dashboards for system health visualization.",
      "Configured high-severity triggers for automated outage detection."
    ],
    verification: "Verified real-time alerting system by simulating router interface down events; triggered Zabbix dashboard notifications within 10 seconds of downtime."
  }
];

const ProjectCard = ({ project, onOpen }) => (
  <div className="bg-surface rounded-2xl border border-white/5 overflow-hidden group hover:border-primary/30 transition-all flex flex-col h-full">
    <div className="p-8 flex-grow">
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 bg-primary/5 rounded-xl">
          <Layers className="text-primary w-6 h-6" />
        </div>
        <a href={project.github} target="_blank" rel="noreferrer" className="text-muted hover:text-white transition-colors">
          <GithubIcon />
        </a>
      </div>
      <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2 block">{project.date}</span>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
      <p className="text-muted text-sm leading-relaxed mb-6">{project.summary}</p>
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.slice(0, 4).map(tag => (
          <span key={tag} className="text-[10px] font-mono font-bold px-2 py-1 bg-white/5 text-muted rounded uppercase">{tag}</span>
        ))}
      </div>
    </div>
    <button 
      onClick={() => onOpen(project)}
      className="w-full py-4 bg-white/5 text-white text-xs font-bold uppercase tracking-widest border-t border-white/5 group-hover:bg-primary group-hover:text-background transition-all flex items-center justify-center gap-2"
    >
      View Case Study <ArrowRight size={14} />
    </button>
  </div>
);

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl">
      <div className="bg-surface max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 shadow-2xl animate-in zoom-in-95">
        <div className="sticky top-0 bg-surface/90 backdrop-blur-md p-6 border-b border-white/5 flex justify-between items-center z-10">
          <h2 className="text-xl font-bold text-white">{project.title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-lg text-muted hover:text-white"><X /></button>
        </div>
        <div className="p-8 space-y-10">
          <div>
            <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Project Overview</h4>
            <p className="text-muted leading-relaxed">{project.overview}</p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Technical Implementations</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.implementations.map((item, i) => (
                <div key={i} className="flex gap-3 p-4 bg-white/5 rounded-xl border border-white/5">
                  <CheckCircle2 className="text-accent shrink-0" size={18} />
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 bg-accent/5 border border-accent/10 rounded-2xl">
            <h4 className="text-xs font-bold text-accent uppercase tracking-widest mb-3">Testing & Verification</h4>
            <p className="text-sm text-gray-300 italic">"{project.verification}"</p>
          </div>
          <div className="flex justify-end">
            <a href={project.github} target="_blank" rel="noreferrer" className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl flex items-center gap-2 hover:bg-white/10 transition-all font-bold text-sm">
              <GithubIcon className="w-4 h-4" /> Source Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <section id="networking" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-2">Networking Projects</h2>
          <p className="text-muted font-mono uppercase tracking-tighter">Core Infrastructure & Troubleshooting Case Studies</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(p => <ProjectCard key={p.id} project={p} onOpen={setSelectedProject} />)}
        </div>
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </section>
  );
};

export default Projects;