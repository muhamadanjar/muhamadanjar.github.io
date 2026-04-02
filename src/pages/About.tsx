import { Briefcase, Code2, Database, GraduationCap, Monitor, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';
import { skills, experience } from '../data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray('.about-section');
    sections.forEach((section: any) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    });

    gsap.from('.skill-card', {
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: '.skills-grid',
        start: 'top 85%',
      },
    });
  }, { scope: container });

  return (
    <div ref={container} className="max-w-7xl mx-auto px-6 py-20 pb-32">
      {/* Intro Section */}
      <section className="about-section mb-32">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-2/5 relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-zinc-200 dark:bg-zinc-800 relative z-10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                alt="Muhamad Anjar" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-purple-500/20 rounded-full blur-[80px] -z-10" />
          </div>
          <div className="lg:w-3/5">
            <div className="flex items-center gap-2 text-indigo-500 font-bold mb-4">
              <Sparkles size={20} />
              <span className="uppercase tracking-widest text-xs">My Story</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">
              Turning Ideas Into <span className="text-indigo-500">Interactive</span> Realities
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
              I'm a Jakarta-based Full Stack Developer with a passion for building clean, efficient, and user-centric digital products. Over the past 5 years, I've had the privilege of working with startups and established companies to solve complex problems through code.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed italic">
              "Technology should be invisible—it's the experience that matters most."
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-transparent hover:border-indigo-500/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mb-4 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                  <Code2 size={24} />
                </div>
                <h3 className="font-bold text-xl mb-2">Clean Code</h3>
                <p className="text-sm text-zinc-500">Robust architectures and maintainable patterns.</p>
              </div>
              <div className="p-6 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-transparent hover:border-purple-500/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-4 group-hover:bg-purple-500 group-hover:text-white transition-all">
                  <Monitor size={24} />
                </div>
                <h3 className="font-bold text-xl mb-2">Design Focus</h3>
                <p className="text-sm text-zinc-500">Pixel-perfect implementation with great UX.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="about-section mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">The Toolkit</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">Technologies and tools that I use to bring projects to life.</p>
        </div>
        
        <div className="skills-grid grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="skill-card p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-500">
                   {skillGroup.name === 'Frontend' ? <Monitor size={24} /> : 
                    skillGroup.name === 'Backend' ? <Database size={24} /> :
                    <GraduationCap size={24} />}
                </div>
                <h3 className="text-2xl font-bold">{skillGroup.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <span key={i} className="px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-bold text-sm border border-transparent hover:border-indigo-500/50 transition-all">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="about-section">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Career Journey</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">My professional growth and milestones.</p>
        </div>
        
        <div className="space-y-20 relative">
           <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] bg-zinc-200 dark:bg-zinc-800 -translate-x-1/2 hidden md:block" />
           {experience.map((exp, idx) => (
             <div key={idx} className={cn(
               "flex flex-col md:flex-row items-center gap-8 md:gap-20",
               idx % 2 !== 0 ? "md:flex-row-reverse" : ""
             )}>
                <div className="flex-1 w-full md:text-right">
                  <div className={cn(
                    "p-8 rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800",
                    idx % 2 !== 0 ? "md:text-left" : ""
                  )}>
                    <div className="text-indigo-500 font-bold text-sm mb-2">{exp.period}</div>
                    <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300 mb-4 font-semibold uppercase text-xs tracking-wider">
                      <Briefcase size={14} /> {exp.company}
                    </div>
                    <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                      {exp.description}
                    </p>
                  </div>
                </div>
                
                <div className="relative z-10 w-10 h-10 rounded-full border-4 border-white dark:border-zinc-950 bg-indigo-500 shadow-xl shadow-indigo-500/20" />
                
                <div className="flex-1 hidden md:block" />
             </div>
           ))}
        </div>
      </section>
    </div>
  );
}
