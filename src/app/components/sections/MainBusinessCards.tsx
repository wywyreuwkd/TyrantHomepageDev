"use client"

import { ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ImageWithFallback } from "@components/shared/ImageWithFallback";
import developmentImage from "@public/main/d19fcd96ea58aceb88f4f7fe47c7dd9d37f27483.png";
import financialImage from "@public/main/c15c95fa2427b91a91582e6bbac527548ef947f1.png";
import monitoringImage from "@public/main/fb96124e9b8fbd354a0ece709cf8b402f7529fd7.png";

export function MainBusinessCards() {
	const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  	const [isVisible, setIsVisible] = useState(false);
  	const sectionRef = useRef<HTMLElement>(null);

  	useEffect(() => {
    	const observer = new IntersectionObserver(
      		(entries) => {
        		entries.forEach((entry) => {
          			if (entry.isIntersecting) {
            			setIsVisible(true);
          			}
        		});
      		},
      		{ threshold: 0.2 }
    	);

    	if (sectionRef.current) {
    		observer.observe(sectionRef.current);
    	}

    	return () => {
    		if (sectionRef.current) {
        		observer.unobserve(sectionRef.current);
      		}
    	};
  	}, []);

  	const cards = [
   		{
      		id: 1,
      		title: "자금조달",
      		subtitle: "Financial Solution",
      		description: "태양광 발전사업의 구조와 수익성을 고려한\n금융 구조를 설계하고\n사업 단계에 맞는 자금 조달 방안을 검토합니다.",
      		image: financialImage,
      		link: "/business/investment"
    	},
    	{
      		id: 2,
      		title: "사업개발",
      		subtitle: "Development",
      		description: "태양광 발전사업의 초기 기획 단계부터\n부지 검토, 사업성 분석, 인허가 검토까지\n개발 전 과정을 체계적으로 수행합니다.",
      		image: developmentImage,
      		link: "/business/development"
    	},
    	{
      		id: 3,
      		title: "운영관리",
      		subtitle: "Operation & Monitoring",
      		description: "발전소 운영 데이터를 기반으로\n발전 현황을 상시 모니터링하고\n운영 이슈 대응 및 효율 관리를 지원합니다.",
      		image: monitoringImage,
      		link: "/business/monitoring"
    	}
  	];

  	// Calculate flex values based on hover state
  	const getFlexValue = (cardId: number) => {
    	if (hoveredCard === null) return 1; // All equal when none hovered
    	if (hoveredCard === cardId) return 2; // Hovered card expands
    	return 0.7; // Other cards shrink
  	};

  	return (
    	<section ref={sectionRef} className="py-40 bg-primary-dark-1 py-[160px]">      	
      		<div className="mx-auto px-4 md:px-8 max-w">
        		{/* Title Section */}
        		<div className="text-center mb-16 md:mb-20"
          			style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}>
          			
          			<h2 className="text-white mb-4 font-sans font-bold text-[clamp(28px,5vw,48px)] tracking-[-0.5px]">
            			에너지 사업 전반을<span className="hidden md:inline">&nbsp;</span><br className="md:hidden" />아우르는 실행 중심 솔루션
          			</h2>
          			<p className="text-white/70 font-sans font-normal text-[clamp(14px,3vw,18px)]">
            			태양광 발전사업의 기획부터<span className="hidden md:inline">&nbsp;</span><br className="md:hidden" />개발, 운영까지 전 과정을 체계적으로 수행합니다.
          			</p>
        		</div>

        		{/* Cards Container */}
        		<div className="flex flex-col md:flex-row gap-4 md:gap-6">
          			{cards.map((card) => (
            			<div key={card.id} className="relative overflow-hidden group cursor-pointer rounded-[24px] min-h-[400px]"
              				style={{ flex: getFlexValue(card.id), transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)' }} 
              				onMouseEnter={() => setHoveredCard(card.id)} 
              				onMouseLeave={() => setHoveredCard(null)}
              				onClick={() => location.href=(card.link) }>
              				
              				{/* Background Image */}
              				<div className="absolute inset-0">
                				<ImageWithFallback className="w-full h-full object-cover transition-transform duration-700" src={card.image.src} alt={card.title}                 
                  					style={{ transform: hoveredCard === card.id ? 'scale(1.05)' : 'scale(1)' }} />
                				
                				{/* Gradient Overlay */}
                				<div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.85)] via-[rgba(0,0,0,0.4)] to-transparent"
                					 />
              				</div>

              				{/* Content */}
              				<div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                				<div className="text-white/60 mb-2 transition-all duration-500 font-sans font-normal text-[13px] tracking-[0.5px]"
                  					style={{ opacity: hoveredCard === card.id ? 1 : 0.8 }}>
                  					{card.subtitle}
                				</div>
                
                				<h3 className="text-white mb-4 transition-all duration-500 font-sans font-bold tracking-[-0.5px]"
                  					style={{ transform: hoveredCard === card.id ? 'translateY(-5px)' : 'translateY(0)' }}>
                  					{card.title}
                				</h3>

                				{/* Description - Only show on hover */}
                				<p className="text-white/80 mb-6 transition-all duration-500 font-sans font-normal text-[14px] leading-[1.6] max-h-0 overflow-hidden"
                					style={{ opacity: hoveredCard === card.id ? 1 : 0, maxHeight: hoveredCard === card.id ? '100px' : '0' }}>
                  					{card.description}
                				</p>

                				{/* Arrow - Only show on hover */}
                				<div className="flex items-center gap-2 text-white transition-all duration-500"
                  					style={{ opacity: hoveredCard === card.id ? 1 : 0, transform: hoveredCard === card.id ? 'translateX(0)' : 'translateX(-10px)' }}>
                  					<span className="font-sans font-semibold text-[14px] tracking-[0.5px]">
                    					자세히 보기
                  					</span>
                  					<ArrowRight size={18} strokeWidth={2} />
                				</div>
              				</div>
            			</div>
          			))}
        		</div>
      		</div>
    	</section>
  	);
}