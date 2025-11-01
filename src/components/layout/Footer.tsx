import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t, dir } = useLanguage();

  return (
    <footer className="bg-navy text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
          <div className="mb-4">
            <Link to="/" className="inline-block">
              <span className="font-logo text-2xl font-bold tracking-wider text-white">
                {dir === 'rtl' ? 'مائدة الرحمن' : 'Maedat Al Rahman'}
              </span>
            </Link>
          </div>
            <p className="text-white/80 text-sm">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">{t('footer.quicklinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-primary transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/80 hover:text-primary transition-colors">
                  {t('nav.products')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-primary transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-white/80 text-sm">
                  {t('contact.info.address.value')}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+218920878736" className="text-white/80 hover:text-primary transition-colors text-sm">
                  (+218) 920878736
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:test@gmail.com" className="text-white/80 hover:text-primary transition-colors text-sm">
                  test@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">{t('footer.followus')}</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} {t('footer.company')} - {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
