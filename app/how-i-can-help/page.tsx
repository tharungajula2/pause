import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: "PAUSE"
  },
  description: "Operational advisory and strategic execution for founders who need to bridge the gap between vision and reality.",
};

import React from 'react';
import Link from 'next/link';
import { CtaButton } from '../components/ui/CtaButton';

export default function HowICanHelpPage() {
    return (
        <main className="min-h-screen bg-background selection:bg-accent/30">
            {/* Hero */}
            <section className="relative py-32 px-6 overflow-hidden border-b border-foreground/5 pt-48 bg-background">
                {/* 
                    CINEMATIC VIDEO BASE 
                    Consistent with site-wide performance-editorial visual language.
                */}
                <div className="absolute inset-0 z-0 overflow-hidden video-container">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute w-full h-full object-cover scale-105 opacity-15 transition-opacity duration-1000"
                        poster="/images/hero-fallback.jpg"
                    >
                        <source src="/videos/howcanihelp_page.mp4" type="video/mp4" />
                    </video>
                    
                    {/* Atmospheric Overlays */}
                    <div className="absolute inset-0 video-vignette opacity-80" />
                    <div className="absolute inset-0 bg-accent/5 mix-blend-overlay pointer-events-none" />
                    <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px] pointer-events-none" />
                </div>

                <div className="absolute inset-0 bg-accent/2 blur-[140px] pointer-events-none" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="text-accent/50 text-[10px] uppercase tracking-[0.5em] font-bold block mb-8">
                        How I Can Help
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] mb-8 text-balance">
                        Useful work, not <br/><span className="italic text-foreground/80 text-4xl md:text-6xl lg:text-8xl block md:inline mt-2 md:mt-0">abstract advice.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-foreground/80 font-light max-w-2xl mx-auto leading-relaxed">
                        I built PAUSE from scratch — the brand, the products, the strategy, the packaging. Here is where I think that kind of thinking can be genuinely useful inside a founder's team.
                    </p>
                </div>
            </section>

            {/* How I Think */}
            <section className="py-32 px-6 max-w-4xl mx-auto">
                <div className="space-y-8 text-xl md:text-2xl text-foreground/80 font-light leading-relaxed">
                    <p>
                        I come from analytics, systems work, and building structured products from messy problems. Credit risk, lending workflows, operations, product building — the common thread was always the same. Take something complex, find the structure inside it, and build something that actually works. Not a deck. Not a framework. A working output.
                    </p>
                    <p>
                        That is how I built PAUSE. And that is exactly how I would approach any problem worth solving inside a growing consumer brand.
                    </p>
                </div>
            </section>

            {/* Where I May Be Useful */}
            <section className="py-24 bg-graphite/40 border-y border-foreground/5 relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-background to-transparent opacity-50" />
                <div className="max-w-4xl mx-auto px-6 text-center mb-20 relative z-10">

                    <h2 className="text-3xl md:text-5xl font-serif mb-6">Where I may be useful</h2>
                    <p className="text-foreground/75 font-light max-w-xl mx-auto text-lg leading-relaxed">
                        Four areas where my background maps directly onto real growth problems.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Area 1 */}
                        <div className="p-10 bg-background border border-foreground/10 rounded-[2.5rem] shadow-sm group hover:border-accent transition-all duration-500">
                             <div className="flex items-center gap-3 mb-6">
                                <span className="w-6 h-[1px] bg-accent/30" />
                                <span className="text-accent/60 text-[9px] font-bold uppercase tracking-widest">Focus 01</span>
                            </div>
                            <h3 className="text-2xl font-serif mb-4">Product × Occasion Fit</h3>
                            <p className="text-base text-foreground/75 font-light leading-relaxed mb-8">
                                Understanding which SKUs attach naturally to which consumer moments — and where the positioning or messaging needs to be sharper to win that moment consistently.
                            </p>
                            <p className="text-base text-foreground/75 font-light leading-relaxed">
                                I think about products through the lens of occasions, not categories. The brand that owns the moment owns the repeat. I can help map and sharpen that fit.
                            </p>
                        </div>

                        {/* Area 2 */}
                        <div className="p-10 bg-background border border-foreground/10 rounded-[2.5rem] shadow-sm group hover:border-accent transition-all duration-500">
                             <div className="flex items-center gap-3 mb-6">
                                <span className="w-6 h-[1px] bg-accent/30" />
                                <span className="text-accent/60 text-[9px] font-bold uppercase tracking-widest">Focus 02</span>
                            </div>
                            <h3 className="text-2xl font-serif mb-4">Repeat & Retention Logic</h3>
                            <p className="text-base text-foreground/75 font-light leading-relaxed mb-8">
                                Finding where trial happens, where repeat stalls, and what the behavioural data would tell you if you looked at it cohort by cohort.
                            </p>
                            <p className="text-base text-foreground/75 font-light leading-relaxed">
                                Retention is a data problem before it is a marketing problem. I can build the analytical structure to see where the drop-off actually lives.
                            </p>
                        </div>

                        {/* Area 3 */}
                        <div className="p-10 bg-background border border-foreground/10 rounded-[2.5rem] shadow-sm group hover:border-accent transition-all duration-500">
                             <div className="flex items-center gap-3 mb-6">
                                <span className="w-6 h-[1px] bg-accent/30" />
                                <span className="text-accent/60 text-[9px] font-bold uppercase tracking-widest">Focus 03</span>
                            </div>
                            <h3 className="text-2xl font-serif mb-4">Channel & Conversion Clarity</h3>
                            <p className="text-base text-foreground/75 font-light leading-relaxed mb-8">
                                Optimising how products communicate on quick-commerce and D2C surfaces when the consumer is solving an immediate moment.
                            </p>
                            <p className="text-base text-foreground/75 font-light leading-relaxed">
                                Search visibility, listing language, and product page communication are all measurable and improvable. I know how to find the gaps and close them.
                            </p>
                        </div>

                        {/* Area 4 */}
                        <div className="p-10 bg-background border border-foreground/10 rounded-[2.5rem] shadow-sm group hover:border-accent transition-all duration-500">
                             <div className="flex items-center gap-3 mb-6">
                                <span className="w-6 h-[1px] bg-accent/30" />
                                <span className="text-accent/60 text-[9px] font-bold uppercase tracking-widest">Focus 04</span>
                            </div>
                            <h3 className="text-2xl font-serif mb-4">Building Things That Work</h3>
                            <p className="text-base text-foreground/75 font-light leading-relaxed mb-8">
                                Strategy means nothing without execution. I build the actual output — the prototype, the dashboard, the system — not just the recommendation.
                            </p>
                            <p className="text-base text-foreground/75 font-light leading-relaxed">
                                This entire brand concept — strategy, products, packaging, and website — was built by me from scratch. That is what I bring to any team I join.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
            {/* What I am looking for */}
            <section className="py-32 px-6 max-w-4xl mx-auto text-center border-t border-foreground/5">
                <h2 className="text-3xl md:text-5xl font-serif mb-12">What I am looking for</h2>
                <div className="space-y-8 text-lg md:text-xl text-foreground/80 font-light leading-relaxed max-w-3xl mx-auto mb-16">
                    <p>
                        I want to be inside a founding team that is building something real in the Indian consumer market. I am not looking for a job description to fit into. I am looking for a problem worth solving and a team that moves fast on it.
                    </p>
                    <p>
                        I will go as deep as needed to be genuinely useful. I am not coming with fixed answers. I am coming with the discipline to find them and the ability to build them.
                    </p>
                    <p>
                        If you want to see the broader body of work — analytics projects, product prototypes, and portfolio — it&apos;s all <Link href="https://github.com/tharungajula2/Portfolio/tree/main" className="text-accent hover:underline decoration-accent/30 underline-offset-4 transition-all">here</Link>.
                    </p>
                    <p>
                        If this thinking fits what you are building, I would like to have that conversation.
                    </p>
                </div>
                <div className="flex justify-center">
                    <Link href="mailto:tharun.gajula.2@gmail.com">
                        <CtaButton size="xl" variant="primary">
                            LET’S TALK
                        </CtaButton>
                    </Link>
                </div>
            </section>

        </main>
    );
}
