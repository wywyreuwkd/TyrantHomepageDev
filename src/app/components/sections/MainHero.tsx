"use client"

import { ChevronDown } from "lucide-react";
import { useState, useEffect, useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { StaticImageData } from "next/image";
import heroImage1 from "@public/main/64089da30d668231245090c701a14f28d2e1ff7b.png";
import heroImage2 from "@public/main/ef16925f1a63edb413aec2a2e20dfdb248f86801.png";
import heroImage3 from "@public/main/451a0639c29ea9bee729517ab77b0b9a67346b5e.png";
import heroImage4 from "@public/main/f0157377e18b2084eff56187b8b551fd2ffc4456.png";

// 슬라이드 타입 정의
interface HeroSlide {
  image: StaticImageData;
  subtitle: ReactNode;
  englishSubtitle: ReactNode;
}

// 슬라이드별 콘텐츠
const heroSlides: HeroSlide[] = [
  { 
    image: heroImage1,
    subtitle: (<>혁신적이고 지속 가능한 에너지로<br />깨끗한 미래를 만들어갑니다</>),
    englishSubtitle: (
      <>
        <span className="text-white">H</span>arnessing{' '}
        <span className="text-white">I</span>nnovative and{' '}
        <span className="text-white">S</span>ustainable{' '}
        <span className="text-white">E</span>nergy<br />for{' '}
        <span className="text-white">C</span>lean{' '}
        <span className="text-white">F</span>utures
      </>
    )
  },
  { 
    image: heroImage2,
    subtitle: (<>태양광 발전의 새로운 기준을<br />제시합니다</>),
    englishSubtitle: (
      <>
        <span className="text-white">S</span>etting{' '}
        <span className="text-white">N</span>ew{' '}
        <span className="text-white">S</span>tandards<br />in{' '}
        <span className="text-white">S</span>olar{' '}
        <span className="text-white">P</span>ower{' '}
        <span className="text-white">G</span>eneration
      </>
    )
  },
  { 
    image: heroImage3,
    subtitle: (<>고객과 함께 성장하는<br />수익공유형 태양광 솔루션</>),
    englishSubtitle: (
      <>
        <span className="text-white">P</span>rofit-<span className="text-white">S</span>haring{' '}
        <span className="text-white">S</span>olar{' '}
        <span className="text-white">S</span>olutions<br />
        <span className="text-white">G</span>rowing{' '}
        <span className="text-white">T</span>ogether with{' '}
        <span className="text-white">C</span>lients
      </>
    )
  },
  { 
    image: heroImage4,
    subtitle: (<>탄소중립 사회 실현에<br />기여하는 에너지 파트너</>),
    englishSubtitle: (
      <>
        <span className="text-white">E</span>nergy{' '}
        <span className="text-white">P</span>artner<br />
        <span className="text-white">C</span>ontributing to{' '}
        <span className="text-white">C</span>arbon{' '}
        <span className="text-white">N</span>eutrality
      </>
    )
  }
];

export function MainHero() {
	const [currentSlide, setCurrentSlide] = useState(0);
  	const heroRef = useRef<HTMLElement>(null);
  
  	// 스크롤 애니메이션 설정
  	const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  
  	// 부드러운 스크롤 패럴랙스
  	const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  	const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  	const contentScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  	// 자동 슬라이드 전환 (6초마다)
  	useEffect(() => {
    	const timer = setInterval(() => {
      		setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    	}, 6000);

    	return () => clearInterval(timer);
	}, []);

  	return (
    	<section ref={heroRef} className="relative w-full overflow-hidden h-screen min-h-[600px] m-0 p-0">
      		{/* 배경 이미지 슬라이드 - Ken Burns 효과 */}
      		<AnimatePresence mode="sync">
        		<motion.div
          			key={currentSlide}
          			initial={{ opacity: 0, scale: 1 }}
          			animate={{ opacity: 1, scale: 1.1 }}
          			exit={{ opacity: 0, scale: 1.05 }}
          			transition={{ opacity: { duration: 1.5, ease: "easeInOut" }, scale: { duration: 6, ease: "linear" }}}
          			className="absolute h-[120%] w-full"
          			style={{ y: backgroundY }} >
          			
          			<div className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full" style={{ backgroundImage: `url(${heroSlides[currentSlide].image.src})` }} />
          
          			{/* 강화된 다층 오버레이 */}
          			<div className="absolute inset-0 bg-gradient-to-r from-[rgba(14,28,69,0.85)] via-[rgba(14,28,69,0.6)] to-[rgba(14,28,69,0.3)]" />
          			{/* 하단 강한 그라데이션 - 네이비 색상 */}
          			<div className="absolute inset-0 bg-[linear-gradient(to_bottom,_transparent_0%,_transparent_50%,_rgba(14,28,69,0.3)_70%,_rgba(14,28,69,0.8)_90%,_rgba(15,33,74,1)_100%)]" />
        		</motion.div>
      		</AnimatePresence>

      		{/* 텍스트 콘텐츠 - 좌측 중앙 배치 */}
      		<div className="absolute inset-0 flex items-center">
        		<div className="mx-auto px-10 w-full max-w-[1200px]">
          			<motion.div className="z-10 space-y-0 w-full" style={{ opacity: contentOpacity, scale: contentScale }}>
            			
            			{/* 메인 타이틀 - Staggered 애니메이션 */}
            			{/* <motion.h1 
              				key={`title-${currentSlide}`}
              				initial={{ opacity: 0, y: 30 }}
              				animate={{ opacity: 1, y: 0 }}
              				transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              				className="text-white text-6xl md:text-[96px] font-sans font-bold tracking[-0.03em] leading-[1.1] text-shadow[0_4px_20px_rgba(0,0,0,0.3)]" >
              				TYRANT
            			</motion.h1> */}
									<h1 className="text-white text-6xl md:text-[96px] font-sans font-bold tracking[-0.03em] leading-[1.1] text-shadow[0_4px_20px_rgba(0,0,0,0.3)]" >
									    TYRANT
									</h1>
            
            			{/* 한글 서브타이틀 - 슬라이드별 텍스트 */}
            			<AnimatePresence mode="wait">
              				<motion.p 
                				key={`korean-${currentSlide}`}
                				initial={{ opacity: 0, y: 30 }}
                				animate={{ opacity: 1, y: 0 }}
                				exit={{ opacity: 0, y: -20 }}
                				transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                				className="text-white text-xl md:text-[40px] mt-4 md:mt-6 font-sans font-medium tracking-[0.01em] leading-[1.4] [text-shadow:0_2px_15px_rgba(0,0,0,0.3)]">
                				{heroSlides[currentSlide].subtitle}
              				</motion.p>
            			</AnimatePresence>
            
            			{/* 영문 서브타이틀 - 슬라이드별 텍스트 */}
            			<AnimatePresence mode="wait">
              				<motion.p 
                				key={`english-${currentSlide}`}
                				initial={{ opacity: 0, y: 30 }}
                				animate={{ opacity: 1, y: 0 }}
                				exit={{ opacity: 0, y: -20 }}
                				transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                				className="text-sm md:text-2xl mt-2 md:mt-3 font-sans font-normal tracking-[0.02em] leading-[1.4] text-[rgba(255,255,255,0.6)] [text-shadow:0_2px_10px_rgba(0,0,0,0.2)]">
                				{heroSlides[currentSlide].englishSubtitle}
              				</motion.p>
            			</AnimatePresence>
          			</motion.div>
        		</div>
      		</div>

      		{/* 슬라이드 인디케이터 - 하단 좌측 */}
      		<div className="absolute bottom-8 md:bottom-12 left-0 right-0 z-20">
        		<div className="mx-auto px-4 md:px-10 max-w">
          			<motion.div style={{ opacity: contentOpacity }} className="flex gap-2 md:gap-3 justify-start">
            			{heroSlides.map((_, index) => (
              				<button
                				key={index}
                				onClick={() => setCurrentSlide(index)}
                				className="group relative"
                				aria-label={`슬라이드 ${index + 1}`}>
                
                				{/* 프로그레스 바 배경 */}
                				<div className="h-1 w-8 md:w-12 bg-white/20 rounded-full overflow-hidden">
                  					{/* 활성 프로그레스 */}
                  					<motion.div
                    					className="h-full bg-white rounded-full"
                    					initial={{ width: '0%' }}
                    					animate={{ width: index === currentSlide ? '100%' : '0%', opacity: index === currentSlide ? 1 : 0.4 }}
                    					transition={{ width: { duration: index === currentSlide ? 6 : 0.3, ease: "linear" }, opacity: { duration: 0.3 }}}/>
                				</div>
              				</button>
            			))}
          			</motion.div>
        		</div>
      		</div>

      		{/* 스크롤 인디케이터 - 하단 중앙 - 모바일에서 숨김 */}
      		<motion.div 
        		className="hidden md:flex absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
        		style={{ opacity: contentOpacity }}
        		animate={{ y: [0, 10, 0] }}
        		transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
        		
        		<div className="flex flex-col items-center gap-2">
          			<div className="text-white/60 text-sm font-[Pretendard]">
            			Scroll
          			</div>
          			<ChevronDown className="w-5 h-5 text-white/60" />
        		</div>
      		</motion.div>
    	</section>
	);
}