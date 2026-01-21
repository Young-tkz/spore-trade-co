import "./globals.css"
import { serif, sans } from "./fonts"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export const metadata = {
    title: "Spore Trade Company",
    description: "Impact Cultivation. One Trade At A Time.",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={`${serif.variable} ${sans.variable} font-sans`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        </body>
        </html>
    )
}
