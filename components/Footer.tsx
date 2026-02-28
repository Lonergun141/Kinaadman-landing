'use client'

import Link from 'next/link'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'

export function Footer() {
    return (
        <footer className="bg-[#f8fafc] border-t border-[#e2e8f0] overflow-hidden">
            {/* Top link row */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
                <div className="flex flex-col md:flex-row justify-between gap-10">
                    {/* Brand */}
                    <ScrollReveal variant="left">
                        <div className="max-w-xs">
                            <span className="font-serif text-xl font-bold text-[#0f2a44]">Kinaadman</span>
                            <p className="text-[#64748b] text-sm leading-relaxed mt-3">
                                Secure, institutional research management platform exclusively designed for colleges and universities.
                            </p>
                            <div className="flex gap-3 mt-5">
                                {[
                                    { Icon: Twitter, href: '#' },
                                    { Icon: Github, href: '#' },
                                    { Icon: Linkedin, href: '#' },
                                    { Icon: Mail, href: '#' },
                                ].map(({ Icon, href }, i) => (
                                    <Link key={i} href={href} className="w-8 h-8 rounded-full bg-[#0f2a44]/5 flex items-center justify-center text-[#475569] hover:bg-[#0f2a44] hover:text-white transition-all">
                                        <Icon size={14} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Links */}
                    <ScrollReveal variant="right" delay={200}>
                        <div className="flex flex-wrap gap-12">
                            {[
                                { heading: 'Product', links: ['Features', 'Pricing', 'Security', 'API Docs'] },
                                { heading: 'Company', links: ['About', 'Blog', 'Careers', 'Contact'] },
                                { heading: 'Legal', links: ['Privacy', 'Terms', 'GDPR', 'Accessibility'] },
                            ].map((col) => (
                                <div key={col.heading}>
                                    <h4 className="font-semibold text-sm text-[#0f2a44] mb-4 tracking-wide">{col.heading}</h4>
                                    <ul className="space-y-2.5">
                                        {col.links.map((link) => (
                                            <li key={link}>
                                                <Link href="#" className="text-sm text-[#64748b] hover:text-[#c9a227] transition-colors">
                                                    {link}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            {/* Oversized wordmark */}
            <div className="w-full overflow-hidden border-t border-[#e2e8f0] select-none">
                <div className="px-4 pt-6 pb-0">
                    <span
                        className="block font-serif font-bold text-[#0f2a44]/[0.05] leading-none whitespace-nowrap tracking-tight"
                        style={{ fontSize: 'clamp(5rem, 14vw, 14rem)' }}
                        aria-hidden="true"
                    >
                        Kinaadman
                    </span>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-[#e2e8f0] bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#94a3b8]">
                    <span>© {new Date().getFullYear()} Kinaadman. All rights reserved.</span>
                    <div className="flex items-center gap-5">
                        {['Status', 'Changelog', 'Support'].map((item) => (
                            <Link key={item} href="#" className="hover:text-[#c9a227] transition-colors">
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
