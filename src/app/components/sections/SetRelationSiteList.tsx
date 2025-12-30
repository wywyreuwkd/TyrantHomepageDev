"use client"

// 로고 이미지 import
import logo1 from "@public/customercenter/relationsite/b825d8ef393a82f71379d8e79fdeee451fde486e.png";
import logo2 from "@public/customercenter/relationsite/bd65a418babab21ddd4adb7ce1304997c0e05e52.png";
import logo3 from "@public/customercenter/relationsite/63e01f646bfda8dfddd9eaa6af5a78efad522080.png";
import logo4 from "@public/customercenter/relationsite/c8049fd103f3025c80e6b2208c0f0629e9928b43.png";
import logo5 from "@public/customercenter/relationsite/a546c27716a6b0420fa3ff9a90f1e3b0ca150b93.png";
import logo6 from "@public/customercenter/relationsite/4f5a888de29f866899568255989e55fb5d19ecbf.png";
import logo7 from "@public/customercenter/relationsite/b45809c9a9fe4c966e19575addc9c99ec8203374.png";
import logo8 from "@public/customercenter/relationsite/336a78d8adfa43f2e6b43a58db15b088289a8c48.png";
import { motion, AnimatePresence } from "framer-motion";
import { ImageWithFallback } from "@components/shared/ImageWithFallback";

const platformData = [
  { 
    name: "신재생에너지센터", 
    subtitle: "신재생원스톱사업정보통합포털",
    url: "https://onerec.kmos.kr",
    logo: logo1
  },
  { 
    name: "국가법령정보시스템", 
    subtitle: "국가법령정보시스템",
    url: "https://www.law.go.kr",
    logo: logo2
  },
  { 
    name: "전력통계정보시스템", 
    subtitle: "전력통계정보시스템",
    url: "https://epsis.kpx.or.kr",
    logo: logo3
  },
  { 
    name: "대법원 인터넷등기소", 
    subtitle: "대법원 인터넷등기소",
    url: "https://www.iros.go.kr/",
    logo: logo4
  },
  { 
    name: "토지이음", 
    subtitle: "토지이음",
    url: "https://www.eum.go.kr",
    logo: logo5
  },
  { 
    name: "브이월드", 
    subtitle: "브이월드(V-World)",
    url: "https://www.vworld.kr",
    logo: logo6
  },
  { 
    name: "디스코 부동산", 
    subtitle: "디스코 부동산",
    url: "https://www.disco.re/",
    logo: logo7
  },
  { 
    name: "재생에너지 클라우드 플랫폼", 
    subtitle: "재생에너지 클라우드 플랫폼",
    url: "https://recloud.energy.or.kr",
    logo: logo8
  }
];

export function SetRelationSiteList() {
	return(		
      <section className="bg-white py-[120px]">
        <div className="mx-auto px-6 md:px-10 max-w">
          
          {/* Top Content - Title & Description */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}            
            className="top-content-grid grid grid-cols-[1fr_2fr] gap-[5rem] mb-[80px] pb-[80px] border-b border-gray-200"
          >
            {/* Left - Title */}
            <div>
              <h2 className="font-['Pretendard',_-apple-system,'Noto_Sans_KR',sans-serif] text-[clamp(32px,_5vw,_48px)] font-bold color-primary-dark-3 leading-[1.2] text-left">
                태양광 사업<br className="desktop-only-br" />정보 사이트
              </h2>
            </div>
            
            {/* Right - Description */}
            <div>
              <p className="font-['Pretendard',_-apple-system,'Noto_Sans_KR',sans-serif] text-lg text-[#4B5563] leading-[1.7] text-left">
                타이런트는 분산된 공공·전문 데이터를 구조화하여 태양광 사업의 방향과 의사결정을 명확하게 만듭니다. 발전, 인허가, 전력계통, 부지 등 복잡한 사업 환경 속에서 신뢰할 수 있는 기준과 판단 근거를 제공합니다. 관련 정보를 한눈에 확인할 수 있도록 주요 사이트를 분야별로 정리했습니다.
              </p>
            </div>
          </motion.div>

          {/* Platform Grid - 3x3 */}
          <div className="platform-grid grid grid-cols-3 gap-0 border-t border-l border-gray-200">
            {platformData.map((platform, index) => {
              const IconComponent = platform.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.08,
                    ease: "easeOut" 
                  }}
                  className="platform-card p-[48px_32px] border-r border-b border-gray-200 flex flex-col items-center text-center min-h-[280px] bg-white transition-all duration-300 ease-in-out"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#F9FAFB';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#FFFFFF';
                  }}
                >
                  {/* Icon */}
                  <motion.a
                    className="w-[160px] h-[80px] mb-[24px] flex items-center justify-center border border-gray-200 rounded-[16px] p-[12px] cursor-pointer no-underline"
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"                    
                    whileHover={{
                      scale: 1.05,
                      y: -4,
                      borderColor: '#D1D5DB',
                      boxShadow: '0 8px 24px rgba(14, 28, 69, 0.12)',
                      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                  >
                    {platform.logo ? (
                      <ImageWithFallback 
                        className="w-full h-full object-contain pointer-events-none"
                        src={platform.logo.src} 
                        alt={platform.name} />
                    ) : (
                      <IconComponent 
                        className="color-accent stroke-[1.5px]"
                        size={40} />
                    )}
                  </motion.a>

                  {/* Title */}
                  <h3 className="font-[Pretendard, -apple-system, 'Noto Sans KR', sans-serif] text-lg font-bold color-primary-dark-3 mb-[12px] leading-[1.4]">
                    {platform.name}
                  </h3>

                  {/* Subtitle */}
                  <p className="font-['Pretendard',_-apple-system,_'Noto_Sans_KR',_sans-serif] text-sm text-[#6B7280] mb-[24px] leading-[1.5]">
                    {platform.subtitle}
                  </p>

                  {/* Button - only if URL exists */}
                  {platform.url && (
                    <a
                      className="platform-button w-[36px] h-[36px] rounded-full border border-gray-200 flex items-center justify-center mt-auto transition-all duration-300 ease no-underline"
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"                      
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#0E1C45';
                        e.currentTarget.style.background = '#0E1C45';
                        const icon = e.currentTarget.querySelector('.plus-icon') as HTMLElement;
                        if (icon) icon.style.color = '#FFFFFF';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#E5E7EB';
                        e.currentTarget.style.background = 'transparent';
                        const icon = e.currentTarget.querySelector('.plus-icon') as HTMLElement;
                        if (icon) icon.style.color = '#6B7280';
                      }}
                    >
                      <span className="plus-icon text-xl text-[#6B7280] transition-colors duration-300 ease font-light">
                        +
                      </span>
                    </a>
                  )}
                  
                  {/* Empty space for cards without URL */}
                  {!platform.url && (
                    <div className="mt-auto h-[36px]"></div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
	);
}