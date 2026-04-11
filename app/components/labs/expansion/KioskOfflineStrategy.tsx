import React from 'react';

export const KioskOfflineStrategy: React.FC = () => {
    return (
        <section className="py-32 px-6 max-w-5xl mx-auto">
            <div className="relative border border-foreground/10 bg-white/45 backdrop-blur-sm rounded-[2.5rem] p-10 md:p-20 overflow-hidden text-center group">
                <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-amber-600/[0.03] blur-[100px] group-hover:bg-amber-600/[0.08] transition-colors duration-1000 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col items-center">
                    <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-amber-500/80 border border-amber-900/40 px-4 py-2 rounded-full mb-12 bg-amber-900/10 backdrop-blur-md">
                        Offline Physical Presence
                    </span>

                    <h3 className="text-4xl md:text-5xl font-serif text-balance leading-tight mb-8">
                        Kiosks are sampling theaters, not <span className="italic text-amber-500">profit centers.</span>
                    </h3>

                    <p className="text-lg md:text-xl text-foreground/60 font-light max-w-2xl text-balance leading-relaxed mb-12">
                        Opening a branded café or high-end kiosk sounds like the ultimate brand flex. 
                        But you are no longer a CPG company; you are now in the hospitality business. 
                        The moment the barista makes a mediocre coffee, your brand equity burns.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full border-t border-foreground/10 pt-12">
                         <div className="text-left bg-background/40 p-6 rounded-xl border border-foreground/5">
                             <h4 className="text-foreground font-serif text-lg mb-2">The Goal</h4>
                             <p className="text-sm text-foreground/50 font-light">
                                 Do not optimize for coffee sales. Optimize for email capture and transferring the physical user into an online D2C subscriber.
                             </p>
                         </div>
                         <div className="text-left bg-background/40 p-6 rounded-xl border border-foreground/5">
                             <h4 className="text-foreground font-serif text-lg mb-2">The Risk</h4>
                             <p className="text-sm text-foreground/50 font-light">
                                 Operational distraction. The founders end up arguing about cups and staffing schedules instead of scaling the core RTD business.
                             </p>
                         </div>
                         <div className="text-left bg-background/40 p-6 rounded-xl border border-foreground/5">
                             <h4 className="text-foreground font-serif text-lg mb-2">The Location</h4>
                             <p className="text-sm text-foreground/50 font-light">
                                 Never open on a generic street. Place kiosks inside captive environments: Premium Corporate Parks or High-End Gym Lobbies.
                             </p>
                         </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
