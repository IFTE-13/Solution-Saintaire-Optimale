import Image from 'next/image'
import React from 'react'
import rtcu from "@/public/cta.png"
import { Card } from './ui/card'
import { Button } from './ui/button'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const CTA = () => {
  const t = useTranslations('HomePage');
  return (
    <section className="bg-[#EAEEFE] dark:bg-transparent py-12 px-4 flex justify-center">
      <Card className="shadow-lg rounded-xl overflow-hidden flex flex-col lg:flex-row w-full container mx-auto">
        
        <div className="w-full lg:w-1/2">
          <Image 
            src={rtcu} 
            alt="hero" 
            className="w-full h-64 md:h-80 lg:h-full object-cover" 
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-semibold">
            <span className="gradient-text">{t("cta.title")}</span>
          </h2>

          <p className="mt-4">
          {t("cta.desc")}
          </p>

            <Button className='mt-6 w-1/4'>
                <Link href="/contact" >
                {t("cta.button")}
                </Link>
            </Button>
        </div>

      </Card>
    </section>
  )
}

export default CTA
