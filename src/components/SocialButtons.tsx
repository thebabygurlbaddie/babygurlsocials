import React from 'react';
import {
  Instagram,
  Youtube,
  ArrowUpRight,
} from 'lucide-react';
import { XIcon, TikTokIcon } from './Icons';

interface SocialLinkItem {
  id: string;
  name: string;
  url: string;
  icon: React.ReactNode;
}

export const SocialButtons: React.FC = () => {
  const links: SocialLinkItem[] = [
    {
      id: 'instagram',
      name: 'Instagram',
      url: 'https://instagram.com/thebabygurlbaddie',
      icon: <Instagram className="w-5 h-5 text-[#F2AEB9]" />,
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      url: 'https://www.tiktok.com/@thebabygurlbaddie',
      icon: <TikTokIcon className="w-5 h-5 text-[#F2AEB9]" />,
    },
    {
      id: 'youtube',
      name: 'YouTube Channel',
      url: 'https://www.youtube.com/@thebabygurlbaddie',
      icon: <Youtube className="w-5 h-5 text-[#F2AEB9]" />,
    },
  ];

  return (
    <div className="w-full flex flex-col gap-3.5">
      {/* 1. Twitter / X Button */}
      <a
        href="https://x.com/babygurlbaddiee"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-between w-full min-h-[62px] p-3 rounded-2xl border border-[#F2AEB9]/35 bg-black/30 hover:bg-black/45 backdrop-blur-md transition-all duration-200 hover:border-[#F2AEB9]/70 hover:shadow-[0_0_20px_rgba(242,174,185,0.22)] active:scale-[0.985] cursor-pointer"
      >
        {/* Left: Rounded icon box & text */}
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-[#6E2130]/40 border border-[#F2AEB9]/25 flex items-center justify-center shrink-0 group-hover:border-[#F2AEB9]/50 group-hover:bg-[#6E2130]/60 transition-all">
            <XIcon className="w-5 h-5 text-[#F2AEB9]" />
          </div>

          <div className="flex flex-col text-left">
            <span className="font-inter font-semibold text-sm sm:text-base text-white/95 group-hover:text-[#F2AEB9] transition-colors leading-tight">
              Twitter / X
            </span>
            <span className="chat-pulse-glow text-[12px] font-medium text-[#F2AEB9] tracking-wide mt-0.5 inline-block">
              Come say hi ♡
            </span>
          </div>
        </div>

        {/* Right: Arrow */}
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#F2AEB9]/60 group-hover:text-[#F2AEB9] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
          <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
        </div>
      </a>

      {/* Remaining Social Buttons */}
      {links.map((item) => (
        <a
          key={item.id}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between w-full min-h-[62px] p-3 rounded-2xl border border-[#F2AEB9]/35 bg-black/30 hover:bg-black/45 backdrop-blur-md transition-all duration-200 hover:border-[#F2AEB9]/70 hover:shadow-[0_0_20px_rgba(242,174,185,0.22)] active:scale-[0.985] cursor-pointer"
        >
          {/* Left: Rounded icon box */}
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#6E2130]/40 border border-[#F2AEB9]/25 flex items-center justify-center shrink-0 group-hover:border-[#F2AEB9]/50 group-hover:bg-[#6E2130]/60 transition-all">
              {item.icon}
            </div>

            {/* Name */}
            <div className="flex flex-col text-left">
              <span className="font-inter font-semibold text-sm sm:text-base text-white/95 group-hover:text-[#F2AEB9] transition-colors leading-tight">
                {item.name}
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
  );
};
