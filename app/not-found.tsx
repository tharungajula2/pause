import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background px-6">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-400/8 blur-[150px] pointer-events-none" />

        <div className="relative z-10 text-center space-y-8 max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-red-600/60 inline-block px-4 py-1 border border-red-600/20 rounded-full bg-red-600/5">
                Error 404
            </span>

            <h1 className="text-5xl md:text-7xl font-serif text-foreground">
                Trajectory <span className="italic text-foreground/40">Lost.</span>
            </h1>

            <p className="text-lg text-foreground/50 font-light leading-relaxed">
                The strategic intelligence layer you are attempting to access does not exist in this version of the OS.
            </p>

            <div className="pt-8">
                <Link 
                    href="/" 
                    className="inline-block text-[10px] uppercase tracking-[0.25em] font-bold text-foreground hover:text-gold border-b border-foreground/20 hover:border-gold pb-1 transition-all duration-300"
                >
                    Return to Dashboard
                </Link>
            </div>
        </div>
    </main>
  );
}
