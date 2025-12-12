import { Monitor, BarChart3, Zap, AlertTriangle, Clock, TrendingUp, Shield, Smartphone, Bell, LineChart, Activity, CheckCircle2 } from "lucide-react";
import { SubNavigation } from "../components/SubNavigation";
import { PageHero } from "../components/PageHero";
import { ScrollReveal } from "../components/ScrollReveal";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface SolaroMonitoringProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function SolaroMonitoring({ onNavigate, currentPage }: SolaroMonitoringProps) {
  // 모니터링 시스템 특징
  const features = [
    {
      icon: Monitor,
      title: "실시간 모니터링",
      description: "발전량, 효율, 상태를 실시간으로 확인",
      color: "#FF6B3D"
    },
    {
      icon: Bell,
      title: "즉각 알림",
      description: "이상 발생 시 즉시 SMS/카카오톡 알림",
      color: "#0F214A"
    },
    {
      icon: LineChart,
      title: "통계 분석",
      description: "일/월/년 단위 발전량 통계 및 비교",
      color: "#FF6B3D"
    },
    {
      icon: Smartphone,
      title: "모바일 지원",
      description: "PC, 스마트폰, 태블릿 어디서나 접속",
      color: "#0F214A"
    }
  ];

  // 모니터링 항목
  const monitoringItems = [
    {
      icon: Zap,
      title: "발전량 모니터링",
      items: ["실시간 발전량", "누적 발전량", "예상 발전량 대비 실적", "시간대별 발전 추이"]
    },
    {
      icon: Activity,
      title: "설비 상태 감시",
      items: ["인버터 작동 상태", "접속반 온도", "통신 상태", "차단기 상태"]
    },
    {
      icon: AlertTriangle,
      title: "이상 감지",
      items: ["저발전 경보", "설비 고장 감지", "통신 두절 알림", "화재 감지"]
    },
    {
      icon: BarChart3,
      title: "수익 분석",
      items: ["예상 수익 계산", "전력 판매 내역", "월별 수익 비교", "투자 회수 기간"]
    }
  ];

  // 모니터링 시스템 장점
  const advantages = [
    {
      title: "고장 조기 발견",
      description: "이상 징후를 조기에 감지하여 손실 최소화",
      stat: "손실 -80%"
    },
    {
      title: "최적 운영 관리",
      description: "데이터 기반 최적화로 발전 효율 향상",
      stat: "효율 +15%"
    },
    {
      title: "유지보수 효율화",
      description: "원격 진단으로 현장 방문 횟수 감소",
      stat: "비용 -50%"
    },
    {
      title: "투명한 정보 제공",
      description: "투자자에게 실시간 투명한 정보 제공",
      stat: "신뢰도 UP"
    }
  ];

  // 제공 기능
  const systemFeatures = [
    {
      category: "실시간 모니터링",
      features: [
        "실시간 발전량 및 누적 발전량",
        "인버터별 상세 모니터링",
        "날씨 정보 연동",
        "실시간 수익 계산"
      ]
    },
    {
      category: "통계 및 분석",
      features: [
        "일/월/년 단위 통계",
        "예상 발전량 대비 비교",
        "설비별 효율 분석",
        "기간별 수익 비교"
      ]
    },
    {
      category: "알림 서비스",
      features: [
        "SMS 알림 서비스",
        "카카오톡 알림",
        "이메일 리포트",
        "맞춤형 알림 설정"
      ]
    },
    {
      category: "리포트 생성",
      features: [
        "월간 운영 보고서",
        "연간 실적 보고서",
        "투자자용 리포트",
        "Excel 데이터 다운로드"
      ]
    }
  ];

  // 도입 프로세스
  const implementationProcess = [
    {
      step: "01",
      title: "현장 조사",
      description: "설비 현황 및 통신 환경 확인"
    },
    {
      step: "02",
      title: "시스템 설계",
      description: "발전소 규모에 맞는 시스템 설계"
    },
    {
      step: "03",
      title: "장비 설치",
      description: "계측 장비 및 통신 장비 설치"
    },
    {
      step: "04",
      title: "시스템 구축",
      description: "모니터링 플랫폼 구축 및 연동"
    },
    {
      step: "05",
      title: "테스트",
      description: "데이터 수집 및 알림 테스트"
    },
    {
      step: "06",
      title: "운영 시작",
      description: "24시간 모니터링 서비스 시작"
    }
  ];

  // 가격 플랜 (예시)
  const pricingPlans = [
    {
      name: "베이직",
      capacity: "100kW 이하",
      price: "월 50,000원",
      features: [
        "실시간 모니터링",
        "기본 통계",
        "SMS 알림 (월 50건)",
        "월간 리포트"
      ]
    },
    {
      name: "스탠다드",
      capacity: "100~500kW",
      price: "월 150,000원",
      features: [
        "실시간 모니터링",
        "고급 통계 분석",
        "SMS 알림 (월 200건)",
        "카카오톡 알림",
        "월간/연간 리포트",
        "전용 관리자"
      ],
      recommended: true
    },
    {
      name: "프리미엄",
      capacity: "500kW 이상",
      price: "별도 문의",
      features: [
        "실시간 모니터링",
        "AI 분석 리포트",
        "무제한 알림",
        "맞춤형 대시보드",
        "전담 관리팀",
        "24시간 콜센터"
      ]
    }
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <PageHero
        badge={{ text: "MONITORING SYSTEM", color: "#FF6B3D" }}
        title="태양광 모니터링 시스템"
        description="24시간 실시간으로 태양광 발전소를 감시하고 관리하는 스마트 모니터링 솔루션. 발전량부터 설비 상태까지 모든 것을 한눈에 확인하고 최적의 운영을 실현합니다"
      />

      {/* Sub Navigation */}
      <SubNavigation category="business" currentPage={currentPage} onNavigate={onNavigate} />

      {/* 모니터링 시스템 소개 */}
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
                    SMART MONITORING
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
                  언제 어디서나 발전소 현황을 한눈에
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
                  실시간 데이터 수집과 지능형 분석으로 태양광 발전소를 완벽하게 관리합니다. PC와 모바일을 통해 언제 어디서나 발전소 상태를 확인하고 이상 발생 시 즉시 알림을 받으세요.
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
                      24/7
                    </p>
                    <p 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '14px',
                        color: 'rgba(255, 255, 255, 0.9)'
                      }}
                    >
                      실시간 감시
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
                      즉시
                    </p>
                    <p 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '14px',
                        color: 'rgba(255, 255, 255, 0.9)'
                      }}
                    >
                      알림 전송
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
                      AI
                    </p>
                    <p 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '14px',
                        color: 'rgba(255, 255, 255, 0.9)'
                      }}
                    >
                      분석 기술
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
                  src="https://images.unsplash.com/photo-1650530224492-f5a8b6e77fae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMG1vbml0b3JpbmclMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzYzNjA0MDY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="모니터링 시스템"
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
              모니터링 시스템 핵심 특징
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
              스마트한 관리를 위한 4가지 핵심 기능
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

      {/* 모니터링 항목 */}
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
                MONITORING ITEMS
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
              주요 모니터링 항목
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
              발전소의 모든 정보를 실시간으로 확인
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {monitoringItems.map((item, index) => (
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
                    minHeight: '340px'
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
                    <item.icon size={36} style={{ color: 'white' }} />
                  </div>

                  <h3 
                    className="mb-4"
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '24px',
                      fontWeight: '700',
                      color: '#0F214A'
                    }}
                  >
                    {item.title}
                  </h3>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {item.items.map((subItem, i) => (
                      <li 
                        key={i}
                        className="flex items-start gap-2 mb-2"
                      >
                        <CheckCircle2 size={16} style={{ color: '#FF6B3D', flexShrink: 0, marginTop: '4px' }} />
                        <span 
                          style={{
                            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                            fontSize: '16px',
                            color: '#666',
                            lineHeight: '1.5'
                          }}
                        >
                          {subItem}
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

      {/* 시스템 장점 */}
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
              모니터링 시스템 도입 효과
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
              데이터 기반 최적 관리로 수익 극대화
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up">
                <div
                  className="text-center p-8"
                  style={{
                    background: 'linear-gradient(135deg, #0F214A, #273b82)',
                    borderRadius: '24px',
                    boxShadow: '0 8px 32px rgba(15, 33, 74, 0.15)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    minHeight: '280px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 16px 48px rgba(15, 33, 74, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(15, 33, 74, 0.15)';
                  }}
                >
                  <div 
                    className="inline-block px-5 py-2 mb-4"
                    style={{
                      background: 'rgba(255, 107, 61, 0.2)',
                      borderRadius: '100px',
                      border: '2px solid rgba(255, 107, 61, 0.4)'
                    }}
                  >
                    <span 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '20px',
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
                      color: 'white'
                    }}
                  >
                    {advantage.title}
                  </h3>

                  <p 
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '18px',
                      color: 'rgba(255, 255, 255, 0.85)',
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

      {/* 제공 기능 */}
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
              제공 기능
            </h2>
            <p 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '20px',
                color: '#666',
                lineHeight: '1.6'
              }}
            >
              체계적인 관리를 위한 통합 솔루션
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {systemFeatures.map((feature, index) => (
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
                  <h3 
                    className="mb-4"
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '22px',
                      fontWeight: '700',
                      color: '#0F214A'
                    }}
                  >
                    {feature.category}
                  </h3>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {feature.features.map((item, i) => (
                      <li 
                        key={i}
                        className="flex items-start gap-2 mb-3"
                      >
                        <div 
                          style={{
                            width: '6px',
                            height: '6px',
                            background: '#FF6B3D',
                            borderRadius: '50%',
                            marginTop: '8px',
                            flexShrink: 0
                          }}
                        />
                        <span 
                          style={{
                            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                            fontSize: '16px',
                            color: '#666',
                            lineHeight: '1.6'
                          }}
                        >
                          {item}
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

      {/* 가격 플랜 */}
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
              이용 요금제
            </h2>
            <p 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '20px',
                color: '#666',
                lineHeight: '1.6'
              }}
            >
              발전소 규모에 맞는 최적의 플랜을 선택하세요
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up">
                <div
                  style={{
                    background: plan.recommended ? 'linear-gradient(135deg, #0F214A, #273b82)' : 'white',
                    borderRadius: '24px',
                    padding: '40px',
                    border: plan.recommended ? '3px solid #FF6B3D' : '2px solid rgba(15, 33, 74, 0.1)',
                    boxShadow: plan.recommended ? '0 16px 48px rgba(255, 107, 61, 0.2)' : '0 8px 32px rgba(15, 33, 74, 0.08)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    position: 'relative',
                    minHeight: '500px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                    e.currentTarget.style.boxShadow = plan.recommended ? '0 24px 64px rgba(255, 107, 61, 0.3)' : '0 16px 48px rgba(15, 33, 74, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = plan.recommended ? '0 16px 48px rgba(255, 107, 61, 0.2)' : '0 8px 32px rgba(15, 33, 74, 0.08)';
                  }}
                >
                  {plan.recommended && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '-16px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'linear-gradient(135deg, #FF6B3D, #FF8C3D)',
                        color: 'white',
                        padding: '8px 24px',
                        borderRadius: '100px',
                        fontSize: '14px',
                        fontWeight: '700',
                        boxShadow: '0 4px 16px rgba(255, 107, 61, 0.4)'
                      }}
                    >
                      추천
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 
                      className="mb-2"
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '28px',
                        fontWeight: '700',
                        color: plan.recommended ? 'white' : '#0F214A'
                      }}
                    >
                      {plan.name}
                    </h3>
                    <p 
                      className="mb-4"
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '16px',
                        color: plan.recommended ? 'rgba(255, 255, 255, 0.8)' : '#666'
                      }}
                    >
                      {plan.capacity}
                    </p>
                    <p 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '36px',
                        fontWeight: '700',
                        color: plan.recommended ? '#FF6B3D' : '#0F214A'
                      }}
                    >
                      {plan.price}
                    </p>
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {plan.features.map((feature, i) => (
                      <li 
                        key={i}
                        className="flex items-start gap-3 mb-3"
                      >
                        <CheckCircle2 
                          size={20} 
                          style={{ 
                            color: plan.recommended ? '#FF6B3D' : '#0F214A', 
                            flexShrink: 0,
                            marginTop: '2px'
                          }} 
                        />
                        <span 
                          style={{
                            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                            fontSize: '16px',
                            color: plan.recommended ? 'rgba(255, 255, 255, 0.9)' : '#666',
                            lineHeight: '1.6'
                          }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    style={{
                      width: '100%',
                      marginTop: '32px',
                      padding: '16px',
                      background: plan.recommended ? 'linear-gradient(135deg, #FF6B3D, #FF8C3D)' : '#0F214A',
                      color: 'white',
                      border: 'none',
                      borderRadius: '100px',
                      fontSize: '16px',
                      fontWeight: '700',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    문의하기
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 도입 프로세스 */}
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
              도입 프로세스
            </h2>
            <p 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '20px',
                color: '#666',
                lineHeight: '1.6'
              }}
            >
              6단계로 완성되는 모니터링 시스템
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {implementationProcess.map((step, index) => (
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
              모니터링 시스템 무료 상담
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
              발전소 규모에 맞는 최적의 모니터링 솔루션을 제안해드립니다
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