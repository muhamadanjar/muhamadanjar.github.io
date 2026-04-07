import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { personal } from '../data';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
  // { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const names = personal.name.split(' ');
  const firstName = names[0];
  const lastName = names[1] || '';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // useGSAP(() => {
  //   gsap.from('.nav-item', {
  //     y: -10,
  //     opacity: 0,
  //     duration: 0.5,
  //     stagger: 0.05,
  //     ease: 'power2.out',
  //   });
  // }, []);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 w-full z-[60] transition-all duration-500 h-20 flex items-center',
          isScrolled
            ? 'bg-white/90 dark:bg-zinc-950/90 backdrop-blur-xl border-zinc-200/50 dark:border-zinc-800/50 shadow-sm'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
          <NavLink
            to="/"
            className="text-2xl font-bold tracking-tighter transition-transform hover:scale-105 shrink-0 flex items-center gap-1"
          >
            <span className="text-zinc-900 dark:text-white uppercase tracking-widest">{firstName}</span>
            <span className="text-indigo-500 uppercase tracking-widest">{lastName}</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      'nav-item text-sm font-semibold transition-all relative py-2',
                      isActive
                        ? 'text-indigo-600 dark:text-indigo-400'
                        : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                    )
                  }
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 dark:bg-indigo-400 rounded-full" />
                  )}
                </NavLink>
              ))}
            </div>

            <NavLink
              to="/contact"
              className="px-6 py-2.5 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg"
            >
              Hire Me
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-zinc-900 dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-white dark:bg-zinc-950 z-[55] md:hidden transition-all duration-500 ease-in-out flex flex-col p-6 h-screen',
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        )}
      >
        <div className="flex flex-col gap-8 pt-24 h-full">
          {navLinks.map((link, idx) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  'text-5xl font-bold tracking-tight transition-all',
                  isActive
                    ? 'text-indigo-500'
                    : 'text-zinc-300 dark:text-zinc-700 hover:text-zinc-900 dark:hover:text-white'
                )
              }
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {link.name}
            </NavLink>
          ))}
          <div className="mt-auto pb-12">
            <NavLink
              to="/contact"
              className="w-full py-6 rounded-3xl bg-indigo-600 text-white text-2xl font-bold shadow-2xl block text-center"
            >
              Hire Me
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
