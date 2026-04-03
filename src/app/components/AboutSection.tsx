import { Award, Heart, Shield, Sparkles, Star, Users } from 'lucide-react';
import { motion } from 'motion/react';

import prueba1 from '@/assets/about/Nicole2.jpg';
import prueba2 from '@/assets/about/Melissa2.jpg';
import prueba3 from '@/assets/about/Alicia2.jpg';
import prueba4 from '@/assets/about/Niccole1.png';

const features = [
  { icon: Award,    title: '5+ Años',      description: 'De Experiencia' },
  { icon: Sparkles, title: 'Productos',    description: 'Profesionales Premium' },
  { icon: Star,     title: 'Especialistas', description: 'Capacitadas' },
  { icon: Heart,    title: 'Ambiente',     description: 'Acogedor y Elegante' },
  { icon: Shield,   title: 'Higiene',      description: '100% Garantizada' },
  { icon: Users,    title: 'Atención',     description: 'Personalizada' },
];

export function AboutSection() {
  return (
    <section id="sobre-nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* ✅ Título visible solo en mobile, arriba de todo */}
        <h2 className="block lg:hidden text-4xl mb-6 text-[#E496AC] text-center">
          Sobre Nosotras
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Images — order-1 en mobile, order-1 en desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 order-1 lg:order-1"
          >
            <div className="space-y-4">
              <img
                src={prueba1}
                alt="Salón interior"
                loading="lazy"
                className="w-full aspect-[4/5] object-cover rounded-2xl shadow-lg"
              />
              <img
                src={prueba2}
                alt="Servicio profesional"
                loading="lazy"
                className="w-full aspect-square object-cover rounded-2xl shadow-lg"
              />
            </div>

            <div className="space-y-4 pt-8">
              <img
                src={prueba3}
                alt="Servicio de uñas"
                loading="lazy"
                className="w-full aspect-square object-cover rounded-2xl shadow-lg"
              />
              <img
                src={prueba4}
                alt="Color de cabello"
                loading="lazy"
                className="w-full aspect-[4/5] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </motion.div>

          {/* Content — order-2 en mobile, order-2 en desktop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-2"
          >
            {/* ✅ Título visible solo en desktop, dentro del bloque de contenido */}
            <h2 className="hidden lg:block text-4xl md:text-5xl mb-6 text-[#E496AC]">
              Sobre Nosotras
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-lg leading-relaxed text-foreground/90">
                <strong className="text-[#E496AC]">Miranda's Studio</strong> nace de el amor hacia nuestra profesión y a lo que cada paso en el camino como cosmetologa conlleva, el cariño y aprecio a cada cliente que nos visita para embellecerse y formar parte de nuestro dia a dia tratando particularmente la belleza que nos destaca a cada una aparte de la esencia personal.
              </p>

              <p className="text-lg leading-relaxed text-foreground/90">
                Nosotras estamos <strong className="text-[#E496AC]">comprometidas</strong> a que cada visita sea agradable y de poder llevarte una parte de Miranda's Studio contigo y que nuestros servicios hablen a través de ti.
              </p>

              <p className="text-lg leading-relaxed text-foreground/90">
                Nuestro equipo desempeña diferentes especializaciones dentro del área de la belleza, capacitándonos constantemente en la nuevas tendencias, para poder brindarles un mejor servicio en cada una de sus visitas al studio, trabajamos cada servicio con <strong className="text-[#E496AC]">productos profesionales</strong> que te brindan seguridad de un mejor resultado.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-[#F7E7E7] flex items-center justify-center text-[#E496AC]">
                    <feature.icon size={28} />
                  </div>
                  <h4 className="mb-1 text-[#E496AC]">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}