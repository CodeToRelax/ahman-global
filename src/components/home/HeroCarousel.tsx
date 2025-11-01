import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroCarousel = () => {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      axis: 'y',
      duration: 30
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const slides = [
    {
      image: '/hero/sardine-can.jpg',
      titleKey: 'home.hero.slides.0.title',
      subtitleKey: 'home.hero.slides.0.subtitle',
    },
    {
      image: '/hero/salmon-bowl.jpg',
      titleKey: 'home.hero.slides.1.title',
      subtitleKey: 'home.hero.slides.1.subtitle',
    },
    {
      image: '/hero/salmon-sashimi.jpg',
      titleKey: 'home.hero.slides.2.title',
      subtitleKey: 'home.hero.slides.2.subtitle',
    },
    {
      image: '/hero/library.jpg',
      titleKey: 'home.hero.slides.3.title',
      subtitleKey: 'home.hero.slides.3.subtitle',
    },
    {
      image: '/hero/fish-market.jpg',
      titleKey: 'home.hero.slides.4.title',
      subtitleKey: 'home.hero.slides.4.subtitle',
    },
  ];

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <section className="relative h-screen overflow-hidden" aria-label="Hero Carousel">
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="embla__slide relative h-screen min-h-0 flex-[0_0_100%]"
            >
              {/* Background Image */}
              <img
                src={slide.image}
                alt={t(slide.titleKey)}
                className="absolute inset-0 w-full h-full object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
                <div className="text-center space-y-6 animate-fade-in-up">
                  <h1 
                    className="text-5xl md:text-7xl font-bold mb-4"
                    style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}
                  >
                    {t(slide.titleKey)}
                  </h1>
                  <p 
                    className="text-2xl md:text-4xl font-light"
                    style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.8)' }}
                  >
                    {t(slide.subtitleKey)}
                  </p>
                </div>

                {/* Scroll Indicator - Only on first slide */}
                {selectedIndex === 0 && (
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <ChevronDown className="h-8 w-8 text-white/70" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? 'bg-primary w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === selectedIndex ? 'true' : 'false'}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
