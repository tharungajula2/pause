import React from 'react';

const culturalLevers = [
    { title: 'The Trust Premium', logic: 'Western flavors (e.g. "Cookies & Cream") signal a foreign sports supplement context. Regional flavors (e.g. "Thandai", "Kesar Pista") signal traditional health logic and lower the adoption barrier for mainstream Indian consumers.' },
    { title: 'The Sweetness Expectation', logic: 'Indian dessert-emulation flavors carry a cultural expectation of high sweetness. This creates a severe R&D burden to match the sensory profile using artificial sweeteners without creating a chemical aftertaste.' },
    { title: 'The Generational Wedge', logic: 'A regional flavor allows the product to be consumed in family settings (e.g. sharing with parents) without the stigma of it being "chemical gym powder."' },
];

export const IndiaCulturalFit: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5 relative">
             <div className="flex flex-col md:flex-row gap-16 items-start">
                 <div className="md:w-1/3">
                     <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-orange-600/60 inline-block mb-4">India Market Dynamics</span>
                     <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">Regional Familiarity</h2>
                     <p className="text-foreground/70 text-lg font-light leading-relaxed">
                         Cultural flavor mapping is the fastest way to move a product from the "bodybuilding" mental bucket into the "daily wellness" mental bucket.
                     </p>
                 </div>

                 <div className="md:w-2/3 grid grid-cols-1 gap-6 relative">
                     {/* Thematic Glow */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#E4A010]/[0.05] blur-[150px] pointer-events-none" />

                     {culturalLevers.map((lever, i) => (
                         <div key={i} className="flex flex-col md:flex-row bg-white/45 backdrop-blur-sm border border-orange-500/10 rounded-xl overflow-hidden group z-10 shadow-sm">
                             <div className="md:w-1/3 bg-background/50 border-r border-orange-500/5 p-6 flex items-center">
                                 <span className="font-serif text-xl tracking-tight text-orange-950/70 group-hover:text-orange-600 transition-colors">{lever.title}</span>
                             </div>
                             <div className="md:w-2/3 p-6">
                                 <p className="text-sm font-light text-foreground/80 leading-relaxed">{lever.logic}</p>
                             </div>
                         </div>
                     ))}
                 </div>
             </div>
        </section>
    );
};
