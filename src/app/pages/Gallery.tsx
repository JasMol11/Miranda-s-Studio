// import { useState, useLayoutEffect } from 'react';
// import { Header } from '../components/Header';
// import { Footer } from '../components/Footer';
// import { Button } from '../components/ui/button';
// import { Dialog, DialogContent } from '../components/ui/dialog';
// import { ChevronLeft, ChevronRight, X } from 'lucide-react';
// import { motion } from 'motion/react';
// import Masonry from 'react-responsive-masonry';

// type FilterType = 'todos' | 'cortes' | 'tintes' | 'mechas' | 'peinados' | 'manicure' | 'pedicure' | 'disenos' | 'acrilicas';

// interface GalleryItem {
//   id: number;
//   image: string;
//   title: string;
//   category: FilterType;
//   description: string;
// }

// export function Gallery() {
//   const [filter, setFilter] = useState<FilterType>('todos');
//   const [selectedImage, setSelectedImage] = useState<number | null>(null);

//   useLayoutEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const galleryItems: GalleryItem[] = [
//     // Cabello - Cortes
//     { id: 1, image: 'https://images.unsplash.com/photo-1493775379751-a6c3940f3cbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwY3V0JTIwd29tYW4lMjBzYWxvbnxlbnwxfHx8fDE3NzE1Mzg3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Corte Bob Moderno', category: 'cortes', description: 'Corte bob con capas texturizadas' },
//     { id: 2, image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=500', title: 'Corte Pixie', category: 'cortes', description: 'Corte pixie elegante y femenino' },
//     { id: 3, image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=500', title: 'Corte en Capas', category: 'cortes', description: 'Corte largo con capas dinámicas' },
    
//     // Cabello - Tintes
//     { id: 4, image: 'https://images.unsplash.com/photo-1600879368265-74ef8b9d2735?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwY29sb3IlMjBiYWxheWFnZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzE1Mzg3ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Tinte Rubio Dorado', category: 'tintes', description: 'Color rubio cálido y luminoso' },
//     { id: 5, image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=500', title: 'Tinte Castaño', category: 'tintes', description: 'Castaño chocolate profundo' },
//     { id: 6, image: 'https://images.unsplash.com/photo-1595475207225-428b62bda831?w=500', title: 'Tinte Fantasía', category: 'tintes', description: 'Colores vibrantes y atrevidos' },
    
//     // Cabello - Mechas
//     { id: 7, image: 'https://images.unsplash.com/photo-1623104086040-35e17b8a8819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwaGlnaGxpZ2h0cyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzE1Mzg3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Balayage Rubio', category: 'mechas', description: 'Balayage con efecto natural' },
//     { id: 8, image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=500', title: 'Mechas Californianas', category: 'mechas', description: 'Mechas con degradado suave' },
//     { id: 9, image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500', title: 'Ombré', category: 'mechas', description: 'Efecto ombré de raíces oscuras' },
    
//     // Cabello - Peinados
//     { id: 10, image: 'https://images.unsplash.com/photo-1759054713286-713c4ceeb5ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cGRvJTIwaGFpcnN0eWxlJTIwZWxlZ2FudCUyMGJyaWRlfGVufDF8fHx8MTc3MTUzODc5MHww&ixlib=rb-4.1.0&q=80&w=1080', title: 'Recogido de Novia', category: 'peinados', description: 'Recogido elegante para bodas' },
//     { id: 11, image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500', title: 'Ondas Glamorosas', category: 'peinados', description: 'Ondas Hollywood clásicas' },
//     { id: 12, image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500', title: 'Trenza Bohemia', category: 'peinados', description: 'Trenza romántica y suelta' },
    
//     // Uñas - Manicure
//     { id: 13, image: 'https://images.unsplash.com/photo-1634235421135-16ebd88c13c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBtYW5pY3VyZSUyMG5haWxzJTIwY2xhc3NpY3xlbnwxfHx8fDE3NzE1Mzg3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Francesa Clásica', category: 'manicure', description: 'Manicure francesa elegante' },
//     { id: 14, image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=500', title: 'Manicure Rosa', category: 'manicure', description: 'Uñas cortas rosa suave' },
//     { id: 15, image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500', title: 'Manicure Nude', category: 'manicure', description: 'Tonos nude naturales' },
    
