import React from 'react'
import { useTranslations } from 'next-intl';
import { Button } from './ui/button';
import Link from 'next/link';
import { Ripple } from './ripple';

const HomeAbout = () => {
  const t = useTranslations('HomePage');
  return (
    <section className="bg-[#EAEEFE] py-16 dark:bg-transparent">
        <div className="relative flex h-[780px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
        <div className="container mx-auto mb-10 space-y-8 flex items-center justify-center flex-col">
            <h2 className="text-3xl md:text-[54px] md:leading-[60px] font-bold gradient-text">Who Are We?</h2>
            <p className='max-w-4xl text-justify mx-6'>{t('about')}</p>
            <Button>
                <Link href={"/about"}>
                    {t("aboutButton")}
                </Link>
            </Button>
        </div>
        <Ripple />
        </div>
    </section>
  )
}

export default HomeAbout