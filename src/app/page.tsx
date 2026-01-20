"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '@components/sections/HeroSection';
import { FeaturesSection } from '@components/sections/FeaturesSection';
import heroImage from "@public/hero_image.jpeg";


export default function Main() {

  return (
    <motion.main 
      className="flex-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <HeroSection backgroundImage={heroImage.src} />
      <FeaturesSection />
    </motion.main>
  );
}