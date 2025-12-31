"use client"

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const menuData = [
  {
    category: "회사소개",
    items: [
      { label: "타이런트", href: "/company" },
      { label: "CI소개", href: "/company/ci" },
      { label: "그룹사소개", href: "/company/group" },
      // { label: "연혁", href: "/company/history" },
      { label: "핵심인력", href: "/company/members" },
      { label: "협력사소개", href: "/company/partners" },
    ],
  },
  {
    category: "사업영역",
    items: [
      { label: "태양광 사업성분석", href: "/business/fs" },
      { label: "태양광 개발", href: "/business/development" },
      { label: "태양광 기자재공급", href: "/business/materials" },
      { label: "태양광 시공", href: "/business/construction" },
      { label: "태양광 투자", href: "/business/investment" },
      { label: "태양광 관리운영", href: "/business/monitoring" },
      { label: "태양광 사무관리", href: "/business/operation" },
      { label: "태양광 기술실사", href: "/business/duediligence" },
      // { label: "데이터센터", href: "/business/datacenter" },
      // { label: "태양광 교육", href: "/business/education" },
    ],
  },
  {
    category: "태양광상품소개",
    items: [
      { label: "솔라오 상품 소개", href: "/products/solaro" },
      { label: "솔라오(지붕)", href: "/products/roof" },
      { label: "솔라오(그라운드)", href: "#" },
      { label: "솔라로지스리드(물류창고)", href: "#" },
      { label: "솔라워터(수상)", href: "#" },
      { label: "솔라파킹(주차장)", href: "#" },
      // { label: "모니터링", href: "#" },
      // { label: "FAQ", href: "#" },
    ]
  },
  {
    category: "태양광실적",
    items: [
      { label: "지도로보기", href: "#" },
      { label: "표로보기", href: "#" },
    ]
  },
  // {
  //   title: "사업접수 및 문의",
  //   items: [
  //     { label: "태양광 접수", href: "#" },
  //     { label: "기자재 구매", href: "#" },
  //     { label: "사업성 분석", href: "#" },
  //     { label: "기술실사", href: "#" },
  //     { label: "태양광 교육", href: "#" },
  //     { label: "기타문의", href: "#" },
  //   ]
  // },
  {
    category: "회원사전용",
    items: [
      { label: "영업사등록", href: "https://project.tyrant.co.kr/register-by-one", external: true },
      { label: "시공사등록", href: "https://project.tyrant.co.kr/register-by-one", external: true },
      { label: "인허가접수 관리시스템", href: "https://project.tyrant.co.kr", external: true },
      // { label: "사무공간소개", href: "#" },
    ]
  },
  // {
  //   title: "모니터링",
  //   items: [
  //     { label: "발전시간 조회", href: "#" },
  //     { label: "잔고조회", href: "#" },
  //     { label: "관리운영 보고서", href: "#" },
  //     { label: "자금관리 보고서", href: "#" },
  //   ]
  // },
  {
    category: "고객센터",
    items: [
      { label: "오시는 길", href: "/customercenter/location" },
      { label: "사이트 맵", href: "/customercenter/sitemap" },
      { label: "사업관련 사이트", href: "/customercenter/relationsite" },
    ]
  }
]

export function GridSiteMapList() {
	return(
		<section className="bg-primary-dark-1 py-[120px]">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* 사이트 구조 그리드 - 4컬럼 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuData.map((section, sectionIndex) => (
            <AnimatePresence key={sectionIndex} mode="wait">
              <motion.div                                              
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: sectionIndex * 0.1,
                  ease: "easeOut" 
                }}                
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                className="group bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[1.25rem] py-[32px] px-[28px] transition-all duration-[400ms] ease-in-out relative overflow-hidden"                
              >
                {/* 상단 오렌지 라인 */}
                <div className="w-[40px] h-[3px] bg-accent rounded-[0.125rem] mb-[20px]" />

                {/* 카테고리 제목 */}
                <h3 className="text-white mb-5 font-['Pretendard',_-apple-system,_'Noto_Sans_KR',_sans-serif] text-2xl font-bold leading-[2rem] tracking-[-0.01em] text-left">
                  {section.category}
                </h3>

                {/* 메뉴 리스트 */}
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={sectionIndex + itemIndex}>
                    	<Link href={item.href}>                    	
                      <button
                        className="w-full text-left group/item font-['Pretendard',_-apple-system,_'Noto_Sans_KR',_sans-serif] text-[1.125rem] font-normal leading-[1rem] text-[rgba(255,255,255,0.7)] bg-none border-none py-[4px] px-0 cursor-pointer transition-all duration-300 ease relative block"                        
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#FF6B3D';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                        }}
                      >
                        {item.label}
                      </button>
                  </Link>
                    </li>
                  ))}
                </ul>

                {/* 배경 그라데이션 효과 */}
                <div className="group-hover:opacity-100 absolute -top-1/2 -right-1/2 w-full h-full bg-[radial-gradient(circle,_rgba(255,107,61,0.03)_0%,_transparent_70%)] pointer-events-none opacity-0 transition-opacity duration-[400ms] ease"/>
              </motion.div>
          </AnimatePresence>
          ))}
        </div>
      </div>
    </section>  
	);
}