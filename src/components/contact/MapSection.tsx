import { useLanguage } from '@/contexts/LanguageContext';

const MapSection = () => {
  const { t } = useLanguage();

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-navy mb-6 text-center">
        {t('contact.map.title')}
      </h3>
      <div className="rounded-xl overflow-hidden shadow-lg h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.8!2d20.0681!3d32.1181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDA3JzA1LjIiTiAyMMKwMDQnMDUuMiJF!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Maedat Al Rahman Location"
        />
      </div>
    </div>
  );
};

export default MapSection;
