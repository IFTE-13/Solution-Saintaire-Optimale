"use client";

import Image from 'next/image';
import React from 'react';
import rtcu from "@/public/cta.png";
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const CTA = () => {
  const t = useTranslations('HomePage');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      className="bg-[#EAEEFE] dark:bg-transparent py-12 px-4 flex justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <Card className="shadow-lg rounded-xl overflow-hidden flex flex-col lg:flex-row w-full container mx-auto">
        <motion.div 
          className="w-full lg:w-1/2"
          variants={imageVariants}
        >
          <Image 
            src={rtcu} 
            alt="hero" 
            className="w-full h-64 md:h-80 lg:h-full object-cover" 
            priority
          />
        </motion.div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 md:p-10">
          <motion.h2 
            className="text-2xl md:text-3xl font-semibold"
            variants={itemVariants}
          >
            <span className="gradient-text">{t("cta.title")}</span>
          </motion.h2>

          <motion.p 
            className="mt-4"
            variants={itemVariants}
          >
            {t("cta.desc")}
          </motion.p>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="mt-6 w-1/4 relative overflow-hidden group">
              <Link href="/contact" className="relative z-10">
                {t("cta.button")}
              </Link>
              <motion.div
                className="absolute inset-0 bg-blue-600 dark:bg-blue-400"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.div>
        </div>
      </Card>
    </motion.section>
  );
};

export default CTA;