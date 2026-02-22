'use client'

import { ArrowRight } from 'lucide-react'

export function CTA() {
    return (
        <section className="bg-foreground text-background py-24 border-t border-border/20">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                <h2 className="text-white text-4xl lg:text-5xl font-serif font-bold mb-6">
                    Ready to secure your institution's research?
                </h2>
                <p className="text-lg text-background/80 mb-10 max-w-2xl mx-auto font-light">
                    Join academic institutions already managing their research workflows and archiving their intellectual assets with Kinaadman.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground font-medium rounded hover:opacity-90 transition-all group">
                        Request Demo
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </button>
                    <button className="inline-flex items-center justify-center px-8 py-4 border border-background/20 text-background font-medium rounded hover:bg-background/10 transition-all">
                        Contact Sales
                    </button>
                </div>
            </div>
        </section>
    )
}
