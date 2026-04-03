import gelPermanente from '@/assets/services/Uñas/GelPermanente.jpg';
import softGel from '@/assets/services/Uñas/SoftGel.jpg';
import rubber from '@/assets/services/Uñas/Rubber.jpg';
import nivelacionBuilder from '@/assets/services/Uñas/NivelacionBuilder.jpg';
import gelPermanenteFortalecedor from '@/assets/services/Uñas/GelPermanenteFortalecedor.jpg';
import nivelacionEsmaltado from '@/assets/services/Uñas/NivelacionEsmaltado.jpg';
import rubberEsmaltado from '@/assets/services/Uñas/RubberEsmaltado.jpg';
import reconstruccionBordes from '@/assets/services/Uñas/ReconstrucciónBordes.jpg';
import esmaltadoRegular from '@/assets/services/Uñas/EsmaltadoRegular.jpg';
import manicuraRusa from '@/assets/services/Uñas/ManicuraRusa.jpg';
import manicuraSpa from '@/assets/services/Uñas/ManicuraSpa.jpg';
import manicuraCombinada from '@/assets/services/Uñas/ManicuraCombinada.jpg';
import pedicuraRusa from '@/assets/services/Uñas/PedicuraRusa.jpg';
import pedicuraSpa from '@/assets/services/Uñas/PedicuraSpa.jpg';
import pedicuraCombinada from '@/assets/services/Uñas/PedicuraCombinada.jpg';
import gelPermanentePies from '@/assets/services/Uñas/GelPermanentePies.jpg';



