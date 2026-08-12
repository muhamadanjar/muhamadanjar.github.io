import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return <div className="site-shell min-h-screen"><Navbar /><main className="pt-20"><Outlet /></main><Footer /></div>;
}
