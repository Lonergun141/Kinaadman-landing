import Image from 'next/image';

export function Features() {
    const features = [
        {
            image: "/features/multitenant.png",
            title: "Multi-Tenant Architecture",
            shortDescription: "Secure campus-only access with role-based policies.",
            fullDescription: "Built with a white-label tenant configuration allowing independent identity, logic, and policies per university. Ensures institutional data is strictly partitioned using PostgreSQL tenant-level scoping while maintaining centralized platform administration. Role-based access controls strictly define capabilities for Students, Advisers, Librarians, and Tenant Admins.",
        },
        {
            image: "/features/search.png",
            title: "Advanced Full-Text Search",
            shortDescription: "Lightning-fast retrieval of thesis abstracts and metadata.",
            fullDescription: "Lightning-fast retrieval of thesis abstracts and metadata utilizing native PostgreSQL GIN/TSVECTOR indices. The search engine supports complex filtering across custom institutional metadata standards to simplify research discovery within campus boundaries, completely avoiding public indexing.",
        },
        {
            image: "/features/workflow.png",
            title: "Approval Workflows",
            shortDescription: "Streamlined submission and review processes for thesis drafts.",
            fullDescription: "Academic-specific workflows guiding research drafts from initial student submission through adviser review and final librarian approval. Features robust auditing, version control, and status tracking to meet institutional governance, digital preservation, and strict compliance standards.",
        },
        {
            image: "/features/preservation.png",
            title: "Secure Digital Preservation",
            shortDescription: "S3-compatible object storage with signed URLs.",
            fullDescription: "Integration with S3-compatible object storage for long-term archival. Features secure, presigned URL issuance guaranteeing that sensitive academic documents, raw research data, and finalized thesis records remain protected behind strict authentication and role-based access checks.",
        }
    ];

    return (
        <section id="features" className="py-32 relative overflow-hidden bg-background">
            {/* Subtle Mesh Gradient Background */}
            <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-[radial-gradient(circle_farthest-corner_at_center,var(--color-secondary),transparent_60%)] blur-3xl opacity-20"></div>
                <div className="absolute top-[20%] right-[-10%] w-[70%] h-[70%] bg-[radial-gradient(circle_farthest-corner_at_center,var(--color-primary),transparent_70%)] blur-[100px] opacity-10"></div>
                <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] bg-[radial-gradient(circle_farthest-corner_at_center,var(--color-surface),transparent_50%)] blur-[80px] opacity-50"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-32">
                    <span className="inline-block text-sm font-medium text-secondary tracking-widest uppercase mb-4">
                        Core Capabilities
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Platform Architecture</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Deep dive into the technical features powering Kinaadman's secure academic repository. Scroll to explore the architecture.
                    </p>
                </div>

                <div className="relative space-y-24 pb-32">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="sticky w-full max-w-5xl mx-auto bg-card/60 backdrop-blur-xl supports-[backdrop-filter]:bg-card/40 rounded-3xl border border-border transition-all duration-500 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md"
                            style={{ top: `calc(8rem + ${index * 2}rem)` }}
                        >
                            <div className="relative w-full md:w-5/12 aspect-square md:aspect-auto border-b md:border-b-0 md:border-r border-border shrink-0 bg-white">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-10 md:p-14 flex-1 flex flex-col justify-center">
                                <h3 className="text-3xl font-serif font-bold text-foreground mb-4">{feature.title}</h3>
                                <p className="text-xl text-primary font-semibold mb-6">
                                    {feature.shortDescription}
                                </p>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    {feature.fullDescription}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
