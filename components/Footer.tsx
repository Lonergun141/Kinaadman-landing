'use client'

import Image from 'next/image'
import { ScrollReveal } from './ScrollReveal'

export function Footer() {
    return (
        <footer className="bg-[#f8fafc] border-t border-[#e2e8f0] overflow-hidden flex flex-col mt-auto">
            {/* Expanded Footer Content */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-12 w-full">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <ScrollReveal variant="up">
                            <div className="flex items-center gap-4 mb-4">
                                <Image src="/icon-light.png" alt="Kinaadman Logo" width={44} height={44} className="object-contain" />
                                <h2 className="font-serif text-3xl font-bold text-[#0f2a44] leading-none mt-1">Kinaadman</h2>
                            </div>
                            <p className="text-[#64748b] text-sm tracking-wide font-light max-w-sm leading-relaxed mb-6">
                                The centralized digital repository for academic research. Where no research gets lost. Built securely with multi-tenant architecture for universities and institutions.
                            </p>
                        </ScrollReveal>
                    </div>

                    {/* Capabilities */}
                    <div className="col-span-1">
                        <ScrollReveal variant="up" delay={100}>
                            <h3 className="font-bold text-[#0f2a44] uppercase tracking-wider text-xs mb-4">Capabilities</h3>
                            <ul className="space-y-3">
                                <li><a href="#features" className="text-[#64748b] hover:text-[#c9a227] text-sm transition-colors">Multi-Tenant Architecture</a></li>
                                <li><a href="#features" className="text-[#64748b] hover:text-[#c9a227] text-sm transition-colors">Advanced Search</a></li>
                                <li><a href="#features" className="text-[#64748b] hover:text-[#c9a227] text-sm transition-colors">Approval Workflows</a></li>
                                <li><a href="#features" className="text-[#64748b] hover:text-[#c9a227] text-sm transition-colors">Secure Preservation</a></li>
                            </ul>
                        </ScrollReveal>
                    </div>

                    {/* Resources */}
                    <div className="col-span-1">
                        <ScrollReveal variant="up" delay={200}>
                            <h3 className="font-bold text-[#0f2a44] uppercase tracking-wider text-xs mb-4">Resources</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-[#64748b] hover:text-[#c9a227] text-sm transition-colors">Documentation</a></li>
                                <li><a href="#" className="text-[#64748b] hover:text-[#c9a227] text-sm transition-colors">API Reference</a></li>
                                <li><a href="mailto:contact@kinaadman.app" className="text-[#64748b] hover:text-[#c9a227] text-sm transition-colors">Contact Support</a></li>
                                <li><a href="#" className="text-[#64748b] hover:text-[#c9a227] text-sm transition-colors">Terms of Service</a></li>
                            </ul>
                        </ScrollReveal>
                    </div>
                </div>
            </div>

            {/* Oversized wordmark */}
            <div className="w-full overflow-hidden select-none flex justify-center">
                <div className="px-4 pb-2">
                    <span
                        className="block font-serif font-bold text-[#0f2a44]/[0.04] leading-none whitespace-nowrap tracking-tighter"
                        style={{ fontSize: 'clamp(5rem, 18vw, 18rem)' }}
                        aria-hidden="true"
                    >
                        Kinaadman
                    </span>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="bg-white border-t border-[#e2e8f0]">
                <div className="max-w-7xl mx-auto px-6 py-6 flex justify-center text-[11px] uppercase tracking-wider text-[#94a3b8]">
                    <span>© {new Date().getFullYear()} Kinaadman. All rights reserved.</span>
                </div>
            </div>
        </footer>
    )
}
