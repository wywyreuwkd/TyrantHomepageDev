"use client"

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@components/shared/Logo";
import { Button } from "@components/ui/button";

const menuData = [
  {
    title: "회사소개",
    items: [
      { label: "타이런트", href: "/company" },
      { label: "CI소개", href: "/company/ci" },
      { label: "그룹사소개", href: "/company/group" },
      { label: "연혁", href: "/company/history" },
      { label: "협력사소개", href: "/company/partners" },
    ],
  },
  {
    title: "사업영역",
    items: [
      { label: "태양광 사업성분석(FS)", href: "/business/fs" },
      { label: "태양광 개발", href: "/business/development" },
      { label: "태양광 기자재 공급", href: "/business/materials" },
      { label: "태양광 시공", href: "/business/construction" },
      { label: "태양광 투자", href: "/business/investment" },
      { label: "태양광 관리운영(모니터링)", href: "/business/monitoring" },
      { label: "태양광 사무관리(보험)", href: "/business/insurance" },
      { label: "태양광 기술실사", href: "/business/duediligence" },
      { label: "데이터센터", href: "/business/datacenter" },
      { label: "태양광 교육", href: "/business/education" },
    ],
  },
  {
    title: "태양광상품소개",
    items: [
      { label: "솔라오(지붕)", href: "#" },
      { label: "솔라오(그라운드)", href: "#" },
      { label: "솔라로지스리드(물류창고)", href: "#" },
      { label: "솔라워터(수상)", href: "#" },
      { label: "솔라파킹(주차장)", href: "#" },
      { label: "모니터링", href: "#" },
      { label: "FAQ", href: "#" },
    ]
  },
  {
    title: "태양광실적",
    items: [
      { label: "지도로보기", href: "#" },
      { label: "표로보기", href: "#" },
    ]
  },
  {
    title: "사업접수 및 문의",
    items: [
      { label: "태양광 접수", href: "#" },
      { label: "기자재 구매", href: "#" },
      { label: "사업성 분석", href: "#" },
      { label: "기술실사", href: "#" },
      { label: "태양광 교육", href: "#" },
      { label: "기타문의", href: "#" },
    ]
  },
  {
    title: "회원사전용",
    items: [
      { label: "영업사등록", href: "#" },
      { label: "시공사등록", href: "#" },
      { label: "인허가접수 관리시스템", href: "#" },
      { label: "사무공간소개", href: "#" },
    ]
  },
  {
    title: "모니터링",
    items: [
      { label: "발전시간 조회", href: "#" },
      { label: "잔고조회", href: "#" },
      { label: "관리운영 보고서", href: "#" },
      { label: "자금관리 보고서", href: "#" },
    ]
  },
  {
    title: "고객센터",
    items: [
      { label: "오시는 길", href: "#" },
      { label: "사이트 맵", href: "#" },
      { label: "사업관련 사이트", href: "#" },
    ]
  },
]

export function Header() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pathname = usePathname();

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
                    return (
                      <Link
                        key={itemIndex}
                        href={item.href}
                        onClick={() => setHoveredIndex(null)}
                        className={`block color-white hover:color-white hover:bg-accent hover:font-semibold transition-all text-94 font-normal whitespace-nowrap leading-[44px] px-6 ${
                          isActive ? 'bg-[#FF6B2C]/20' : ''
                        }`}
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
          <Button
            className="bg-accent hover:bg-accent-90 color-white transition-all hover:scale-105 shadow-md font-semibold rounded-full py-3 px-[26px] text-base"
          >
            빠른 상담
          </Button>
        </div>
      </div>
    </header>
  )
}