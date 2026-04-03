import { useState } from 'react';
import { Clock, ChevronDown, CreditCard, Banknote, Landmark } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import visaLogo from '@/assets/pricing/visa.svg';
import mastercardLogo from '@/assets/pricing/mastercard.svg';

export function PricingSection() {
  const [openHairCategory, setOpenHairCategory] = useState<string>('alisados');
  const [openNailCategory, setOpenNailCategory] = useState<string>('manos');

  const toggleHairCategory = (category: string) => {
    setOpenHairCategory(category);
  };

  const toggleNailCategory = (category: string) => {
    setOpenNailCategory(category);
  };

  const hairCategories = [
    {
      key: 'alisados',
      title: 'Alisados',
      services: [
        { name: 'Alisado Premium', price: '$80', duration: '2 - 3 horas' },
        { name: 'Alisado Gold Plex', price: '$100', duration: '3 - 4 horas' },
        { name: 'Alisado Marroquí Plex', price: '$75', duration: '3 - 4 horas' },
        { name: 'Alisado Argan', price: '$55', duration: '3 horas' },
        { name: 'Alisado de Chocolate', price: '$45', duration: '3 horas' },
        { name: 'Alisado Pro-Liss', price: '$65', duration: '3 horas' },
      ],
    },
    {
      key: 'balayage',
      title: 'Balayage',
      services: [
        { name: 'Balayage Clásico', price: 'Desde $70', duration: '4 - 5 horas' },
        { name: 'Balayage Ombré', price: 'Desde $150', duration: '4.5 - 5 horas' },
        { name: 'Balayage Sombré', price: 'Desde $175', duration: '5 - 6 horas' },
        { name: 'Balayage Babylights', price: 'Desde $75', duration: '4.5 horas' },
        { name: 'Reverse Balayage', price: 'Desde $150', duration: '4 - 5 horas' },
      ],
    },
    {
      key: 'tratamientos',
      title: 'Tratamientos',
      services: [
        { name: 'Botox Capilar Anti-Frizz', price: '$25', duration: '1 hora' },
        { name: 'Botox Capilar Premium', price: '$30', duration: '1.5 horas' },
        { name: 'Hidratación Capilar', price: '$25', duration: '40 minutos' },
        { name: 'Nutrición Capilar', price: '$20', duration: '40 minutos' },
        { name: 'Reconstrucción Capilar', price: '$30', duration: '1.5 horas' },
      ],
    },
    {
      key: 'color',
      title: 'Color',
      services: [
        { name: 'Color Completo', price: 'Desde $50', duration: '2 horas' },
        { name: 'Corrección de Color', price: 'Desde $75', duration: '3.5 horas' },
        { name: 'Retoque de Color', price: '$25', duration: '1.5 horas' },
      ],
    },
    {
      key: 'estilizado',
      title: 'Estilizado',
      services: [
        { name: 'Corte de Cabello - Limpieza', price: '$5', duration: '15 minutos' },
        { name: 'Corte de Cabello Personalizado', price: 'Desde $12', duration: '30 minutos' },
        { name: 'Ondas', price: 'Desde $10', duration: '1 hora' },
        { name: 'Planchado', price: 'Desde $8', duration: '45 minutos' },
        { name: 'Secado Profesional', price: 'Desde $10', duration: '45 minutos' },
      ],
    },
    {
      key: 'lavado',
      title: 'Lavado',
      services: [
        { name: 'Lavado Spa', price: '$5', duration: '15 minutos' },
        { name: 'Lavado Desintoxicante', price: '$8', duration: '20 minutos' },
      ],
    },
    {
      key: 'depilacion',
      title: 'Depilación',
      services: [
        { name: 'Depilación de Cejas', price: '$5', duration: '20 minutos' },
        { name: 'Depilación de Bozo', price: '$4', duration: '15 minutos' },
        { name: 'Depilación de Axilas', price: '$12', duration: '25 minutos' },
      ],
    },
  ];

  const nailCategories = [
    {
      key: 'manos',
      title: 'Manos',
      services: [
        { name: 'Gel Permanente', price: '$10', duration: '45 minutos' },
        { name: 'Soft Gel', price: '$25', duration: '1.5 horas' },
        { name: 'Rubber', price: '$23', duration: '1 hora' },
        { name: 'Nivelación Builder', price: 'Desde $25', duration: '1 hora' },
        { name: 'Gel Permanente + Fortalecedor', price: '$20', duration: '1 hora' },
        { name: 'Nivelación + Esmaltado', price: '$30', duration: '1.5 horas' },
        { name: 'Rubber + Esmaltado', price: '$28', duration: '1.15 horas' },
        { name: 'Reconstrucción de Bordes', price: '$1', duration: '5 minutos' },
        { name: 'Esmaltado Regular', price: '$8', duration: '30 minutos' },
        { name: 'Manicura Rusa', price: '$8', duration: '30 minutos' },
        { name: 'Manicura SPA', price: '$12', duration: '45 minutos' },
        { name: 'Manicura Combinada (Rusa + Spa)', price: '$15', duration: '1.15 horas' },
      ],
    },
    {
      key: 'pies',
      title: 'Pies',
      services: [
        { name: 'Pedicura Rusa', price: '$18', duration: '1 hora' },
        { name: 'Pedicura SPA', price: '$20', duration: '1 hora' },
        { name: 'Pedicura Combinada (Rusa + Spa)', price: '$23', duration: '1.5 hora' },
        { name: 'Gel Permanente en Pies', price: '$13', duration: '45 minutos' },
      ],
    },
  ];

  return (
    <section id="precios" className="py-15 bg-[#F7E7E7]">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-[#E496AC]">
            Nuestros Precios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Disfruta de servicios diseñados para resaltar{' '}
            <span className="text-[#E496AC] font-medium">tu belleza</span>, con{' '}
            <span className="text-[#E496AC] font-medium">precios justos</span> y{' '}
            <span className="text-[#E496AC] font-medium">resultados que te encantarán</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {/* HAIR */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-[#E496AC] to-[#EBBDC9] p-6">
              <h3 className="text-2xl text-white text-center">
                Servicios de Cabello
              </h3>
            </div>

            <div className="p-4 space-y-3">
              {hairCategories.map((category) => (
                <div key={category.key} className="border rounded-xl overflow-hidden transition-all hover:shadow-md">
                  <button
                    onClick={() => toggleHairCategory(category.key)}
                    className="w-full flex items-center justify-between p-4 bg-[#FDF2F4] hover:bg-[#FBEAEC] transition-colors"
                  >
                    <span className="font-medium text-[#E496AC]">{category.title}</span>
                    <ChevronDown className={`text-[#E496AC] transition-all duration-300 ${openHairCategory === category.key ? 'rotate-180 scale-110' : ''}`} />
                  </button>

                  <AnimatePresence mode="wait">
                    {openHairCategory === category.key && (
                      <motion.div
                        key={category.key}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <div className="p-3 space-y-2">
                          {category.services.map((service, index) => (
                            <div key={index} className="flex justify-between py-2 border-b last:border-0 rounded-lg px-2 hover:bg-[#FDF2F4]">
                              <div>
                                <p className="text-sm">{service.name}</p>
                                <div className="flex items-center text-xs text-muted-foreground">
                                  <Clock size={10} className="mr-1" />
                                  {service.duration}
                                </div>
                              </div>
                              <span className="text-sm text-[#E496AC]">{service.price}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* NAILS */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-[#E496AC] to-[#EBBDC9] p-6">
              <h3 className="text-2xl text-white text-center">Servicios de Uñas</h3>
            </div>

            <div className="p-4 space-y-3">
              {nailCategories.map((category) => (
                <div key={category.key} className="border rounded-xl overflow-hidden transition-all hover:shadow-md">
                  <button
                    onClick={() => toggleNailCategory(category.key)}
                    className="w-full flex items-center justify-between p-4 bg-[#FDF2F4] hover:bg-[#FBEAEC] transition-colors"
                  >
                    <span className="font-medium text-[#E496AC]">{category.title}</span>
                    <ChevronDown className={`text-[#E496AC] transition-all duration-300 ${openNailCategory === category.key ? 'rotate-180 scale-110' : ''}`} />
                  </button>

                  <AnimatePresence mode="wait">
                    {openNailCategory === category.key && (
                      <motion.div
                        key={category.key}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <div className="p-3 space-y-2">
                          {category.services.map((service, index) => (
                            <div key={index} className="flex justify-between py-2 border-b last:border-0 rounded-lg px-2 hover:bg-[#FDF2F4]">
                              <div>
                                <p className="text-sm">{service.name}</p>
                                <div className="flex items-center text-xs text-muted-foreground">
                                  <Clock size={10} className="mr-1" />
                                  {service.duration}
                                </div>
                              </div>
                              <span className="text-sm text-[#E496AC]">{service.price}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          * Los precios pueden variar según la longitud y condición del cabello o uñas
        </p>

        {/* MÉTODOS DE PAGO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-8 max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-6"
        >
          <h4 className="text-xl font-semibold text-center text-[#E496AC] mb-4">
            Métodos de Pago
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-sm">
            {/* EFECTIVO */}
            <div className="flex flex-col items-center gap-2">
              <Banknote className="text-[#E496AC] w-7 h-7 transition-transform hover:scale-110" />
              <span className="text-[#E496AC] font-medium">Efectivo</span>
            </div>

            {/* TRANSFERENCIA */}
            <div className="flex flex-col items-center gap-2">
              <Landmark className="text-[#E496AC] w-7 h-7 transition-transform hover:scale-110" />
              <span className="text-[#E496AC] font-medium">Transferencia Bancaria</span>

            </div>

            {/* TARJETA */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-0.5 mt-1">
                <img
                  src={visaLogo}
                  alt="Visa"
                  className="h-7 object-contain translate-y-[1px]"
                />
                <img
                  src={mastercardLogo}
                  alt="Mastercard"
                  className="h-7 object-contain transition-transform hover:scale-110"
                />
              </div>
              <span className="text-[#E496AC] font-medium">Tarjeta de Crédito/Débito</span>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
