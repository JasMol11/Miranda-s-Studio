import alisadoPremium from '@/assets/services/Cabello/AlisadoPremium.jpg';
import alisadoGoldPlex from '@/assets/services/Cabello/AlisadoGoldPlex.jpg';
import alisadoMarroquiPlex from '@/assets/services/Cabello/AlisadoMarroquiPlex.jpg';
import alisadoArgan from '@/assets/services/Cabello/AlisadoArgan.jpg';
import alisadoChocolate from '@/assets/services/Cabello/AlisadoChocolate.jpg';
import alisadoProLiss from '@/assets/services/Cabello/AlisadoProLiss.jpg';

import balayageClasico from '@/assets/services/Cabello/BalayageClasico.jpg';
import balayageOmbre from '@/assets/services/Cabello/BalayageOmbre.jpg';
import balayageSombre from '@/assets/services/Cabello/BalayageSombre.jpg';
import balayageBabyLights from '@/assets/services/Cabello/BalayageBabyLights.jpg';
import balayageReverse from '@/assets/services/Cabello/BalayageReverse.jpg';

import botoxCapilarAntiFrizz from '@/assets/services/Cabello/BotoxCapilarAntiFrizz.jpg';
import botoxCapilarPremium from '@/assets/services/Cabello/BotoxCapilarPremium.jpg';

import hidratacionCapilar from '@/assets/services/Cabello/HidratacionCapilar.jpg';
import nutricionCapilar from '@/assets/services/Cabello/NutricionCapilar.jpg';
import reconstruccionCapilar from '@/assets/services/Cabello/ReconstruccionCapilar.jpg';

import colorCompleto from '@/assets/services/Cabello/ColorCompleto.jpg';
import correccionColor from '@/assets/services/Cabello/CorreccionColor.jpg';
import retoqueColor from '@/assets/services/Cabello/RetoqueColor.jpg';

import corteCabelloLimpieza from '@/assets/services/Cabello/CorteCabelloLimpieza.jpg';
import corteCabelloPersonalizado from '@/assets/services/Cabello/CorteCabelloPersonalizado.jpg';
import ondas from '@/assets/services/Cabello/Ondas.jpg';
import planchado from '@/assets/services/Cabello/Planchado.jpg';
import secadoProfesional from '@/assets/services/Cabello/SecadoProfesional.jpg';

import lavadoSpa from '@/assets/services/Cabello/LavadoSpa.jpg';
import lavadoDesintoxicacion from '@/assets/services/Cabello/LavadoDesintoxicacion.jpg';

import depilacionCejas from '@/assets/services/Cabello/DepilacionCejas.jpg';
import depilacionBozo from '@/assets/services/Cabello/DepilacionBozo.jpg';
import depilacionAxilas from '@/assets/services/Cabello/DepilacionAxilas.jpg';



