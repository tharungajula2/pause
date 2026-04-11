import React from 'react';
import { aiWorkflowSteps } from '../../../data/rd';

export const AIWorkflowSection: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5">
            <div className="mb-16 max-w-2xl">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-foreground/30 inline-block mb-4">Augmented innovation</span>
                <h3 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">The AI-Assisted <span className="italic text-gold">Refinement Loop.</span></h3>
                <p className="text-foreground/50 text-lg font-light leading-relaxed">
                    Artificial Intelligence in R&D is not a magic recipe creator. It is a strategic tool for hypothesis synthesis, pattern recognition, and tradeoff mapping.
                </p>
            </div>

            <div className="space-y-4">
                {aiWorkflowSteps.map((step, idx) => (
                    <div key={idx} className="group grid grid-cols-1 md:grid-cols-12 gap-6 p-8 bg-white/45 backdrop-blur-sm border border-foreground/5 rounded-2xl hover:border-gold/30 transition-all duration-500">
                        <div className="md:col-span-1 border-r border-foreground/5 py-2">
                             <span className="text-xl font-mono text-foreground/20 group-hover:text-gold transition-colors duration-500">0{idx + 1}</span>
                        </div>
                        
                        <div className="md:col-span-3">
                             <h4 className="text-xl font-serif text-foreground/90 mb-2">{step.title}</h4>
                             <span className="text-[9px] uppercase tracking-widest font-bold text-gold/60">{step.output}</span>
                        </div>

                        <div className="md:col-span-4">
                            <span className="text-[9px] uppercase tracking-widest font-bold text-foreground/30 block mb-3">AI Contribution</span>
                            <p className="text-xs font-light text-foreground/60 leading-relaxed italic">"{step.aiRole}"</p>
                        </div>

                        <div className="md:col-span-4">
                            <span className="text-[9px] uppercase tracking-widest font-bold text-foreground/30 block mb-3">Human Discipline</span>
                            <p className="text-xs font-light text-foreground/60 leading-relaxed italic">"{step.humanRole}"</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 p-8 bg-blue-500/[0.03] border border-blue-500/10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
                 <div className="space-y-2 text-center md:text-left">
                     <h5 className="text-sm font-bold uppercase tracking-widest text-blue-400/80">R&D Red Pill</h5>
                     <p className="text-xs text-foreground/40 max-w-xl">AI can suggest 1,000 textures, but a human operator must taste the grit. AI cannot replace sensory validation or shelf-life stability testing.</p>
                 </div>
                 <div className="flex -space-x-3">
                      {[...Array(4)].map((_, i) => (
                          <div key={i} className="w-10 h-10 rounded-full bg-graphite border-2 border-background flex items-center justify-center text-[10px] font-bold text-foreground/40">
                              {i === 3 ? '+' : ''}
                          </div>
                      ))}
                 </div>
            </div>
        </section>
    );
};
