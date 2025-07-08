import React from 'react';
import { Youtube, Instagram, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: <Youtube className="w-6 h-6" />, href: '#', label: 'YouTube' },
  { icon: <Instagram className="w-6 h-6" />, href: '#', label: 'Instagram' },
  { icon: <Linkedin className="w-6 h-6" />, href: '#', label: 'LinkedIn' },
];

const SocialSidebar = () => {
  return (
    <div className="fixed top-1/2 right-0 -translate-y-1/2 z-50 flex flex-col items-center bg-[#0b787f] rounded-l-xl py-4 px-2 shadow-lg space-y-4 md:space-y-6 md:py-6 md:px-3 md:rounded-l-2xl"
      style={{ minHeight: '220px' }}
    >
      {/* Icônes */}
      <div className="flex flex-col items-center space-y-4 md:space-y-6">
        {socialLinks.map((s, i) => (
          <a
            key={i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="text-white  transition-colors duration-200"
          >
            {s.icon}
          </a>
        ))}
      </div>
      {/* Séparateur */}
      <div className="w-8 h-0.5 bg-white my-2 md:my-4" />
      {/* Texte vertical */}
      <div className="flex flex-col items-center">
        <span className="text-white font-bold text-xs md:text-sm tracking-widest select-none" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          Suivez-nous
        </span>
      </div>
    </div>
  );
};

export default SocialSidebar; 