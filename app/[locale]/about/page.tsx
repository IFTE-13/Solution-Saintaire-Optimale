"use client";
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useTranslations } from 'next-intl';
import { BadgeCheck, ScanSearch, Sprout, Home, Briefcase, Wrench, Truck, Layers, Shield, Star, Eye, Smile, CheckCircle } from "lucide-react";
import { LucideIcon } from 'lucide-react';

export interface SectionConfig {
  key: string;
  icon: LucideIcon;
  color: string;
}

export const sections: Record<string, SectionConfig[]> = {
  features: [
    { key: 'professional', icon: BadgeCheck, color: 'text-blue-600' },
    { key: 'eco', icon: Sprout, color: 'text-green-600' },
    { key: 'custom', icon: ScanSearch, color: 'text-indigo-600' }
  ],
  services: [
    { key: 'residential', icon: Home, color: 'text-violet-600' },
    { key: 'commercial', icon: Briefcase, color: 'text-pink-600' },
    { key: 'construction', icon: Wrench, color: 'text-orange-600' },
    { key: 'moveInOut', icon: Truck, color: 'text-cyan-600' },
    { key: 'deep', icon: Layers, color: 'text-emerald-600' },
    { key: 'maintenance', icon: Shield, color: 'text-yellow-600' }
  ],
  reasons: [
    { key: 'reliability', icon: CheckCircle, color: 'text-rose-600' },
    { key: 'expertise', icon: Star, color: 'text-purple-600' },
    { key: 'detail', icon: Eye, color: 'text-teal-600' },
    { key: 'satisfaction', icon: Smile, color: 'text-blue-600' },
    { key: 'comprehensive', icon: Shield, color: 'text-indigo-600' }
  ]
};


const Section = ({ type, items }: { type: string; items: SectionConfig[] }) => {
  const t = useTranslations('AboutPage');
  
  return (
    <div className='mx-6 space-y-4'>
      <p className='text-3xl'>{t(`${type}.title`)}</p>
      <Separator className='my-4 bg-blue-600 h-0.5' />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {items.map(({ key, icon: Icon, color }) => (
          <Card key={key} className='p-6 space-y-4 hover:shadow-lg duration-300 transition-all'>
            <CardHeader className='space-y-4'>
              <Icon className={`${color} size-10`} />
              {color}
              <CardTitle>{t(`${type}.${key}.title`)}</CardTitle>
              <CardDescription>{t(`${type}.${key}.description`)}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

const AboutPage = () => {
  const t = useTranslations('AboutPage');

  return (
    <div className="">
      <div className='max-w-7xl mx-auto py-24 space-y-12'>
      <div className='mx-6 space-y-4'>
        <p className='text-5xl gradient-text'>{t('title')}</p>
        <p className='text-2xl font-bold gradient-text'>{t('companyName')}</p>
        <p className='text-justify text-lg'>{t('description')}</p>
      </div>
      <Card className='relative mx-6 hover:shadow-md backgound'>
        <CardHeader className='space-y-4'>
          <CardTitle>{t('mission.title')}</CardTitle>
          <CardDescription>{t('mission.description')}</CardDescription>
        </CardHeader>
      </Card>
      {Object.entries(sections).map(([type, items]) => (
        <Section key={type} type={type} items={items} />
      ))}
    </div>
    </div>
  );
};

export default AboutPage;