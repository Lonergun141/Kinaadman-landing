'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                        ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-[#e2e8f0]/60'
                        : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center h-16 lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 shrink-0">
                        <Image src="/icon-light.png" alt="Kinaadman Logo" width={28} height={28} className="object-contain" />
                        <span className="font-serif text-lg font-bold text-[#0f2a44] tracking-tight">Kinaadman</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        <Link href="#solution" className="px-4 py-2 text-sm font-medium text-[#475569] hover:text-[#0f2a44] transition-colors rounded-full hover:bg-[#0f2a44]/5">
                            Solution
                        </Link>
                        <Link href="#features" className="px-4 py-2 text-sm font-medium text-[#475569] hover:text-[#0f2a44] transition-colors rounded-full hover:bg-[#0f2a44]/5">
                            Features
                        </Link>
                        <Link href="#comparison" className="px-4 py-2 text-sm font-medium text-[#475569] hover:text-[#0f2a44] transition-colors rounded-full hover:bg-[#0f2a44]/5">
                            Who it&apos;s for
                        </Link>
                        <div className="w-px h-5 bg-[#e2e8f0] mx-2" />
                        <button className="px-5 py-2.5 text-sm font-semibold text-white bg-[#0f2a44] rounded-full hover:bg-[#1e3a5f] transition-all shadow-sm hover:shadow-md">
                            Request Demo
                        </button>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#0f2a44]/5 text-[#0f2a44]"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="fixed inset-0 z-40 bg-white pt-20 pb-8 flex flex-col">
                    <div className="flex flex-col gap-2 px-6 flex-1">
                        {['Solution', 'Features', 'Who it\'s for'].map((item, i) => (
                            <Link
                                key={i}
                                href={`#${item.toLowerCase().replace(/[^a-z]/g, '')}`}
                                className="py-4 text-2xl font-serif font-medium text-[#0f2a44] border-b border-[#e2e8f0]"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                        <div className="mt-auto pt-8">
                            <button className="w-full py-4 text-base font-semibold text-white bg-[#0f2a44] rounded-full">
                                Request Demo
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
