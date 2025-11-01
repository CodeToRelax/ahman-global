import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  const { t } = useLanguage();

  return (
    <div className="relative max-w-xl mx-auto mb-12">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      <Input
        type="text"
        placeholder={t('products.search')}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-12 h-14 text-lg border-primary/20 focus:border-primary"
      />
    </div>
  );
};

export default SearchBar;
