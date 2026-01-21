export default function Impact() {
    return (
        <section id="impact" className="bg-[var(--forest)] py-24 text-[var(--cream)]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="max-w-2xl mb-16">
                    <p className="text-sm uppercase tracking-widest text-[var(--sage)] mb-4">
                        Impact Cultivation
                    </p>

                    <h2 className="font-serif text-3xl md:text-4xl leading-tight">
                        Cultivating a Chain of{" "}
                        <span className="italic">Positive Consequences</span>
                    </h2>

                    <p className="mt-6 text-[var(--cream)]/80">
                        Every trade we facilitate is designed to strengthen the food system
                        — from the soil it grows in to the communities it sustains.
                    </p>
                </div>

                {/* Impact Cards */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 ">
                    {/* Farmers */}
                    <div className="bg-white/10 backdrop-blur rounded-2xl p-8 hover:scale-105 transition">
                        <h3 className="font-serif text-xl mb-4">Farmers</h3>

                        <p className="text-[var(--cream)]/80 text-sm leading-relaxed mb-6">
                            We prioritize fair pricing, predictable demand, and long-term
                            partnerships that allow growers to plan and thrive.
                        </p>

                        <p className="text-xs uppercase tracking-widest text-[var(--sage)]">
                            Stable income · Trusted routes
                        </p>
                    </div>

                    {/* Customers */}
                    <div className="bg-white/10 backdrop-blur rounded-2xl p-8 hover:scale-105 transition">
                        <h3 className="font-serif text-xl mb-4">Customers</h3>

                        <p className="text-[var(--cream)]/80 text-sm leading-relaxed mb-6">
                            Our logistics are designed to lock in peak freshness and nutrition,
                            delivering produce that hasn’t lost its story along the way.
                        </p>

                        <p className="text-xs uppercase tracking-widest text-[var(--sage)]">
                            Freshness · Transparency
                        </p>
                    </div>

                    {/* Community */}
                    <div className="bg-white/10 backdrop-blur rounded-2xl p-8 hover:scale-105 transition">
                        <h3 className="font-serif text-xl mb-4">Community</h3>

                        <p className="text-[var(--cream)]/80 text-sm leading-relaxed mb-6">
                            By shortening supply chains and reducing waste, we help redirect
                            surplus food toward food security initiatives.
                        </p>

                        <p className="text-xs uppercase tracking-widest text-[var(--sage)]">
                            Food access · Waste reduction
                        </p>
                    </div>

                    {/* Planet */}
                    <div className="bg-white/10 backdrop-blur rounded-2xl p-8 hover:scale-105 transition">
                        <h3 className="font-serif text-xl mb-4">Planet</h3>

                        <p className="text-[var(--cream)]/80 text-sm leading-relaxed mb-6">
                            Efficient routing and regenerative farming partnerships allow us
                            to minimize carbon footprint while restoring soil health.
                        </p>

                        <p className="text-xs uppercase tracking-widest text-[var(--sage)]">
                            Regeneration · Lower emissions
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
