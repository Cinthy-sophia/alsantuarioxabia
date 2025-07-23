import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Instagram, Mail, ChevronDown, FileText, MessageCircleMore } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const galleryRef = React.useRef<HTMLDivElement>(null);

  const handleGalleryArrow = (direction: 'left' | 'right') => {
    if (galleryRef.current) {
      const scrollAmount = 560 + 32; // image width + gap
      galleryRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f9f2e5' }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-sm border-b border-gray-100" style={{ backgroundColor: 'rgba(249, 242, 229, 0.9)' }}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="font-serif text-xl font-bold text-gray-800">Al Santuario</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-gray-600 hover:text-emerald-600 transition-colors">
                Inicio
              </button>
              <button onClick={() => scrollToSection('historia')} className="text-gray-600 hover:text-emerald-600 transition-colors">
                Historia
              </button>
              <button onClick={() => scrollToSection('contacto')} className="text-gray-600 hover:text-emerald-600 transition-colors">
                Contacto
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
        backgroundImage: window.innerWidth < 768
          ? 'url(frente-movil.jpg)'
          : 'url(frente-2.jpg)',
        transform: `translateY(${scrollY * 0.5}px)`
          }}>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-end z-10 text-center text-white px-6 pb-16 space-y-4" style={{ paddingBottom: '150px' }}>
          {/* Boton para descubrir la carta */}
            <button 
            onClick={() => scrollToSection('carta')}
            className="inline-flex items-center space-x-2 text-white px-8 py-3 transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: 'rgb(233 238 240 / 89%)', 
              borderRadius: '99px',
            }}
            >
            <span className="font-serif text-md" style={{ fontWeight: 'bolder', color: 'rgb(5 150 105)' }}>Descubre nuestra carta</span>
            </button>
            
            <button 
            onClick={() => window.open("https://wa.link/p2vd67", "_blank")}
            className="inline-flex items-center space-x-2 text-white px-8 py-3 transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: 'rgb(233 238 240 / 89%)', 
              borderRadius: '99px',
            }}
            >
            <span className="font-serif text-md" style={{ fontWeight: 'inherit', color: 'rgb(5 150 105)' }}>Reserva una mesa</span>
            </button>
        </div>

        <div
          className="absolute bottom-8 left-1/2 flex justify-center w-full"
          style={{ transform: 'translateX(-50%)' }}
        >
          <ChevronDown className="h-8 w-8 text-white animate-bounce" />
        </div>
      </section>

      {/* Carta Section*/}
      <section id="carta" className="py-20 bg-gradient-to-b from-rose-50 to-rose-50" style={{ background: 'linear-gradient(to bottom, #f9f2e5, #f3e5d0)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Nuestra carta
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
            <p className="font-serif text-xl text-gray-600 max-w-3xl mx-auto font-normal">
              Descubre una selección de platos mediterráneos elaborados con los ingredientes más frescos y de proximidad
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* PDF Viewer Container*/}            
            <div className="rounded-lg shadow-xl overflow-hidden border border-rose-100" style={{ backgroundColor: '#f9f2e5' }}>              
              {/* Download/View Button */}
              <div className="p-6 text-center border-t border-rose-100" style={{ backgroundColor: '#f9f2e5' }}>
                <button
                  className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                  onClick={() => window.open('/carta_santuario.pdf', '_blank')}
                >
                  <FileText className="h-5 w-5" />
                  <span>Ver carta completa (PDF)</span>
                </button>
                <p className="font-serif text-lg text-gray-500 mt-3">
                  También disponible en el restaurante
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>      

      {/* Historia Section */}
      <section id="historia" className="py-20 bg-gradient-to-b from-rose-50 to-emerald-50" style={{ background: 'linear-gradient(to bottom, #f3e5d0, #ecfdf5)', paddingBottom: '20px' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Nuestra historia
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
          </div>

          {/* Historia Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 text-justify">
              <h3 className="font-serif text-3xl md:text-4xl font-semibold text-gray-800">
              Porque algunos lugares no solo se visitan... se sienten
              </h3>
              <p className="font-serif text-md md:text-xl text-gray-900 leading-relaxed">
              En el abrazo silencioso del Cabo de San Antonio, donde la Reserva Natural del Montgó susurra historias milenarias, descubre un santuario gastronómico que despierta los sentidos.
              </p>
              <p className="font-serif text-md md:text-xl text-gray-900 leading-relaxed">
              Esta maravillosa casa, renacida del tiempo con alma mediterránea, te invita a vivir momentos que trascienden lo cotidiano. Aquí, cada rincón respira hospitalidad genuina, cada plato es una caricia al paladar y cada copa de nuestra bodega cuidadosamente seleccionada cuenta la historia de nuestra tierra.
              </p>
              <p className="font-serif text-md md:text-xl text-gray-900 leading-relaxed">
              Este es tu refugio donde el tiempo se detiene, donde la brisa marina acompaña cada conversación y donde la magia del Mediterráneo se vuelve tangible en cada experiencia.
              </p>
            </div>
            <div className="relative flex items-center justify-center">
              <img
              src={window.innerWidth < 768 ? 'equipo-movil.jpg' : 'equipo.jpg'}
              alt="Nuestro equipo"
              className="w-full max-w-lg h-auto aspect-video object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>

            {/* Gallery */}

            <div className="mb-16 pt-20">
            <h3 className="font-serif text-3xl md:text-4xl font-semibold text-gray-800">
              Galería de imágenes
              </h3>
              <div className="relative">
                {/* Left Arrow */}
                <button
                  onClick={() => handleGalleryArrow('left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-emerald-600 hover:text-white text-emerald-600 rounded-full shadow-lg p-2 transition-colors"
                  style={{ display: 'block' }}
                  aria-label="Anterior"
                >
                  <ChevronDown style={{ transform: 'rotate(90deg)' }} className="h-8 w-8" />
                </button>

                {/* Gallery */}
                <div
                  ref={galleryRef}
                  className="overflow-x-auto scrollbar-none"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  <div className="flex space-x-8 py-4 min-w-[1200px] md:min-w-[1200px] min-w-[100vw]">
                    {[
                      { src: "comida/pasta-2.jpg", alt: "Mesa en el patio" },
                      { src: "comida/redondo-9.jpg", alt: "Mesa en el patio" },
                      { src: "comida/tartar-2.jpg", alt: "Mesa en el patio" },
                      { src: "comida/tiramisu.jpg", alt: "Interior del restaurante" },
                      { src: "bodega-6.jpg", alt: "Bodega de vinos" },
                      { src: "mesa-copia.jpg", alt: "Mesa en el patio" },
                      { src: "bodega-5.jpg", alt: "Bodega de vinos" },
                      { src: "patio-back.jpg", alt: "Patio rodeado de plantas" },
                      { src: "mano-vino.jpg", alt: "Vino en la mano" },
                      { src: "vino-copa.jpg", alt: "Vino en la copa" },
                    ].map((img, idx) => (
                      <div
                        key={idx}
                        className="flex-shrink-0 rounded-lg overflow-hidden shadow-lg"
                        style={{
                          width: window.innerWidth < 768 ? 320 : 560,
                          height: window.innerWidth < 768 ? 220 : 400,
                          backgroundColor: '#f3f3f3',
                        }}
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                  <style>{`
                    .overflow-x-auto::-webkit-scrollbar { display: none; }
                  `}</style>
                </div>

                {/* Right Arrow */}
                <button
                  onClick={() => handleGalleryArrow('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-emerald-600 hover:text-white text-emerald-600 rounded-full shadow-lg p-2 transition-colors"
                  style={{ display: 'block' }}
                  aria-label="Siguiente"
                >
                  <ChevronDown style={{ transform: 'rotate(-90deg)' }} className="h-8 w-8" />
                </button>
              </div>
            </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 bg-gradient-to-b from-emerald-50" style={{ background: 'linear-gradient(to bottom, #ecfdf5, #f9f2e5)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Visítanos
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
          </div>

            <div className="grid lg:grid-cols-2 gap-12">
            {/* Mapa */}
            <div className="relative">
              <div className="relative w-full">
                <img
                  src="mapa.png"
                  alt="Ubicación del restaurante en el Cabo de San Antonio"
                  className="w-full h-auto object-contain rounded-lg shadow-xl mx-auto"
                />
              </div>
              <div className="mt-4 text-center">
              <p className="text-gray-600">
                Ctra. del Cap de Sant Antoni, 27, 03730 Xàbia, Alicante
              </p>
              </div>
            </div>

            {/* Información de Contacto */}
            <div className="space-y-8">
              <div className="p-8 rounded-lg border border-rose-100" style={{ backgroundColor: '#f3e5d0' }}>
                <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-6">
                  Información de contacto
                </h3>
                
                <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                    <MessageCircleMore className="h-6 w-6 text-emerald-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Reservas por WhatsApp</h4>
                      <p className="text-gray-600">+34 685 76 11 65</p>
                      <p className="text-sm text-gray-500">Recomendamos reservar con antelación</p>
                    </div>
                    </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-emerald-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Horarios</h4>
                      <p className="text-gray-600">Martes - Domingo</p>
                      <p className="text-gray-600">19:00 - 23:30</p>
                      <p className="text-sm text-gray-500">Cerrado los lunes</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-emerald-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Dirección</h4>
                      <p className="text-gray-600">Ctra. del Cap de Sant Antoni, 27</p>
                      <p className="text-gray-600">03730 Xàbia, Alicante</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Redes Sociales */}
              <div className="p-8 rounded-lg border border-emerald-100" style={{ backgroundColor: '#ecfdf5' }}>
                <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-6">
                  Síguenos
                </h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.instagram.com/alsantuario.xabia/#" 
                    className="flex items-center justify-center w-12 h-12 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>

                  <a 
                    href="mailto:alsantuarioxabia@gmail.com" 
                    className="flex items-center justify-center w-12 h-12 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors"
                  >
                    <Mail className="h-6 w-6" />
                  </a>
                </div>
                <p className="text-gray-600 mt-4">
                  @alsantuario.xabia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="rounded overflow-hidden">
                  <img 
                    src="logo.png" 
                    alt="Al Santuario Logo" 
                    className="h-32 w-auto object-contain"
                  />
                </div>
            </div>
            <p className="text-gray-400 mb-4">
              Espai gastronòmic i vins - Xàbia
            </p>
            <p className="text-gray-500 text-sm">
              © 2025 Al Santuario. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;