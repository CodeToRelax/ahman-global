import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import HeroCarousel from '@/components/home/HeroCarousel';
import WelcomeSection from '@/components/home/WelcomeSection';
import StatsSection from '@/components/home/StatsSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroCarousel />
      <WelcomeSection />
      <StatsSection />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Home;
