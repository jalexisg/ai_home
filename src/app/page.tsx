import Link from "next/link";
import Image from "next/image";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { InstagramGallery } from "@/components/sections/InstagramGallery";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center p-4 bg-gradient-to-b from-black/80 to-black/40 text-white overflow-hidden">
        {/* Background Overlay or Image Placeholder */}
        <div className="absolute inset-0 bg-zinc-900 -z-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
        </div>

        <div className="flex flex-col items-center gap-6 max-w-4xl z-10 animate-in fade-in zoom-in duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
            IA HOME
            <span className="block text-2xl md:text-4xl font-normal text-primary mt-2">Inmuebles & Arquitectura</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl text-gray-200">
            Más de 25 años de experiencia construyendo sueños en la Mesa de los Santos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="https://wa.me/573001842017"
              className="px-8 py-4 bg-primary text-white rounded-lg font-bold text-lg hover:bg-red-700 transition shadow-lg hover:shadow-primary/25"
            >
              Cotizar Proyecto
            </Link>
            <Link
              href="#services"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-black transition"
            >
              Ver Servicios
            </Link>
          </div>
        </div>
      </section>

      <Services />

      {/* About Section */}
      <section id="about" className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Experiencia y Calidad</h2>
            <p className="text-gray-600 text-lg">
              Estamos ubicados en la Mesa de los Santos. Con más de dos décadas en el mercado, nos especializamos en transformar ideas en espacios habitables y funcionales.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Compromiso con la calidad
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Diseños personalizados
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Materiales de primera
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Cumplimiento de normas
              </li>
            </ul>
          </div>
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/images/experience.png"
              alt="Casa Campestre Moderna en Mesa de los Santos"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      <InstagramGallery />
      <Contact />
    </main>
  );
}
