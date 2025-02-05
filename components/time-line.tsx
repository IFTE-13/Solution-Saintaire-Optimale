import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface TimelineItemProps {
  imageUrl: string;
  isLeft: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ imageUrl, isLeft }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { once: true, amount: 0.2 });

  return (
    <div ref={itemRef} className="flex justify-center items-center relative h-96">
      <motion.div 
        className={`absolute w-[300px] md:w-[400px] lg:w-[500px] h-60 md:h-72 lg:h-80 
          ${isLeft ? 'left-0 md:left-8 lg:left-12' : 'right-0 md:right-8 lg:right-12'}`}
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="relative w-full h-full overflow-hidden rounded-xl shadow-xl">
          <Image 
            src={imageUrl} 
            alt="Timeline event" 
            className="object-cover transition-transform duration-500 hover:scale-105"
            fill
            sizes="(max-width: 768px) 300px, (max-width: 1024px) 400px, 500px"
            priority
          />
        </div>
      </motion.div>
    </div>
  );
};

interface TimelineImage {
  url: string;
}

const GradientTimeline: React.FC = () => {
  const timelineImages: TimelineImage[] = [
    { url: "/1.jpg" },
    { url: "/2.jpg" },
    { url: "/3.jpg" },
    { url: "/4.jpg" },
    { url: "/5.jpg" },
  ];

  return (
    <div className="hidden md:block">
      <div className="max-w-7xl mx-auto py-16 px-4 relative">
        {/* Gradient Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2">
          <div className="h-full bg-gradient-to-b from-purple-500 via-pink-500 to-red-500" />
        </div>

        {/* Timeline Items */}
        <div className="space-y-32 md:space-y-40 lg:space-y-48">
          {timelineImages.map((image, index) => (
            <TimelineItem 
              key={index}
              imageUrl={image.url}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GradientTimeline;