export const alisadosServices = [
  {
    name: 'Alisado Premium',
    description: 'Cabello liso, brillante y libre de frizz desde la primera aplicación',
    longDescription:
      'Tratamiento profesional de alisado diseñado para transformar el cabello encrespado o rebelde en un cabello suave, manejable y con brillo intenso. Ideal para quienes buscan un acabado de brillo y versatilidad, bajando la onda de hasta un 95%.\n\n *Precio base aplica para cabello mediano\n *Largo y volumen extra desde $10',
    price: '$ 80',
    duration: '2 - 3 horas',
    image: alisadoPremium,
    includes: [
      'Diagnóstico capilar personalizado',
      'Aplicación de fórmula alisadora premium',
      'Sellado con plancha profesional',
      'Lavado especializado',
      'Peinado final',
    ],
  },
  {
    name: 'Alisado Gold Plex',
    description: 'Alisa tu cabello mientras fortalece y protege la fibra capilar, aprobado para cabellos con bastante proceso químico o rubios',
    longDescription:
      'Tratamiento avanzado con tecnología Plex que protege la estructura del cabello durante el alisado. Fórmula con muy bajo contenido de formaldehído que alisa hasta un 95%, dejando el cabello más fuerte, brillante y saludable. Resultados duraderos, sin sacrificar la nutrición ni la integridad del cabello\n\n *Precio base aplica para cabello mediano\n *Largo y volumen extra desde $10',
    price: '$ 100',
    duration: '3 - 4 horas',
    image: alisadoGoldPlex,
    includes: [
      'Diagnóstico capilar',
      'Aplicación de fórmula Gold Plex',
      'Protección y fortalecimiento de la fibra capilar',
      'Sellado con plancha profesional',
      'Lavado especializado',
      'Peinado final',
    ],
  },
  {
    name: 'Alisado Marroquí Plex',
    description: 'Alisado intensivo con hidratación profunda y control total del frizz',
    longDescription:
      'Inspirado en fórmulas marroquíes, este tratamiento combina alisado y nutrición profunda para dejar el cabello suave, hidratado y con un brillo natural duradero, logrando reducir la onda y el frizz hasta en un 75%\n\n *Precio base aplica para cabello mediano\n *Largo y volumen extra desde $10',
    price: '$ 75',
    duration: '3 - 4 horas',
    image: alisadoMarroquiPlex,
    includes: [
      'Evaluación capilar',
      'Aplicación de tratamiento Marroquí Plex',
      'Hidratación profunda',
      'Sellado con plancha profesional',
      'Lavado especializado',
      'Peinado final',
    ],
  },
  {
    name: 'Alisado Argan',
    description: 'Nutrición intensa y suavidad absoluta gracias al poder del argán',
    longDescription:
      'Tratamiento de alisado enriquecido con aceite de argán que nutre profundamente el cabello, reduce el frizz y aporta brillo natural y suavidad, logrando reducir la onda y el frizz hasta en un 60%\n\n *Precio base aplica para cabello mediano\n *Largo y volumen extra desde $10',
    price: '$ 55',
    duration: '3 horas',
    image: alisadoArgan,
    includes: [
      'Diagnóstico capilar',
      'Aplicación de fórmula con aceite de argán',
      'Nutrición intensiva',
      'Sellado con plancha profesional',
      'Peinado final',
    ],
  },
  {
    name: 'Alisado de Chocolate',
    description: 'Alisado nutritivo que deja tu cabello suave, brillante y sedoso',
    longDescription:
      'Tratamiento enriquecido con extracto de cacao que ayuda a hidratar profundamente el cabello mientras lo alisa, dejándolo más manejable, suave y con brillo natural, logrando reducir la onda y el frizz hasta en un 50%\n\n *Precio base aplica para cabello mediano\n *Largo y volumen extra desde $10',
    price: '$ 45',
    duration: '3 horas',
    image: alisadoChocolate,
    includes: [
      'Diagnóstico capilar',
      'Aplicación de tratamiento de chocolate',
      'Hidratación y nutrición profunda',
      'Sellado con plancha profesional',
      'Peinado final',
    ],
  },
  {
    name: 'Alisado Pro-Liss',
    description: 'Acabado ultra liso, sedoso y con control total del frizz',
    longDescription:
      'Tratamiento profesional que proporciona un alisado sedoso y mejora notablemente la manejabilidad del cabello. Reduce el rizo hasta un 85% y ofrece resultados duraderos de 4 a 6 meses, dejando el cabello suave, con brillo y fácil de peinar. Ideal para quienes buscan un alisado natural y control del frizz\n\n *Precio base aplica para cabello mediano\n *Largo y volumen extra desde $10',
    price: '$ 65',
    duration: '3 horas',
    image: alisadoProLiss,
    includes: [
      'Diagnóstico capilar',
      'Aplicación de fórmula Pro-Liss',
      'Sellado con plancha profesional',
      'Control prolongado del frizz',
      'Lavado y peinado final',
    ],
  },
];

