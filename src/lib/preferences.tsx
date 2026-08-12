/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

type Locale = 'en' | 'id';
type Preferences = { locale: Locale; setLocale: (locale: Locale) => void; dark: boolean; setDark: (dark: boolean) => void };
const PreferencesContext = createContext<Preferences | null>(null);

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => (localStorage.getItem('locale') as Locale) || 'en');
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');
  useEffect(() => { document.documentElement.classList.toggle('dark', dark); localStorage.setItem('theme', dark ? 'dark' : 'light'); }, [dark]);
  useEffect(() => { document.documentElement.lang = locale; localStorage.setItem('locale', locale); }, [locale]);
  const value = useMemo(() => ({ locale, setLocale, dark, setDark }), [locale, dark]);
  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) throw new Error('usePreferences must be used within PreferencesProvider');
  return context;
}
