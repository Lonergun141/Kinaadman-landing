"use client";

import { DashboardMockup } from './DashboardMockup';

export function Hero() {
    return (
        <section className="relative w-full overflow-hidden bg-[#f8fafc] flex flex-col" style={{ minHeight: '100svh' }}>
            {/* Matte dot pattern background */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-50" />

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
                        A secure, <strong className="font-semibold text-[#0f2a44]">low-cost</strong> digital repository designed for universities to easily publish,
                        discover, and archive academic research with uncompromising structure.
                    </p>
                </div>

                {/* Animated Dashboard Mockup */}
                <DashboardMockup />
            </div>
        </section>
    );
}