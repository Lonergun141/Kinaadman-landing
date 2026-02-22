'use client'

export function ValueProposition() {
    const values = [
        {
            number: '01',
            title: 'Centralized Control',
            description: 'Single platform for managing all institutional research. No fragmented systems or external dependencies.',
            highlight: 'Institutional ownership'
        },
        {
            number: '02',
            title: 'Complete Security',
            description: 'Campus-only access with enterprise-grade encryption, role-based permissions, and audit trails.',
            highlight: 'Your data stays inside'
        },
        {
            number: '03',
            title: 'Academic Workflow',
            description: 'Built specifically for universities. Review processes, publication workflows, and institutional standards.',
            highlight: 'Made for academia'
        },
        {
            number: '04',
            title: 'Permanent Preservation',
            description: 'Long-term archival of research with institutional redundancy and disaster recovery.',
            highlight: 'Forever safeguarded'
        }
    ]

    return (
        <section id="solution" className="bg-foreground text-background py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="mb-16">
                    <span className="inline-block text-sm font-medium text-secondary tracking-widest uppercase mb-4">
                        Why Kinaadman
                    </span>
                    <h2 className="text-5xl lg:text-6xl font-serif font-bold text-background">
                        Built on institutional principles
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {values.map((value, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className="flex items-start gap-6">
                                <span className="text-6xl font-serif font-bold text-secondary/40 group-hover:text-secondary transition-colors">
                                    {value.number}
                                </span>
                                <div className="flex-1">
                                    <h3 className="text-2xl text-primary font-serif font-bold mb-3 group-hover:text-secondary transition-colors">
                                        {value.title}
                                    </h3>
                                    <p className="text-background/70 leading-relaxed mb-3">
                                        {value.description}
                                    </p>
                                    <div className="inline-block text-sm font-medium text-secondary px-3 py-1 bg-secondary/10 rounded">
                                        {value.highlight}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
