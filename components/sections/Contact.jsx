export default function Contact() {
    return (
        <section id="contact" className="bg-[var(--cream)] py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16">
                {/* Left: Text + Socials */}
                <div>
                    <p className="text-sm uppercase tracking-widest text-[var(--sage)] mb-4">
                        Get in Touch
                    </p>

                    <h2 className="font-serif text-3xl md:text-4xl text-[var(--charcoal)] mb-6">
                        Start a Conversation
                    </h2>

                    <p className="text-[var(--muted)] leading-relaxed mb-8 max-w-md">
                        Whether you’re a farmer, restaurant, retailer, or community partner,
                        we’d love to hear from you. Every connection is the beginning of
                        something meaningful.
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-6">
                        <a
                            href="https://facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--forest)] hover:opacity-80 transition"
                        >
                            Facebook
                        </a>

                        <a
                            href="https://instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--forest)] hover:opacity-80 transition"
                        >
                            Instagram
                        </a>

                        <a
                            href="https://wa.me/+263713938485"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--forest)] hover:opacity-80 transition"
                        >
                            WhatsApp
                        </a>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="bg-white rounded-2xl p-10 shadow-sm">
                    <form
                        action="https://api.web3forms.com/submit"
                        method="POST"
                        className="space-y-6"
                    >
                        {/* Web3Forms Access Key (from .env.local) */}
                        <input
                            type="hidden"
                            name="access_key"
                            value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY}
                        />

                        {/* Honeypot – spam protection */}
                        <input
                            type="text"
                            name="botcheck"
                            className="hidden"
                        />

                        {/* Optional metadata */}
                        <input
                            type="hidden"
                            name="subject"
                            value="New Contact — Spore Trade Company"
                        />
                        <input
                            type="hidden"
                            name="from_name"
                            value="Spore Trade Website"
                        />

                        <div>
                            <label className="block text-sm mb-2">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--sage)]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--sage)]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-2">Inquiry Type</label>
                            <select
                                name="inquiry"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--sage)]"
                            >
                                <option>Farmer Partnership</option>
                                <option>Restaurant / Retail</option>
                                <option>Community / General</option>
                                <option>Media / Collaboration</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm mb-2">Message</label>
                            <textarea
                                name="message"
                                rows="4"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--sage)]"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-[var(--soil)] text-[var(--cream)] px-6 py-3 rounded-xl hover:bg-[var(--forest)] transition w-full"
                        >
                            Send Message
                        </button>
                    </form>

                </div>
            </div>
        </section>
    )
}
