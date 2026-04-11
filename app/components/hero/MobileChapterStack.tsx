'use client';

import React from 'react';
import Link from 'next/link';
import { HeroChapter } from '../../types';

interface MobileChapterStackProps {
  chapters: HeroChapter[];
}

export const MobileChapterStack: React.FC<MobileChapterStackProps> = ({ chapters }) => {
  return (
    <div className="lg:hidden relative z-20">
      {chapters.map((chapter, idx) => {
        // Per-chapter atmospheric warm glows for cream
        const glowColors = [
          'rgba(184, 134, 11, 0.06)',
          'rgba(139, 69, 19, 0.08)',
          'rgba(111, 78, 55, 0.06)',
          'rgba(184, 134, 11, 0.08)',
          'rgba(184, 134, 11, 0.1)',
        ];

        return (
          <section
            key={chapter.id}
            className={`relative overflow-hidden ${
              idx === 0 ? 'min-h-[85svh] flex items-center pt-20' : 'py-24'
            }`}
          >
            {/* Mini atmosphere per card */}
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[120px]"
                style={{ backgroundColor: glowColors[idx] }}
              />
              {idx < chapters.length - 1 && (
                <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-foreground/8 to-transparent" />
              )}
            </div>

            <div className="relative z-10 px-6 max-w-2xl mx-auto text-center">
              {/* Eyebrow */}
              <span className="text-gold/60 text-[9px] uppercase tracking-[0.5em] font-bold mb-6 block">
                {chapter.eyebrow}
              </span>

              {/* Title */}
              <h2
                className={`font-medium leading-[1.1] mb-6 text-balance ${
                  idx === 0
                    ? 'text-4xl sm:text-5xl'
                    : idx === 3
                      ? 'text-2xl sm:text-3xl'
                      : 'text-3xl sm:text-4xl'
                } ${idx === 1 ? 'italic' : ''}`}
              >
                {chapter.title}
              </h2>

              {/* Body */}
              {chapter.body && (
                <p className="text-base text-foreground/40 font-light leading-relaxed text-balance mb-6">
                  {chapter.body}
                </p>
              )}

              {/* Occasion tags */}
              {chapter.occasionTags && (
                <div className="flex flex-wrap justify-center gap-4 mt-4 opacity-50">
                  {chapter.occasionTags.map((tag) => (
                    <span key={tag} className="text-[9px] tracking-widest uppercase font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Formula chain */}
              {chapter.formula && (
                <div className="flex flex-wrap items-center justify-center gap-3 text-xl font-serif text-gold italic mt-4">
                  {chapter.formula.map((step, i) => (
                    <React.Fragment key={step}>
                      <span className={i === chapter.formula!.length - 1 ? 'underline decoration-1 underline-offset-8' : ''}>
                        {step}
                      </span>
                      {i < chapter.formula!.length - 1 && (
                        <span className="text-foreground/20 font-sans text-sm">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              )}

              {/* CTA */}
              {chapter.cta && chapter.cta.type === 'scroll-cue' && (
                <div className="mt-12 flex flex-col items-center gap-3 opacity-30">
                  <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-gold/60">
                    {chapter.cta.label}
                  </span>
                  <div className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent" />
                </div>
              )}

              {chapter.cta && chapter.cta.type === 'primary' && chapter.cta.href && (
                <div className="mt-10">
                  <Link
                    href={chapter.cta.href}
                    className="inline-block px-8 py-4 bg-gold text-white rounded-full uppercase tracking-widest font-bold text-xs hover:scale-105 transition-transform shadow-lg"
                  >
                    {chapter.cta.label}
                  </Link>
                </div>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
};
