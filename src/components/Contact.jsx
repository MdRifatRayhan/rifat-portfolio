import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-[#05060f]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Establish Connection</h2>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="space-y-4 p-8 bg-white/5 rounded-2xl border border-white/10">
            <p className="text-gray-400">Email: <span className="text-white">rifatrayhan012@gmail.com</span></p>
            <p className="text-gray-400">Phone: <span className="text-white">01887370626</span></p>
            <p className="text-gray-400">Location: <span className="text-white">Bangladesh</span></p>
          </div>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full p-4 bg-dark border border-white/10 rounded-xl text-white outline-none focus:border-[#00f2fe]" />
            <textarea placeholder="Message" rows="4" className="w-full p-4 bg-dark border border-white/10 rounded-xl text-white outline-none focus:border-[#00f2fe]"></textarea>
            <button className="w-full py-4 bg-[#00f2fe] text-dark font-bold rounded-xl hover:scale-105 transition-all">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;