//     // Uñas - Pedicure
//     { id: 16, image: 'https://images.unsplash.com/photo-1638859460750-181fcc7936a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWRpY3VyZSUyMGZvb3QlMjBzcGElMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzcxNTM4Nzg5fDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Pedicure Spa', category: 'pedicure', description: 'Pedicure relajante completa' },
//     { id: 17, image: 'https://images.unsplash.com/photo-1603827457577-609962ca360f?w=500', title: 'Pedicure Rojo', category: 'pedicure', description: 'Pedicure con rojo clásico' },
    
//     // Uñas - Diseños
//     { id: 18, image: 'https://images.unsplash.com/photo-1769687209448-025548dfca8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwYXJ0JTIwZGVzaWduJTIwcGluayUyMGVsZWdhbnR8ZW58MXx8fHwxNzcxNTM4NzgzfDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Nail Art Floral', category: 'disenos', description: 'Diseño de flores delicadas' },
//     { id: 19, image: 'https://images.unsplash.com/photo-1610992015766-9c06d8e8c2dd?w=500', title: 'Diseño Geométrico', category: 'disenos', description: 'Patrones geométricos modernos' },
//     { id: 20, image: 'https://images.unsplash.com/photo-1606828230885-23e9bf8f8d1c?w=500', title: 'Diseño con Cristales', category: 'disenos', description: 'Uñas con aplicaciones de cristales' },
    
//     // Uñas - Acrílicas
//     { id: 21, image: 'https://images.unsplash.com/photo-1588759028629-5e720f8247ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3J5bGljJTIwbmFpbHMlMjBwaW5rJTIwZGVzaWdufGVufDF8fHx8MTc3MTUzODc4NHww&ixlib=rb-4.1.0&q=80&w=1080', title: 'Acrílicas Stiletto', category: 'acrilicas', description: 'Uñas acrílicas en forma de stiletto' },
//     { id: 22, image: 'https://images.unsplash.com/photo-1599206676335-193c82b13c9e?w=500', title: 'Acrílicas Coffin', category: 'acrilicas', description: 'Forma coffin con degradado' },
//     { id: 23, image: 'https://images.unsplash.com/photo-1617897903246-719242758050?w=500', title: 'Acrílicas Almendra', category: 'acrilicas', description: 'Forma almendra elegante' },
//     { id: 24, image: 'https://images.unsplash.com/photo-1688583417757-9060cba25399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwc2Fsb24lMjBtYW5pY3VyZSUyMGhhbmRzJTIwcGlua3xlbnwxfHx8fDE3NzE1Mzg3ODF8MA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Acrílicas con Gel', category: 'acrilicas', description: 'Combinación acrílico y gel' },
//   ];

//   const filters = [
//     { value: 'todos' as FilterType, label: 'Todos', parent: null },
//     { value: 'cortes' as FilterType, label: 'Cortes', parent: 'Cabello' },
//     { value: 'tintes' as FilterType, label: 'Tintes', parent: 'Cabello' },
//     { value: 'mechas' as FilterType, label: 'Mechas', parent: 'Cabello' },
//     { value: 'peinados' as FilterType, label: 'Peinados', parent: 'Cabello' },
//     { value: 'manicure' as FilterType, label: 'Manicure', parent: 'Uñas' },
//     { value: 'pedicure' as FilterType, label: 'Pedicure', parent: 'Uñas' },
//     { value: 'disenos' as FilterType, label: 'Diseños', parent: 'Uñas' },
//     { value: 'acrilicas' as FilterType, label: 'Acrílicas', parent: 'Uñas' },
//   ];

//   const filteredItems = filter === 'todos' 
//     ? galleryItems 
//     : galleryItems.filter(item => item.category === filter);

//   const handlePrevImage = () => {
//     if (selectedImage !== null) {
//       const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
//       const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
//       setSelectedImage(filteredItems[prevIndex].id);
//     }
//   };

//   const handleNextImage = () => {
//     if (selectedImage !== null) {
//       const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
//       const nextIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
//       setSelectedImage(filteredItems[nextIndex].id);
//     }
//   };

//   const currentItem = filteredItems.find(item => item.id === selectedImage);

//   const scrollToContact = () => {
//     window.location.href = '/#contacto';
//   };

//   return (
//     <div className="min-h-screen">
//       <Header />
      
