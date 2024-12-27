import Link from "next/link";
import Logo from "./Logo";
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b"
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Logo />
                    </motion.div>
                    <div className="hidden md:flex items-center space-x-8">
                        {[
                            { href: "/templates", label: "Template" },
                            { href: "/features", label: "Fitur" },
                            { href: "/pricing", label: "Harga" },
                            { href: "/contact", label: "Kontak" },
                        ].map((item, index) => (
                            <motion.div
                                key={item.href}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                            >
                                <Link href={item.href} className="text-foreground/80 hover:text-foreground">
                                    {item.label}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.7 }}
                        >
                            <Link
                                href="/create"
                                className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-full text-sm font-semibold transition-colors"
                            >
                                Buat Undangan
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.nav>
    )
}