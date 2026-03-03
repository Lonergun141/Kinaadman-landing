'use client'

import { ArrowRight, BookOpen, Shield, Search } from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'

export function CTA() {
    return (
        <section className="relative bg-[#f8fafc] py-32 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full opacity-60"
                    style={{ background: 'radial-gradient(ellipse, rgba(201,162,39,0.08) 0%, transparent 70%)' }} />
                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-40"
                    style={{ background: 'radial-gradient(circle, rgba(15,42,68,0.06) 0%, transparent 70%)' }} />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
                <ScrollReveal variant="up">
                    <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#c9a227] mb-6">
                        Get Started
                    </span>
                    <h2 className="font-serif font-bold text-[#0f2a44] leading-[1.05] mb-6 max-w-3xl mx-auto"
                        style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
                        Ready to secure your institution&apos;s research legacy?
                    </h2>
                    <p className="text-[#64748b] text-lg mb-12 max-w-xl mx-auto leading-relaxed">
                        Bring your university&apos;s research into a single, secure, and structured home — built specifically for how academic institutions work.
                    </p>
                </ScrollReveal>

                <ScrollReveal variant="up" delay={200}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                        <button className="flex items-center gap-3 px-8 py-4 bg-[#0f2a44] text-white text-sm font-semibold rounded-full hover:bg-[#1e3a5f] transition-all shadow-md hover:shadow-xl group">
                            Request a Demo
                            <span className="w-8 h-8 rounded-full bg-[#c9a227] flex items-center justify-center text-[#0f2a44] group-hover:bg-[#d4b039] transition-colors">
                                <ArrowRight size={16} strokeWidth={2.5} />
                            </span>
                        </button>
                        <button className="px-8 py-4 text-sm font-semibold text-[#0f2a44] bg-white border border-[#e2e8f0] rounded-full hover:border-[#0f2a44]/30 transition-all shadow-sm">
                            Contact Sales
                        </button>
                    </div>
                </ScrollReveal>

                {/* Dashboard Preview */}
                <ScrollReveal variant="scale" delay={300}>
                    <div className="w-full max-w-4xl mx-auto">
                        <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(15,42,68,0.12)] border border-[#e2e8f0] bg-white">
                            <div className="flex items-center gap-2 px-4 py-3 bg-[#f1f5f9] border-b border-[#e2e8f0]">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-[#fecaca]" />
                                    <div className="w-3 h-3 rounded-full bg-[#fef08a]" />
                                    <div className="w-3 h-3 rounded-full bg-[#bbf7d0]" />
                                </div>
                                <div className="flex-1 mx-4 h-6 rounded-md bg-white border border-[#e2e8f0] flex items-center px-3">
                                    <span className="text-[10px] text-[#94a3b8]">kinaadman.edu/admin</span>
                                </div>
                            </div>
                            <div className="flex h-56 sm:h-72 bg-[#f8fafc]">
                                <div className="w-44 shrink-0 bg-[#0f2a44] p-4 hidden sm:flex flex-col gap-3">
                                    <div className="h-7 w-24 rounded-lg bg-white/10 mb-2" />
                                    {[BookOpen, Search, Shield].map((Icon, i) => (
                                        <div key={i} className={`flex items-center gap-2 px-2 py-2 rounded-lg ${i === 1 ? 'bg-[#c9a227]/20' : ''}`}>
                                            <Icon size={13} className={i === 1 ? 'text-[#c9a227]' : 'text-white/40'} />
                                            <div className="h-2 rounded bg-white/30" style={{ width: i === 1 ? '60%' : '45%' }} />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex-1 p-6 space-y-4">
                                    <div className="flex gap-3 mb-4">
                                        {['#c9a227', '#0f2a44', '#16a34a'].map((c, i) => (
                                            <div key={i} className="flex-1 bg-white rounded-xl p-3.5 border border-[#e2e8f0] shadow-sm space-y-2">
                                                <div className="h-1.5 w-12 rounded" style={{ background: c + '50' }} />
                                                <div className="h-4 w-10 rounded" style={{ background: c + '30' }} />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="bg-white rounded-xl border border-[#e2e8f0] overflow-hidden shadow-sm">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="flex gap-4 px-4 py-3 border-b border-[#f1f5f9] last:border-0 items-center">
                                                <div className="w-8 h-8 rounded-full bg-[#0f2a44]/10 shrink-0" />
                                                <div className="flex-1 space-y-1.5">
                                                    <div className="h-2 rounded bg-[#0f2a44]/15" style={{ width: `${55 + i * 10}%` }} />
                                                    <div className="h-1.5 rounded bg-[#94a3b8]/30" style={{ width: `${35 + i * 5}%` }} />
                                                </div>
                                                <div className="h-6 w-16 rounded-full shrink-0" style={{ background: i === 1 ? '#c9a22720' : '#0f2a4415' }} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