//       {/* Hero Section */}
//       <section className="relative pt-32 pb-16 bg-gradient-to-b from-[#F7E7E7] to-white">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center max-w-3xl mx-auto"
//           >
//             <h1 
//               className="text-5xl md:text-6xl mb-6 text-[#E496AC]"
//               style={{ fontFamily: "'Playfair Display', serif" }}
//             >
//               Galería de Trabajos
//             </h1>
//             <p 
//               className="text-xl text-muted-foreground"
//               style={{ fontFamily: "'Inter', sans-serif" }}
//             >
//               Inspírate con nuestras creaciones y transformaciones
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Filters */}
//       <section className="py-8 bg-white border-b border-[#E496AC]/20">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-wrap justify-center gap-3">
//             {filters.map((filterOption) => (
//               <div key={filterOption.value} className="relative">
//                 {filterOption.parent && (
//                   <span 
//                     className="absolute -top-5 left-0 text-xs text-muted-foreground"
//                     style={{ fontFamily: "'Inter', sans-serif" }}
//                   >
//                     {filterOption.parent}
//                   </span>
//                 )}
//                 <Button
//                   variant={filter === filterOption.value ? 'default' : 'outline'}
//                   onClick={() => setFilter(filterOption.value)}
//                   className={
//                     filter === filterOption.value
//                       ? 'bg-[#E496AC] hover:bg-[#d4809a] text-white'
//                       : 'border-[#E496AC]/30 text-foreground hover:bg-[#F7E7E7]'
//                   }
//                   style={{ fontFamily: "'Inter', sans-serif" }}
//                 >
//                   {filterOption.label}
//                 </Button>
//               </div>
//             ))}
//           </div>
//           <p 
//             className="text-center text-sm text-muted-foreground mt-6"
//             style={{ fontFamily: "'Inter', sans-serif" }}
//           >
//             Mostrando {filteredItems.length} {filteredItems.length === 1 ? 'trabajo' : 'trabajos'}
//           </p>
//         </div>
//       </section>

//       {/* Gallery Grid */}
//       <section className="py-12">
//         <div className="container mx-auto px-4">
//           <Masonry columnsCount={window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 3 : 2} gutter="16px">
//             {filteredItems.map((item, index) => (
//               <motion.div
//                 key={item.id}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.4, delay: index * 0.05 }}
//                 className="relative group cursor-pointer overflow-hidden rounded-xl"
//                 onClick={() => setSelectedImage(item.id)}
//               >
//                 <img 
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <div className="absolute bottom-0 left-0 right-0 p-4">
//                     <h3 
//                       className="text-white text-lg mb-1"
//                       style={{ fontFamily: "'Playfair Display', serif" }}
//                     >
//                       {item.title}
//                     </h3>
//                     <p 
//                       className="text-white/90 text-sm"
//                       style={{ fontFamily: "'Inter', sans-serif" }}
//                     >
//                       {item.description}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </Masonry>
//         </div>
//       </section>

//       {/* Lightbox Modal */}
//       <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
//         <DialogContent className="max-w-5xl p-0 bg-black/95 border-0">
//           {currentItem && (
//             <div className="relative">
//               {/* Close Button */}
//               <button
//                 onClick={() => setSelectedImage(null)}
//                 className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
//               >
//                 <X size={24} />
//               </button>

//               {/* Navigation */}
//               <button
//                 onClick={handlePrevImage}
//                 className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
//               >
//                 <ChevronLeft size={28} />
//               </button>

//               <button
//                 onClick={handleNextImage}
//                 className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
//               >
//                 <ChevronRight size={28} />
//               </button>

//               {/* Image */}
//               <div className="w-full">
//                 <img 
//                   src={currentItem.image}
//                   alt={currentItem.title}
//                   className="w-full h-auto max-h-[80vh] object-contain"
//                 />
//               </div>

//               {/* Info */}
//               <div className="p-6 bg-black/50">
//                 <h3 
//                   className="text-white text-2xl mb-2"
//                   style={{ fontFamily: "'Playfair Display', serif" }}
//                 >
//                   {currentItem.title}
//                 </h3>
//                 <p 
//                   className="text-white/80 mb-4"
//                   style={{ fontFamily: "'Inter', sans-serif" }}
//                 >
//                   {currentItem.description}
//                 </p>
//                 <Button 
//                   onClick={scrollToContact}
//                   className="bg-[#E496AC] hover:bg-[#d4809a] text-white"
//                   style={{ fontFamily: "'Inter', sans-serif" }}
//                 >
//                   Reservar este Servicio
//                 </Button>
//               </div>
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>

//       <Footer />
//     </div>
//   );
// }
