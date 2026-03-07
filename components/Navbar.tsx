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
            <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-6 pointer-events-none">
                <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">

                    {/* Floating Logo Pill (Left) */}
                    <Link href="/" className={`
                        flex items-center gap-2.5 shrink-0 group px-3 py-2 rounded-full transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.06)] 
                        ${scrolled
                            ? 'bg-white/80 backdrop-blur-xl border border-white/50'
                            : 'bg-white border border-[#e2e8f0]/40'}
                    `}>
                        <div className="w-7 h-7 rounded-full overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                            <Image src="/icon-light.png" alt="Kinaadman Logo" width={28} height={28} className="object-cover" />
                        </div>
                        <span className="font-serif text-lg font-bold text-[#0f2a44] tracking-tight pr-2">
                            Kinaadman
                        </span>
                    </Link>

                    {/* Floating Pill Nav (Center/Right) */}
                    <div className={`
                        flex items-center gap-1 md:gap-2 px-2 py-1.5 rounded-full transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.06)] 
                        ${scrolled
                            ? 'bg-white/80 backdrop-blur-xl border border-white/50'
                            : 'bg-white border border-[#e2e8f0]/40'}
                    `}>
                        <nav className="hidden md:flex items-center">
                            <Link href="#solution" className="px-5 py-2.5 text-sm font-medium text-[#475569] hover:text-[#0f2a44] transition-all rounded-full hover:bg-slate-100/80">
                                Solution
                            </Link>
                            <Link href="#features" className="px-5 py-2.5 text-sm font-medium text-[#475569] hover:text-[#0f2a44] transition-all rounded-full hover:bg-slate-100/80">
                                Features
                            </Link>
                            <Link href="#comparison" className="px-5 py-2.5 text-sm font-medium text-[#475569] hover:text-[#0f2a44] transition-all rounded-full hover:bg-slate-100/80">
                                Who it&apos;s for
                            </Link>

                            <div className="w-px h-6 bg-[#e2e8f0] mx-2" />

                            <button className="px-6 py-2.5 ml-1 text-sm font-semibold text-white bg-[#0f2a44] rounded-full hover:bg-[#1e3a5f] hover:shadow-lg hover:-translate-y-0.5 transition-all">
                                Request Demo
                            </button>
                        </nav>

                        {/* Mobile Toggle inside pill */}
                        <button
                            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 text-[#0f2a44] hover:bg-slate-100 transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-md pt-32 pb-8 flex flex-col transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col gap-4 px-8 flex-1">
                    {['Solution', 'Features', 'Who it\'s for'].map((item, i) => (
                        <Link
                            key={i}
                            href={`#${item.toLowerCase().replace(/[^a-z]/g, '')}`}
                            className="py-4 text-3xl font-serif font-medium text-[#0f2a44] border-b border-[#e2e8f0]/50 hover:pl-4 transition-all"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                    <div className="mt-8">
                        <button className="w-full py-5 text-lg font-semibold text-white bg-[#0f2a44] rounded-2xl shadow-xl hover:bg-[#1e3a5f] transition-all">
                            Request Demo
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
