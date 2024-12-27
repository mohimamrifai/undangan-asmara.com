import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function HeroSection() {
    return (
        <section className="relative min-h-screen pt-16 flex items-center bg-gradient-to-b from-pink-50 to-white dark:from-pink-950 dark:to-background">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-left"
                    >
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-pink-600"
                        >
                            Wujudkan Momen Bahagiamu
                            <br />
                            Dalam Undangan Penuh Pesona
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-xl mb-8 text-muted-foreground"
                        >
                            Buat undangan digital yang indah untuk momen spesial Anda dengan mudah dan elegan
                        </motion.p>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex gap-4"
                        >
                            <Link
                                href="/create"
                                className="bg-primary text-primary-foreground hover:scale-105 hover:shadow-lg hover:shadow-primary/30 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 inline-block"
                            >
                                Coba Gratis
                            </Link>
                            <Link
                                href="/templates"
                                className="bg-secondary text-secondary-foreground hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary/30 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 inline-block"
                            >
                                Lihat Template
                            </Link>
                        </motion.div>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="relative p-10"
                    >
                        <div className="aspect-square rounded-2xl overflow-hidden">
                            <Image
                                src="/banner.svg"
                                alt="Hero banner"
                                className="w-full h-full object-contain"
                                width={1000}
                                height={1000}
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section >
    )
}