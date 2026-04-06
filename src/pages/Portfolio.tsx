import { ExternalLink, Sparkles } from 'lucide-react';
import { Github } from '../components/Icons';
import { cn } from '../lib/utils';
import { projects } from '../data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useState, useRef } from 'react';

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const container = useRef<HTMLDivElement>(null);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  useGSAP(() => {
    gsap.from('.project-card', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
    });
  }, [filter]);

  return (
    <div ref={container} className="max-w-7xl mx-auto px-6 py-20 pb-32">
      <div className="text-center mb-20 animate-fade-in">
        <div className="inline-flex items-center gap-2 text-indigo-500 font-bold mb-4">
          <Sparkles size={20} />
          <span className="uppercase tracking-widest text-xs">Work Showcase</span>
        </div>
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-8">
          Selected <span className="text-indigo-500 font-black">Works</span>
        </h1>

        <p className="text-xl text-zinc-500 max-w-2xl mx-auto mb-12">
          A collection of digital solutions I've built, focusing on performance, scalability, and user experience.
        </p>

        {/* Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-semibold transition-all border",
                filter === cat
                  ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 border-transparent shadow-lg"
                  : "bg-white dark:bg-zinc-900 text-zinc-500 border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <div 
            key={idx} 
            className="project-card group bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 transition-all hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-zinc-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                 <a href="#" className="p-3 rounded-full bg-white text-zinc-900 hover:bg-indigo-500 hover:text-white transition-all hover:scale-110">
                    <ExternalLink size={20} />
                 </a>
                 <a href="#" className="p-3 rounded-full bg-white text-zinc-900 hover:bg-indigo-500 hover:text-white transition-all hover:scale-110">
                    <Github size={20} />
                 </a>
              </div>
            </div>
            <div className="p-8 grow flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-500 bg-indigo-500/10 px-2.5 py-1 rounded-md">
                  {project.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-bold px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

