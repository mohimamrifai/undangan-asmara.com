'use client'
import PublicLayout from "@/components/commons/PublicLayout";
import { motion } from "framer-motion";

const templates = [
    {
        id: 1,
        name: "Elegant Rose", 
        description: "Template pernikahan dengan tema elegan dan mawar yang indah dan cantik",
        category: "Floral",
        style: "Elegant"
    },
    {
        id: 2,
        name: "Modern Minimalist",
        description: "Template pernikahan dengan tema modern dan minimalis yang elegan dan modern",
        category: "Modern", 
        style: "Minimalist"
    },
    {
        id: 3,
        name: "Rustic Garden",
        description: "Template pernikahan dengan tema taman yang vintage dan rustic",
        category: "Garden",
        style: "Rustic"
    },
    {
        id: 4,
        name: "Classic Gold",
        description: "Template pernikahan dengan tema mewah dan emas yang klasik dan elegan",
        category: "Luxury",
        style: "Classic"
    },
    {
        id: 5,
        name: "Tropical Paradise",
        description: "Template pernikahan dengan tema tropis yang segar dan menyegarkan",
        category: "Tropical",
        style: "Modern"
    },
    {
        id: 6,
        name: "Sweet Floral",
        description: "Template pernikahan dengan tema bunga yang manis dan lembut",
        category: "Floral",
        style: "Sweet"
    },
    {
        id: 7,
        name: "Islamic Pattern",
        description: "Template pernikahan dengan tema islami yang elegan dan modern",
        category: "Religious",
        style: "Modern"
    },
    {
        id: 8,
        name: "Watercolor Dreams",
        description: "Template pernikahan dengan tema cat air yang artistik dan indah",
        category: "Artistic",
        style: "Watercolor"
    },
    {
        id: 9,
        name: "Vintage Romance",
        description: "Template pernikahan dengan nuansa romantis bergaya vintage",
        category: "Vintage",
        style: "Romantic"
    },
    {
        id: 10,
        name: "Bohemian Spirit",
        description: "Template pernikahan dengan gaya boho yang artistic dan bebas",
        category: "Bohemian",
        style: "Artistic"
    },
    {
        id: 11,
        name: "Japanese Zen",
        description: "Template pernikahan dengan konsep zen Jepang yang minimalis",
        category: "Cultural",
        style: "Minimalist"
    },
    {
        id: 12,
        name: "Royal Blue",
        description: "Template pernikahan mewah dengan dominasi warna biru royal",
        category: "Luxury",
        style: "Elegant"
    }
];

export default function TemplatesPage() {
    return (
        <PublicLayout>
            <section className="py-20 bg-background">
                <div className="container px-4 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                            Semua Template
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
                </div>
            </section>
        </PublicLayout>
    )
}