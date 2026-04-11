'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mainNavigation } from '../../data/navigation';
import { CtaButton } from '../ui/CtaButton';

export const Navbar: React.FC = () => {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [strategyOpenDesktop, setStrategyOpenDesktop] = useState(false);
    const [strategyOpenMobile, setStrategyOpenMobile] = useState(false);

    const foundationItems = mainNavigation.filter(i => i.isFoundation);
    const stepItems = mainNavigation.filter(i => !i.isFoundation);

    // Body scroll lock when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
        setStrategyOpenMobile(false);
    }, [pathname]);

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        setStrategyOpenMobile(false);
    };

    return (
        <>
            {/* ─── Top Navigation Bar — Cream Frosted Glass ─── */}
            <nav className="fixed top-0 w-full z-[100] border-b border-foreground/8" style={{ backgroundColor: 'rgba(245, 236, 215, 0.85)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
                <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between relative">
                    {/* LOGO */}
                    <Link href="/" className="flex-shrink-0 text-lg md:text-xl font-serif tracking-tighter font-semibold hover:text-gold transition-all duration-500 mr-8 lg:mr-12">
                        PROTEIN<span className="text-gold ml-1 italic font-light">OS</span>
                    </Link>
                    
                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {/* FOUNDATION GROUP */}
                        <div className="flex items-center space-x-6 pr-6 border-r border-foreground/10">
                            {foundationItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link 
                                        key={item.name} 
                                        href={item.href} 
                                        className={`text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 ${isActive ? 'text-gold' : 'text-foreground/50 hover:text-gold'}`}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* STRATEGIC HUB - DROPDOWN */}
                        <div 
                            className="relative group py-2"
                            onMouseEnter={() => setStrategyOpenDesktop(true)}
                            onMouseLeave={() => setStrategyOpenDesktop(false)}
                        >
                            <button className={`flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 ${stepItems.some(i => pathname === i.href) ? 'text-gold' : 'text-foreground/50 hover:text-gold'}`}>
                                <span>Strategy OS</span>
                                <svg className={`w-3 h-3 transition-transform duration-300 ${strategyOpenDesktop ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Dropdown Menu — Cream Glass */}
                            <div className={`absolute top-full -left-4 w-64 pt-4 transition-all duration-300 ${strategyOpenDesktop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                                <div className="border border-foreground/8 rounded-xl p-4 shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(20px)' }}>
                                    <div className="space-y-1">
                                        {stepItems.map((item) => {
                                            const isActive = pathname === item.href;
                                            return (
                                                <Link 
                                                    key={item.name} 
                                                    href={item.href} 
                                                    className={`block px-4 py-3 text-[10px] uppercase tracking-[0.2em] font-bold rounded-lg transition-all ${isActive ? 'bg-gold/10 text-gold' : 'text-foreground/50 hover:bg-foreground/5 hover:text-gold'}`}
                                                >
                                                    {item.name}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right CTA */}
                    <div className="hidden lg:block ml-auto">
                        <Link href="/strategy">
                            <CtaButton size="md" variant="outline" className="text-[10px] tracking-[0.25em] uppercase px-6 py-2.5 border-foreground/15 hover:border-gold/50">
                                Access System
                            </CtaButton>
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button 
                        className="lg:hidden text-foreground/70 p-2 ml-auto"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-nav-panel"
                        aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                            {mobileMenuOpen ? (
                                <path d="M18 6L6 18M6 6l12 12" />
                            ) : (
                                <path d="M4 8h16M4 16h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {/* ─── Mobile Nav: Backdrop ─── */}
            <div
                className={`lg:hidden fixed inset-0 z-[150] transition-opacity duration-400 ${
                    mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                style={{ backgroundColor: 'rgba(44, 24, 16, 0.25)' }}
                onClick={closeMobileMenu}
                aria-hidden="true"
            />

            {/* ─── Mobile Nav: Panel — Cream Opaque ─── */}
            <div
                id="mobile-nav-panel"
                role="dialog"
                aria-label="Navigation menu"
                aria-modal="true"
                className={`lg:hidden fixed top-[72px] inset-x-0 bottom-0 z-[200] transition-all duration-500 ease-out ${
                    mobileMenuOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-4 pointer-events-none'
                }`}
                style={{ backgroundColor: 'rgba(245, 236, 215, 0.98)', paddingBottom: 'env(safe-area-inset-bottom, 20px)' }}
            >
                {/* Scrollable content container */}
                <div className="flex flex-col h-full overflow-y-auto overscroll-contain">
                    <div className="flex-1 px-8 pt-10 pb-6">
                        {/* Foundation Items */}
                        <div className="mb-8 pb-8 border-b border-foreground/8">
                            <span className="text-[10px] uppercase tracking-widest text-foreground/30 font-bold block mb-6">
                                Foundation
                            </span>
                            <div className="space-y-5">
                                {foundationItems.map((item) => (
                                    <Link 
                                        key={item.name} 
                                        href={item.href}
                                        onClick={closeMobileMenu}
                                        className={`text-sm uppercase tracking-[0.3em] font-bold block transition-colors duration-300 ${
                                            pathname === item.href ? 'text-gold' : 'text-foreground/60 active:text-gold'
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Strategy OS Accordion */}
                        <div className="mb-8">
                            <button
                                className="flex items-center justify-between w-full mb-6"
                                onClick={() => setStrategyOpenMobile(!strategyOpenMobile)}
                                aria-expanded={strategyOpenMobile}
                            >
                                <span className="text-[10px] uppercase tracking-widest text-foreground/30 font-bold">
                                    Strategy OS
                                </span>
                                <svg
                                    className={`w-4 h-4 text-foreground/30 transition-transform duration-300 ${
                                        strategyOpenMobile ? 'rotate-180' : ''
                                    }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div
                                className="overflow-hidden transition-all duration-400 ease-out"
                                style={{
                                    maxHeight: strategyOpenMobile ? `${stepItems.length * 48 + 16}px` : '0px',
                                    opacity: strategyOpenMobile ? 1 : 0,
                                }}
                            >
                                <div className="space-y-4 pl-2 border-l border-gold/20">
                                    {stepItems.map((item) => (
                                        <Link 
                                            key={item.name} 
                                            href={item.href}
                                            onClick={closeMobileMenu}
                                            className={`text-xs uppercase tracking-[0.25em] font-bold block pl-4 py-1 transition-colors duration-300 ${
                                                pathname === item.href
                                                    ? 'text-gold border-l-2 border-gold -ml-px'
                                                    : 'text-foreground/40 active:text-gold'
                                            }`}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="px-8 py-6 border-t border-foreground/8">
                        <Link href="/strategy" onClick={closeMobileMenu}>
                            <CtaButton size="lg" className="w-full text-[10px] tracking-[0.3em] uppercase py-5">
                                Access Strategy Core
                            </CtaButton>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
