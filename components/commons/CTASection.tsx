import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
    return (
        <section className="py-20 bg-accent">
            <div className="container px-4 mx-auto text-center">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold mb-6"
                >
                    Siap Membuat Undangan Digital?
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto"
                >
                    Mulai buat undangan digital Anda sekarang dan bagikan momen spesial Anda dengan cara yang lebih modern
                </motion.p>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex gap-4 justify-center"
                >
                    <Link
                        href="/create"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-full text-lg font-semibold transition-colors"
                    >
                        Buat Undangan
                    </Link>
                    <Link
                        href="/pricing"
                        className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-3 rounded-full text-lg font-semibold transition-colors"
                    >
                        Lihat Harga
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}