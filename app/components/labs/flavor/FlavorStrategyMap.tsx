import React from 'react';

const pillars = [
    { title: 'The Indulgence Pull', logic: 'Does this flavor sound delicious enough to break a consumer\'s diet fatigue? A "Brownie Batter" grabs attention immediately, but must pay off the promise in texture.' },
    { title: 'The Sweetness Burden', logic: 'High sweetness wins on first sip, but creates "palate fatigue" on day three. Staple flavors must be significantly less sweet than discovery flavors if they are meant for daily consumption.' },
    { title: 'Texture Risk', logic: 'Chocolate can mask a chalky isolate. Vanilla cannot. The lighter the flavor profile, the higher the risk that the raw ingredients will taste medicinal.' },
    { title: 'Cultural Safety', logic: 'In India, a Kesar Pista or Thandai flavor instantly signals "I know you" to the consumer, lowering the psychological barrier of trying a Western sports supplement.' }
];

export const FlavorStrategyMap: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5">
             <div className="flex flex-col md:flex-row gap-16 items-start">
                 
                 <div className="md:w-1/3 sticky top-32">
                     <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground/40 inline-block mb-4">
                         Sensory Architecture
                     </span>
                     <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-6 mt-2">
                         The Strategic Palate
                     </h2>
                     <p className="text-foreground/50 text-lg font-light leading-relaxed">
                         Flavor is an operational lever. A bad flavor kills repeat. But a flavor that is "too interesting" also kills repeat by becoming an exhausting novelty.
                     </p>
                 </div>

                 <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                     {pillars.map((pillar, i) => (
                         <div key={i} className="group p-8 bg-white/50 backdrop-blur-sm border border-foreground/5 hover:border-orange-500/20 rounded-2xl transition-all duration-300 relative overflow-hidden">
                             <div className="text-[10px] uppercase tracking-widest text-orange-500/30 font-bold mb-6 italic">
                                 Lever 0{i + 1}
                             </div>
                             <h4 className="text-xl font-serif text-foreground mb-4 group-hover:text-amber-500 transition-colors">{pillar.title}</h4>
                             <p className="text-sm font-light text-foreground/60 leading-relaxed">
                                 {pillar.logic}
                             </p>
                         </div>
                     ))}
                 </div>

             </div>
        </section>
    );
};
