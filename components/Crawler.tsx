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
        <div className="w-full bg-[#0f2a44] border-y border-white/10 py-4 overflow-hidden relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(to right, #0f2a44, transparent)' }} />
            <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(to left, #0f2a44, transparent)' }} />

            {/* Scrolling track */}
            <div className="flex gap-0 animate-marquee whitespace-nowrap">
                {repeated.map((item, i) => (
                    <div key={i} className="inline-flex items-center gap-3 px-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c9a227] shrink-0" />
                        <span className="text-sm font-medium text-white/70 tracking-wide">
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
