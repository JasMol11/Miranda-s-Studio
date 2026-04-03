import { Link } from 'react-router';
import { FacebookIcon, InstagramIcon, MapPin } from 'lucide-react';
import logo from '@/assets/logo/LogoNegro1.png';

const WHATSAPP_NUMBER = '50376574608';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("¡Hola Miranda's Studio! 👋 Me gustaría obtener más información sobre sus servicios. 😊")}`;

const quickLinks = [
  { path: '/', label: 'Inicio' },
  { path: '/servicios', label: 'Servicios' },
  // { path: '/galeria', label: 'Galería' }, // próxima fase
  { path: '/promociones', label: 'Promociones' },
];

const exploreLinks = [
  { path: '/', label: 'Inicio' },
  { path: '/#sobre-nosotras', label: 'Nosotras' },
  { path: '/#servicios', label: 'Servicios' },
  { path: '/#galeria', label: 'Galería' },
  { path: '/#precios', label: 'Precios' },
  { path: '/#contacto', label: 'Contacto' },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#E496AC]/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Logo & Descripción */}
          <div className="md:col-span-2">
            <Link
              to="/"
              className="flex items-center"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img
                src={logo}
                alt="Miranda's Studio"
                className="h-25 w-auto"
              />
            </Link>

            <p className="text-muted-foreground mb-4">
              Tu destino para servicios de belleza premium. Especialistas en cabello y uñas, con muchos años de experiencia
            </p>

            {/* Ubicación */}
            <div className="flex items-start space-x-2 mb-4 text-muted-foreground">
              <MapPin size={18} className="mt-1 text-[#E496AC]" />
              <div>
                <p>San Antonio Abad, 131 Av. 2 de Abril, San Salvador, El Salvador</p>
                <div className="flex space-x-3 mt-2 text-sm">
                  <a
                    href="https://maps.app.goo.gl/fT1CwtTUBFJpBMMu6?g_st=ic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E496AC] hover:underline"
                  >
                    Abrir en Google Maps
                  </a>
                  <a
                    href="https://waze.com/ul/hd42w1bby7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E496AC] hover:underline"
                  >
                    Abrir en Waze
                  </a>
                </div>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/MirandasStudio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#F7E7E7] flex items-center justify-center text-[#E496AC] hover:bg-[#E496AC] hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon size={20} />
              </a>

              <a
                href="https://www.instagram.com/mirandas_studio.sv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#F7E7E7] flex items-center justify-center text-[#E496AC] hover:bg-[#E496AC] hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>

              <a
                href="https://www.tiktok.com/@mirandas_studio.sv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#F7E7E7] flex items-center justify-center text-[#E496AC] hover:bg-[#E496AC] hover:text-white transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#F7E7E7] flex items-center justify-center text-[#E496AC] hover:bg-[#E496AC] hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.52 3.48A11.94 11.94 0 0012.03 0C5.39 0 .02 5.37.02 12c0 2.11.55 4.16 1.6 5.97L0 24l6.18-1.62A11.96 11.96 0 0012.03 24c6.64 0 12.01-5.37 12.01-12 0-3.2-1.25-6.2-3.52-8.52zM12.03 21.8c-1.86 0-3.68-.5-5.28-1.46l-.38-.23-3.67.96.98-3.58-.25-.37a9.8 9.8 0 01-1.52-5.12c0-5.42 4.41-9.83 9.83-9.83s9.83 4.41 9.83 9.83-4.41 9.8-9.83 9.8zm5.39-7.34c-.29-.15-1.71-.84-1.97-.94-.27-.1-.46-.15-.66.15-.19.29-.75.94-.92 1.13-.17.19-.34.21-.63.07-.29-.15-1.23-.45-2.34-1.44-.87-.78-1.46-1.75-1.63-2.04-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.59-.91-2.17-.24-.58-.48-.5-.66-.51l-.56-.01c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.44s1.03 2.83 1.17 3.03c.15.19 2.02 3.08 4.89 4.32.68.29 1.2.46 1.61.59.68.21 1.3.18 1.79.11.55-.08 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.11-.26-.18-.55-.33z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="col-span-1 md:contents grid grid-cols-2 gap-8">
            {/* Enlaces Rápidos */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-[#E496AC] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Explorar */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Explorar</h3>
              <ul className="space-y-2">
                {exploreLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={link.path === '/' ? () => window.scrollTo({ top: 0, behavior: 'smooth' }) : undefined}
                      className="text-muted-foreground hover:text-[#E496AC] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
        </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-[#E496AC]/20 mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Miranda's Studio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
