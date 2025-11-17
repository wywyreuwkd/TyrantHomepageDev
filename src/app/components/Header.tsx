"use client"

import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Logo } from "./Logo";

const menuData = [
  {
    title: "회사소개",
    items: ["타이런트", "그룹사소개", "연혁", "협력사소개"]
  },
  {
    title: "사업영역",
    items: [
      "태양광 사업성분석(FS)",
      "태양광 개발",
      "태양광 기자재 공급",
      "태양광 시공",
      "태양광 투자",
      "태양광 관리운영(모니터링)",
      "태양광 사무관리(보험)",
      "태양광 기술실사",
      "데이터센터",
      "태양광 교육"
    ]
  },
  {
    title: "태양광상품소개",
    items: [
      "솔라오(지붕)",
      "솔라오(그라운드)",
      "솔라로지스리드(물류창고)",
      "솔라워터(수상)",
      "솔라파킹(주차장)",
      "모니터링",
      "FAQ"
    ]
  },
  {
    title: "태양광실적",
    items: ["지도로보기", "표로보기"]
  },
  {
    title: "사업접수 및 문의",
    items: [
      "태양광 접수",
      "기자재 구매",
      "사업성 분석",
      "기술실사",
      "태양광 교육",
      "기타문의"
    ]
  },
  {
    title: "회원사전용",
    items: [
      "영업사등록",
      "시공사등록",
      "인허가접수 관리시스템",
      "사무공간소개"
    ]
  },
  {
    title: "모니터링",
    items: [
      "발전시간 조회",
      "잔고조회",
      "관리운영 보고서",
      "자금관리 보고서"
    ]
  },
  {
    title: "고객센터",
    items: ["오시는 길", "사이트 맵", "사업관련 사이트"]
  }
];

interface HeaderProps {
  onNavigate: (page: "home" | "company" | "group" | "history" | "partners" | 
    "business-fs" | "business-development" | "business-materials" | 
    "business-construction" | "business-investment" | "business-monitoring" | 
    "business-insurance" | "business-duediligence" | "business-datacenter" | 
    "business-education") => void;
  currentPage: "home" | "company" | "group" | "history" | "partners" | 
    "business-fs" | "business-development" | "business-materials" | 
    "business-construction" | "business-investment" | "business-monitoring" | 
    "business-insurance" | "business-duediligence" | "business-datacenter" | 
    "business-education";
}

export function Header({ onNavigate, currentPage }: HeaderProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate("home");
  };

  const handleMenuClick = (menuTitle: string, item: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    // "회사소개" 메뉴 라우팅
    if (menuTitle === "회사소개" && item === "타이런트") {
      onNavigate("company");
      setHoveredIndex(null);
    } else if (menuTitle === "회사소개" && item === "그룹사소개") {
      onNavigate("group");
      setHoveredIndex(null);
    } else if (menuTitle === "회사소개" && item === "연혁") {
      onNavigate("history");
      setHoveredIndex(null);
    } else if (menuTitle === "회사소개" && item === "협력사소개") {
      onNavigate("partners");
      setHoveredIndex(null);
    }
    // "사업영역" 메뉴 라우팅
    else if (menuTitle === "사업영역" && item === "태양광 사업성분석(FS)") {
      onNavigate("business-fs");
      setHoveredIndex(null);
    } else if (menuTitle === "사업영역" && item === "태양광 개발") {
      onNavigate("business-development");
      setHoveredIndex(null);
    } else if (menuTitle === "사업영역" && item === "태양광 기자재 공급") {
      onNavigate("business-materials");
      setHoveredIndex(null);
    } else if (menuTitle === "사업영역" && item === "태양광 시공") {
      onNavigate("business-construction");
      setHoveredIndex(null);
    } else if (menuTitle === "사업영역" && item === "태양광 투자") {
      onNavigate("business-investment");
      setHoveredIndex(null);
    } else if (menuTitle === "사업영역" && item === "태양광 관리운영(모니터링)") {
      onNavigate("business-monitoring");
      setHoveredIndex(null);
    } else if (menuTitle === "사업영역" && item === "태양광 사무관리(보험)") {
      onNavigate("business-insurance");
      setHoveredIndex(null);
    } else if (menuTitle === "사업영역" && item === "태양광 기술실사") {
      onNavigate("business-duediligence");
      setHoveredIndex(null);
    } else if (menuTitle === "사업영역" && item === "데이터센터") {
      onNavigate("business-datacenter");
      setHoveredIndex(null);
    } else if (menuTitle === "사업영역" && item === "태양광 교육") {
      onNavigate("business-education");
      setHoveredIndex(null);
    } else {
      // 다른 메뉴는 홈으로 이동 (나중에 다른 페이지 추가 가능)
      onNavigate("home");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A2A63] shadow-sm">
      <div className="mx-auto px-4 flex items-center justify-between" style={{ height: '80px', maxWidth: '1600px' }}>
        <div className="flex-shrink-0 cursor-pointer" onClick={handleLogoClick}>
          <Logo />
        </div>

        <nav className="hidden xl:flex items-center gap-3 flex-1 justify-center" style={{ height: '80px' }}>
          {menuData.map((menu, index) => (
            <div
              key={index}
              className="relative h-full flex items-center"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setActiveIndex(index)}
            >
              <a
                href={`#${menu.title}`}
                className="text-white hover:text-[#FF6B2C] transition-colors flex items-center gap-1 relative h-full"
                style={{
                  fontSize: '15px',
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontWeight: activeIndex === index ? '700' : '500',
                  paddingLeft: '8px',
                  paddingRight: '8px',
                  whiteSpace: 'nowrap'
                }}
              >
                {menu.title}
                <ChevronDown size={14} className="transition-transform" style={{ transform: hoveredIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                
                {/* Hover 밑줄 */}
                <span 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF6B2C] transition-opacity mx-2"
                  style={{ borderRadius: '2px', opacity: hoveredIndex === index ? 1 : 0 }}
                />
              </a>

              {/* Dropdown Menu */}
              {hoveredIndex === index && (
                <div
                  className="absolute left-0 bg-[#163A7A]/95 backdrop-blur-sm border border-white/10 min-w-[220px]"
                  style={{
                    top: '100%',
                    borderRadius: '10px',
                    padding: '16px 0',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.18)',
                    marginTop: '0px'
                  }}
                >
                  {menu.items.map((item, itemIndex) => (
                    <a
                      key={itemIndex}
                      href={`#${item}`}
                      onClick={(e) => handleMenuClick(menu.title, item, e)}
                      className="block px-6 text-white hover:text-white hover:bg-[#FF6B2C] transition-all"
                      style={{
                        fontSize: '15px',
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontWeight: '400',
                        whiteSpace: 'nowrap',
                        lineHeight: '44px',
                        paddingLeft: '24px',
                        paddingRight: '24px'
                      }}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            className="bg-[#FF6B2C] hover:bg-[#FF7C40] text-white transition-all hover:scale-105 shadow-md"
            style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontWeight: '600',
              borderRadius: '100px',
              padding: '12px 26px',
              fontSize: '16px'
            }}
          >
            빠른 상담
          </Button>
        </div>
      </div>
    </header>
  );
}