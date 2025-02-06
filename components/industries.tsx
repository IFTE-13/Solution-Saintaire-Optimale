
'use client';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import Card from './card';
import { useTranslations } from 'next-intl';

export default function Industries() {

    const t = useTranslations('HomePage.services');

    const data = [
        {
            title: t('commercial.title'),
            descripton: t('commercial.description'),
            src: "/commercial.jpg",
        },
        {
            title: t('education.title'),
            descripton: t('education.description'),
            src: "/edu.jpg",
        },
        {
            title: t('industrial.title'),
            descripton: t('industrial.description'),
            src: "/industry.jpg",
        },
        {
            title: t('hospitality.title'),
            descripton: t('hospitality.description'),
            src: "/hos.jpg",
        },
        {
            title: t('institutional.title'),
            descripton: t('institutional.description'),
            src: "/inst.jpg",
        },
        {
            title: t('healthcare.title'),
            descripton: t('healthcare.description'),
            src: "/healt.jpg",
        },
    ]
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })


  return (
    <div className='bg-[#EAEEFE]'>
      <main ref={container} className='relative py-24'>
        <div className="max-w-[540px] mx-auto mb-10">
        <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold gradient-text">{t('title')}</h2>
        <h2 className="text-center text-2xl font-bold text-sky-800">{t('desc')}</h2>
      </div>
        {
          data.map( (industries, i) => {
            const targetScale = 1 - ( (data.length - i) * 0.05);
            return <Card key={`p_${i}`} i={i} {...industries} description={industries.descripton} progress={scrollYProgress} range={[i * .18, 1]} targetScale={targetScale}/>
          })
        }
      </main>
    </div>
  )
}