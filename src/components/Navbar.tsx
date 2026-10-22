'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { WA_EMPEZAR } from '@/lib/enlaces';

const links = [
  { name: 'Sobre mí', href: '/sobre-mi' },
  { name: 'Tu app', href: '/#app' },
  { name: 'Planes', href: '/#planes' },
  { name: 'Testimonios', href: '/#testimonios' },
];

export default function Navbar({ transparente = false }: { transparente?: boolean }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const fondo = scrolled || !transparente ? 'bg-cream/95 backdrop-blur-sm shadow-sm shadow-rose/5' : 'bg-transparent';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${fondo}`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20 h-[68px] lg:h-[88px] flex items-center justify-between gap-4">
        <Link href="/" aria-label="Inicio">
          <Logo size="md" />
        </Link>

        <div className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <Link key={l.name} href={l.href} className="text-charcoal font-semibold text-[15px] lg:text-[17px] hover:text-rose-deep transition-colors">
              {l.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href="/sobre-mi" className="lg:hidden text-rose-deep font-bold text-sm">
            Sobre mí
          </Link>
          <a
            href={WA_EMPEZAR}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex bg-rose-deep text-white font-bold text-sm lg:text-base px-7 py-3.5 rounded-full hover:bg-rose-deeper transition-colors"
          >
            Escríbeme
          </a>
        </div>
      </div>
    </nav>
  );
}
