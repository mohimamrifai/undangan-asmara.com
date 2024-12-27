import Link from "next/link";
import { motion } from "framer-motion";

const templates = [
    {
        id: 1,
        name: "Elegant Rose", 
        description: "Template pernikahan dengan tema elegan dan mawar yang indah dan cantik",
    },
    {
        id: 2,
        name: "Modern Minimalist",
        description: "Template pernikahan dengan tema modern dan minimalis yang elegan dan modern",
    },
    {
        id: 3,
        name: "Rustic Garden",
        description: "Template pernikahan dengan tema taman yang vintage dan rustic",
    },
    {
        id: 4,
        name: "Classic Gold",
        description: "Template pernikahan dengan tema mewah dan emas yang klasik dan elegan",
    },
    {
        id: 5,
        name: "Tropical Paradise",
        description: "Template pernikahan dengan tema tropis yang segar dan menyegarkan",
    },
    {
        id: 6,
        name: "Sweet Floral",
        description: "Template pernikahan dengan tema bunga yang manis dan lembut",
    },
    {
        id: 7,
        name: "Islamic Pattern",
        description: "Template pernikahan dengan tema islami yang elegan dan modern",
    },
    {
        id: 8,
        name: "Watercolor Dreams",
        description: "Template pernikahan dengan tema cat air yang artistik dan indah",
    },
];

export default function TemplateSection() {
    return (
        <section className="py-20 bg-background">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                        Template Pilihan
                    </h2>
                    <p className="text-center text-muted-foreground mb-12">
                        Pilih template yang sesuai dengan selera dan kebutuhan Anda
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {templates.map((template, index) => (
                        <motion.div
                            key={template.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group rounded-xl overflow-hidden bg-card shadow-md hover:shadow-xl transition-all flex flex-col"
                        >
                            <div className="aspect-[3/4] bg-gray-200 dark:bg-gray-800 relative">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                    <span>Template Preview</span>
                                </div>
                                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                                    20% OFF
                                </div>
                            </div>
                            <div className="p-4 flex flex-col flex-1">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-semibold text-lg">{template.name}</h3>
                                    <div className="text-right">
                                        <span className="text-sm line-through text-muted-foreground">Rp 99.000</span>
                                        <p className="text-lg font-bold text-primary">Rp 79.000</p>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{template.description}</p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                                        Gunakan Template
                                    </button>
                                    <button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-3 py-2 rounded-lg text-sm transition-colors">
                                        Preview
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <Link href="/templates" className="inline-flex items-center text-primary hover:text-primary/90 font-semibold">
                        Lihat Semua Template
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}