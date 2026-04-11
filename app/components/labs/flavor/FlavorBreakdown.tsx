import React from 'react';

const failures = [
    { title: 'The Artificial Valley', condition: 'Promising a complex dessert profile (e.g. "Chocolate Peanut Butter Cake") but using cheap protein isolate with raw Sucralose.', result: 'The discrepancy between the imaginary dessert and the harsh metallic reality instantly kills the brand relationship.' },
    { title: 'The Vanilla Fatigue', condition: 'Formulating the "Staple" vanilla flavor to be extremely sweet so it wins taste tests in the lab.', result: 'It becomes impossible to consume daily. It clashes with coffee and overwhelms fruit smoothies. Churn spikes on week 3.' },
    { title: 'The Novelty Hangover', condition: 'Launching 5 exciting "Discovery" flavors back-to-back because they generate cheap CPA numbers on Instagram.', result: 'Supply chain nightmare. Inventory becomes fragmented, and nobody is building a core routine with any of them.' },
];

export const FlavorBreakdown: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5">
            <div className="text-center mb-20">
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-red-500/60 inline-block mb-4">Sensory Fracture</span>
                <h2 className="text-3xl md:text-5xl font-serif text-foreground">Where Flavor Fails</h2>
                <p className="mt-4 text-foreground/50 text-lg font-light max-w-2xl mx-auto">
                    A bad texture ruins a good flavor. A great flavor ruins retention if it misaligns with the format.
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
