import React from 'react';

const adaptations = [
    { trend: 'High-Protein Spoonable Yogurt', westernReality: 'Massive, highly profitable dairy staple across US/EU.', indiaReality: 'Requires flawless cold chain. Power cuts in tier-2 retail coolers will curdle the product instantly.' },
    { trend: 'Savory Protein Puffs', westernReality: 'Captures the massive "Doritos" couch-snacking occasion.', indiaReality: 'Price sensitive. Unless you can match the unit economics of a 10 Rs packet of Kurkure, volume will not scale.' },
    { trend: 'Post-Workout RTD (30g+)', westernReality: 'Standard heavy gym-bro staple.', indiaReality: 'Heavy dairy intake in a hot climate causes extreme bloating/lethargy fears among causal office workers.' }
];

export const GlobalAdaptationLogic: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5">
             <div className="flex flex-col md:flex-row gap-16 items-start">
                 <div className="md:w-1/3">
                     <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-blue-400/60 inline-block mb-4">Innovation Translation</span>
                     <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">The Copy-Paste Trap</h2>
                     <p className="text-foreground/50 text-lg font-light leading-relaxed">
                         What works in Los Angeles does not automatically work in Mumbai. Cold chains, unit economics, and digestive tolerances break Western blueprints.
                     </p>
                 </div>

                 <div className="md:w-2/3 grid grid-cols-1 gap-6 relative">
                     {/* Thematic Glow */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-900/[0.05] blur-[150px] pointer-events-none" />

                     {adaptations.map((item, i) => (
                         <div key={i} className="flex flex-col md:flex-row bg-white/45 backdrop-blur-sm border border-blue-900/20 rounded-xl overflow-hidden group z-10">
                             <div className="md:w-1/3 bg-background/50 border-r border-blue-900/10 p-6 flex flex-col justify-center">
                                 <span className="font-serif text-xl tracking-tight text-blue-200 group-hover:text-blue-400 transition-colors mb-2">{item.trend}</span>
                             </div>
                             <div className="md:w-2/3 p-6 space-y-4">
                                 <div>
                                     <span className="text-[9px] uppercase tracking-widest text-foreground/40 font-bold block mb-1">Western Reality:</span>
                                     <p className="text-sm font-light text-foreground/60">{item.westernReality}</p>
                                 </div>
                                 <div className="border-t border-blue-900/20 pt-4">
                                     <span className="text-[9px] uppercase tracking-widest text-red-400 font-bold block mb-1">India Structural Reality:</span>
                                     <p className="text-sm font-light text-foreground/90">{item.indiaReality}</p>
                                 </div>
                             </div>
                         </div>
                     ))}
                 </div>
             </div>
        </section>
    );
};
