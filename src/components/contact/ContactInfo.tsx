import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactInfo = () => {
  const { t } = useLanguage();

  const contactItems = [
    {
      icon: MapPin,
      label: t('contact.info.address'),
      value: t('contact.info.address.value'),
      link: 'https://maps.google.com/?q=32.1181,20.0681',
    },
    {
      icon: Phone,
      label: t('contact.info.phone'),
      value: '(+218) 920878736',
      link: 'tel:+218920878736',
    },
    {
      icon: Mail,
      label: t('contact.info.email'),
      value: 'test@gmail.com',
      link: 'mailto:test@gmail.com',
    },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-navy mb-6">
        {t('contact.info.title')}
      </h3>
      {contactItems.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <item.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-navy mb-1">{item.label}</h4>
              <a
                href={item.link}
                className="text-muted-foreground hover:text-primary transition-colors"
                target={item.icon === MapPin ? '_blank' : undefined}
                rel={item.icon === MapPin ? 'noopener noreferrer' : undefined}
              >
                {item.value}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
