import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Home — Nuvie Thesis",
  description: "A founder-facing study of Nuvie’s product, occasions, repeat logic, and where I may be useful.",
};

import React from 'react';
import Link from 'next/link';
import { siteContent } from './data/site-content';
import { CtaButton } from './components/ui/CtaButton';
import { HomeHero } from './components/hero/HomeHero';
import { SystemContinuation } from './components/ui/SystemContinuation';

export default function HomePage() {
  return (
    <main className="min-h-screen selection:bg-accent selection:text-white">

      {/* 1. Static Founder-Facing Hero */}
      <HomeHero />

      {/* 2. WHY I BUILT THIS (Intent Section) */}
      <section className="relative py-32 md:py-48 px-6 bg-background">
        <div className="max-w-4xl mx-auto border-l border-accent/30 pl-8 md:pl-16">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent/50 block mb-8">
            {siteContent.whyIBuiltThis.heading}
          </span>
          <p className="text-2xl md:text-4xl font-serif text-foreground leading-[1.2] text-balance mb-8">
            {siteContent.whyIBuiltThis.body}
          </p>
          <div className="flex gap-4">
             <Link href="/products">
               <CtaButton variant="primary" size="md">Explore Product Lab</CtaButton>
             </Link>
          </div>
        </div>
      </section>

      {/* 3. WHAT I UNDERSTOOD (Insights Grid) */}
      <section className="py-32 px-6 bg-graphite/5 border-t border-foreground/5 overflow-hidden relative">
        <div className="absolute inset-0 bg-accent/2 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20">
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-foreground/30 block mb-4">Diagnostic Output</span>
            <h3 className="text-4xl md:text-5xl font-serif">{siteContent.understanding.heading}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteContent.understanding.points.map((point, i) => (
              <div key={i} className="p-8 bg-background border border-foreground/5 rounded-2xl hover:border-accent/20 transition-all duration-500 group">
                <div className="text-[10px] uppercase tracking-widest text-accent font-bold mb-6 italic opacity-50">Point 0{i + 1}</div>
                <h4 className="text-xl font-serif mb-4 group-hover:text-accent transition-colors">{point.title}</h4>
                <p className="text-foreground/80 font-light leading-relaxed text-[18px]">
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY I MAY BE USEFUL (Profile Translation) */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 md:gap-32">
            <div className="md:w-1/3">
               <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground/30 block mb-4">The Profile</span>
               <h3 className="text-4xl font-serif mb-8 text-balance">{siteContent.usefulness.heading}</h3>
               <p className="text-foreground/85 font-light leading-relaxed text-lg italic">
                 My background is not a straight line. Analytics, systems design, operations, product building. I&apos;ve moved across these because messy problems tend to need all of them at once. I don&apos;t come with a ready playbook for Nuvie. I come with the habit of thinking carefully, and building things that work.
               </p>
            </div>
            
            <div className="md:w-2/3 space-y-12">
              {siteContent.usefulness.strengths.map((strength, i) => (
                <div key={i} className="relative pl-12">
                   <div className="absolute left-0 top-1.5 w-6 h-[1px] bg-accent/30" />
                   <h4 className="text-lg font-serif mb-2">{strength.title}</h4>
                   <p className="text-foreground/80 font-light leading-relaxed text-[17px]">{strength.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. EXPLORE THE WORK (Navigation Entry Points) */}
      <section className="py-32 px-6 bg-graphite/10 border-y border-foreground/5">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-16">
             <h3 className="text-3xl font-serif">Explore the Study</h3>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/products" className="group">
                <div className="p-10 bg-background border border-foreground/5 rounded-3xl hover:border-accent/40 transition-all duration-500 h-full flex flex-col items-center text-center">
                   <span className="text-[9px] uppercase tracking-[0.4em] text-accent/50 mb-6">Foundational</span>
                   <h4 className="text-2xl font-serif mb-4">Product Lab</h4>
                   <p className="text-sm text-foreground/75 font-light mb-8 flex-grow">A breakdown of each SKU — what strategic role it plays, where it wins, and where the risks live.</p>
                   <span className="text-[10px] uppercase tracking-widest font-bold group-hover:text-accent transition-colors">Enter Lab →</span>
                </div>
              </Link>

              <Link href="/occasions" className="group">
                <div className="p-10 bg-background border border-foreground/5 rounded-3xl hover:border-accent/40 transition-all duration-500 h-full flex flex-col items-center text-center">
                   <span className="text-[9px] uppercase tracking-[0.4em] text-accent/50 mb-6">Behavioral</span>
                   <h4 className="text-2xl font-serif mb-4">Occasion Engine</h4>
                   <p className="text-sm text-foreground/75 font-light mb-8 flex-grow">Mapping the moments where Nuvie can own a habit — and what needs to be true for that to happen.</p>
                   <span className="text-[10px] uppercase tracking-widest font-bold group-hover:text-accent transition-colors">Inspect Moments →</span>
                </div>
              </Link>

              <Link href="/how-i-can-help" className="group">
                <div className="p-10 bg-background border border-foreground/5 rounded-3xl hover:border-accent/40 transition-all duration-500 h-full flex flex-col items-center text-center">
                   <span className="text-[9px] uppercase tracking-[0.4em] text-accent/50 mb-6">Strategic</span>
                   <h4 className="text-2xl font-serif mb-4">How I Can Help</h4>
                   <p className="text-sm text-foreground/75 font-light mb-8 flex-grow">Four focus areas. One 30-day starting point. Specific, not vague.</p>
                   <span className="text-[10px] uppercase tracking-widest font-bold group-hover:text-accent transition-colors">See The Plan →</span>
                </div>
              </Link>
           </div>
        </div>
      </section>

      {/* 6. SOFT CLOSE (Direct Connection) */}
      <section className="py-48 px-6 bg-background relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-accent/3 blur-[150px] pointer-events-none" />
        <div className="max-w-2xl mx-auto relative z-10">
           <h3 className="text-3xl md:text-5xl font-serif mb-8">{siteContent.connection.heading}</h3>
           <p className="text-foreground/85 text-xl font-light mb-12 leading-relaxed max-w-xl mx-auto">
             {siteContent.connection.body}
           </p>
           <Link href={siteContent.connection.cta.href}>
              <CtaButton variant="primary" size="xl">
                {siteContent.connection.cta.label}
              </CtaButton>
           </Link>
        </div>
      </section>

    </main>
  );
}
