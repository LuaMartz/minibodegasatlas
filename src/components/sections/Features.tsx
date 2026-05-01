import { Shield, Clock, Video, Car, Package, Truck } from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Almacenamiento Flexible",
    description: "Mini bodegas sin cláusulas de permanencia con el espacio exacto que necesitas. Contratos mensuales."
  },
  {
    icon: Shield,
    title: "Máxima Seguridad",
    description: "Vigilancia permanente las 24 horas, cámaras de seguridad y acceso controlado para tu tranquilidad."
  },
  {
    icon: Video,
    title: "Cámaras y Control",
    description: "Circuito cerrado de TV en todas las áreas comunes y sistema de acceso controlado."
  },
  {
    icon: Truck,
    title: "Servicio de Mudanzas",
    description: "Ofrecemos servicio completo de mudanzas para facilitar el traslado de tus pertenencias."
  },
  {
    icon: Clock,
    title: "Entrega Inmediata",
    description: "Dispón de tu espacio de inmediato. Sin esperas ni trámites complicados."
  },
  {
    icon: Car,
    title: "Embalaje Profesional",
    description: "Preparación y protección de objetos mediante materiales adecuados para almacenamiento o traslado."
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">¿Por Qué Elegir Atlas?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Protección y manejo profesional de bienes. Espacios seguros, organizados y administrados para guardar tus pertenencias o mercancías en el norte de Bogotá.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-blue-600" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold mb-4 text-center">Nuestro Objetivo</h3>
            <p className="text-lg text-center leading-relaxed">
              Atlas busca caracterizarse por ofrecer protección y manejo de bienes, permitiendo a los usuarios disponer de espacios seguros, organizados y administrados profesionalmente para guardar sus pertenencias o mercancías.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}