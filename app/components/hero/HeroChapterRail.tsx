'use client';

import React from 'react';
import Link from 'next/link';
import { HeroChapter } from '../../types';

interface HeroChapterRailProps {
  chapters: HeroChapter[];
  activeIndex: number;
  chapterRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

export const HeroChapterRail: React.FC<HeroChapterRailProps> = ({
  chapters,
  activeIndex,
  chapterRefs,
}) => {
  return (
    <div className="relative z-30">
      {chapters.map((chapter, idx) => (
        <div
          key={chapter.id}
          ref={(el) => { chapterRefs.current[idx] = el; }}
          className="min-h-screen flex items-center justify-center px-6"
        >
          <div
            className="max-w-5xl mx-auto text-center transition-all duration-700 ease-out"
            style={{
              opacity: idx === activeIndex ? 1 : 0.05,
              transform: idx === activeIndex ? 'translateY(0)' : 'translateY(30px)',
              filter: idx === activeIndex ? 'none' : 'blur(4px)',
            }}
          >
            {/* Eyebrow */}
            <span className="text-accent/60 text-[9px] uppercase tracking-[0.6em] font-bold mb-8 block">
              {chapter.eyebrow}
            </span>

            {/* Title */}
            <h2
              className={`font-medium leading-[1.05] mb-4 sm:mb-8 text-balance ${
                idx === 0
                  ? 'text-4xl sm:text-6xl md:text-7xl lg:text-8xl'
                  : idx === 3
                    ? 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl'
                    : 'text-3xl sm:text-4xl md:text-5xl lg:text-7xl'
              } ${idx === 1 ? 'italic' : ''}`}
            >
              {chapter.title}
            </h2>

            {/* Body text */}
            {chapter.body && (
              <p className="text-lg md:text-2xl text-foreground/40 font-light max-w-3xl mx-auto leading-relaxed text-balance mb-4 sm:mb-8">
                {chapter.body}
              </p>
            )}

            {/* Occasion tags */}
            {chapter.occasionTags && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-12 mt-4 sm:mt-8 opacity-50">
                {chapter.occasionTags.map((tag) => (
                  <span key={tag} className="text-[10px] tracking-widest uppercase font-bold">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Formula chain */}
            {chapter.formula && (
              <div className="flex flex-wrap items-center justify-center gap-4 text-2xl md:text-4xl font-serif text-accent italic mt-4">
                {chapter.formula.map((step, i) => (
                  <React.Fragment key={step}>
                    <span className={i === chapter.formula!.length - 1 ? 'underline decoration-1 underline-offset-[12px]' : ''}>
                      {step}
                    </span>
                    {i < chapter.formula!.length - 1 && (
                      <span className="text-foreground/20 italic font-sans mx-2">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}

            {/* CTA */}
            {chapter.cta && chapter.cta.type === 'scroll-cue' && (
              <div className="mt-20 flex flex-col items-center gap-4 opacity-40">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent/60">
                  {chapter.cta.label}
                </span>
                <div className="w-px h-12 bg-gradient-to-b from-accent/40 to-transparent animate-pulse" />
              </div>
            )}

            {chapter.cta && chapter.cta.type === 'primary' && chapter.cta.href && (
              <div className="mt-8 sm:mt-16">
                <Link
                  href={chapter.cta.href}
                  className="inline-block px-10 py-5 bg-accent text-background rounded-full uppercase tracking-widest font-bold text-sm hover:scale-105 transition-transform pointer-events-auto shadow-lg"
                >
                  {chapter.cta.label}
                </Link>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
