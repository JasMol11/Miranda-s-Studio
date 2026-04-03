import { Link } from 'react-router';
import { useLayoutEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';

export function NotFound() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-gradient-to-b from-[#F7E7E7] to-white px-4">
        <div className="text-center max-w-md">
          <h1 
            className="text-8xl mb-4 text-[#E496AC]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            404
          </h1>
          <h2 
            className="text-3xl mb-4 text-foreground"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Página no encontrada
          </h2>
          <p 
            className="text-lg text-muted-foreground mb-8"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Lo sentimos, la página que buscas no existe.
          </p>
          <Link to="/">
            <Button 
              size="lg"
              className="bg-[#E496AC] hover:bg-[#d4809a] text-white"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Volver al Inicio
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
