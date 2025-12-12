import { Building, TrendingUp, DollarSign, Zap, Shield, Users, CheckCircle2, Award, Clock, Target, Leaf, Sun } from "lucide-react";
import { SubNavigation } from "../components/SubNavigation";
import { PageHero } from "../components/PageHero";
import { ScrollReveal } from "../components/ScrollReveal";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface SolaroGroundProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function SolaroGround({ onNavigate, currentPage }: SolaroGroundProps) {
  // 솔라오 특징
  const features = [
    {
      icon: DollarSign,
      title: "초기 투자 0원",
      description: "설치비용 전액 무상 지원으로 부담 없이 시작",
      color: "#FF6B3D"
    },
    {
      icon: TrendingUp,
      title: "전기요금 절감",
      description: "자가소비를 통한 즉각적인 전기요금 절감 효과",
      color: "#0F214A"
    },
    {
      icon: Shield,
      title: "장기 수익 보장",
      description: "20년간 안정적인 발전수익 공유 시스템",
      color: "#FF6B3D"
    },
    {
      icon: Leaf,
      title: "친환경 기업 이미지",
      description: "ESG 경영과 탄소중립 실천으로 기업가치 향상",
      color: "#0F214A"
    }
  ];

  // 수익 모델
  const revenueModel = [
    {
      title: "전기요금 절감",
      description: "태양광으로 생산한 전기를 자가소비하여 전기요금 절감",
      percentage: "최대 30%",
      icon: Zap
    },
    {
      title: "발전수익 공유",
      description: "남은 전력은 한전에 판매하여 수익 창출 및 공유",
      percentage: "20년간",
      icon: DollarSign
    },
    {
      title: "정부 지원금",
      description: "REC 가중치 및 각종 인센티브 혜택 적용",
      percentage: "추가 수익",
      icon: Award
    }
  ];

  // 설치 가능 대상
  const eligibleTargets = [
    {
      title: "산업단지 물류센터",
      description: "넓은 지붕 면적을 활용한 대규모 발전소 구축",
      image: "warehouse building roof"
    },
    {
      title: "공장 및 제조시설",
      description: "높은 전력 사용량으로 자가소비 효율 극대화",
      image: "factory solar panels"
    },
    {
      title: "유통센터",
      description: "24시간 가동 시설의 전기요금 절감 효과 극대화",
      image: "distribution center"
    },
    {
      title: "물류터미널",
      description: "대형 지붕 활용으로 높은 발전용량 확보",
      image: "logistics terminal"
    }
  ];

  // 진행 프로세스
  const processSteps = [
    {
      step: "01",
      title: "무료 현장조사",
      description: "지붕 면적, 구조, 일조량 등 설치 가능성 검토"
    },
    {
      step: "02",
      title: "수익성 분석",
      description: "예상 발전량 및 절감액 산정, 수익 시뮬레이션"
    },
    {
      step: "03",
      title: "계약 체결",
      description: "수익공유 비율 협의 및 20년 장기 계약"
    },
    {
      step: "04",
      title: "무상 설치",
      description: "전액 무상으로 태양광 발전소 설치 및 준공"
    },
    {
      step: "05",
      title: "발전 시작",
      description: "즉시 전기요금 절감 효과 및 수익 발생"
    },
    {
      step: "06",
      title: "운영 관리",
      description: "20년간 유지보수 및 모니터링 서비스 제공"
    }
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <PageHero
        badge={{ text: "SOLAR O", color: "#FF6B3D" }}
        title="솔라오 (그라운드)"
        description="초기 투자 없이 시작하는 태양광 발전. 산업단지 물류센터의 넓은 지붕을 활용하여 전기요금 절감과 안정적인 수익을 동시에 실현하는 수익공유형 무상설치 프로그램"
      />

      {/* Sub Navigation */}
      <SubNavigation category="business" currentPage={currentPage} onNavigate={onNavigate} />

      {/* 솔라오 소개 */}
      <section style={{ background: 'linear-gradient(135deg, #0F214A 0%, #273b82 100%)', padding: '100px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal direction="up">
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
                  SOLAR O GROUND
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <h2 
                className="text-white mb-6"
                style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '50px',
                  fontWeight: '700',
                  lineHeight: '1.4'
                }}
              >
                초기비용 0원, 수익은 20년간 보장
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <p 
                className="text-white"
                style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '22px',
                  fontWeight: '500',
                  lineHeight: '1.6',
                  opacity: 0.9
                }}
              >
                타이런트가 전액 투자하여 태양광 발전소를 설치하고, 발전수익을 건물주와 공유합니다. 초기 투자 부담 없이 전기요금을 절감하고 안정적인 수익을 창출하세요.
              </p>
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
              솔라오 핵심 특징
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
              왜 솔라오를 선택해야 할까요?
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

      {/* 수익 모델 */}
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
                REVENUE MODEL
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
              3가지 수익 구조
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
              전기요금 절감 + 발전수익 공유 + 정부 지원금
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {revenueModel.map((model, index) => (
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
                    <model.icon size={40} style={{ color: 'white' }} />
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
                        fontSize: '18px',
                        fontWeight: '700',
                        color: '#FF6B3D'
                      }}
                    >
                      {model.percentage}
                    </span>
                  </div>

                  <h3 
                    className="mb-3"
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '28px',
                      fontWeight: '700',
                      color: '#0F214A'
                    }}
                  >
                    {model.title}
                  </h3>

                  <p 
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '20px',
                      color: '#666',
                      lineHeight: '1.6'
                    }}
                  >
                    {model.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 설치 가능 대상 */}
      <section style={{ background: 'white', padding: '120px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="mb-16">
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
                ELIGIBLE TARGETS
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
              설치 가능 대상
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
              이런 건물에 최적화되어 있습니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eligibleTargets.map((target, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up">
                <div
                  className="overflow-hidden"
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
                  <div style={{ padding: '32px' }}>
                    <div 
                      className="mb-4"
                      style={{
                        width: '60px',
                        height: '60px',
                        background: 'linear-gradient(135deg, #0F214A, #273b82)',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Building size={32} style={{ color: 'white' }} />
                    </div>

                    <h3 
                      className="mb-2"
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '24px',
                        fontWeight: '700',
                        color: '#0F214A'
                      }}
                    >
                      {target.title}
                    </h3>

                    <p 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '18px',
                        color: '#666',
                        lineHeight: '1.6'
                      }}
                    >
                      {target.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
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
              6단계로 완성되는 솔라오 프로젝트
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
              솔라오 무료 상담 신청
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
              지금 신청하시면 현장 조사부터 수익성 분석까지 무료로 제공해드립니다
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