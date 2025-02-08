"use client"
import HeroImage from "@/public/hero-art.png"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const Hero = () => {
  const t = useTranslations('HomePage');
  return( 
    <section
      className="pt-8 pb-20 md:pt-5 md:pb-10 background px-4"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">

          <div className="w-full md:w-full lg:w-1/2 md:pr-8">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter gradient-text mt-6">
                {t('title')}
            </h1>
            <p className="text-xl tracking-tight mt-6 text-justify">
                {t('description')}
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <Button>
                <Link href={"/contact"}>
                {t('button')}
                </Link>
              </Button>
            </div>
          </div>


          <div className="w-full md:w-4/8 mt-20 md:mt-0 md:h-[648px] overflow-x-visible block md:hidden lg:block ml-0 lg:ml-48 md:ml-0">
            <Image
              src={HeroImage}
              alt="hero image"
              className="lg:h-[650px] lg:w-[850px] object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};