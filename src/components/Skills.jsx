import React from 'react';
import { Network, Shield, Cpu, Terminal, Search, Code } from 'lucide-react';

const skills = [
  {
    category: "Routing & Switching",
    icon: <Network className="text-primary" />,
    items: ["OSPFv2", "Static/Floating Routing", "VLANs/VTP", "Inter-VLAN", "Rapid PVST+", "EtherChannel", "HSRPv2", "IPv6 Dual-Stack"]
  },
  {
    category: "Network Security",
    icon: <Shield className="text-primary" />,
    items: ["Dynamic ARP Inspection", "DHCP Snooping", "Sticky Port Security", "Extended ACLs", "SSHv2 (4096-bit)", "NAT/PAT", "Firewall Basics"]
  },
  {
    category: "Services & Wireless",
    icon: <Cpu className="text-primary" />,
    items: ["DHCP Option 43", "DNS", "NTP (MD5)", "Syslog", "SNMPv2c/v3", "ICMP", "Cisco WLC", "LWAP"]
  },
  {
    category: "Monitoring & Diagnostics",
    icon: <Search className="text-primary" />,
    items: ["Zabbix 7.0", "Wireshark", "Packet Analysis", "Root Cause Analysis", "Incident Response", "Observability"]
  },
  {
    category: "Tools & Platforms",
    icon: <Terminal className="text-primary" />,
    items: ["Packet Tracer", "Docker", "Ubuntu/Kali", "PowerShell", "VirtualBox", "Git/GitHub"]
  },
  {
    category: "Programming & Backend",
    icon: <Code className="text-primary" />,
    items: ["Python", "C++", "Node.js", "Express.js", "MongoDB", "JavaScript"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-2">Technical Core</h2>
          <p className="text-muted font-mono uppercase tracking-tighter">Verified Technical Proficiencies</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <div key={idx} className="bg-surface p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/5 rounded-xl group-hover:bg-primary/10 transition-colors">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map(item => (
                  <span key={item} className="px-3 py-1.5 bg-white/5 text-muted text-xs font-semibold rounded-lg hover:text-primary hover:bg-primary/5 transition-colors">
                    {item}
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

export default Skills;