'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { siteContent } from '../../data/site-content';
import { HeroChapter } from '../../types';
import { HeroVisualStage } from './HeroVisualStage';
import { HeroChapterRail } from './HeroChapterRail';
import { ChapterIndicator } from './ChapterIndicator';

interface ChapterHeroProps {
  chapters?: HeroChapter[];
}

export const ChapterHero: React.FC<ChapterHeroProps> = ({ 
  chapters = siteContent.heroChapters 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const chapterRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeChapter, setActiveChapter] = useState(0);
  const [isInView, setIsInView] = useState(false);

  // IntersectionObserver for chapter detection
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const observers: IntersectionObserver[] = [];

    chapterRefs.current.forEach((ref, idx) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
              setActiveChapter(idx);
            }
          });
        },
        {
          threshold: [0.4, 0.6],
          rootMargin: '-10% 0px -10% 0px',
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [chapters.length]);

  // Track whether the hero container is in view (for the chapter indicator)
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-background">
      {/* Unified Cinematic Flow */}
      <div className="relative">
        {/* Sticky visual backdrop */}
        <div className="sticky top-0 w-full h-screen overflow-hidden z-10">
          <HeroVisualStage activeChapter={activeChapter} />
        </div>

        {/* Chapter narrative rail overlaid on top */}
        <div className="relative" style={{ marginTop: '-100vh' }}>
          <HeroChapterRail
            chapters={chapters}
            activeIndex={activeChapter}
            chapterRefs={chapterRefs}
          />
        </div>
      </div>

      {/* Chapter progress indicator (Visible on LG+ when multiple chapters exist) */}
      {isInView && chapters.length > 1 && (
        <div className="hidden lg:block">
          <ChapterIndicator
            chapters={chapters.map((c) => ({ id: c.id, eyebrow: c.eyebrow }))}
            activeIndex={activeChapter}
          />
        </div>
      )}
    </div>
  );
};
