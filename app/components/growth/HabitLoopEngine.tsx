import React from 'react';

export const HabitLoopEngine: React.FC = () => {
    return (
        <section className="py-32 px-6 max-w-5xl mx-auto">
            <div className="relative border border-foreground/10 bg-white/45 backdrop-blur-sm rounded-[2.5rem] p-10 md:p-20 overflow-hidden text-center group">
                {/* Tension Glows - Returning to severe OS styling */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/[0.03] blur-[120px] group-hover:bg-gold/[0.05] transition-colors duration-1000 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/[0.02] blur-[120px] group-hover:bg-blue-500/[0.04] transition-colors duration-1000 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col items-center">
                    <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-foreground/50 border border-foreground/10 px-4 py-2 rounded-full mb-12 bg-background/50 backdrop-blur-md">
                        The Core Logic
                    </span>

                    <h3 className="text-4xl md:text-6xl font-serif text-balance leading-tight mb-8">
                        Growth = <span className="italic text-gold">Repeated Fit</span>,<br/>not just awareness.
                    </h3>

                    <p className="text-xl md:text-2xl text-foreground/50 font-light max-w-2xl text-balance leading-relaxed mb-12">
                        Trial without routine is fake growth. A consumer trying your product because of an ad is a cost. A consumer aggressively stocking your product to ensure they don't run out before a 3 PM meeting is a business.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                         <span className="text-xs uppercase tracking-widest font-bold px-4 py-2 border border-foreground/10 rounded bg-background/50 text-foreground/60">Daily Ritual</span>
                         <span className="text-xs uppercase tracking-widest font-bold px-4 py-2 border border-foreground/10 rounded bg-background/50 text-foreground/60">Afternoon Slump Link</span>
                         <span className="text-xs uppercase tracking-widest font-bold px-4 py-2 border border-foreground/10 rounded bg-background/50 text-foreground/60">Desk Drawer Loop</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
