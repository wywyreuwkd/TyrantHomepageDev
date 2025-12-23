"use client"

import { AnimatePresence, motion } from 'framer-motion';
import { ImageWithFallback } from "@components/shared/ImageWithFallback";

interface LogoItemProps {
  src: string;
  alt: string;
  delay?: number;
  height?: string;
}

export function LogoItem({ src, alt, delay = 0, height = '70px' }: LogoItemProps) {
  return (
    <motion.div className="bg-[#FFFFFF] border border-[#E6EBF2] rounded-[1rem] p-[1.75rem] flex items-center justify-center min-h-[8.75rem] transition-all duration-300 ease-out cursor-pointer"      
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1,
        y: 0,
        transition: { 
          duration: 0.6, 
          delay: delay,
          ease: "easeOut"
        }
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        borderColor: '#273b82',
        transition: { duration: 0.3, ease: "easeOut" }
      }}>
      <ImageWithFallback
        src={src}
        alt={alt}
        className="w-auto object-contain max-h-[${height / 16}rem] max-w-full"/>
    </motion.div>
  );
}

interface PartnerGroupProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function PartnerGroup({ title, description, children }: PartnerGroupProps) {
  return (
    <motion.div 
      className="mb-[180px] last:mb-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
      }}
      viewport={{ once: true, margin: "-80px" }}>
      <h3 
        className="mb-4 font-sans text-5xl font-bold text-[#0B1F3B]">
        {title}
      </h3>
      <p 
        className="mb-8 font-['Pretendard',_-apple-system,_-bold_'Noto_Sans_KR',_sans-serif] text-[1.125rem] font-normal text-[#6B778C] leading-[1.6]">
        {description}
      </p>
      {/* Divider Line */}
      <div 
        className="mb-16 w-full h-[0.0625rem] bg-[#E6EBF2]"/>
      {children}
    </motion.div>
  );
}