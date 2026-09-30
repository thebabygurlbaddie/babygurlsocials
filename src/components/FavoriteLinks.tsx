import React from 'react';
import { ShoppingBag, ArrowUpRight } from 'lucide-react';

interface FavoriteItem {
  id: string;
  name: string;
  subtitle: string;
  url: string;
}

const FAVORITES: FavoriteItem[] = [
  {
    id: 'fashionnova',
    name: 'FashionNova',
    subtitle: 'Click to save on your order ♡',
    url: 'https://www.fashionnova.com/?a=thebabygurlbaddie',
  },
  {
    id: 'wolfpak',
    name: 'WolfPak Gear',
    subtitle: 'Code SAMMI to save $$',
    url: 'https://wolfpak.com/SAMMI',
  },
  {
    id: 'bonafide',
    name: 'Bona Fide Wear ♡',
    subtitle: 'Code THEBABYGURLBADDIE to save $$',
    url: 'https://bonafide.us/THEBABYGURLBADDIE',
  },
  {
    id: '1upnutrition',
    name: '1Up Nutrition Supps',
    subtitle: 'Code SAMMI to save $$',
    url: 'https://1upnutrition.com/SAMMI',
  },
];

export const FavoriteLinks: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Heading styled exactly like "ALL MY SOCIALS ♡" saying "MY FAVES ✨" */}
      <div className="flex items-center justify-center gap-2.5 my-6 select-none w-full">
        <span className="h-[1px] flex-1 max-w-[48px] bg-[#F2AEB9]/25" />
        <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-[#F2AEB9]/85">
          <span>MY FAVES</span>
          <span className="text-xs leading-none">✨</span>
        </div>
        <span className="h-[1px] flex-1 max-w-[48px] bg-[#F2AEB9]/25" />
      </div>

      {/* Stacked favorite buttons styled exactly like social buttons */}
      <div className="w-full flex flex-col gap-3.5">
        {FAVORITES.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between w-full min-h-[62px] p-3 rounded-2xl border border-[#F2AEB9]/35 bg-black/30 hover:bg-black/45 backdrop-blur-md transition-all duration-200 hover:border-[#F2AEB9]/70 hover:shadow-[0_0_20px_rgba(242,174,185,0.22)] active:scale-[0.985] cursor-pointer"
          >
            {/* Left: Rounded icon box with shopping bag icon */}
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#6E2130]/40 border border-[#F2AEB9]/25 flex items-center justify-center shrink-0 group-hover:border-[#F2AEB9]/50 group-hover:bg-[#6E2130]/60 transition-all">
                <ShoppingBag className="w-5 h-5 text-[#F2AEB9]" />
              </div>

              {/* Name & Soft Pink Subtitle */}
              <div className="flex flex-col text-left">
                <span className="font-inter font-semibold text-sm sm:text-base text-white/95 group-hover:text-[#F2AEB9] transition-colors leading-tight">
                  {item.name}
                </span>
                <span className="text-[12px] font-medium text-[#F2AEB9]/90 tracking-wide mt-0.5 inline-block">
                  {item.subtitle}
                </span>
              </div>
            </div>

            {/* Right: Arrow */}
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#F2AEB9]/60 group-hover:text-[#F2AEB9] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
              <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
            </div>
          </a>
        ))}
      </div>

      {/* Small muted affiliate disclosure text at the bottom */}
      <p className="mt-5 mb-2 text-[11px] sm:text-[11.5px] text-[#F2AEB9]/60 font-inter text-center leading-relaxed tracking-wide px-3 select-none">
        Some links earn me a small commission ♡ thank you for supporting me!
      </p>
    </div>
  );
};
