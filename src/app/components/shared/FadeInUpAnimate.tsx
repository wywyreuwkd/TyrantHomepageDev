"use client"

import { AnimatePresence, motion } from 'framer-motion';

interface FadeInUpAnimateProps {
  contents: React.ReactNode;
  type: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export function FadeInUpAnimate({ contents }: FadeInUpAnimateProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        {...fadeInUp}>
        { contents }
      </motion.div>
    </AnimatePresence>
  );   
}