export const balayageServices = [
  {
    name: 'Balayage Clásico',
    description: 'Iluminación natural con efecto besado por el sol',
    longDescription:
      'Técnica de coloración a mano alzada que crea un degradado suave y natural desde la raíz hasta las puntas. Ideal para iluminar el cabello con un resultado elegante, moderno y de bajo mantenimiento. El diseño puede variar según el estado del cabello, las correcciones de color necesarias y el acabado que la clienta desee, trabajando tonalidades como caramelo, chocolate o brunette para lograr un resultado personalizado y armonioso',
    price: 'Desde $70',
    duration: '4 - 5 horas',
    image: balayageClasico,
    includes: [
      'Diagnóstico y asesoría de color',
      'Aplicación de técnica balayage a mano alzada',
      'Matización personalizada',
      'Lavado y tratamiento hidratante',
      'Peinado final',
    ],
  },
  {
    name: 'Balayage Ombré',
    description: 'Degradado de color con contraste moderno y luminoso',
    longDescription:
      'Técnica de coloración que crea una transición más marcada desde tonos más oscuros en la raíz hacia puntas más claras, logrando un efecto degradado con mayor contraste y luminosidad. Ideal para quienes buscan un estilo llamativo y moderno. El diseño puede variar según el estado de la hebra, las correcciones de color necesarias y el acabado que la clienta desee, para obtener un resultado personalizado y armonioso',
    price: 'Desde $150',
    duration: '4.5 - 5 horas',
    image: balayageOmbre,
    includes: [
      'Diagnóstico capilar y asesoría de tono',
      'Aplicación de técnica ombré',
      'Aclarado progresivo de medios y puntas',
      'Matización para lograr el tono deseado',
      'Peinado final',
    ],
  },
  {
    name: 'Balayage Sombré',
    description: 'Degradado suave para un look elegante y natural',
    longDescription:
      'Versión más sutil del ombré donde la transición entre tonos es mucho más suave y difuminada, creando un efecto de iluminación delicado y muy natural. Ideal para quienes buscan un resultado elegante y discreto que aporte luz al cabello sin contrastes marcados. El diseño puede variar según el estado de la hebra, las correcciones de color necesarias y el acabado que la clienta desee, para obtener un resultado personalizado y armonioso',
    price: 'Desde $175',
    duration: '5 - 6 horas',
    image: balayageSombre,
    includes: [
      'Evaluación capilar',
      'Aplicación de técnica sombré',
      'Esfumado de raíz',
      'Matización personalizada',
      'Peinado final',
    ],
  },
  {
    name: 'Balayage Babylights',
    description: 'Mechas ultra finas que aportan iluminación delicada y natural',
    longDescription:
      'Técnica de iluminación con mechas muy finas que imitan los reflejos naturales del cabello, generalmente en tonos dorados, aportando luminosidad, dimensión y un resultado elegante y muy natural. Ideal para quienes buscan una iluminación sutil y delicada. Esta técnica se recomienda principalmente en cabellos con poco o ningún proceso previo de mechas u otros diseños de rubios. Para obtener un resultado personalizado y armonioso',
    price: 'Desde $75',
    duration: '4.5 horas',
    image: balayageBabyLights,
    includes: [
      'Diagnóstico y asesoría de color',
      'Aplicación de babylights finas',
      'Aclarado controlado del cabello',
      'Matización del tono',
      'Peinado final',
    ],
  },
  {
    name: 'Reverse Balayage',
    description: 'Recupera profundidad y contraste en cabellos claros',
    longDescription:
      'Técnica ideal para cabellos muy claros o rubios donde se agregan tonos más oscuros estratégicamente para crear profundidad, contraste y un efecto más natural',
    price: 'Desde $150',
    duration: '4 - 5 horas',
    image: balayageReverse,
    includes: [
      'Diagnóstico y asesoría de color',
      'Aplicación de reverse balayage',
      'Creación de contraste y profundidad',
      'Matización del tono',
      'Peinado final',
    ],
  },
];

