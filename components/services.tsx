'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import { MagicCard } from './ui/magic-card';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';

interface Project {
  id: string;
  image: string;
}

const projects: Project[] = [
  { id: 'disinfection', image: "/desinfection.jpg" },
  { id: 'cleaning', image: "/cleaning.jpg" },
  { id: 'indoorJanitorial', image: "/IndoorJanitorial.jpg" },
  { id: 'commercialFloor', image: "/CommercialFloorCleaning.jpg" },
  { id: 'outdoorMaintenance', image: "/outdoorbuildingMaintinace.jpg" },
  { id: 'eventSupport', image: "/cleaingsupport.jpg" }
];

const MotionCard = motion(Card);

export function Services() {
  const t = useTranslations('services');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleLearnMore = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  return (
    <section className="bg-[#EAEEFE] py-16 dark:bg-transparent">
        <div className="max-w-[540px] mx-auto mb-10">
            <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold gradient-text">Services</h2>
            <h2 className="text-center text-2xl font-bold text-sky-800"></h2>
        </div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <MotionCard 
              key={project.id}
              onClick={() => handleLearnMore(project)}
              className="border-none hover:shadow-lg transition-shadow duration-300 rounded-xl cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={index}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <MagicCard className="h-full">
                <CardHeader className="space-y-2">
                  <CardTitle className="text-xl font-bold">
                    {t(`${project.id}.title`)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm h-20 text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t(`${project.id}.description`)}
                  </p>
                  <div className="relative w-full h-64 overflow-hidden rounded-xl">
                    <Image
                      src={project.image}
                      alt={t(`${project.id}.title`)}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </CardContent>
              </MagicCard>
            </MotionCard>
          ))}
        </div>
      </div>

      {isModalOpen && selectedProject && (
        <motion.div 
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-white dark:bg-gray-900 p-6 rounded-xl w-full max-w-2xl space-y-6 relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-center">
              {t(`${selectedProject.id}.title`)}
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
              {t(`${selectedProject.id}.moreDescription`)}
            </p>
            <div className="flex justify-end">
              <Button 
                variant="destructive"
                onClick={handleCloseModal}
                className="hover:bg-red-600 transition-colors"
              >
                {t('closeButton')}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}