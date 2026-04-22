'use client';

import React, { useState, useEffect, useRef } from 'react';
import type { WorkbookChapter } from '../../types/index';

interface QCIntelligenceProps {
  chapter: WorkbookChapter;
}

type TabType = 'CONTROL' | 'KEYWORDS' | 'CAMPAIGNS' | 'FLYWHEEL' | 'AGENT';

export const QCIntelligence: React.FC<QCIntelligenceProps> = ({ chapter }) => {
  const [activeTab, setActiveTab] = useState<TabType>('CONTROL');
  const [agentState, setAgentState] = useState<'idle' | 'analyzing' | 'complete'>('idle');
  const [typedText, setTypedText] = useState<string>('');
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [isRestockTarget, setIsRestockTarget] = useState(false);
  const [selectedZone, setSelectedZone] = useState<string | null>(null);
  const [keywordFilter, setKeywordFilter] = useState<'ALL' | 'UNDERUSED' | 'OVERUSED'>('ALL');
  
  // AI Agent Briefing Text
  const briefingText = `─────────────────────────────────────────
NUVIE × BLINKIT — BANGALORE
DAILY GROWTH BRIEF
Generated: ${new Date().toLocaleString()}
─────────────────────────────────────────

SITUATION SUMMARY
Portfolio availability: 40% (target: 90%+)
Category share: 19% (↓3pts, The Whole Truth gaining)
Keywords owned: 2/12 tracked | Keywords losing: 7/12

CRITICAL ALERTS [3]
━━━━━━━━━━━━━━━━━━
⚠ ALERT 01 — AD SPEND LEAK
Café Latte, Choco Almond Bar, Choco Brownie Bar are sold out across all tracked Bangalore dark stores. If any paid campaigns are currently running on these SKUs, every impression is driving traffic to an empty shelf. Estimated daily waste: ₹8-15K.
ACTION: Pause all campaigns for OOS SKUs immediately.

⚠ ALERT 02 — HABIT LOOP RUPTURE
Café Latte has been OOS for 3+ days. This SKU has the highest repeat structure in the portfolio — it attaches to an existing daily coffee habit. Every day of stockout breaks the habit loop for users who had started to repeat-purchase. This is not a sales loss. This is a retention loss.
ACTION: Prioritize Café Latte restock in Koramangala and Indiranagar dark stores first. These are your highest-value zones.

⚠ ALERT 03 — CATEGORY SHARE SLIDE
Nuvie has lost 3 share points this month while The Whole Truth gained 4 points. In a growing category, losing share means losing flywheel momentum. The ranking algorithm rewards offtake velocity — if your offtake drops because of OOS, your organic rank drops, which drops offtake further. Compounding downward.
ACTION: Restock → resume campaigns → offtake recovers → rank stabilizes. This is the only path.

TODAY'S PRIORITY ACTIONS [5]
━━━━━━━━━━━━━━━━━━━━━━━━━━━
01 [CRITICAL] Confirm restock ETA for Café Latte, Choco Brownie Bar, Choco Almond Bar across Bangalore dark stores.
02 [HIGH] Pause any live campaigns for the 3 OOS SKUs. Do not run a single rupee until availability crosses 85%.
03 [HIGH] For Choco Loco and Kesar Pista (partial availability): Focus ad spend on Jayanagar only — it's your highest-coverage zone. Don't spread across zones where you're <50% covered.
04 [MEDIUM] Keyword "protein coffee" has no dominant winner. Once Café Latte is restocked, this is your first ad priority. Build a city-level campaign for Koramangala + Indiranagar first.
05 [WATCH] Track category share weekly. The Whole Truth gaining share in your absence. Acceptable short-term while fixing ops. Becomes a problem if OOS extends beyond 7 days.

─────────────────────────────────────────
NEXT REVIEW: When restock is confirmed.
This analysis updates when data changes.
─────────────────────────────────────────`;

  // Simulate Agent Analysis
  useEffect(() => {
    if (activeTab === 'AGENT' && agentState === 'idle') {
      setAgentState('analyzing');
      setTypedText('');
      setAnalysisProgress(0);
      
      const timer = setInterval(() => {
        setAnalysisProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer);
            setAgentState('complete');
            return 100;
          }
          return prev + 5;
        });
      }, 100);

      return () => clearInterval(timer);
    }
  }, [activeTab, agentState]);

  // Typewriter effect for briefing
  useEffect(() => {
    if (agentState === 'complete' && typedText.length < briefingText.length) {
      const timer = setTimeout(() => {
        setTypedText(briefingText.slice(0, typedText.length + 8));
      }, 5);
      return () => clearTimeout(timer);
    }
  }, [agentState, typedText, briefingText]);

  const zones = [
    { id: 'koramangala', name: 'Koramangala', coverage: 45, status: 'WEAK', description: 'High-fitness zone, post-gym window', skus: ['Wah Vanilla', 'Kesar Pista'] },
    { id: 'hsr', name: 'HSR Layout', coverage: 52, status: 'WEAK', description: 'IT corridor, 4-7PM peak demand', skus: ['Choco Loco', 'Kesar Pista'] },
    { id: 'indiranagar', name: 'Indiranagar', coverage: 61, status: 'PARTIAL', description: "Café Latte's natural home. Currently OOS.", skus: ['Wah Vanilla', 'Choco Loco', 'Kesar Pista'] },
    { id: 'whitefield', name: 'Whitefield', coverage: 38, status: 'CRITICAL', description: 'Highest income density. Lowest coverage.', skus: ['Wah Vanilla'] },
    { id: 'jayanagar', name: 'Jayanagar', coverage: 74, status: 'OK', description: 'Best performing zone', skus: ['Wah Vanilla', 'Choco Loco', 'Kesar Pista'] },
    { id: 'bellandur', name: 'Bellandur', coverage: 43, status: 'WEAK', description: 'Large IT workforce, underserved', skus: ['Wah Vanilla', 'Kesar Pista'] },
  ];

  const skus = [
    { name: 'Café Latte Protein Coffee', format: 'RTD', status: 'SOLD OUT', coverage: 0, offtake: '—', trend: '↓↓', action: 'URGENT RESTOCK', color: 'red' },
    { name: 'Choco Almond Bar', format: 'Bar', status: 'SOLD OUT', coverage: 0, offtake: '—', trend: '↓↓', action: 'URGENT RESTOCK', color: 'red' },
    { name: 'Choco Brownie Bar', format: 'Bar', status: 'SOLD OUT', coverage: 0, offtake: '—', trend: '↓↓', action: 'URGENT RESTOCK', color: 'red' },
    { name: 'Choco Loco', format: 'RTD', status: 'PARTIAL', coverage: 62, offtake: 71, trend: '→', action: 'EXPAND COVERAGE', color: 'amber' },
    { name: 'Kesar Pista', format: 'RTD', status: 'PARTIAL', coverage: 58, offtake: 64, trend: '→', action: 'EXPAND COVERAGE', color: 'amber' },
    { name: 'Wah Vanilla', format: 'RTD', status: 'LIVE', coverage: 71, offtake: 79, trend: '↑', action: 'MAINTAIN', color: 'green' },
  ];

  const keywords = [
    { word: 'protein shake', volume: 'Very High', rank: 'Not ranking', winner: 'The Whole Truth #1', status: 'UNDERUSED', action: 'Bid on this. Entry keyword for category.', type: 'UNDERUSED' },
    { word: 'protein coffee', volume: 'High', rank: '#4 (paid)', winner: 'No strong leader', status: 'OPPORTUNITY', action: 'Café Latte should own this. Currently OOS — pause spend.', type: 'UNDERUSED' },
    { word: 'healthy snacks bangalore', volume: 'High', rank: 'Not ranking', winner: 'Yoga Bar #2', status: 'UNDERUSED', action: 'Bars should compete here. Both bars OOS.', type: 'UNDERUSED' },
    { word: 'post workout drink', volume: 'Medium', rank: 'Not ranking', winner: 'Epigamia #1', status: 'GAP', action: 'High-intent window (4-7PM). Choco Loco partially available.', type: 'UNDERUSED' },
    { word: 'protein bar', volume: 'Very High', rank: 'Not ranking', winner: 'The Whole Truth #1', status: 'CRITICAL GAP', action: 'Both bar SKUs sold out. Losing this keyword daily.', type: 'UNDERUSED' },
    { word: 'kesar pista milk', volume: 'Low', rank: '#2 (organic)', winner: 'No direct competitor', status: 'WINNING', action: 'Unique keyword. Kesar Pista has natural advantage.', type: 'OVERUSED' },
    { word: 'chocolate protein drink', volume: 'Medium', rank: '#3 (paid)', winner: 'Choco Loco competitors', status: 'COMPETING', action: 'OK. Maintain.', type: 'OVERUSED' },
    { word: 'high protein breakfast', volume: 'Medium', rank: 'Not ranking', winner: 'Multiple', status: 'UNDERUSED', action: 'Wah Vanilla and Kesar Pista should compete here.', type: 'UNDERUSED' },
    { word: 'office snack healthy', volume: 'Medium', rank: 'Not ranking', winner: 'Yoga Bar #1', status: 'GAP', action: 'Bar format natural fit. Blocked by OOS.', type: 'UNDERUSED' },
    { word: 'sugar free protein', volume: 'Medium', rank: 'Not ranking', winner: 'The Whole Truth #1', status: 'WATCH', action: 'Emerging search. Monitor.', type: 'UNDERUSED' },
    { word: 'protein drink blinkit', volume: 'High', rank: '#5', winner: 'Epigamia #1', status: 'UNDERPERFORMING', action: 'Brand + channel keyword. Should rank higher.', type: 'UNDERUSED' },
    { word: 'cafe latte protein', volume: 'Low', rank: '#1 (organic)', winner: 'No competitor', status: 'OWNED', action: "This keyword is Nuvie's. Keep it.", type: 'OVERUSED' },
  ];

  const filteredKeywords = keywordFilter === 'ALL' ? keywords : keywords.filter(k => k.type === keywordFilter);

  return (
    <div className="research-module-wrapper py-16 px-4 md:px-8">
      {/* Outer Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-accent italic">Module 02</span>
          <span className="h-px w-12 bg-accent/20" />
        </div>
        <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight tracking-tight">
          {chapter.title}
        </h2>
        <p className="text-xl md:text-2xl text-foreground/60 font-light leading-relaxed max-w-3xl mb-8">
          "{chapter.summary}"
        </p>
        <div className="bg-accent/[0.03] border-l border-accent/20 p-6 max-w-3xl">
           <p className="text-sm text-foreground/50 italic leading-relaxed">
             All data in this module is simulated using public signals, GobbleCube&apos;s published framework, and industry benchmarks. This demonstrates the framework — not Nuvie&apos;s actual internal metrics.
           </p>
        </div>
      </div>

      {/* The Dashboard */}
      <div className="max-w-7xl mx-auto bg-[#0F0F0F] rounded-[2rem] border border-[#2A2A2A] shadow-2xl overflow-hidden text-[#E8E4DE] font-sans">
        
        {/* Dashboard Header Bar */}
        <div className="border-b border-[#2A2A2A] bg-[#141414] px-6 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] md:text-[11px] font-mono tracking-[0.2em] uppercase font-bold text-[#E8E4DE]/70">
                NUVIE QC INTELLIGENCE — BANGALORE — BLINKIT
              </span>
            </div>
            <div className="hidden md:block h-4 w-px bg-[#2A2A2A]" />
            <div className="hidden md:flex items-center gap-2">
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#E8E4DE]/40">System Status:</span>
              <span className="text-[9px] font-mono uppercase tracking-widest text-green-400 font-bold">SIMULATED LIVE</span>
            </div>
          </div>

          <div className="flex items-center gap-4 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] shrink-0">
              <span className="text-[9px] font-mono text-[#E8E4DE]/40 uppercase tracking-tighter">Availability</span>
              <span className="text-[11px] font-mono font-bold text-red-400">40%</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] shrink-0">
              <span className="text-[9px] font-mono text-[#E8E4DE]/40 uppercase tracking-tighter">Share</span>
              <div className="flex items-center gap-1">
                <span className="text-[11px] font-mono font-bold text-amber-400">19%</span>
                <span className="text-[9px] font-mono text-amber-400/60">↓3pts</span>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] shrink-0">
              <span className="text-[9px] font-mono text-[#E8E4DE]/40 uppercase tracking-tighter">SKUs</span>
              <span className="text-[11px] font-mono font-bold text-red-400">3/6</span>
            </div>
            
            {/* Watermark */}
            <div className="ml-4 opacity-10 hover:opacity-100 transition-opacity">
              <span className="text-[8px] font-mono uppercase tracking-[0.3em] font-bold rotate-90 md:rotate-0 inline-block">SIMULATED DATA</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-[#2A2A2A] bg-[#141414] overflow-x-auto no-scrollbar">
          <nav className="flex px-4 md:px-8">
            {[
              { id: 'CONTROL', label: 'CONTROL TOWER' },
              { id: 'KEYWORDS', label: 'KEYWORDS' },
              { id: 'CAMPAIGNS', label: 'CAMPAIGN MATRIX' },
              { id: 'FLYWHEEL', label: 'THE FLYWHEEL' },
              { id: 'AGENT', label: 'AI AGENT' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as TabType);
                  if (tab.id !== 'AGENT') setAgentState('idle');
                }}
                className={`px-6 py-4 text-[10px] font-mono tracking-[0.2em] uppercase font-bold transition-all border-b-2 whitespace-nowrap
                  ${activeTab === tab.id ? 'border-orange-500 text-orange-500 bg-orange-500/[0.03]' : 'border-transparent text-[#E8E4DE]/40 hover:text-[#E8E4DE]/70'}
                `}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Dashboard Content Area */}
        <div className="p-6 md:p-10 min-h-[600px] bg-[#0F0F0F]">
          
          {/* TAB 1: CONTROL TOWER */}
          {activeTab === 'CONTROL' && (
            <div className="animate-in fade-in duration-700">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left: SKU Matrix */}
                <div className="lg:col-span-2">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-sm font-mono tracking-[0.3em] uppercase font-bold text-[#E8E4DE]/60">SKU STATUS MATRIX</h3>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                      <span className="text-[9px] font-mono tracking-widest text-red-400 font-bold uppercase">3 Critical Failures</span>
                    </div>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-[#2A2A2A]">
                          <th className="pb-4 text-[9px] font-mono text-[#E8E4DE]/30 uppercase tracking-widest">SKU Name</th>
                          <th className="pb-4 text-[9px] font-mono text-[#E8E4DE]/30 uppercase tracking-widest">Blinkit Status</th>
                          <th className="pb-4 text-[9px] font-mono text-[#E8E4DE]/30 uppercase tracking-widest text-center">Coverage</th>
                          <th className="pb-4 text-[9px] font-mono text-[#E8E4DE]/30 uppercase tracking-widest text-center">Trend</th>
                          <th className="pb-4 text-[9px] font-mono text-[#E8E4DE]/30 uppercase tracking-widest text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {skus.map((sku, idx) => (
                          <tr key={idx} className="group hover:bg-[#1A1A1A]/50 transition-colors border-b border-[#1A1A1A]">
                            <td className="py-5">
                              <div className="flex flex-col">
                                <span className="text-xs font-bold text-[#E8E4DE]/90">{sku.name}</span>
                                <span className="text-[9px] font-mono text-[#E8E4DE]/30 uppercase">{sku.format}</span>
                              </div>
                            </td>
                            <td className="py-5">
                              <div className="flex items-center gap-3">
                                {sku.status === 'SOLD OUT' ? (
                                  <span className="px-2 py-0.5 rounded text-[8px] font-bold bg-red-500/10 text-red-400 border border-red-500/20 animate-pulse">SOLD OUT</span>
                                ) : sku.status === 'PARTIAL' ? (
                                  <span className="px-2 py-0.5 rounded text-[8px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">PARTIAL</span>
                                ) : (
                                  <span className="px-2 py-0.5 rounded text-[8px] font-bold bg-green-500/10 text-green-400 border border-green-500/20">LIVE</span>
                                )}
                              </div>
                            </td>
                            <td className="py-5 text-center">
                              <div className="flex flex-col items-center gap-1.5">
                                <span className={`text-[10px] font-mono font-bold ${sku.coverage < 50 ? 'text-red-400' : sku.coverage < 80 ? 'text-amber-400' : 'text-green-400'}`}>{sku.coverage}%</span>
                                <div className="w-16 h-1 bg-[#1A1A1A] rounded-full overflow-hidden">
                                  <div className={`h-full transition-all duration-1000 ${sku.coverage < 50 ? 'bg-red-500' : sku.coverage < 80 ? 'bg-amber-500' : 'bg-green-500'}`} style={{ width: `${sku.coverage}%` }} />
                                </div>
                              </div>
                            </td>
                            <td className="py-5 text-center">
                              <span className={`text-sm font-bold ${sku.trend.includes('↓') ? 'text-red-400' : sku.trend === '→' ? 'text-amber-400' : 'text-green-400'}`}>{sku.trend}</span>
                            </td>
                            <td className="py-5 text-right">
                              <span className={`text-[9px] font-mono font-bold tracking-wider ${sku.color === 'red' ? 'text-red-400 underline decoration-red-400/20' : sku.color === 'amber' ? 'text-amber-400' : 'text-green-400/60'}`}>{sku.action}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Right: Heatmap */}
                <div className="space-y-8">
                  <h3 className="text-sm font-mono tracking-[0.3em] uppercase font-bold text-[#E8E4DE]/60">DARK STORE HEAT MAP</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {zones.map((zone) => (
                      <div 
                        key={zone.id} 
                        onClick={() => setSelectedZone(selectedZone === zone.id ? null : zone.id)}
                        className={`p-5 rounded-2xl border transition-all cursor-pointer group
                          ${selectedZone === zone.id ? 'bg-[#1A1A1A] border-orange-500/40 shadow-lg' : 'bg-[#141414] border-[#2A2A2A] hover:border-[#3A3A3A]'}
                        `}
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest">{zone.name}</h4>
                            <p className="text-[9px] text-[#E8E4DE]/30 mt-1 uppercase font-mono">{zone.description}</p>
                          </div>
                          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded
                            ${zone.status === 'CRITICAL' ? 'text-red-400 bg-red-400/10' : zone.status === 'WEAK' ? 'text-amber-400 bg-amber-400/10' : zone.status === 'PARTIAL' ? 'text-blue-400 bg-blue-400/10' : 'text-green-400 bg-green-400/10'}
                          `}>
                            {zone.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-1.5 bg-[#0F0F0F] rounded-full overflow-hidden">
                            <div className={`h-full transition-all duration-1000 ${zone.coverage < 50 ? 'bg-red-500' : zone.coverage < 70 ? 'bg-amber-500' : 'bg-green-500'}`} style={{ width: `${zone.coverage}%` }} />
                          </div>
                          <span className="text-[10px] font-mono font-bold text-[#E8E4DE]/60 w-8">{zone.coverage}%</span>
                        </div>

                        {selectedZone === zone.id && (
                          <div className="mt-6 pt-6 border-t border-[#2A2A2A] animate-in slide-in-from-top-2 duration-300">
                             <span className="text-[8px] font-mono uppercase tracking-widest text-[#E8E4DE]/30 block mb-3">Available SKUs:</span>
                             <div className="flex flex-wrap gap-2">
                               {zone.skus.map(sku => (
                                 <span key={sku} className="text-[9px] px-2 py-1 bg-[#0F0F0F] rounded border border-[#2A2A2A] text-[#E8E4DE]/70">{sku}</span>
                               ))}
                               {zone.skus.length === 0 && <span className="text-[9px] text-red-400 italic">No SKUs available</span>}
                             </div>
                             <div className="mt-4 p-3 rounded-lg bg-orange-500/5 border border-orange-500/10">
                                <span className="text-[9px] font-mono text-orange-500/60 uppercase block mb-1">Recommendation:</span>
                                <p className="text-[10px] text-orange-500/80 leading-relaxed italic">Priority stock allocation for Café Latte required.</p>
                             </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Insight */}
              <div className="mt-12 p-8 rounded-[2rem] border border-amber-500/20 bg-amber-500/[0.02]">
                <div className="flex gap-4">
                  <div className="shrink-0 text-amber-500 mt-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-[0.3em] text-amber-500 uppercase font-bold block mb-2">Benchmark Alert</span>
                    <p className="text-sm md:text-base text-[#E8E4DE]/70 leading-relaxed italic">
                      &quot;GobbleCube&apos;s benchmark: brands spending on QC ads with &lt;90% availability are burning money on empty shelves. Current Nuvie average: 40%. <span className="text-amber-400 font-bold">Recommendation: PAUSE all ad spend</span> until Café Latte and bars are restocked.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: KEYWORD INTELLIGENCE */}
          {activeTab === 'KEYWORDS' && (
            <div className="animate-in fade-in duration-700">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                  <h3 className="text-xl md:text-2xl font-serif mb-2">Keywords Nuvie Should Be Winning — and Isn&apos;t</h3>
                  <p className="text-xs text-[#E8E4DE]/40 font-mono tracking-widest uppercase">REPLICA: GOBBLECUBE KEYWORD EXPLORER</p>
                </div>
                <div className="flex gap-2">
                   {['ALL', 'UNDERUSED', 'OVERUSED'].map(filter => (
                     <button
                       key={filter}
                       onClick={() => setKeywordFilter(filter as any)}
                       className={`px-4 py-2 rounded-lg text-[10px] font-mono tracking-widest uppercase font-bold transition-all border
                         ${keywordFilter === filter ? 'bg-orange-500 border-orange-500 text-[#0F0F0F]' : 'bg-transparent border-[#2A2A2A] text-[#E8E4DE]/40 hover:text-[#E8E4DE]/70'}
                       `}
                     >
                       {filter}
                     </button>
                   ))}
                </div>
              </div>

              <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                   <thead>
                     <tr className="border-b border-[#2A2A2A]">
                        <th className="pb-6 text-[9px] font-mono text-[#E8E4DE]/30 uppercase tracking-widest">Keyword</th>
                        <th className="pb-6 text-[9px] font-mono text-[#E8E4DE]/30 uppercase tracking-widest">Volume</th>
                        <th className="pb-6 text-[9px] font-mono text-[#E8E4DE]/30 uppercase tracking-widest">Rank</th>
                        <th className="pb-6 text-[9px] font-mono text-[#E8E4DE]/30 uppercase tracking-widest">Winner</th>
                        <th className="pb-6 text-[9px] font-mono text-[#E8E4DE]/30 uppercase tracking-widest">Status</th>
                        <th className="pb-6 text-[9px] font-mono text-[#E8E4DE]/30 uppercase tracking-widest text-right">Recommended Action</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-[#1A1A1A]">
                     {filteredKeywords.map((kw, idx) => (
                       <tr key={idx} className="group hover:bg-[#1A1A1A]/30 transition-all cursor-default">
                         <td className="py-6 pr-6">
                           <span className="text-sm font-bold text-[#E8E4DE]/90">{kw.word}</span>
                         </td>
                         <td className="py-6 pr-6">
                           <span className={`text-[10px] font-mono uppercase tracking-widest font-bold 
                             ${kw.volume === 'Very High' ? 'text-orange-500' : kw.volume === 'High' ? 'text-orange-400' : 'text-[#E8E4DE]/40'}
                           `}>{kw.volume}</span>
                         </td>
                         <td className="py-6 pr-6">
                           <span className={`text-[10px] font-mono font-bold ${kw.rank.includes('#1') ? 'text-green-400' : 'text-[#E8E4DE]/40'}`}>{kw.rank}</span>
                         </td>
                         <td className="py-6 pr-6">
                           <span className="text-[10px] text-[#E8E4DE]/60 italic">{kw.winner}</span>
                         </td>
                         <td className="py-6 pr-6">
                            <span className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest border
                              ${kw.status === 'OPPORTUNITY' ? 'text-green-400 bg-green-400/5 border-green-400/20' : 
                                kw.status === 'CRITICAL GAP' ? 'text-red-400 bg-red-400/5 border-red-400/20' :
                                kw.status === 'UNDERUSED' ? 'text-amber-400 bg-amber-500/5 border-amber-500/20' :
                                kw.status === 'WINNING' ? 'text-green-400 bg-green-400/5 border-green-400/20' :
                                kw.status === 'COMPETING' ? 'text-blue-400 bg-blue-400/5 border-blue-400/20' :
                                kw.status === 'WATCH' ? 'text-[#6B7280] bg-[#6B7280]/5 border-[#6B7280]/20' :
                                'text-orange-400 bg-orange-400/5 border-orange-400/20'}
                            `}>
                              {kw.status}
                            </span>
                         </td>
                         <td className="py-6 text-right">
                           <p className="text-[10px] text-[#E8E4DE]/50 font-light max-w-[200px] ml-auto leading-relaxed italic">{kw.action}</p>
                         </td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
              </div>

              <div className="mt-16 p-8 bg-[#141414] rounded-[2rem] border border-[#2A2A2A]">
                 <p className="text-sm text-[#E8E4DE]/60 leading-relaxed italic">
                   &quot;Key principle from GobbleCube: <span className="text-orange-500/80">Don&apos;t spend where your ad rank is worse than your organic rank.</span> And never spend on a keyword when you&apos;re OOS in the city running the ad — you&apos;re paying to show an empty shelf.&quot;
                 </p>
              </div>
            </div>
          )}

          {/* TAB 3: CAMPAIGN MATRIX */}
          {activeTab === 'CAMPAIGNS' && (
            <div className="animate-in fade-in duration-700">
               <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                  <div>
                    <h3 className="text-xl md:text-2xl font-serif mb-2">SKU × City Campaign Intelligence</h3>
                    <p className="text-xs text-[#E8E4DE]/40 leading-relaxed max-w-xl">
                      What a smart campaign structure looks like for Nuvie right now — and what it should look like after restock.
                    </p>
                  </div>
                  <div className="flex p-1 bg-[#141414] rounded-xl border border-[#2A2A2A]">
                     <button 
                       onClick={() => setIsRestockTarget(false)}
                       className={`px-4 py-2 rounded-lg text-[9px] font-mono tracking-widest uppercase font-bold transition-all
                         ${!isRestockTarget ? 'bg-orange-500 text-[#0F0F0F]' : 'text-[#E8E4DE]/40'}
                       `}
                     >
                       CURRENT STATE
                     </button>
                     <button 
                       onClick={() => setIsRestockTarget(true)}
                       className={`px-4 py-2 rounded-lg text-[9px] font-mono tracking-widest uppercase font-bold transition-all
                         ${isRestockTarget ? 'bg-green-500 text-[#0F0F0F]' : 'text-[#E8E4DE]/40'}
                       `}
                     >
                       POST-RESTOCK
                     </button>
                  </div>
               </div>

               {/* Matrix Grid */}
               <div className="mb-16">
                  <div className="overflow-x-auto">
                    <div className="min-w-[800px]">
                      {/* Grid Headers */}
                      <div className="grid grid-cols-7 gap-4 mb-4">
                        <div />
                        {zones.map(z => (
                          <div key={z.id} className="text-center">
                            <span className="text-[9px] font-mono tracking-widest text-[#E8E4DE]/30 uppercase block">{z.name}</span>
                          </div>
                        ))}
                      </div>

                      {/* Grid Rows */}
                      <div className="space-y-4">
                        {skus.map((sku, sIdx) => (
                          <div key={sIdx} className="grid grid-cols-7 gap-4 items-center">
                            <div className="text-right pr-4 border-r border-[#1A1A1A]">
                              <span className="text-[10px] font-bold text-[#E8E4DE]/70 truncate block">{sku.name}</span>
                            </div>
                            {zones.map((zone, zIdx) => {
                              // Simulate status logic
                              let status: 'red' | 'amber' | 'green' = 'red';
                              if (isRestockTarget) status = 'green';
                              else {
                                if (sku.status === 'SOLD OUT') status = 'red';
                                else if (sku.status === 'PARTIAL' && zone.coverage < 50) status = 'red';
                                else if (sku.status === 'PARTIAL') status = 'amber';
                                else if (sku.status === 'LIVE' && zone.coverage < 50) status = 'amber';
                                else if (sku.status === 'LIVE') status = 'green';
                              }

                              return (
                                <div key={zIdx} className="flex justify-center group relative">
                                  <div className={`w-4 h-4 rounded-full shadow-lg transition-all duration-700
                                    ${status === 'red' ? 'bg-red-500/20 border border-red-500/40' : status === 'amber' ? 'bg-amber-500 border border-amber-500 shadow-amber-500/20' : 'bg-green-500 border border-green-500 shadow-green-500/20'}
                                  `} />
                                  
                                  {/* Tooltip */}
                                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 p-4 bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none z-20 shadow-2xl">
                                     <span className="text-[8px] font-mono uppercase tracking-widest text-orange-500 block mb-2">Strategy</span>
                                     <p className="text-[10px] text-[#E8E4DE]/90 leading-relaxed font-bold mb-2">
                                       {isRestockTarget ? (
                                         (sIdx + zIdx) % 4 === 0 ? 'IMPROVE ROAS — optimize bids' : 
                                         (sIdx + zIdx) % 4 === 1 ? 'IMPROVE SOV — rank targeting' :
                                         (sIdx + zIdx) % 4 === 2 ? 'TEST — establish threshold' :
                                         'LAUNCH — impressions goal'
                                       ) : (
                                         status === 'red' ? 'LOCKED: OOS' : 
                                         status === 'amber' ? 'LIMITED: Efficiency play' : 'AGGRESSIVE: Growth play'
                                       )}
                                     </p>
                                     <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#2A2A2A]">
                                        <span className="text-[8px] font-mono text-[#E8E4DE]/30 uppercase">Priority</span>
                                        <span className={`text-[8px] font-bold uppercase ${status === 'green' ? 'text-green-400' : 'text-[#E8E4DE]/20'}`}>HIGH</span>
                                     </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
               </div>

               <div className="flex flex-wrap gap-8 items-center mb-16 px-6 py-4 rounded-2xl bg-[#141414] border border-[#2A2A2A]">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono text-[#E8E4DE]/40 uppercase tracking-widest">Active cells:</span>
                    <span className={`text-xl font-mono font-bold ${isRestockTarget ? 'text-green-400' : 'text-amber-400'}`}>{isRestockTarget ? '36/36' : '8/36'}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono text-[#E8E4DE]/40 uppercase tracking-widest">Blocked:</span>
                    <span className={`text-xl font-mono font-bold ${isRestockTarget ? 'text-[#E8E4DE]/20' : 'text-red-400'}`}>{isRestockTarget ? '0/36' : '18/36'}</span>
                  </div>
                  {!isRestockTarget && (
                    <div className="flex items-center gap-3 ml-auto text-red-400 animate-pulse">
                      <span className="text-[10px] font-mono uppercase tracking-widest">Daily Opportunity Cost:</span>
                      <span className="text-xl font-mono font-bold">₹15K+</span>
                    </div>
                  )}
               </div>

               {/* Day Parting */}
               <div>
                  <h4 className="text-sm font-mono tracking-[0.3em] uppercase font-bold text-[#E8E4DE]/60 mb-8">DAY-PARTING INTELLIGENCE</h4>
                  <div className="relative h-20 bg-[#141414] rounded-2xl border border-[#2A2A2A] overflow-hidden">
                     {/* Timeline Bar */}
                     <div className="absolute inset-0 flex">
                        {[...Array(18)].map((_, i) => (
                          <div key={i} className="flex-1 border-r border-[#2A2A2A]/20 flex items-end justify-center pb-2">
                             <span className="text-[7px] font-mono text-[#E8E4DE]/20">{i + 6}h</span>
                          </div>
                        ))}
                     </div>
                     {/* Highlights */}
                     <div className="absolute inset-0 flex items-center px-4">
                        <div className="absolute left-[8%] w-[12%] h-12 bg-orange-500/10 border-x border-orange-500/20 flex items-center justify-center">
                           <span className="text-[8px] font-mono font-bold text-orange-500 rotate-90 whitespace-nowrap">COFFEE PEAK</span>
                        </div>
                        <div className="absolute left-[58%] w-[18%] h-12 bg-orange-500/10 border-x border-orange-500/20 flex items-center justify-center">
                           <span className="text-[8px] font-mono font-bold text-orange-500 rotate-90 whitespace-nowrap">BAR PEAK</span>
                        </div>
                        <div className="absolute left-[78%] w-[15%] h-12 bg-orange-500/10 border-x border-orange-500/20 flex items-center justify-center">
                           <span className="text-[8px] font-mono font-bold text-orange-500 rotate-90 whitespace-nowrap">GENERAL PEAK</span>
                        </div>
                        <div className="absolute left-[50%] w-[50%] h-4 bg-green-500/5 bottom-0 flex items-center justify-center">
                           <span className="text-[7px] font-mono font-bold text-green-500 uppercase tracking-widest opacity-40">Low Competition Window</span>
                        </div>
                     </div>
                  </div>
                  <p className="mt-6 text-xs text-[#E8E4DE]/40 italic leading-relaxed">
                    Note: &quot;GobbleCube experiment showed full-day visibility outperforms day-parted campaigns. Don&apos;t front-load.&quot;
                  </p>
               </div>
            </div>
          )}

          {/* TAB 4: THE FLYWHEEL */}
          {activeTab === 'FLYWHEEL' && (
            <div className="animate-in fade-in duration-700">
               <div className="mb-20 text-center">
                  <h3 className="text-2xl md:text-4xl font-serif mb-6 text-balance">Organic vs Paid: The Flywheel Cycle</h3>
                  <p className="text-lg text-[#E8E4DE]/60 max-w-2xl mx-auto leading-relaxed font-light">
                    Nuvie currently sits in the Paid Dependency phase. The goal is to move the needle toward Algorithm Recognition.
                  </p>
               </div>

               {/* Lifecycle Diagram */}
               <div className="relative max-w-5xl mx-auto mb-24 pt-12">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2A2A2A] to-transparent" />
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                     {[
                       { stage: 'STAGE 1', title: 'PAID DEPENDENCY', active: true, desc: 'Sales driven entirely by manual ad spend. ROAS is the only metric.' },
                       { stage: 'STAGE 2', title: 'BUILDING VELOCITY', active: false, desc: 'Consistent offtake starts to signal rank improvement to the app.' },
                       { stage: 'STAGE 3', title: 'ALGORITHM RECOGNITION', active: false, desc: 'App starts showing Nuvie in "You might like" without ads.' },
                       { stage: 'STAGE 4', title: 'ORGANIC FLYWHEEL', active: false, desc: '50%+ of orders come from organic search. ROAS compounds.' },
                     ].map((item, i) => (
                       <div key={i} className="relative group">
                         {item.active && (
                           <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                             <span className="text-[9px] font-mono font-bold text-orange-500 animate-pulse">CURRENT POSITION</span>
                             <div className="w-3 h-3 rounded-full bg-orange-500 shadow-lg shadow-orange-500/50" />
                           </div>
                         )}
                         <div className={`p-8 rounded-[2rem] border transition-all duration-700 h-full
                           ${item.active ? 'bg-orange-500/5 border-orange-500/40' : 'bg-[#141414] border-[#2A2A2A] opacity-40 group-hover:opacity-60'}
                         `}>
                           <span className="text-[9px] font-mono text-orange-500/60 uppercase tracking-[0.3em] font-bold block mb-4">{item.stage}</span>
                           <h4 className="text-sm font-bold tracking-widest mb-6 leading-tight">{item.title}</h4>
                           <p className="text-[11px] text-[#E8E4DE]/50 leading-relaxed italic">{item.desc}</p>
                         </div>
                         {i < 3 && (
                           <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 text-[#2A2A2A]">
                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                           </div>
                         )}
                       </div>
                     ))}
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                  <div>
                    <h4 className="text-xl font-serif mb-8 border-l-2 border-orange-500 pl-6 uppercase tracking-wider">The Flywheel Metric to Watch</h4>
                    <p className="text-base text-[#E8E4DE]/70 leading-relaxed font-light mb-10">
                      &quot;Rising organic non-brand keyword sales. When &apos;protein drink&apos; or &apos;healthy snack&apos; searches start converting to Nuvie orders <span className="text-orange-400 font-medium">WITHOUT paid ads</span> — that&apos;s the flywheel spinning.&quot;
                    </p>
                    
                    <div className="space-y-8">
                       <div>
                          <div className="flex justify-between items-end mb-3">
                             <span className="text-[10px] font-mono uppercase tracking-widest text-[#E8E4DE]/40">Paid-driven orders</span>
                             <span className="text-lg font-mono font-bold text-orange-400">100%</span>
                          </div>
                          <div className="h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
                             <div className="h-full bg-orange-500 w-full" />
                          </div>
                       </div>
                       <div>
                          <div className="flex justify-between items-end mb-3">
                             <span className="text-[10px] font-mono uppercase tracking-widest text-[#E8E4DE]/40">Organic-driven orders</span>
                             <span className="text-lg font-mono font-bold text-[#E8E4DE]/20">~0%</span>
                          </div>
                          <div className="h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
                             <div className="h-full bg-orange-500/20 w-[2%]" />
                          </div>
                       </div>
                    </div>
                  </div>

                  <div className="p-10 bg-[#141414] rounded-[3rem] border border-[#2A2A2A]">
                    <h4 className="text-xs font-mono uppercase tracking-[0.3em] font-bold text-[#E8E4DE]/60 mb-10">What breaks the flywheel before it starts</h4>
                    <ul className="space-y-8">
                       <li className="flex gap-6">
                          <span className="text-orange-500 font-serif text-2xl italic">01.</span>
                          <p className="text-sm text-[#E8E4DE]/60 leading-relaxed"><span className="text-[#E8E4DE] font-bold">Stockouts during ad campaigns</span> — Currently happening. OOS kills rank history, forcing you to restart the flywheel from zero.</p>
                       </li>
                       <li className="flex gap-6">
                          <span className="text-orange-500 font-serif text-2xl italic">02.</span>
                          <p className="text-sm text-[#E8E4DE]/60 leading-relaxed"><span className="text-[#E8E4DE] font-bold">Discount-driven offtake</span> — Algorithm rewards velocity but ignores quality. High repeat rate (organic) is the only true health signal.</p>
                       </li>
                       <li className="flex gap-6">
                          <span className="text-orange-500 font-serif text-2xl italic">03.</span>
                          <p className="text-sm text-[#E8E4DE]/60 leading-relaxed"><span className="text-[#E8E4DE] font-bold">Pan-India campaigns before city-level wins</span> — 57% lower ROAS vs city-specific. Win Bangalore before you scale ads elsewhere.</p>
                       </li>
                    </ul>
                  </div>
               </div>
            </div>
          )}

          {/* TAB 5: AI AGENT */}
          {activeTab === 'AGENT' && (
            <div className="animate-in fade-in duration-700 font-mono">
               <div className="mb-10 flex items-center justify-between border-b border-[#2A2A2A]/40 pb-6">
                  <div>
                    <h3 className="text-sm md:text-base tracking-[0.4em] uppercase font-bold text-orange-500">NUVIE GROWTH AGENT — DAILY BRIEFING</h3>
                    <p className="text-[9px] md:text-[10px] text-[#E8E4DE]/40 uppercase tracking-widest mt-1">Simulated AI analysis based on current availability signals</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                    <span className="text-[9px] text-orange-500 font-bold uppercase tracking-widest">Awaiting Restock Signals</span>
                  </div>
               </div>

               <div className="relative min-h-[500px] bg-[#0A0A0A] p-8 md:p-12 rounded-2xl border border-[#1A1A1A] overflow-hidden">
                  {agentState === 'analyzing' && (
                    <div className="flex flex-col items-center justify-center h-full gap-8 py-20">
                       <div className="w-48 h-1 bg-[#1A1A1A] rounded-full overflow-hidden relative">
                          <div className="h-full bg-orange-500 transition-all duration-300" style={{ width: `${analysisProgress}%` }} />
                       </div>
                       <div className="space-y-3 text-center">
                          {analysisProgress > 20 && <p className="text-[10px] text-green-400/80 animate-in fade-in duration-500 tracking-widest uppercase">Analyzing 6 SKUs across 6 Bangalore zones...</p>}
                          {analysisProgress > 50 && <p className="text-[10px] text-orange-400/80 animate-in fade-in duration-500 tracking-widest uppercase">Scanning keyword coverage gaps...</p>}
                          {analysisProgress > 80 && <p className="text-[10px] text-blue-400/80 animate-in fade-in duration-500 tracking-widest uppercase">Generating priority actions...</p>}
                       </div>
                    </div>
                  )}

                  {(agentState === 'complete') && (
                    <div className="relative whitespace-pre-wrap leading-relaxed text-[10px] md:text-xs text-[#E8E4DE]/90 max-w-4xl">
                       {typedText}
                       {typedText.length < briefingText.length && (
                         <span className="inline-block w-2 h-4 bg-orange-500 animate-pulse align-middle ml-1" />
                       )}
                    </div>
                  )}
               </div>

               <div className="mt-12 p-8 border-t border-[#1A1A1A]">
                  <h4 className="text-[10px] tracking-[0.4em] uppercase font-bold text-orange-500/40 mb-6 italic">HOW THIS AGENT WORKS</h4>
                  <p className="text-[11px] text-[#E8E4DE]/30 leading-relaxed max-w-3xl font-sans italic">
                    This analysis is generated by a simulated logic layer that weights current availability (40%), keyword SOV gaps, and category share shifts. It replicates the core methodology of the GobbleCube framework — moving from descriptive data (what happened) to prescriptive action (what to do now).
                  </p>
               </div>
            </div>
          )}
        </div>
      </div>

      {/* About Section (Outside) */}
      <div className="max-w-7xl mx-auto mt-24 pt-24 border-t border-accent/10">
        <h3 className="text-3xl font-serif mb-16 text-center md:text-left">Why this module exists</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent block mb-6">01. THE FRAMEWORK</span>
            <p className="text-base text-foreground/60 leading-relaxed font-light">
              GobbleCube&apos;s approach to QC intelligence follows a clear hierarchy: <span className="text-foreground font-medium underline decoration-accent/20">Availability → Share of Voice → Pricing</span>. You cannot win on price or ads if the product is not on the dark store shelf.
            </p>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent block mb-6">02. APPLIED TO NUVIE</span>
            <p className="text-base text-foreground/60 leading-relaxed font-light">
              Using public signals to simulate what this looks like for a real brand. The OOS signals for Café Latte and Bars are real observations — this simulation simply builds the intelligence layer around them.
            </p>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent block mb-6">03. WHAT I&apos;D ACTUALLY DO</span>
            <p className="text-base text-foreground/60 leading-relaxed font-light">
              This is not theoretical. If I had access to Nuvie&apos;s Blinkit console and a data intelligence layer, these are the exact levers I would pull to protect brand margin and drive habit-loop retention.
            </p>
          </div>
        </div>
        
        <div className="mt-20 pt-12 border-t border-accent/5 flex flex-col md:flex-row items-center justify-between gap-6 opacity-40">
           <p className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold italic">
             Framework sourced from GobbleCube&apos;s QComm Growth Playbook (2025).
           </p>
           <p className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold italic">
             Simulation built for Nuvie Thesis.
           </p>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};
