import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/logo.png';
import LogoWhite from '@/public/logo-white.png';
import { FacebookIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const socialLinks = [
  { href: '#', label: 'Facebook', icon: <FacebookIcon />, color: 'hover:text-blue-700' },
  { href: '#', label: 'Instagram', icon: <InstagramIcon />, color: 'hover:text-red-500' },
  { href: '#', label: 'Linked In', icon: <LinkedinIcon />, color: 'hover:text-blue-500' },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const t = useTranslations('FooterSection');
  return (
    <footer className="pt-12 background-reverse">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-6 pb-8">
        <div className="w-72 block dark:hidden">
          <Link href="/">
            <Image
              src={Logo}
              alt="Solution Saintaire Optimale"
              className="h-full w-full object-contain"
            />
          </Link>
        </div>
        <div className="w-72 hidden dark:block">
          <Link href="/">
          <Image
              src={LogoWhite}
              alt="Solution Saintaire Optimale"
              className="h-full w-full object-contain"
            />
          </Link>
        </div>

        <div className="flex flex-col items-center space-y-2 text-gray-600">
          <p className="text-sm font-medium">{t('location')}</p>
          <a 
            href="mailto:arman@ssoptimale.ca" 
            className="text-sm hover:text-blue-600 transition-colors"
          >
            arman@ssoptimale.ca
          </a>
        </div>
      </div>

      <div className="border-t border-gray-400 dark:border-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {year} {t('companyName')}
          </p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
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
    </footer>
  );
};

export default Footer;
