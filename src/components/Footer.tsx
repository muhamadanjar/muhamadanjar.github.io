import { Mail } from 'lucide-react';
import { Github, Linkedin, Twitter } from './Icons';
import { NavLink } from 'react-router';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <NavLink to="/" className="text-2xl font-bold tracking-tighter mb-4 inline-block">
            Muhamad<span className="text-indigo-500">Anjar</span>
          </NavLink>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-sm mb-6 leading-relaxed">
            Crafting high-quality digital experiences with modern technologies. Let's work together to build something amazing.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/muhamadanjar" className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="mailto:hello@example.com" className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-zinc-900 dark:text-white mb-6">Explore</h4>
          <ul className="space-y-4">
            <li><NavLink to="/" className="text-zinc-500 hover:text-indigo-500 transition-colors">Home</NavLink></li>
            <li><NavLink to="/about" className="text-zinc-500 hover:text-indigo-500 transition-colors">About</NavLink></li>
            <li><NavLink to="/portfolio" className="text-zinc-500 hover:text-indigo-500 transition-colors">Portfolio</NavLink></li>
            <li><NavLink to="/blog" className="text-zinc-500 hover:text-indigo-500 transition-colors">Blog</NavLink></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-zinc-900 dark:text-white mb-6">Contact</h4>
          <ul className="space-y-4">
            <li className="text-zinc-500">Jakarta, Indonesia</li>
            <li><a href="mailto:hello@example.com" className="text-zinc-500 hover:text-indigo-500">hello@example.com</a></li>
            <li className="text-zinc-500">+62 123 4567 890</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-zinc-100 dark:border-zinc-900 text-center text-sm text-zinc-500 dark:text-zinc-400">
        <p>© {new Date().getFullYear()} Muhamad Anjar. All rights reserved. Created with ❤️ & GSAP.</p>
      </div>
    </footer>
  );
}
