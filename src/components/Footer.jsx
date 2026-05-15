import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Md. Rifat Rayhan. All rights reserved.
        </p>
        <div className="flex gap-8 text-xs font-mono text-gray-600 uppercase tracking-widest">
          <span>Encrypted Transmission</span>
          <span>Security-First Portfolio</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;