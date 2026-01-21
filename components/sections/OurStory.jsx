import Image from "next/image"

export default function OurStory() {
    return (
        <section id="story" className="bg-[var(--cream)] py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
                {/* Image */}
                <div className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden">
                    <Image
                        src="/story.jpg"
                        alt="Seedlings emerging from soil"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Text */}
                <div>
                    <p className="text-sm uppercase tracking-widest text-[var(--sage)] mb-4">
                        Our Story · Founded 2026
                    </p>

                    <h2 className="font-serif text-3xl md:text-4xl text-[var(--charcoal)] mb-6">
                        From One Origin, <span className="italic">Endless Growth</span>
                    </h2>

                    <p className="text-[var(--muted)] leading-relaxed mb-5">
                        A spore is nature’s most elegant ambassador of potential. From a
                        single, microscopic origin, it carries within it the blueprint for
                        entire ecosystems.
                    </p>

                    <p className="text-[var(--muted)] leading-relaxed mb-5">
                        Spore Trade Company was founded in 2026 to rebuild the connection
                        between local farms and the communities they nourish — restoring
                        relationships, sustainability, and meaning to the food system.
                    </p>

                    <p className="italic text-[var(--charcoal)]">
                        “Like spores traveling on the wind, our mission is to carry the
                        seeds of sustainable food systems to every corner of our
                        community.”
                    </p>
                </div>
            </div>
        </section>
    )
}
