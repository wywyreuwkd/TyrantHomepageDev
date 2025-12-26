"use client"

import { AnimatePresence, motion } from 'framer-motion';
import { StaticImageData } from 'next/image';
import { ImageWithFallback } from "@components/shared/ImageWithFallback";

interface HeroSectionProps {
  badge: string;
  title: React.ReactNode;
  description: React.ReactNode;
  backgroundImage: StaticImageData;
}

// 이미지 애니메이션
const fadeInUpImage = {
  initial: { scale: 1.08 },
  animate: { scale: 1.0 },
  transition: { duration: 3.5, ease: [0.16, 1, 0.3, 1] }
};
// 블러 애니메이션
const fadeInUpBlur = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1.2, delay: 0.2 }
};
// 텍스트 애니메이션
const fadeInUpText = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: 0.7 }
};

export function HeroSectionFeat({ badge, title, description, backgroundImage }: HeroSectionProps) {
  return (    
    <section className="relative bg-gradient-primary color-white overflow-hidden max-h-[412px] md:max-h-[503px]">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>      
      
      <AnimatePresence mode="wait">       
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 3.5, ease: [0.16, 1, 0.3, 1] }}                 
          className="relative overflow-hidden company-detail-bg h-[37.5rem] bg-cover bg-[center_60%] bg-no-repeat"
          style={{ 
            backgroundImage: `url(${backgroundImage.src})`
          }}>      

          {/* Dark Overlay */}
          <motion.div className="absolute inset-0"
            {...fadeInUpBlur}    
            style={{
              background: `linear-gradient(135deg, rgba(11, 28, 68, 0.72) 0%, rgba(14, 28, 69, 0.80) 100%)`,
            }}>
          </motion.div>

          <div className="relative mx-auto px-6 md:px-10 py-20 md:py-32 max-w">
            <motion.div 
              {...fadeInUpText}
              className="max-w-4xl">
              <div className="inline-block px-4 py-2 bg-accent-20 border-accent-30 mb-6 rounded-full">
                <span className="color-accent text-sm font-semibold">
                  {badge}
                </span>
              </div>
              <h1 className="text-[clamp(32px,5vw,56px)] font-bold leading-[130%] mb-6">
                {title}
              </h1>
              <p className="text-lg md:text-xl color-white-90 leading-[170%] mb-8">
                {description}
              </p>
            </motion.div>
          </div>        
          
          {/* Content Container */}
          <div className="relative z-10 mx-auto px-6 md:px-10 py-16 md:py-24 max-w">
            {/* Empty - Content will be added below */}
          </div>   

        </motion.div>          
      </AnimatePresence>                              
    </section>    
  );
}



        