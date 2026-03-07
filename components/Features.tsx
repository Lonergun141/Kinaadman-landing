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
        <section id="features" className="relative w-full bg-[#0f2a44]">
            {/* Introductory Header section */}
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-24 bg-[#f8fafc] sticky top-0 z-0">
                <ScrollReveal variant="up" className="max-w-4xl mx-auto">
                    <span className="inline-block text-sm font-bold tracking-[0.2em] uppercase text-[#c9a227] mb-6">
                        Core Capabilities
                    </span>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-[#0f2a44] mb-8 leading-tight">
                        Kinaadman goes deeper.
                    </h2>
                    <p className="text-[#475569] text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
                        Purpose-built for academia. Not just another digital repository — a complete workflow and research management system.
                    </p>
                </ScrollReveal>
            </div>

            {/* Full-screen sticky feature cards */}
            <div className="relative z-10 w-full">
                {features.map((feature, index) => {
                    const Icon = feature.icon;
                    const isEven = index % 2 === 0;

                    // Explicitly define order classes to ensure Tailwind compiles them correctly
                    const textOrderClass = isEven ? 'lg:order-1' : 'lg:order-2';
                    const visualOrderClass = isEven ? 'lg:order-2' : 'lg:order-1';

                    return (
                        <div
                            key={index}
                            className="relative lg:sticky top-0 min-h-[100svh] lg:h-[100svh] w-full flex flex-col lg:flex-row overflow-hidden shadow-[0_-15px_50px_rgba(0,0,0,0.15)]"
                            style={{ zIndex: 10 + index }}
                        >
                            {/* Text Content Side */}
                            <div className={`flex-1 flex flex-col justify-center p-8 md:p-12 lg:p-20 xl:p-24 ${isEven ? 'bg-white' : 'bg-[#f8fafc]'} ${textOrderClass} relative`}>
                                <ScrollReveal variant={isEven ? 'right' : 'left'} className="max-w-xl mx-auto lg:mx-0">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm" style={{ background: `${feature.accentColor}15` }}>
                                            <Icon size={32} style={{ color: feature.accentColor }} />
                                        </div>
                                        <span className="text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full border" style={{ borderColor: `${feature.accentColor}40`, color: feature.accentColor }}>
                                            {feature.tag}
                                        </span>
                                    </div>
                                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0f2a44] mb-6 leading-[1.1]">
                                        {feature.title}
                                    </h3>
                                    <p className="text-xl md:text-2xl font-medium text-[#c9a227] mb-8 leading-relaxed">
                                        {feature.shortDescription}
                                    </p>
                                    <p className="text-lg md:text-xl text-[#64748b] leading-loose">
                                        {feature.fullDescription}
                                    </p>
                                </ScrollReveal>
                            </div>

                            {/* Visual Graphic Side */}
                            <div className={`flex-1 relative flex items-center justify-center overflow-hidden ${visualOrderClass}`}
                                style={{
                                    background: isEven
                                        ? `linear-gradient(135deg, #0f2a44 0%, #1a4066 100%)`
                                        : `linear-gradient(135deg, #c9a227 0%, #d4b03a 100%)`
                                }}
                            >
                                {/* Immersive abstract background decorations */}
                                <div className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none">
                                    <div className="absolute top-1/4 -left-1/4 w-96 h-96 rounded-full blur-[100px]" style={{ background: isEven ? '#c9a227' : '#0f2a44' }} />
                                    <div className="absolute -bottom-1/4 right-1/4 w-[30rem] h-[30rem] rounded-full blur-[120px]" style={{ background: isEven ? '#ffffff' : '#0f2a44' }} />
                                </div>

                                {/* Abstract Glassmorphism UI Component */}
                                <ScrollReveal variant="scale" delay={200} className="relative z-10 w-full max-w-md px-6">
                                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 lg:p-10 shadow-2xl transform transition-transform hover:-translate-y-2 duration-500">
                                        <div className="flex items-center justify-between mb-8">
                                            <div className="flex items-center gap-4">
                                                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center shadow-inner">
                                                    <Icon size={28} className="text-white" />
                                                </div>
                                                <div>
                                                    <div className="h-4 w-32 bg-white/40 rounded-md mb-2" />
                                                    <div className="h-2.5 w-20 bg-white/20 rounded-md" />
                                                </div>
                                            </div>
                                            <div className="flex gap-1.5">
                                                <div className="w-3 h-3 rounded-full bg-[#fecaca] opacity-80" />
                                                <div className="w-3 h-3 rounded-full bg-[#fef08a] opacity-80" />
                                                <div className="w-3 h-3 rounded-full bg-[#bbf7d0] opacity-80" />
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="h-3 w-full bg-white/20 rounded-md" />
                                            <div className="h-3 w-11/12 bg-white/20 rounded-md" />
                                            <div className="h-3 w-4/5 bg-white/20 rounded-md" />
                                            <div className="h-3 w-9/12 bg-white/20 rounded-md mb-6" />
                                            <div className="h-3 w-full bg-white/20 rounded-md mt-8" />
                                            <div className="h-3 w-5/6 bg-white/20 rounded-md" />
                                        </div>
                                        <div className="mt-10 pt-6 border-t border-white/10 flex justify-between items-center">
                                            <div className="h-10 w-32 bg-white/20 rounded-lg backdrop-blur-md" />
                                            <div className="flex -space-x-3">
                                                <div className="h-10 w-10 rounded-full border-2 border-white/20 bg-white/30" />
                                                <div className="h-10 w-10 rounded-full border-2 border-white/20 bg-white/20" />
                                                <div className="h-10 w-10 rounded-full border-2 border-white/20 bg-white/10" />
                                            </div>
                                        </div>
                                    </div>

                                </ScrollReveal>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
