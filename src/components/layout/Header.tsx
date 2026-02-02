"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Inicio", href: "#hero" },
    { name: "Servicios", href: "#services" },
    { name: "Nosotros", href: "#about" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-black/90 py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="text-2xl font-bold tracking-tighter">
                        <span className={cn("text-primary", !isScrolled && "text-white")}>IA</span>
                        <span className={cn("ml-1", isScrolled ? "text-foreground" : "text-white")}>
                            HOME
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                isScrolled ? "text-secondary" : "text-white/90 hover:text-white"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="https://wa.me/573001842017"
                        className={cn(
                            "flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all",
                            isScrolled
                                ? "bg-primary text-white hover:bg-red-700"
                                : "bg-white text-primary hover:bg-gray-100"
                        )}
                    >
                        <Phone className="w-4 h-4" />
                        <span>Cotizar</span>
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-primary"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu className={isScrolled ? "text-foreground" : "text-white"} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white dark:bg-black border-t dark:border-gray-800 shadow-xl p-4 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-2">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-lg font-medium p-2 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}
