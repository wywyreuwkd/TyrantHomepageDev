"use client"

import heroBackground from "@public/company/history/0332e5bfb49c6598167bf95726765eaa4d563113.png";
import image2020 from "@public/company/history/b37fc2d1159fd7ab83df2ed7521960f3dfc6d81e.png";
import image2010 from "@public/company/history/e604a09ecbafa53331abdaa0b8f5547debb6c4ac.png";
import image2000 from "@public/company/history/3822d0b89171c27adf03fb26c67ef44cfa42ce45.png";
import image1990 from "@public/company/history/86564f835a22586194816d8cdc93741a9f8fdf72.png";
import { useRef, useEffect, useState } from "react";
import { ImageWithFallback } from "@components/shared/ImageWithFallback";

interface YearPeriod {
  id: string;
  label: string;
  image: string;
  items: {
    date: string;
    title: string;
    description: string;
  }[];
}

export function SetCompanyHistory() {
  const [activeSection, setActiveSection] = useState('2020-ongoing');
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeItems, setActiveItems] = useState<Set<string>>(new Set());
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const [visibleImages, setVisibleImages] = useState<Set<string>>(new Set());
  const [mobileScrollProgress, setMobileScrollProgress] = useState(0);
  const sectionsRef = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const itemsRef = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const imagesRef = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const contentRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const imageObserverRef = useRef<IntersectionObserver | null>(null);

  const periods: YearPeriod[] = [
    {
      id: '2020-ongoing',
      label: '2020 – Ongoing',
      image: image2020,
      items: [
        {
          date: '2024.11',
          title: '태양광 발전 전주기 통합 서비스 고도화',
          description: '지속 가능한 에너지 비즈니스 모델을 확립하고, 태양광 발전 전 과정에 대한 통합 관리 시스템을 구축하였습니다.'
        },
        {
          date: '2023.08',
          title: '신재생에너지 종합 솔루션 기업으로 도약',
          description: '대형 프로젝트 수주 및 사업 영역을 확장하며, 국내 신재생에너지 시장을 선도하는 종합 솔루션 기업으로 성장했습니다.'
        },
        {
          date: '2022.05',
          title: '태양광 발전 사업 고도화',
          description: '디지털 관리 체계 도입 및 운영 효율화를 통해 발전소 운영의 체계적 관리와 수익성 극대화를 실현했습니다.'
        },
        {
          date: '2021.03',
          title: '재생에너지 통합 솔루션 사업 강화',
          description: '협력 네트워크 확대 및 사업 다각화를 통해 고객 맞춤형 토털 에너지 솔루션을 제공하기 시작했습니다.'
        },
        {
          date: '2020.07',
          title: '태양광 발전 사업 누적 성과 달성',
          description: '전 과정 표준화 체계를 확립하고, 안정적인 발전소 운영 노하우를 축적했습니다.'
        }
      ]
    },
    {
      id: '2010-2019',
      label: '2010 – 2019',
      image: image2010,
      items: [
        {
          date: '2019.10',
          title: '전국 단위 태양광 발전 사업 확장',
          description: '운영 효율 고도화 및 지역별 사업 확대를 통해 전국 규모의 발전 사업 네트워크를 구축했습니다.'
        },
        {
          date: '2018.06',
          title: '투자 유치 및 사업 안정화',
          description: '발전소 누적 운영 용량을 확대하고, 안정적인 수익 구조를 확보했습니다.'
        },
        {
          date: '2017.09',
          title: '법인 전환 및 조직 개편',
          description: '태양광 발전 전문 기업으로 사업 영역을 확장하며 조직을 체계화했습니다.'
        },
        {
          date: '2016.04',
          title: '중·대형 태양광 발전 사업 진출',
          description: '개발·시공·운영 통합 프로세스를 구축하고 본격적인 사업 성장 기반을 마련했습니다.'
        },
        {
          date: '2015.12',
          title: '태양광 발전 사업 포트폴리오 확대',
          description: '운영 데이터 기반 관리 시스템을 도입하여 사업 경쟁력을 강화했습니다.'
        },
        {
          date: '2014.07',
          title: '소규모 태양광 발전 프로젝트 착공',
          description: '운영 및 유지관리 체계를 수립하며 실질적인 사업 경험을 축적했습니다.'
        },
        {
          date: '2013.03',
          title: '태양광 발전소 프로젝트 기획',
          description: '사업 구조 및 금융 모델을 설계하며 본격적인 사업 진출을 준비했습니다.'
        },
        {
          date: '2012.11',
          title: '태양광 발전 사업 초기 모델 구축',
          description: 'EPC 사업 조사 및 기술 검토를 통해 사업 타당성을 확보했습니다.'
        },
        {
          date: '2010.05',
          title: '신재생에너지 사업 진출',
          description: '태양광 발전 시장 분석 및 사업 계획 수립을 진행했습니다.'
        }
      ]
    },
    {
      id: '2000-2009',
      label: '2000 – 2009',
      image: image2000,
      items: [
        {
          date: '2009.08',
          title: '신재생에너지 시장 분석',
          description: '태양광 발전 산업 진출을 준비하며 시장 조사와 기술 분석을 진행했습니다.'
        },
        {
          date: '2007.04',
          title: '에너지 사업 초기 연구 착수',
          description: '국내외 신재생에너지 동향을 분석하고 사업 기회를 모색했습니다.'
        },
        {
          date: '2005.10',
          title: '사업 기반 구축',
          description: '에너지 사업 진출을 위한 기초 역량을 확보하고 전문 인력을 양성했습니다.'
        },
        {
          date: '2003.06',
          title: '에너지 산업 진출 기획',
          description: '미래 성장 동력으로서 에너지 산업 진출 전략을 수립했습니다.'
        },
        {
          date: '2000.02',
          title: '사업 다각화 추진',
          description: '신성장 동력 발굴을 위한 전략적 사업 검토를 시작했습니다.'
        }
      ]
    },
    {
      id: '1990-1999',
      label: '1990 – 1999',
      image: image1990,
      items: [
        {
          date: '1998.09',
          title: '사업 구상 단계',
          description: '에너지 산업 진출 기회를 탐색하고 중장기 비전을 수립했습니다.'
        },
        {
          date: '1995.05',
          title: '초기 사업 기획',
          description: '미래 에너지 사업 방향을 설정하고 핵심 역량을 개발했습니다.'
        },
        {
          date: '1992.11',
          title: '기업 기반 조성',
          description: '사업 추진을 위한 조직 체계를 구축하고 전문성을 강화했습니다.'
        },
        {
          date: '1990.03',
          title: '창립 정신 수립',
          description: '지속 가능한 발전을 향한 기업 비전과 핵심 가치를 정립했습니다.'
        }
      ]
    }
  ];

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let currentSection = periods[0].id;
      let currentIdx = 0;
      const newActiveItems = new Set<string>();

      periods.forEach((period, index) => {
        const element = sectionsRef.current[period.id];
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            currentSection = period.id;
            currentIdx = index;
          }
        }
        
        // Check each item
        period.items.forEach((item, itemIdx) => {
          const itemKey = `${period.id}-${itemIdx}`;
          const itemElement = itemsRef.current[itemKey];
          if (itemElement) {
            const itemTop = itemElement.offsetTop;
            const itemBottom = itemTop + itemElement.offsetHeight;
            
            if (scrollPosition >= itemTop && scrollPosition < itemBottom) {
              newActiveItems.add(itemKey);
            }
          }
        });
      });

      setActiveSection(currentSection);
      setActiveIndex(currentIdx);
      setActiveItems(newActiveItems);
      
      // Calculate scroll progress for timeline
      const firstElement = sectionsRef.current[periods[0].id];
      const lastElement = sectionsRef.current[periods[periods.length - 1].id];
      
      if (firstElement && lastElement) {
        const contentStart = firstElement.offsetTop;
        const contentEnd = lastElement.offsetTop + lastElement.offsetHeight;
        const contentHeight = contentEnd - contentStart;
        const scrolled = Math.max(0, scrollPosition - contentStart);
        const progress = Math.min(100, (scrolled / contentHeight) * 100);
        setScrollProgress(progress);
        
        // Mobile scroll progress (for left bar)
        if (window.innerWidth < 1024) {
          setMobileScrollProgress(progress);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Add a small delay to ensure refs are set
    setTimeout(handleScroll, 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [periods]);

  // Intersection Observer for fade-in animation on mobile
  useEffect(() => {
    if (window.innerWidth >= 1024) return; // Only for mobile
    
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemKey = entry.target.getAttribute('data-item-key');
            if (itemKey) {
              setVisibleItems((prev) => new Set([...prev, itemKey]));
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-50px 0px'
      }
    );

    // Observe all items
    Object.entries(itemsRef.current).forEach(([key, element]) => {
      if (element) {
        element.setAttribute('data-item-key', key);
        observerRef.current?.observe(element);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  // Intersection Observer for image fade-in animation on mobile
  useEffect(() => {
    if (window.innerWidth >= 1024) return; // Only for mobile
    
    imageObserverRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const imageKey = entry.target.getAttribute('data-image-key');
            if (imageKey) {
              setVisibleImages((prev) => new Set([...prev, imageKey]));
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    // Small delay to ensure refs are set
    const timer = setTimeout(() => {
      Object.entries(imagesRef.current).forEach(([key, element]) => {
        if (element && imageObserverRef.current) {
          element.setAttribute('data-image-key', key);
          imageObserverRef.current.observe(element);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      imageObserverRef.current?.disconnect();
    };
  }, [periods]);

  const scrollToSection = (id: string, index: number) => {
    const element = sectionsRef.current[id];
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (      
    <section className="relative bg-white py-12 md:py-24">
      <div className="max-w mx-auto px-4 md:px-6 lg:px-10 pl-8 lg:pl-0">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-24">
          {/* Left - Year Navigation Frame (Sticky) - Hidden on Mobile */}
          <aside className="hidden lg:block flex-shrink-0 w-[26.25rem]">
            <div className="sticky top-32">
              <nav>
                <ul className="space-y-10">
                  {periods.map((period, index) => (
                    <li key={period.id}>
                      <button
                        onClick={() => scrollToSection(period.id, index)}
                        className="text-left transition-all duration-500 block cursor-pointer whitespace-nowrap leading-[1.2] tracking-[-0.02em] font-bold font-['Pretendard',-apple-system,'Noto_Sans_KR',sans-serif] text-[4rem]"
                        style={{ color: activeSection === period.id ? '#273B82' : '#E5E7EB' }}>
                        {period.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Center - Timeline Frame - Smaller on Mobile */}
          <div 
            className="hidden lg:block flex-shrink-0 relative w-12 self-stretch"  
            ref={timelineRef}>
            {/* Base Line - Full Height */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[0.125rem] bg-gray-200"/>
              
            {/* Active Line - Progressive Fill */}
            <div 
              className="absolute left-1/2 -translate-x-1/2 top-0 transition-all duration-500 ease-out w-[0.125rem] bg-[#273B82]"
              style={{ height: `${scrollProgress}%` }}/>
              
            {/* Timeline Dots - Positioned for section titles only */}
            {periods.map((period) => {
              const sectionElement = sectionsRef.current[period.id];
              const timelineElement = timelineRef.current;
                
              if (!sectionElement || !timelineElement) return null;
                
              // Use offsetTop directly for accurate positioning
              const sectionTop = sectionElement.offsetTop;
              const timelineTop = timelineElement.offsetTop;
              const relativeTop = sectionTop - timelineTop;
                
              // Check if this section is active
              const isActive = activeSection === period.id;
                
              return (
                <div
                  key={period.id}
                  className="absolute left-1/2 -translate-x-1/2 transition-all duration-500"
                  style={{ top: `${relativeTop}px` }}>
                  {/* Background Circle - Only visible when active */}
                  {isActive && (
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 w-[2.5rem] h-[2.5rem] rounded-full bg-[#273b82]/10"/>
                  )}
                    
                  {/* Center Dot */}
                  <div
                    className="relative transition-all duration-500 w-2.5 h-2.5 rounded-full bg-[#273B82]"
                    style={{ boxShadow: isActive ? '0 0 0 3px #FFFFFF, 0 2px 8px rgba(39, 59, 130, 0.3)' : 'none' }}/>
                </div>
              );
            })}
          </div>

          {/* Right - Content Column */}
          <div className="flex-1 w-full" style={{ minWidth: 0 }}>
            <div className="space-y-16 md:space-y-40" ref={contentRef}>
              {periods.map((period) => (
                <article
                  key={period.id} 
                  id={period.id}
                  ref={(el) => sectionsRef.current[period.id] = el}
                  className="scroll-mt-24">
                  {/* Section Title at Top */}
                  <h2 
                    className="font-['Pretendard,_-apple-system,_'Noto_Sans_KR',_sans-serif'] text-[2.25rem] md:text-[4rem] font-bold text-[#273B82] leading-[1.2] tracking-[-0.02em] mb-6 md:mb-12">
                    {period.label}
                  </h2>

                  {/* Section Image - Full Width on Mobile */}
                  <div 
                    ref={(el) => imagesRef.current[period.id] = el}
                    className="overflow-hidden mb-8 md:mb-16 transition-all duration-1000 ease-out aspect-[2.5/1] rounded-none relative w-full transition-all duration-500 md:w-[75%] lg:opacity-100 lg:translate-y-0 lg:scale-100">

                    <ImageWithFallback 
                      src={period.image.src} 
                      alt={period.label}
                      className="w-full object-cover brightness-100"/>
                  </div>                  
                  
                  {/* Content Items - Full Width on Mobile */}
                  <div className="space-y-8 md:space-y-14 w-full md:w-[75%]">
                    {period.items.map((item, index) => {
                      const itemKey = `${period.id}-${index}`;
                        
                      return (
                        <div 
                          key={index} 
                          ref={(el) => itemsRef.current[itemKey] = el}
                          className="transition-all duration-700 ease-out transition-all duration-500 ${ isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[1.875rem]'}">
                          {/* Date */}
                          <div 
                            className="mb-2 md:mb-3 font-['Pretendard',_-apple-system,_-'Noto_Sans_KR',_sans-serif] text-base md:text-2xl font-normal text-[#9CA3AF] tracking-[-0.02em] leading-[1.1]">
                            {item.date}
                          </div>
                            
                          {/* Title */}
                          <h3 
                            className="mb-1 md:mb-2 font-['Pretendard',_-apple-system,_'Noto_Sans_KR',_sans-serif] text-[1.125rem] md:text-[1.5rem] font-semibold text-[#0F214A] leading-[1.4] tracking-[-0.01em]">
                            {item.title}
                          </h3>
                            
                          {/* Description */}
                          <p className="font-['Pretendard,_-apple-system,_'Noto_Sans_KR',_sans-serif'] text-[0.875rem] md:text-[1.125rem] font-normal text-[#6B7280] leading-[1.6]">                              
                            {item.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}