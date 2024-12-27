import { motion } from "framer-motion";

const testimonials = [
    {
        id: 1,
        couple: "Ahmad & Sarah",
        location: "Jakarta",
        testimonial: "Sangat puas dengan layanan UndanganAsmara.com. Template-nya bagus dan mudah disesuaikan. Tamu undangan kami sangat terkesan dengan hasilnya."
    },
    {
        id: 2,
        couple: "Budi & Ani",
        location: "Surabaya",
        testimonial: "Fitur-fiturnya lengkap dan harganya sangat terjangkau. Proses pembuatannya juga sangat cepat dan customer service-nya sangat membantu."
    },
    {
        id: 3,
        couple: "Deni & Maya",
        location: "Bandung",
        testimonial: "Desainnya modern dan elegan. Kami mendapat banyak pujian dari tamu undangan. Terima kasih UndanganAsmara telah membantu mewujudkan undangan impian kami."
    },
    {
        id: 4,
        couple: "Reza & Putri",
        location: "Yogyakarta",
        testimonial: "Platform yang user-friendly dengan banyak pilihan template yang cantik. Sangat cocok untuk pasangan yang ingin undangan digital yang berkelas."
    },
    {
        id: 5,
        couple: "Fajar & Dina",
        location: "Semarang",
        testimonial: "Kami suka sekali dengan fitur RSVP online-nya yang memudahkan pendataan tamu. Template-templatenya juga sangat aesthetic dan kekinian."
    },
    {
        id: 6,
        couple: "Hendra & Lisa",
        location: "Medan",
        testimonial: "Pilihan musik dan animasinya bagus-bagus. Bisa menyesuaikan dengan tema pernikahan kami. Hasilnya memuaskan dan sesuai ekspektasi."
    },
    {
        id: 7,
        couple: "Irfan & Nadia",
        location: "Malang",
        testimonial: "Proses revisi sangat mudah dan cepat. Tim support sangat responsif. Recommended banget buat yang mau bikin undangan digital!"
    },
    {
        id: 8,
        couple: "Galih & Ratih",
        location: "Palembang",
        testimonial: "Fitur countdown dan gallery foto membantu membuat undangan kami lebih personal. Terima kasih sudah membantu mengabadikan momen bahagia kami."
    },
    {
        id: 9,
        couple: "Kevin & Laura",
        location: "Bali",
        testimonial: "Desain yang modern dengan sentuhan tradisional membuat undangan kami terlihat unik. Sangat puas dengan layanan UndanganAsmara."
    },
    {
        id: 10,
        couple: "Rizky & Anita",
        location: "Makassar",
        testimonial: "Prosesnya mudah dari awal sampai akhir. Bisa custom sesuai keinginan dan hasilnya memuaskan. Worth it banget!"
    }
];

export default function TestimonialsSection() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
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
                        Apa Kata Mereka?
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Testimoni dari pasangan yang telah menggunakan layanan kami
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.slice(0, 6).map((item, index) => (
                        <motion.div 
                            key={item.id} 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all hover:scale-105"
                        >
                            <div className="flex flex-col h-full">
                                <blockquote className="flex-grow text-muted-foreground mb-4">
                                    "{item.testimonial}"
                                </blockquote>
                                <div>
                                    <p className="font-semibold text-foreground">{item.couple}</p>
                                    <p className="text-sm text-muted-foreground">{item.location}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}