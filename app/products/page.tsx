'use client';

import React from 'react';
import { products } from '../data/products';
import { ProductSurface } from '../components/ui/ProductSurface';
import { SystemContinuation } from '../components/ui/SystemContinuation';

export default function ProductsPage() {
    return (
        <main className="min-h-screen bg-background">
            {/* Header / Intro */}
            <section className="relative py-32 px-6 overflow-hidden border-b border-foreground/8">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="text-gold/60 text-[10px] uppercase tracking-[0.5em] font-bold block mb-8">
                        Portfolio Intelligence
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] mb-8 text-balance">
                        The SKU is the unit of <span className="italic text-foreground/40">strategy.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-foreground/50 font-light max-w-2xl mx-auto leading-relaxed">
                        A modern protein portfolio is not a list of flavors; it is a map of consumer occasions, routine hijacking, and economic stability.
                    </p>
                </div>
            </section>

            {/* Product List - Editorial Surfaces */}
            <div className="space-y-0">
                {products.map((product, idx) => (
                    <ProductSurface key={product.id} product={product} index={idx} />
                ))}
            </div>

            {/* Continuation */}
            <SystemContinuation 
                nextRoute="/occasions"
                nextTitle="Consumer Occasions"
                description="Understand the moments that drive protein adoption and recurring habit loops."
            />
        </main>
    );
}
