import React from 'react';

const riskLevels = [
    { title: 'Core Deepening', status: 'Safest ROI', desc: 'Expanding the existing product into new sizes (e.g. 12-packs) to increase LTV. No new supply chains. High trust transfer.', color: 'text-blue-400', border: 'border-blue-900/40' },
    { title: 'Near Adjacency', status: 'Moderate ROI', desc: 'Slight shift in format for the same occasion (e.g. RTD to Powder) or shifting the time-of-day (e.g. Breakfast edition). Supply chain tweaks needed, but consumer trusts the brand for this.', color: 'text-teal-400', border: 'border-teal-900/40' },
    { title: 'Strategic Stretch', status: 'High Risk / High Reward', desc: 'Completely different format requiring cold-chain or new manufacturing (e.g. Yogurts, Spoonables). Brand trust may transfer, but the operational complexity will crush margin if scaled improperly.', color: 'text-amber-400', border: 'border-amber-900/40' },
    { title: 'Premature Distraction', status: 'Fatal to Margin', desc: 'Going into savory snacks, random apparel, or opening physical stores before the core product is at terminal velocity. Trust does not transfer. Total waste of capital.', color: 'text-red-400', border: 'border-red-900/40' }
];

export const CoreVsStretchLayer: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5">
            <div className="text-center mb-16">
                 <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground/30 inline-block mb-4">Risk Architecture</span>
                 <h3 className="text-3xl md:text-5xl font-serif leading-tight">Core vs. Stretch vs. Dangerous</h3>
                 <p className="mt-4 text-foreground/50 text-lg font-light max-w-2xl mx-auto">
                     A brand should spend 80% of its capital in "Core Deepening" and 20% in "Near Adjacency". Most startups reverse this, attempting "Strategic Stretches" in year one and bankrupting the company.
                 </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {riskLevels.map((level, i) => (
                    <div key={i} className={`bg-white/50 backdrop-blur-sm border ${level.border} p-8 rounded-3xl relative overflow-hidden flex flex-col h-full`}>
                        <div className="mb-8">
                            <span className={`text-[10px] uppercase tracking-widest font-bold ${level.color} block mb-2`}>{level.title}</span>
                            <span className="text-xs uppercase tracking-widest text-foreground/40 font-bold border border-foreground/10 bg-foreground/5 px-2 py-1 inline-block rounded">{level.status}</span>
                        </div>
                        <p className="text-sm font-light text-foreground/70 leading-relaxed mt-auto">
                            {level.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};
