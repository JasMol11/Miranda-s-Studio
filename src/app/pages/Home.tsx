import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { HeroCarousel } from '../components/HeroCarousel';
import { AboutSection } from '../components/AboutSection';
import { ServicesPreview } from '../components/ServicesPreview';
import { GalleryPreview } from '../components/GalleryPreview';
import { PricingSection } from '../components/PricingSection';
import { ContactSection } from '../components/ContactSection';
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router';

export function Home() {
  const { hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      element?.scrollIntoView({ behavior: 'auto' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        {/* <HeroCarousel /> */}
        <section id="us">
          <AboutSection />
        </section>
        <section id="servicios">
          <ServicesPreview />
        </section>
        <section id="galeria">
          <GalleryPreview />
        </section>
        <section id="precios">
          <PricingSection />
        </section>
        <section id="contacto">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}