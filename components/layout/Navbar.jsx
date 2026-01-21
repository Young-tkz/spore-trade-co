"use client"

import { useState } from "react"
import Image from "next/image"

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 bg-[var(--cream)]/90 backdrop-blur border-b border-black/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex flex-col">
                    <Image
                        src="/logo2.png"
                        alt="Spore Trade Company"
                        width={140}
                        height={40}
                        priority
                    />
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm">
                    <a href="/" className="hover:text-[var(--forest)] transition">
                        Home
                    </a>
                    <a href="#story" className="hover:text-[var(--forest)] transition">
                        Our Story
                    </a>
                    <a href="#services" className="hover:text-[var(--forest)] transition">
                        What We Do
                    </a>
                    <a href="#impact" className="hover:text-[var(--forest)] transition">
                        Impact
                    </a>

                    {/* Contact Button */}
                    <a
                        href="#contact"
                        className="bg-[var(--soil)] text-[var(--cream)] px-5 py-2 rounded-xl hover:bg-[var(--forest)] transition"
                    >
                        Contact
                    </a>
                </nav>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden flex flex-col gap-1.5"
                    aria-label="Toggle menu"
                >
                    <span className="w-6 h-0.5 bg-[var(--charcoal)]"></span>
                    <span className="w-6 h-0.5 bg-[var(--charcoal)]"></span>
                    <span className="w-6 h-0.5 bg-[var(--charcoal)]"></span>
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-[var(--cream)] border-t border-black/5 cursor-pointer">
                    <nav className="flex flex-col px-6 py-6 gap-6 text-sm">
                        <a onClick={() => setOpen(false)} href="/">
                            Home
                        </a>
                        <a onClick={() => setOpen(false)} href="#story">
                            Our Story
                        </a>
                        <a onClick={() => setOpen(false)} href="#services">
                            What We Do
                        </a>
                        <a onClick={() => setOpen(false)} href="#impact">
                            Impact
                        </a>

                        {/* Mobile Contact Button */}
                        <a
                            onClick={() => setOpen(false)}
                            href="#contact"
                            className="mt-4 bg-[var(--soil)] text-[var(--cream)] px-5 py-3 rounded-xl text-center"
                        >
                            Contact
                        </a>
                    </nav>
                </div>
            )}
        </header>
    )
}
