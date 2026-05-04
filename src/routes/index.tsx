import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { SpecialPromo } from "@/components/sections/SpecialPromo";
import { Features } from "@/components/sections/Features";
import { Sizes } from "@/components/sections/Sizes";
import { Location } from "@/components/sections/Location";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

const SITE_URL = "https://minibodegasatlas.lovable.app";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "SelfStorage",
  "@id": `${SITE_URL}/#business`,
  name: "Atlas Mini Bodegas",
  alternateName: "Mini Bodegas Atlas",
  description:
    "Mini bodegas de alquiler con vigilancia 24/7, cámaras de seguridad y acceso controlado en el norte de Bogotá. Sin cláusulas de permanencia.",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.ico`,
  image: `${SITE_URL}/og-image.jpg`,
  telephone: "+57 314 421 2784",
  priceRange: "$$",
  currenciesAccepted: "COP",
  paymentAccepted: "Cash, Credit Card, Bank Transfer",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle 161a # 17-75 Bodega 1",
    addressLocality: "Bogotá",
    addressRegion: "Cundinamarca",
    postalCode: "110141",
    addressCountry: "CO",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 4.7569,
    longitude: -74.041,
  },
  areaServed: [
    { "@type": "City", name: "Bogotá" },
    { "@type": "AdministrativeArea", name: "Cundinamarca" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "07:30",
      closes: "14:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/atlas.minibodegas/",
    "https://www.facebook.com/profile.php?id=61583507312072",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Mini Bodegas",
    itemListElement: ["3", "6", "7", "11", "12", "13", "22", "27", "33"].map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: `Mini Bodega ${s}m³` },
    })),
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Dónde están ubicadas las mini bodegas Atlas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Estamos en la Calle 161a # 17-75, Barrio Orquídeas Toberín, en el norte de Bogotá, con fácil acceso desde la Autopista Norte.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué tamaños de mini bodega ofrecen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ofrecemos espacios desde 3 m³ hasta 33 m³ (3, 6, 7, 11, 12, 13, 22, 27 y 33 metros cúbicos), ideales desde archivos hasta inventarios empresariales.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hay cláusula de permanencia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Manejamos contratos mensuales flexibles, sin cláusulas de permanencia ni compromisos a largo plazo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué seguridad tienen las bodegas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vigilancia permanente 24/7, circuito cerrado de cámaras CCTV y acceso controlado a las instalaciones.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo acceder a mi bodega cuando quiera?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El acceso a las bodegas se coordina con cita previa dentro de nuestros horarios de atención para garantizar la seguridad de todos los clientes.",
      },
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atlas Mini Bodegas Bogotá | Alquiler Seguro 24/7 desde 3m³" },
      {
        name: "description",
        content:
          "Alquila mini bodegas en el norte de Bogotá con vigilancia 24/7, cámaras CCTV y acceso controlado. Desde 3m³ hasta 33m³, sin cláusulas de permanencia. ¡Cotiza por WhatsApp!",
      },
      {
        name: "keywords",
        content:
          "mini bodegas Bogotá, alquiler bodegas norte Bogotá, self storage Bogotá, almacenamiento seguro, bodegas Toberín, mini bodegas Orquídeas, guardar muebles Bogotá",
      },
      { property: "og:title", content: "Atlas Mini Bodegas | Almacenamiento Seguro en el Norte de Bogotá" },
      {
        property: "og:description",
        content:
          "Mini bodegas con vigilancia 24/7, cámaras y acceso controlado. Sin cláusulas de permanencia. Desde 3m³ hasta 33m³.",
      },
      { name: "twitter:title", content: "Atlas Mini Bodegas Bogotá" },
      {
        name: "twitter:description",
        content:
          "Alquiler de mini bodegas seguras en el norte de Bogotá, vigilancia 24/7 y sin permanencia.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessJsonLd),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd),
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
      <Faq />
      <Contact />
      <Footer />
      <a
        href="https://wa.me/573144212784?text=Hola!%20Quiero%20cotizar%20una%20mini%20bodega"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Cotizar por WhatsApp"
        className="fixed bottom-5 right-5 z-50 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-2xl hover:scale-110 transition flex items-center gap-2 animate-pulse-ring"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span className="hidden sm:inline font-semibold pr-1">Cotizar por WhatsApp</span>
      </a>
    </div>
  );
}
