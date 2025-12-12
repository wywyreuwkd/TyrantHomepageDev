import { Button } from "./ui/button";
import { ArrowRight, Github } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import bannerImage1 from "figma:asset/74cf3afa41bb41f1df4938acec7434f597ec134f.png";
import bannerImage2 from "figma:asset/21aa87c53bd02a38047b0c82cf3aa0b48a855dfb.png";
import bannerImage3 from "figma:asset/9fe22ff3270d58925c6d3ca570843bfdb7e979d2.png";
import { SolarOLogo } from "./SolarOLogo";

const slides = [
  {
    image: bannerImage1,
  },
  {
    image: bannerImage2,
  },
  {
    image: bannerImage3,
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden" style={{ height: '100vh', margin: 0, padding: 0, top: 0 }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
          style={{ top: 0, left: 0, right: 0, bottom: 0 }}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0"
            style={{ 
              backgroundImage: `url(${slides[currentSlide].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0
            }}
          />
          
          {/* Black Overlay for readability */}
          <div className="absolute inset-0 bg-black/35" style={{ top: 0, left: 0, right: 0, bottom: 0 }} />
        </motion.div>
      </AnimatePresence>

      {/* Content Container */}
      <div className="absolute inset-0 flex items-center" style={{ top: 0, left: 0, right: 0, bottom: 0 }}>
        <div className="mx-auto px-4 sm:px-6 md:px-10 w-full" style={{ maxWidth: '1280px', minWidth: '320px' }}>
          {/* SOLAR O Logo - Left Side */}
          <div className="z-10" style={{ maxWidth: '100%' }}>
            {/* 메인 타이틀 - 84px Bold → 110px */}
            <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 mb-4 sm:mb-6 md:mb-8">
              <span 
                className="text-white drop-shadow-2xl" 
                style={{ 
                  fontSize: 'clamp(52px, 10.5vw, 110px)',
                  fontWeight: '700',
                  fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
                  letterSpacing: '-0.02em',
                  lineHeight: '1.2',
                  whiteSpace: 'nowrap'
                }}
              >
                SOLAR
              </span>
              {/* Donut-shaped O - 30% 증가 */}
              <div 
                className="rounded-full drop-shadow-2xl" 
                style={{ 
                  width: 'clamp(70px, 17vw, 195px)',
                  height: 'clamp(70px, 17vw, 195px)',
                  border: 'clamp(16px, 4.2vw, 50px) solid #FF6A3D',
                  backgroundColor: 'transparent',
                  flexShrink: 0
                }}
              />
            </div>
            
            {/* 서브타이틀과 본문 */}
            <div className="space-y-1.5 sm:space-y-2 md:space-y-3" style={{ maxWidth: '100%' }}>
              {/* 서브 타이틀 - 동일한 크기로 통일 */}
              <p 
                className="text-white drop-shadow-lg" 
                style={{ 
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: 'clamp(26px, 6vw, 42px)',
                  fontWeight: '400',
                  lineHeight: '1.5',
                  wordBreak: 'keep-all',
                  overflowWrap: 'break-word',
                  width: 'auto',
                  letterSpacing: '-0.01em'
                }}
              >
                산업단지/물류센터 수익공유형
              </p>
              {/* 본문 - 동일한 크기로 통일 */}
              <p 
                className="text-white drop-shadow-lg" 
                style={{ 
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: 'clamp(26px, 6vw, 42px)',
                  fontWeight: '400',
                  lineHeight: '1.5',
                  wordBreak: 'keep-all',
                  overflowWrap: 'break-word',
                  width: 'auto'
                }}
              >
                <span style={{ fontWeight: '700' }}>태양광 무상설치</span> 프로젝트 <span style={{ color: '#F15A2A', fontWeight: '700', whiteSpace: 'nowrap' }}>솔라오</span>
              </p>
              
              {/* Start button - 30% 증가 */}
              <div className="mt-4 sm:mt-6 md:mt-8 pt-2 sm:pt-4">
                <button 
                  className="bg-[#FF6B3D] text-white hover:bg-[#e55a35] transition-all hover:scale-105"
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    padding: 'clamp(13px, 2.6vw, 24px) clamp(32px, 6.5vw, 62px)',
                    borderRadius: 'clamp(16px, 2.6vw, 21px)',
                    fontSize: 'clamp(18px, 4vw, 21px)',
                    fontWeight: '700',
                    boxShadow: '0 8px 24px rgba(255, 107, 61, 0.4)'
                  }}
                >
                  시작하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}