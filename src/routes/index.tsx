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
    itemListElement: ["3", "6", "7", "11", "12", "13", "22"].map((s) => ({
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
        text: "Ofrecemos espacios desde 3 m³ hasta 22 m³ (3, 6, 7, 11, 12, 13 y 22 metros cúbicos), ideales desde archivos hasta el contenido de una casa completa.",
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
      name: "¿Ofrecen servicio de mudanza?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, contamos con servicio completo de mudanzas y embalaje profesional para facilitar el traslado de tus pertenencias.",
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
          "Alquila mini bodegas en el norte de Bogotá con vigilancia 24/7, cámaras CCTV y acceso controlado. Desde 3m³ hasta 22m³, sin cláusulas de permanencia. ¡Cotiza por WhatsApp!",
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
          "Mini bodegas con vigilancia 24/7, cámaras y acceso controlado. Sin cláusulas de permanencia. Desde 3m³ hasta 22m³.",
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
    </div>
  );
}
