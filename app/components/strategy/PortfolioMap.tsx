import React from 'react';

const mapData = [
    { id: 'cafe-latte', name: 'Café Latte', x: 20, y: 85, color: '#3E2723', label: 'High Routine / Utility Wedge' },
    { id: 'wah-vanilla', name: 'Wah Vanilla', x: 80, y: 70, color: '#4A4232', label: 'Max Familiarity / High Repeat' },
    { id: 'kesar-pista', name: 'Kesar Pista', x: 70, y: 90, color: '#2E4A35', label: 'Heritage Routine Anchor' },
    { id: 'choco-loco', name: 'Choco Loco', x: 15, y: 40, color: '#722F37', label: 'Indulgent Discovery' },
    { id: 'choco-brownie-bar', name: 'Brownie Bar', x: 40, y: 20, color: '#2B1B17', label: 'Functional Impulse' },
    { id: 'choco-almond-bar', name: 'Almond Bar', x: 25, y: 15, color: '#5C4033', label: 'Sensory Trial' },
];

export const PortfolioMap: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-gold inline-block mb-4">Strategic Topography</span>
                <h3 className="text-3xl md:text-5xl font-serif">The Brand Coordinate System</h3>
                <p className="mt-4 text-foreground/50 text-lg font-light max-w-2xl mx-auto text-balance">
                    Visualizing the portfolio across the two most critical survival axes: the pull of indulgence versus the stability of familiarity, and the cost of discovery versus the value of routine.
                </p>
            </div>

            <div className="relative w-full max-w-5xl mx-auto aspect-square md:aspect-[21/9] bg-graphite/5 border border-foreground/10 rounded-3xl overflow-hidden p-8 md:p-16">
                
                {/* Background Grid Rules */}
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                    <div className="border-r border-b border-foreground/5" />
                    <div className="border-b border-foreground/5" />
                    <div className="border-r border-foreground/5" />
                    <div />
                </div>

                {/* Axes Labels */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-foreground/40 font-bold bg-background px-4">Strong Habit (Repeat)</div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-foreground/40 font-bold bg-background px-4">Pure Impulse (Discovery)</div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] uppercase tracking-[0.4em] text-foreground/40 font-bold bg-background px-4 origin-left translate-x-4">High Indulgence</div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 text-[10px] uppercase tracking-[0.4em] text-foreground/40 font-bold bg-background px-4 origin-right -translate-x-4">High Familiarity</div>

                {/* Plotting points */}
                <div className="relative w-full h-full">
                    {mapData.map(node => (
                        <div 
                            key={node.id}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-10 hover:z-20"
                            style={{ left: `${node.x}%`, top: `${100 - node.y}%` }}
                        >
                            {/* Dot */}
                            <div className="relative flex items-center justify-center">
                                <div 
                                    className="absolute w-12 h-12 rounded-full opacity-20 blur-md transition-opacity duration-300 group-hover:opacity-60"
                                    style={{ backgroundColor: node.color }}
                                />
                                <div 
                                    className="w-4 h-4 rounded-full border-2 border-background shadow-lg transition-transform duration-300 group-hover:scale-150"
                                    style={{ backgroundColor: node.color }}
                                />
                                
                                {/* Label Tooltip */}
                                <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 bg-graphite/90 backdrop-blur-md border border-foreground/10 p-3 rounded-lg w-48 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                    <div className="font-serif text-gold text-lg mb-1">{node.name}</div>
                                    <div className="text-[9px] uppercase tracking-widest text-foreground/60">{node.label}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
