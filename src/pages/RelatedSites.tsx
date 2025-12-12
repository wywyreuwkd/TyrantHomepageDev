import { ExternalLink, Building2, FileText, Zap, Globe } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { SubNavigation } from "../components/SubNavigation";

interface RelatedSitesProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const relatedSites = [
  {
    category: "정부 및 공공기관",
    icon: Building2,
    color: "#FF6B3D",
    sites: [
      {
        name: "한국에너지공단",
        description: "신재생에너지 정책 및 지원 사업",
        url: "https://www.energy.or.kr"
      },
      {
        name: "산업통상자원부",
        description: "에너지 정책 및 제도",
        url: "https://www.motie.go.kr"
      },
      {
        name: "한국전력공사",
        description: "전력 계통 연계 및 전력 거래",
        url: "https://www.kepco.co.kr"
      },
      {
        name: "전력거래소",
        description: "전력 시장 정보 및 거래",
        url: "https://www.kpx.or.kr"
      }
    ]
  },
  {
    category: "태양광 관련 협회",
    icon: Zap,
    color: "#4F46E5",
    sites: [
      {
        name: "한국태양광산업협회",
        description: "태양광 산업 정보 및 교육",
        url: "https://www.kpva.or.kr"
      },
      {
        name: "신재생에너지협회",
        description: "신재생에너지 산업 동향",
        url: "https://www.karea.or.kr"
      },
      {
        name: "한국태양광발전학회",
        description: "태양광 기술 연구 및 학술",
        url: "https://www.kses.or.kr"
      }
    ]
  },
  {
    category: "법령 및 제도",
    icon: FileText,
    color: "#10B981",
    sites: [
      {
        name: "국가법령정보센터",
        description: "태양광 관련 법령 및 규정",
        url: "https://www.law.go.kr"
      },
      {
        name: "신재생에너지센터",
        description: "RPS 및 신재생에너지 정책",
        url: "https://www.knrec.or.kr"
      },
      {
        name: "온실가스종합정보센터",
        description: "탄소배출권 및 감축 제도",
        url: "https://www.gir.go.kr"
      }
    ]
  },
  {
    category: "해외 기관",
    icon: Globe,
    color: "#F59E0B",
    sites: [
      {
        name: "IEA (국제에너지기구)",
        description: "글로벌 에너지 동향 및 통계",
        url: "https://www.iea.org"
      },
      {
        name: "IRENA (국제재생에너지기구)",
        description: "재생에너지 글로벌 정책",
        url: "https://www.irena.org"
      },
      {
        name: "Solar Power Europe",
        description: "유럽 태양광 시장 정보",
        url: "https://www.solarpowereurope.org"
      }
    ]
  }
];

export function RelatedSites({ onNavigate, currentPage }: RelatedSitesProps) {
  return (
    <div style={{ paddingTop: '80px' }}>
      <PageHero
        badge={{ text: "고객센터", color: "#FF6B3D" }}
        title="사업관련 사이트"
        description="태양광 사업과 관련된 유용한 사이트를 모았습니다."
      />

      {/* Sub Navigation - Below Hero */}
      <SubNavigation category="customer" currentPage={currentPage} onNavigate={onNavigate} />

      {/* 메인 컨텐츠 */}
      <section style={{ 
        background: '#0F214A',
        padding: '80px 0'
      }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          
          {/* 안내 문구 */}
          <div 
            className="mb-12 p-8 bg-gradient-to-r from-[#FF6B3D]/10 to-transparent"
            style={{ 
              borderRadius: '24px',
              border: '1px solid rgba(255, 107, 61, 0.2)'
            }}
          >
            <p 
              className="text-white/90"
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '16px',
                lineHeight: '140%'
              }}
            >
              태양광 사업 진행에 필요한 정부기관, 협회, 법령정보 등 관련 사이트를 안내해 드립니다.<br />
              각 사이트를 클릭하시면 새 창에서 해당 페이지로 이동합니다.
            </p>
          </div>

          {/* 사이트 카테고리별 섹션 */}
          <div className="space-y-12">
            {relatedSites.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              
              return (
                <div key={categoryIndex}>
                  {/* 카테고리 헤더 */}
                  <div className="flex items-center gap-4 mb-6">
                    <div 
                      className="flex items-center justify-center text-white"
                      style={{ 
                        width: '56px', 
                        height: '56px', 
                        borderRadius: '16px',
                        background: `${category.color}20`,
                        border: `2px solid ${category.color}40`
                      }}
                    >
                      <IconComponent size={28} style={{ color: category.color }} />
                    </div>
                    <h2 
                      className="text-white"
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '28px',
                        fontWeight: '700'
                      }}
                    >
                      {category.category}
                    </h2>
                  </div>

                  {/* 사이트 그리드 */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.sites.map((site, siteIndex) => (
                      <a
                        key={siteIndex}
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-gradient-to-br from-[#15305A] to-[#0E1C45] p-6 hover:scale-[1.02] transition-all"
                        style={{ 
                          borderRadius: '24px',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          textDecoration: 'none'
                        }}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h3 
                            className="text-white group-hover:text-[#FF6B3D] transition-colors"
                            style={{
                              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                              fontSize: '20px',
                              fontWeight: '700'
                            }}
                          >
                            {site.name}
                          </h3>
                          <ExternalLink 
                            size={20} 
                            className="text-white/40 group-hover:text-[#FF6B3D] transition-colors flex-shrink-0 ml-2"
                          />
                        </div>

                        <p 
                          className="text-white/70 mb-4"
                          style={{
                            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                            fontSize: '15px',
                            lineHeight: '140%'
                          }}
                        >
                          {site.description}
                        </p>

                        <p 
                          className="text-white/50 group-hover:text-[#FF6B3D] transition-colors"
                          style={{
                            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                            fontSize: '14px',
                            wordBreak: 'break-all'
                          }}
                        >
                          {site.url}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* 하단 안내 */}
          <div 
            className="mt-12 p-8 bg-gradient-to-br from-[#15305A] to-[#0E1C45]"
            style={{ 
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <h3 
              className="text-white mb-3"
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '18px',
                fontWeight: '700'
              }}
            >
              유의사항
            </h3>
            <ul 
              className="space-y-2 text-white/80"
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '15px',
                lineHeight: '140%'
              }}
            >
              <li>• 외부 사이트로 이동 시 해당 사이트의 이용약관이 적용됩니다.</li>
              <li>• 사이트 주소는 해당 기관의 사정에 따라 변경될 수 있습니다.</li>
              <li>• 링크된 사이트의 내용에 대한 책임은 해당 사이트 운영자에게 있습니다.</li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}