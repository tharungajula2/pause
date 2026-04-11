import React from 'react';

const expansionMap = [
    { target: 'Breakfast Routine', format: 'RTD Bottle (200ml)', channel: 'Q-Commerce / Direct', repeat: 'Daily Habit' },
    { target: 'Office Pantry', format: '12-Pack Carton', channel: 'B2B / Direct', repeat: 'Monthly Corporate Sub' },
    { target: 'Afternoon Cravings', format: 'High-Protein Yogurt', channel: 'Cold-Chain Retail', repeat: 'Weekly Groceries' },
    { target: 'Community Brand Theater', format: 'Physical Kiosk', channel: 'Offline Real Estate', repeat: 'Ad-Hoc / Sampling' },
];

export const ExpansionMappingBlock: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5">
             <div className="text-center mb-16">
                 <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground/30 inline-block mb-4">Structural Expansion</span>
                 <h3 className="text-3xl md:text-5xl font-serif leading-tight">Format × Channel Integration</h3>
                 <p className="mt-4 text-foreground/50 text-lg font-light max-w-2xl mx-auto">
                     An expansion must naturally fit the channel. You cannot sell a single Breakfast RTD efficiently through D2C shipping; it requires Q-Commerce.
                 </p>
            </div>

            <div className="bg-white/45 backdrop-blur-sm border border-foreground/10 rounded-2xl overflow-hidden pb-4">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="border-b border-foreground/10 bg-foreground/[0.02]">
                                <th className="p-6 text-[10px] uppercase tracking-widest text-foreground/40 font-bold w-1/4">Occasion Target</th>
                                <th className="p-6 text-[10px] uppercase tracking-widest text-foreground/40 font-bold w-1/4">Logical Format</th>
                                <th className="p-6 text-[10px] uppercase tracking-widest text-foreground/40 font-bold w-1/4">Primary Channel</th>
                                <th className="p-6 text-[10px] uppercase tracking-widest text-foreground/40 font-bold w-1/4">Repeat Structure</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-foreground/5">
                            {expansionMap.map((row, i) => (
                                <tr key={i} className="hover:bg-foreground/[0.02] transition-colors">
                                    <td className="p-6 font-serif text-lg text-foreground">{row.target}</td>
                                    <td className="p-6 text-sm font-light text-foreground/80">{row.format}</td>
                                    <td className="p-6 text-sm font-light text-foreground/80">{row.channel}</td>
                                    <td className="p-6 text-sm text-gold font-bold uppercase tracking-widest">{row.repeat}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};
