import { useState, useEffect } from 'react';
import { 
  Mail, 
  ChevronDown, 
  ExternalLink,
  Code2,
  Monitor,
  Database,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import { cn } from './lib/utils';
import { skills, experience, projects } from './data';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

function Github({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
  );
}

function Linkedin({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  );
}



export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav 
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
          scrolled ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-zinc-200 dark:border-zinc-800 shadow-sm" : "bg-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tighter">
            Muhamad<span className="text-indigo-500">Anjar</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-indigo-500 transition-colors">About</a>
            <a href="#experience" className="hover:text-indigo-500 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-indigo-500 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-indigo-500 transition-colors">Contact</a>
          </div>
          <button className="md:hidden p-2 text-zinc-600 dark:text-zinc-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/20 dark:bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
          <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-purple-500/20 dark:bg-purple-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />
          
          <div className="max-w-4xl mx-auto px-6 text-center z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-8 border border-indigo-100 dark:border-indigo-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Available for new opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              Hi, I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-600">Muhamad Anjar</span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              A passionate Full Stack Developer crafting beautiful, highly functional, and user-centric digital experiences. Let's build something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#projects" className="px-8 py-4 rounded-xl bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 font-medium hover:scale-105 active:scale-95 transition-all w-full sm:w-auto text-center shadow-lg shadow-zinc-900/20 dark:shadow-zinc-50/10">
                View My Work
              </a>
              <a href="#contact" className="px-8 py-4 rounded-xl bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 border border-zinc-200 dark:border-zinc-800 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:scale-105 active:scale-95 transition-all w-full sm:w-auto text-center">
                Contact Me
              </a>
            </div>
            
            <div className="mt-16 flex items-center justify-center gap-6">
              <a href="https://github.com/muhamadanjar" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all">
                <Github size={24} />
              </a>
              <a href="#" className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all">
                <Linkedin size={24} />
              </a>
              <a href="mailto:hello@example.com" className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer text-zinc-400 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors">
            <a href="#about"><ChevronDown size={32} /></a>
          </div>
        </section>

        {/* About & Skills Section */}
        <section id="about" className="py-24 bg-white dark:bg-zinc-900/50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-16">
              <div className="w-12 h-[2px] bg-indigo-500"></div>
              <h2 className="text-3xl font-bold tracking-tight">About Me & Skills</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-6">
                  I'm a software engineer with over 5 years of experience building modern web applications. 
                  My journey started when I discovered the magic of turning lines of code into interactive interfaces.
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-8">
                  Today, I focus on creating scalable architectures, clean codebases, and intuitive user experiences.
                  I believe that great software is achieved not just through technical excellence, but through clear communication and a deep understanding of user needs.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                    <div className="text-indigo-500 mb-2"><Code2 size={28} /></div>
                    <h3 className="font-bold text-xl mb-1">Clean Code</h3>
                    <p className="text-sm text-zinc-500">Maintainable & readable structure</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                    <div className="text-purple-500 mb-2"><Monitor size={28} /></div>
                    <h3 className="font-bold text-xl mb-1">Responsive</h3>
                    <p className="text-sm text-zinc-500">Pixels perfect on every device</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-8">
                {skills.map((skillGroup, idx) => (
                  <div key={idx}>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      {skillGroup.name === 'Frontend' ? <Monitor size={20} className="text-indigo-500" /> : 
                       skillGroup.name === 'Backend' ? <Database size={20} className="text-indigo-500" /> :
                       <GraduationCap size={20} className="text-indigo-500" />}
                      {skillGroup.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((item, i) => (
                        <span key={i} className="px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium text-sm border border-zinc-200 dark:border-zinc-700/50 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-colors cursor-default">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 relative">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-16 justify-center">
              <h2 className="text-3xl font-bold tracking-tight text-center">Professional Experience</h2>
              <div className="w-12 h-[2px] bg-purple-500"></div>
            </div>
            
            <div className="space-y-12">
              {experience.map((exp, idx) => (
                <div key={idx} className="relative pl-8 md:pl-0 group">
                  <div className="md:grid md:grid-cols-[1fr_auto_1fr] items-start gap-8">
                    {/* Left side (Date) */}
                    <div className="hidden md:block text-right pt-1">
                      <span className="text-zinc-500 dark:text-zinc-400 font-medium">{exp.period}</span>
                    </div>

                    {/* Timeline Line & Dot */}
                    <div className="absolute left-0 top-2 md:relative md:left-auto md:top-auto flex flex-col items-center h-full">
                      <div className="w-4 h-4 rounded-full bg-indigo-500 border-4 border-white dark:border-zinc-950 z-10 group-hover:scale-125 transition-transform"></div>
                      {idx !== experience.length - 1 && (
                        <div className="w-[2px] h-full bg-zinc-200 dark:bg-zinc-800 absolute top-4 md:relative md:top-0 md:grow"></div>
                      )}
                    </div>

                    {/* Right side (Content) */}
                    <div className="pb-12 md:pb-0">
                      <div className="md:hidden text-indigo-500 font-medium text-sm mb-2">{exp.period}</div>
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">{exp.role}</h3>
                      <h4 className="text-lg text-zinc-600 dark:text-zinc-400 mb-4 font-medium flex items-center gap-2">
                        <Briefcase size={16} /> {exp.company}
                      </h4>
                      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-zinc-100/50 dark:bg-zinc-900/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between mb-16">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-indigo-500"></div>
                <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
              </div>
              <a href="https://github.com/muhamadanjar" className="hidden sm:flex text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 font-medium items-center gap-2 transition-colors">
                View GitHub <ExternalLink size={16} />
              </a>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <div key={idx} className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all hover:-translate-y-2 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                       <a href="#" className="w-10 h-10 rounded-full bg-white text-zinc-900 flex items-center justify-center hover:scale-110 transition-transform">
                          <ExternalLink size={18} />
                       </a>
                    </div>
                  </div>
                  <div className="p-6 grow flex flex-col">
                    <div className="text-xs font-semibold uppercase tracking-wider text-indigo-500 mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-md font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center sm:hidden">
               <a href="https://github.com/muhamadanjar" className="inline-flex text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 font-medium items-center gap-2 transition-colors px-6 py-3 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 w-full justify-center">
                View All on GitHub <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Let's work together</h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-xl mx-auto">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-indigo-500/25">
              <Mail size={20} />
              Say Hello
            </a>
          </div>
          
          {/* Decorative bottom background */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-zinc-100 dark:from-zinc-900 to-transparent -z-10" />
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-200 dark:border-zinc-800 text-center text-zinc-500 dark:text-zinc-400 text-sm bg-white dark:bg-zinc-950">
        <p>© {new Date().getFullYear()} Muhamad Anjar. All rights reserved.</p>
        <p className="mt-2 text-xs">Built with React, Tailwind V4 & Vite.</p>
      </footer>
    </div>
  );
}
