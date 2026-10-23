import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Award, ExternalLink } from 'lucide-react';

function Gallery() {
  const slides = [
    {
      id: 1,
      image: "/Img/nexora.png",
      title: "Entrega Nexora Consulting",
      subtitle: "Apresentação da plataforma institucional e acadêmica",
      tag: "Consultoria & Cursos",
    },
    {
      id: 2,
      image: "/Img/updata.png",
      title: "Lançamento Plataforma UPDATA",
      subtitle: "Validação de fluxos de consultoria em dados e agendamento",
      tag: "Dados & Treinamento",
    },
    {
      id: 3,
      image: "/Img/mohamed-gostoso.png",
      title: "Validação Sistema Mohamed Gostoso",
      subtitle: "Implementação de pedidos via QR Code e gestão de mesas",
      tag: "Restaurante & Gestão",
    },
    {
      id: 4,
      image: "/Img/performance-specialist.png",
      title: "Dashboard Performance Specialist",
      subtitle: "Entrega do painel privado de acompanhamento de atletas",
      tag: "Performance Desportiva",
    },
    {
      id: 5,
      image: "/Img/nexora.png",
      title: "Interfaces de Alta Performance",
      subtitle: "Soluções digitais responsivas com foco em conversão e usabilidade",
      tag: "Front-End & UX",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 py-1 px-3.5 mb-3 text-xs font-semibold tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
              <Award className="w-3.5 h-3.5" />
              <span>Momentos & Resultados</span>
            </div>
            <h2 data-aos="fade-up" data-aos-duration="1500" className="text-3xl md:text-4xl font-bold text-white mb-4">
              Galeria de Entregas
            </h2>
            <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100" className="text-xl max-w-3xl text-slate-300 text-justify">
              Registros e prévias da entrega de projectos no mercado, demonstrando o impacto prático do meu trabalho junto a parceiros e clientes.
            </p>
          </div>

          {/* Contador de Slides */}
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-white">0{currentIndex + 1}</span>
            <span className="text-slate-600 text-lg">/</span>
            <span className="text-slate-500 text-base font-medium">0{slides.length}</span>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative group bg-slate-900/60 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Imagem e Conteúdo do Slide */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-slate-950">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                  index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                />

                {/* Overlay degradê escuro */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>

                {/* Legenda do Slide */}
                <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 z-20">
                  <div className="max-w-2xl">
                    <span className="inline-block py-1 px-3 rounded-full text-xs font-semibold bg-indigo-600/90 text-white mb-3 backdrop-blur-md shadow-md">
                      {slide.tag}
                    </span>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 tracking-tight">
                      {slide.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 line-clamp-2">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Botão Anterior */}
            <button
              onClick={prevSlide}
              aria-label="Slide anterior"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-slate-950/70 hover:bg-indigo-600 text-white border border-slate-700/60 transition-all duration-300 backdrop-blur-md shadow-lg cursor-pointer hover:scale-105"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Botão Próximo */}
            <button
              onClick={nextSlide}
              aria-label="Próximo slide"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-slate-950/70 hover:bg-indigo-600 text-white border border-slate-700/60 transition-all duration-300 backdrop-blur-md shadow-lg cursor-pointer hover:scale-105"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Barra de Miniaturas e Indicadores */}
          <div className="p-4 sm:p-6 bg-slate-950/90 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Dots Indicadores */}
            <div className="flex items-center gap-2.5">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  aria-label={`Ir para foto ${index + 1}`}
                  className={`transition-all duration-300 rounded-full h-2.5 ${
                    index === currentIndex
                      ? 'w-8 bg-indigo-500 shadow-md shadow-indigo-500/50'
                      : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

            <p className="text-xs text-slate-400 text-center sm:text-right">
              Use as setas ou deslize no ecrã para navegar entre as entregas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;

