import React from 'react';
import { Award, GraduationCap, ArrowUpRight } from 'lucide-react';

const certs = [
  { title: "Networking Basics", issuer: "Cisco Networking Academy", link: "https://www.credly.com/badges/fecd7eac-248e-49d2-8b46-89eddea246dd/public_url" },
  { title: "Network Addressing & Troubleshooting", issuer: "Cisco Networking Academy", link: "https://www.credly.com/badges/766dc658-10aa-4673-9554-f5210493f3d4/linked_in_profile" },
  { title: "Network Support and Security", issuer: "Cisco Networking Academy", link: "https://www.credly.com/badges/c1975f27-041f-40c6-b851-ac3af07132e0/linked_in_profile" },
  { title: "CCNA", issuer: "Mindluster", link: "https://www.mindluster.com/student/certificate/b14573fe" },
  { title: "RHCSA RHCE RHEL 9", issuer: "Mindluster", link: "https://www.mindluster.com/student/certificate/b3c4e40f" }
];

const Education = () => {
  return (
    <div className="py-24 bg-surface/30">
      <div id="certs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="text-3xl font-bold text-white mb-12">Licenses & Certifications</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((c, i) => (
            <a key={i} href={c.link} target="_blank" rel="noreferrer" className="p-6 bg-surface border border-white/5 rounded-2xl flex items-center justify-between group hover:border-primary/50 transition-all">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary"><Award /></div>
                <div>
                  <h4 className="text-white font-bold text-sm">{c.title}</h4>
                  <p className="text-xs text-muted mt-1">{c.issuer}</p>
                </div>
              </div>
              <ArrowUpRight className="text-muted group-hover:text-primary transition-colors" size={20} />
            </a>
          ))}
        </div>
      </div>

      <div id="education" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12">Education</h2>
        <div className="space-y-6">
          {[
            { degree: "BSc in Computer Science & Engineering", school: "BUBT, Dhaka", date: "2026", result: "CGPA: Appeared" },
            { degree: "HSC (Belkuchi Govt. College)", school: "Sirajganj", date: "2021", result: "GPA: 4.67" },
            { degree: "SSC (Sen Bhangabari High School)", school: "Sirajganj", date: "2019", result: "GPA: 4.89" }
          ].map((e, i) => (
            <div key={i} className="p-8 bg-surface border border-white/5 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex gap-6 items-center">
                <div className="p-4 bg-secondary/10 rounded-2xl text-secondary"><GraduationCap size={30} /></div>
                <div>
                  <h3 className="text-xl font-bold text-white">{e.degree}</h3>
                  <p className="text-muted">{e.school}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-white">{e.date}</div>
                <div className="text-primary font-mono text-sm uppercase">{e.result}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;