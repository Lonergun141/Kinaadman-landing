'use client'

import { ScrollReveal } from './ScrollReveal'

export function ValueProposition() {
    const values = [
        {
            number: '01',
            stat: '100%',
            statLabel: 'Institutional',
            title: 'Centralized Control',
            description: 'Single platform for managing all institutional research. No fragmented systems or external dependencies.',
            highlight: 'Institutional ownership',
            color: '#c9a227',
        },
        {
            number: '02',
            stat: '0',
            statLabel: 'External Exposure',
            title: 'Complete Security',
            description: 'Campus-only access with role-based permissions, full audit trails, and secure S3-backed file storage.',
            highlight: 'Your data stays inside',
            color: '#0f2a44',
        },
        {
            number: '03',
            stat: '4+',
            statLabel: 'Workflow Stages',
            title: 'Academic Workflow',
            description: 'Built specifically for universities. Review processes, publication workflows, and institutional standards baked in.',
            highlight: 'Made for academia',
            color: '#c9a227',
        },
        {
            number: '04',
            stat: '∞',
            statLabel: 'Year Archival',
            title: 'Permanent Preservation',
            description: 'Long-term archival using S3-compatible object storage with structured metadata and access-controlled file retrieval.',
            highlight: 'Forever safeguarded',
            color: '#0f2a44',
        },
    ]

    return (
        <section id="solution" className="bg-[#0f2a44] py-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <ScrollReveal variant="left">
                        <div>
                            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#c9a227] mb-4">
                                Why Kinaadman
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                                Built on institutional<br />principles.
                            </h2>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal variant="right" delay={200}>
                        <p className="text-[#94a3b8] text-base max-w-xs leading-relaxed md:text-right">
                            Every feature is designed around the real needs of academic institutions.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {values.map((value, index) => (
                        <ScrollReveal key={index} variant="up" delay={[0, 100, 200, 300][index] as 0 | 100 | 200 | 300}>
                            <div className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-7 transition-all duration-300 cursor-pointer overflow-hidden h-full">
                                {/* Background glow on hover */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                                    style={{ background: `radial-gradient(circle at 30% 30%, ${value.color}15, transparent 70%)` }}
                                />

                                <span className="text-xs font-bold tracking-widest text-white/30 mb-4 block">{value.number}</span>

                                <div className="mb-6">
                                    <div className="font-serif font-bold text-5xl leading-none" style={{ color: value.color }}>
                                        {value.stat}
                                    </div>
                                    <div className="text-xs font-medium text-white/50 mt-1 tracking-wide">{value.statLabel}</div>
                                </div>

                                <h3 className="text-white font-serif font-bold text-lg mb-3 leading-snug group-hover:text-[#c9a227] transition-colors">
                                    {value.title}
                                </h3>

                                <p className="text-white/50 text-sm leading-relaxed mb-4">
                                    {value.description}
                                </p>

                                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white/60">
                                    {value.highlight}
                                </span>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
