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

              {/* Subtle Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />

            </div>
          ))}
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? 'bg-primary w-6'
                : 'bg-gray-400 hover:bg-white'
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
