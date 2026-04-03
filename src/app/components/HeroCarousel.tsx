import { useRef } from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ArrowProps {
  onClick?: () => void;
  direction: 'left' | 'right';
}

function Arrow({ onClick, direction }: ArrowProps) {
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-[#E496AC] transition-all shadow-lg hover:scale-110 ${
        direction === 'left' ? 'left-4 md:left-8' : 'right-4 md:right-8'
      }`}
      aria-label={direction === 'left' ? 'Anterior' : 'Siguiente'}
    >
      {direction === 'left' ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
    </button>
  );
}

export function HeroCarousel() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    fade: true,
    arrows: false,
    dotsClass: 'slick-dots !bottom-8',
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all" />
    ),
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1595436790404-ae5494edcf00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWF1dHklMjBzYWxvbiUyMGludGVyaW9yJTIwcGluayUyMGVsZWdhbnR8ZW58MXx8fHwxNzcxNTM4NzgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Miranda\'s Studio',
      subtitle: 'Tu belleza, nuestra pasión',
      description: 'Servicios premium de cabello y uñas',
      type: 'welcome',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1633681138600-295fcd688876?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMHByb21vdGlvbiUyMHNwZWNpYWwlMjBvZmZlcnxlbnwxfHx8fDE3NzE1Mzg3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Promoción Febrero',
      subtitle: '20% de Descuento',
      description: 'Tinte + Mechas + Corte',
      validUntil: '28 de Febrero, 2026',
      type: 'promo',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1580421383874-7e60f05f64b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHNhbG9uJTIwcHJvZmVzc2lvbmFscyUyMHNtaWxpbmd8ZW58MXx8fHwxNzcxNTM4Nzg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Experimenta la Diferencia',
      subtitle: 'Equipo de Profesionales Certificados',
      description: 'Dedicados a realzar tu belleza natural',
      type: 'cta',
    },
  ];

  return (
    <div className="relative h-screen">
      <style>{`
        .slick-dots li button:before {
          display: none;
        }
        .slick-dots li {
          margin: 0 6px;
        }
        .slick-dots li.slick-active > div {
          background-color: white;
          transform: scale(1.2);
        }
      `}</style>

      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative h-screen">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl text-white">
                  {slide.type === 'welcome' && (
                    <>
                      <h1 
                        className="text-5xl md:text-7xl mb-4 animate-fade-in"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {slide.title}
                      </h1>
                      <p 
                        className="text-2xl md:text-3xl mb-6 text-[#EBBDC9]"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {slide.subtitle}
                      </p>
                      <p className="text-lg md:text-xl mb-8 text-white/90" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {slide.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button 
                          size="lg"
                          onClick={() => scrollToSection('servicios')}
                          className="bg-[#E496AC] hover:bg-[#d4809a] text-white px-8 py-6 text-lg"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          Ver Servicios
                        </Button>
                        <Button 
                          size="lg"
                          onClick={() => scrollToSection('contacto')}
                          variant="outline"
                          className="border-2 border-white text-white hover:bg-white hover:text-[#E496AC] px-8 py-6 text-lg"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          Contactar
                        </Button>
                      </div>
                    </>
                  )}

                  {slide.type === 'promo' && (
                    <>
                      <div className="inline-block bg-[#E496AC] text-white px-4 py-2 rounded-full mb-4">
                        <span style={{ fontFamily: "'Inter', sans-serif" }}>✨ OFERTA ESPECIAL</span>
                      </div>
                      <h2 
                        className="text-4xl md:text-6xl mb-4"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {slide.title}
                      </h2>
                      <p className="text-3xl md:text-4xl mb-4 text-[#EBBDC9]" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {slide.subtitle}
                      </p>
                      <p className="text-xl md:text-2xl mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {slide.description}
                      </p>
                      <p className="text-sm mb-8 text-white/80" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Válido hasta: {slide.validUntil}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/promociones">
                          <Button 
                            size="lg"
                            className="bg-[#E496AC] hover:bg-[#d4809a] text-white px-8 py-6 text-lg"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            Ver Promociones
                          </Button>
                        </Link>
                        <Button 
                          size="lg"
                          onClick={() => scrollToSection('contacto')}
                          variant="outline"
                          className="border-2 border-white text-white hover:bg-white hover:text-[#E496AC] px-8 py-6 text-lg"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          Reservar
                        </Button>
                      </div>
                    </>
                  )}

                  {slide.type === 'cta' && (
                    <>
                      <h2 
                        className="text-4xl md:text-6xl mb-4"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {slide.title}
                      </h2>
                      <p className="text-2xl md:text-3xl mb-4 text-[#EBBDC9]" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {slide.subtitle}
                      </p>
                      <p className="text-lg md:text-xl mb-8 text-white/90" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {slide.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button 
                          size="lg"
                          onClick={() => scrollToSection('sobre-nosotros')}
                          className="bg-[#E496AC] hover:bg-[#d4809a] text-white px-8 py-6 text-lg"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          Conocer Más
                        </Button>
                        <a href="https://wa.me/50376574608" target="_blank" rel="noopener noreferrer">
                          <Button 
                            size="lg"
                            variant="outline"
                            className="border-2 border-white text-white hover:bg-white hover:text-[#E496AC] px-8 py-6 text-lg"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            WhatsApp
                          </Button>
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Navigation Arrows */}
      <Arrow onClick={() => sliderRef.current?.slickPrev()} direction="left" />
      <Arrow onClick={() => sliderRef.current?.slickNext()} direction="right" />
    </div>
  );
}
