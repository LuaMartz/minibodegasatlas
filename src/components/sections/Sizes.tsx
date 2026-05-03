import { Check } from "lucide-react";
import image1 from "@/assets/bodega 1.png";
import image2 from "@/assets/Fachada.png";
import image3 from "@/assets/bodega 2.png";

const sizes = [
  {
    size: "3m³",
    ideal: "Cajas pequeñas, documentos, artículos personales",
    features: [
      "Ideal para archivos y documentos",
      "Perfecto para almacenamiento temporal",
      "Espacio compacto y seguro"
    ]
  },
  {
    size: "6m³",
    ideal: "Muebles pequeños, cajas medianas, equipos",
    features: [
      "Almacenamiento de objetos personales",
      "Inventario pequeño de negocio",
      "Equipos deportivos y herramientas"
    ]
  },
  {
    size: "7m³",
    ideal: "Contenido de habitación, inventario mediano",
    features: [
      "Muebles de una habitación",
      "Inventario comercial",
      "Electrodomésticos pequeños"
    ],
    featured: true
  },
  {
    size: "11m³",
    ideal: "Contenido de apartamento pequeño o inventario",
    features: [
      "Almacenamiento de muebles",
      "Inventario de negocio mediano",
      "Mudanzas parciales"
    ]
  },
  {
    size: "12m³",
    ideal: "Apartamento o inventario comercial grande",
    features: [
      "Contenido de apartamento completo",
      "Inventario comercial amplio",
      "Equipos de oficina"
    ]
  },
  {
    size: "13m³",
    ideal: "Casa pequeña o bodega comercial",
    features: [
      "Mudanzas completas",
      "Almacenamiento empresarial",
      "Múltiples espacios combinados"
    ]
  },
  {
    size: "22m³",
    ideal: "Casa completa o bodega comercial grande",
    features: [
      "Almacenamiento empresarial grande",
      "Inventario de distribución",
      "Soluciones comerciales completas"
    ]
  }
];

export function Sizes() {
  return (
    <section id="sizes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tamaños Disponibles</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tenemos espacios desde 3 metros cúbicos hasta 22 metros cúbicos. Encuentra el tamaño perfecto para tus necesidades.
          </p>
        </div>

        {/* Gallery Section */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={image1}
              alt="Pasillos de Atlas Mini Bodegas"
              loading="lazy"
              decoding="async"
              className="w-full h-[300px] object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={image2}
              alt="Interior de bodegas Atlas"
              loading="lazy"
              decoding="async"
              className="w-full h-[300px] object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={image3}
              alt="Bodegas Atlas - almacenamiento seguro"
              loading="lazy"
              decoding="async"
              className="w-full h-[300px] object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sizes.map((item, index) => (
            <div 
              key={index}
              className={`rounded-xl p-6 ${
                item.featured 
                  ? 'bg-blue-600 text-white ring-4 ring-blue-200 transform scale-105' 
                  : 'bg-gray-50'
              }`}
            >
              {item.featured && (
                <div className="text-center mb-4">
                  <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-bold">
                    MÁS POPULAR
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className={`text-5xl font-bold mb-4 ${item.featured ? 'text-white' : 'text-blue-600'}`}>
                  {item.size}
                </div>
              </div>

              <div className={`text-sm mb-4 pb-4 border-b ${item.featured ? 'border-white/20' : 'border-gray-200'}`}>
                {item.ideal}
              </div>

              <ul className="space-y-3 mb-6">
                {item.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2">
                    <Check 
                      size={20} 
                      className={`flex-shrink-0 mt-0.5 ${item.featured ? 'text-white' : 'text-blue-600'}`} 
                    />
                    <span className={`text-sm ${item.featured ? 'text-white' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a 
                href={`https://wa.me/573144212784?text=Hola!%20Quiero%20información%20sobre%20la%20bodega%20de%20${item.size}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3 rounded-lg font-semibold transition ${
                  item.featured
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Cotizar Ahora
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-3 text-blue-900">Sin Cláusulas de Permanencia</h3>
            <p className="text-gray-700 text-lg">
              ✓ Contratos mensuales flexibles<br />
              ✓ Entrega inmediata de tu espacio<br />
              ✓ El espacio exacto que necesitas<br />
              ✓ Sin compromisos a largo plazo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}