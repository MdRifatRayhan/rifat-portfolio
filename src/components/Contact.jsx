import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send } from 'lucide-react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "rifatrayhan012@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
            <p className="text-muted text-lg mb-10">Available for Network Engineering opportunities.</p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-primary/10 rounded-2xl text-primary"><Mail size={24} /></div>
                <div>
                  <p className="text-xs font-mono text-muted uppercase">Email</p>
                  <div className="flex items-center gap-3">
                    <span className="text-white font-bold">{email}</span>
                    <button onClick={handleCopy} className="p-1.5 bg-white/5 rounded-lg text-muted hover:text-white">
                      {copied ? <Check size={14} className="text-accent" /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-4 bg-primary/10 rounded-2xl text-primary"><Phone size={24} /></div>
                <div><p className="text-xs font-mono text-muted uppercase">Phone</p><p className="text-white font-bold">+8801887370626</p></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-4 bg-primary/10 rounded-2xl text-primary"><MapPin size={24} /></div>
                <div><p className="text-xs font-mono text-muted uppercase">Location</p><p className="text-white font-bold">Mirpur 6, Dhaka, Bangladesh</p></div>
              </div>
            </div>
          </div>
          <form className="bg-surface p-8 rounded-3xl border border-white/5 space-y-4" onSubmit={(e) => { e.preventDefault(); const fd = new FormData(e.target); window.location.href = `mailto:${email}?subject=${fd.get('subject')}&body=${fd.get('message')}`; }}>
            <input name="name" required placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-primary" />
            <input name="subject" required placeholder="Subject" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-primary" />
            <textarea name="message" required rows="4" placeholder="Your Message" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-primary"></textarea>
            <button type="submit" className="w-full py-4 bg-primary text-background font-bold uppercase tracking-widest rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"><Send size={18} /> Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;