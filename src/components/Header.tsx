import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Logo } from "./Logo";

const menuData = [
  {
    title: "회사소개",
    items: ["타이런트", "그룹사 소개", "핵심인력", "미디어", "연혁", "인재채용", "PBA 구단", "협력사 소개"]
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
  onNavigate: (page: "home" | "company" | "group" | "core-team" | "media" | "history" | "recruit" | "pba" | "partners" | 
    "business-fs" | "business-development" | "business-materials" | 
    "business-construction" | "business-investment" | "business-monitoring" | 
    "business-insurance" | "business-duediligence" | "business-datacenter" | 
    "business-education" | "solaro-roof" | "solaro-ground" | "solaro-logistics" | 
    "solaro-water" | "solaro-parking" | "solaro-monitoring" | "solaro-faq" | 
    "performance-map" | "performance-table" | "location" | "sitemap" | "related-sites" |
    "monitoring-generation-time" | "monitoring-balance" | "monitoring-management-report" | 
    "monitoring-financial-report" | "inquiry-solar" | "inquiry-materials" | "inquiry-fs" |
    "inquiry-duediligence" | "inquiry-education" | "inquiry-other" | "member-sales" |
    "member-construction" | "member-permit" | "member-office" | "style-guide") => void;
  currentPage: "home" | "company" | "group" | "core-team" | "media" | "history" | "recruit" | "pba" | "partners" | 
    "business-fs" | "business-development" | "business-materials" | 
    "business-construction" | "business-investment" | "business-monitoring" | 
    "business-insurance" | "business-duediligence" | "business-datacenter" | 
    "business-education" | "solaro-roof" | "solaro-ground" | "solaro-logistics" | 
    "solaro-water" | "solaro-parking" | "solaro-monitoring" | "solaro-faq" | 
    "performance-map" | "performance-table" | "location" | "sitemap" | "related-sites" |
    "monitoring-generation-time" | "monitoring-balance" | "monitoring-management-report" | 
    "monitoring-financial-report" | "inquiry-solar" | "inquiry-materials" | "inquiry-fs" |
    "inquiry-duediligence" | "inquiry-education" | "inquiry-other" | "member-sales" |
    "member-construction" | "member-permit" | "member-office" | "style-guide";
}

export function Header({ onNavigate, currentPage }: HeaderProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(null);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate("home");
  };

  const handleMenuClick = (menuTitle: string, item: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    // onNavigate가 함수인지 확인
    if (typeof onNavigate !== 'function') {
      console.error('onNavigate is not a function', onNavigate);
      return;
    }
    
    // 모바일 메뉴 닫기
    setMobileMenuOpen(false);
    setMobileExpandedIndex(null);
    
    // "회사소개" 메뉴 라우팅
    if (menuTitle === "회사소개" && item === "타이런트") {
      onNavigate("company");
      setHoveredIndex(null);
    } else if (menuTitle === "회사소개" && item === "그룹사 소개") {
      onNavigate("group");
      setHoveredIndex(null);
    } else if (menuTitle === "회사소개" && item === "핵심인력") {
      onNavigate("core-team");
      setHoveredIndex(null);
    } else if (menuTitle === "회사소개" && item === "미디어") {
      onNavigate("media");
      setHoveredIndex(null);
    } else if (menuTitle === "회사소개" && item === "연혁") {
      onNavigate("history");
      setHoveredIndex(null);
    } else if (menuTitle === "회사소개" && item === "인재채용") {
      onNavigate("recruit");
      setHoveredIndex(null);
    } else if (menuTitle === "회사소개" && item === "PBA 구단") {
      onNavigate("pba");
      setHoveredIndex(null);
    } else if (menuTitle === "회사소개" && item === "협력사 소개") {
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
    }
    // "태양광상품소개" 메뉴 라우팅
    else if (menuTitle === "태양광상품소개" && item === "솔라오(지붕)") {
      onNavigate("solaro-roof");
      setHoveredIndex(null);
    } else if (menuTitle === "태양광상품소개" && item === "솔라오(그라운드)") {
      onNavigate("solaro-ground");
      setHoveredIndex(null);
    } else if (menuTitle === "태양광상품소개" && item === "솔라로지스리드(물류창고)") {
      onNavigate("solaro-logistics");
      setHoveredIndex(null);
    } else if (menuTitle === "태양광상품소개" && item === "솔라워터(수상)") {
      onNavigate("solaro-water");
      setHoveredIndex(null);
    } else if (menuTitle === "태양광상품소개" && item === "솔라파킹(주차장)") {
      onNavigate("solaro-parking");
      setHoveredIndex(null);
    } else if (menuTitle === "태양광상품소개" && item === "모니터링") {
      onNavigate("solaro-monitoring");
      setHoveredIndex(null);
    } else if (menuTitle === "태양광상품소개" && item === "FAQ") {
      onNavigate("solaro-faq");
      setHoveredIndex(null);
    }
    // "태양광실적" 메뉴 라우팅
    else if (menuTitle === "태양광실적" && item === "지도로보기") {
      onNavigate("performance-map");
      setHoveredIndex(null);
    } else if (menuTitle === "태양광실적" && item === "표로보기") {
      onNavigate("performance-table");
      setHoveredIndex(null);
    }
    // "고객센터" 메뉴 라우팅
    else if (menuTitle === "고객센터" && item === "오시는 길") {
      onNavigate("location");
      setHoveredIndex(null);
    } else if (menuTitle === "고객센터" && item === "사이트 맵") {
      onNavigate("sitemap");
      setHoveredIndex(null);
    } else if (menuTitle === "고객센터" && item === "사업관련 사이트") {
      onNavigate("related-sites");
      setHoveredIndex(null);
    }
    // "모니터링" 메뉴 라우팅
    else if (menuTitle === "모니터링" && item === "발전시간 조회") {
      onNavigate("monitoring-generation-time");
      setHoveredIndex(null);
    } else if (menuTitle === "모니터링" && item === "잔고조회") {
      onNavigate("monitoring-balance");
      setHoveredIndex(null);
    } else if (menuTitle === "모니터링" && item === "관리운영 보고서") {
      onNavigate("monitoring-management-report");
      setHoveredIndex(null);
    } else if (menuTitle === "모니터링" && item === "자금관리 보고서") {
      onNavigate("monitoring-financial-report");
      setHoveredIndex(null);
    }
    // "사업접수 및 문의" 메뉴 라우팅
    else if (menuTitle === "사업접수 및 문의" && item === "태양광 접수") {
      onNavigate("inquiry-solar");
      setHoveredIndex(null);
    } else if (menuTitle === "사업접수 및 문의" && item === "기자재 구매") {
      onNavigate("inquiry-materials");
      setHoveredIndex(null);
    } else if (menuTitle === "사업접수 및 문의" && item === "사업성 분석") {
      onNavigate("inquiry-fs");
      setHoveredIndex(null);
    } else if (menuTitle === "사업접수 및 문의" && item === "기술실사") {
      onNavigate("inquiry-duediligence");
      setHoveredIndex(null);
    } else if (menuTitle === "사업접수 및 문의" && item === "태양광 교육") {
      onNavigate("inquiry-education");
      setHoveredIndex(null);
    } else if (menuTitle === "사업접수 및 문의" && item === "기타문의") {
      onNavigate("inquiry-other");
      setHoveredIndex(null);
    }
    // "회원사전용" 메뉴 라우팅
    else if (menuTitle === "회원사전용" && item === "영업사등록") {
      onNavigate("member-sales");
      setHoveredIndex(null);
    } else if (menuTitle === "회원사전용" && item === "시공사등록") {
      onNavigate("member-construction");
      setHoveredIndex(null);
    } else if (menuTitle === "회원사전용" && item === "인허가접수 관리시스템") {
      onNavigate("member-permit");
      setHoveredIndex(null);
    } else if (menuTitle === "회원사전용" && item === "사무공간소개") {
      onNavigate("member-office");
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
          {/* 햄버거 메뉴 버튼 (모바일) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden text-white hover:text-[#FF6B2C] transition-colors p-2"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* 스타일 가이드 버튼 (데스크탑만) */}
          <button
            onClick={() => onNavigate("style-guide")}
            className="hidden xl:flex items-center gap-2 px-5 py-2.5 border-2 border-[#FF6B2C]/30 text-[#FF6B2C] hover:bg-[#FF6B2C] hover:text-white transition-all hover:scale-105"
            style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontWeight: '600',
              borderRadius: '100px',
              fontSize: '15px'
            }}
          >
            <div className="w-1.5 h-1.5 bg-[#FF6B2C] rounded-full"></div>
            STYLE GUIDE
          </button>

          {/* 빠른 상담 버튼 (데스크탑만) */}
          <Button
            className="hidden xl:flex bg-[#FF6B2C] hover:bg-[#FF7C40] text-white transition-all hover:scale-105 shadow-md"
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

      {/* 모바일 메뉴 */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0A2A63] border-t border-white/10">
          <div className="max-h-[calc(100vh-80px)] overflow-y-auto">
            {menuData.map((menu, index) => (
              <div key={index} className="border-b border-white/10">
                <button
                  onClick={() => setMobileExpandedIndex(mobileExpandedIndex === index ? null : index)}
                  className="w-full px-4 py-4 flex items-center justify-between text-white hover:bg-[#163A7A] transition-colors"
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '16px',
                    fontWeight: '600'
                  }}
                >
                  <span>{menu.title}</span>
                  <ChevronDown 
                    size={20} 
                    className="transition-transform" 
                    style={{ transform: mobileExpandedIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }} 
                  />
                </button>
                
                {mobileExpandedIndex === index && (
                  <div className="bg-[#163A7A]/50">
                    {menu.items.map((item, itemIndex) => (
                      <a
                        key={itemIndex}
                        href={`#${item}`}
                        onClick={(e) => handleMenuClick(menu.title, item, e)}
                        className="block px-6 py-3 text-white hover:bg-[#FF6B2C] transition-colors"
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '14px',
                          fontWeight: '400'
                        }}
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}