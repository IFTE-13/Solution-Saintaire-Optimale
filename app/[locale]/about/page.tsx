import { useTranslations } from 'next-intl';
import React from 'react'

const AboutPage = () => {
  const t = useTranslations('AboutPage');
  return (
    <div className='max-w-7xl mx-auto'>
        <p className='text-4xl'>{t('title')}</p>
        <p className='text-justify'>{t('description')}</p>
    </div>
  )
}

export default AboutPage