export const manicureServices = [
  {
    name: "Gel Permanente",
    description: "Color intenso y brillo duradero sin preocuparte por retoques",
    longDescription:
      "Servicio de esmaltado en gel que proporciona un acabado brillante, resistente y duradero. Ideal para mantener tus uñas con una apariencia impecable durante un par de semanas, conservando el color y el brillo por más tiempo que el esmalte tradicional",
    price: "$ 10",
    duration: "45 minutos",
    image: gelPermanente,
    includes: [
      "Manicura Rusa",
      "Preparación y limpieza de uñas",
      "Aplicación de esmalte en gel",
      "Curado en lámpara UV/LED",
      "Acabado brillante",
    ],
  },
  {
    name: "Soft Gel",
    description: "Extensiones ligeras y naturales con acabado elegante",
    longDescription:
      "Sistema de extensión de uñas con tips de hidrogel flexible que proporciona un acabado natural, ligero y resistente durante 3 a 4 semanas. Ideal para quienes desean uñas más largas con apariencia delicada",
    price: "$ 25",
    duration: "1.5 horas",
    image: softGel,
    includes: [
      "Manicura rusa",
      "Preparación de uñas naturales",
      "Aplicación de tips Soft Gel",
      "Moldeado y ajuste de longitud",
      "Esmaltado en gel",
      "Acabado brillante",
    ],
  },
  {
    name: "Rubber",
    description: "Fortalece tus uñas naturales con mayor resistencia",
    longDescription:
      "Sistema de base rubber que ayuda a fortalecer las uñas naturales cortas mientras proporciona flexibilidad y resistencia. Ideal para uñas débiles o quebradizas",
    price: "$ 23",
    duration: "1 hora",
    image: rubber,
    includes: [
      "Manicura rusa",
      "Preparación de uñas",
      "Aplicación de base rubber",
      "Nivelación de la uña",
      "Acabado brillante",
    ],
  },
  {
    name: "Nivelación Builder",
    description: "Uñas más uniformes y resistentes con efecto natural",
    longDescription:
      "Técnica de nivelación con gel builder que ayuda a corregir irregularidades en la superficie de la uña y fortalecerla, logrando un acabado más uniforme y duradero",
    price: "Desde $25",
    duration: "1 hora",
    image: nivelacionBuilder,
    includes: [
      "Manicura rusa",
      "Preparación de la uña natural",
      "Aplicación de gel builder",
      "Nivelación de la superficie",
      "Curado en lámpara",
    ],
  },
  {
    name: "Gel Permanente + Fortalecedor",
    description: "Color duradero con protección extra para tus uñas",
    longDescription:
      "Combinación de esmalte permanente con base fortalecedora que ayuda a proteger y reforzar la uña natural mientras mantiene un color brillante y duradero",
    price: "$ 20",
    duration: "1 hora",
    image: gelPermanenteFortalecedor,
    includes: [
      "Manicura rusa",
      "Preparación de uñas",
      "Aplicación de base fortalecedora",
      "Esmaltado en gel permanente",
      "Curado en lámpara UV/LED",
      "Acabado brillante",
    ],
  },
  {
    name: "Nivelación + Esmaltado",
    description: "Uñas uniformes con color duradero y acabado perfecto",
    longDescription:
      "Servicio que combina la nivelación de la uña natural para mejorar su forma y resistencia, seguido de un esmaltado en gel que aporta color y brillo duradero",
    price: "$ 30",
    duration: "1.5 horas",
    image: nivelacionEsmaltado,
    includes: [
      "Manicura rusa",
      "Preparación de uñas",
      "Nivelación con gel",
      "Aplicación de esmalte en gel",
      "Curado en lámpara",
      "Acabado final",
    ],
  },
  {
    name: "Rubber + Esmaltado",
    description: "Mayor resistencia con un color brillante y duradero",
    longDescription:
      "Servicio que combina base rubber para fortalecer la uña natural corta con un esmaltado en gel que proporciona color intenso y mayor duración",
    price: "$ 28",
    duration: "1.15 horas",
    image: rubberEsmaltado,
    includes: [
      "Manicura rusa",
      "Preparación de uñas",
      "Aplicación de base rubber",
      "Nivelación de la uña",
      "Esmaltado en gel",
      "Acabado brillante",
    ],
  },
  {
    name: "Reconstrucción de Bordes",
    description: "Recupera la forma natural de uñas dañadas o quebradas",
    longDescription:
    "Servicio especializado para reparar esquinas o bordes de uñas quebradas, restaurando su forma natural y proporcionando una base ideal para aplicar el sistema de tu preferencia (rubber, builder o esmaltado permanente)\n\n *Precio base aplica por uña",
    price: "$ 1",
    duration: "5 minutos",
    image: reconstruccionBordes,
    includes: [
      "Evaluación de la uña",
      "Reconstrucción del borde",
      "Moldeado de la uña",
      "Curado en lámpara",
      "Acabado final",
    ],
  },
  {
    name: "Esmaltado Regular",
    description: "Color clásico para un look limpio y elegante",
    longDescription:
      "Servicio de esmaltado tradicional ideal para quienes prefieren un acabado clásico. Incluye preparación básica de la uña y aplicación de esmalte regular",
    price: "$ 8",
    duration: "30 minutos",
    image: esmaltadoRegular,
    includes: [
      "Manicura rusa",
      "Preparación de uñas",
      "Limpieza de cutículas",
      "Aplicación de esmalte tradicional",
      "Acabado final",
    ],
  },
  {
    name: "Manicura Rusa",
    description: "Precisión extrema para cutículas perfectas",
    longDescription:
      "Técnica de manicura en seco que utiliza herramientas eléctricas para limpiar profundamente la cutícula y lograr un acabado impecable alrededor de la uña",
    price: "$ 8",
    duration: "30 minutos",
    image: manicuraRusa,
    includes: [
      "Limpieza profunda de cutículas",
      "Trabajo con torno profesional",
      "Preparación detallada de la uña",
      "Acabado limpio y uniforme",
    ],
  },
  {
    name: "Manicura SPA",
    description: "Relajación y cuidado profundo para tus manos",
    longDescription:
      "Experiencia de cuidado para las manos que incluye limpieza de uñas, exfoliación y aplicación de productos hidratantes para dejar la piel suave y revitalizada",
    price: "$ 12",
    duration: "45 minutos",
    image: manicuraSpa,
    includes: [
      "Limpieza y preparación de uñas",
      "Cuidado de cutículas",
      "Exfoliación de manos",
      "Masaje hidratante",
      "Esmalte tradicional",
      "Acabado final",
    ],
  },
  {
    name: "Manicura Combinada (Rusa + Spa)",
    description: "La combinación perfecta entre precisión y relajación",
    longDescription:
      "Servicio que combina la técnica de manicura rusa para un acabado preciso en cutículas con un tratamiento spa que hidrata y revitaliza las manos",
    price: " $ 15",
    duration: "1.15 horas",
    image: manicuraCombinada,
    includes: [
      "Manicura rusa para cutículas",
      "Preparación detallada de la uña",
      "Exfoliación de manos",
      "Masaje hidratante",
      "Esmalte tradicional",
      "Acabado final",
    ],
  },
];