export const tratamientosCapilaresServices = [
    {
    name: 'Botox Capilar Anti-Frizz',
    description: 'Repara, fortalece y devuelve la vida al cabello dañado, mientras reduce el frizz y el volumen para un acabado más saludable y manejable',
    longDescription:
      'Tratamiento intensivo diseñado para reconstruir la fibra capilar desde el interior, ayudando a sellar puntas dañadas y a controlar hebras rebeldes y baby hair que suelen generar más volumen de lo normal. Su fórmula trabaja restaurando la suavidad, el brillo y la manejabilidad del cabello, dejando un resultado más saludable y revitalizado\n\n *Precio base aplica para cabello mediano\n *Largo y volumen extra desde $5',
    price: '$ 25',
    duration: '1 hora',
    image: botoxCapilarAntiFrizz,
    includes: [
      'Diagnóstico capilar personalizado',
      'Aplicación de botox capilar',
      'Reparación de la fibra capilar',
      'Sellado de nutrientes con calor',
      'Peinado final',
    ],
  },
  {
    name: 'Botox Capilar Premium',
    description: 'Reconstrucción profunda para revitalizar incluso el cabello más dañado',
    longDescription:
      'Tratamiento capilar de reconstrucción intensiva que nutre profundamente el cabello, sella la cutícula y mejora la resistencia de la fibra capilar. Está especialmente recomendado para cabellos muy dañados o que han sido sometidos a múltiples procesos químicos. \nEste servicio se complementa con un shot de nutrientes que aporta al cabello los componentes que suele perder cuando pasa mucho tiempo sin recibir tratamientos intensivos, ayudando a restaurar su fuerza, suavidad y brillo. Se recomienda realizarlo dos veces al mes para mantener y potenciar los resultados',
    price: '$ 30',
    duration: '1.5 horas',
    image: botoxCapilarPremium,
    includes: [
      'Diagnóstico capilar profesional',
      'Lavado Spa desintoxicante',
      'Aplicación de botox capilar premium',
      'Reconstrucción profunda de la fibra capilar',
      'Sellado de cutícula para mayor brillo',
      'Peinado final',
    ],
  },
  {
    name: 'Hidratación Capilar',
    description: 'Devuelve suavidad, brillo y elasticidad al cabello seco',
    longDescription:
      'Tratamiento diseñado para hidratar profundamente el cabello seco o deshidratado, aportando los nutrientes necesarios para restaurar su salud y apariencia. Ayuda a recuperar la suavidad, mejorar la elasticidad de la fibra capilar y devolver el brillo natural del cabello, dejándolo más manejable y revitalizado. Se recomienda realizarlo al menos una vez por semana para mantener una hidratación constante y prolongar los beneficios del tratamiento',
    price: '$25',
    duration: '40 minutos',
    image: hidratacionCapilar,
    includes: [
      'Diagnóstico capilar',
      'Aplicación de mascarilla hidratante profesional',
    ],
  },
  {
    name: 'Nutrición Capilar',
    description: 'Nutre profundamente el cabello y controla el frizz',
    longDescription:
      'Tratamiento enriquecido con aceites y nutrientes esenciales que ayudan a mejorar la suavidad, controlar el frizz y aportar brillo natural al cabello',
    price: '$20',
    duration: '40 minutos',
    image: nutricionCapilar,
    includes: [
      'Evaluación capilar',
      'Aplicación de tratamiento nutritivo',
    ],
  },
  {
    name: 'Reconstrucción Capilar',
    description: 'Repara el daño profundo y fortalece la fibra capilar',
    longDescription:
      'Tratamiento intensivo diseñado para reparar cabellos dañados por procesos químicos, herramientas de calor o decoloraciones. Ayuda a reconstruir la fibra capilar desde el interior, fortaleciendo el cabello y mejorando su resistencia. Durante el proceso se realiza una infusión de diferentes tratamientos que trabajan en conjunto para aportar al cabello los nutrientes que ha perdido con el uso de químicos y calor térmico, ayudando a restaurar su estructura, fuerza y apariencia saludable',
    price: '$30',
    duration: '1.5 horas',
    image: reconstruccionCapilar,
    includes: [
      'Diagnóstico capilar profesional',
      'Aplicación de tratamiento reconstructor',
      'Reparación profunda de la fibra capilar',
      'Sellado de cutícula',
      'Peinado final',
    ],
  },
];

