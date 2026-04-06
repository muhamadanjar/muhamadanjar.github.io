import { Briefcase, Code2, Database, GraduationCap, Monitor, Sparkles, MapPin, Users } from 'lucide-react';
import { cn } from '../lib/utils';
import { skills, experience, personal, education, certifications, organizations } from '../data';
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
                src="/avatar.png"
                alt={personal.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
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
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-8">
              Turning Ideas Into <span className="text-indigo-500 font-black">Interactive</span> Realities
            </h1>

            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
              I'm <span className="font-bold text-zinc-900 dark:text-white">{personal.name}, {personal.degree}</span>, based in {personal.address.regency}, {personal.address.province}.
              I am a <span className="text-indigo-500 font-semibold">{personal.title}</span> {personal.subtitle ? `and ${personal.subtitle}` : ''}.
              With over a decade of experience since 2011, I've built a wide range of digital solutions.
            </p>


            <div className="flex items-center gap-4 text-zinc-500 mb-10">
              <div className="flex items-center gap-1.5">
                <MapPin size={18} className="text-indigo-500" />
                <span>{personal.address.district}, {personal.address.regency}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              <span>{personal.gender}</span>
              <div className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              {/* <span>{personal.religion}</span> */}
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-transparent hover:border-indigo-500/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mb-4 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                  <Code2 size={24} />
                </div>
                <h3 className="font-bold text-xl mb-2">Full Stack</h3>
                <p className="text-sm text-zinc-500">End-to-end development with multiple frameworks.</p>
              </div>
              <div className="p-6 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-transparent hover:border-purple-500/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-4 group-hover:bg-purple-500 group-hover:text-white transition-all">
                  <Database size={24} />
                </div>
                <h3 className="font-bold text-xl mb-2">GIS Specialist</h3>
                <p className="text-sm text-zinc-500">Expertise in Spatial Data and WebGIS mapping.</p>
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
                  {skillGroup.name.includes('Frontend') ? <Monitor size={24} /> :
                    skillGroup.name.includes('Programming') ? <Code2 size={24} /> :
                      skillGroup.name.includes('GIS') ? <MapPin size={24} /> :
                        skillGroup.name.includes('Database') ? <Database size={24} /> :
                          <Briefcase size={24} />}
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

      {/* Education Section */}
      <section className="about-section mb-32">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Academic Background</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">Where I developed my skills and knowledge.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-2xl bg-indigo-500 text-white shadow-lg shadow-indigo-500/20">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <div className="text-indigo-500 font-bold text-sm mb-1">{edu.period}</div>
                  <h3 className="text-2xl font-bold mb-2">{edu.institution}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 font-semibold mb-2">{edu.major}</p>
                  {edu.degree && (
                    <span className="inline-block px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-xs font-bold uppercase tracking-wider">
                      {edu.degree}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Certifications Section */}
      {certifications && certifications.length > 0 && (
        <section className="about-section mb-32">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Certifications</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">Professional recognition and validation of my expertise.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert: any, idx: number) => (
              <div key={idx} className="p-8 rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-transparent hover:border-indigo-500/30 transition-all flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0">
                  <Code2 size={28} />
                </div>
                <div>
                  <div className="text-indigo-500 font-bold text-sm mb-1">{cert.year}</div>
                  <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Organizations Section */}
      {organizations && organizations.length > 0 && (
        <section className="about-section mb-32">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Organizations</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">Active involvement in professional and community groups.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {organizations.map((org: any, idx: number) => (
              <div key={idx} className="p-8 rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-transparent hover:border-purple-500/30 transition-all flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0">
                  <Users size={28} />
                </div>
                <div>
                  <div className="text-purple-500 font-bold text-sm mb-1">{org.period}</div>
                  <h3 className="text-xl font-bold mb-2">{org.role}</h3>
                  <div className="text-zinc-600 dark:text-zinc-400 font-semibold mb-1 uppercase text-xs tracking-wider">
                    {org.organization}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Experience Section */}
      <section className="about-section">

        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Milestones</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">A snapshot of my professional projects and journey.</p>
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
                  "p-8 rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-all",
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

