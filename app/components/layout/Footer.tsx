import React from 'react';
import Link from 'next/link';
import { footerNavigation } from '../../data/navigation';

export const Footer: React.FC = () => {
    return (
        <footer className="py-12 px-6 border-t border-foreground/5 bg-background text-center md:text-left relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col md:flex-row items-center md:space-x-12 gap-6 md:gap-0">
                    <Link href="/" className="text-base font-serif tracking-tighter text-foreground/80 hover:text-gold transition-colors">
                        PROTEIN<span className="text-gold ml-1 italic font-light">OS</span>
                    </Link>
                    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                        {footerNavigation.map(item => (
                            <Link 
                                key={item.name} 
                                href={item.href} 
                                className="text-[10px] uppercase tracking-widest font-bold text-foreground/40 hover:text-gold transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="text-[10px] uppercase tracking-[0.5em] font-bold text-foreground/30">
                    2026 Tharun Gajula
                </div>
            </div>
        </footer>
    );
};
