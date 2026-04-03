import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';
import logo from '@/assets/logo/LogoNegro1.png';

const WHATSAPP_NUMBER = '50376574608';

const navLinks = [
  { path: '/', label: 'Inicio' },
  { path: '/servicios', label: 'Servicios' },
  { path: '/g', label: 'Galeria' },
  { path: '/p', label: 'Promociones' },
];

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("¡Hola Miranda's Studio! 👋 Me gustaría obtener más información sobre sus servicios. 😊")}`;

const WhatsAppIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.52 3.48A11.94 11.94 0 0012.03 0C5.39 0 .02 5.37.02 12c0 2.11.55 4.16 1.6 5.97L0 24l6.18-1.62A11.96 11.96 0 0012.03 24c6.64 0 12.01-5.37 12.01-12 0-3.2-1.25-6.2-3.52-8.52zM12.03 21.8c-1.86 0-3.68-.5-5.28-1.46l-.38-.23-3.67.96.98-3.58-.25-.37a9.8 9.8 0 01-1.52-5.12c0-5.42 4.41-9.83 9.83-9.83s9.83 4.41 9.83 9.83-4.41 9.8-9.83 9.8zm5.39-7.34c-.29-.15-1.71-.84-1.97-.94-.27-.1-.46-.15-.66.15-.19.29-.75.94-.92 1.13-.17.19-.34.21-.63.07-.29-.15-1.23-.45-2.34-1.44-.87-.78-1.46-1.75-1.63-2.04-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.59-.91-2.17-.24-.58-.48-.5-.66-.51l-.56-.01c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.44s1.03 2.83 1.17 3.03c.15.19 2.02 3.08 4.89 4.32.68.29 1.2.46 1.61.59.68.21 1.3.18 1.79.11.55-.08 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.11-.26-.18-.55-.33z" />
  </svg>
);

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    if (location.pathname !== '/') {
      navigate('/#contacto');
    } else {
      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src={logo}
              alt="Miranda's Studio"
              className="h-15 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors hover:text-[#E496AC] ${
                  location.pathname === link.path ? 'text-[#E496AC]' : 'text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* ✅ Botón con ícono de WhatsApp que abre chat con mensaje precargado */}
            <Button
              asChild
              className="bg-[#E496AC] hover:bg-[#d4809a] text-white flex items-center gap-2"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                Contactar
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground hover:text-[#E496AC] transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ✅ Mobile Navigation con animación suave usando AnimatePresence */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="md:hidden py-4 space-y-4 border-t border-border"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 transition-colors hover:text-[#E496AC] ${
                    location.pathname === link.path ? 'text-[#E496AC]' : 'text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <Button
                asChild
                className="w-full bg-[#E496AC] hover:bg-[#d4809a] text-white flex items-center justify-center gap-2"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon />
                  Contactar
                </a>
              </Button>
            </motion.nav>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}