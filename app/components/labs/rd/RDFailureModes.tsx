import React from 'react';

const failures = [
  { item: "Benchmark Envy", impact: "Copying a market winner blindly without understanding the strategic flaw you intend to solve.", status: "Weakens" },
  { item: "Ingredient Overload", impact: "Adding too many 'hero' ingredients that conflict chemically or cancel out sensory benefits.", status: "Breaks" },
  { item: "The Lab Trap", impact: "Perfecting a recipe in a 500ml beaker that cannot survive the high-shear pumps of a factory.", status: "Breaks" },
  { item: "Novelty for the sake of it", impact: "Creating a unique flavor that nobody wants to drink more than once.", status: "Kills Repeat" },
];

export const RDFailureModes: React.FC = () => {
    return (
        <section className="py-32 px-6 max-w-7xl mx-auto border-t border-foreground/5">
            <div className="text-center mb-20">
                <span className="text-fuchsia-500/50 text-[10px] tracking-[0.5em] uppercase font-bold mb-4 block">Innovation Faults</span>
                <h2 className="text-4xl md:text-6xl font-serif">R&D System <span className="italic text-foreground/40 text-3xl md:text-5xl">Breaks</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {failures.map((f, idx) => (
                    <div key={idx} className="group p-8 bg-white/45 backdrop-blur-sm border border-foreground/10 rounded-2xl hover:border-fuchsia-500/20 transition-all duration-500 shadow-sm">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-[10px] font-bold text-foreground/40 italic">Fault Vector // 0{idx + 1}</span>
                            <span className={`text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-sm border ${f.status === 'Breaks' || f.status === 'Kills Repeat' ? 'border-red-600/30 text-red-600 bg-red-400/5' : 'border-amber-600/30 text-amber-600 bg-amber-400/5'}`}>
                                {f.status}
                            </span>
                        </div>
                        <h4 className="text-xl font-serif mb-4 group-hover:text-fuchsia-600 transition-colors uppercase tracking-tight text-foreground/90">{f.item}</h4>
                        <p className="text-sm text-foreground/70 font-light leading-relaxed">
                            {f.impact}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};