export const tintesServices = [
  {
    name: 'Color Completo',
    description: 'Transforma tu look con un color uniforme, brillante y lleno de vida',
    longDescription:
      'Servicio de coloración completa diseñado para renovar o cambiar el tono del cabello de manera uniforme desde la raíz hasta las puntas. Utilizamos productos profesionales que aportan un color intenso, brillo y una cobertura óptima, logrando un resultado uniforme y duradero. Este servicio no incluye cambios de tono que requieran despigmentación ni procesos de iluminación',
    price: 'Desde $50',
    duration: '2 horas',
    image: colorCompleto,
    includes: [
      'Diagnóstico capilar y asesoría de color',
      'Aplicación de color en todo el cabello',
      'Cobertura uniforme del tono',
      'Lavado y tratamiento hidratante',
      'Peinado final',
    ],
  },
  {
    name: 'Corrección de Color',
    description: 'Recupera un color equilibrado y armonioso en tu cabello.',
    longDescription:
      'Servicio especializado para corregir tonos no deseados, manchas de color o resultados irregulares de coloraciones anteriores. Nuestro objetivo es restaurar un tono equilibrado y natural adaptado a tu estilo',
    price: 'Desde $75',
    duration: '3.5 horas',
    image: correccionColor,
    includes: [
      'Diagnóstico profesional del color',
      'Evaluación del historial químico del cabello',
      'Corrección y neutralización de tonos no deseados',
      'Aplicación de nuevo color equilibrado',
      'Peinado final',
    ],
  },
  {
    name: 'Retoque de Color',
    description: 'Mantén tu color perfecto cubriendo raíces y renovando el brillo',
    longDescription:
      'Servicio ideal para mantener tu color siempre impecable. Se enfoca en cubrir el crecimiento de la raíz y refrescar el tono del cabello para mantener un acabado uniforme y brillante',
    price: '$25',
    duration: '1.5 horas',
    image: retoqueColor,
    includes: [
      'Diagnóstico capilar',
      'Aplicación de color en raíz',
      'Cobertura de canas',
      'Lavado y acondicionamiento',
    ],
  },
];

export const estilizadoServices = [
  {
    name: 'Corte de Cabello - Limpieza',
    description: 'Mantén tu corte fresco y tu cabello saludable con una limpieza de puntas',
    longDescription:
      'Servicio de mantenimiento ideal para refrescar el corte actual, eliminar puntas abiertas y mantener el cabello con una apariencia ordenada y saludable. Perfecto para quienes desean limpiar el largo del cabello sin modificar significativamente la forma del corte.',
    price: '$5',
    duration: '15 minutos',
    image: corteCabelloLimpieza,
    includes: [
      'Limpieza de puntas',
      'Ajuste básico del corte',
      'Perfilado ligero',
      'Acabado profesional',
    ],
  },
  {
    name: 'Corte de Cabello Personalizado',
    description: 'Renueva tu estilo con un corte moderno adaptado a tu rostro y tipo de cabello.',
    longDescription:
      'Servicio profesional de corte diseñado para resaltar tus facciones y adaptarse a tu estilo personal. Incluye asesoría para encontrar el estilo que mejor se adapte a la forma de tu rostro y la textura de tu cabello, logrando un resultado equilibrado, moderno y fácil de mantener.',
    price: 'Desde $12',
    duration: '30 minutos',
    image: corteCabelloPersonalizado,
    includes: [
      'Asesoría de estilo personalizada',
      'Corte profesional',
      'Perfilado y definición',
      'Acabado profesional',
    ],
  },
  {
    name: 'Ondas',
    description: 'Luce ondas elegantes y llenas de movimiento',
    longDescription:
      'Peinado profesional con ondas que aportan volumen, movimiento y un estilo moderno. Ideal para eventos especiales o para lograr un look sofisticado y natural',
    price: 'Desde $10',
    duration: '1 hora',
    image: ondas,
    includes: [
      'Preparación del cabello',
      'Creación de ondas con herramientas profesionales',
      'Aplicación de productos de fijación ligera',
      'Acabado y peinado final',
    ],
  },
  {
    name: 'Planchado',
    description: 'Cabello liso, suave y con brillo profesional',
    longDescription:
      'Servicio de alisado temporal con plancha profesional que deja el cabello completamente liso, sedoso y con un acabado brillante. Ideal para lograr un look pulido y elegante',
    price: 'Desde $8',
    duration: '45 minutos',
    image: planchado,
    includes: [
      'Preparación del cabello',
      'Aplicación de protector térmico',
      'Planchado profesional',
      'Acabado con productos de brillo',
    ],
  },
  {
    name: 'Secado Profesional',
    description: 'Secado y estilizado que deja tu cabello con movimiento, volumen y un acabado impecable.',
    longDescription:
      'Servicio de secado profesional diseñado para dar forma al cabello mientras se elimina la humedad, logrando un acabado suave, con movimiento y brillo. Dependiendo del resultado deseado, puede realizarse con técnica de cepillo para mayor volumen y definición, o mediante pistoleado para un secado más rápido y natural.',
    price: 'Desde $10',
    duration: '45 minutos',
    image: secadoProfesional,
    includes: [
      'Preparación del cabello',
      'Secado con técnica profesional',
      'Moldeado con cepillo o pistoleado',
      'Control de frizz y acabado final',
    ],
  },
];

