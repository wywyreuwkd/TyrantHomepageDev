"use client"

import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@components/shared/Logo";
import { Button } from "@components/ui/button";

interface MenuItem {
  label: string;
  href: string;
  external?: boolean;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

const menuData: MenuSection[] = [
  {
    title: "회사소개개개",
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
    title: "사업영역",
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
    title: "태양광상품소개",
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
    title: "태양광실적",
    items: [
      { label: "지도로보기", href: "/performance/onthemap" },
      { label: "표로보기", href: "/performance/onthetable" },
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
    title: "회원사전용",
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
    title: "고객센터",
    items: [
      { label: "오시는 길", href: "/customercenter/location" },
      { label: "사이트 맵", href: "/customercenter/sitemap" },
      { label: "사업관련 사이트", href: "/customercenter/relationsite" },
    ]
  },
]

export function Header() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<number | null>(null);
  const pathname = usePathname();

  // 모바일 메뉴가 열렸을 때 스크롤 방지
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // 경로 변경 시 모바일 메뉴 닫기
  useEffect(() => {
    setMobileMenuOpen(false);
    setExpandedMobileMenu(null);
  }, [pathname]);

  const toggleMobileSubmenu = (index: number) => {
    setExpandedMobileMenu(expandedMobileMenu === index ? null : index);
  };

  return (
    <header className="bg-header shadow-sm">
      <div className="mx-auto px-4 flex items-center justify-between h-20 max-w-[1600px]">
        <Link href="/" className="flex-shrink-0 cursor-pointer">
          <Logo />
        </Link>
        
        <nav className="hidden xl:flex items-center gap-3 flex-1 justify-center h-20">
          {menuData.map((menu, index) => (
            <div
              key={index}
              className="relative h-full flex items-center"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="color-white hover:color-accent transition-colors flex items-center gap-1 relative cursor-pointer text-sm font-medium px-2 whitespace-nowrap"
                style={{
                  fontFamily: 'Pretendard -apple-system, "Noto Sans KR", sans-serif',
                }}
              >
                {menu.title}
                <ChevronDown size={14} className={`transition-transform ${hoveredIndex === index ? 'rotate-180' : 'rotate-0'}`} />

                {/* Hover 밑줄 */}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-accent transition-opacity mx-2 rounded-sm ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>

              {/* Dropdown Menu */}
              {hoveredIndex === index && (
                <div
                  className="absolute left-0 top-full bg-secondary-95 backdrop-blur-sm border border-clear min-w-[220px] rounded-[10px] py-4 shadow-[0_4px_16px_rgba(0,0,0,0.18)] mt-0"
                >
                  {menu.items.map((item, itemIndex) => {
                    const isActive = pathname === item.href;
                    const linkProps = item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {};
                    return (
                      <Link
                        key={itemIndex}
                        href={item.href}
                        onClick={() => setHoveredIndex(null)}
                        className={`block color-white hover:color-white hover:bg-accent hover:font-semibold transition-all text-94 font-normal whitespace-nowrap leading-[44px] px-6 ${
                          isActive ? 'bg-[#FF6B2C]/20' : ''
                        }`}
                        {...linkProps}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* 햄버거 메뉴 버튼 - xl 미만에서만 표시 */}
          <button
            className="xl:hidden color-white hover:color-accent transition-colors p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="메뉴 열기"
          >
            <Menu size={28} />
          </button>


          {/* 스타일 가이드 버튼 (데스크탑만) */}
          {/* <Link href="/styleguide">
            <button 
              className="hidden xl:flex items-center gap-2 px-5 py-2.5 border-2 border-[#FF6B2C]/30 text-[#FF6B2C] hover:bg-[#FF6B2C] hover:text-white transition-all hover:scale-105"
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontWeight: '600',
                borderRadius: '100px',
                fontSize: '15px'
              }}>
              <div className="w-1.5 h-1.5 bg-[#FF6B2C] rounded-full"></div>
              STYLE GUIDE
            </button>
          </Link>           */}

          <Link href="/consultation">
            <Button
              className="hidden sm:flex items-center justify-center bg-accent hover:bg-accent-90 color-white transition-all hover:scale-105 shadow-md font-semibold rounded-full py-3 px-[26px] text-base leading-none"
            >
              상담 문의
            </Button>
          </Link>
        </div>
      </div>

      {/* 모바일 메뉴 오버레이 */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 xl:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* 모바일 메뉴 패널 */}
      <div
        className={`fixed top-0 right-0 h-full w-[320px] max-w-[85vw] bg-primary z-50 xl:hidden transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* 모바일 메뉴 헤더 */}
        <div className="flex items-center justify-between h-20 px-6 border-b border-white/10">
          <span className="color-white font-semibold text-lg">메뉴</span>
          <button
            className="color-white hover:color-accent transition-colors p-2"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="메뉴 닫기"
          >
            <X size={28} />
          </button>
        </div>

        {/* 모바일 메뉴 내용 */}
        <div className="overflow-y-auto h-[calc(100%-80px)] py-4">
          {menuData.map((menu, index) => (
            <div key={index} className="border-b border-white/5">
              {/* 메뉴 타이틀 */}
              <button
                className="w-full flex items-center justify-between px-6 py-4 color-white hover:bg-white/5 transition-colors"
                onClick={() => toggleMobileSubmenu(index)}
              >
                <span className="font-medium">{menu.title}</span>
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-200 ${
                    expandedMobileMenu === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* 서브메뉴 */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedMobileMenu === index ? 'max-h-[500px]' : 'max-h-0'
                }`}
              >
                <div className="bg-white/5 py-2">
                  {menu.items.map((item, itemIndex) => {
                    const isActive = pathname === item.href;
                    const linkProps = item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {};
                    return (
                      <Link
                        key={itemIndex}
                        href={item.href}
                        className={`block px-8 py-3 text-sm transition-colors ${
                          isActive
                            ? 'color-accent bg-accent-10'
                            : 'color-white-90 hover:font-semibold hover:color-white hover:bg-white/5'
                        }`}
                        {...linkProps}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}

          {/* 모바일 빠른 상담 버튼 */}
          <div className="px-6 py-6">
            <Link href="/consultation">
              <Button
                className="w-full bg-accent hover:bg-accent-90 color-white transition-all shadow-md font-semibold rounded-full py-3 text-base"
              >
                상담 문의
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}