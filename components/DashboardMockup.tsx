'use client';

import { BookOpen, Search, Shield, MousePointer2 } from 'lucide-react';

export function DashboardMockup() {
    return (
        <div className="w-full max-w-5xl mx-auto relative hero-fade-up" style={{ animationDelay: '260ms' }}>
            {/* Animated Mouse Cursor (Complex pathing to match UI clicks) */}
            <div className="absolute z-50 pointer-events-none transition-opacity duration-300
                animate-[cursorMove_8s_ease-in-out_infinite]">
                <MousePointer2 className="w-6 h-6 text-slate-800 drop-shadow-md stroke-[1.5]" />
            </div>

            {/* Browser chrome */}
            <div className="rounded-t-2xl overflow-hidden shadow-[0_-4px_40px_rgba(15,42,68,0.12),0_30px_80px_rgba(15,42,68,0.10)] border border-b-0 border-[#e2e8f0] bg-white transition-all duration-700">
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[#f1f5f9] border-b border-[#e2e8f0]">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-[#fecaca] transition-colors" />
                        <div className="w-3 h-3 rounded-full bg-[#fef08a] transition-colors" />
                        <div className="w-3 h-3 rounded-full bg-[#bbf7d0] transition-colors" />
                    </div>
                    <div className="flex-1 mx-4 h-6 rounded-md bg-white border border-[#e2e8f0] flex items-center px-3 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-[shimmer_4s_infinite]" />
                        <span className="text-[10px] text-[#94a3b8]">kinaadman.edu/repository</span>
                    </div>
                </div>

                {/* Dashboard inner content */}
                <div className="flex h-72 sm:h-96 bg-[#f8fafc]">
                    {/* Sidebar */}
                    <div className="w-52 shrink-0 bg-[#0f2a44] p-4 hidden sm:flex flex-col gap-2 relative overflow-hidden">
                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 mb-2">
                            <div className="w-5 h-5 rounded bg-[#c9a227]/80" />
                            <div className="h-2.5 w-20 bg-white/60 rounded" />
                        </div>
                        {[BookOpen, Search, Shield].map((Icon, i) => (
                            <div key={i} className={`flex items-center gap-2 px-3 py-2 rounded-lg ${i === 0 ? 'bg-white/20 relative' : 'bg-transparent'} transition-colors
                                ${i === 1 ? 'animate-[buttonClick_8s_ease-in-out_infinite]' : ''}`}
                                style={{ animationDelay: i === 1 ? '3.5s' : '0s' }}>
                                <Icon size={14} className="text-white transition-colors" />
                                <div className={`h-2 rounded transition-all duration-300 ${i === 0 ? 'w-16 bg-white/80' : 'w-12 bg-white/60'}`} />
                                {i === 0 && <div className="absolute right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#c9a227] animate-[pulseContent_2s_ease-in-out_infinite]" />}
                            </div>
                        ))}
                        <div className="mt-auto space-y-1">
                            {[1, 2].map(i => (
                                <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors">
                                    <div className="w-3 h-3 rounded-full bg-white/20" />
                                    <div className="h-2 w-10 bg-white/30 rounded" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Main content */}
                    <div className="flex-1 p-6 overflow-hidden relative">
                        {/* Header row */}
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <div className="h-3 w-32 bg-[#0f2a44]/20 rounded mb-2 animate-[skeletonLoad_8s_ease-in-out_infinite]" />
                                <div className="h-2 w-20 bg-[#64748b]/20 rounded delay-100" />
                            </div>
                            {/* CTA Button with synthetic click interaction */}
                            <div className="h-8 w-28 rounded-full bg-[#0f2a44] transition-opacity flex items-center justify-center relative overflow-hidden animate-[buttonClick_8s_ease-in-out_infinite]" style={{ animationDelay: '1.5s' }}>
                                <div className="absolute inset-0 bg-white/20 -translate-x-full animate-[shimmer_8s_infinite]" style={{ animationDelay: '1.5s' }} />
                                <div className="h-2 w-12 bg-white/80 rounded" />
                            </div>
                        </div>

                        {/* Stats row */}
                        <div className="grid grid-cols-3 gap-3 mb-6">
                            {['#c9a227', '#0f2a44', '#16a34a'].map((color, i) => (
                                <div key={i} className="bg-white rounded-xl p-4 border border-[#e2e8f0] shadow-sm animate-[skeletonLoad_8s_ease-in-out_infinite] origin-left"
                                    style={{ animationDelay: `${i * 200 + 400}ms` }}>
                                    <div className="h-2 w-10 rounded mb-2" style={{ background: color + '40' }} />
                                    <div className="flex items-end gap-2">
                                        <div className="h-5 w-12 rounded font-bold" style={{ background: color + '30' }} />
                                        <div className="h-3 w-6 rounded animate-[pulseContent_2s_ease-in-out_infinite]" style={{ background: color + '20' }} />
                                    </div>
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
                            {/* Animated sequence rows */}
                            <div className="relative">
                                {[1, 2, 3, 4].map((row, idx) => (
                                    <div key={row}
                                        className="flex gap-4 px-4 py-3 border-b border-[#e2e8f0] last:border-0 transition-colors"
                                        style={{
                                            animation: `rowSlideUp 8s ease-in-out infinite`,
                                            animationDelay: `${idx * 150 + 800}ms`,
                                            opacity: 0
                                        }}>
                                        <div className="h-2.5 rounded bg-[#0f2a44]/15" style={{ width: '38%' }} />
                                        <div className="h-2.5 rounded bg-[#64748b]/20" style={{ width: '18%' }} />
                                        <div className="h-2.5 rounded relative overflow-hidden" style={{ width: '14%', background: row % 2 === 0 ? '#c9a22740' : '#16a34a40' }}>
                                            <div className="absolute inset-0 bg-white/40 -translate-x-full animate-[shimmer_2s_infinite]" style={{ animationDelay: `${idx * 300}ms` }} />
                                        </div>
                                        <div className="h-2.5 rounded bg-[#94a3b8]/20" style={{ width: '10%' }} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Notification slides (Interaction simulated popups) */}
            <div className="absolute -top-4 -right-6 lg:-right-12 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-[#e2e8f0] px-4 py-3 hidden lg:flex items-center gap-3 animate-[notificationSlide_8s_ease-in-out_infinite] opacity-0" style={{ animationDelay: '4.5s' }}>
                <div className="w-8 h-8 rounded-full bg-[#c9a227]/15 flex items-center justify-center relative">
                    <div className="absolute inset-0 rounded-full border border-[#c9a227]/30 animate-ping" style={{ animationDuration: '2s' }} />
                    <Shield size={16} className="text-[#c9a227]" />
                </div>
                <div>
                    <div className="text-xs font-bold text-[#0f2a44]">Access Granted</div>
                    <div className="text-[10px] text-[#64748b]">Campus IP Verified</div>
                </div>
            </div>

            <div className="absolute -bottom-4 -left-6 lg:-left-12 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-[#e2e8f0] px-4 py-3 hidden lg:flex items-center gap-3 animate-[notificationSlide_8s_ease-in-out_infinite] opacity-0" style={{ animationDelay: '2s' }}>
                <div className="w-8 h-8 rounded-full bg-[#0f2a44]/10 flex items-center justify-center">
                    <Search size={16} className="text-[#0f2a44]" />
                </div>
                <div>
                    <div className="text-xs font-bold text-[#0f2a44]">Search Completed</div>
                    <div className="text-[10px] text-[#64748b]">Found 1,240 records</div>
                </div>
            </div>

        </div>
    );
}
