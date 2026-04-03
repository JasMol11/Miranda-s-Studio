import { useState, useEffect, useMemo, useCallback } from 'react';
import { Facebook, Instagram, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { motion } from 'motion/react';
import { toast } from 'sonner';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

import {
  alisadosServices,
  balayageServices,
  tratamientosCapilaresServices,
  tintesServices,
  estilizadoServices,
  lavadoServices,
  depilacionServices,
} from '@/data/hairServices';

import {
  manicureServices,
  pedicureServices,
} from '@/data/nailServices';

const WHATSAPP_NUMBER = '50376574608';


const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.52 3.48A11.94 11.94 0 0012.03 0C5.39 0 .02 5.37.02 12c0 2.11.55 4.16 1.6 5.97L0 24l6.18-1.62A11.96 11.96 0 0012.03 24c6.64 0 12.01-5.37 12.01-12 0-3.2-1.25-6.2-3.52-8.52zM12.03 21.8c-1.86 0-3.68-.5-5.28-1.46l-.38-.23-3.67.96.98-3.58-.25-.37a9.8 9.8 0 01-1.52-5.12c0-5.42 4.41-9.83 9.83-9.83s9.83 4.41 9.83 9.83-4.41 9.8-9.83 9.8zm5.39-7.34c-.29-.15-1.71-.84-1.97-.94-.27-.1-.46-.15-.66.15-.19.29-.75.94-.92 1.13-.17.19-.34.21-.63.07-.29-.15-1.23-.45-2.34-1.44-.87-.78-1.46-1.75-1.63-2.04-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.59-.91-2.17-.24-.58-.48-.5-.66-.51l-.56-.01c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.44s1.03 2.83 1.17 3.03c.15.19 2.02 3.08 4.89 4.32.68.29 1.2.46 1.61.59.68.21 1.3.18 1.79.11.55-.08 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.11-.26-.18-.55-.33z" />
      </svg>
    ),
    title: 'WhatsApp',
    value: '+503 7657 4608',
    link: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("¡Hola Miranda's Studio! \nMe gustaría obtener más información sobre sus servicios 😊")}`,
  },
  {
    icon: <Instagram size={24} />,
    title: 'Instagram',
    value: '@mirandas_studio.sv',
    link: 'https://www.instagram.com/mirandas_studio.sv',
  },
  {
    icon: <Facebook size={24} />,
    title: 'Facebook',
    value: 'Mirandas Studio',
    link: 'https://www.facebook.com/MirandasStudio',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
      </svg>
    ),
    title: 'TikTok',
    value: '@mirandas_studio.sv',
    link: 'https://www.tiktok.com/@mirandas_studio.sv',
  },
  {
    icon: <Mail size={24} />,
    title: 'Correo electrónico',
    value: 'mirandas.studio@gmail.com',
    link: 'mailto:mirandas.studio@gmail.com',
  },
];


const getBusinessStatus = () => {
  const localString = new Date().toLocaleString('en-US', {
    timeZone: 'America/El_Salvador',
  });
  const local = new Date(localString);

  const day = local.getDay(); // 0 = domingo
  const currentTime = local.getHours() * 60 + local.getMinutes();
  const openTime = 9 * 60;   // 9:00
  const closeTime = 18 * 60; // 18:00

  const isOpenHours = currentTime >= openTime && currentTime < closeTime;
  const isSunday = day === 0;

  if (!isSunday && isOpenHours) {
    return { text: 'Abierto ahora', color: 'text-white', bg: 'bg-[#E496AC]' };
  }

  return { text: 'Cerrado ahora', color: 'text-white', bg: 'bg-[#E496AC]' };
};


const validatePhone = (phone: string): boolean => {
  const trimmed = phone.trim();

  // Intento 1: parsear como número con código de país explícito (ej: +1, +52, +503)
  const withCountryCode = parsePhoneNumberFromString(trimmed);
  if (withCountryCode?.isValid()) return true;

  // Intento 2: asumir El Salvador si no tiene código de país
  const asSV = parsePhoneNumberFromString(trimmed, 'SV');
  if (asSV?.isValid()) return true;

  return false;
};

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const [department, setDepartment] = useState('');
  const [category, setCategory] = useState('');
  const [service, setService] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(getBusinessStatus);

const categories = useMemo(() => [
  { key: 'alisados',     title: 'Alisados',     department: 'cabello', services: alisadosServices },
  { key: 'balayage',     title: 'Balayage',     department: 'cabello', services: balayageServices },
  { key: 'tratamientos', title: 'Tratamientos', department: 'cabello', services: tratamientosCapilaresServices },
  { key: 'color',        title: 'Color',        department: 'cabello', services: tintesServices },
  { key: 'estilizado',   title: 'Estilizado',   department: 'cabello', services: estilizadoServices },
  { key: 'lavado',       title: 'Lavado',       department: 'cabello', services: lavadoServices },
  { key: 'depilacion',   title: 'Depilación',   department: 'cabello', services: depilacionServices },
  { key: 'manos',        title: 'Manicure',     department: 'unas',    services: manicureServices },
  { key: 'pies',         title: 'Pedicure',     department: 'unas',    services: pedicureServices },
], []);

  const filteredCategories = useMemo(
    () => categories.filter(c => c.department === department),
    [department, categories]
  );

  const selectedCategory = useMemo(
    () => categories.find(c => c.key === category),
    [category, categories]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(getBusinessStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const validateForm = useCallback(() => {
    const name = formData.name.trim();
    if (!name || name.length < 3) {
      toast.error('El nombre debe tener al menos 3 caracteres');
      return false;
    }

    if (!validatePhone(formData.phone)) {
      toast.error('Ingresa un número de teléfono válido (ej: 7657-4608 o +1 555 123 4567)');
      return false;
    }

    if (!department || !category || !service) {
      toast.error('Selecciona un servicio');
      return false;
    }

    return true;
  }, [formData.name, formData.phone, department, category, service]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    if (!validateForm()) return;

    setLoading(true);

const nombre = formData.name.trim();
const comentario = formData.message.trim();

const message = [
  `¡Hola Miranda's Studio! 👋 Soy *${nombre}*`,
  `y me gustaría agendar un servicio de *${service}*${comentario ? `, ya que ${comentario}` : ''}.`,
  `\nMi número de contacto es *${formData.phone}*.`,
  `\n¿Me podrían indicar disponibilidad de horarios, por favor? 😊`,
].join(' ');

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      toast.success('Redirigiendo a WhatsApp...');
      setFormData({ name: '', phone: '', message: '' });
      setDepartment('');
      setCategory('');
      setService('');
      setLoading(false);
    }, 400);
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-[#E496AC]">
            Contáctanos
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">

          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl mb-6 text-[#E496AC]">
              Información de Contacto
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start p-5 rounded-xl bg-[#F7E7E7] hover:bg-[#EBBDC9] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#E496AC] mr-5 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{item.title}</p>
                    <p>{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#F7E7E7] p-8 rounded-2xl"
          >
            <h3 className="text-2xl mb-6 text-[#E496AC]">
              Formulario de Contacto
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <Label>Nombre y Apellido</Label>
                <Input
                  required
                  placeholder="Ingresa tu nombre y apellido"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-2 bg-white"
                />
              </div>

              <div>
                <Label>Teléfono</Label>
                <Input
                  required
                  type="tel"
                  placeholder="Ingresa tu número de teléfono"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-2 bg-white"
                />
              </div>

              {/* DEPARTAMENTO */}
              <div>
                <Label>Departamento</Label>
                <Select
                  value={department}
                  onValueChange={(value) => {
                    setDepartment(value);
                    setCategory('');
                    setService('');
                    setFormData(prev => ({ ...prev, message: '' }));
                  }}
                >
                  <SelectTrigger className="mt-2 bg-white">
                    <SelectValue placeholder="Selecciona departamento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cabello">Cabello</SelectItem>
                    <SelectItem value="unas">Uñas</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* CATEGORÍA */}
              <div>
                <Label>Categoría</Label>
                <Select
                  value={category}
                  onValueChange={(value) => {
                    setCategory(value);
                    setService('');
                    setFormData(prev => ({ ...prev, message: '' }));
                  }}
                  disabled={!department}
                >
                  <SelectTrigger className="mt-2 bg-white">
                    <SelectValue placeholder={department ? 'Selecciona categoría' : 'Primero elige departamento'} />
                  </SelectTrigger>
                  <SelectContent>
                    {filteredCategories.map(cat => (
                      <SelectItem key={cat.key} value={cat.key}>
                        {cat.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* SERVICIO */}
              <div>
                <Label>Servicio</Label>
                <Select
                  value={service}
                  onValueChange={(value) => {
                    setService(value);
                    setTimeout(() => {
                      document.getElementById('mensaje')?.focus();
                    }, 100);
                  }}
                  disabled={!category}
                >
                  <SelectTrigger className="mt-2 bg-white">
                    <SelectValue placeholder={category ? 'Selecciona servicio' : 'Primero elige categoría'} />
                  </SelectTrigger>
                  <SelectContent>
                    {selectedCategory?.services.map((s, i) => (
                      <SelectItem key={i} value={s.name}>
                        {s.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* MAS INFO */}
              <div>
                <Label>
                  Cuéntanos qué te gustaría hacer{' '}
                  <span className="text-muted-foreground">(opcional)</span>
                </Label>
                <Textarea
                  id="mensaje"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-2 bg-white"
                  placeholder="Ej: Quiero un cambio de look, tengo el cabello oscuro y me gustaría algo más claro..."
                />
              </div>

              {/* BOTÓN AGENDAR */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-[#E496AC] text-white py-6 flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.52 3.48A11.94 11.94 0 0012.03 0C5.39 0 .02 5.37.02 12c0 2.11.55 4.16 1.6 5.97L0 24l6.18-1.62A11.96 11.96 0 0012.03 24c6.64 0 12.01-5.37 12.01-12 0-3.2-1.25-6.2-3.52-8.52zM12.03 21.8c-1.86 0-3.68-.5-5.28-1.46l-.38-.23-3.67.96.98-3.58-.25-.37a9.8 9.8 0 01-1.52-5.12c0-5.42 4.41-9.83 9.83-9.83s9.83 4.41 9.83 9.83-4.41 9.8-9.83 9.8zm5.39-7.34c-.29-.15-1.71-.84-1.97-.94-.27-.1-.46-.15-.66.15-.19.29-.75.94-.92 1.13-.17.19-.34.21-.63.07-.29-.15-1.23-.45-2.34-1.44-.87-.78-1.46-1.75-1.63-2.04-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.59-.91-2.17-.24-.58-.48-.5-.66-.51l-.56-.01c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.44s1.03 2.83 1.17 3.03c.15.19 2.02 3.08 4.89 4.32.68.29 1.2.46 1.61.59.68.21 1.3.18 1.79.11.55-.08 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.11-.26-.18-.55-.33z" />
                </svg>
                {loading ? 'Redirigiendo...' : service ? `Agendar ${service}` : 'Agendar Cita'}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Serás redirigido a WhatsApp para completar tu cita
              </p>

            </form>
          </motion.div>

          {/* BLOQUE INFERIOR */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* HORARIOS */}
            <div className="flex flex-col">
              <h3 className="text-2xl mb-2 text-[#E496AC]">
                Horarios de Atención
              </h3>
              <div className="p-5 rounded-xl bg-[#F7E7E7] flex-1"> {/* ← flex-1 */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#E496AC] mr-5">
                      <Clock size={24} />
                    </div>
                    <div className="space-y-1">
                      <p>Lunes a Sábado de 9:00AM a 6:00PM</p>
                      <p>Domingos: Únicamente con cita previa</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${status.bg} ${status.color}`}>
                    {status.text}
                  </div>
                </div>
              </div>
            </div>

            {/* UBICACIÓN */}
            <div className="flex flex-col">
              <h3 className="text-2xl mb-2 text-[#E496AC]">
                Ubicación
              </h3>
              <div className="p-5 rounded-xl bg-[#F7E7E7] flex-1"> {/* ← flex-1 */}
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#E496AC] mr-5">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p>San Antonio Abad, 131 Av. 2 de Abril, San Salvador</p>
                    <div className="flex gap-3 mt-3">
                      <a
                        href="https://maps.app.goo.gl/fT1CwtTUBFJpBMMu6"
                        target="_blank"
                        className="text-sm bg-white px-3 py-1 rounded-full hover:bg-[#E496AC] hover:text-white transition"
                      >
                        Google Maps
                      </a>
                      <a
                        href="https://waze.com/ul/hd42w1bby7"
                        target="_blank"
                        className="text-sm bg-white px-3 py-1 rounded-full hover:bg-[#E496AC] hover:text-white transition"
                      >
                        Waze
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}