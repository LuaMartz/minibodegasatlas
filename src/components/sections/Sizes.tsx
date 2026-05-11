import { Check, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

import image1 from "@/assets/bodega 1.png";
import image2 from "@/assets/Fachada.png";
import image3 from "@/assets/bodega 2.png";

const sizes = [
  {
    size: "3m³",
    recommended: "Documentos, cajas pequeñas y artículos personales",
  },
  {
    size: "6m³",
    recommended: "Muebles pequeños, herramientas o inventario básico",
  },
  {
    size: "11m³",
    recommended: "Mudanzas parciales o almacenamiento mediano",
    featured: true,
  },
  {
    size: "12m³",
    recommended: "Inventario comercial o apartamento pequeño",
  },
  {
    size: "13m³",
    recommended: "Bodega comercial o almacenamiento familiar",
  },
  {
    size: "22m³",
    recommended: "Inventario empresarial y almacenamiento amplio",
  },
  {
    size: "27m³",
    recommended: "Oficinas, e-commerce o mudanzas grandes",
  },
  {
    size: "33m³",
    recommended: "Grandes volúmenes y almacenamiento corporativo",
  },
];

const benefits = [
  "Seguridad 24/7",
  "Acceso controlado",
  "Contratos flexibles",
  "Entrega inmediata",
];

export function Sizes() {
  return (
    <section
      id="sizes"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <Reveal className="text-center mb-16">
          <span className="inline-flex bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-5">
            Espacios Disponibles
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-gray-900">
            Mini Bodegas de Diferentes Tamaños
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Contamos con espacios desde <strong>3 m³ hasta 33 m³</strong>,
            ideales para almacenamiento personal, empresarial, inventarios,
            mudanzas y mercancía.
          </p>
        </Reveal>

        {/* Gallery */}
        <div className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              src: image1,
              alt: "Pasillos Atlas Mini Bodegas",
              v: "left" as const,
            },
            {
              src: image2,
              alt: "Instalaciones Atlas",
              v: "up" as const,
            },
            {
              src: image3,
              alt: "Mini bodegas seguras",
              v: "right" as const,
            },
          ].map((g, i) => (
            <Reveal
              key={i}
              variant={g.v}
              delay={i * 120}
              className="overflow-hidden rounded-3xl shadow-xl hover-lift"
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="w-full h-[320px] object-cover transition duration-700 hover:scale-110"
              />
            </Reveal>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7">
          {sizes.map((item, index) => (
            <Reveal
              key={index}
              variant="zoom"
              delay={(index % 4) * 80}
              className={`relative rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                item.featured
                  ? "bg-blue-600 border-blue-600 text-white shadow-xl"
                  : "bg-white border-gray-200"
              }`}
            >
              {item.featured && (
                <div className="absolute top-4 right-4">
                  <span className="bg-white text-blue-600 text-xs font-bold px-3 py-1 rounded-full shadow">
                    MÁS SOLICITADA
                  </span>
                </div>
              )}

              <div className="p-7">
                {/* Size */}
                <div className="mb-6">
                  <div
                    className={`text-5xl font-black mb-2 ${
                      item.featured ? "text-white" : "text-blue-600"
                    }`}
                  >
                    {item.size}
                  </div>

                  <p
                    className={`text-sm leading-relaxed ${
                      item.featured ? "text-blue-100" : "text-gray-600"
                    }`}
                  >
                    Recomendado para:
                  </p>

                  <p
                    className={`mt-2 font-medium ${
                      item.featured ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {item.recommended}
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-3 mb-8">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          item.featured
                            ? "bg-white/20"
                            : "bg-blue-100"
                        }`}
                      >
                        <Check
                          size={14}
                          className={
                            item.featured
                              ? "text-white"
                              : "text-blue-600"
                          }
                        />
                      </div>

                      <span
                        className={`text-sm ${
                          item.featured
                            ? "text-blue-50"
                            : "text-gray-700"
                        }`}
                      >
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={`https://wa.me/573144212784?text=Hola!%20Quiero%20información%20sobre%20la%20bodega%20de%20${item.size}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                    item.featured
                      ? "bg-white text-blue-600 hover:bg-gray-100"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  Cotizar
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom banner */}
        <Reveal variant="up" className="mt-20">
          <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-blue-700 to-blue-600 text-white p-10 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  Flexibilidad Total
                </h3>

                <p className="text-blue-100 leading-relaxed">
                  Elige únicamente el espacio que necesitas. Sin cláusulas
                  largas, sin procesos complicados y con disponibilidad
                  inmediata.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "Contratos mensuales",
                  "Acceso seguro",
                  "Entrega inmediata",
                  "Ubicación estratégica",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center"
                  >
                    <Check className="mx-auto mb-2" size={22} />
                    <p className="text-sm font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}