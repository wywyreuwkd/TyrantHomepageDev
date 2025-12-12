import { Building2, TrendingUp, DollarSign, Zap, Shield, Package, CheckCircle2, BarChart3, Clock, Warehouse, Leaf, Sun } from "lucide-react";
import { SubNavigation } from "../components/SubNavigation";
import { PageHero } from "../components/PageHero";
import { ScrollReveal } from "../components/ScrollReveal";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface SolaroLogisticsProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function SolaroLogistics({ onNavigate, currentPage }: SolaroLogisticsProps) {
  // 솔라로지스리더 특징
  const features = [
    {
      icon: DollarSign,
      title: "100% 무상 설치",
      description: "설치비용 전액 무상, 초기 투자금 0원",
      color: "#FF6B3D"
    },
    {
      icon: TrendingUp,
      title: "전기요금 30% 절감",
      description: "자가소비를 통한 즉각적인 비용 절감",
      color: "#0F214A"
    },
    {
      icon: Shield,
      title: "20년 장기 수익",
      description: "안정적인 발전수익 공유 시스템",
      color: "#FF6B3D"
    },
    {
      icon: Leaf,
      title: "ESG 경영 실천",
      description: "친환경 기업 이미지 제고",
      color: "#0F214A"
    }
  ];

  // 물류센터 최적화 이유
  const advantages = [
    {
      icon: Warehouse,
      title: "넓은 지붕 면적",
      description: "대규모 발전소 구축에 최적화된 넓은 평지붕",
      stat: "3,000㎡ 이상"
    },
    {
      icon: Zap,
      title: "높은 전력 사용량",
      description: "24시간 가동으로 자가소비율 극대화",
      stat: "연중무휴"
    },
    {
      icon: BarChart3,
      title: "안정적인 구조",
      description: "철골 구조로 태양광 설치에 최적화",
      stat: "내하중 충분"
    },
    {
      icon: DollarSign,
      title: "높은 수익성",
      description: "대용량 설치로 수익 극대화 가능",
      stat: "1,000kW+"
    }
  ];

  // 수익 시뮬레이션
  const revenueExample = [
    { label: "건물 면적", value: "5,000㎡" },
    { label: "설치 용량", value: "1,000kW" },
    { label: "연간 발전량", value: "1,200,000kWh" },
    { label: "전기요금 절감", value: "약 1억 2천만원/년" },
    { label: "수익 공유", value: "약 6천만원/년" },
    { label: "총 수익", value: "약 1억 8천만원/년" }
  ];

  // 진행 프로세스
  const processSteps = [
    {
      step: "01",
      title: "현장 실사",
      description: "지붕 면적, 구조, 방위 등 설치 조건 조사"
    },
    {
      step: "02",
      title: "수익성 분석",
      description: "예상 발전량 및 수익 시뮬레이션 제공"
    },
    {
      step: "03",
      title: "계약 체결",
      description: "수익공유 비율 합의 및 20년 계약"
    },
    {
      step: "04",
      title: "설계 및 인허가",
      description: "구조 설계 및 전기사업허가 진행"
    },
    {
      step: "05",
      title: "무상 시공",
      description: "전액 무상으로 태양광 발전소 설치"
    },
    {
      step: "06",
      title: "운영 관리",
      description: "20년간 유지보수 및 모니터링"
    }
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <PageHero
        badge={{ text: "SOLAR LOGISTICS LEADER", color: "#FF6B3D" }}
        title="솔라로지스리더 (물류창고)"
        description="산업단지 물류창고에 특화된 태양광 무상설치 프로그램. 넓은 지붕을 활용하여 최대 발전효율과 전기요금 절감을 실현하는 수익공유형 솔루션"
      />

      {/* Sub Navigation */}
      <SubNavigation category="business" currentPage={currentPage} onNavigate={onNavigate} />

      {/* 솔라로지스리더 소개 */}
      <section style={{ background: 'linear-gradient(135deg, #0F214A 0%, #273b82 100%)', padding: '100px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <div 
                  className="inline-block px-5 py-2 mb-6"
                  style={{
                    background: 'rgba(255, 107, 61, 0.15)',
                    borderRadius: '100px',
                    border: '2px solid rgba(255, 107, 61, 0.3)'
                  }}
                >
                  <span 
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '16px',
                      fontWeight: '700',
                      color: '#FF6B3D',
                      letterSpacing: '1px'
                    }}
                  >
                    물류센터 전문 솔루션
                  </span>
                </div>

                <h2 
                  className="text-white mb-6"
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '50px',
                    fontWeight: '700',
                    lineHeight: '1.4'
                  }}
                >
                  물류센터가 발전소가 됩니다
                </h2>

                <p 
                  className="text-white mb-8"
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '22px',
                    fontWeight: '500',
                    lineHeight: '1.6',
                    opacity: 0.9
                  }}
                >
                  산업단지 물류센터의 넓은 지붕을 활용하여 대용량 태양광 발전소를 구축합니다. 초기 투자 없이 전기요금을 절감하고 20년간 안정적인 수익을 공유받으세요.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '16px',
                      padding: '24px',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <p 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '36px',
                        fontWeight: '700',
                        color: '#FF6B3D',
                        marginBottom: '8px'
                      }}
                    >
                      0원
                    </p>
                    <p 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '18px',
                        color: 'rgba(255, 255, 255, 0.9)'
                      }}
                    >
                      초기 투자금
                    </p>
                  </div>

                  <div
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '16px',
                      padding: '24px',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <p 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '36px',
                        fontWeight: '700',
                        color: '#FF6B3D',
                        marginBottom: '8px'
                      }}
                    >
                      20년
                    </p>
                    <p 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '18px',
                        color: 'rgba(255, 255, 255, 0.9)'
                      }}
                    >
                      수익 보장
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
                }}
              >
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1619070284836-e850273d69ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjM2MDM2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="물류센터 태양광"
                  style={{
                    width: '100%',
                    height: '500px',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 핵심 특징 */}
      <section style={{ background: 'white', padding: '120px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="mb-16 text-center">
            <h2 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '32px',
                fontWeight: '700',
                color: '#0F214A',
                lineHeight: '1.4',
                marginBottom: '16px'
              }}
            >
              솔라로지스리더 핵심 특징
            </h2>
            <p 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '22px',
                fontWeight: '500',
                color: '#666',
                lineHeight: '1.6'
              }}
            >
              물류센터에 최적화된 4가지 핵심 가치
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up">
                <div
                  className="text-center p-8"
                  style={{
                    background: 'white',
                    borderRadius: '24px',
                    border: '1px solid rgba(15, 33, 74, 0.1)',
                    boxShadow: '0 8px 32px rgba(15, 33, 74, 0.08)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 16px 48px rgba(15, 33, 74, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(15, 33, 74, 0.08)';
                  }}
                >
                  <div 
                    className="mx-auto mb-6"
                    style={{
                      width: '80px',
                      height: '80px',
                      background: `${feature.color}15`,
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <feature.icon size={40} style={{ color: feature.color }} />
                  </div>

                  <h3 
                    className="mb-3"
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '24px',
                      fontWeight: '700',
                      color: '#0F214A'
                    }}
                  >
                    {feature.title}
                  </h3>

                  <p 
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '18px',
                      color: '#666',
                      lineHeight: '1.6'
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 물류센터 최적화 이유 */}
      <section style={{ background: '#F7FAFD', padding: '120px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="mb-16 text-center">
            <div 
              className="inline-block px-5 py-2 mb-4"
              style={{
                background: 'rgba(15, 33, 74, 0.05)',
                borderRadius: '100px',
                border: '2px solid #0F214A'
              }}
            >
              <span 
                style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#0F214A',
                  letterSpacing: '1px'
                }}
              >
                ADVANTAGES
              </span>
            </div>
            <h2 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '50px',
                fontWeight: '700',
                color: '#0F214A',
                lineHeight: '1.4',
                marginBottom: '16px'
              }}
            >
              물류센터가 최적인 이유
            </h2>
            <p 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '22px',
                fontWeight: '500',
                color: '#666',
                lineHeight: '1.6'
              }}
            >
              물류창고는 태양광 발전소로 가장 이상적인 조건을 갖추고 있습니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up">
                <div
                  style={{
                    background: 'white',
                    borderRadius: '24px',
                    padding: '40px',
                    border: '2px solid rgba(15, 33, 74, 0.1)',
                    boxShadow: '0 8px 32px rgba(15, 33, 74, 0.08)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    minHeight: '320px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.borderColor = '#FF6B3D';
                    e.currentTarget.style.boxShadow = '0 16px 48px rgba(255, 107, 61, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(15, 33, 74, 0.1)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(15, 33, 74, 0.08)';
                  }}
                >
                  <div 
                    className="mb-6"
                    style={{
                      width: '80px',
                      height: '80px',
                      background: 'linear-gradient(135deg, #FF6B3D, #FF8C3D)',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 24px rgba(255, 107, 61, 0.3)'
                    }}
                  >
                    <advantage.icon size={40} style={{ color: 'white' }} />
                  </div>

                  <div 
                    className="inline-block px-4 py-2 mb-4"
                    style={{
                      background: 'rgba(255, 107, 61, 0.1)',
                      borderRadius: '100px'
                    }}
                  >
                    <span 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '16px',
                        fontWeight: '700',
                        color: '#FF6B3D'
                      }}
                    >
                      {advantage.stat}
                    </span>
                  </div>

                  <h3 
                    className="mb-3"
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '24px',
                      fontWeight: '700',
                      color: '#0F214A'
                    }}
                  >
                    {advantage.title}
                  </h3>

                  <p 
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '18px',
                      color: '#666',
                      lineHeight: '1.6'
                    }}
                  >
                    {advantage.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 수익 시뮬레이션 */}
      <section style={{ background: 'white', padding: '120px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="mb-16 text-center">
            <h2 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '32px',
                fontWeight: '700',
                color: '#0F214A',
                lineHeight: '1.4',
                marginBottom: '16px'
              }}
            >
              수익 시뮬레이션 예시
            </h2>
            <p 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '22px',
                fontWeight: '500',
                color: '#666',
                lineHeight: '1.6'
              }}
            >
              5,000㎡ 물류센터 기준
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div
              style={{
                background: 'linear-gradient(135deg, #0F214A, #273b82)',
                borderRadius: '32px',
                padding: '60px',
                boxShadow: '0 20px 60px rgba(15, 33, 74, 0.2)'
              }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                {revenueExample.map((item, index) => (
                  <ScrollReveal key={index} delay={index * 50} direction="up">
                    <div
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '16px',
                        padding: '32px',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)'
                      }}
                    >
                      <p 
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '18px',
                          color: 'rgba(255, 255, 255, 0.7)',
                          marginBottom: '12px'
                        }}
                      >
                        {item.label}
                      </p>
                      <p 
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '32px',
                          fontWeight: '700',
                          color: index >= 3 ? '#FF6B3D' : 'white'
                        }}
                      >
                        {item.value}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <div
                className="mt-8 text-center p-6"
                style={{
                  background: 'rgba(255, 107, 61, 0.15)',
                  borderRadius: '16px',
                  border: '2px solid rgba(255, 107, 61, 0.3)'
                }}
              >
                <p 
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '18px',
                    color: 'rgba(255, 255, 255, 0.9)',
                    lineHeight: '1.6'
                  }}
                >
                  * 실제 수익은 건물 조건, 일조량, 전력 사용 패턴 등에 따라 달라질 수 있습니다
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 진행 프로세스 */}
      <section style={{ background: '#F7FAFD', padding: '120px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="mb-16 text-center">
            <h2 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '32px',
                fontWeight: '700',
                color: '#0F214A',
                lineHeight: '1.4',
                marginBottom: '16px'
              }}
            >
              진행 프로세스
            </h2>
            <p 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '20px',
                color: '#666',
                lineHeight: '1.6'
              }}
            >
              6단계로 완성되는 솔라로지스리더 프로젝트
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {processSteps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up">
                <div
                  className="text-center p-6"
                  style={{
                    background: 'white',
                    borderRadius: '20px',
                    border: '1px solid rgba(15, 33, 74, 0.1)',
                    boxShadow: '0 4px 16px rgba(15, 33, 74, 0.04)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    minHeight: '220px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(15, 33, 74, 0.12)';
                    e.currentTarget.style.borderColor = '#FF6B3D';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(15, 33, 74, 0.04)';
                    e.currentTarget.style.borderColor = 'rgba(15, 33, 74, 0.1)';
                  }}
                >
                  <div 
                    className="mx-auto mb-4"
                    style={{
                      width: '56px',
                      height: '56px',
                      background: 'linear-gradient(135deg, #FF6B3D, #FF8C3D)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 6px 20px rgba(255, 107, 61, 0.3)'
                    }}
                  >
                    <span 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '18px',
                        fontWeight: '700',
                        color: 'white'
                      }}
                    >
                      {step.step}
                    </span>
                  </div>

                  <h3 
                    className="mb-2"
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '20px',
                      fontWeight: '700',
                      color: '#0F214A'
                    }}
                  >
                    {step.title}
                  </h3>

                  <p 
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '16px',
                      color: '#666',
                      lineHeight: '1.5'
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: 'linear-gradient(135deg, #0F214A 0%, #273b82 100%)', padding: '120px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 
              className="text-white mb-8"
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '48px',
                fontWeight: '700',
                lineHeight: '1.4'
              }}
            >
              솔라로지스리더 무료 상담 신청
            </h2>

            <p 
              className="text-white mb-12"
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '18px',
                lineHeight: '1.7',
                opacity: 0.9
              }}
            >
              물류센터 지붕을 활용한 수익 창출, 지금 바로 시작하세요
            </p>

            <button
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '18px',
                fontWeight: '700',
                padding: '20px 48px',
                background: 'linear-gradient(135deg, #FF6B3D, #FF8C3D)',
                color: 'white',
                border: 'none',
                borderRadius: '100px',
                cursor: 'pointer',
                boxShadow: '0 12px 32px rgba(255, 107, 61, 0.4)',
                transition: 'all 0.3s ease'
              }}
            >
              무료 상담 신청하기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}