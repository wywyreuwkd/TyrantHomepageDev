import { ChevronRight } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { SubNavigation } from "../components/SubNavigation";

interface SitemapProps {
  onNavigate: (page: any) => void;
  currentPage: string;
}

const siteStructure = [
  {
    category: "회사소개",
    items: [
      { name: "타이런트", page: "company" },
      { name: "그룹사소개", page: "group" },
      { name: "연혁", page: "history" },
      { name: "협력사소개", page: "partners" }
    ]
  },
  {
    category: "사업영역",
    items: [
      { name: "태양광 사업성분석(FS)", page: "business-fs" },
      { name: "태양광 개발", page: "business-development" },
      { name: "태양광 기자재 공급", page: "business-materials" },
      { name: "태양광 시공", page: "business-construction" },
      { name: "태양광 투자", page: "business-investment" },
      { name: "태양광 관리운영(모니터링)", page: "business-monitoring" },
      { name: "태양광 사무관리(보험)", page: "business-insurance" },
      { name: "태양광 기술실사", page: "business-duediligence" },
      { name: "데이터센터", page: "business-datacenter" },
      { name: "태양광 교육", page: "business-education" }
    ]
  },
  {
    category: "태양광상품소개",
    items: [
      { name: "솔라오(지붕)", page: "home" },
      { name: "솔라오(그라운드)", page: "home" },
      { name: "솔라로지스리드(물류창고)", page: "home" },
      { name: "솔라워터(수상)", page: "home" },
      { name: "솔라파킹(주차장)", page: "home" },
      { name: "모니터링", page: "home" },
      { name: "FAQ", page: "home" }
    ]
  },
  {
    category: "태양광실적",
    items: [
      { name: "지도로보기", page: "home" },
      { name: "표로보기", page: "home" }
    ]
  },
  {
    category: "사업접수 및 문의",
    items: [
      { name: "태양광 접수", page: "home" },
      { name: "기자재 구매", page: "home" },
      { name: "사업성 분석", page: "home" },
      { name: "기술실사", page: "home" },
      { name: "태양광 교육", page: "home" },
      { name: "기타문의", page: "home" }
    ]
  },
  {
    category: "회원사전용",
    items: [
      { name: "영업사등록", page: "home" },
      { name: "시공사등록", page: "home" },
      { name: "인허가접수 관리시스템", page: "home" },
      { name: "사무공간소개", page: "home" }
    ]
  },
  {
    category: "모니터링",
    items: [
      { name: "발전시간 조회", page: "home" },
      { name: "잔고조회", page: "home" },
      { name: "관리운영 보고서", page: "home" },
      { name: "자금관리 보고서", page: "home" }
    ]
  },
  {
    category: "고객센터",
    items: [
      { name: "오시는 길", page: "location" },
      { name: "사이트 맵", page: "sitemap" },
      { name: "사업관련 사이트", page: "related-sites" }
    ]
  }
];

export function Sitemap({ onNavigate, currentPage }: SitemapProps) {
  return (
    <div style={{ paddingTop: '80px' }}>
      <PageHero
        badge={{ text: "고객센터", color: "#FF6B3D" }}
        title="사이트 맵"
        description="솔라오 웹사이트의 전체 구조를 한눈에 확인하세요."
      />

      {/* Sub Navigation - Below Hero */}
      <SubNavigation category="customer" currentPage={currentPage} onNavigate={onNavigate} />

      {/* 메인 컨텐츠 */}
      <section style={{ 
        background: '#0F214A',
        padding: '80px 0'
      }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          
          {/* 홈 */}
          <div 
            className="bg-gradient-to-br from-[#FF6B3D] to-[#e55a35] p-8 mb-8 cursor-pointer hover:scale-[1.02] transition-transform"
            style={{ 
              borderRadius: '24px',
              boxShadow: '0 8px 32px rgba(255, 107, 61, 0.3)'
            }}
            onClick={() => onNavigate("home")}
          >
            <h2 
              className="text-white"
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '32px',
                fontWeight: '700'
              }}
            >
              홈
            </h2>
            <p 
              className="text-white/90 mt-2"
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '16px'
              }}
            >
              솔라오 메인 페이지
            </p>
          </div>

          {/* 사이트 구조 그리드 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteStructure.map((section, sectionIndex) => (
              <div 
                key={sectionIndex}
                className="bg-gradient-to-br from-[#15305A] to-[#0E1C45] p-6"
                style={{ 
                  borderRadius: '24px',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <h3 
                  className="text-white mb-4 pb-3"
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '20px',
                    fontWeight: '700',
                    borderBottom: '2px solid rgba(255, 107, 61, 0.3)'
                  }}
                >
                  {section.category}
                </h3>

                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <button
                        onClick={() => onNavigate(item.page)}
                        className="w-full text-left flex items-center gap-2 text-white/80 hover:text-[#FF6B3D] hover:translate-x-1 transition-all group"
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '15px',
                          padding: '8px 0'
                        }}
                      >
                        <ChevronRight 
                          size={16} 
                          className="flex-shrink-0 text-white/40 group-hover:text-[#FF6B3D]" 
                        />
                        <span>{item.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 하단 안내 */}
          <div 
            className="mt-12 p-8 bg-gradient-to-r from-[#FF6B3D]/10 to-transparent"
            style={{ 
              borderRadius: '24px',
              border: '1px solid rgba(255, 107, 61, 0.2)'
            }}
          >
            <p 
              className="text-white/90"
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '15px',
                lineHeight: '140%'
              }}
            >
              찾으시는 페이지가 없으신가요? 고객센터를 통해 문의해 주세요.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}