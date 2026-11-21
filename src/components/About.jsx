import React from 'react';
import { Terminal } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-surface/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 sticky top-24 h-fit">
            <h2 className="text-3xl font-bold text-white mb-4">Professional Story</h2>
            <div className="h-1 w-20 bg-primary mb-6"></div>
            <div className="p-6 bg-surface border border-white/5 rounded-2xl">
              <Terminal className="text-primary mb-4" />
              <p className="text-xs font-mono text-muted uppercase leading-relaxed">
                Seeking an entry-level Network Engineer role to apply practical routing, switching, and observability skills in production.
              </p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="space-y-6 text-muted text-lg leading-relaxed">
              <p className="text-xl text-gray-300">
                I am a Computer Science and Engineering graduate (2026) specializing in{' '}
                <span className="text-white font-semibold">
                  Network Engineering, Packet-Level Troubleshooting, Real-Time Infrastructure Monitoring, and Network Security.
                </span>
              </p>
              <p>
                My practical experience includes designing and configuring resilient three-tier hierarchical networks, diagnosing complex network incidents using structured Root Cause Analysis, implementing routing and switching protocols, and deploying containerized network monitoring solutions with Zabbix and SNMP.
              </p>
              <p>
                I enjoy working with Cisco networking technologies, Linux environments, Wireshark, and security tools. I am actively preparing for entry-level opportunities in Network Engineering where I can ensure infrastructure availability and performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;