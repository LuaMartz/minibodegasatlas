import promoImage1 from "@/assets/reserva-mini-bodega.png";
import promoImage2 from "@/assets/alquila-mini-bodega.png";

export function SpecialPromo() {
  return (
    <section className="relative py-16 overflow-hidden bg-[#061a33]">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(29,78,216,0.25),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.12),transparent_45%)]" />

      {/* soft ambient glow */}
      <div className="absolute top-[-140px] right-[-140px] w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-[-140px] left-[-140px] w-[500px] h-[500px] bg-indigo-500/10 blur-3xl rounded-full" />

      <div className="container mx-auto px-4 relative z-10">

        {/* ================= CARD ================= */}
        <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 md:p-10 shadow-2xl">

          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT */}
            <div>

              {/* badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-400/30 text-blue-200 text-sm font-semibold shadow-sm">
                🔵 Promoción activa · Cupos limitados
              </div>

              <h2 className="mt-5 text-3xl md:text-5xl font-extrabold text-white leading-tight">
                Ahorra más en tu
                <span className="block text-blue-300">
                  mini bodega hoy
                </span>
              </h2>

              <p className="mt-4 text-white/70 text-base md:text-lg">
                Espacios seguros, flexibles y disponibles de inmediato.
                Oferta especial por tiempo limitado.
              </p>

              {/* CTA */}
              <div className="mt-6">
                <a
                  href="https://wa.me/573144212784?text=Hola!%20Quiero%20la%20promoción"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white px-7 py-3 rounded-xl font-bold shadow-lg transition hover:scale-[1.03]"
                >
                  Reclamar ahora
                </a>
              </div>

            </div>

            {/* RIGHT */}
            <div className="grid grid-cols-2 gap-4">

              <img
                src={promoImage1}
                className="rounded-2xl border border-white/10 shadow-xl hover:scale-105 transition duration-300 object-cover h-44 md:h-52 w-full"
                alt="Mini bodega reserva"
              />

              <img
                src={promoImage2}
                className="rounded-2xl border border-white/10 shadow-xl hover:scale-105 transition duration-300 object-cover h-44 md:h-52 w-full"
                alt="Mini bodega alquiler"
              />

            </div>

          </div>

        </div>

        {/* CTA inferior */}
        <div className="mt-10 flex justify-center">

          <a
            href="https://wa.me/573144212784"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-900 px-7 py-3 rounded-xl font-bold hover:bg-gray-100 transition shadow-md"
          >
            Cotizar ahora
          </a>

        </div>

      </div>
    </section>
  );
}