import { motion } from "framer-motion";

export default function HowItsWork() {
    return (
        <section className="py-24 bg-gradient-to-b from-secondary/30 to-secondary/60 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
            <div className="container px-4 mx-auto relative">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl mx-auto text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-4">
                        Buat Undangan Digital Dalam 4 Langkah
                    </h2>
                    <p className="text-lg text-muted-foreground">Proses simpel untuk hasil yang memukau</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {[1, 2, 3, 4].map((step, index) => (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group hover:scale-105 transition-transform duration-300"
                        >
                            <div className="text-center p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-colors">
                                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/70 text-primary-foreground rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg shadow-primary/20 group-hover:shadow-primary/30 transition-shadow">
                                    {step}
                                </div>
                                <h3 className="text-xl font-semibold mb-3">
                                    {step === 1 && "Pilih Template"}
                                    {step === 2 && "Isi Informasi"}
                                    {step === 3 && "Sesuaikan Desain"}
                                    {step === 4 && "Bagikan"}
                                </h3>
                                <p className="text-muted-foreground">
                                    {step === 1 && "Koleksi template premium dengan desain eksklusif untuk momen spesialmu"}
                                    {step === 2 && "Form yang intuitif untuk mengisi detail acara dengan mudah dan cepat"}
                                    {step === 3 && "Kustomisasi tanpa batas dengan pilihan style yang beragam"}
                                    {step === 4 && "Sebarkan undangan digitalmu dengan link yang elegan"}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}