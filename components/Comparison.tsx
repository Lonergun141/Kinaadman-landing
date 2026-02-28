'use client'

import { useState } from 'react'
import { BookOpen, Users, Settings, ChevronDown } from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'

const personas = [
    {
        icon: BookOpen,
        role: 'For Librarians',
        tagline: 'Govern the collection with precision.',
        description: 'Kinaadman gives librarians complete control over the institutional archive — from approving submissions to managing metadata standards and ensuring long-term preservation.',
        benefits: [
            'Final approval authority over all published research',
            'Metadata curation & standardization tools',
            'Full audit trail for every document action',
            'S3-backed preservation with disaster recovery',
        ],
    },
    {
        icon: Users,
        role: 'For Faculty & Advisers',
        tagline: 'Guide student research from draft to archive.',
        description: 'Faculty and advisers have a dedicated workspace to review student submissions, leave structured feedback, and track thesis progress end-to-end.',
        benefits: [
            'Structured review queue for assigned students',
            'Structured feedback and change requests per submission',
            'Adviser review decisions with comment and decision tracking',
            'Access to all theses within your campus scope',
        ],
    },
    {
        icon: Settings,
        role: 'For Administrators',
        tagline: 'Own your institution\'s knowledge infrastructure.',
        description: 'University IT and academic administrators get a powerful tenant control plane: manage users, configure policies, and monitor platform health across the entire campus.',
        benefits: [
            'Multi-department tenant management',
            'Role and permission configuration',
            'Audit log access for all tenant activity',
            'Invite-based user onboarding with email domain scoping',
        ],
    },
]

export function Comparison() {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <section id="comparison" className="py-28 bg-[#0f2a44] relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(201,162,39,0.08) 0%, transparent 70%)' }} />

            <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Header */}
                <ScrollReveal variant="up" className="text-center mb-16">
                    <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#c9a227] mb-4">
                        Who it&apos;s for
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                        Built for every role<br />in the institution.
                    </h2>
                    <p className="text-[#94a3b8] max-w-xl mx-auto">
                        Kinaadman adapts to how your campus works — from the student submitting their first draft to the administrator overseeing the entire archive.
                    </p>
                </ScrollReveal>

                {/* Accordion Cards */}
                <div className="space-y-3">
                    {personas.map((persona, index) => {
                        const Icon = persona.icon
                        const isActive = activeIndex === index
                        return (
                            <ScrollReveal key={index} variant="up" delay={[0, 100, 200][index] as 0 | 100 | 200}>
                                <div
                                    className={`rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${isActive
                                        ? 'bg-white border-white/10 shadow-xl'
                                        : 'bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20'
                                        }`}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <div className="flex items-center justify-between px-6 py-5 gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${isActive ? 'bg-[#0f2a44]' : 'bg-white/10'}`}>
                                                <Icon size={18} className={isActive ? 'text-[#c9a227]' : 'text-white/60'} />
                                            </div>
                                            <div>
                                                <div className={`font-serif font-bold text-lg transition-colors ${isActive ? 'text-[#0f2a44]' : 'text-white'}`}>
                                                    {persona.role}
                                                </div>
                                                <div className={`text-sm transition-colors ${isActive ? 'text-[#64748b]' : 'text-white/40'}`}>
                                                    {persona.tagline}
                                                </div>
                                            </div>
                                        </div>
                                        <ChevronDown size={18} className={`shrink-0 transition-all duration-300 ${isActive ? 'rotate-180 text-[#0f2a44]' : 'text-white/40'}`} />
                                    </div>

                                    <div className={`transition-all duration-300 ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                                        <div className="px-6 pb-6 pt-0 border-t border-[#e2e8f0]">
                                            <p className="text-[#475569] text-sm leading-relaxed mt-4 mb-5">{persona.description}</p>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {persona.benefits.map((benefit, i) => (
                                                    <div key={i} className="flex items-start gap-2.5">
                                                        <span className="w-5 h-5 rounded-full bg-[#c9a227]/15 flex items-center justify-center shrink-0 mt-0.5">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a227]" />
                                                        </span>
                                                        <span className="text-sm text-[#334155]">{benefit}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
