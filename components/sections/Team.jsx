import Image from "next/image"

export default function Team() {
    return (
        <section className="bg-[var(--cream)] py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-sm uppercase tracking-widest text-[var(--sage)] mb-4">
                        The People Behind the Mission
                    </p>

                    <h2 className="font-serif text-3xl md:text-4xl text-[var(--charcoal)]">
                        Our Team
                    </h2>
                </div>

                {/* Team Grid */}
                <div className="grid gap-12 md:grid-cols-3">
                    {/* Member 1 */}
                    <div className="text-center">
                        <div className="relative w-44 h-44 mx-auto mb-6 rounded-full overflow-hidden">
                            <Image
                                src="/team-amara.jpg"
                                alt="Pardon"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h3 className="font-serif text-xl text-[var(--charcoal)]">
                            Percy
                        </h3>
                        <p className="uppercase text-xs tracking-widest text-[var(--sage)] mb-4">
                            HEAD OF GROWER RELATIONS & SOURCING
                        </p>

                        <p className="text-[var(--muted)] text-sm leading-relaxed">
                            The force behind our produce selection,
                            our Head of Grower Relations builds trusted
                            partnerships with domestic, regional, and international growers.
                            Guided by the belief that “the best flavors begin with ethical and sustainable farming,” 
                            they ensure peak ripeness, fair pricing, and seasonal integrity.<br/>
                            By strengthening supply chains and championing sustainable practices,
                            they help us cultivate impact — one trade at a time.
                        </p>
                    </div>

                    {/* Member 2 */}
                    <div className="text-center">
                        <div className="relative w-44 h-44 mx-auto mb-6 rounded-full overflow-hidden">
                            <Image
                                src="/team-marcus.jpg"
                                alt="Percy"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h3 className="font-serif text-xl text-[var(--charcoal)]">
                            Pardon
                        </h3>
                        <p className="uppercase text-xs tracking-widest text-[var(--sage)] mb-4">
                            DIRECTOR OF LOGISTICS & DISTRIBUTION
                        </p>

                        <p className="text-[var(--muted)] text-sm leading-relaxed">
                            The architect of our farm-to-shelf journey, our Director of Logistics 
                            ensures every harvest arrives fresh, vibrant, and on time. From cold 
                            chain systems to route optimization, they manage the precision behind
                            our distribution network.
                            For them, seamless logistics are the quiet promise behind every crisp 
                            leaf and perfect peach.
                        </p>
                    </div>

                    {/* Member 3 */}
                    <div className="text-center">
                        <div className="relative w-44 h-44 mx-auto mb-6 rounded-full overflow-hidden">
                            <Image
                                src="/team-laura.png"
                                alt="Laura"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h3 className="font-serif text-xl text-[var(--charcoal)]">
                            Laura
                        </h3>
                        <p className="uppercase text-xs tracking-widest text-[var(--sage)] mb-4">
                            RETAIL EXPERIENCE & COMMUNITY MANAGER
                        </p>

                        <p className="text-[var(--muted)] text-sm leading-relaxed">
                           The heart of our retail mission, our Retail Experience & Community
                            Manager transforms our stores into welcoming hubs of fresh food and
                            connection. With a background in culinary arts and hospitality,
                            they inspire customers through engaging displays, events, and expert guidance.
                            They believe every product tells a story — and every customer becomes part of it.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}


