import React from 'react';

interface MarqueeProps {
  items: string[];
  speedSeconds?: number;
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  items,
  speedSeconds = 28,
  className = '',
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden bg-[#EDF0F7] border-y border-[#E3E7EF] py-3.5 ${className}`}
      aria-label="Services ticker"
    >
      <div className="flex w-full overflow-hidden select-none group">
        <div
          className="flex shrink-0 items-center justify-around gap-8 min-w-full group-hover:[animation-play-state:paused]"
          style={{
            animation: `marquee ${speedSeconds}s linear infinite`,
          }}
        >
          {items.map((item, idx) => (
            <span
              key={idx}
              className="flex items-center gap-6 text-xs sm:text-sm font-semibold tracking-wide text-[#151E4D] uppercase"
            >
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ED1834]" aria-hidden="true" />
            </span>
          ))}
        </div>

        <div
          className="flex shrink-0 items-center justify-around gap-8 min-w-full group-hover:[animation-play-state:paused]"
          style={{
            animation: `marquee ${speedSeconds}s linear infinite`,
          }}
          aria-hidden="true"
        >
          {items.map((item, idx) => (
            <span
              key={`clone-${idx}`}
              className="flex items-center gap-6 text-xs sm:text-sm font-semibold tracking-wide text-[#151E4D] uppercase"
            >
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ED1834]" />
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee { animation: none !important; }
        }
      `}</style>
    </div>
  );
};
