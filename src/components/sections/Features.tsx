import { Shield, Clock, Video, KeyRound, Package, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const features = [
  { icon: Package, title: "Flexible", desc: "Sin permanencia" },
  { icon: Shield, title: "Seguridad 24/7", desc: "Vigilancia constante" },
  { icon: Video, title: "CCTV", desc: "Monitoreo activo" },
  { icon: KeyRound, title: "Acceso controlado", desc: "Solo autorizados" },
  { icon: Clock, title: "Inmediato", desc: "Uso al instante" },
  { icon: MapPin, title: "Ubicación", desc: "Norte de Bogotá" },
];

export function Features() {
  return (
    <section className="relative py-14 overflow-hidden bg-[#fff8f3]">

      {/* ================= BACKGROUND LIMPIO ================= */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.10),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_60%)]" />

      {/* glow suave */}
      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-orange-200/30 blur-3xl rounded-full" />

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">

        {/* HEADER */}
        <Reveal className="text-center mb-8">

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            ¿Por qué Atlas?
          </h2>

          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Seguridad y almacenamiento profesional en Bogotá
          </p>

        </Reveal>

        {/* GRID COMPACTO */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

          {features.map((f, i) => {
            const Icon = f.icon;

            return (
              <Reveal key={i} variant="up" delay={i * 40}>

                <div className="group bg-white border border-orange-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition hover:-translate-y-1">

                  <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center mb-3 group-hover:bg-orange-100 transition">
                    <Icon className="text-orange-500" size={18} />
                  </div>

                  <h3 className="text-sm font-bold text-gray-900">
                    {f.title}
                  </h3>

                  <p className="text-xs text-gray-500 mt-1">
                    {f.desc}
                  </p>

                </div>

              </Reveal>
            );
          })}

        </div>

        {/* CTA */}
        <Reveal className="mt-8 text-center">

          <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-5 py-2.5 rounded-xl font-semibold shadow-md hover:bg-orange-600 transition">
            Infraestructura segura en Bogotá
          </div>

        </Reveal>

      </div>
    </section>
  );
}