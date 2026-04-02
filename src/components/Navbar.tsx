import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useGSAP(() => {
    gsap.from('.nav-item', {
      y: -20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b',
        isScrolled
          ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-zinc-200 dark:border-zinc-800 py-4 shadow-sm'
          : 'bg-transparent border-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <NavLink 
          to="/" 
          className="text-2xl font-bold tracking-tighter hover:scale-105 transition-transform"
        >
          Muhamad<span className="text-indigo-500">Anjar</span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  'nav-item px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group',
                  isActive
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                )
              }
            >
              {link.name}
              <span className={cn(
                "absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100",
                location.pathname === link.path && "scale-x-100"
              )} />
            </NavLink>
          ))}
          <NavLink
             to="/contact"
             className="ml-4 px-6 py-2 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-semibold hover:scale-105 active:scale-95 transition-all shadow-md"
          >
            Hire Me
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-zinc-600 dark:text-zinc-400"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 top-[73px] bg-white dark:bg-zinc-950 z-40 md:hidden transition-all duration-500 ease-in-out px-6 py-10',
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        )}
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  'text-3xl font-bold tracking-tight transition-colors',
                  isActive
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-zinc-500 dark:text-zinc-700'
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
