import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "/Img/galeria-1.jpg",
  "/Img/galeria-2.jpg",
  "/Img/galeria-3.jpg",
  "/Img/galeria-4.jpg",
  "/Img/galeria-5.jpg",
];

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Auto-play do slide a cada 5 segundos
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  // Suporte a swipe no mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section id="galeria" className="bg-slate-950 text-slate-300 px-4 sm:px-8 md:px-16 lg:px-32 pt-10 sm:pt-14 pb-12 sm:pb-16 overflow-x-hidden border-t border-slate-900/80">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8 gap-4">
          <h2 data-aos="fade-up" data-aos-duration="1500" className="text-3xl md:text-4xl font-bold text-white">
            Galeria
          </h2>

          {/* Contador de Slides */}
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-400 bg-slate-900/80 border border-slate-800 px-3.5 py-1.5 rounded-full">
            <span className="text-white">0{currentIndex + 1}</span>
            <span className="text-slate-600">/</span>
            <span>0{images.length}</span>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative group bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Visualizador da Imagem */}
          <div className="relative h-[460px] sm:h-[560px] md:h-[640px] w-full overflow-hidden bg-slate-950 flex items-center justify-center p-3 sm:p-6">
            {images.map((image, index) => (
              <div
                key={image}
                className={`absolute inset-0 w-full h-full flex items-center justify-center p-3 sm:p-6 transition-opacity duration-700 ease-in-out ${
                  index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
                }`}
              >
                {/* Efeito de ambiente desfocado no fundo */}
                <img
                  src={image}
                  alt="Fundo desfocado"
                  className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-20 scale-110 pointer-events-none"
                />

                {/* Foto principal inteira sem cortes */}
                <img
                  src={image}
                  alt={`Foto da galeria ${index + 1}`}
                  className="relative z-10 max-h-full max-w-full object-contain rounded-2xl shadow-2xl"
                />
              </div>
            ))}

            {/* Botão Anterior */}
            <button
              onClick={prevSlide}
              aria-label="Foto anterior"
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3.5 rounded-full bg-slate-950/70 hover:bg-indigo-600 text-white border border-slate-700/60 transition-all duration-300 backdrop-blur-md shadow-xl cursor-pointer hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Botão Próximo */}
            <button
              onClick={nextSlide}
              aria-label="Próxima foto"
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3.5 rounded-full bg-slate-950/70 hover:bg-indigo-600 text-white border border-slate-700/60 transition-all duration-300 backdrop-blur-md shadow-xl cursor-pointer hover:scale-105 active:scale-95"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Barra de Indicadores */}
          <div className="p-4 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-center gap-2.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Ir para foto ${index + 1}`}
                className={`transition-all duration-300 rounded-full h-2.5 cursor-pointer ${
                  index === currentIndex
                    ? 'w-8 bg-indigo-500 shadow-md shadow-indigo-500/50'
                    : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
