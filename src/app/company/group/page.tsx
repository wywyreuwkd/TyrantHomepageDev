import type { Metadata } from "next";
import { Building2, Zap, Sun, Battery, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "그룹사 소개",
  description: "타이런트 그룹사 소개 - 태양광 발전소 개발, 기자재 공급, 시공, 운영까지 토탈 에너지 솔루션을 제공합니다.",
};

const groupCompanies = [
  {
    name: "타이런트에이치",
    nameEn: "TYRANT H",
    description: "태양광 발전소 개발 및 투자 전문 기업",
    color: "#FF6B3D",
    icon: Sun,
    services: [
      "태양광 발전소 개발",
      "프로젝트 파이낸싱",
      "사업성 분석 및 타당성 검토",
      "부지 개발 및 인허가"
    ]
  },
  {
    name: "타이런트아이",
    nameEn: "TYRANT I",
    description: "태양광 기자재 공급 및 유통 전문 기업",
    color: "#273b82",
    icon: Battery,
    services: [
      "태양광 모듈 공급",
      "인버터 및 전력기기 유통",
      "구조물 설계 및 제작",
      "기자재 품질 관리"
    ]
  },
  {
    name: "타이런트에스",
    nameEn: "TYRANT S",
    description: "태양광 발전소 시공 전문 기업",
    color: "#15305A",
    icon: Building2,
    services: [
      "태양광 발전소 시공",
      "전기공사 및 계통연계",
      "구조물 설치 및 배선",
      "시공 품질 관리"
    ]
  },
  {
    name: "타이런트씨",
    nameEn: "TYRANT C",
    description: "태양광 발전소 운영 및 관리 전문 기업",
    color: "#0E1C45",
    icon: Zap,
    services: [
      "발전소 모니터링",
      "유지보수 및 관리",
      "발전량 최적화",
      "원격 진단 시스템"
    ]
  },
  {
    name: "타이런트씨",
    nameEn: "TYRANT C",
    description: "친환경 에너지 컨설팅 전문 기업",
    color: "#152556",
    icon: Leaf,
    services: [
      "에너지 컨설팅",
      "ESG 경영 지원",
      "탄소배출 저감 솔루션",
      "RE100 컨설팅"
    ]
  }
];

