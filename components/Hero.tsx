"use client";

import { ArrowRight } from "lucide-react";
import { KinaadmanMeshBackground } from "./KinaadmanMeshBackground";

export function Hero() {
    return (
        <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-white pt-32 pb-12">
            {/* Background stays white, mesh remains blue/gold */}
            <KinaadmanMeshBackground forceLight animationSpeed={90} />

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 w-full flex-1 flex flex-col justify-between">
                {/* Top Section: Massive Title */}
                <div className="max-w-5xl mt-12 sm:mt-24 lg:mt-32 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    {/* Optional micro-panel for extra clarity if the mesh gets “busy” */}
                    <div className="inline-block">
                        <h1 className="text-[3rem] sm:text-[1.5rem] lg:text-[4.5rem] font-serif font-medium text-[#0F2A44] leading-[1.05] tracking-tight">
                            Elevate institutional knowledge.
                            <br />
                            Preserve academic legacy.
                        </h1>
                    </div>
                </div>

                {/* Bottom Section: Description & CTA */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 pb-4 sm:pb-8 animate-in fade-in duration-1000 delay-300">
                    <div className="max-w-2xl">
                        <div>
                            <p className="text-md text-[#334155] leading-snug font-normal">
                                A centralized digital repository designed for universities to securely publish,
                                discover, and archive thesis and capstone research with uncompromising structure.
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="shrink-0 flex items-center gap-4 bg-[#0F2A44] p-1.5 rounded-full border border-black/10 hover:bg-[#1E3A5F] transition-colors cursor-pointer group shadow-lg"
                    >
                        <span className="pl-6 pr-2 py-2 text-sm font-bold tracking-wider text-white uppercase">
                            Try our Platform
                        </span>
                        <span className="w-12 h-12 rounded-full bg-[#C9A227] flex items-center justify-center text-[#0F2A44] group-hover:bg-[#d4b039] transition-colors shadow-[0_0_15px_rgba(201,162,39,0.3)] group-hover:shadow-[0_0_20px_rgba(201,162,39,0.5)]">
                            <ArrowRight size={22} strokeWidth={2.5} />
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}