import React from 'react';
import { motion } from 'motion/react';
import { HeroSection } from '../components/HeroSection';
import { FeaturesSection } from '../components/FeaturesSection';

export function HomePage() {
  const heroImage = "https://images.unsplash.com/photo-1575496917055-f23c822796eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBjaXR5fGVufDF8fHx8MTc2Nzc3MjM1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  return (
    <motion.main 
      className="flex-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <HeroSection backgroundImage={heroImage} />
      <FeaturesSection />
    </motion.main>
  );
}