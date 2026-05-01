import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { SpecialPromo } from "@/components/sections/SpecialPromo";
import { Features } from "@/components/sections/Features";
import { Sizes } from "@/components/sections/Sizes";
import { Location } from "@/components/sections/Location";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atlas Mini Bodegas | Almacenamiento Seguro en Bogotá" },
      {
        name: "description",
        content:
          "Mini bodegas con vigilancia 24/7, cámaras y acceso controlado en el norte de Bogotá. Sin cláusulas de permanencia.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <SpecialPromo />
      <Features />
      <Location />
      <Sizes />
      <Contact />
      <Footer />
    </div>
  );
}