export const lavadoServices = [
  {
    name: 'Lavado Spa',
    description: 'Relaja tu mente mientras tu cabello recibe un cuidado profundo',
    longDescription:
      'Experiencia de lavado capilar diseñada para relajar y revitalizar el cabello y el cuero cabelludo. Incluye productos profesionales que limpian suavemente, hidratan y dejan el cabello fresco, suave y brillante',
    price: '$ 5',
    duration: '15 minutos',
    image: lavadoSpa,
    includes: [
      'Evaluación rápida del cuero cabelludo',
      'Lavado con shampoo profesional',
      'Masaje relajante capilar',
      'Aplicación de acondicionador hidratante',
    ],
  },
  {
    name: 'Lavado Desintoxicante',
    description: 'Elimina residuos e impurezas para un cabello más limpio y saludable',
    longDescription:
      'Tratamiento de limpieza profunda que ayuda a eliminar residuos de productos, grasa acumulada e impurezas del cuero cabelludo. Ideal para revitalizar el cabello y devolverle ligereza, frescura y brillo natural',
    price: '$ 8',
    duration: '20 minutos',
    image: lavadoDesintoxicacion,
    includes: [
      'Diagnóstico del cuero cabelludo',
      'Aplicación de shampoo detox de limpieza profunda',
      'Masaje estimulante capilar',
      'Aplicación de tratamiento equilibrante',
    ],
  },
];

export const depilacionServices = [
  {
    name: 'Depilación de Cejas',
    description: 'Define y resalta tu mirada con un diseño de cejas preciso',
    longDescription:
      'Servicio de depilación diseñado para dar forma y definición a las cejas, respetando la estructura natural del rostro. Ayuda a resaltar la mirada y lograr un acabado limpio y armonioso',
    price: '$ 5',
    duration: '20 minutos',
    image: depilacionCejas,
    includes: [
      'Evaluación de la forma natural de las cejas',
      'Eliminación de vellos no deseados',
      'Acabado y limpieza final',
    ],
  },
  {
    name: 'Depilación de Bozo',
    description: 'Elimina el vello del labio superior para una piel suave y limpia',
    longDescription:
      'Depilación del área del labio superior que ayuda a eliminar el vello de forma rápida y precisa, dejando la piel suave y con un acabado natural',
    price: '$ 4',
    duration: '15 minutos',
    image: depilacionBozo,
    includes: [
      'Limpieza del área a tratar',
      'Depilación del vello del labio superior',
      'Eliminación de residuos',
      'Aplicación de producto calmante',
    ],
  },
  {
    name: 'Depilación de Axilas',
    description: 'Piel suave y libre de vello con un acabado limpio y duradero',
    longDescription:
      'Servicio de depilación que elimina el vello de las axilas de forma efectiva, dejando la piel suave y limpia. Ideal para mantener una apariencia cuidada y mayor comodidad',
    price: '$ 12',
    duration: '25 minutos',
    image: depilacionAxilas,
    includes: [
      'Limpieza del área',
      'Depilación del vello',
      'Eliminación de residuos de producto',
      'Aplicación de producto calmante',
    ],
  },
];