"use client";

import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Mock data for Instagram posts Since we don't have a live API connection yet.
// In a real scenario, this could be fetched at build time.
const instagramPosts = [
    { id: 1, src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop", alt: "Casa Campestre Design" },
    { id: 2, src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop", alt: "Intrerior Design" },
    { id: 3, src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop", alt: "Construction Progress" },
    { id: 4, src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000&auto=format&fit=crop", alt: "Architectural Detail" },
];

export function InstagramGallery() {
    return (
        <section id="projects" className="py-20 bg-white dark:bg-black">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center mb-12 text-center">
                    <Link
                        href="https://instagram.com/ia.home"
                        target="_blank"
                        className="group flex items-center gap-3 text-2xl md:text-3xl font-bold hover:text-primary transition-colors"
                    >
                        <Instagram className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:scale-110 transition-transform" />
                        Síguenos en Instagram
                    </Link>
                    <p className="text-gray-500 mt-2">@ia.home - Nuestros últimos proyectos</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {instagramPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
                        >
                            <Link href="https://instagram.com/ia.home" target="_blank">
                                <Image
                                    src={post.src}
                                    alt={post.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <Instagram className="w-10 h-10 text-white" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