export default function GroupCompanies() {
  return (
    <div className="min-h-screen bg-white" style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F214A] via-[#15305A] to-[#273b82] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#FF6B3D] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative mx-auto px-6 md:px-10 py-20 md:py-32" style={{ maxWidth: '1280px' }}>
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-[#FF6B3D]/20 border border-[#FF6B3D]/30 mb-6" style={{ borderRadius: '100px' }}>
              <span style={{ 
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '14px',
                fontWeight: '600',
                color: '#FF6B3D'
              }}>
                GROUP COMPANIES
              </span>
            </div>
            
            <h1 style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: '700',
              lineHeight: '1.3',
              marginBottom: '24px'
            }}>
              그룹사 소개
            </h1>
            
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '18px',
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '32px'
            }}>
              타이런트 그룹은 태양광 발전의 전 과정을 아우르는 5개의 전문 계열사로 구성되어 있습니다.<br className="hidden md:block" />
              개발부터 투자, 시공, 운영까지 원스톱 토탈 솔루션을 제공합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Group Structure Overview */}
      <section className="mx-auto px-6 md:px-10 py-16 md:py-24" style={{ maxWidth: '1280px' }}>
        <div className="text-center mb-16">
          <h2 style={{
            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: '700',
            color: '#0F214A',
            marginBottom: '16px'
          }}>
            타이런트 그룹 구조
          </h2>
          <p style={{
            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
            fontSize: '18px',
            lineHeight: '1.6',
            color: '#6B7280'
          }}>
            전문화된 계열사 간 유기적 협업으로 최상의 서비스를 제공합니다
          </p>
        </div>

        {/* Detailed Company Cards */}
        <div className="space-y-8">
          {groupCompanies.map((company, index) => {
            const IconComponent = company.icon;
            
            return (
              <div 
                key={index}
                className="bg-white border border-gray-200 overflow-hidden hover:border-[#FF6B3D] transition-all duration-300 group"
                style={{ borderRadius: '24px', boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)' }}
              >
                <div className="grid md:grid-cols-[300px_1fr] gap-0">
                  {/* Left: Company Name & Icon */}
                  <div 
                    className="p-10 flex flex-col justify-center items-center text-white relative overflow-hidden"
                    style={{ 
                      background: `linear-gradient(135deg, ${company.color} 0%, ${company.color}dd 100%)`
                    }}
                  >
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>
                    
                    <div className="relative z-10 text-center">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 mx-auto" 
                        style={{ borderRadius: '20px' }}
                      >
                        <IconComponent size={40} className="text-white" />
                      </div>
                      
                      <h3 style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '28px',
                        fontWeight: '700',
                        marginBottom: '8px',
                        letterSpacing: '-0.5px'
                      }}>
                        {company.name}
                      </h3>
                      
                      <div style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: 'rgba(255, 255, 255, 0.8)',
                        letterSpacing: '1px'
                      }}>
                        {company.nameEn}
                      </div>
                    </div>
                  </div>

                  {/* Right: Description & Services */}
                  <div className="p-10">
                    <p style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '18px',
                      fontWeight: '600',
                      color: '#0F214A',
                      marginBottom: '24px',
                      lineHeight: '1.6'
                    }}>
                      {company.description}
                    </p>
                    
                    <div className="mb-3" style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#6B7280',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      주요 사업
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-3">
                      {company.services.map((service, serviceIndex) => (
                        <div 
                          key={serviceIndex}
                          className="flex items-center gap-3 bg-gray-50 p-3"
                          style={{ borderRadius: '12px' }}
                        >
                          <div 
                            className="w-2 h-2 flex-shrink-0" 
                            style={{ 
                              backgroundColor: company.color,
                              borderRadius: '50%'
                            }}
                          ></div>
                          <span style={{
                            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                            fontSize: '15px',
                            color: '#374151',
                            fontWeight: '500'
                          }}>
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Synergy Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto px-6 md:px-10 py-16 md:py-24" style={{ maxWidth: '1280px' }}>
          <div className="text-center mb-16">
            <h2 style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: '700',
              color: '#0F214A',
              marginBottom: '16px'
            }}>
              그룹 시너지 효과
            </h2>
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '18px',
              lineHeight: '1.6',
              color: '#6B7280'
            }}>
              5개 계열사의 전문성이 결합된 완벽한 토탈 솔루션
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 text-center border border-gray-200" style={{ borderRadius: '20px' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B3D] to-[#FF8C5A] flex items-center justify-center mx-auto mb-6" style={{ borderRadius: '16px' }}>
                <span style={{ fontSize: '32px' }}>⚡</span>
              </div>
              <h3 style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '22px',
                fontWeight: '700',
                color: '#0F214A',
                marginBottom: '12px'
              }}>
                원스톱 서비스
              </h3>
              <p style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '15px',
                lineHeight: '1.6',
                color: '#6B7280'
              }}>
                개발부터 운영까지 모든 과정을 그룹 내에서 일괄 처리하여 효율성과 품질을 극대화합니다
              </p>
            </div>

            <div className="bg-white p-8 text-center border border-gray-200" style={{ borderRadius: '20px' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-[#273b82] to-[#3A4FA0] flex items-center justify-center mx-auto mb-6" style={{ borderRadius: '16px' }}>
                <span style={{ fontSize: '32px' }}>🤝</span>
              </div>
              <h3 style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '22px',
                fontWeight: '700',
                color: '#0F214A',
                marginBottom: '12px'
              }}>
                유기적 협업
              </h3>
              <p style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '15px',
                lineHeight: '1.6',
                color: '#6B7280'
              }}>
                각 계열사의 전문성이 결합되어 최상의 시너지를 창출하며 고객 만족도를 높입니다
              </p>
            </div>

            <div className="bg-white p-8 text-center border border-gray-200" style={{ borderRadius: '20px' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-[#15305A] to-[#1E3F73] flex items-center justify-center mx-auto mb-6" style={{ borderRadius: '16px' }}>
                <span style={{ fontSize: '32px' }}>💼</span>
              </div>
              <h3 style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '22px',
                fontWeight: '700',
                color: '#0F214A',
                marginBottom: '12px'
              }}>
                비용 최적화
              </h3>
              <p style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '15px',
                lineHeight: '1.6',
                color: '#6B7280'
              }}>
                그룹 내 협력을 통해 중간 비용을 절감하고 합리적인 가격으로 서비스를 제공합니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0F214A] via-[#15305A] to-[#273b82] text-white">
        <div className="mx-auto px-6 md:px-10 py-16 md:py-20 text-center" style={{ maxWidth: '1280px' }}>
          <h2 style={{
            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: '700',
            marginBottom: '16px'
          }}>
            타이런트 그룹과 함께하세요
          </h2>
          
          <p style={{
            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
            fontSize: '18px',
            lineHeight: '1.6',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '32px'
          }}>
            5개 전문 계열사의 토탈 솔루션으로 최상의 태양광 발전 서비스를 경험하세요
          </p>
          
          <button
            className="bg-[#FF6B3D] hover:bg-[#FF7C40] text-white transition-all hover:scale-105"
            style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontWeight: '600',
              borderRadius: '100px',
              padding: '16px 40px',
              fontSize: '17px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(255, 107, 61, 0.3)'
            }}
          >
            사업 문의하기
          </button>
        </div>
      </section>
    </div>
  );
}