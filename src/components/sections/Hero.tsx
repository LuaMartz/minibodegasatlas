import { useState } from "react";
import {
  Phone,
  Menu,
  X,
  ShieldCheck,
  Clock3,
  Warehouse,
  MapPin,
  ArrowRight,
} from "lucide-react";

import logo from "@/assets/Logo.png";
import heroImage from "@/assets/Bodega3.png";

const navLinks = [
  { href: "#features", label: "Características" },
  { href: "#sizes", label: "Tamaños" },
  { href: "#location", label: "Ubicación" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contacto" },
];

export function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <header id="top" className="relative min-h-screen overflow-hidden">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Atlas Mini Bodegas Bogotá"
          className="w-full h-full object-cover scale-105"
          fetchPriority="high"
        />

        {/* Overlay más premium (menos agresivo) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

        {/* Glow más suave y elegante */}
        <div className="absolute top-[-120px] right-[-120px] w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full" />
      </div>

      {/* ================= NAVBAR (PREMIUM BLANCO) ================= */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4">

          <div className="flex items-center justify-between py-4">

            {/* Logo */}
            <a href="#top" className="flex items-center">
              <img
                src={logo}
                alt="Atlas Mini Bodegas"
                className="h-12 md:h-14 object-contain"
              />
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition text-sm font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-3">

              <a
                href="tel:+573144212784"
                className="flex items-center gap-2 text-gray-700 border border-gray-200 hover:border-gray-300 px-4 py-2 rounded-xl bg-white transition"
              >
                <Phone size={16} />
                <span className="text-sm font-medium">
                  +57 314 421 2784
                </span>
              </a>

              <a
                href="https://wa.me/573144212784?text=Hola,%20quiero%20información%20sobre%20las%20mini%20bodegas"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-xl transition shadow-lg font-semibold"
              >
                WhatsApp
              </a>

            </div>

            {/* Mobile button */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-gray-800 p-2"
              aria-label="Abrir menú"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>

          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-6" : "max-h-0"}`}>
            <div className="flex flex-col gap-2 pt-4">

              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-700 hover:text-blue-600 py-3 border-b border-gray-100"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="https://wa.me/573144212784"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-green-600 text-white text-center py-3 rounded-xl font-semibold"
              >
                Cotizar por WhatsApp
              </a>

            </div>
          </div>

        </div>
      </nav>

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20 min-h-screen flex items-center">

        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

          {/* LEFT */}
          <div className="max-w-3xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full mb-6">
              <MapPin size={16} />
              <span className="text-sm font-medium">
                Norte de Bogotá · Toberín
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black text-white leading-[0.95] mb-6">
              Espacios
              <span className="block text-orange-400">
                Seguros
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mb-10">
              Mini bodegas con acceso controlado y contratos flexibles.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">

              <a
                href="https://wa.me/573144212784?text=Hola,%20quiero%20cotizar%20una%20mini%20bodega"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition flex items-center justify-center gap-3 shadow-xl"
              >
                Cotizar ahora
                <ArrowRight className="group-hover:translate-x-1 transition" size={20} />
              </a>

              <a
                href="#sizes"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold backdrop-blur text-center"
              >
                Ver tamaños
              </a>

            </div>

            {/* FEATURES */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

              {[
                { icon: ShieldCheck, text: "Seguridad 24/7 h" },
                { icon: Clock3, text: "Entrega inmediata" },
                { icon: Warehouse, text: "Desde 3 m³ hasta 33 m³" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/10 border border-white/10 backdrop-blur-md rounded-2xl p-4"
                >
                  <item.icon className="text-blue-400 mb-3" size={28} />
                  <p className="text-white font-semibold text-sm">
                    {item.text}
                  </p>
                </div>
              ))}

            </div>

          </div>

          {/* RIGHT CARD */}
          <div className="hidden lg:flex justify-end">

            <div className="w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl">

              <h3 className="text-3xl font-bold text-white mb-6">
                Almacenamiento flexible
              </h3>

              <div className="space-y-4 mb-8">
                {[
                  "Sin cláusulas de permanencia",
                  "Espacios para empresas y hogar",
                  "Atención personalizada",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/90">
                    <div className="w-2.5 h-2.5 bg-green-400 rounded-full" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold transition"
              >
                Solicitar información
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="w-7 h-12 border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className="w-1.5 h-3 bg-white rounded-full animate-bounce" />
        </div>
      </div>

    </header>
  );
}