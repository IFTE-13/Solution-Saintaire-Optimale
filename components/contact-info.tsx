import React from 'react';
import { Clock, Mail, Map, Phone } from 'lucide-react';
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from 'next-intl';
import { socialLinks } from './shared/Footer';
import Link from 'next/link';

const ContactInfo = () => {
  const t = useTranslations('contact');

  const contactDetails = [
    { icon: Map, text: t('location') },
    { icon: Phone, text: t('phone') },
    { icon: Mail, text: t('email') },
    { icon: Clock, text: t('support') },
  ];

  return (
    <div className=''>
      <CardHeader className="p-0 space-y-2">
        <CardTitle className="text-3xl font-bold tracking-tight">
          {t('title')}
        </CardTitle>
        <CardDescription>
          {t('description')}
        </CardDescription>
      </CardHeader>

      <div className="mt-8 space-y-6">
        {contactDetails.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-x-3">
            <Icon className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700 dark:text-gray-300">{text}</span>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-gray-600 dark:text-gray-300 font-medium">
          {t('social.title')}
        </h3>
        <div className="flex mt-4 space-x-4">
            {socialLinks.map((link, index) => (
                <Link 
                key={index} 
                href={link.href}
                className={`${link.color} transition-colors p-2`}
                >
                {link.icon}
                </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;