import { Car, TrendingUp, DollarSign, Shield, Leaf, Sun, Zap, Users, CheckCircle2, Umbrella } from "lucide-react";
import { SubNavigation } from "../components/SubNavigation";
import { PageHero } from "../components/PageHero";
import { ScrollReveal } from "../components/ScrollReveal";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface SolaroParkingProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function SolaroParking({ onNavigate, currentPage }: SolaroParkingProps) {
  // 솔라파킹 특징
  const features = [
    {
      icon: Car,
      title: "주차장 활용",
      description: "기존 주차 공간을 그대로 유지하며 태양광 발전",
      color: "#FF6B3D"
    },
    {
      icon: Umbrella,
      title: "그늘막 효과",
      description: "여름철 차량 내부 온도 하강 및 쾌적성 향상",
      color: "#0F214A"
    },
    {
      icon: Zap,
      title: "전기차 충전",
      description: "태양광 발전으로 전기차 충전 인프라 구축",
      color: "#FF6B3D"
    },
    {
      icon: Leaf,
      title: "친환경 이미지",
      description: "ESG 경영 실천 및 친환경 기업 이미지 제고",
      color: "#0F214A"
    }
  ];

  // 솔라파킹 장점
  const advantages = [
    {
      title: "공간 활용 극대화",
      description: "주차 기능 유지하며 발전소 운영",
      icon: Car,
      stat: "이중 활용"
    },
    {
      title: "방문객 만족도 향상",
      description: "그늘막 제공으로 쾌적한 주차 환경",
      icon: Umbrella,
      stat: "만족도 UP"
    },
    {
      title: "전기요금 절감",
      description: "자가소비를 통한 즉각적인 비용 절감",
      icon: DollarSign,
      stat: "최대 30%"
    },
    {
      title: "전기차 충전 수익",
      description: "충전 인프라로 추가 수익 창출",
      icon: Zap,
      stat: "추가 수익"
    }
  ];

  // 적용 가능 대상
  const eligibleSites = [
    { 
      title: "대형마트 주차장", 
      description: "넓은 주차 공간을 활용한 대규모 발전",
      icon: "🏬"
    },
    { 
      title: "공공기관 주차장", 
      description: "관공서, 학교 등 공공시설 주차장",
      icon: "🏛️"
    },
    { 
      title: "기업 사옥 주차장", 
      description: "임직원 주차장 및 방문객 주차장",
      icon: "🏢"
    },
    { 
      title: "공항 주차장", 
      description: "장기 주차장 및 단기 주차장",
      icon: "✈️"
    },
    { 
      title: "휴게소 주차장", 
      description: "고속도로 휴게소 및 졸음쉼터",
      icon: "🚗"
    },
    { 
      title: "아파트 주차장", 
      description: "공동주택 공용 주차 공간",
      icon: "🏘️"
    }
  ];

  // 시스템 구성
  const systemComponents = [
    {
      title: "캐노피 구조물",
      description: "내구성 강한 철골 구조물로 20년 이상 사용",
      features: ["내풍 설계", "적설 하중 고려", "부식 방지 도장"]
    },
    {
      title: "태양광 모듈",
      description: "고효율 모듈로 최대 발전량 확보",
      features: ["A급 제조사", "25년 보증", "고효율 인증"]
    },
    {
      title: "전기차 충전기",
      description: "태양광 연계 전기차 충전 인프라",
      features: ["급속 충전", "복수 충전", "스마트 관리"]
    },
    {
      title: "모니터링 시스템",
      description: "실시간 발전량 및 충전 현황 모니터링",
      features: ["원격 관리", "고장 감지", "통계 분석"]
    }
  ];

  // 설치 프로세스
  const installProcess = [
    {
      step: "01",
      title: "현장 조사",
      description: "주차장 면적, 차량 동선, 구조 검토"
    },
    {
      step: "02",
      title: "설계",
      description: "캐노피 구조 설계 및 배치 계획"
    },
    {
      step: "03",
      title: "인허가",
      description: "건축 허가 및 전기사업 허가"
    },
    {
      step: "04",
      title: "시공",
      description: "구조물 설치 및 모듈 시공"
    },
    {
      step: "05",
      title: "충전기 설치",
      description: "전기차 충전 인프라 구축"
    },
    {
      step: "06",
      title: "운영",
      description: "발전 및 충전 서비스 운영"
    }
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <PageHero
        badge={{ text: "SOLAR PARKING", color: "#FF6B3D" }}
        title="솔라파킹 (주차장태양광)"
        description="주차장을 스마트 에너지 공간으로. 주차 기능은 그대로 유지하면서 태양광 발전과 전기차 충전 인프라를 더하는 혁신적인 솔루션"
      />

      {/* Sub Navigation */}
      <SubNavigation category="business" currentPage={currentPage} onNavigate={onNavigate} />

      {/* 솔라파킹 소개 */}
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
                    주차장 태양광 발전
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
                  주차하면서 발전합니다
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
                  기존 주차장에 태양광 캐노피를 설치하여 발전소로 활용합니다. 주차 공간은 그대로 유지하면서 전기를 생산하고, 여름철 그늘막 제공과 전기차 충전 인프라까지 구축할 수 있습니다.
                </p>

                <div className="grid grid-cols-3 gap-4">
                  <div
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '16px',
                      padding: '20px',
                      backdropFilter: 'blur(10px)',
                      textAlign: 'center'
                    }}
                  >
                    <p 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '28px',
                        fontWeight: '700',
                        color: '#FF6B3D',
                        marginBottom: '4px'
                      }}
                    >
                      100%
                    </p>
                    <p 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '14px',
                        color: 'rgba(255, 255, 255, 0.9)'
                      }}
                    >
                      공간활용
                    </p>
                  </div>

                  <div
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '16px',
                      padding: '20px',
                      backdropFilter: 'blur(10px)',
                      textAlign: 'center'
                    }}
                  >
                    <p 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '28px',
                        fontWeight: '700',
                        color: '#FF6B3D',
                        marginBottom: '4px'
                      }}
                    >
                      -15℃
                    </p>
                    <p 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '14px',
                        color: 'rgba(255, 255, 255, 0.9)'
                      }}
                    >
                      차량온도
                    </p>
                  </div>

                  <div
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '16px',
                      padding: '20px',
                      backdropFilter: 'blur(10px)',
                      textAlign: 'center'
                    }}
                  >
                    <p 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '28px',
                        fontWeight: '700',
                        color: '#FF6B3D',
                        marginBottom: '4px'
                      }}
                    >
                      EV
                    </p>
                    <p 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '14px',
                        color: 'rgba(255, 255, 255, 0.9)'
                      }}
                    >
                      충전가능
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
                  src="https://images.unsplash.com/photo-1732465093305-16d0defd04d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhcmtpbmclMjBjYW5vcHl8ZW58MXx8fHwxNzYzNjAzNjM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="솔라파킹"
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
              솔라파킹 핵심 특징
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
              주차장에 최적화된 4가지 핵심 가치
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
                    cursor: 'pointer',
                    minHeight: '300px'
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

      {/* 솔라파킹 장점 */}
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
              솔라파킹의 장점
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
              주차장이 스마트 에너지 공간으로 진화합니다
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

      {/* 적용 가능 대상 */}
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
              적용 가능 대상
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
              다양한 주차 공간에 설치 가능합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eligibleSites.map((site, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up">
                <div
                  style={{
                    background: 'white',
                    borderRadius: '24px',
                    padding: '32px',
                    border: '1px solid rgba(15, 33, 74, 0.1)',
                    boxShadow: '0 8px 32px rgba(15, 33, 74, 0.08)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    minHeight: '180px'
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
                  <div className="flex items-start gap-4">
                    <span style={{ fontSize: '40px' }}>{site.icon}</span>
                    <div>
                      <h3 
                        className="mb-2"
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '24px',
                          fontWeight: '700',
                          color: '#0F214A'
                        }}
                      >
                        {site.title}
                      </h3>
                      <p 
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '18px',
                          color: '#666',
                          lineHeight: '1.6'
                        }}
                      >
                        {site.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 시스템 구성 */}
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
              시스템 구성
            </h2>
            <p 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '20px',
                color: '#666',
                lineHeight: '1.6'
              }}
            >
              검증된 장비로 완성되는 솔라파킹 시스템
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {systemComponents.map((component, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up">
                <div
                  style={{
                    background: 'white',
                    borderRadius: '24px',
                    padding: '32px',
                    border: '1px solid rgba(15, 33, 74, 0.1)',
                    boxShadow: '0 8px 32px rgba(15, 33, 74, 0.08)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    minHeight: '320px'
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
                  <h3 
                    className="mb-3"
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '24px',
                      fontWeight: '700',
                      color: '#0F214A'
                    }}
                  >
                    {component.title}
                  </h3>

                  <p 
                    className="mb-4"
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '18px',
                      color: '#666',
                      lineHeight: '1.6'
                    }}
                  >
                    {component.description}
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {component.features.map((feature, i) => (
                      <li 
                        key={i}
                        className="flex items-center gap-2 mb-2"
                      >
                        <CheckCircle2 size={16} style={{ color: '#FF6B3D', flexShrink: 0 }} />
                        <span 
                          style={{
                            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                            fontSize: '16px',
                            color: '#666'
                          }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 설치 프로세스 */}
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
              설치 프로세스
            </h2>
            <p 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '20px',
                color: '#666',
                lineHeight: '1.6'
              }}
            >
              6단계로 완성되는 솔라파킹 프로젝트
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {installProcess.map((step, index) => (
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
              솔라파킹 무료 상담 신청
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
              주차장을 스마트 에너지 공간으로, 지금 시작하세요
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