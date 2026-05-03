import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import logo from "@/assets/Logo.png";
import heroImage from "@/assets/Bodega3.png";

const navLinks = [
  { href: "#features", label: "Características" },
  { href: "#location", label: "Ubicación" },
  { href: "#sizes", label: "Tamaños" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contacto" },
];

export function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Pasillo interior de Atlas Mini Bodegas en el norte de Bogotá"
          className="w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      {/* Navigation - Fixed */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md"
        aria-label="Navegación principal"
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <a href="#top" className="flex items-center" aria-label="Atlas Mini Bodegas — Inicio">
            <img src={logo} alt="Logo Atlas Mini Bodegas" className="h-14 md:h-20" />
          </a>
          <div className="hidden md:flex gap-6 text-gray-800">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative font-medium hover:text-blue-600 transition after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex gap-2 md:gap-3 items-center">
            <a
              href="tel:+573144212784"
              aria-label="Llamar al +57 314 421 2784"
              className="hidden sm:flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition shadow-sm hover:shadow-md"
            >
              <Phone size={18} />
              <span className="hidden lg:inline">+57 314 421 2784</span>
            </a>
            <a
              href="https://wa.me/573144212784"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Escribir por WhatsApp"
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition shadow-sm hover:shadow-md"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-800"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden bg-white border-t border-gray-100 transition-[max-height] duration-300 ${
            open ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg text-gray-800 hover:bg-blue-50 hover:text-blue-600 font-medium transition"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div id="top" className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center pt-20">
        <div className="max-w-3xl animate-fade-in-up">
          <span className="inline-block bg-blue-600/90 backdrop-blur text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-5 shadow-lg">
            📍 Norte de Bogotá · Toberín
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Mini Bodegas Seguras en el Norte de Bogotá
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            Alquila tu espacio desde 3 m³ hasta 22 m³. Vigilancia 24/7, cámaras CCTV y acceso controlado. Sin cláusulas de permanencia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/573144212784?text=Hola!%20Quiero%20cotizar%20una%20mini%20bodega"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 hover:scale-105 transition text-center flex items-center justify-center gap-2 shadow-xl font-semibold"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Cotiza por WhatsApp
            </a>
            <a
              href="#sizes"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition border border-white/30 text-center font-semibold"
            >
              Ver Tamaños Disponibles
            </a>
          </div>

          {/* Trust bar */}
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-white/90 text-sm">
            <span className="flex items-center gap-2">✅ Vigilancia 24/7</span>
            <span className="flex items-center gap-2">✅ Cámaras CCTV</span>
            <span className="flex items-center gap-2">✅ Sin permanencia</span>
            <span className="flex items-center gap-2">✅ Entrega inmediata</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce"></div>
        </div>
      </div>
    </header>
  );
}
