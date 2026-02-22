'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 pt-6 px-6 lg:px-12">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex justify-between items-start">
                        {/* Logo - On the left */}
                        <div className="flex items-center gap-3 bg-[#f4f4f2] px-5 py-2.5 rounded-full">
                            <Image src="/icon-light.png" alt="Kinaadman Logo" width={32} height={32} className="object-contain" />
                            <span className="font-sans text-xl font-bold text-[#1e2329] tracking-tight">Kinaadman</span>
                        </div>

                        {/* Desktop Navigation Pill - On the right */}
                        <div className="hidden md:flex items-center gap-2 bg-[#f4f4f2] p-1.5 rounded-full">
                            <div className="flex items-center gap-6 px-6">
                                <Link href="#solution" className="text-[11px] font-bold tracking-widest uppercase text-[#1e2329] hover:text-black transition-colors">
                                    Solution
                                </Link>
                                <Link href="#features" className="text-[11px] font-bold tracking-widest uppercase text-[#1e2329] hover:text-black transition-colors">
                                    Features
                                </Link>
                                <Link href="#comparison" className="text-[11px] font-bold tracking-widest uppercase text-[#1e2329] hover:text-black transition-colors">
                                    Why Kinaadman
                                </Link>
                            </div>

                            {/* CTA Button Inside Pill */}
                            <button className="px-6 py-3 text-[11px] font-bold tracking-widest uppercase bg-[#1e2329] text-white rounded-full hover:bg-black transition-all">
                                Request Demo
                            </button>
                        </div>

                        {/* Mobile Menu Toggle Button */}
                        <button
                            className="md:hidden flex items-center justify-center p-3 text-white bg-black/20 backdrop-blur-md rounded-full border border-white/10"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-40 bg-zinc-900 pt-32 pb-6">
                    <div className="space-y-8 px-8 h-full flex flex-col justify-start">
                        <Link href="#solution" className="block text-4xl font-sans font-medium text-white hover:text-white/70 transition-colors" onClick={() => setIsOpen(false)}>
                            Solution
                        </Link>
                        <Link href="#features" className="block text-4xl font-sans font-medium text-white hover:text-white/70 transition-colors" onClick={() => setIsOpen(false)}>
                            Features
                        </Link>
                        <Link href="#comparison" className="block text-4xl font-sans font-medium text-white hover:text-white/70 transition-colors" onClick={() => setIsOpen(false)}>
                            Why Kinaadman
                        </Link>
                        <div className="pt-12 mt-auto mb-10 w-full">
                            <button className="w-full px-6 py-5 text-sm font-bold tracking-widest uppercase bg-white text-black rounded-full hover:opacity-90 transition-all">
                                Request Demo
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
