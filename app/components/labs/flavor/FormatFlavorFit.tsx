import React from 'react';

const formatFitData = [
    { format: 'RTD Shake', dessert: 'Excellent (Milkshake analog)', coffee: 'Excellent (Iced Latte analog)', staple: 'Excellent (Smooth texture)', novelty: 'Poor (High inventory unit risk)' },
    { format: 'Extruded Bar', dessert: 'Moderate (Texture limits payoff)', coffee: 'Poor (Sensory mismatch)', staple: 'Good (Oat/Nut base)', novelty: 'Excellent (Low batch commitment)' },
    { format: 'Clear Protein Water', dessert: 'Terrible (Lacks creaminess)', coffee: 'Terrible (Clashing acidities)', staple: 'Poor', novelty: 'Excellent (Fruit/Candy flavors)' }
];

export const FormatFlavorFit: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5">
            <div className="text-center mb-16">
                 <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground/30 inline-block mb-4">Manufacturing Logic</span>
                 <h3 className="text-3xl md:text-5xl font-serif">Format × Sensory Physics</h3>
                 <p className="mt-4 text-foreground/50 text-lg font-light max-w-2xl mx-auto">
                     A flavor profile is severely restricted by the physical format delivery vehicle. You cannot force a rich dessert profile into an acidic clear liquid format.
                 </p>
            </div>

            <div className="overflow-x-auto border border-foreground/10 rounded-2xl bg-white/50 backdrop-blur-sm pb-4">
                <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                        <tr className="border-b border-foreground/10">
                            <th className="p-6 font-serif text-lg text-foreground/40 w-1/5">Physical Format</th>
                            <th className="p-6 text-[10px] uppercase tracking-widest text-foreground/40 w-1/5">Dessert-Coded</th>
                            <th className="p-6 text-[10px] uppercase tracking-widest text-foreground/40 w-1/5">Coffee Ritual</th>
                            <th className="p-6 text-[10px] uppercase tracking-widest text-foreground/40 w-1/5">Clean Staple</th>
                            <th className="p-6 text-[10px] uppercase tracking-widest text-foreground/40 w-1/5">Novelty / Sweet Candy</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-foreground/5">
                        {formatFitData.map((row, i) => (
                            <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                                <td className="p-6 font-serif text-lg text-foreground group-hover:text-amber-500 transition-colors">{row.format}</td>
                                <td className="p-6 text-sm font-light"><FitSignal value={row.dessert} /></td>
                                <td className="p-6 text-sm font-light"><FitSignal value={row.coffee} /></td>
                                <td className="p-6 text-sm font-light"><FitSignal value={row.staple} /></td>
                                <td className="p-6 text-sm font-light"><FitSignal value={row.novelty} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

const FitSignal: React.FC<{ value: string }> = ({ value }) => {
    const isExcellent = value.includes('Excellent');
    const isPoor = value.includes('Poor') || value.includes('Terrible');
    const isModerate = value.includes('Moderate') || value.includes('Good');
    
    let colorClass = 'text-foreground/60';
    let dotClass = 'bg-foreground/20';
    if(isExcellent) { colorClass = 'text-green-500/80'; dotClass = 'bg-green-500/80'; }
    if(isModerate) { colorClass = 'text-amber-500/80'; dotClass = 'bg-amber-500/80'; }
    if(isPoor) { colorClass = 'text-red-500/80'; dotClass = 'bg-red-500/80'; }

    return (
        <span className="flex items-center gap-3">
            <span className={`w-2 h-2 rounded-full ${dotClass} flex-shrink-0`} />
            <span className={colorClass}>{value}</span>
        </span>
    );
};
