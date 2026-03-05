"use client"

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled past 50% of page height
      const scrolled = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrolled / pageHeight) * 100;
      
      if (scrollPercentage > 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Mobile version - left side */}
      <button
        onClick={scrollToTop}
        className="md:hidden fixed left-4 bottom-20 z-50 transition-all duration-300 active:scale-95 flex items-center justify-center w-[50px] h-[50px] rounded-full bg-black [box-shadow:0_4px_12px_rgba(0,0,0,0.4)] border-0 cursor-pointer"
      >
        <ArrowUp className="w-6 h-6 text-white" strokeWidth={3} />
      </button>

      {/* Desktop version - right side, independent position */}
      <button
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`hidden md:flex fixed right-8 bottom-[30px] z-50 transition-all duration-300 hover:scale-110 active:scale-95 items-center justify-center w-[68px] h-[68px] rounded-full bg-black border-0 cursor-pointer ${
          isHovered ? '[box-shadow:0_8px_24px_rgba(0,0,0,0.35)]' : '[box-shadow:0_4px_16px_rgba(0,0,0,0.12)]'
        }`}
      >
        <ArrowUp className="w-7 h-7 text-white" strokeWidth={3} />
      </button>
    </>
  );
}