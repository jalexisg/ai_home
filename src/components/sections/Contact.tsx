"use client";

import { Send, Phone } from "lucide-react";
import { useState } from "react";

export function Contact() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        // Simulate form submission
        setTimeout(() => setStatus("success"), 1000);
    };

    return (
        <section id="contact" className="py-20 bg-zinc-900 text-white">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Info */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">Trabajemos Juntos</h2>
                        <p className="text-gray-400 text-lg">
                            Cuéntanos sobre tu proyecto. Ya sea una remodelación, diseño arquitectónico o construcción desde cero, estamos para asesorarte.
                        </p>

                        <div className="p-6 bg-white/5 rounded-xl space-y-4">
                            <h3 className="text-xl font-semibold text-primary">Atención Personalizada</h3>
                            <p className="text-sm text-gray-400">
                                Estamos ubicados en la Mesa de los Santos, lo que nos permite una supervisión constante y directa de las obras en la región.
                            </p>
                            <div className="flex gap-4 pt-4">
                                <a
                                    href="https://wa.me/573001842017"
                                    className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-medium transition"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Phone className="w-5 h-5" />
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4 bg-white/5 p-8 rounded-xl border border-white/10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Nombre</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-primary transition"
                                    placeholder="Tu nombre"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Teléfono</label>
                                <input
                                    type="tel"
                                    required
                                    className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-primary transition"
                                    placeholder="300 123 4567"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Servicio de Interés</label>
                            <select className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-primary transition text-gray-300">
                                <option>Diseño Arquitectónico</option>
                                <option>Construcción</option>
                                <option>Remodelación</option>
                                <option>Renders</option>
                                <option>Otro</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Mensaje</label>
                            <textarea
                                rows={4}
                                required
                                className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-primary transition"
                                placeholder="Detalles de tu proyecto..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === "submitting" || status === "success"}
                            className="w-full py-4 bg-primary text-white rounded-lg font-bold hover:bg-red-700 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === "submitting" ? (
                                "Enviando..."
                            ) : status === "success" ? (
                                "Mensaje Enviado"
                            ) : (
                                <>
                                    Enviar Mensaje <Send className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
