'use client'

const items = [
    { label: 'Campus-Only Access' },
    { label: 'Role-Based Permissions' },
    { label: 'Full-Text Search' },
    { label: 'Multi-Tenant Architecture' },
    { label: 'Approval Workflows' },
    { label: 'Audit Trail' },
    { label: 'S3-Backed Storage' },
    { label: 'Thesis Archival' },
    { label: 'Adviser Review Queue' },
    { label: 'OTP Authentication' },
    { label: 'Librarian Controls' },
    { label: 'Structured Metadata' },
]

// Duplicate for seamless loop
const repeated = [...items, ...items]

export function Crawler() {
    return (
        <div className="w-full bg-[#0f2a44] border-y border-white/10 py-10 overflow-hidden relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(to right, #0f2a44, transparent)' }} />
            <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(to left, #0f2a44, transparent)' }} />

            {/* Scrolling track */}
            <div className="flex gap-0 animate-marquee whitespace-nowrap">
                {repeated.map((item, i) => (
                    <div key={i} className="inline-flex items-center gap-4 px-8">
                        <span className="text-3xl font-medium text-slate-400/60 tracking-wide">
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
