import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-white/10 rounded-lg p-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('ar')}
        className={`text-xs font-medium px-3 ${
          language === 'ar' 
            ? 'bg-primary text-white hover:bg-primary/90' 
            : 'text-navy hover:bg-white/20'
        }`}
      >
        العربية
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('en')}
        className={`text-xs font-medium px-3 ${
          language === 'en' 
            ? 'bg-primary text-white hover:bg-primary/90' 
            : 'text-navy hover:bg-white/20'
        }`}
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageSelector;
