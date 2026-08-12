import { ArrowDownRight, ArrowRight, Download, Mail } from 'lucide-react';
import { NavLink } from 'react-router';
import { personal, projects } from '../data';
import { Github } from '../components/Icons';
import { usePreferences } from '../lib/preferences';

export default function Home() {
  const featured = projects.slice(0, 3);
  const { locale } = usePreferences();
  const id = locale === 'id';

  return (
    <div className="site-shell overflow-hidden">
      <section className="site-container grid min-h-[calc(100vh-5rem)] items-center gap-12 py-14 lg:grid-cols-[1.22fr_.78fr] lg:gap-16 lg:py-20">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#dbe6f2] bg-[#e4eef9] px-3.5 py-2 text-xs font-semibold text-[#3e7bc1] dark:border-[#23384b] dark:bg-[#17293c] dark:text-[#7eaee0]">
            <span className="h-1.5 w-1.5 rounded-full bg-current" /> Open to remote opportunities
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.06] tracking-[-0.035em] text-balance sm:text-5xl lg:text-[clamp(2.25rem,5vw,3.75rem)]">
            {personal.title}
            <span className="mt-2 block text-[#3e7bc1] dark:text-[#7eaee0]">building government &amp; enterprise systems.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[#5f7590] dark:text-[#93a9c0] sm:text-lg">
            {id ? `Saya ${personal.name}, seorang ${personal.title.toLowerCase()} yang berfokus pada produk digital andal, sistem spasial, dan pengalaman yang dirancang dengan matang.` : `I'm ${personal.name}, a ${personal.title.toLowerCase()} focused on reliable digital products, spatial systems, and thoughtfully engineered experiences.`}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <NavLink to="/portfolio" className="inline-flex items-center gap-2 rounded-xl bg-[#3e7bc1] px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#3269a7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3e7bc1]">
              {id ? 'Lihat proyek' : 'View projects'} <ArrowRight size={17} />
            </NavLink>
            <NavLink to="/contact" className="surface rounded-xl px-5 py-3.5 text-sm font-bold text-[#16283d] transition-colors hover:bg-[#eaf1f9] dark:text-[#e7f0f8] dark:hover:bg-[#182838]">
              {id ? 'Hubungi saya' : 'Get in touch'}
            </NavLink>
            <a href="/cv.json" download className="inline-flex items-center gap-2 rounded-xl px-4 py-3.5 text-sm font-bold text-[#5f7590] transition-colors hover:text-[#3e7bc1] dark:text-[#93a9c0] dark:hover:text-[#7eaee0]">
              <Download size={17} /> {id ? 'Unduh CV' : 'Download CV'}
            </a>
          </div>
          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-[#dbe6f2] pt-6 dark:border-[#23384b]">
            {[['12+', 'Years building software'], ['34', 'Delivered projects'], ['6', 'Stack disciplines']].map(([value, label]) => (
              <div key={label}><dt className="text-2xl font-extrabold tracking-[-0.03em]">{value}</dt><dd className="mt-1 text-xs font-medium leading-5 text-[#5f7590] dark:text-[#93a9c0]">{id ? ({ 'Years building software': 'Tahun membangun perangkat lunak', 'Delivered projects': 'Proyek terselesaikan', 'Stack disciplines': 'Bidang keahlian' }[label] || label) : label}</dd></div>
            ))}
          </dl>
        </div>
        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[#e4eef9] blur-xl dark:bg-[#17293c]" />
          <img src="/avatar.png" alt={`Portrait of ${personal.name}`} className="surface relative aspect-[4/5] w-full rounded-2xl object-cover" />
          <div className="surface relative mx-5 -mt-8 rounded-xl px-4 py-3 shadow-[0_12px_32px_-18px_rgba(22,40,61,.28)]">
            <p className="text-sm font-bold">{personal.address.regency}, {personal.address.province}</p>
            <p className="mt-1 text-xs text-[#5f7590] dark:text-[#93a9c0]">{personal.degree} · Informatics Engineering</p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#dbe6f2] dark:border-[#23384b]"><div className="site-container grid gap-5 py-10 md:grid-cols-[220px_1fr] md:gap-14"><p className="section-label">{id ? 'Tentang' : 'About'}</p><div><p className="max-w-3xl text-xl font-medium leading-8 text-balance sm:text-2xl">{id ? 'Saya menerjemahkan kebutuhan nyata menjadi sistem yang mudah dipelihara — dari aplikasi web dan data spasial hingga pengalaman mobile.' : 'I turn practical requirements into maintainable systems — from web applications and spatial data to mobile experiences.'}</p><NavLink to="/about" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#3e7bc1] hover:text-[#16283d] dark:text-[#7eaee0] dark:hover:text-white">{id ? 'Selengkapnya tentang saya' : 'More about my practice'} <ArrowDownRight size={17} /></NavLink></div></div></section>

      <section className="site-container py-16 sm:py-20"><div className="mb-8 flex flex-wrap items-end justify-between gap-4"><div><p className="section-label mb-3">Selected work</p><h2 className="text-3xl font-extrabold tracking-[-0.03em] text-balance">Work across web, spatial, and mobile.</h2></div><NavLink to="/portfolio" className="text-sm font-bold text-[#3e7bc1] hover:text-[#16283d] dark:text-[#7eaee0] dark:hover:text-white">See all work →</NavLink></div><div className="grid gap-5 md:grid-cols-3">{featured.map((project) => <article key={project.title} className="surface group overflow-hidden rounded-2xl"><div className="aspect-[16/10] overflow-hidden bg-[#eaf1f9] dark:bg-[#182838]"><img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></div><div className="p-5"><p className="text-xs font-bold uppercase tracking-[0.12em] text-[#3e7bc1] dark:text-[#7eaee0]">{project.category}</p><h3 className="mt-2 text-lg font-bold leading-6">{project.title}</h3><p className="mt-3 line-clamp-2 text-sm leading-6 text-[#5f7590] dark:text-[#93a9c0]">{project.description}</p></div></article>)}</div></section>

      <section className="site-container pb-16 sm:pb-20"><div className="rounded-2xl bg-[#16283d] px-6 py-10 text-white sm:px-10 md:flex md:items-end md:justify-between"><div><p className="text-sm font-bold text-[#a9caeb]">Have a project in mind?</p><h2 className="mt-2 max-w-xl text-3xl font-extrabold tracking-[-0.03em] text-balance">Let&apos;s create something that earns its place.</h2></div><div className="mt-7 flex gap-3 md:mt-0"><a href={`mailto:${personal.email[0]}`} className="rounded-xl bg-white px-4 py-3 text-sm font-bold text-[#16283d]">Email me <Mail className="ml-1 inline" size={16} /></a><a href="https://github.com/muhamadanjar" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="rounded-xl border border-white/25 p-3 text-white"><Github size={18} /></a></div></div></section>
    </div>
  );
}
