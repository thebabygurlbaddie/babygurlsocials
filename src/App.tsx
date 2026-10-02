import React from 'react';
import { BackgroundHearts } from './components/BackgroundHearts';
import { OnlineBadge } from './components/OnlineBadge';
import { SocialButtons } from './components/SocialButtons';
import { FavoriteLinks } from './components/FavoriteLinks';
import { Heart } from 'lucide-react';
import avatarPhoto from './assets/images/samantha_avatar_1790788483654.jpg';

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-wine-radial flex flex-col justify-start items-center text-[#F2AEB9] antialiased overflow-x-hidden selection:bg-[#F2AEB9]/20 selection:text-white">
      {/* Background Animated Hearts (Always rendered behind content) */}
      <BackgroundHearts />

      {/* Single Combined Page Content */}
      <main className="relative z-10 w-full max-w-[420px] mx-auto px-4 py-8 sm:py-12 flex flex-col items-center">
        {/* 1. Centered green "ONLINE" badge */}
        <div className="mb-4">
          <OnlineBadge />
        </div>

        {/* 2. Circular profile photo with thick semi-transparent pink ring and soft glow */}
        <div className="relative mb-5">
          <div className="w-[176px] h-[176px] sm:w-[184px] sm:h-[184px] rounded-full p-2 ring-4 ring-[#F2AEB9]/40 border-2 border-[#F2AEB9]/60 profile-glow bg-[#3d0c19]">
            <img
              src={avatarPhoto}
              alt="thebabygurlbaddie"
              className="w-full h-full object-cover object-top rounded-full select-none"
              loading="eager"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* 3. Big bold condensed pink title: THEBABYGURL on line 1 and BADDIE on line 2 */}
        <div className="w-full flex flex-col items-center justify-center leading-none mb-3 px-2">
          <span className="font-anton uppercase text-[#F2AEB9] text-[clamp(2.2rem,10.2vw,3.8rem)] tracking-wider leading-[0.92] text-center drop-shadow-sm whitespace-nowrap">
            THEBABYGURL
          </span>
          <span className="font-anton uppercase text-[#F2AEB9] text-[clamp(3.4rem,15.5vw,5.8rem)] tracking-wider leading-[0.88] text-center drop-shadow-sm whitespace-nowrap">
            BADDIE
          </span>
        </div>

        {/* 4. "building a life I love ✨" */}
        <p className="font-inter text-sm sm:text-base font-normal text-[#F2AEB9]/90 tracking-wide mb-2 text-center">
          building a life I love ✨
        </p>

        {/* 5. "Collabs: collabwithbabygurl@gmail.com" (mailto link) */}
        <div className="mb-6 text-center">
          <a
            href="mailto:collabwithbabygurl@gmail.com"
            className="font-inter text-xs sm:text-sm font-medium text-[#F2AEB9]/80 hover:text-[#F2AEB9] underline underline-offset-4 decoration-[#F2AEB9]/40 hover:decoration-[#F2AEB9] transition-colors"
          >
            Collabs: collabwithbabygurl@gmail.com
          </a>
        </div>

        {/* 6. "ALL MY SOCIALS ♡" */}
        <div className="flex items-center justify-center gap-2.5 mb-5 select-none w-full">
          <span className="h-[1px] flex-1 max-w-[48px] bg-[#F2AEB9]/25" />
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-[#F2AEB9]/85">
            <span>ALL MY SOCIALS</span>
            <Heart className="w-3.5 h-3.5 text-[#F2AEB9] fill-none stroke-[2.2]" />
          </div>
          <span className="h-[1px] flex-1 max-w-[48px] bg-[#F2AEB9]/25" />
        </div>

        {/* 7. Social buttons (Twitter / X, Instagram, TikTok, YouTube) */}
        <div className="w-full">
          <SocialButtons />
        </div>

        {/* 8. Favorite Links / MY FAVES section */}
        <div className="w-full">
          <FavoriteLinks />
        </div>
      </main>
    </div>
  );
}
