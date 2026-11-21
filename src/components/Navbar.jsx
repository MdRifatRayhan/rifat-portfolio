import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Download, ShieldCheck } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Networking', to: 'networking' },
    { name: 'Cyber & Dev', to: 'cyber' },
    { name: 'Certifications', to: 'certs' },
    { name: 'Education', to: 'education' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md py-3 border-b border-white/10' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <ShieldCheck className="text-primary w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tighter text-white uppercase">
              Rifat<span className="text-primary">.Rayhan</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.to} smooth={true} spy={true} activeClass="text-primary bg-primary/5" className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted hover:text-white transition-all cursor-pointer rounded-lg">
                {link.name}
              </Link>
            ))}
            <a href="/Md_Rifat_Rayhan_CV.pdf" download className="ml-4 px-5 py-2 bg-primary text-background text-xs font-bold uppercase tracking-widest rounded-lg hover:scale-105 transition-all flex items-center gap-2">
              <Download size={14} /> CV
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-surface border-b border-white/10 px-4 py-6 space-y-2 animate-in slide-in-from-top">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.to} smooth={true} onClick={() => setIsOpen(false)} className="block px-4 py-3 text-sm font-bold uppercase text-muted hover:text-primary hover:bg-white/5 rounded-xl transition-all">
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/5">
            <a href="/Md_Rifat_Rayhan_CV.pdf" download className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-background text-xs font-black uppercase tracking-widest rounded-xl transition-all">
              <Download size={16} /> Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;