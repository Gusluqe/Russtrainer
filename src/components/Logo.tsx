'use client';

import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  dark?: boolean;
}

export default function Logo({ className = '', size = 'md', dark = false }: LogoProps) {
  const sizes = {
    sm: { text: 'text-xl', icon: 24 },
    md: { text: 'text-2xl', icon: 32 },
    lg: { text: 'text-4xl', icon: 48 },
  };

  const { text, icon } = sizes[size];

  return (
    <motion.div
      className={`flex items-center gap-3 ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <span
        aria-hidden="true"
        className={`shrink-0 grid place-items-center font-heading font-bold border-2 ${
          dark ? 'border-rose text-rose bg-white/5' : 'border-rose-deep text-rose-deep bg-white/40'
        }`}
        style={{ width: icon, height: icon, borderRadius: icon * 0.26, fontSize: icon * 0.52 }}
      >
        R
      </span>

      <div className="flex flex-col">
        <span className={`${text} font-heading font-bold tracking-tight leading-none`}>
          <span className={dark ? 'text-white' : 'text-charcoal'}>Russ</span>
          <span className={`italic ${dark ? 'text-rose' : 'text-rose-deep'}`}>Trainer</span>
        </span>
      </div>
    </motion.div>
  );
}

