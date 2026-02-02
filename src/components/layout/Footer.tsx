import Link from "next/link";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-secondary text-white pt-16 pb-8">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Brand */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold">
                        <span className="text-primary">IA</span> HOME
                    </h3>
                    <p className="text-gray-400 max-w-xs">
                        Especialistas en arquitectura y construcción en la Mesa de los Santos.
                        Más de 25 años materializando proyectos de vida.
                    </p>
                    <div className="flex gap-4">
                        <Link href="https://instagram.com/ia.home" className="p-2 bg-white/10 rounded-full hover:bg-primary transition">
                            <Instagram className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                {/* Contact */}
                <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Contacto</h4>
                    <ul className="space-y-3 text-gray-400">
                        <li className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-primary" />
                            <span>Mesa de los Santos, Santander</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-primary" />
                            <span>+57 300 184 2017</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-primary" />
                            <span>contacto@iahome.com</span>
                        </li>
                    </ul>
                </div>

                {/* Services */}
                <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Servicios</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li>Diseños Arquitectónicos</li>
                        <li>Construcción de Casas Campestres</li>
                        <li>Renders Interiores y Exteriores</li>
                        <li>Remodelaciones</li>
                        <li>Estudio de Suelos</li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} IA HOME Inmuebles & Arquitectura. Todos los derechos reservados.
            </div>
        </footer>
    );
}
