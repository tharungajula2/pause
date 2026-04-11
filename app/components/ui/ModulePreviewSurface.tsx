import React from 'react';
import { Module } from '../../types';

interface ModulePreviewSurfaceProps {
  module: Module;
}

export const ModulePreviewSurface: React.FC<ModulePreviewSurfaceProps> = ({ module }) => {
  if (module.isFeatured) {
    return (
      <div className="md:col-span-2 group relative overflow-hidden rounded-3xl border border-foreground/10 bg-graphite/20 p-8 md:p-12 transition-all duration-700 hover:border-gold/30 hover:bg-graphite/40">
        <div 
          className="absolute -top-1/2 -right-1/2 w-full h-full blur-[120px] opacity-10 group-hover:opacity-20 transition-opacity duration-1000 pointer-events-none"
          style={{ backgroundColor: module.themeColor }}
        />
        
        <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1 space-y-8">
                <div>
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold mb-4 block">
                        Featured Matrix // {module.badge}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-serif mb-4 text-foreground">{module.title}</h3>
                    <p className="text-lg text-foreground/60 font-light text-balance leading-relaxed">
                        {module.description}
                    </p>
                </div>
                
                <div className="bg-background/80 p-6 rounded-xl border border-foreground/10 backdrop-blur-sm">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-foreground/40 block mb-2">Founder Query</span>
                    <p className="text-xl font-serif italic text-gold">{module.founderQuestion}</p>
                </div>
            </div>

            <div className="w-full md:w-1/3 flex flex-col gap-4">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/50 mb-2">Primary Signals</span>
                {module.coreSignals.map((signal, idx) => (
                    <div key={idx} className="flex flex-col p-4 bg-background/50 rounded-lg border border-foreground/8 transition-colors group-hover:border-foreground/15">
                        <span className="text-[10px] uppercase tracking-wider font-bold text-foreground/40 mb-1">{signal.label}</span>
                        <span className="text-sm font-medium text-foreground">{signal.value}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    );
  }

  // Standard Compact Surface
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-foreground/5 bg-background p-8 transition-all duration-500 hover:border-foreground/20 hover:bg-graphite/10">
      <div 
        className="absolute top-0 right-0 w-32 h-32 blur-[60px] opacity-5 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none"
        style={{ backgroundColor: module.themeColor }}
      />
      
      <div className="relative z-10 flex flex-col h-full justify-between gap-8">
        <div>
            <div className="flex justify-between items-start mb-6">
                <h4 className="text-xl font-serif text-foreground group-hover:text-gold transition-colors">{module.title}</h4>
                <span className="text-[10px] uppercase tracking-widest font-bold text-foreground/30 border border-foreground/10 px-2 py-1 rounded-sm">
                    {module.badge}
                </span>
            </div>
            
            <p className="text-sm text-foreground/60 leading-relaxed font-light mb-6">
                {module.description}
            </p>
            
            <div className="border-l-2 border-gold/40 pl-4 py-1 mb-8">
                <span className="text-[10px] uppercase tracking-widest font-bold text-foreground/40 block mb-1">Founder Query</span>
                <p className="text-sm font-serif italic text-foreground/90">{module.founderQuestion}</p>
            </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-auto pt-4 border-t border-foreground/5">
            {module.coreSignals.map((signal, idx) => (
                <div key={idx} className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-foreground/30 mb-1">{signal.label}</span>
                    <span className="text-sm text-foreground/70">{signal.value}</span>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};
