'use client';

import React from 'react';
import { occasions } from '../data/occasions';
import { SystemContinuation } from '../components/ui/SystemContinuation';

export default function OccasionsPage() {
    return (
        <main className="min-h-screen bg-background">
            {/* Header */}
            <section className="relative py-32 px-6 overflow-hidden border-b border-foreground/8">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="text-gold/60 text-[10px] uppercase tracking-[0.5em] font-bold block mb-8">
                        Occasion Mapping
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] mb-8 text-balance">
                        Context is <span className="italic text-foreground/40">consumption.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-foreground/50 font-light max-w-2xl mx-auto leading-relaxed">
                        The consumer does not buy protein; they buy a solution for a specific moment in their day. Occasions are the bridge between biology and habit.
                    </p>
                </div>
            </section>

            {/* Occasion Grid */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {occasions.map((occasion) => (
                        <div key={occasion.id} className="p-8 md:p-12 bg-graphite/10 border border-foreground/5 rounded-3xl hover:border-gold/30 transition-all duration-500 group">
                            <span className="text-[10px] uppercase tracking-widest font-bold text-gold/40 mb-4 block group-hover:text-gold transition-colors">
                                {occasion.behavioralState} // {occasion.winningFormat}
                            </span>
                            <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-6">
                                {occasion.title}
                            </h3>
                            <p className="text-foreground/50 font-light text-sm leading-relaxed mb-8">
                                {occasion.humanDescription}
                            </p>
                            <div className="pt-6 border-t border-foreground/5">
                                <span className="text-[9px] uppercase tracking-widest font-bold text-foreground/20 block mb-2">Message Strategy</span>
                                <span className="text-xs text-foreground/60">{occasion.messageThatWorks}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Strategy Bridge */}
            <section className="py-24 px-6 max-w-5xl mx-auto text-center">
                <div className="bg-gold/5 border border-gold/10 p-12 md:p-20 rounded-[3rem]">
                    <h2 className="text-3xl md:text-5xl font-serif mb-8 italic">The Bridge to Step 01</h2>
                    <p className="text-lg text-foreground/60 leading-relaxed font-light mb-0">
                        Once we define the product and the occasion, we must define the unit economics, channel strategy, and growth engine. This is where the operating system begins.
                    </p>
                </div>
            </section>

            {/* Continuation */}
            <SystemContinuation 
                nextRoute="/strategy"
                nextTitle="Step 01: Portfolio Strategy"
                description="Begin the core operating system journey by defining role clarity and portfolio weight."
                step="01"
            />
        </main>
    );
}
