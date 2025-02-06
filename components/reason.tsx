"use client"
import { useTranslations } from 'next-intl';
import Image from "next/image";
import rtcu from "@/public/reason.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TextAnimate } from "./text-animate";
import { Check, Star, Sparkles, Clock } from "lucide-react";
import { motion } from 'framer-motion';

export default function Reasons() {
  const t = useTranslations('reasons');
  
  const cards = [
    {
      title: t('expert.title'),
      icon: Star,
      points: [
        t('expert.point1'),
        t('expert.point2'),
        t('expert.point3'),
        t('expert.point4'),
      ],
    },
    {
      title: t('plans.title'),
      icon: Sparkles,
      points: [
        t('plans.point1'),
        t('plans.point2'),
        t('plans.point3'),
        t('plans.point4'),
      ],
    },
    {
      title: t('eco.title'),
      icon: Check,
      points: [
        t('eco.point1'),
        t('eco.point2'),
        t('eco.point3'),
        t('eco.point4'),
      ],
    },
    {
      title: t('reliability.title'),
      icon: Clock,
      points: [
        t('reliability.point1'),
        t('reliability.point2'),
        t('reliability.point3'),
        t('reliability.point4'),
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0,
      x: 100
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const pointVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text">
            <TextAnimate animation="slideLeft" by="character">{t('mainTitle')}</TextAnimate>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        <div className="flex flex-col-reverse lg:flex-row gap-8">
          {/* Cards Grid Section */}
          <motion.div 
            className="lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              {cards.map((card, index) => {
                const IconComponent = card.icon;
                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                  >
                    <Card className="hover:shadow-lg h-[250px] md:h-[300px] transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <motion.div 
                            className=""
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {card.icon === Star && <IconComponent className="size-8 text-purple-600" />}
                            {card.icon === Sparkles && <IconComponent className="size-8 text-orange-600" />}
                            {card.icon === Check && <IconComponent className="size-8 text-emerald-600" />}
                            {card.icon === Clock && <IconComponent className="size-8 text-blue-600" />}
                          </motion.div>
                          <CardTitle className="text-xl font-semibold">
                            {card.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <motion.ul 
                          className="space-y-3"
                          variants={containerVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                          {card.points.map((point, pointIndex) => (
                            <motion.li 
                              key={pointIndex} 
                              className="flex items-start gap-3"
                              variants={pointVariants}
                            >
                              <div className="mt-1">
                                <Check className="w-4 h-4 text-primary" />
                              </div>
                              <span className="text-sm text-muted-foreground">
                                {point}
                              </span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          {/* Image Section */}
          <motion.div 
            className="lg:w-1/2"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative h-96 lg:h-full min-h-[100px]">
              <Image
                src={rtcu}
                alt={t('imageAlt')}
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}