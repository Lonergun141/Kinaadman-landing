'use client'

import { useEffect, useRef } from 'react'

interface ScrollRevealProps {
    children: React.ReactNode
    className?: string
    variant?: 'up' | 'left' | 'right' | 'scale'
    delay?: 0 | 100 | 200 | 300 | 400 | 500 | 600
    threshold?: number
}

export function ScrollReveal({ children, className = '', variant = 'up', delay = 0, threshold = 0.1 }: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null)

    const variantClass = {
        up: 'reveal',
        left: 'reveal-left',
        right: 'reveal-right',
        scale: 'reveal-scale',
    }[variant]

    const delayClass = delay > 0 ? `delay-${delay}` : ''

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('visible')
                    observer.unobserve(el)
                }
            },
            { threshold, rootMargin: '0px 0px -50px 0px' }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [threshold])

    return (
        <div ref={ref} className={`${variantClass} ${delayClass} ${className}`}>
            {children}
        </div>
    )
}
