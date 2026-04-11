'use client';

import React from 'react';

interface ChapterIndicatorProps {
  chapters: { id: string; eyebrow: string }[];
  activeIndex: number;
}

export const ChapterIndicator: React.FC<ChapterIndicatorProps> = ({ chapters, activeIndex }) => {
  return (
    <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-4 pointer-events-none">
      {chapters.map((chapter, idx) => (
        <div
          key={chapter.id}
          className="flex items-center gap-3 transition-all duration-500"
        >
          {/* Label — visible only when active */}
          <span
            className="text-[8px] uppercase tracking-[0.3em] font-bold transition-all duration-500 whitespace-nowrap"
            style={{
              opacity: idx === activeIndex ? 0.6 : 0,
              transform: idx === activeIndex ? 'translateX(0)' : 'translateX(8px)',
              color: 'var(--muted-gold)',
            }}
          >
            {chapter.eyebrow}
          </span>

          {/* Dot */}
          <div
            className="rounded-full transition-all duration-500 flex-shrink-0"
            style={{
              width: idx === activeIndex ? 10 : 5,
              height: idx === activeIndex ? 10 : 5,
              backgroundColor: idx === activeIndex ? 'var(--muted-gold)' : 'rgba(44, 24, 16, 0.12)',
              boxShadow: idx === activeIndex ? '0 0 12px rgba(184, 134, 11, 0.4)' : 'none',
            }}
          />
        </div>
      ))}
    </div>
  );
};
