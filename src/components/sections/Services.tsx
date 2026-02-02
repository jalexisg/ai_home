"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    "Diseños Arquitectónicos",
    "Renders interiores y exteriores",
    "Diseños estructurales",
    "Diseños hidraulicos y sanitarios",
    "Diseños electricos",
    "Estudio de suelos",
    "Administracion de obras",
    "Construccion",
    "Remodelaciones",
];

export function Services() {
    return (
        <section id="services" className="py-20 bg-accent/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Ofrecemos soluciones integrales para tu proyecto, desde el diseño hasta la construcción final.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 dark:border-zinc-800 group"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <CheckCircle2 className="w-6 h-6 text-primary group-hover:text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">{service}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Soluciones profesionales y garantizadas.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
