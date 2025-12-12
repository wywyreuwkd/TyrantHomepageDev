import { Calendar, Zap, Building2, Users, Award, TrendingUp, CheckCircle2 } from "lucide-react";
import { SubNavigation } from "../components/SubNavigation";
import { motion } from "motion/react";

interface CompanyHistoryProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function CompanyHistory({ onNavigate, currentPage }: CompanyHistoryProps) {
  const milestones = [
    {
      year: "2024",
      items: [
        { title: "솔라오(SOLAR O) 브랜드 런칭", desc: "수익공유형 무상설치 모델 본격 출시" },
        { title: "누적 설치용량 100MW 달성", desc: "전국 200개 이상 산업단지 물류센터 설치" },
        { title: "AI 기반 스마트 모니터링 시스템 도입", desc: "실시간 발전량 예측 및 최적화" }
      ]
    },
    {
      year: "2023",
      items: [
        { title: "탄소중립 인증 획득", desc: "환경부 지정 녹색기업 선정" },
        { title: "주요 물류기업과 전략적 파트너십 체결", desc: "5개 대형 물류센터 동시 계약" },
        { title: "스마트 에너지 관리 플랫폼 개발", desc: "IoT 기반 통합 관제 시스템 구축" }
      ]
    },
    {
      year: "2022",
      items: [
        { title: "수익공유형 사업모델 특허 출원", desc: "독자적 비즈니스 모델 지적재산권 확보" },
        { title: "금융권 ESG 투자 유치", desc: "친환경 에너지 프로젝트 투자 100억 원 달성" },
        { title: "전국 네트워크 확장", desc: "수도권, 충청권, 영남권 거점 구축" }
      ]
    },
    {
      year: "2021",
      items: [
        { title: "타이런트 법인 설립", desc: "태양광 전문 에너지 기업으로 출범" },
        { title: "산업단지 특화 태양광 사업 시작", desc: "물류센터 대상 무상설치 모델 개발" },
        { title: "ISO 9001 품질경영시스템 인증", desc: "국제 표준 품질관리 체계 확립" }
      ]
    }
  ];

  const achievements = [
    {
      icon: Zap,
      number: "100MW+",
      label: "누적 설치용량",
      color: "#FF6B3D"
    },
    {
      icon: Building2,
      number: "200+",
      label: "설치 현장",
      color: "#1b3466"
    },
    {
      icon: Users,
      number: "50+",
      label: "파트너 기업",
      color: "#FF6B3D"
    },
    {
      icon: Award,
      number: "15+",
      label: "인증 및 특허",
      color: "#1b3466"
    }
  ];

