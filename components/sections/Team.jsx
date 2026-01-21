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
                            Pardon
                        </h3>
                        <p className="uppercase text-xs tracking-widest text-[var(--sage)] mb-4">
                            Founder & CEO
                        </p>

                        <p className="text-[var(--muted)] text-sm leading-relaxed">
                            Former agricultural economist who left consulting to build the
                            food system she believed in. Grows tomatoes on her balcony and
                            has never met a farmer she didn’t like.
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
                            Percy
                        </h3>
                        <p className="uppercase text-xs tracking-widest text-[var(--sage)] mb-4">
                            Head of Operations
                        </p>

                        <p className="text-[var(--muted)] text-sm leading-relaxed">
                            Logistics nerd with a heart for sustainability. Previously
                            managed supply chains for national grocers — now focused on
                            helping local produce travel fewer miles, faster.
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
                            Community Partnerships
                        </p>

                        <p className="text-[var(--muted)] text-sm leading-relaxed">
                            The connector. Spent years organizing farmers’ markets before
                            joining Spore. Believes every handshake is the start of something
                            meaningful.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
