import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

import babylights from '@/assets/gallery-preview/Cabello1.jpg';
import balayage from '@/assets/gallery-preview/Cabello2.jpg';
import alisadoCorte from '@/assets/gallery-preview/Cabello3.jpg';
import correccionColor from '@/assets/gallery-preview/Cabello4.jpg';

import catEye from '@/assets/gallery-preview/Uñas1.jpg';
import nailArt from '@/assets/gallery-preview/Uñas2.jpg';
import builder from '@/assets/gallery-preview/Uñas3.jpg';
import softGel from '@/assets/gallery-preview/Uñas4.jpg';


export function GalleryPreview() {
  const images = [
    {
      url: babylights,
      title: 'Babylights',
    },
    {
      url: balayage,
      title: 'Balayage',
    },
    {
      url: alisadoCorte,
      title: 'Alisado y Corte',
    },
    {
      url: correccionColor,
      title: 'Correccion de Color',
    },
    {
      url: catEye,
      title: 'Cat Eye',
    },
    {
      url: nailArt,
      title: 'Nail Art',
    },
    {
      url: builder,
      title: 'Builder',
    },
    {
      url: softGel,
      title: 'Soft Gel',
    },
  ];

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="container mx-auto px-4">

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl mb-4 text-[#E496AC]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Nuestra Galería
          </h2>

          <p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Explora nuestro trabajo y déjate inspirar por los resultados que hemos logrado
          </p>
        </motion.div>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-xl aspect-square"
            >
              <img 
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p 
                    className="text-white text-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {image.title}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>


        {/* <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/galeria">
            <Button 
              size="lg"
              className="bg-[#E496AC] hover:bg-[#d4809a] text-white px-8"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Ver Galería Completa
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </motion.div> */}

      </div>
    </section>
  );
}