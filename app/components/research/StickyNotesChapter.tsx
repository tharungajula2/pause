'use client';

import React from 'react';
import type { WorkbookChapter as ChapterType, StickyNote } from '../../types/index';

interface StickyNotesChapterProps {
  chapter: ChapterType;
}

const rotations = [-1.2, 0.8, -0.5, 1.4, -0.9, 0.6, -1.1, 1.3, -0.7, 0.4, -1.5, 1.0, -0.8, 0.5, -1.3, 0.9, -0.6, 1.2];
const backgrounds = ['#FAFAF7', '#FFF9C4', '#FFF0E0'];

export const StickyNotesChapter: React.FC<StickyNotesChapterProps> = ({ chapter }) => {
  return (
    <div className="flavor-lab-style-wrapper py-16 px-4 md:px-8 bg-[#F0EBE1] -mx-4 md:-mx-8">
      {/* Chapter header */}
      <header className="max-w-7xl mx-auto mb-16 px-4">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-accent italic">
            {chapter.eyebrow}
          </span>
          <span className="h-px w-12 bg-accent/20" />
        </div>
        <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight tracking-tight text-foreground">
          {chapter.title}
        </h2>
        <p className="text-xl md:text-2xl text-foreground/60 font-light leading-relaxed max-w-3xl mb-8">
          "{chapter.summary}"
        </p>
        
        <div className="bg-[#DDD5C8]/10 border-l border-accent/20 p-6 max-w-3xl">
           <p className="text-sm text-foreground/50 italic leading-relaxed">
             These are live working notes from building a D2C brand concept from scratch. Raw thinking, not polished conclusions. The kind of signals that matter before they become obvious.
           </p>
        </div>
      </header>

      {/* Section Divider */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 py-8">
          <hr className="flex-1 border-t border-dashed border-[#C8BFB0]"/>
          <span className="text-[10px] font-mono tracking-[0.2em] text-[#8C8070] uppercase">
            // RAW SIGNAL LOG
          </span>
          <hr className="flex-1 border-t border-dashed border-[#C8BFB0]"/>
        </div>
      </div>

      {/* Sticky Notes Masonry Grid */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="masonry-grid">
          {chapter.stickyNotes?.map((note, idx) => (
            <div 
              key={note.id}
              className="card-rotate p-8 border border-[#DDD5C8] shadow-sm mb-8 inline-block w-full break-inside-avoid transition-all hover:shadow-md relative"
              style={{ 
                backgroundColor: backgrounds[idx % backgrounds.length],
                transform: `rotate(${rotations[idx % rotations.length]}deg)`
              }}
            >
              {/* Status Tag */}
              <div className="flex justify-between items-start mb-6">
                <span className="text-[9px] font-mono text-foreground/30 uppercase">
                  {note.id}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-amber-100/50 text-[8px] font-bold tracking-[0.2em] text-amber-700 uppercase">
                  {note.status}
                </span>
              </div>

              {/* Note Content */}
              <h4 className="text-lg font-serif font-bold text-foreground mb-4 leading-tight">
                {note.title}
              </h4>
              <div className="h-px w-8 bg-[#C8BFB0]/50 mb-6" />
              <p className="text-sm text-foreground/70 font-light leading-relaxed font-sans">
                {note.body}
              </p>

              {/* Pinned visual marker (subtle dot at top center) */}
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#8C8070]/20" />
            </div>
          ))}
        </div>
      </div>

      {/* Footer marker */}
      <div className="max-w-7xl mx-auto px-4 mt-24">
        <div className="bg-[#FFF9C4] p-8 border border-dashed border-[#8C8070] text-center max-w-xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-amber-900/40 italic">
            --- End of Raw Observations ---
          </p>
        </div>
      </div>

      <style jsx>{`
        .masonry-grid {
          column-count: 3;
          column-gap: 24px;
        }
        @media (max-width: 1024px) {
          .masonry-grid {
            column-count: 2;
          }
        }
        @media (max-width: 768px) {
          .masonry-grid {
            column-count: 1;
          }
          .card-rotate {
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
};
