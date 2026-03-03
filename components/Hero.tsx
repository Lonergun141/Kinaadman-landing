"use client";

import { ArrowRight, BookOpen, Shield, Search } from "lucide-react";
import { KinaadmanMeshBackground } from "./KinaadmanMeshBackground";

export function Hero() {
    return (
        <section className="relative w-full overflow-hidden bg-[#f8fafc] flex flex-col" style={{ minHeight: '100svh' }}>
            <KinaadmanMeshBackground forceLight animationSpeed={90} />

            {/* Subtle radial glow */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(201,162,39,0.06)_0%,transparent_70%)]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full bg-[radial-gradient(ellipse,rgba(15,42,68,0.05)_0%,transparent_70%)]" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-6 pt-36 pb-0 flex-1">
                {/* Main heading */}
                <div className="hero-fade-up" style={{ animationDelay: '0ms' }}>
                    <h1 className="font-serif font-bold text-[#0f2a44] leading-[1.05] tracking-tight mb-6 max-w-4xl"
                        style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}>
                        Where no research<br />
                        <span className="text-[#c9a227]">gets lost.</span>
                    </h1>
                </div>

                {/* Subtitle */}
                <div className="hero-fade-up" style={{ animationDelay: '80ms' }}>
                    <p className="text-lg text-[#475569] max-w-2xl leading-relaxed mb-10 font-light">
                        A centralized digital repository designed for universities to securely publish,
                        discover, and archive thesis and capstone research with uncompromising structure.
                    </p>
                </div>

                {/* Dashboard Mockup — peeks at bottom */}
                <div className="w-full max-w-5xl mx-auto relative hero-fade-up" style={{ animationDelay: '260ms' }}>
                    {/* Browser chrome */}
                    <div className="rounded-t-2xl overflow-hidden shadow-[0_-4px_40px_rgba(15,42,68,0.12),0_30px_80px_rgba(15,42,68,0.10)] border border-b-0 border-[#e2e8f0] bg-white">
                        {/* Browser bar */}
                        <div className="flex items-center gap-2 px-4 py-3 bg-[#f1f5f9] border-b border-[#e2e8f0]">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-[#fecaca]" />
                                <div className="w-3 h-3 rounded-full bg-[#fef08a]" />
                                <div className="w-3 h-3 rounded-full bg-[#bbf7d0]" />
                            </div>
                            <div className="flex-1 mx-4 h-6 rounded-md bg-white border border-[#e2e8f0] flex items-center px-3">
                                <span className="text-[10px] text-[#94a3b8]">kinaadman.edu/repository</span>
                            </div>
                        </div>

                        {/* Dashboard inner content */}
                        <div className="flex h-72 sm:h-96 bg-[#f8fafc]">
                            {/* Sidebar */}
                            <div className="w-52 shrink-0 bg-[#0f2a44] p-4 hidden sm:flex flex-col gap-2">
                                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 mb-2">
                                    <div className="w-5 h-5 rounded bg-[#c9a227]/80" />
                                    <div className="h-2.5 w-20 bg-white/60 rounded" />
                                </div>
                                {[BookOpen, Search, Shield].map((Icon, i) => (
                                    <div key={i} className={`flex items-center gap-2 px-3 py-2 rounded-lg ${i === 0 ? 'bg-white/20' : 'hover:bg-white/10'} cursor-pointer`}>
                                        <Icon size={14} className="text-white/70" />
                                        <div className={`h-2 rounded ${i === 0 ? 'w-16 bg-white/80' : 'w-12 bg-white/40'}`} />
                                    </div>
                                ))}
                                <div className="mt-auto space-y-1">
                                    {[1, 2].map(i => (
                                        <div key={i} className="flex items-center gap-2 px-3 py-2">
                                            <div className="w-3 h-3 rounded-full bg-white/20" />
                                            <div className="h-2 w-10 bg-white/30 rounded" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Main content */}
                            <div className="flex-1 p-6 overflow-hidden">
                                {/* Header row */}
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <div className="h-3 w-32 bg-[#0f2a44]/20 rounded mb-2" />
                                        <div className="h-2 w-20 bg-[#64748b]/20 rounded" />
                                    </div>
                                    <div className="h-8 w-28 rounded-full bg-[#0f2a44] opacity-80" />
                                </div>
                                {/* Stats row */}
                                <div className="grid grid-cols-3 gap-3 mb-6">
                                    {['#c9a227', '#0f2a44', '#16a34a'].map((color, i) => (
                                        <div key={i} className="bg-white rounded-xl p-4 border border-[#e2e8f0] shadow-sm">
                                            <div className="h-2 w-10 rounded mb-2" style={{ background: color + '40' }} />
                                            <div className="h-5 w-12 rounded font-bold" style={{ background: color + '30' }} />
                                        </div>
                                    ))}
                                </div>
                                {/* Table rows */}
                                <div className="bg-white rounded-xl border border-[#e2e8f0] overflow-hidden shadow-sm">
                                    <div className="flex gap-4 px-4 py-2.5 bg-[#f8fafc] border-b border-[#e2e8f0]">
                                        {[40, 20, 16, 12].map((w, i) => (
                                            <div key={i} className="h-2 rounded bg-[#94a3b8]/40" style={{ width: `${w}%` }} />
                                        ))}
                                    </div>
                                    {[1, 2, 3, 4].map(row => (
                                        <div key={row} className="flex gap-4 px-4 py-3 border-b border-[#e2e8f0] last:border-0">
                                            <div className="h-2.5 rounded bg-[#0f2a44]/15" style={{ width: '38%' }} />
                                            <div className="h-2.5 rounded bg-[#64748b]/20" style={{ width: '18%' }} />
                                            <div className="h-2.5 rounded" style={{ width: '14%', background: row % 2 === 0 ? '#c9a22740' : '#16a34a40' }} />
                                            <div className="h-2.5 rounded bg-[#94a3b8]/20" style={{ width: '10%' }} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating card decorations */}
                    <div className="absolute -top-4 -right-6 lg:-right-12 bg-white rounded-2xl shadow-lg border border-[#e2e8f0] px-4 py-3 hidden lg:flex items-center gap-3 hero-fade-up" style={{ animationDelay: '400ms' }}>
                        <div className="w-8 h-8 rounded-full bg-[#c9a227]/15 flex items-center justify-center">
                            <Shield size={16} className="text-[#c9a227]" />
                        </div>
                        <div>
                            <div className="text-xs font-bold text-[#0f2a44]">Campus-Only Access</div>
                            <div className="text-[10px] text-[#64748b]">Role-based security</div>
                        </div>
                    </div>

                    <div className="absolute -bottom-4 -left-6 lg:-left-12 bg-white rounded-2xl shadow-lg border border-[#e2e8f0] px-4 py-3 hidden lg:flex items-center gap-3 hero-fade-up" style={{ animationDelay: '500ms' }}>
                        <div className="w-8 h-8 rounded-full bg-[#0f2a44]/10 flex items-center justify-center">
                            <BookOpen size={16} className="text-[#0f2a44]" />
                        </div>
                        <div>
                            <div className="text-xs font-bold text-[#0f2a44]">Full-Text Search</div>
                            <div className="text-[10px] text-[#64748b]">GIN/TSVECTOR indexed</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}