  return (
    <div className="min-h-screen" style={{ paddingTop: '80px', backgroundColor: '#F7FAFD' }}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F214A] via-[#15305A] to-[#273b82] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#FF6B3D] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#273b82] rounded-full blur-3xl"></div>
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
                COMPANY HISTORY
              </span>
            </div>
            
            <h1 style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: '700',
              lineHeight: '1.3',
              marginBottom: '24px'
            }}>
              주요 연혁
            </h1>
            
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '18px',
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '32px'
            }}>
              타이런트는 2021년 설립 이후 빠르게 성장하며<br className="hidden md:block" />
              대한민국 태양광 산업을 선도하는 기업으로 자리매김했습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Sub Navigation - Below Hero */}
      <SubNavigation category="company" currentPage={currentPage} onNavigate={onNavigate} />
      
      {/* Content Wrapper with Animation */}
      <motion.div
        key={currentPage}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Main Achievements */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="relative group"
                  style={{
                    background: 'white',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    borderRadius: '20px',
                    padding: '32px 24px',
                    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className="mb-4 p-3"
                      style={{
                        background: `linear-gradient(135deg, ${item.color}15, ${item.color}05)`,
                        borderRadius: '16px',
                        border: `1px solid ${item.color}20`
                      }}
                    >
                      <item.icon size={32} style={{ color: item.color }} />
                    </div>
                    
                    <div
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '32px',
                        fontWeight: '700',
                        color: '#0F214A',
                        marginBottom: '8px',
                        lineHeight: '1.2'
                      }}
                    >
                      {item.number}
                    </div>
                    
                    <div
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '15px',
                        fontWeight: '500',
                        color: '#666',
                        lineHeight: '1.4'
                      }}
                    >
                      {item.label}
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      borderRadius: '20px',
                      border: `2px solid ${item.color}`,
                      boxShadow: `0 8px 24px ${item.color}20`
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
            {/* Section Header */}
            <div className="mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6" style={{
                background: 'rgba(255, 107, 61, 0.08)',
                border: '1px solid rgba(255, 107, 61, 0.2)',
                borderRadius: '100px'
              }}>
                <div className="w-1.5 h-1.5 bg-[#FF6B3D] rounded-full"></div>
                <span style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '13px',
                  fontWeight: '700',
                  color: '#FF6B3D',
                  letterSpacing: '2px'
                }}>
                  MILESTONES
                </span>
              </div>

              <h2 style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '40px',
                fontWeight: '700',
                color: '#0F214A',
                lineHeight: '1.3',
                marginBottom: '16px'
              }}>
                주요 연혁
              </h2>

              <p style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '17px',
                lineHeight: '1.6',
                color: '#666',
                maxWidth: '600px'
              }}>
                혁신과 성장의 여정을 함께해온 타이런트의 주요 이정표를 소개합니다.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden lg:block absolute left-[100px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#FF6B3D] via-[#1b3466] to-[#0F214A]"></div>

              <div className="space-y-12 md:space-y-16">
                {milestones.map((milestone, yearIndex) => (
                  <div key={yearIndex} className="relative">
                    {/* Year Marker */}
                    <div className="flex items-start gap-8 mb-8">
                      <div className="hidden lg:flex items-center justify-center w-[200px] shrink-0">
                        <div
                          className="relative"
                          style={{
                            background: 'linear-gradient(135deg, #FF6B3D, #FF8C3D)',
                            padding: '16px 32px',
                            borderRadius: '100px',
                            boxShadow: '0 8px 24px rgba(255, 107, 61, 0.25)',
                            border: '2px solid rgba(255, 255, 255, 0.2)'
                          }}
                        >
                          <div
                            style={{
                              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                              fontSize: '28px',
                              fontWeight: '700',
                              color: 'white',
                              textAlign: 'center',
                              lineHeight: '1'
                            }}
                          >
                            {milestone.year}
                          </div>

                          {/* Glow Effect */}
                          <div className="absolute inset-0" style={{
                            borderRadius: '100px',
                            background: 'linear-gradient(135deg, rgba(255, 107, 61, 0.3), rgba(255, 140, 61, 0.1))',
                            filter: 'blur(20px)',
                            transform: 'scale(1.2)',
                            zIndex: -1
                          }}></div>
                        </div>
                      </div>

                      {/* Mobile Year */}
                      <div className="lg:hidden mb-4">
                        <div
                          style={{
                            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                            fontSize: '32px',
                            fontWeight: '700',
                            color: '#FF6B3D',
                            lineHeight: '1'
                          }}
                        >
                          {milestone.year}
                        </div>
                      </div>
                    </div>

                    {/* Items */}
                    <div className="lg:pl-[240px] space-y-6">
                      {milestone.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="group relative"
                          style={{
                            background: 'white',
                            border: '1px solid rgba(0, 0, 0, 0.08)',
                            borderRadius: '20px',
                            padding: '28px 32px',
                            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <div className="flex items-start gap-4">
                            <div className="shrink-0 mt-1">
                              <CheckCircle2 size={20} style={{ color: '#1b3466' }} />
                            </div>
                            
                            <div className="flex-1">
                              <h3 style={{
                                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                                fontSize: '19px',
                                fontWeight: '600',
                                color: '#0F214A',
                                lineHeight: '1.4',
                                marginBottom: '8px'
                              }}>
                                {item.title}
                              </h3>
                              
                              <p style={{
                                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                                fontSize: '16px',
                                lineHeight: '1.6',
                                color: '#666'
                              }}>
                                {item.desc}
                              </p>
                            </div>
                          </div>

                          {/* Hover Effect */}
                          <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                            style={{
                              borderRadius: '20px',
                              border: '2px solid #1b3466',
                              boxShadow: '0 8px 24px rgba(27, 52, 102, 0.15)'
                            }}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Future Vision Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#0F214A] via-[#15305A] to-[#273b82] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#1b3466] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6B3D] rounded-full blur-3xl"></div>
          </div>

          <div className="relative mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8" style={{
                background: 'rgba(255, 107, 61, 0.15)',
                border: '1px solid rgba(255, 107, 61, 0.3)',
                borderRadius: '100px'
              }}>
                <TrendingUp size={16} style={{ color: '#FF6B3D' }} />
                <span style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '13px',
                  fontWeight: '700',
                  color: '#FF6B3D',
                  letterSpacing: '2px'
                }}>
                  FUTURE VISION
                </span>
              </div>

              <h2 style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '40px',
                fontWeight: '700',
                lineHeight: '1.3',
                marginBottom: '24px'
              }}>
                더 나은 내일을 향한<br />
                끊임없는 도전
              </h2>

              <p style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '18px',
                lineHeight: '1.7',
                color: 'rgba(255, 255, 255, 0.9)'
              }}>
                타이런트는 앞으로도 혁신적인 기술과 지속 가능한 비즈니스 모델을 통해<br className="hidden md:block" />
                대한민국을 넘어 글로벌 친환경 에너지 시장을 선도하는 기업으로 성장하겠습니다.
              </p>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}