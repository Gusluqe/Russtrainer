'use client';

import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
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
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <rect
          x="4"
          y="4"
          width="40"
          height="40"
          rx="8"
          stroke="url(#logoGradient)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M14 32V16L24 24L34 16V32"
          stroke="url(#logoGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="24" cy="24" r="3" fill="#D4AF37" />
        <defs>
          <linearGradient
            id="logoGradient"
            x1="4"
            y1="4"
            x2="44"
            y2="44"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D4AF37" />
            <stop offset="1" stopColor="#C9A9A6" />
          </linearGradient>
        </defs>
      </svg>
      
      <div className="flex flex-col">
        <span className={`${text} font-heading font-bold tracking-tight leading-none`}>
          <span className="text-white">Russ</span>
          <span className="text-gradient">Trainer</span>
        </span>
      </div>
    </motion.div>
  );
}
