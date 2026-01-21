export default function Footer() {
    return (
        <footer className="bg-forest text-cream mt-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 text-sm">
                <p>© {new Date().getFullYear()} Spore Trade Company</p>
                <p className="mt-2 opacity-80">
                    Impact Cultivation. One Trade At A Time.
                </p>
            </div>
        </footer>
    )
}
