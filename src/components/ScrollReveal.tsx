import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
}

export function ScrollReveal({ children, delay = 0 }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.3,
        delay: delay / 1000,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  );
}