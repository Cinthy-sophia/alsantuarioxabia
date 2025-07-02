import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook, Mail, ChevronDown, FileText } from 'lucide-react';

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
              {/* <button onClick={() => scrollToSection('carta')} className="text-gray-600 hover:text-emerald-600 transition-colors">
                Carta
              </button> */}
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
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: window.innerWidth < 768
              ? 'url(patio-frente-2.jpg)' //movil
              : 'url(patio-frente-3.jpg)', //desktop
            transform: `translateY(${scrollY * 0.5}px)`
          }}>
            <div className="absolute inset-0" style={{ background: 'rgba(27, 25, 25, 0.22)' }}>
            </div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6">        
          {/* <h1 className="font-serif text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            Al Santuario
          </h1>
         <p className="font-serif text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto">
            Donde la naturaleza abraza cada momento y cada sabor cuenta una historia...
          </p> */}
          {/* //Boton para descubrir la carta */}
          {/* <button 
            onClick={() => scrollToSection('carta')}
            className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            <span>Descubre nuestra carta</span>
            <ChevronDown className="h-5 w-5" />
          </button>*/ }
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white" />
        </div>
      </section>
{/* 
      {/* Carta Section
      <section id="carta" className="py-20 bg-gradient-to-b from-rose-50 to-rose-50" style={{ background: 'linear-gradient(to bottom, #f9f2e5, #f3e5d0)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Nuestra Carta
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre nuestra selección de platos mediterráneos elaborados con ingredientes frescos y de temporada
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {//* PDF Viewer Container}            
            <div className="rounded-lg shadow-xl overflow-hidden border border-rose-100" style={{ backgroundColor: '#f9f2e5' }}>
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-6 text-center">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <FileText className="h-8 w-8" />
                  <h3 className="font-serif text-2xl font-semibold">Carta de Al Santuario</h3>
                </div>
                <p className="text-emerald-100">
                  Cocina mediterránea auténtica con productos de la región
                </p>
              </div>
              
              {/* PDF Placeholder }
              <div className="relative bg-rose-25 min-h-[600px] flex items-center justify-center" style={{ backgroundColor: '#f9f2e5' }}>
                <div className="text-center p-8">
                  <FileText className="h-24 w-24 text-emerald-500 mx-auto mb-6" />
                  <h4 className="font-serif text-2xl font-semibold text-gray-800 mb-4">
                    Carta del Restaurante
                  </h4>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    Aquí se mostraría el PDF con nuestra carta completa. Para una implementación real, 
                    necesitarías subir el archivo PDF de tu carta.
                  </p>
                  <div className="p-6 rounded-lg shadow-md max-w-md mx-auto border border-rose-100" style={{ backgroundColor: '#f9f2e5' }}>
                    <h5 className="font-semibold text-gray-800 mb-3">Especialidades destacadas:</h5>
                    <ul className="text-left text-gray-600 space-y-2">
                      <li>• Paella Marinera tradicional</li>
                      <li>• Pescado fresco del día</li>
                      <li>• Arroces mediterráneos</li>
                      <li>• Tapas de la casa</li>
                      <li>• Selección de vinos locales</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Download/View Button }
              <div className="p-6 text-center border-t border-rose-100" style={{ backgroundColor: '#f9f2e5' }}>
                <button className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
                  <FileText className="h-5 w-5" />
                  <span>Descargar Carta Completa</span>
                </button>
                <p className="text-sm text-gray-500 mt-3">
                  También disponible en el restaurante
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      

      {/* Historia Section */}
      <section id="historia" className="py-20 bg-gradient-to-b from-rose-50 to-emerald-50" style={{ background: 'linear-gradient(to bottom, #f3e5d0, #ecfdf5)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Nuestra Historia
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
          </div>

          {/* Historia Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-semibold text-gray-800">
                Porque algunos lugares no solo se visitan... se sienten.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                En el abrazo silencioso del Cabo de San Antonio, donde la Reserva Natural del Montgó susurra historias milenarias, descubre un santuario gastronómico que despierta los sentidos.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nuestra casa, renacida del tiempo con alma mediterránea, te invita a vivir momentos que trascienden lo cotidiano. Aquí, cada rincón respira hospitalidad genuina, cada plato es una caricia al paladar y cada copa de nuestra bodega cuidadosamente seleccionada cuenta la historia de nuestra tierra.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Este es tu refugio donde el tiempo se detiene, donde la brisa marina acaricia cada conversación y donde la magia del Mediterráneo se vuelve tangible en cada experiencia.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Familia fundadora del restaurante"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-emerald-400 rounded-full opacity-20"></div>
            </div>
          </div>

          {/* Gallery */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Paella tradicional"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold text-lg">Paella Marinera</h4>
                  <p className="text-sm">Nuestra especialidad desde 1952</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.pexels.com/photos/1435998/pexels-photo-1435998.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Pescado fresco"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold text-lg">Pescado del Día</h4>
                  <p className="text-sm">Fresco de nuestras costas</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Ambiente del restaurante"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold text-lg">Ambiente Acogedor</h4>
                  <p className="text-sm">Vista al mar mediterráneo</p>
                </div>
              </div>
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
                  Información de Contacto
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-emerald-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Reservas</h4>
                      <p className="text-gray-600">+34 685 76 11 65</p>
                      <p className="text-sm text-gray-500">Recomendamos reservar con antelación</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-emerald-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Horarios</h4>
                      <p className="text-gray-600">Martes - Domingo</p>
                      <p className="text-gray-600">19:30 - 23:30</p>
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