"use client"

import heroImage from "@public/26c883b27afaf68ece7431649a42db515b2d935a.png"
import { useEffect } from "react"
import confetti from "canvas-confetti"
import { ImageWithFallback } from "@/components/shared/ImageWithFallback"

export function HeroSection() {
  useEffect(() => {
    // 페이지 로드 시 폭죽 효과 (데스크톱만)
    // const isMobile = window.innerWidth < 768;
    
    // if (!isMobile) {
    //   const timer = setTimeout(() => {
    //     try {
    //       if (typeof confetti === 'function') {
    //         confetti({
    //           particleCount: 100,
    //           spread: 70,
    //           origin: { y: 0.6 },
    //           colors: ['#1a5dab', '#bb0305', '#FFD700']
    //         });
    //       }
    //     } catch (error) {
    //       console.log('Confetti effect not available');
    //     }
    //   }, 500);

    //   return () => clearTimeout(timer);
    // }

    const timer = setTimeout(() => {
        try {
          if (typeof confetti === "function") {
            confetti({
              particleCount: 100,
              spread: 70,
              origin: { y: 0.6 },
              colors: ["#1a5dab", "#bb0305", "#FFD700"]
            });
          }
        } catch (error) {
          console.log("Confetti effect not available");
        }
      }, 500);

      return () => clearTimeout(timer);


  }, []);

  return (
    <div className="flex justify-center items-center bg-white relative">
      <div className="w-full max-w-[900px] relative px-4 md:px-0">
        <ImageWithFallback src={heroImage.src} alt="장기렌트카 계약 가격비교" className="w-full h-auto" />
      </div>
    </div>
  );
}