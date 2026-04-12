import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Product Lab — Nuvie Thesis",
  description: "A product-first reading of Nuvie’s portfolio, core SKUs, and future flavor directions.",
};

import React from 'react';
import { products } from '../data/products';
import { siteContent } from '../data/site-content';
import { ProductSurface } from '../components/ui/ProductSurface';
import { SystemContinuation } from '../components/ui/SystemContinuation';
import { ChapterHero } from '../components/hero/ChapterHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { SummerConceptGrid } from '../components/labs/flavor/SummerConceptGrid';
import { StrategyCard } from '../components/ui/StrategyCard';

export default function ProductsPage() {
    // Preserve the first 3 cinematic chapters as the Product Lab entry
    const labChapters = siteContent.heroChapters.slice(0, 3);

    const strategicInsights = [
        {
            title: "Role clarity",
            badge: "Product Logic",
            description: "Each SKU matters more when it has a distinct job to do—from lowered entry friction to routine-anchoring utility.",
            footer: "See Portfolio Logic"
        },
        {
            title: "Repeat Dynamics",
            badge: "Retention",
            description: "Routine SKUs and rotation SKUs play different roles in retention. We optimize for the habit, not just the sale.",
            footer: "Read Dynamics View"
        },
        {
            title: "Indulgence Entry",
            badge: "Observation",
            description: "For a brand like Nuvie, pleasure may be the entry point that makes repeat possible. Indulgence is the bridge to habit.",
            footer: "Read Product View"
        }
    ];

    return (
        <main className="min-h-screen bg-background">
            {/* Section 1: Cinematic Product Transition */}
            <ChapterHero chapters={labChapters} />

            {/* Section 2: Core SKU Showcase */}
            <section id="portfolio-showcase" className="relative py-32 bg-background border-t border-foreground/5">
                <div className="px-6 mb-20 max-w-7xl mx-auto">
                    <SectionHeader 
                        alignment="left"
                        eyebrow="6-SKU Core"
                        title="Portfolio Architecture"
                        subtitle="Each SKU in the portfolio does a different job. Some lower trial friction, some build routine, and one may become the highest-frequency wedge."
                        badge="Portfolio Logic"
                    />
                </div>
                
                <div className="flex flex-col">
                    {products.map((product, idx) => (
                        <ProductSurface key={product.id} product={product} index={idx} />
                    ))}
                </div>
            </section>

            {/* Section 3: Seasonal Extensions & Concepts */}
            <section className="relative py-48 bg-graphite/10 border-y border-foreground/5 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none" />
                <div className="px-6 mb-20 max-w-7xl mx-auto">
                    <SectionHeader 
                        alignment="center"
                        eyebrow="Concept Extensions"
                        title="Future flavor directions"
                        subtitle="Thoughtful extensions that could widen seasonal relevance, cultural fit, or trial without breaking core clarity."
                        badge="Product Lab"
                    />
                </div>
                
                <div className="max-w-7xl mx-auto px-6">
                    <SummerConceptGrid />
                </div>
            </section>

            {/* Section 4: Special Strategic Callouts */}
            <section className="relative py-48 px-6 bg-background">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <SectionHeader 
                            alignment="left"
                            eyebrow="Product Notes"
                            title="A few truths from the portfolio"
                            subtitle="Selected observations on how the lineup appears to balance entry, routine, and repeat."
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {strategicInsights.map((insight, idx) => (
                            <div key={idx} className="h-full">
                                <StrategyCard 
                                    title={insight.title}
                                    badge={insight.badge}
                                    description={insight.description}
                                    footer={insight.footer}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Continuation */}
            <SystemContinuation 
                nextRoute="/occasions"
                nextTitle="Consumer Occasions"
                description="Understand the moments that drive protein adoption and recurring habit loops."
            />
        </main>
    );
}
