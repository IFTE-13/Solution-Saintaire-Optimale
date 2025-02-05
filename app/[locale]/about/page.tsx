"use client";
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useTranslations } from 'next-intl';
import { BadgeCheck, ScanSearch, Sprout, Home, Briefcase, Wrench, Truck, Layers, Shield, Star, Eye, Smile, CheckCircle } from "lucide-react";
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import GradientTimeline from '@/components/time-line';

interface SectionConfig {
  key: string;
  icon: LucideIcon;
  color: string;
}

const sections: Record<string, SectionConfig[]> = {
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

const AnimatedCard = motion(Card);


const Section = ({ type, items }: { type: string; items: SectionConfig[] }) => {
  const t = useTranslations('AboutPage');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    show: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };
  
  return (
    <div className='mx-6 space-y-4' ref={sectionRef}>
      <p className='text-3xl'>{t(`${type}.title`)}</p>
      <Separator className='my-4 bg-blue-600 h-0.5' />
      <motion.div 
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {items.map(({ key, icon: Icon, color }) => (
          <AnimatedCard
            key={key}
            variants={item}
            className='p-6 space-y-4 hover:shadow-lg duration-300 transition-all'
          >
            <CardHeader className='space-y-4'>
              <Icon className={`${color} size-10`} />
              <CardTitle>{t(`${type}.${key}.title`)}</CardTitle>
              <CardDescription>{t(`${type}.${key}.description`)}</CardDescription>
            </CardHeader>
          </AnimatedCard>
        ))}
      </motion.div>
    </div>
  );
};

const HeroSection = () => {
  const t = useTranslations('AboutPage');

  return (
    <div className="relative flex items-center justify-center text-center px-6 py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,0,0,0.2)_1px,_transparent_1px)] bg-[size:20px_20px] opacity-70"></div>
      <div className="relative z-10 max-w-3xl tracking-wide">
        <p className="text-5xl font-bold">{t('hero1')}</p>
        <p className="text-5xl font-bold rounded-md bg-gradient-to-r from-fuchsia-500 to-pink-500 dark:bg-transparent dark:bg-clip-text dark:text-transparent">
          {t('hero2')}
        </p>
        <p className="text-5xl font-bold">{t('hero3')}</p>
      </div>
    </div>
  );
};

const AboutPage = () => {
  const t = useTranslations('AboutPage');

  return (
    <div className="">
      <HeroSection />
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
    <GradientTimeline/>
    </div>
  );
};

export default AboutPage;