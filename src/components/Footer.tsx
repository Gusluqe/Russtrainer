import Link from 'next/link';
import { INSTAGRAM_URL } from '@/lib/enlaces';

export default function Footer() {
  return (
    <footer className="border-t border-[#ece4d8] bg-cream px-4 sm:px-6 lg:px-20 py-6 pb-24 lg:pb-6 text-[13px] text-charcoal-muted">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <span>Russ Trainer · Buenos Aires</span>
        <Link href="/sobre-mi" className="hover:text-rose-deep">Sobre mí</Link>
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-rose-deep">@russ.trainer</a>
      </div>
    </footer>
  );
}
