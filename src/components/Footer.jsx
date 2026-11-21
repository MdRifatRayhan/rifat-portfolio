import React from 'react';
const Footer = () => (
  <footer className="py-12 bg-[#0a0f1c] border-t border-white/5 text-center">
    <div className="max-w-7xl mx-auto px-4">
      <p className="text-sm text-muted mb-2">© {new Date().getFullYear()} Md. Rifat Rayhan. All rights reserved.</p>
      <p className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.3em]">Engineered for Resilience</p>
    </div>
  </footer>
);
export default Footer;