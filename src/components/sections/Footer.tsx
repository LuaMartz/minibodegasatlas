import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/Logo.png";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img src={logo} alt="Atlas Mini Bodegas" className="h-20 mb-4" />
            <p className="text-gray-400 text-sm">
              Soluciones de almacenamiento seguras y accesibles en el norte de Bogotá.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Navegación</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#features" className="hover:text-blue-400 transition">Características</a>
              </li>
              <li>
                <a href="#sizes" className="hover:text-blue-400 transition">Tamaños y Precios</a>
              </li>
              <li>
                <a href="#location" className="hover:text-blue-400 transition">Ubicación</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition">Contacto</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📦 Mini Bodegas desde 3m³</li>
              <li>🔐 Almacenamiento Seguro</li>
              <li>👁️ Vigilancia 24/7</li>
              <li>🎥 Cámaras CCTV</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📍 Calle 161a # 17-75</li>
              <li>Barrio Orquídeas</li>
              <li>Norte de Bogotá</li>
              <li className="pt-2">
                <a href="tel:+573144212784" className="hover:text-blue-400 transition">
                  📞 +57 314 421 2784
                </a>
              </li>
              <li>
                <a href="https://wa.me/573144212784" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
                  💬 WhatsApp
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/atlas.minibodegas/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
                  📸 @atlas.minibodegas
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2026 Atlas Mini Bodegas. Todos los derechos reservados.
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://www.facebook.com/profile.php?id=61583507312072" 
              target="_blank" 
              rel="noopener noreferrer"
              title="Facebook"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="https://www.instagram.com/atlas.minibodegas/" 
              target="_blank" 
              rel="noopener noreferrer"
              title="Instagram"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://wa.me/573144212784" 
              target="_blank" 
              rel="noopener noreferrer"
              title="WhatsApp"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}