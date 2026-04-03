import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

import balayage from '@/assets/services/Balayage.jpeg';
import tinte from '@/assets/services/TintesPreview.jpg';
import corteCabello from '@/assets/services/CorteCabello.png';
import alisados from '@/assets/services/Alisado.jpeg';
import softGel from '@/assets/services/SoftGel.jpg';
import nivelacionBuilder from '@/assets/services/NivelacionBuilder.jpg';
import gelPermanente from '@/assets/services/GelPermanente.jpg';
import maniPedi from '@/assets/services/Pedicure.jpg';

const categories = [
  {
    title: 'Cabello',
    services: [
      {
        name: 'Técnicas de Balayage',
        description:
          'Ilumina tu look con degradados naturales y movimiento. Diagnóstico de color, aplicación personalizada, técnicas balayage/foilyage y acabado con corte o peinado. Resultado sofisticado y adecuado a tu personalidad',
        price: '$70',
        image: balayage,
      },
      {
        name: 'Tinte y correcciones de tonos',
        description:
          'Devuélvele a tu cabello el color perfecto. Tonos uniformes, fórmula personalizada, aplicación profesional y tratamiento restaurador. Logrando con las técnicas adecuadas color intenso, duradero con salud y brillo renovado',
        price: '$25',
        image: tinte,
      },
      {
        name: 'Cortes de Cabello',
        description:
          'Un buen corte puede transformar tu imagen. Diseñamos cortes adaptados a la forma de tu rostro, tu estilo de vida y las tendencias actuales. Sal con un look renovado que resalte tu personalidad',
        price: '$8',
        image: corteCabello,
      },
      {
        name: 'Alisados',
        description:
          'Disfruta de un cabello saludable, suave, manejable y libre de frizz. Nuestros tratamientos de alisado ayudan a controlar el volumen mientras aportan brillo y sedosidad. Un cabello más suave, brillante y con movimiento natural',
        price: '$40',
        image: alisados,
      },
    ],
  },
  {
    title: 'Uñas',
    services: [
      {
        name: 'Soft Gel',
        description:
          'Luce uñas elegantes, ligeras y de apariencia natural. El sistema Soft Gel ofrece extensiones completas en un tip de hidrogel cómodas y resistentes con un acabado impecable. Ideal para quienes buscan uñas hermosas y duraderas',
        price: '$25',
        image: softGel,
      },
      {
        name: 'Nivelación Builder',
        description:
          'Fortalece y perfecciona la superficie de tus uñas. La nivelación con builder gel corrige imperfecciones, aporta resistencia y deja un acabado uniforme. Tus uñas se verán más fuertes, definidas y elegantes',
        price: '$27',
        image: nivelacionBuilder,
      },
      {
        name: 'Gel Permanente',
        description:
          'Color duradero con acabado impecable. Preparación, aplicación de color en gel permanente, curado LED y acabado brillante. Ideal para quienes buscan belleza y practicidad en un solo servicio',
        price: '$10',
        image: gelPermanente,
      },
      {
        name: 'Manicure y Pedicure',
        description:
          'Relaja, cuida y embellece tus manos y pies. Ofrecemos manicure y pedicure en técnicas Ruso, Spa o Combinado, con limpieza profunda, cuidado de cutículas y acabado profesional. El complemento perfecto para un cuidado y servicio completo',
        price: '$15',
        image: maniPedi,
      },
    ],
  },
];

export function ServicesPreview() {
  return (
    <section id="servicios" className="py-20 bg-[#F7E7E7]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-[#E496AC]">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra amplia gama de servicios profesionales diseñados
            para realzar tu belleza
          </p>
        </motion.div>

        <div className="space-y-10">
          {categories.map((category) => (
            <div key={category.title}>
              <h3 className="text-3xl mb-8 text-center text-[#E496AC]">
                {category.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                {category.services.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-2 right-2 bg-[#E496AC] text-white px-3 py-1 rounded-full">
                        <span className="text-sm">Desde {service.price}</span>
                      </div>
                    </div>

                    {/* ✅ flex flex-col flex-1 para que el contenido ocupe el espacio restante */}
                    <div className="p-6 flex flex-col flex-1">
                      <h4 className="text-xl mb-2 text-[#E496AC]">
                        {service.name}
                      </h4>
                      <p className="text-sm text-muted-foreground flex-1">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/servicios">
            <Button
              size="lg"
              className="bg-[#E496AC] hover:bg-[#d4809a] text-white px-8"
            >
              Ver Todos los Servicios
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}