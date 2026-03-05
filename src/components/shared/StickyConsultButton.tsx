"use client"

import { useState, useEffect } from "react"

interface StickyConsultButtonProps {
  onClick: () => void;
}

export function StickyConsultButton({ onClick }: StickyConsultButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed left-1/2 bottom-0 z-50 transition-all duration-300 -translate-x-1/2 animate-slideUp w-[900px] max-w-full"
    >
      <button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`w-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl py-5 px-20 font-['Pretendard',sans-serif] font-bold text-xl text-white border-0 cursor-pointer flex items-center justify-center gap-3 whitespace-nowrap ${
          isHovered ? 'bg-[#9a0204]' : 'bg-[#bb0305]'
        }`}
      >
        <span>무료 견적상담 신청하기</span>
        <span className="text-2xl font-black">›</span>
      </button>
    </div>
  )
}