import React from 'react';

export const ThumbnailClarityBlock: React.FC = () => {
    return (
        <section className="py-32 px-6 max-w-5xl mx-auto">
            <div className="relative border-4 border-amber-900/10 bg-graphite/40 backdrop-blur-md p-10 md:p-20 overflow-hidden group shadow-sm rounded-[3rem]">
                
                {/* Harsh Grid to simulate pixel restriction */}
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#f59e0b11_1px,transparent_1px),linear-gradient(to_bottom,#f59e0b11_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-amber-700/80 mb-6 flex items-center gap-3 bg-amber-700/5 px-4 py-2 rounded">
                        <span className="w-2 h-2 rounded-sm bg-amber-600 animate-pulse" /> 150x150px Constraint
                    </span>

                    <h3 className="text-4xl md:text-5xl font-serif text-foreground mb-8 leading-tight max-w-2xl text-balance">
                        When premium design becomes <span className="italic text-amber-600 border-b-2 border-amber-600/30">invisible.</span>
                    </h3>

                    <p className="text-xl text-foreground/60 font-light max-w-3xl leading-relaxed mb-12">
                        On a shelf, negative space is a luxury. On a 3-inch Quick Commerce thumbnail, negative space is a failure to communicate. If the macros and the flavor cue are not legible at a 2-second glance, the user skips your product.
                    </p>

                    <div className="w-full flex justify-center pt-8 border-t border-foreground/10">
                         {/* Simulation boxes */}
                        <div className="flex gap-12 items-center">
                             {/* Bad Design */}
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-24 h-24 bg-white/50 backdrop-blur-sm border border-foreground/10 shadow-inner flex flex-col items-center justify-center p-2 relative overflow-hidden ring-1 ring-foreground/5">
                                     <div className="text-[4px] text-foreground/30 mt-6 tracking-widest">W A H</div>
                                     <div className="text-[2px] text-foreground/20 mt-1">Premium Isolate</div>
                                     <div className="text-[3px] text-foreground/40 absolute bottom-2">Vanilla Bean - 25g</div>
                                </div>
                                <span className="text-[10px] uppercase tracking-widest text-red-600/80 font-bold">Failed: Illegible</span>
                            </div>
                            
                            <div className="text-amber-700/30 text-2xl font-serif italic">vs</div>

                            {/* Good Design */}
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-24 h-24 bg-white/50 backdrop-blur-sm border-2 border-amber-600/40 shadow-sm flex flex-col items-center justify-center p-2 ring-1 ring-amber-600/10">
                                     <div className="text-[12px] font-bold text-amber-900 tracking-tight leading-none">25G</div>
                                     <div className="text-[8px] font-serif text-amber-700 mt-1">VANILLA</div>
                                </div>
                                <span className="text-[10px] uppercase tracking-widest text-green-700/80 font-bold">Pass: Immediate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
