import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Product Lab",
  description: "A product-first reading of portfolio strategy, core SKUs, and growth directions.",
};

import React from 'react';
import { products } from '../data/products';
import { siteContent } from '../data/site-content';
import { ProductSurface } from '../components/ui/ProductSurface';
import { SystemContinuation } from '../components/ui/SystemContinuation';
import { ChapterHero } from '../components/hero/ChapterHero';
import { SectionHeader } from '../components/ui/SectionHeader';

import { StrategyCard } from '../components/ui/StrategyCard';

export default function ProductsPage() {
    // FIX 3: Separate Occasions from SKU names in the Hero Switcher
    // Keep only the first slide (The Reading).
    const labChapters = siteContent.heroChapters.slice(0, 1);

    const strategicInsights = [
        {
            title: "Indulgence Is the Entry Point",
            badge: "Observation",
            description: "In a crowded better-for-you market, taste is the only door that opens. Health is what keeps people coming back. Not the other way around."
        },
        {
            title: "Occasion Beats Category",
            badge: "Strategic Fit",
            description: "People do not think in categories. They think in moments. The brand that owns a specific moment owns the repeat."
        },
        {
            title: "Texture and Taste Are Non-Negotiable",
            badge: "Product Quality",
            description: "The biggest failure in functional food is asking the consumer to compromise on experience. The product has to earn its place on taste alone."
        }
    ];

    return (
        <main className="min-h-screen bg-background">
            {/* Section 1: Cinematic Product Transition (SKU Switcher Top) */}
            <ChapterHero chapters={labChapters} />

            {/* Section 2: Core SKU Showcase */}
            <section id="portfolio-showcase" className="relative py-32 bg-background border-t border-foreground/5">
                <div className="px-6 mb-20 max-w-7xl mx-auto">
                    <SectionHeader 
                        alignment="left"
                        eyebrow="5-SKU CORE"
                        title="Portfolio Strategy"
                        subtitle="A reading of product roles and strategic fit in the modern FMCG landscape. These are original concepts built to demonstrate how I think."
                        badge="How I Read the Portfolio"
                    />
                </div>
                
                <div className="flex flex-col">
                    {products.map((product, idx) => (
                        <ProductSurface key={product.id} product={product} index={idx} />
                    ))}
                </div>
            </section>

            {/* NEW SECTION: SEPARATED OCCASION LENS (To avoid mix-up in Hero Switcher) */}
            <section className="relative py-48 bg-background overflow-hidden border-t border-foreground/5">
                <div className="absolute inset-0 bg-accent/2 blur-[120px] pointer-events-none" />
                <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                    <span className="text-accent text-[10px] uppercase tracking-[0.6em] font-bold mb-8 block">
                        OCCASION LENS
                    </span>
                    <h2 className="text-4xl md:text-7xl font-serif mb-10 leading-[1.05] text-balance">
                        My working hypothesis: occasion matters more than category.
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-10 mt-16 opacity-60 max-w-4xl mx-auto">
                        {['Daily Ritual', 'Afternoon Reset', 'Evening Indulgence', 'Festive Moment', 'On The Go'].map((tag) => (
                            <span key={tag} className="text-[9px] tracking-widest uppercase font-extrabold border-b border-accent/20 pb-2">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3: More Flavours Teaser */}
            <section className="relative py-48 bg-graphite/10 border-y border-foreground/5 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none" />
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <span className="text-accent text-[10px] uppercase tracking-[0.6em] font-bold mb-8 block">
                        THE NEXT PHASE
                    </span>
                    <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight text-balance">
                        More Flavours. Coming Soon.
                    </h2>
                    <p className="text-lg md:text-xl text-foreground/60 font-light leading-relaxed max-w-2xl mx-auto">
                        We are building the next wave carefully. One great product at a time.
                    </p>
                </div>
            </section>

            {/* Section 4: Special Strategic Callouts */}
            <section className="relative py-48 px-6 bg-background">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <SectionHeader 
                            alignment="left"
                            eyebrow="PRODUCT NOTES"
                            title="A few things I kept coming back to"
                            subtitle="Observations from studying how the lineup appears to handle entry, routine, and repeat."
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {strategicInsights.map((insight, idx) => (
                            <div key={idx} className="h-full">
                                <StrategyCard 
                                    title={insight.title}
                                    badge={insight.badge}
                                    description={insight.description}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Continuation */}
            <SystemContinuation 
                nextRoute="/how-i-can-help"
                nextTitle="How I Can Help"
                description="Specific initiatives and audit directions built around current growth reality."
            />
        </main>
    );
}
