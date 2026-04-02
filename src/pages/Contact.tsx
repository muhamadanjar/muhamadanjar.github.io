import { Mail, MessageSquare, Phone, Send, Sparkles } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export default function Contact() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.contact-info', {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });
    gsap.from('.contact-form', {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });
  }, { scope: container });

  return (
    <div ref={container} className="max-w-7xl mx-auto px-6 py-20 pb-40">
      <div className="text-center mb-24">
        <div className="inline-flex items-center gap-2 text-indigo-500 font-bold mb-4">
          <Sparkles size={20} />
          <span className="uppercase tracking-widest text-xs">Let's Connect</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
          Have a project <span className="text-indigo-500">in mind?</span>
        </h1>
        <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
          Whether you have a specific project or just want to say hello, I'm always open to new connections.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_1.5fr] gap-20">
        <div className="contact-info space-y-12">
          <div className="group p-8 rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-transparent hover:border-indigo-500/30 transition-all">
            <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Mail size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Email Me</h3>
            <p className="text-zinc-500 mb-4">I'll respond within 24 hours.</p>
            <a href="mailto:hello@example.com" className="text-xl font-bold text-indigo-500 hover:text-indigo-600 transition-colors">
              hello@example.com
            </a>
          </div>

          <div className="group p-8 rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-transparent hover:border-purple-500/30 transition-all">
            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Phone size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Call Me</h3>
            <p className="text-zinc-500 mb-4">Mon-Fri from 9am to 6pm.</p>
            <a href="tel:+621234567890" className="text-xl font-bold text-purple-500 hover:text-purple-600 transition-colors">
              +62 123 4567 890
            </a>
          </div>

          <div className="group p-8 rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-transparent hover:border-emerald-500/30 transition-all">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MessageSquare size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Socials</h3>
            <p className="text-zinc-500 mb-4">Let's connect on LinkedIn.</p>
            <a href="#" className="text-xl font-bold text-emerald-500 hover:text-emerald-600 transition-colors">
              @muhamadanjar
            </a>
          </div>
        </div>

        <form className="contact-form space-y-8 bg-white dark:bg-zinc-900 p-10 md:p-16 rounded-[40px] border border-zinc-200 dark:border-zinc-800 shadow-2xl shadow-indigo-500/5">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <label className="text-sm font-bold uppercase tracking-widest text-zinc-500">Your Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full px-6 py-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border-none outline-none ring-2 ring-transparent focus:ring-indigo-500 transition-all font-bold placeholder:text-zinc-400"
              />
            </div>
            <div className="space-y-4">
              <label className="text-sm font-bold uppercase tracking-widest text-zinc-500">Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com" 
                className="w-full px-6 py-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border-none outline-none ring-2 ring-transparent focus:ring-indigo-500 transition-all font-bold placeholder:text-zinc-400"
              />
            </div>
          </div>
          <div className="space-y-4">
            <label className="text-sm font-bold uppercase tracking-widest text-zinc-500">Subject</label>
            <input 
              type="text" 
              placeholder="How can I help you?" 
              className="w-full px-6 py-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border-none outline-none ring-2 ring-transparent focus:ring-indigo-500 transition-all font-bold placeholder:text-zinc-400"
            />
          </div>
          <div className="space-y-4">
            <label className="text-sm font-bold uppercase tracking-widest text-zinc-500">Message</label>
            <textarea 
              rows={6}
              placeholder="Tell me about your project..." 
              className="w-full px-6 py-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border-none outline-none ring-2 ring-transparent focus:ring-indigo-500 transition-all font-bold placeholder:text-zinc-400 resize-none"
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-5 rounded-2xl bg-indigo-600 text-white font-extrabold text-lg flex items-center justify-center gap-3 hover:bg-indigo-700 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-indigo-600/30"
          >
            Send Message <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}
