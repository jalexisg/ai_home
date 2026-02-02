"use client";

import { Send, Phone } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { cn } from "@/lib/utils";

export function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;

        setStatus("submitting");

        // EmailJS Credentials
        const serviceId = "service_q5w2r3v";
        const templateId = "template_ciidd8h";
        const publicKey = "G1PouWn7nHK-EKEpb";

        emailjs
            .sendForm(serviceId, templateId, form.current, publicKey)
            .then(
                () => {
                    setStatus("success");
                    form.current?.reset();
                    // Reset status after 3 seconds
                    setTimeout(() => setStatus("idle"), 3000);
                },
                (error) => {
                    console.error("FAILED...", error.text);
                    setStatus("error");
                    setTimeout(() => setStatus("idle"), 3000);
                }
            );
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
                    <form ref={form} onSubmit={handleSubmit} className="space-y-4 bg-white/5 p-8 rounded-xl border border-white/10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Nombre</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-primary transition"
                                    placeholder="Tu nombre"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Teléfono</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-primary transition"
                                    placeholder="300 123 4567"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Correo Electrónico</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-primary transition"
                                placeholder="tu@email.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Servicio de Interés</label>
                            <select name="service" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-primary transition text-gray-300">
                                <option value="Diseño Arquitectónico">Diseño Arquitectónico</option>
                                <option value="Construcción">Construcción</option>
                                <option value="Remodelación">Remodelación</option>
                                <option value="Renders">Renders</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Mensaje</label>
                            <textarea
                                name="message"
                                rows={4}
                                required
                                className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-primary transition"
                                placeholder="Detalles de tu proyecto..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === "submitting" || status === "success"}
                            className={cn(
                                "w-full py-4 rounded-lg font-bold transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                status === "error" ? "bg-red-600 text-white" : "bg-primary text-white hover:bg-red-700"
                            )}
                        >
                            {status === "submitting" ? (
                                "Enviando..."
                            ) : status === "success" ? (
                                "¡Mensaje Enviado!"
                            ) : status === "error" ? (
                                "Error. Intenta de nuevo."
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
