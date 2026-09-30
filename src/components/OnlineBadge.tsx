import React from 'react';

export const OnlineBadge: React.FC = () => {
  return (
    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-emerald-800/70 bg-[#0d2a1b]/60 backdrop-blur-xs select-none shadow-[0_0_12px_rgba(16,185,129,0.15)]">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 duration-1000" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
      </span>
      <span className="text-[10.5px] font-semibold tracking-[0.14em] text-emerald-400 uppercase font-inter leading-none pt-[1px]">
        ONLINE
      </span>
    </div>
  );
};
