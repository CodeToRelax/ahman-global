import { Link } from 'react-router-dom';
import { Award, TrendingUp, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const WelcomeSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Award,
      title: t('home.features.quality.title'),
      description: t('home.features.quality.desc'),
    },
    {
      icon: TrendingUp,
      title: t('home.features.reliable.title'),
      description: t('home.features.reliable.desc'),
    },
    {
      icon: Target,
      title: t('home.features.market.title'),
      description: t('home.features.market.desc'),
    },
  ];

  return (
    <section className="py-20 pattern-overlay">
      <div className="container mx-auto px-4">
        {/* Welcome Text */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-navy mb-6">
            {t('home.welcome.title')}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('home.welcome.description')}
          </p>
          <Link to="/products">
            <Button size="lg" className="mt-8 bg-primary hover:bg-primary/90">
              {t('home.welcome.cta')}
            </Button>
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-primary/10 group hover:border-primary/30"
            >
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
