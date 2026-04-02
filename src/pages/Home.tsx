import { ArrowRight, ChevronDown, Mail } from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';
import { NavLink } from 'react-router';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.from('.hero-badge', { y: 20, opacity: 0, duration: 1 })
      .from('.hero-title', { y: 30, opacity: 0, duration: 1.2 }, '-=0.8')
      .from('.hero-description', { y: 20, opacity: 0, duration: 1 }, '-=0.9')
      .from('.hero-btns', { y: 20, opacity: 0, duration: 1 }, '-=0.9')
      .from('.hero-socials', { y: 15, opacity: 0, duration: 1 }, '-=0.9')
      .from('.hero-scroll', { y: -10, opacity: 0, repeat: -1, yoyo: true, duration: 1 }, '-=0.5');
  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-center py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 dark:bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-500/10 dark:bg-purple-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6 text-center z-10">
        <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-10 border border-indigo-100 dark:border-indigo-500/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Open to remote opportunities
        </div>

        <h1 className="hero-title text-5xl md:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1] text-zinc-900 dark:text-white">
          Building Digital <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Experiences That Matter</span>
        </h1>

        <p className="hero-description text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          I'm <span className="font-bold text-zinc-900 dark:text-white">Muhamad Anjar</span>, a Full Stack Developer specializing in crafting highly performant, visually stunning web applications.
        </p>

        <div className="hero-btns flex flex-col sm:flex-row items-center justify-center gap-5">
          <NavLink
            to="/portfolio"
            className="group px-10 py-5 rounded-2xl bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 font-bold hover:scale-105 active:scale-95 transition-all w-full sm:w-auto text-center shadow-2xl flex items-center justify-center gap-2"
          >
            Explore Projects
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </NavLink>
          <NavLink
            to="/contact"
            className="px-10 py-5 rounded-2xl bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 border-2 border-zinc-200 dark:border-zinc-800 font-bold hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:scale-105 active:scale-95 transition-all w-full sm:w-auto text-center shadow-lg"
          >
            Get In Touch
          </NavLink>
        </div>

        <div className="hero-socials mt-16 flex items-center justify-center gap-8">
          <a href="https://github.com/muhamadanjar" target="_blank" rel="noreferrer" className="p-4 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all hover:-translate-y-1">
            <Github size={28} />
          </a>
          <a href="#" className="p-4 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-500 hover:text-blue-600 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all hover:-translate-y-1">
            <Linkedin size={28} />
          </a>
          <a href="mailto:hello@example.com" className="p-4 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-500 hover:text-indigo-500 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all hover:-translate-y-1">
            <Mail size={28} />
          </a>
        </div>
      </div>

      <div className="hero-scroll absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer text-zinc-400">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}
