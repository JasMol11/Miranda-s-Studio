import { useState, useEffect, useLayoutEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Badge } from '../components/ui/badge';
import { Check, Clock, MessageCircle, Sparkles, Calendar, Gift } from 'lucide-react';
import { motion } from 'motion/react';

export function Promotions() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Countdown to end of February
  useEffect(() => {
    const targetDate = new Date('2026-02-28T23:59:59');
    
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const featuredPromo = {
    title: 'Paquete Transformación Completa',
    subtitle: '20% de Descuento',
    description: 'Renuévate completamente con nuestro paquete más popular',
    validUntil: '28 de Febrero, 2026',
    regularPrice: '$95',
    discountedPrice: '$76',
    code: 'FEBRERO20',
    includes: [
      'Tinte completo con color premium',
      'Mechas o balayage',
      'Corte profesional',
      'Tratamiento hidratante',
      'Peinado y acabado',
      'Productos para llevar a casa',
    ],
    image: 'https://images.unsplash.com/photo-1633681138600-295fcd688876?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMHByb21vdGlvbiUyMHNwZWNpYWwlMjBvZmZlcnxlbnwxfHx8fDE3NzE1Mzg3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  };

  const otherPromos = [
    {
      title: 'Día de Spa para Uñas',
      description: 'Manicure + Pedicure Spa con diseño',
      regularPrice: '$35',
      discountedPrice: '$28',
      discount: '20%',
      validUntil: '28 Feb 2026',
      badge: 'Popular',
      image: 'https://images.unsplash.com/photo-1688583417757-9060cba25399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwc2Fsb24lMjBtYW5pY3VyZSUyMGhhbmRzJTIwcGlua3xlbnwxfHx8fDE3NzE1Mzg3ODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Tratamiento Keratina Premium',
      description: 'Alisa y nutre tu cabello por meses',
      regularPrice: '$60',
      discountedPrice: '$48',
      discount: '20%',
      validUntil: '28 Feb 2026',
      badge: 'Limitado',
      image: 'https://images.unsplash.com/photo-1611169035510-f9af52e6dbe2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMGtlcmF0aW4lMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzcxNTM4Nzg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Uñas Acrílicas + Diseño',
      description: 'Uñas acrílicas completas con nail art',
      regularPrice: '$37',
      discountedPrice: '$30',
      discount: '19%',
      validUntil: '28 Feb 2026',
      badge: 'Nuevo',
      image: 'https://images.unsplash.com/photo-1588759028629-5e720f8247ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3J5bGljJTIwbmFpbHMlMjBwaW5rJTIwZGVzaWdufGVufDF8fHx8MTc3MTUzODc4NHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const upcomingPromos = [
    {
      title: 'Especial Día de la Mujer',
      description: 'Paquetes exclusivos para celebrarte',
      startDate: '1 de Marzo, 2026',
      image: 'https://images.unsplash.com/photo-1580421383874-7e60f05f64b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHNhbG9uJTIwcHJvZmVzc2lvbmFscyUyMHNtaWxpbmd8ZW58MXx8fHwxNzcxNTM4Nzg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Primavera en Flor',
      description: 'Nuevos looks para la nueva estación',
      startDate: '20 de Marzo, 2026',
      image: 'https://images.unsplash.com/photo-1759675905846-d9ec793714af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc3R5bGluZyUyMHdlZGRpbmclMjBlbGVnYW50fGVufDF8fHx8MTc3MTUzODc4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const steps = [
    {
      icon: Calendar,
      title: 'Elige tu servicio',
      description: 'Selecciona la promoción que más te guste',
    },
    {
      icon: MessageCircle,
      title: 'Contacta',
      description: 'Llámanos o escríbenos por WhatsApp',
    },
    {
      icon: Gift,
      title: 'Menciona el código',
      description: 'Indica el código promocional al reservar',
    },
    {
      icon: Sparkles,
      title: 'Disfruta',
      description: 'Llega a tu cita y recibe tu descuento',
    },
  ];

  const faqs = [
    {
      question: '¿Puedo combinar promociones?',
      answer: 'Las promociones no son acumulables con otras ofertas. Solo se puede aplicar un descuento por servicio.',
    },
    {
      question: '¿Necesito reservar con anticipación?',
      answer: 'Sí, te recomendamos reservar tu cita con al menos 24 horas de anticipación para garantizar tu horario preferido.',
    },
    {
      question: '¿Las promociones aplican todos los días?',
      answer: 'Sí, nuestras promociones están disponibles de lunes a domingo durante su período de vigencia, sujeto a disponibilidad.',
    },
    {
      question: '¿Las promociones caducan?',
      answer: 'Cada promoción tiene una fecha de vencimiento específica. Te recomendamos aprovecharlas antes de que expiren.',
    },
    {
      question: '¿Puedo regalar una promoción?',
      answer: 'Sí, puedes adquirir nuestros servicios promocionales como regalo. Contáctanos para más detalles sobre certificados de regalo.',
    },
  ];

  const scrollToContact = () => {
    window.location.href = '/#contacto';
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Featured Promotion */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#E496AC] via-[#EBBDC9] to-[#F7E7E7] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-white text-[#E496AC] hover:bg-white/90">
                <Sparkles size={14} className="mr-1" />
                OFERTA ESPECIAL
              </Badge>
              
              <h1 
                className="text-5xl md:text-6xl mb-4 text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {featuredPromo.title}
              </h1>
              
              <p 
                className="text-3xl mb-6 text-white/90"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {featuredPromo.subtitle}
              </p>
              
              <p 
                className="text-xl mb-8 text-white/80"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {featuredPromo.description}
              </p>

              {/* Pricing */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-2">
                  <span 
                    className="text-2xl text-white/60 line-through"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {featuredPromo.regularPrice}
                  </span>
                  <span 
                    className="text-5xl text-white"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {featuredPromo.discountedPrice}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <span className="text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Código:
                  </span>
                  <Badge className="bg-white text-[#E496AC]">
                    {featuredPromo.code}
                  </Badge>
                </div>
              </div>

              {/* Countdown */}
              <div className="mb-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                <div className="flex items-center gap-2 mb-4 text-white">
                  <Clock size={20} />
                  <span className="text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Termina en:
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} className="text-center">
                      <div 
                        className="text-4xl mb-1 text-white"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {value.toString().padStart(2, '0')}
                      </div>
                      <div 
                        className="text-xs text-white/70 uppercase"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {unit === 'days' ? 'Días' : unit === 'hours' ? 'Hrs' : unit === 'minutes' ? 'Min' : 'Seg'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Includes */}
              <div className="mb-8">
                <h3 
                  className="text-xl mb-4 text-white"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Incluye:
                </h3>
                <ul className="space-y-2">
                  {featuredPromo.includes.map((item, index) => (
                    <li key={index} className="flex items-start text-white/90">
                      <Check size={20} className="mr-2 flex-shrink-0 mt-0.5" />
                      <span style={{ fontFamily: "'Inter', sans-serif" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-white text-[#E496AC] hover:bg-white/90 px-8"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <MessageCircle size={20} className="mr-2" />
                Reservar Ahora
              </Button>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={featuredPromo.image}
                  alt={featuredPromo.title}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Promotions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 
              className="text-4xl md:text-5xl mb-4 text-[#E496AC]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Más Promociones Activas
            </h2>
            <p 
              className="text-lg text-muted-foreground"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Aprovecha estos descuentos especiales
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherPromos.map((promo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#F7E7E7] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <img 
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-[#E496AC] text-white">
                    {promo.badge}
                  </Badge>
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
                    <span className="text-[#E496AC]" style={{ fontFamily: "'Inter', sans-serif" }}>
                      -{promo.discount}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 
                    className="text-2xl mb-2 text-[#E496AC]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {promo.title}
                  </h3>
                  <p 
                    className="text-sm text-muted-foreground mb-4"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {promo.description}
                  </p>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <span 
                      className="text-lg text-muted-foreground line-through"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {promo.regularPrice}
                    </span>
                    <span 
                      className="text-3xl text-[#E496AC]"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {promo.discountedPrice}
                    </span>
                  </div>

                  <div className="flex items-center text-xs text-muted-foreground mb-4">
                    <Clock size={14} className="mr-1" />
                    <span style={{ fontFamily: "'Inter', sans-serif" }}>
                      Válido hasta: {promo.validUntil}
                    </span>
                  </div>

                  <Button 
                    onClick={scrollToContact}
                    className="w-full bg-[#E496AC] hover:bg-[#d4809a] text-white"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Reservar
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Promotions */}
      <section className="py-20 bg-[#F7E7E7]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 
              className="text-4xl md:text-5xl mb-4 text-[#E496AC]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Próximamente
            </h2>
            <p 
              className="text-lg text-muted-foreground"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Mantente atenta a estas futuras promociones
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {upcomingPromos.map((promo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg relative"
              >
                <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center">
                  <Badge className="bg-white text-[#E496AC] text-lg px-6 py-2">
                    Disponible {promo.startDate}
                  </Badge>
                </div>
                
                <div className="relative h-48">
                  <img 
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-full object-cover opacity-60"
                  />
                </div>
                
                <div className="p-6">
                  <h3 
                    className="text-2xl mb-2 text-[#E496AC]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {promo.title}
                  </h3>
                  <p 
                    className="text-muted-foreground"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {promo.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Take Advantage */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 
              className="text-4xl md:text-5xl mb-4 text-[#E496AC]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              ¿Cómo Aprovechar las Promociones?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#E496AC] flex items-center justify-center text-white">
                  <step.icon size={28} />
                </div>
                <div className="mb-2 text-[#E496AC] text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {index + 1}
                </div>
                <h3 
                  className="text-xl mb-2 text-[#E496AC]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {step.title}
                </h3>
                <p 
                  className="text-sm text-muted-foreground"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F7E7E7]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 
              className="text-4xl md:text-5xl mb-4 text-[#E496AC]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Preguntas Frecuentes
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl px-6 border-0">
                  <AccordionTrigger 
                    className="text-left hover:no-underline"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    <span className="text-[#E496AC]">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent 
                    className="text-muted-foreground"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
