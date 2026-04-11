import React from 'react';
import Link from 'next/link';

interface SystemContinuationProps {
    nextRoute: string;
    nextTitle: string;
    description: string;
    step?: string;
}

export const SystemContinuation: React.FC<SystemContinuationProps> = ({ nextRoute, nextTitle, description, step }) => {
    return (
        <section className="py-32 px-6 max-w-4xl mx-auto border-t border-foreground/5 relative z-10">
            <Link href={nextRoute} className="group block p-12 md:p-16 bg-white/50 backdrop-blur-md border border-foreground/8 rounded-[2rem] hover:border-gold/30 hover:bg-white/70 transition-all duration-700 relative overflow-hidden shadow-sm">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/[0.02] blur-[150px] group-hover:bg-gold/[0.06] transition-colors duration-1000 origin-center pointer-events-none" />
                
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                    <div>
                        <div className="flex items-center space-x-4 mb-4">
                            {step && (
                                <span className="text-[10px] font-mono font-bold text-gold/80 px-2 py-0.5 border border-gold/30 rounded bg-gold/5">
                                    Step {step}
                                </span>
                            )}
                            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground/50 group-hover:text-gold transition-colors">
                                Next System Layer
                            </span>
                        </div>
                        <h4 className="text-3xl md:text-5xl font-serif text-foreground group-hover:text-gold transition-colors mb-4">
                            {nextTitle}
                        </h4>
                        <p className="text-foreground/60 font-light max-w-md leading-relaxed text-sm">
                            {description}
                        </p>
                    </div>

                    <div className="flex-shrink-0 w-16 h-16 rounded-full border border-foreground/10 flex items-center justify-center group-hover:border-gold/50 group-hover:bg-gold/5 transition-all duration-500">
                        <svg className="w-6 h-6 text-foreground/40 group-hover:text-gold group-hover:translate-x-1 transition-all duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>
            </Link>
        </section>
    );
};
