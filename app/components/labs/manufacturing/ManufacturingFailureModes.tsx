import React from 'react';

const failures = [
  { item: "Pilot phase was too smooth", impact: "Failing to account for the physical 'pumping' stress of industrial lines vs. lab beakers.", status: "Weakens" },
  { item: "Ingredient substitution at scale", impact: "Changing a protein source for cost reasons kills the solubility balance unexpectedly.", status: "Breaks" },
  { item: "Poor hydration cycle", impact: "Rushing the mixing phase results in protein 'clumping' which clogs homogenization valves.", status: "Breaks" },
  { item: "Inadequate thermal testing", impact: "Flavor profile collapses under UHT heat because it was only tested cold.", status: "Breaks" },
];

export const ManufacturingFailureModes: React.FC = () => {
    return (
        <section className="py-32 px-6 max-w-7xl mx-auto border-t border-foreground/5">
            <div className="text-center mb-20">
                <span className="text-red-500/50 text-[10px] tracking-[0.5em] uppercase font-bold mb-4 block">Intelligence Faults</span>
                <h2 className="text-4xl md:text-6xl font-serif">Structural Failure <span className="italic text-foreground/40 text-3xl md:text-5xl">States</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {failures.map((f, idx) => (
                    <div key={idx} className="group p-8 bg-white/45 backdrop-blur-sm border border-foreground/5 rounded-2xl hover:border-red-500/20 transition-all duration-500">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-[10px] font-bold text-foreground/20 italic">Fault Vector // 0{idx + 1}</span>
                            <span className={`text-[8px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-sm border ${f.status === 'Breaks' ? 'border-red-500/30 text-red-500 bg-red-400/5' : 'border-amber-500/30 text-amber-500 bg-amber-400/5'}`}>
                                {f.status} Product
                            </span>
                        </div>
                        <h4 className="text-xl font-serif mb-4 group-hover:text-red-400 transition-colors">{f.item}</h4>
                        <p className="text-xs text-foreground/40 font-light leading-relaxed">
                            {f.impact}
                        </p>
                    </div>
                ))}
            </div>
            
            <div className="mt-16 p-8 bg-foreground/5 rounded-2xl border border-foreground/10 text-center italic text-foreground/40 font-serif text-lg">
                “A product that cannot be reliably manufactured at commercial yield is not a product; it’s an expensive hobby.”
            </div>
        </section>
    );
};
