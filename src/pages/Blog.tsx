import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { blogPosts } from '../data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Blog() {
  useGSAP(() => {
    gsap.from('.blog-card', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 pb-32">
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 text-indigo-500 font-bold mb-4">
          <Sparkles size={20} />
          <span className="uppercase tracking-widest text-xs">Articles & Insights</span>
        </div>
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-8">
          The <span className="text-indigo-500 font-black">Knowledge</span> Hub
        </h1>

        <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
          Sharing my thoughts on technology, development, and the digital world.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogPosts.map((post) => (
          <article 
            key={post.id} 
            className="blog-card flex flex-col group cursor-pointer"
          >
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-8 shadow-sm">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"

              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 rounded-xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  {post.category}
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-zinc-400 text-sm mb-4 font-semibold uppercase tracking-widest">
              <Calendar size={14} />
              {post.date}
            </div>
            
            <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-500 transition-colors leading-tight">
              {post.title}
            </h3>
            
            <p className="text-zinc-500 dark:text-zinc-400 mb-6 leading-relaxed line-clamp-3 font-medium">
              {post.excerpt}
            </p>
            
            <div className="mt-auto flex items-center gap-2 text-indigo-500 font-bold group-hover:gap-4 transition-all">
              Read Article <ArrowRight size={18} />
            </div>
          </article>
        ))}
      </div>
      
      {/* Newsletter simple */}
      <div className="mt-40 p-12 md:p-20 rounded-[40px] bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
           <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">Stay updated on my latest articles</h2>
           <p className="text-zinc-400 dark:text-zinc-600 mb-10 text-lg">Join my newsletter to get the latest insights delivered directly to your inbox. No spam, just pure knowledge.</p>
           <form className="flex flex-col sm:flex-row gap-4">
             <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-6 py-4 rounded-2xl bg-zinc-800 dark:bg-white text-white dark:text-zinc-900 border-none outline-none ring-2 ring-transparent focus:ring-indigo-500 transition-all font-medium"
             />
             <button className="px-10 py-4 rounded-2xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/30">
               Subscribe
             </button>
           </form>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-indigo-500/20 to-transparent -z-0 pointer-events-none" />
      </div>
    </div>
  );
}
