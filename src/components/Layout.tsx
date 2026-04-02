import { Outlet, useLocation } from 'react-router';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useGSAP(() => {
    gsap.fromTo(
      '.page-content',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', clearProps: 'all' }
    );
  }, [pathname]);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      <Navbar />
      <main className="page-content pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
