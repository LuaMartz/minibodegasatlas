import { MapPin, Navigation } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function Location() {
  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ubicación Privilegiada</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ubicados en el norte de Bogotá, con fácil acceso desde las principales vías
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Map */}
          <Reveal variant="left" className="rounded-2xl overflow-hidden shadow-lg h-[400px] md:h-[500px] hover-lift">
            <iframe
              src="https://www.google.com/maps?q=Calle+161a+%2317-75,+Bogot%C3%A1,+Colombia&output=embed"
              title="Ubicación Atlas Mini Bodegas en Bogotá"
              width="100%"
              height="100%"
              loading="lazy"
              className="border-0 w-full h-full"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Reveal>

          {/* Location Details */}
          <Reveal variant="right">
            <div className="bg-white p-8 rounded-xl shadow-sm mb-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Dirección</h3>
                  <p className="text-gray-700">
                    Calle 161a # 17-75 Bodega 1<br />
                    Barrio Orquídeas Toberín<br />
                    Norte de Bogotá, Colombia
                  </p>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-bold mb-3">Características de Ubicación:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>📍 Fácil acceso desde la Autopista Norte</li>
                  <li>📍 Zona segura del norte de Bogotá</li>
                  <li>📍 Cerca de principales vías de acceso</li>
                  <li>📍 Excelente conectividad con toda la ciudad</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-600 text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Horarios de Atención</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Lunes a Viernes:</span>
                  <span className="font-bold">7:30 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados:</span>
                  <span className="font-bold">7:30 AM - 2:00 PM</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20 text-sm">
                *Acceso a las bodegas coordinado con cita previa
              </div>
            </div>

            <a
              href="https://wa.me/573144212784?text=Hola!%20Quisiera%20cotizar%20una%20mini%20bodega%20y%20saber%20cómo%20llegar"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 bg-green-600 text-white py-4 px-6 rounded-lg hover:bg-green-700 transition shadow-lg font-semibold"
            >
              <Navigation size={20} />
              Cotizar y Agendar Visita por WhatsApp
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}