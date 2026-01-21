export default function WhatWeDo() {
    return (
        <section id="services" className="bg-[var(--cream)] py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-sm uppercase tracking-widest text-[var(--sage)] mb-4">
                        Our Services
                    </p>

                    <h2 className="font-serif text-3xl md:text-4xl text-[var(--charcoal)]">
                        What We Do
                    </h2>
                </div>

                {/* Services */}
                <div className="grid gap-12 md:grid-cols-2">
                    {/* Distribution */}
                    <div className="bg-white rounded-2xl p-10 shadow-sm">
                        <div className="mb-6 text-[var(--forest)] text-3xl">
                            🚚
                        </div>

                        <h3 className="font-serif text-2xl text-[var(--charcoal)] mb-4">
                            Distribution
                        </h3>

                        <p className="text-[var(--muted)] leading-relaxed mb-6">
                            We aggregate harvests from trusted local farms and move them
                            efficiently to restaurants, retailers, and institutions. Our
                            logistics are built for speed, transparency, and fairness.
                        </p>

                        <ul className="space-y-3 text-sm text-[var(--charcoal)]">
                            <li>• Curated farm aggregation network</li>
                            <li>• Fair and consistent pricing for growers</li>
                            <li>• Reliable pickup and delivery schedules</li>
                            <li>• Quality-controlled handling and transport</li>
                        </ul>
                    </div>

                    {/* Retail */}
                    <div className="bg-white rounded-2xl p-10 shadow-sm">
                        <div className="mb-6 text-[var(--forest)] text-3xl">
                            🏪
                        </div>

                        <h3 className="font-serif text-2xl text-[var(--charcoal)] mb-4">
                            Retail
                        </h3>

                        <p className="text-[var(--muted)] leading-relaxed mb-6">
                            Through our flagship stores and farmers’ market presence, we
                            bring fresh, seasonal produce directly to consumers — with full
                            transparency about where it comes from and who grew it.
                        </p>

                        <ul className="space-y-3 text-sm text-[var(--charcoal)]">
                            <li>• Flagship retail locations</li>
                            <li>• Local farmers’ market stands</li>
                            <li>• Seasonal, story-driven selections</li>
                            <li>• Direct connection between grower and customer</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
