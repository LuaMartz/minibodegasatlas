import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Dónde están ubicadas las mini bodegas Atlas?",
    a: "Estamos en la Calle 161a # 17-75, Barrio Orquídeas Toberín, en el norte de Bogotá, con fácil acceso desde la Autopista Norte.",
  },
  {
    q: "¿Qué tamaños de mini bodega ofrecen?",
    a: "Ofrecemos espacios desde 3 m³ hasta 22 m³ (3, 6, 7, 11, 12, 13 y 22 metros cúbicos), ideales desde archivos hasta el contenido de una casa completa.",
  },
  {
    q: "¿Hay cláusula de permanencia?",
    a: "No. Manejamos contratos mensuales flexibles, sin cláusulas de permanencia ni compromisos a largo plazo.",
  },
  {
    q: "¿Qué seguridad tienen las bodegas?",
    a: "Vigilancia permanente 24/7, circuito cerrado de cámaras CCTV y acceso controlado a todas las áreas comunes.",
  },
  {
    q: "¿Puedo acceder a mi bodega cuando quiera?",
    a: "El acceso se coordina con cita previa dentro de nuestros horarios de atención para garantizar la seguridad de todos los clientes.",
  },
  {
    q: "¿Cuáles son los horarios de atención?",
    a: "Lunes a viernes de 7:30 a.m. a 5:00 p.m. y sábados de 7:30 a.m. a 2:00 p.m. El acceso a las bodegas se coordina con cita previa.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white" aria-labelledby="faq-title">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 id="faq-title" className="text-4xl md:text-5xl font-bold mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-600">
            Todo lo que necesitas saber sobre nuestras mini bodegas en Bogotá
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50 hover:shadow-md transition"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-lg text-gray-900">{item.q}</span>
                  <ChevronDown
                    size={22}
                    className={`flex-shrink-0 text-blue-600 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  id={`faq-panel-${i}`}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-gray-700 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
