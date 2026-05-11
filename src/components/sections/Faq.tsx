import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Dónde están ubicadas las mini bodegas Atlas?",
    a: "Estamos en la Calle 161a # 17-75, Barrio Orquídeas Toberín, en el norte de Bogotá, con fácil acceso desde la Autopista Norte.",
  },
  {
    q: "¿Qué tamaños de mini bodega ofrecen?",
    a: "Ofrecemos espacios desde 3 m³ hasta 33 m³, ideales para almacenamiento personal, empresarial e inventarios.",
  },
  {
    q: "¿Hay cláusula de permanencia?",
    a: "No. Todos nuestros contratos son mensuales y flexibles, sin permanencia obligatoria.",
  },
  {
    q: "¿Qué seguridad tienen las bodegas?",
    a: "Contamos con vigilancia 24/7, CCTV y acceso controlado en todas las instalaciones.",
  },
  {
    q: "¿Puedo acceder cuando quiera?",
    a: "El acceso se realiza con coordinación previa dentro de los horarios establecidos para seguridad operativa.",
  },
  {
    q: "¿Cuáles son los horarios de atención?",
    a: "Lunes a viernes de 7:30 a.m. a 5:00 p.m. y sábados de 7:30 a.m. a 2:00 p.m.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-20 overflow-hidden bg-[#fff7f0]"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.10),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(251,146,60,0.08),transparent_60%)]" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2
            id="faq-title"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Preguntas Frecuentes
          </h2>

          <p className="text-gray-600 text-lg">
            Información clara sobre nuestras mini bodegas en Bogotá
          </p>
        </div>

        {/* ACCORDION */}
        <div className="space-y-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;

            return (
              <div
                key={i}
                className="border border-orange-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-semibold text-gray-900 text-lg">
                    {item.q}
                  </span>

                  <ChevronDown
                    size={22}
                    className={`text-orange-500 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {item.a}
                    </p>
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