import { Search, Shield, BookOpen, Database } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const features = [
    {
        icon: Database,
        tag: 'Architecture',
        title: 'Multi-Tenant Architecture',
        shortDescription: 'Secure campus-only access with role-based policies.',
        fullDescription: 'Built with a white-label tenant configuration allowing independent identity, logic, and policies per university. Ensures institutional data is strictly partitioned using PostgreSQL tenant-level scoping while maintaining centralized platform administration. Role-based access controls strictly define capabilities for Students, Advisers, Librarians, and Tenant Admins.',
        accentColor: '#c9a227',
    },
    {
        icon: Search,
        tag: 'Discovery',
        title: 'Advanced Full-Text Search',
        shortDescription: 'Lightning-fast retrieval of thesis abstracts and metadata.',
        fullDescription: 'Lightning-fast retrieval of thesis abstracts and metadata utilizing native PostgreSQL GIN/TSVECTOR indices. The search engine supports complex filtering across custom institutional metadata standards to simplify research discovery within campus boundaries, completely avoiding public indexing.',
        accentColor: '#0f2a44',
    },
    {
        icon: BookOpen,
        tag: 'Process',
        title: 'Approval Workflows',
        shortDescription: 'Streamlined submission and review processes for thesis drafts.',
        fullDescription: 'Academic-specific workflows guiding research drafts from initial student submission through adviser review and final librarian approval. Features status history tracking, structured audit trails, and adviser-level review queues to support institutional governance and digital preservation standards.',
        accentColor: '#c9a227',
    },
    {
        icon: Shield,
        tag: 'Storage',
        title: 'Secure Digital Preservation',
        shortDescription: 'S3-compatible object storage with signed URLs.',
        fullDescription: 'Integration with S3-compatible object storage for long-term archival. Features secure, presigned URL issuance guaranteeing that sensitive academic documents, raw research data, and finalized thesis records remain protected behind strict authentication and role-based access checks.',
        accentColor: '#0f2a44',
    },
];

export function Features() {
    return (
        <section id="features" className="py-32 bg-[#f8fafc] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <ScrollReveal variant="up" className="text-center mb-24">
                    <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#c9a227] mb-4">
                        Core Capabilities
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0f2a44] mb-6">
                        Kinaadman goes deeper.
                    </h2>
                    <p className="text-[#64748b] text-lg max-w-2xl mx-auto">
                        Purpose-built for academia. Not just another repository — a complete research management system.
                    </p>
                </ScrollReveal>

                {/* Sticky feature cards */}
                <div className="relative space-y-8 pb-24">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        const isEven = index % 2 === 0;
                        return (
                            <ScrollReveal
                                key={index}
                                variant={isEven ? 'left' : 'right'}
                                delay={0}
                            >
                                <div
                                    className="sticky w-full max-w-5xl mx-auto bg-white rounded-3xl border border-[#e2e8f0] overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row"
                                    style={{ top: `calc(6rem + ${index * 1.5}rem)` }}
                                >
                                    {/* Visual side */}
                                    <div
                                        className={`w-full md:w-5/12 aspect-video md:aspect-auto shrink-0 flex items-center justify-center relative overflow-hidden ${isEven ? 'md:order-first' : 'md:order-last'}`}
                                        style={{
                                            background: isEven
                                                ? `linear-gradient(135deg, #0f2a44 0%, #1e3a5f 100%)`
                                                : `linear-gradient(135deg, #c9a227 0%, #d4b03a 100%)`,
                                        }}
                                    >
                                        <div className="absolute inset-0 opacity-20">
                                            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full blur-2xl" style={{ background: isEven ? '#c9a227' : '#0f2a44' }} />
                                            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full blur-2xl" style={{ background: isEven ? '#c9a22780' : '#0f2a4480' }} />
                                        </div>

                                        <div className="relative z-10 flex flex-col items-center gap-4 p-8 text-center">
                                            <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: isEven ? 'rgba(201,162,39,0.2)' : 'rgba(15,42,68,0.2)' }}>
                                                <Icon size={32} className={isEven ? 'text-[#c9a227]' : 'text-[#0f2a44]'} />
                                            </div>
                                            <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full" style={{ background: isEven ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)', color: 'white' }}>
                                                {feature.tag}
                                            </span>
                                            <div className="w-full max-w-[180px] space-y-2 mt-2">
                                                {[70, 45, 55, 30].map((w, i) => (
                                                    <div key={i} className="h-2 rounded-full" style={{ width: `${w}%`, background: 'rgba(255,255,255,0.3)' }} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Text side */}
                                    <div className="p-10 md:p-14 flex-1 flex flex-col justify-center">
                                        <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#c9a227] mb-4">{feature.tag}</span>
                                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#0f2a44] mb-4 leading-tight">{feature.title}</h3>
                                        <p className="text-base font-semibold text-[#0f2a44]/70 mb-5">{feature.shortDescription}</p>
                                        <p className="text-[#64748b] leading-relaxed text-sm">{feature.fullDescription}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
