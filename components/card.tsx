'use client'
import Image from 'next/image';
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import { StaticImageData } from 'next/image';

interface CardProps {
  i: number;
  title: string;
  description: string;
  src: StaticImageData | string;
  url?: string;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

const Card = ({ i, title, description, src, progress, range, targetScale }: CardProps) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div 
      ref={container} 
      className="min-h-[70vh] flex items-center justify-center sticky top-36 px-4 py-12"
    >
      <motion.div
        style={{
          
          scale,
          top: `calc(-5vh + ${i * 25}px)`
        }}
        className="flex flex-col relative rounded-2xl p-8 md:p-12 w-full container mx-auto shadow-xl bg-white dark:bg-black border"
      >
        
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 h-full">
            <div className='w-full lg:w-2/4 space-y-8 flex flex-col items-center justify-center'>
                <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                    {title}
                </h2>
                <p className="text-sm text-justify">
                    {description}
                </p>
            </div>

          <div className="relative w-full lg:w-3/5 h-[300px] md:h-[400px] lg:h-[500px] 
            rounded-xl overflow-hidden border-4 border-white/10">
            <motion.div
              className="h-full w-full"
              style={{ scale: imageScale }}
            >
              <Image
                src={src}
                alt={`${title} illustration`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;