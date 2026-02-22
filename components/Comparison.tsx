'use client'

import { Check, X } from 'lucide-react'

export function Comparison() {
    const features = [
        { name: 'Campus-Only Access', kinaadman: true, public: false },
        { name: 'Institutional Control', kinaadman: true, public: false },
        { name: 'No Public Indexing', kinaadman: true, public: false },
        { name: 'Role-Based Access', kinaadman: true, public: true },
        { name: 'Institutional Security', kinaadman: true, public: false },
        { name: 'Research Preservation', kinaadman: true, public: true },
        { name: 'Compliance Ready', kinaadman: true, public: false },
        { name: 'Academic Workflows', kinaadman: true, public: false },
    ]

    return (
        <section id="comparison" className="bg-background py-24">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block text-sm font-medium text-secondary tracking-widest uppercase mb-4">
                        Comparison
                    </span>
                    <h2 className="text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                        Why Kinaadman is Different
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Built specifically for institutions. Not another public repository.
                    </p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-border">
                                <th className="text-left py-4 px-4 font-serif font-bold text-foreground">Feature</th>
                                <th className="text-center py-4 px-4">
                                    <div className="font-serif font-bold text-foreground">Kinaadman</div>
                                    <div className="text-xs text-muted-foreground font-normal">Campus-Only</div>
                                </th>
                                <th className="text-center py-4 px-4">
                                    <div className="font-serif font-bold text-foreground">Public Repos</div>
                                    <div className="text-xs text-muted-foreground font-normal">Open Access</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((feature, index) => (
                                <tr key={index} className="border-b border-border hover:bg-card transition-colors">
                                    <td className="py-4 px-4 font-medium text-foreground">{feature.name}</td>
                                    <td className="text-center py-4 px-4">
                                        {feature.kinaadman ? (
                                            <Check size={20} className="mx-auto text-secondary" />
                                        ) : (
                                            <X size={20} className="mx-auto text-muted-foreground" />
                                        )}
                                    </td>
                                    <td className="text-center py-4 px-4">
                                        {feature.public ? (
                                            <Check size={20} className="mx-auto text-muted-foreground" />
                                        ) : (
                                            <X size={20} className="mx-auto text-muted-foreground" />
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
