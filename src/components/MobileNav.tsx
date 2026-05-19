'use client';

import { Home, User, CreditCard, MessageCircle } from 'lucide-react';

const links = [
  { label: 'Inicio',  href: '#inicio',                                                                             icon: Home },
  { label: 'Sobre',   href: '#sobre',                                                                              icon: User },
  { label: 'Planes',  href: '#planes',                                                                             icon: CreditCard },
  { label: 'WhatsApp', href: 'https://wa.me/5491168124464?text=Hola!%20Quiero%20saber%20m%C3%A1s', icon: MessageCircle },
];

export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-rose/15 shadow-[0_-4px_24px_rgba(0,0,0,0.08)]">
      <div className="flex items-center justify-around px-2 py-2 max-w-sm mx-auto">
        {links.map(({ label, href, icon: Icon }) => (
          <a
            key={href}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="flex flex-col items-center gap-1 px-4 py-1.5 rounded-2xl text-charcoal/50 hover:text-rose active:text-rose transition-colors"
          >
            <Icon size={20} />
            <span className="text-[10px] font-medium tracking-wide">{label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}

