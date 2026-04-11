import React from 'react';

const failures = [
    { title: 'The SKU Bloat Death Spiral', condition: 'Launching 8 new flavors and 3 new formats before the Hero SKU has achieved reliable monthly velocity.', result: 'Working capital is tied up in slow-moving inventory. Marketing spend dilutes across too many messages.' },
    { title: 'The Channel Misalignment', condition: 'Formulating a physical "Breakfast Muffin" concept requiring a 5-day shelf life, but pushing it through D2C shipping channels.', result: 'Spoilage, logistics nightmares, and negative reviews when the product arrives stale on day 4.' },
    { title: 'The Cannibalization Trap', condition: 'Releasing a 1KG bulk powder of your flagship RTD flavor at a deep 40% discount.', result: 'You do not acquire new customers. Instead, your best, highest-margin RTD subscribers switch to the cheap powder, destroying your LTV revenue.' },
];

export const ExpansionBreakdown: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5">
            <div className="text-center mb-20">
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-red-500/60 inline-block mb-4">Adjacency Fracture</span>
                <h2 className="text-3xl md:text-5xl font-serif text-foreground">Where Expansion Fails</h2>
                <p className="mt-4 text-foreground/50 text-lg font-light max-w-2xl mx-auto">
                    New SKUs are a liability until proven otherwise. Growth without operational readiness is fatal.
                </p>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
                {failures.map((issue, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-6 p-6 md:p-8 bg-graphite/5 border border-red-500/10 rounded-2xl relative group hover:bg-white/40 transition-colors">
                        <div className="w-1.5 h-full absolute left-0 top-0 bg-red-900/30 rounded-l-2xl group-hover:bg-red-500/80 transition-colors" />
                        
                        <div className="md:w-1/3">
                            <h4 className="font-serif text-lg text-foreground mb-2">{issue.title}</h4>
                            <span className="text-[9px] uppercase tracking-widest text-red-500/80 font-bold">Failure State</span>
                        </div>
                        
                        <div className="md:w-2/3 space-y-4">
                            <div>
                                <span className="text-[9px] uppercase tracking-widest text-foreground/40 font-bold block mb-1">Trigger Condition:</span>
                                <p className="text-sm font-light text-foreground/70">{issue.condition}</p>
                            </div>
                            <div>
                                <span className="text-[9px] uppercase tracking-widest text-red-400 font-bold block mb-1">Business Impact:</span>
                                <p className="text-sm font-medium text-red-400/80">{issue.result}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
