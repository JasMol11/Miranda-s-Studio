import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Check, Clock } from "lucide-react";
import { motion } from "motion/react";
import { Service } from "@/types/service";

import {
  alisadosServices,
  balayageServices,
  tintesServices,
  lavadoServices,
  estilizadoServices,
  tratamientosCapilaresServices,
  depilacionServices,
} from "@/data/hairServices";

import {
  manicureServices,
  pedicureServices,
} from "@/data/nailServices";

export function Services() {

  const [selectedHairCategory, setSelectedHairCategory] = useState("Todos");
  const [selectedNailCategory, setSelectedNailCategory] = useState("Todos");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  const openWhatsApp = (serviceName: string) => {
    const phone = "50376574608";

    const message = `Hola Miranda's Studio, me gustaría agendar el servicio de ${serviceName}. ¿Podrían brindarme disponibilidad?`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };


  const hairCategories = [
  { title: "Alisados", services: alisadosServices },
  { title: "Balayage", services: balayageServices },
  { title: "Tratamientos Capilares", services: tratamientosCapilaresServices },
  { title: "Tintes de Cabello", services: tintesServices },
  { title: "Estilización", services: estilizadoServices },
  { title: "Lavado de Cabello", services: lavadoServices },
  { title: "Depilación", services: depilacionServices },
];

  const nailCategories = [
    { title: "Manicura", services: manicureServices },
    { title: "Pedicura", services: pedicureServices },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative pt-32 pb-12 bg-gradient-to-b from-[#F7E7E7] to-white">
        <div className="container mx-auto px-4 text-center">
          <h1
            className="text-5xl text-[#E496AC]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Nuestros Servicios
          </h1>

          <p className="text-xl text-muted-foreground mt-4">
            Descubre nuestros tratamientos profesionales para el cuidado del cabello, uñas y belleza integral <br />
            En Miranda's Studio combinamos técnica, productos de calidad y atención personalizada para brindarte resultados que resalten tu belleza natural
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">

          <Tabs defaultValue="cabello">

          <TabsList className="grid w-full max-w-xl mx-auto grid-cols-2 mb-8 bg-[#F7E7E7] p-2 min-h-[68px] rounded-2xl">
            
            <TabsTrigger
              value="cabello"
              className="text-lg md:text-xl font-semibold py-3 rounded-lg data-[state=active]:bg-white data-[state=active]:text-[#E496AC]"
            >
              Cabello
            </TabsTrigger>

            <TabsTrigger
              value="unas"
              className="text-lg md:text-xl font-semibold py-3 rounded-lg data-[state=active]:bg-white data-[state=active]:text-[#E496AC]"
            >
              Uñas
            </TabsTrigger>

        </TabsList>

            {/* CABELLO */}

            <TabsContent value="cabello">

              <div className="flex flex-wrap justify-center gap-3 mb-16">

                <button
                  onClick={() => setSelectedHairCategory("Todos")}
                  className={`px-4 py-2 rounded-full text-sm ${
                    selectedHairCategory === "Todos"
                      ? "bg-[#E496AC] text-white"
                      : "bg-[#F7E7E7]"
                  }`}
                >
                  Todos
                </button>

                {hairCategories.map((category) => (

                  <button
                    key={category.title}
                    onClick={() => setSelectedHairCategory(category.title)}
                    className={`px-4 py-2 rounded-full text-sm ${
                      selectedHairCategory === category.title
                        ? "bg-[#E496AC] text-white"
                        : "bg-[#F7E7E7]"
                    }`}
                  >
                    {category.title}
                  </button>

                ))}

              </div>

              {selectedHairCategory === "Todos" ? (

                hairCategories.map((category) => (

                  <div key={category.title} className="mb-20">

                    <h2
                      className="text-3xl text-center mb-10 text-[#E496AC]"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {category.title}
                    </h2>

                    <ServicesList
                      services={category.services}
                      openWhatsApp={openWhatsApp}
                    />

                  </div>

                ))

              ) : (

                hairCategories
                  .filter(c => c.title === selectedHairCategory)
                  .map((category) => (

                    <div key={category.title}>

                      <h2
                        className="text-3xl text-center mb-10 text-[#E496AC]"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {category.title}
                      </h2>

                      <ServicesList
                        services={category.services}
                        openWhatsApp={openWhatsApp}
                      />

                    </div>

                  ))

              )}

            </TabsContent>

            {/* UÑAS */}

            <TabsContent value="unas">

              <div className="flex flex-wrap justify-center gap-3 mb-16">

                <button
                  onClick={() => setSelectedNailCategory("Todos")}
                  className={`px-4 py-2 rounded-full text-sm ${
                    selectedNailCategory === "Todos"
                      ? "bg-[#E496AC] text-white"
                      : "bg-[#F7E7E7]"
                  }`}
                >
                  Todos
                </button>

                {nailCategories.map((category) => (

                  <button
                    key={category.title}
                    onClick={() => setSelectedNailCategory(category.title)}
                    className={`px-4 py-2 rounded-full text-sm ${
                      selectedNailCategory === category.title
                        ? "bg-[#E496AC] text-white"
                        : "bg-[#F7E7E7]"
                    }`}
                  >
                    {category.title}
                  </button>

                ))}

              </div>

              {selectedNailCategory === "Todos" ? (

                nailCategories.map((category) => (

                  <div key={category.title} className="mb-20">

                    <h2
                      className="text-3xl text-center mb-10 text-[#E496AC]"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {category.title}
                    </h2>

                    <ServicesList
                      services={category.services}
                      openWhatsApp={openWhatsApp}
                    />

                  </div>

                ))

              ) : (

                nailCategories
                  .filter(c => c.title === selectedNailCategory)
                  .map((category) => (

                    <div key={category.title}>

                      <h2
                        className="text-3xl text-center mb-10 text-[#E496AC]"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {category.title}
                      </h2>

                      <ServicesList
                        services={category.services}
                        openWhatsApp={openWhatsApp}
                      />

                    </div>

                  ))

              )}

            </TabsContent>

          </Tabs>

        </div>
      </section>

      <Footer />

    </div>
  );
}

type ServicesListProps = {
  services: Service[];
  openWhatsApp: (serviceName: string) => void;
};

function ServicesList({ services, openWhatsApp }: ServicesListProps) {

  return (
    <motion.div
      layout="position"
      className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
    >

      {services.map((service) => (

        <motion.div
          layout="position"
          key={service.name}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6, scale: 1.015 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col"
        >

          <div className="relative h-64 overflow-hidden">

            <motion.img
              src={service.image}
              alt={service.name}
              loading="lazy"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.25 }}
            />

            <div className="absolute top-4 right-4 bg-[#E496AC] text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-md">
              {service.price}
            </div>

          </div>

          <div className="p-6 flex flex-col flex-grow">

            <h3
              className="text-2xl text-[#E496AC]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {service.name}
            </h3>

            <div className="flex items-center text-sm text-muted-foreground mb-4">
              <Clock size={16} className="mr-2" />
              {service.duration}
            </div>

            <p className="mb-4">{service.description}</p>

            <p className="text-sm text-muted-foreground mb-6 whitespace-pre-line">
              {service.longDescription}
            </p>

            <h4 className="text-sm mb-3 text-[#E496AC]">
              Incluye:
            </h4>

            <ul className="space-y-2 mb-6">

              {service.includes.map((item, i) => (

                <li key={i} className="flex items-start text-sm">
                  <Check size={16} className="mr-2 text-[#E496AC]" />
                  {item}
                </li>

              ))}

            </ul>

            <Button
              onClick={() => openWhatsApp(service.name)}
              className="mt-auto w-full bg-[#E496AC] hover:bg-[#d4809a]"
            >
              Agendar cita
            </Button>

          </div>

        </motion.div>

      ))}

    </motion.div>
  );
}
