'use client';

import React from 'react';
import { WorkbookChapter as ChapterType } from '../../data/research-wip-data';

interface WorkbookChapterProps {
  chapter: ChapterType;
  note: string;
  onNoteChange: (val: string) => void;
}

export const WorkbookChapter: React.FC<WorkbookChapterProps> = ({ 
  chapter, 
  note, 
  onNoteChange 
}) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* WIP STATUS LABEL */}
      <div className="mb-8 pl-12 border-l border-foreground/5">
        <span className="text-[10px] text-foreground/30 italic font-light tracking-widest">
          Live study. Incomplete by design. Last updated: April 2026.
        </span>
      </div>

      {/* Chapter header */}
      <header className="mb-16">
        <div className="flex items-center gap-4 mb-4">
          <span className="h-px w-8 bg-accent/30" />
          <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-accent/60 italic">{chapter.eyebrow}</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-6 leading-[1.1] text-balance">{chapter.title}</h2>
        <p className="text-lg text-foreground/40 font-light leading-relaxed italic max-w-3xl">
          "{chapter.summary}"
        </p>
      </header>

      {/* IMAGE PLACEHOLDER (If present) */}
      {chapter.imagePlaceholder && (
        <div className="mb-20">
          <div className="w-full aspect-[21/9] border-2 border-dashed border-foreground/5 rounded-[2.5rem] flex flex-col items-center justify-center bg-graphite/5 transition-colors hover:bg-graphite/10">
            <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-foreground/20 mb-3">
              Image Placeholder: {chapter.imagePlaceholder.label}
            </span>
            <span className="text-[10px] text-foreground/30 italic font-light">
              {chapter.imagePlaceholder.description}
            </span>
          </div>
        </div>
      )}

      {/* Chapter blocks */}
      <div className="space-y-12">
        {chapter.blocks.map((block) => (
          <div 
            key={block.id} 
            className={`p-10 md:p-12 rounded-[2.5rem] border transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.02)] ${
              block.type === 'question' ? 'bg-background border-accent/20 border-l-8 border-l-accent' :
              block.type === 'hypothesis' ? 'bg-graphite/5 border-foreground/5 italic' :
              block.type === 'risk' ? 'bg-red-500/[0.02] border-red-500/10' :
              'bg-background border-foreground/5'
            }`}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className={`text-[8px] uppercase tracking-[0.4em] font-bold px-3 py-1.5 rounded-full border ${
                block.type === 'question' ? 'text-accent border-accent/20 bg-accent/2' :
                block.type === 'hypothesis' ? 'text-accent border-accent/10 bg-accent/2' :
                block.type === 'risk' ? 'text-red-500 border-red-500/20 bg-red-500/5' :
                'text-foreground/30 border-foreground/10 bg-foreground/2'
              }`}>
                {block.type}
              </span>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/60">{block.title}</h4>
            </div>
            <p className="text-lg text-foreground/60 font-light leading-relaxed text-balance">
              {block.body}
            </p>
          </div>
        ))}

        {/* Notes workspace (REMARKS) */}
        <div className="mt-32 pt-20 border-t border-foreground/5">
          <div className="mb-12">
            <span className="text-accent/40 text-[10px] uppercase tracking-[0.4em] font-bold block mb-4">REMARKS</span>
            <h3 className="text-3xl font-serif">Deep Study Workspace</h3>
            <p className="text-sm text-foreground/30 mt-2 font-light">Add your findings or unresolved tensions for this module below.</p>
          </div>
          
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/10 to-transparent opacity-0 group-focus-within:opacity-100 transition duration-700 rounded-[2.5rem] blur" />
            <textarea
              value={note}
              onChange={(e) => onNoteChange(e.target.value)}
              placeholder="Add your notes here... This workspace is private and locked to local storage."
              className="relative w-full h-80 bg-background border border-foreground/10 rounded-[2.5rem] p-10 text-foreground/90 focus:border-accent/40 focus:ring-1 focus:ring-accent/10 outline-none transition-all duration-300 resize-none font-light leading-relaxed text-xl placeholder:italic placeholder:opacity-20"
            />
          </div>
          <div className="mt-6 flex justify-between items-center text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/15">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>Local Persistance Active</span>
            </div>
            <span>Module-{chapter.id.split('-')[0]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
