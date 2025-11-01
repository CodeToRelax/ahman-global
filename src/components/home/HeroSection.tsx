import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Gradient Layer */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary via-navy to-coral parallax-layer"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 pattern-overlay opacity-20" />

      {/* Floating Product Images */}
      <div 
        className="absolute top-1/4 left-1/4 w-40 h-40 parallax-layer"
        style={{ transform: `translate(${scrollY * 0.3}px, ${scrollY * 0.2}px) rotate(${scrollY * 0.1}deg)` }}
      >
        <img 
          src="/tuna-product.jpeg" 
          alt="Tuna Product" 
          className="w-full h-full object-contain drop-shadow-2xl animate-float"
        />
      </div>

      <div 
        className="absolute top-1/3 right-1/4 w-32 h-32 parallax-layer"
        style={{ 
          transform: `translate(${-scrollY * 0.2}px, ${scrollY * 0.15}px) rotate(${-scrollY * 0.1}deg)`,
          animationDelay: '2s'
        }}
      >
        <img 
          src="/tuna-product-2.jpeg" 
          alt="Tuna Product" 
          className="w-full h-full object-contain drop-shadow-2xl animate-float"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        <div className="text-center space-y-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            {t('home.hero.title')}
          </h1>
          <p className="text-2xl md:text-4xl font-light mb-2">
            {t('home.hero.subtitle')}
          </p>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            {t('home.hero.tagline')}
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
