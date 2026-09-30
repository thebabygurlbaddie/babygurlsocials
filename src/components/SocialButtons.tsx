import React, { useState, useEffect } from 'react';
import {
  Instagram,
  Youtube,
  ArrowUpRight,
  AlertCircle,
} from 'lucide-react';
import { XIcon, TikTokIcon } from './Icons';

const TWITTER_URL = 'https://x.com/babygurlbaddiee';
const SESSION_KEY = 'thebabygurlbaddie_twitter_18_confirmed';

interface SocialLinkItem {
  id: string;
  name: string;
  url: string;
  icon: React.ReactNode;
  subtitle?: string;
  isTwitter?: boolean;
}

export const SocialButtons: React.FC = () => {
  const [is18Confirmed, setIs18Confirmed] = useState(false);
  const [isConfirmingTwitter, setIsConfirmingTwitter] = useState(false);

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem(SESSION_KEY);
      if (stored === 'true') {
        setIs18Confirmed(true);
      }
    } catch {
      // Ignore sessionStorage errors (e.g. private mode restrictions)
    }
  }, []);

  const handleTwitterClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (is18Confirmed) {
      // Already confirmed in this session: open in same tab
      window.location.href = TWITTER_URL;
      return;
    }
    // First time: smoothly change in place to ask for 18+ confirmation
    setIsConfirmingTwitter(true);
  };

  const handleConfirmYes = (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      sessionStorage.setItem(SESSION_KEY, 'true');
    } catch {
      // Ignore
    }
    setIs18Confirmed(true);
    setIsConfirmingTwitter(false);
    // Opens the X link in the same tab
    window.location.href = TWITTER_URL;
  };

  const handleCancel = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsConfirmingTwitter(false);
  };

  const links: SocialLinkItem[] = [
    {
      id: 'instagram',
      name: 'Instagram',
      url: 'https://instagram.com/thebabygurlbaddie',
      icon: <Instagram className="w-5 h-5 text-[#F2AEB9]" />,
    },
    {
      id: 'fitness',
      name: 'Fitness Page',
      url: 'https://instagram.com/_babygurlbaddiexo',
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
      {/* 1. Twitter / X Button with in-place 18+ confirmation */}
      <div
        className={`relative w-full rounded-2xl border transition-all duration-300 overflow-hidden ${
          isConfirmingTwitter
            ? 'border-[#F2AEB9] bg-black/55 shadow-[0_0_24px_rgba(242,174,185,0.28)] p-3.5 sm:p-4'
            : 'border-[#F2AEB9]/35 bg-black/30 hover:bg-black/45 hover:border-[#F2AEB9]/70 hover:shadow-[0_0_20px_rgba(242,174,185,0.22)] active:scale-[0.985]'
        }`}
      >
        {isConfirmingTwitter ? (
          /* 18+ Confirmation State (smoothly in place, no popup) */
          <div className="flex flex-col items-center justify-center gap-2.5 text-center animate-fade-in py-1">
            <div className="flex items-center justify-center gap-1.5 text-[#F2AEB9]">
              <AlertCircle className="w-4 h-4 text-[#F2AEB9] shrink-0" />
              <p className="font-inter font-medium text-xs sm:text-[13.5px] text-[#F2AEB9] tracking-wide">
                18+ only — are you 18 or older?
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 mt-1 w-full max-w-[280px]">
              {/* Pink Pill Button */}
              <button
                type="button"
                onClick={handleConfirmYes}
                className="flex-1 py-1.5 px-3.5 rounded-full bg-[#F2AEB9] text-[#4A0F1F] font-inter font-bold text-xs sm:text-[13px] tracking-wide shadow-md hover:bg-[#fbd0d7] active:scale-95 transition-all cursor-pointer"
              >
                Yes, I'm 18+
              </button>

              {/* Outline Style Cancel Button */}
              <button
                type="button"
                onClick={handleCancel}
                className="flex-1 py-1.5 px-3.5 rounded-full border border-[#F2AEB9]/60 text-[#F2AEB9] font-inter font-medium text-xs sm:text-[13px] tracking-wide hover:bg-[#F2AEB9]/15 active:scale-95 transition-all cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          /* Normal Twitter/X Button State */
          <a
            href={TWITTER_URL}
            onClick={handleTwitterClick}
            className="flex items-center justify-between w-full min-h-[62px] p-3 cursor-pointer group"
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
        )}
      </div>

      {/* 2-5: Remaining Social Buttons */}
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
