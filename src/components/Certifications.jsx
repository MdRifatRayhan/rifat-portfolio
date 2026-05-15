import React from 'react';
import { Target, Award, ArrowUpRight } from 'lucide-react';

const Certifications = () => {
  const goals = [
    { title: "Cisco Certified Network Associate (CCNA)", status: "In Progress" },
    { title: "CompTIA Network+", status: "Upcoming" },
    { title: "Cybersecurity Learning Journey", status: "Ongoing" },
  ];

  return (
    <section id="goals" className="py-24 px-4 bg-primary/5">
      <div className="max-w-4xl mx-auto">
        <div className="bg-dark/80 p-8 md:p-12 rounded-3xl border border-primary/20 backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-8 text-primary">
            <Target size={32} />
            <h2 className="text-3xl font-bold tracking-tight">Mission Goals & Roadmap</h2>
          </div>
          
          <div className="space-y-6">
            {goals.map((goal, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 border-b border-white/5 group hover:bg-white/5 transition-colors rounded-lg">
                <div className="flex items-center gap-4">
                  <Award className="text-gray-500 group-hover:text-primary transition-colors" />
                  <div>
                    <h4 className="text-white font-medium">{goal.title}</h4>
                    <p className="text-xs text-primary/60 uppercase tracking-tighter">{goal.status}</p>
                  </div>
                </div>
                <ArrowUpRight className="text-gray-700" size={18} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;