import { useState } from "react";
import {
  Mail,
  Clock3,
  Instagram,
  Facebook,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    size: "",
    storage: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `
Hola 👋

Quiero información sobre una mini bodega.

👤 Nombre: ${formData.name}
📧 Correo: ${formData.email}
📦 Tamaño: ${formData.size}
📋 Lo que guardaré: ${formData.storage}
    `.trim();

    const url = `https://wa.me/573144212784?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");

    setFormData({
      name: "",
      email: "",
      size: "",
      storage: "",
    });
  };

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden bg-[#071120]"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.25),transparent_30%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.15),transparent_25%)]" />

      <div className="container relative z-10 mx-auto px-4">
        <Reveal className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-sm font-medium mb-6">
            CONTACTO Y COTIZACIÓN
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-5">
            Encuentra Tu
            <span className="block text-blue-400">
              Espacio Ideal
            </span>
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Mini bodegas seguras y flexibles en el norte de Bogotá.
            Cotiza fácilmente y recibe atención personalizada.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto items-start">
          {/* LEFT SIDE */}
          <Reveal variant="left">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 h-full">
              <h3 className="text-3xl font-bold text-white mb-10">
                Información
              </h3>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center shrink-0">
                    <Mail className="text-blue-400" size={24} />
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Correo Electrónico
                    </h4>

                    <a
                      href="mailto:atlasminibodegas@gmail.com"
                      className="text-gray-300 hover:text-blue-400 transition"
                    >
                      atlasminibodegas@gmail.com
                    </a>
                  </div>
                </div>

                {/* Horarios */}
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-400/20 flex items-center justify-center shrink-0">
                    <Clock3 className="text-green-400" size={24} />
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Horarios
                    </h4>

                    <p className="text-gray-300">
                      Lunes a Viernes
                      <br />
                      7:30 AM – 5:00 PM
                    </p>

                    <p className="text-gray-300 mt-2">
                      Sábados
                      <br />
                      7:30 AM – 2:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Redes */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <h4 className="text-white font-semibold mb-5">
                  Redes Sociales
                </h4>

                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/atlas.minibodegas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-pink-500 hover:border-pink-500 transition-all duration-300 hover:scale-110"
                  >
                    <Instagram size={24} />
                  </a>

                  <a
                    href="https://www.facebook.com/profile.php?id=61583507312072"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 hover:scale-110"
                  >
                    <Facebook size={24} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* FORM */}
          <Reveal variant="right">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="p-8 md:p-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  Solicita una Cotización
                </h3>

                <p className="text-gray-600 mb-8">
                  Completa el formulario y te redirigiremos automáticamente a WhatsApp.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nombre */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombre Completo
                    </label>

                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="w-full rounded-2xl border border-gray-200 px-5 py-4 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Correo Electrónico
                    </label>

                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="correo@ejemplo.com"
                      className="w-full rounded-2xl border border-gray-200 px-5 py-4 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                    />
                  </div>

                  {/* Tamaño */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Tamaño Aproximado
                    </label>

                    <select
                      name="size"
                      value={formData.size}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-gray-200 px-5 py-4 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="3m³">3m³</option>
                      <option value="6m³">6m³</option>
                      <option value="11m³">11m³</option>
                      <option value="12m³">12m³</option>
                      <option value="13m³">13m³</option>
                      <option value="22m³">22m³</option>
                      <option value="27m³">27m³</option>
                      <option value="33m³">33m³</option>
                    </select>
                  </div>

                  {/* Qué guardará */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      ¿Qué deseas almacenar?
                    </label>

                    <textarea
                      name="storage"
                      rows={4}
                      value={formData.storage}
                      onChange={handleChange}
                      placeholder="Ej: muebles, cajas, mercancía, archivos..."
                      className="w-full rounded-2xl border border-gray-200 px-5 py-4 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 transition resize-none"
                    />
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    className="group w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:-translate-y-1"
                  >
                    Cotizar por WhatsApp

                    <ArrowRight
                      size={20}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>

                  <p className="text-center text-sm text-gray-500">
                    Respuesta rápida y atención personalizada.
                  </p>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}