export const pedicureServices = [
  {
    name: "Pedicura Rusa",
    description: "Precisión profesional para uñas y cutículas perfectamente definidas",
    longDescription:
      "Técnica avanzada de pedicura en seco que utiliza herramientas especializadas para limpiar profundamente la cutícula y preparar la uña con máxima precisión. Ideal para lograr un acabado limpio y profesional\n\n*Puedes cambiar a esmalte permante por $5 extra\n*No aplica French, Efectos o Cat Eye, puedes agregarlo por $5 extra",
    price: "$ 18",
    duration: "1 hora",
    image: pedicuraRusa,
    includes: [
      "Limpieza profunda de cutículas",
      "Trabajo con torno profesional",
      "Preparación detallada de la uña",
      "Esmalte tradicional",
      "Acabado limpio y uniforme",
    ],
  },
  {
    name: "Pedicura SPA",
    description: "Relajación y cuidado profundo para unos pies suaves y renovados",
    longDescription:
      "Experiencia completa de cuidado para los pies que incluye limpieza, exfoliación e hidratación profunda. Ideal para revitalizar la piel y mantener los pies suaves y saludables\n\n*Puedes cambiar a esmalte permante por $5 extra\n*No aplica French, Efectos o Cat Eye, puedes agregarlo por $5 extra",
    price: "$ 20",
    duration: "1 hora",
    image: pedicuraSpa,
    includes: [
      "Limpieza y preparación de uñas",
      "Cuidado de cutículas",
      "Exfoliación de pies",
      "Limado de talones",
      "Esmalte tradicional",
      "Masaje hidratante",
      "Acabado final",
    ],
  },
  {
    name: "Pedicura Combinada (Rusa + Spa)",
    description: "La combinación perfecta entre precisión, técnica y relajación",
    longDescription:
      "Servicio que combina la pedicura rusa para un cuidado preciso de las uñas y cutículas con un tratamiento spa que hidrata, exfolia y revitaliza los pies\n\n*Puedes cambiar a esmalte permante por $5 extra\n*No aplica French, Efectos o Cat Eye, puedes agregarlo por $5 extra",
    price: "$ 23",
    duration: "1.5 hora",
    image: pedicuraCombinada,
    includes: [
      "Pedicura rusa para cutículas",
      "Preparación detallada de uñas",
      "Exfoliación de pies",
      "Limado de talones",
      "Esmalte tradicional",
      "Masaje hidratante",
      "Acabado final",
    ],
  },
  {
    name: "Gel Permanente en Pies",
    description: "Color brillante y duradero para lucir pies perfectos por más tiempo",
    longDescription:
      "Servicio de esmaltado en gel que proporciona un acabado brillante y resistente, ideal para mantener el color impecable durante semanas\n\n*No aplica French, Efectos o Cat Eye, puedes agregarlo por $5 extra",
    price: "$ 13",
    duration: "45 minutos",
    image: gelPermanentePies,
    includes: [
      "Limpieza con drill",
      "Preparación de uñas",
      "Cuidado de cutículas",
      "Aplicación de esmalte en gel",
      "Curado en lámpara UV/LED",
      "Acabado brillante",
    ],
  },
];