import Image from "next/image"

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/hero.png"
                    alt="Fresh produce growing in fields"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="max-w-3xl">
                    <p className="text-sm uppercase tracking-widest text-[var(--sage)] mb-4">
                        Spore Trade Company
                    </p>

                    <h1 className="font-serif text-4xl md:text-6xl text-[var(--cream)] leading-tight">
                        Impact Cultivation. <br />
                        <span className="italic">One Trade At A Time.</span>
                    </h1>

                    <p className="mt-6 max-w-xl text-lg text-[var(--cream)]/90">
                        Connecting local farms directly to families, restaurants, and
                        retailers — with integrity, freshness, and purpose.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="#network"
                            className="bg-[var(--forest)] text-[var(--cream)] px-6 py-3 rounded-xl hover:opacity-90 transition"
                        >
                            Explore Our Network
                        </a>

                        <a
                            href="#contact"
                            className="border border-[var(--cream)] text-[var(--cream)] px-6 py-3 rounded-xl hover:bg-[var(--cream)] hover:text-[var(--forest)] transition"
                        >
                            Partner With Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
