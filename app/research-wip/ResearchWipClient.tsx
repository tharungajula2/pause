'use client';

import React, { useState, useEffect } from 'react';
import { researchWipData } from '../data/research-wip-data';
import { WorkbookTableOfContents } from '../components/research/WorkbookTableOfContents';
import { WorkbookChapter as StudyChapter } from '../components/research/WorkbookChapter';
import { EditorialChapter } from '../components/research/EditorialChapter';
import { StickyNotesChapter } from '../components/research/StickyNotesChapter';
import { QCIntelligence } from '../components/research/QCIntelligence';
import { FlavorLab } from '../components/research/FlavorLab';

export default function ResearchWipClient() {
  const chapters = researchWipData;
  const [activeChapterId, setActiveChapterId] = useState(chapters.length > 0 ? chapters[0].id : '');
  const [userNotes, setUserNotes] = useState<Record<string, string>>({});
  const [isMounted, setIsMounted] = useState(false);

  // Persistence: Notes
  useEffect(() => {
    setIsMounted(true);
    const savedNotes = localStorage.getItem('research_wip_notes');
    if (savedNotes) {
      try {
        setUserNotes(JSON.parse(savedNotes));
      } catch (e) {
        console.error('Failed to parse notes', e);
      }
    }
  }, []);

  const updateNote = (chapterId: string, note: string) => {
    const newNotes = { ...userNotes, [chapterId]: note };
    setUserNotes(newNotes);
    localStorage.setItem('research_wip_notes', JSON.stringify(newNotes));
  };

  if (!isMounted) return null;

  const activeChapter = chapters.length > 0 
    ? (chapters.find(c => c.id === activeChapterId) || chapters[0])
    : null;

  return (
    <div className="min-h-screen bg-background pt-24 lg:pt-28">

      {/* Workbook Layout */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* TOC - Left (Desktop Sidebar) */}
          {chapters.length > 0 ? (
            <aside className="lg:w-1/4 lg:sticky lg:top-32 lg:h-[calc(100vh-160px)] z-10">
              <WorkbookTableOfContents 
                chapters={chapters} 
                activeId={activeChapterId} 
                onSelect={setActiveChapterId}
              />
            </aside>
          ) : null}

          {/* Content - Right */}
          <main className={chapters.length > 0 ? "lg:w-3/4 pb-32" : "w-full pb-32"}>
            {chapters.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="w-16 h-16 mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
                </div>
                <h3 className="text-xl font-serif mb-2 text-foreground">Content being updated.</h3>
                <p className="text-sm text-foreground/50 max-w-sm mx-auto">
                  I&apos;m currently refreshing the research modules with the latest data and insights. 
                  Stay tuned for the update.
                </p>
              </div>
            ) : activeChapter && (
              activeChapter.type === 'qc-intelligence' ? (
                <QCIntelligence chapter={activeChapter} />
              ) : activeChapter.type === 'flavor-lab' ? (
                <FlavorLab chapter={activeChapter} />
              ) : activeChapter.type === 'sticky-notes' ? (
                <StickyNotesChapter chapter={activeChapter} />
              ) : activeChapter.type === 'editorial' ? (
                <EditorialChapter 
                  chapter={activeChapter} 
                  note={userNotes[activeChapter.id] || ''}
                  onNoteChange={(val) => updateNote(activeChapter.id, val)}
                />
              ) : (
                <StudyChapter 
                  chapter={activeChapter} 
                  note={userNotes[activeChapter.id] || ''}
                  onNoteChange={(val) => updateNote(activeChapter.id, val)}
                />
              )
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
