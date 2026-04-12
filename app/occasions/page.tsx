import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Occasions — Nuvie Thesis",
  description: "A behavior-first reading of the moments, habits, and repeat triggers that shape Nuvie’s growth.",
};

import React from 'react';
import Link from 'next/link';
import { occasions } from '../data/occasions';
import { SystemContinuation } from '../components/ui/SystemContinuation';
import { MessageOccasionConsole } from '../components/growth/MessageOccasionConsole';
import { HabitLoopEngine } from '../components/growth/HabitLoopEngine';
import { QuickCommerceThesis } from '../components/channels/QuickCommerceThesis';

export default function OccasionsPage() {
    return (
        <main className="min-h-screen bg-background selection:bg-accent/30">
            {/* Header */}
            <section className="relative py-32 px-6 overflow-hidden border-b border-foreground/5 bg-background">
                <div className="absolute inset-0 bg-accent/2 blur-[120px] pointer-events-none" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="text-accent/50 text-[10px] uppercase tracking-[0.5em] font-bold block mb-8">
                        Occasion Mapping
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] mb-8 text-balance">
                        Context shapes <span className="italic text-foreground/40">consumption.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-foreground/45 font-light max-w-2xl mx-auto leading-relaxed">
                        Most people do not buy “protein” in the abstract. They buy a solution to a specific moment — a missed breakfast, a coffee ritual, a craving, or a convenience gap. Occasions are where product, biology, and habit begin to meet.
                    </p>
                </div>
            </section>

            {/* Occasion Grid */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {occasions.map((occasion) => (
                        <div key={occasion.id} className="p-8 md:p-12 bg-graphite/10 border border-foreground/5 rounded-3xl hover:border-accent transition-all duration-500 group relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-2 h-full bg-accent/5 group-hover:bg-accent/20 transition-all" />
                            <div className="mb-6">
                                <span className="text-[10px] uppercase tracking-widest font-bold text-accent/40 mb-2 block group-hover:text-accent transition-colors">
                                    What this moment is
                                </span>
                                <h3 className="text-2xl md:text-3xl font-serif text-foreground">
                                    {occasion.title}
                                </h3>
                            </div>
                            <p className="text-foreground/45 font-light text-sm leading-relaxed mb-8">
                                {occasion.humanDescription}
                            </p>
                            <div className="space-y-6 pt-6 border-t border-foreground/5">
                                <div>
                                    <span className="text-[9px] uppercase tracking-widest font-bold text-foreground/20 block mb-2">Best product fit</span>
                                    <span className="text-xs text-foreground/70 font-medium">{occasion.winningFormat}</span>
                                </div>
                                <div>
                                    <span className="text-[9px] uppercase tracking-widest font-bold text-foreground/20 block mb-2">Best message</span>
                                    <span className="text-xs text-foreground/60">{occasion.messageThatWorks}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Merged Strategy layers */}
            <MessageOccasionConsole />
            <HabitLoopEngine />
            <QuickCommerceThesis />

            {/* Continuation */}
            <SystemContinuation 
                nextRoute="/how-i-can-help"
                nextTitle="How I can help translate these moments into sharper execution."
                description="A few practical initiatives and audit directions built around Nuvie’s current reality."
                ctaLabel="See How I Can Help"
            />
        </main>
    );
}
