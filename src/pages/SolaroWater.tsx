import { Droplets, TrendingUp, DollarSign, Shield, Leaf, Sun, Wind, Thermometer, CheckCircle2, Award } from "lucide-react";
import { SubNavigation } from "../components/SubNavigation";
import { PageHero } from "../components/PageHero";
import { ScrollReveal } from "../components/ScrollReveal";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface SolaroWaterProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function SolaroWater({ onNavigate, currentPage }: SolaroWaterProps) {
  // 수상 태양광 특징
  const features = [
    {
      icon: Droplets,
      title: "수면 활용",
      description: "저수지, 댐, 호수 등 유휴 수면 공간을 활용한 친환경 발전",
      color: "#FF6B3D"
    },
    {
      icon: Thermometer,
      title: "냉각 효과",
      description: "수면 냉각으로 일반 태양광 대비 10% 이상 발전효율 향상",
      color: "#0F214A"
    },
    {
      icon: Wind,
      title: "증발 억제",
      description: "수면 차폐로 연간 수분 증발량 50% 이상 감소",
      color: "#FF6B3D"
    },
    {
      icon: Leaf,
      title: "조류 발생 억제",
      description: "햇빛 차단으로 조류 및 녹조 발생 억제 효과",
      color: "#0F214A"
    }
  ];

  // 수상 태양광 장점
  const advantages = [
    {
      title: "육상 대비 높은 발전 효율",
      description: "수면 냉각 효과로 10-15% 발전량 증가",
      icon: TrendingUp
    },
    {
      title: "토지 매입 비용 절감",
      description: "수면 사용료로 토지 매입비 절감 가능",
      icon: DollarSign
    },
    {
      title: "환경 보호 효과",
      description: "수질 개선 및 수온 상승 억제",
      icon: Leaf
    },
    {
      title: "장기 운영 안정성",
      description: "부식 방지 특수 소재로 20년 이상 운영",
      icon: Shield
    }
  ];

  // 적용 가능 대상
  const eligibleSites = [
    { title: "농업용 저수지", description: "전국 17,000개 이상의 농업용 저수지" },
    { title: "댐 및 호수", description: "다목적댐, 발전용댐 등 대형 수면" },
    { title: "산업용 저수지", description: "산업단지 내 용수 공급용 저수지" },
    { title: "골프장 연못", description: "골프장 내부 조경용 연못 및 저수지" },
    { title: "정수장 저류지", description: "정수장 및 하수처리장 저류지" },
    { title: "양식장 수면", description: "수산 양식장 수면 공간 활용" }
  ];

  // 시공 프로세스
  const constructionProcess = [
    {
      step: "01",
      title: "현장 조사",
      description: "수면 면적, 수심, 수질 등 설치 환경 조사"
    },
    {
      step: "02",
      title: "구조 설계",
      description: "부유식 구조물 설계 및 계류 시스템 설계"
    },
    {
      step: "03",
      title: "인허가",
      description: "수면 사용 허가 및 전기사업 허가 취득"
    },
    {
      step: "04",
      title: "부유체 제작",
      description: "내구성 우수한 HDPE 부유체 제작"
    },
    {
      step: "05",
      title: "현장 시공",
      description: "부유체 설치 및 태양광 모듈 시공"
    },
    {
      step: "06",
      title: "계통 연계",
      description: "전력 계통 연계 및 운영 시작"
    }
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <PageHero
        badge={{ text: "SOLAR WATER", color: "#FF6B3D" }}
        title="솔라워터 (수상태양광)"
        description="저수지와 댐의 수면을 활용한 친환경 수상 태양광 발전소. 냉각 효과로 높은 발전 효율을 실현하고 수질 개선 효과까지 더하는 혁신적인 에너지 솔루션"
      />

      {/* Sub Navigation */}
      <SubNavigation category="business" currentPage={currentPage} onNavigate={onNavigate} />

      {/* 수상 태양광 소개 */}
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
                    수상 태양광 발전
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
                  물 위에서 만드는 청정 에너지
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
                  저수지와 댐의 유휴 수면을 활용하여 태양광 발전소를 구축합니다. 수면 냉각 효과로 일반 육상 태양광보다 10% 이상 높은 발전 효율을 실현하며, 수질 개선 및 증발 억제 효과도 함께 제공합니다.
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
                      +10%
                    </p>
                    <p 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '14px',
                        color: 'rgba(255, 255, 255, 0.9)'
                      }}
                    >
                      발전효율
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
                      -50%
                    </p>
                    <p 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '14px',
                        color: 'rgba(255, 255, 255, 0.9)'
                      }}
                    >
                      수분증발
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
                      20년+
                    </p>
                    <p 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '14px',
                        color: 'rgba(255, 255, 255, 0.9)'
                      }}
                    >
                      내구성
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
                  src="https://images.unsplash.com/photo-1623433969778-b43223786147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9hdGluZyUyMHNvbGFyJTIwd2F0ZXJ8ZW58MXx8fHwxNzYzNjAzNjM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="수상 태양광"
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
              수상 태양광 핵심 특징
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
              물 위에서만 가능한 4가지 특별한 가치
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

      {/* 수상 태양광 장점 */}
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
              육상 태양광 대비 장점
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
              수상 태양광만의 차별화된 경쟁력
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
                    minHeight: '280px'
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
                      width: '70px',
                      height: '70px',
                      background: 'linear-gradient(135deg, #FF6B3D, #FF8C3D)',
                      borderRadius: '18px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 24px rgba(255, 107, 61, 0.3)'
                    }}
                  >
                    <advantage.icon size={36} style={{ color: 'white' }} />
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
              다양한 수면 공간에 설치 가능합니다
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
                    <div 
                      style={{
                        width: '12px',
                        height: '12px',
                        background: '#FF6B3D',
                        borderRadius: '50%',
                        marginTop: '8px',
                        flexShrink: 0
                      }}
                    />
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

      {/* 시공 프로세스 */}
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
              시공 프로세스
            </h2>
            <p 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '20px',
                color: '#666',
                lineHeight: '1.6'
              }}
            >
              전문적인 6단계 수상 태양광 시공 과정
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {constructionProcess.map((step, index) => (
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
              솔라워터 무료 상담 신청
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
              저수지 수면을 활용한 친환경 발전소, 지금 시작하세요
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