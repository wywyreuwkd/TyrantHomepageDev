import { Shield, FileText, Handshake, CheckCircle2, DollarSign, Clock, TrendingUp, Flame, Zap, Droplets, Calendar, User, Phone, Mail } from "lucide-react";
import { SubNavigation } from "../components/SubNavigation";
import { PageHero } from "../components/PageHero";
import { ScrollReveal } from "../components/ScrollReveal";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface BusinessInsuranceProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function BusinessInsurance({ onNavigate, currentPage }: BusinessInsuranceProps) {
  const growthData = [
    { year: "2019", amount: 60 },
    { year: "2020", amount: 70 },
    { year: "2021", amount: 82 },
    { year: "2022", amount: 90 }
  ];

  const benefits = [
    {
      number: "혜택 거듭 1",
      title: "특별 모집 클래스",
      subtitle: "태양광발전 손해배상, 배상책임 외에도 가입자 맞춤 인증장 보험 약관에 맞는 보험을 안내합니다.",
      highlight: "손해배상 보험료"
    },
    {
      number: "혜택 거듭 2",
      title: "자연재해 보호",
      subtitle: "화재·낙뢰·폭풍·태풍 등 모든 자연재해로부터 태양광 설비를 안전하게 보호합니다.",
      highlight: "전방위적 보험사고 보호",
      disasters: [
        { icon: Flame, label: "화재", color: "#FF6B3D" },
        { icon: Zap, label: "낙뢰/폭발", color: "#FFB800" },
        { icon: Droplets, label: "폭풍/태풍", color: "#0F214A" }
      ]
    },
    {
      number: "혜택 거듭 3",
      title: "비용 분할납",
      subtitle: "1년치 보험료를 한 번에 납부하지 마세요. 시작부터 비용부담 부담없이 분할납으로 계약합니다.",
      highlight: "비용부담 최소화 카렌더",
      features: ["시작 기준", "월 1회 납부", "부담 없는 비용", "분할 납부 가능"]
    }
  ];

  const requiredDocs = [
    "사업자등록증",
    "한국전력공사 연계신청확인증",
    "발전사업허가서 or 신고서",
    "사전재해협약확인서"
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <PageHero
        badge={{ text: "사업영역", color: "#FF6B3D" }}
        title="태양광 사무관리(보험)"
        description="회계, 세무, 보험까지 발전소 운영의 모든 행정 업무를 대행합니다."
      />

      {/* Sub Navigation */}
      <SubNavigation category="business" currentPage={currentPage} onNavigate={onNavigate} />

      {/* Growth Statistics */}
      <section style={{ background: 'white', padding: '120px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="mb-16">
                {/* B. 메인 타이틀 - 44px Bold */}
                <h2 
                  className="mb-4"
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '44px',
                    fontWeight: '700',
                    color: '#0F214A',
                    lineHeight: '1.4',
                    textAlign: 'left'
                  }}
                >
                  태양광 사업, 간편하게 관리합니다.
                </h2>
                {/* C. 타이틀 서브 카피 - 20px Medium */}
                <p 
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '20px',
                    fontWeight: '500',
                    color: '#666',
                    lineHeight: '1.6',
                    textAlign: 'left'
                  }}
                >
                  사업자의 최근 4년간 가입액 동향을 확인하세요. 간편한 절차로 계약부터 관리까지 <span style={{ color: '#8C8C8C' }}>(2019~2022년)</span>
                </p>
              </div>
            </ScrollReveal>

            {/* Chart */}
            <ScrollReveal delay={200}>
              <div 
                style={{
                  background: 'white',
                  borderRadius: '32px',
                  padding: '60px',
                  border: '1px solid rgba(15, 33, 74, 0.1)',
                  boxShadow: '0 8px 32px rgba(15, 33, 74, 0.08)',
                  position: 'relative'
                }}
              >
                {/* Chart Area */}
                <div className="relative" style={{ height: '400px' }}>
                  {/* Y-axis labels */}
                  <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between" style={{ width: '60px' }}>
                    {[100, 80, 60, 40, 20, 0].map((val, i) => (
                      <div 
                        key={i}
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '14px',
                          color: '#999',
                          textAlign: 'right',
                          paddingRight: '12px'
                        }}
                      >
                        {val}
                      </div>
                    ))}
                  </div>

                  {/* Chart bars */}
                  <div className="absolute left-16 right-16 top-0 bottom-12 flex items-end justify-around gap-8">
                    {growthData.map((data, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center">
                        <div className="relative w-full flex flex-col items-center" style={{ height: '100%', justifyContent: 'flex-end' }}>
                          {/* Bar */}
                          <div 
                            className="w-full relative"
                            style={{
                              height: `${data.amount}%`,
                              background: 'linear-gradient(to top, #FF6B3D, #FF8C3D)',
                              borderRadius: '12px 12px 0 0',
                              transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                              boxShadow: '0 -4px 20px rgba(255, 107, 61, 0.3)'
                            }}
                          >
                            {index === 3 && (
                              <div 
                                className="absolute -top-16 left-1/2 transform -translate-x-1/2"
                                style={{
                                  width: '100px',
                                  height: '100px',
                                  background: 'white',
                                  borderRadius: '50%',
                                  border: '4px solid #FF6B3D',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flexDirection: 'column',
                                  boxShadow: '0 8px 24px rgba(255, 107, 61, 0.3)',
                                  zIndex: 10
                                }}
                              >
                                <div 
                                  style={{
                                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                                    fontSize: '14px',
                                    color: '#666',
                                    marginBottom: '4px'
                                  }}
                                >
                                  비례금액
                                </div>
                                <div 
                                  style={{
                                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                                    fontSize: '24px',
                                    fontWeight: '700',
                                    color: '#FF6B3D'
                                  }}
                                >
                                  10배↑
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        {/* Year label */}
                        <div 
                          className="mt-3"
                          style={{
                            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                            fontSize: '16px',
                            fontWeight: '600',
                            color: '#0F214A'
                          }}
                        >
                          {data.year}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* X-axis labels */}
                  <div className="absolute left-16 right-16 bottom-0 flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div style={{ width: '24px', height: '4px', background: '#FF6B3D', borderRadius: '2px' }} />
                      <span style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '14px',
                        color: '#666'
                      }}>
                        계약금액
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div style={{ width: '24px', height: '4px', background: '#FFB800', borderRadius: '2px' }} />
                      <span style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '14px',
                        color: '#666'
                      }}>
                        비례금액
                      </span>
                    </div>
                  </div>

                  {/* Right Y-axis (억원) */}
                  <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-between" style={{ width: '60px' }}>
                    {[250000, 200000, 150000, 100000, 50000, 0].map((val, i) => (
                      <div 
                        key={i}
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '14px',
                          color: '#999',
                          textAlign: 'left',
                          paddingLeft: '12px'
                        }}
                      >
                        {val.toLocaleString()}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Insurance Title Banner */}
      <section style={{ background: '#F7FAFD', padding: '80px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <ScrollReveal>
            <div className="text-center">
              {/* B. 메인 타이틀 - 44px Bold */}
              <h2 
                className="mb-4"
                style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '44px',
                  fontWeight: '700',
                  color: '#0F214A',
                  lineHeight: '1.4'
                }}
              >
                태양광발전손해배상보험,
              </h2>
              {/* D. 섹션 제목 - 28px Bold (오렌지 배지 안) */}
              <div 
                className="inline-block px-8 py-3 mb-6"
                style={{
                  background: 'linear-gradient(135deg, #FF6B3D, #FF8C3D)',
                  borderRadius: '16px',
                  boxShadow: '0 8px 24px rgba(255, 107, 61, 0.3)'
                }}
              >
                <span 
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '28px',
                    fontWeight: '700',
                    color: 'white'
                  }}
                >
                  안전손해보험과 1만원대만 이야기 하는 이유!
                </span>
              </div>
              {/* E. 본문 설명 - 18px Regular */}
              <p 
                style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '18px',
                  fontWeight: '400',
                  color: '#666',
                  lineHeight: '1.6'
                }}
              >
                타이런트와 함께라면 보험계약도 쉽고 비교부터 무료 가입이 가능한 혜택과 기능 상품을 제공할 공급사와 처음부터 선택하여 기준 여행 임박 관련합니다
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits Cards */}
      <section style={{ background: 'white', padding: '120px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          {/* Optimized Insurance Design Section */}
          <ScrollReveal>
            <div className="mb-32">
              <div className="text-center mb-20">
                {/* B. 메인 타이틀 - 44px Bold */}
                <h2 
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '44px',
                    fontWeight: '700',
                    color: '#0F214A',
                    lineHeight: '1.4',
                    marginBottom: '16px'
                  }}
                >
                  최적화된 안정적 보험 설계
                </h2>
                {/* E. 본문 설명 - 18px Regular */}
                <p 
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '18px',
                    fontWeight: '400',
                    color: '#666',
                    lineHeight: '1.6'
                  }}
                >
                  베스트샵의 다양한 서비스를 경험해보세요!
                </p>
              </div>

              {/* 4 Cards Grid */}
              <div 
                className="grid md:grid-cols-2 gap-6"
                style={{
                  maxWidth: '1200px',
                  margin: '0 auto'
                }}
              >
                {[
                  {
                    title: "전문 보험 자문",
                    subtitle: "국내 최고 전문 보험중개사",
                    description: "국내 최고의 전문 보험중개사 자문에 따르면 지붕형태양광발전소에서 건물로 전이된 사례 없음.",
                    icon: Shield,
                    iconColor: "#0F214A",
                    bgGradient: "linear-gradient(135deg, #C5D3E8 0%, #D4E0F0 100%)"
                  },
                  {
                    title: "완벽한 리스크 차단",
                    subtitle: "최고 수준의 보험가입 설계",
                    description: "그럼에도 불구하고 국내 최고 수준의 보험가입 및 보장설계로 완벽하게 리스크 차단",
                    icon: CheckCircle2,
                    iconColor: "#273b82",
                    bgGradient: "linear-gradient(135deg, #D9E4F2 0%, #E6EEF7 100%)"
                  },
                  {
                    title: "건물주 우선 조건",
                    subtitle: "항상 유리한 보험 설계",
                    description: "어떤 경우에도 건물주에게 유리한 조건으로 보험설계를 진행합니다.",
                    icon: TrendingUp,
                    iconColor: "#15305A",
                    bgGradient: "linear-gradient(135deg, #E8EEF6 0%, #F0F4F9 100%)"
                  },
                  {
                    title: "무료 상담 서비스",
                    subtitle: "실시간 전문가 상담",
                    description: "간편한 1:1 맞춤 상담 서비스로 보험 가입부터 사후관리까지 완벽하게 지원합니다.",
                    icon: Phone,
                    iconColor: "#5A7BA8",
                    bgGradient: "linear-gradient(135deg, #F5F8FB 0%, #FAFCFD 100%)"
                  }
                ].map((card, index) => (
                  <div
                    key={index}
                    className="group"
                    style={{
                      background: card.bgGradient,
                      borderRadius: '24px',
                      padding: '48px 40px',
                      border: '1px solid rgba(15, 33, 74, 0.08)',
                      boxShadow: '0 4px 20px rgba(15, 33, 74, 0.06)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    {/* Decorative Element */}
                    <div 
                      style={{
                        position: 'absolute',
                        top: '-50px',
                        right: '-50px',
                        width: '150px',
                        height: '150px',
                        background: `radial-gradient(circle, ${card.iconColor}15 0%, transparent 70%)`,
                        transition: 'all 0.4s ease'
                      }}
                      className="group-hover:scale-150"
                    />

                    {/* Icon */}
                    <div 
                      className="mb-6"
                      style={{
                        position: 'relative',
                        zIndex: 1
                      }}
                    >
                      <div 
                        style={{
                          width: '80px',
                          height: '80px',
                          background: 'white',
                          borderRadius: '20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: `0 8px 24px ${card.iconColor}20`,
                          transition: 'all 0.4s ease'
                        }}
                        className="group-hover:scale-110"
                      >
                        <card.icon size={40} style={{ color: card.iconColor }} />
                      </div>
                    </div>

                    {/* Content */}
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      {/* D. 섹션 제목 - 28px Bold */}
                      <h3 
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '28px',
                          fontWeight: '700',
                          color: '#0F214A',
                          marginBottom: '12px',
                          lineHeight: '1.4'
                        }}
                      >
                        {card.title}
                      </h3>
                      {/* A. 상단 라벨 - 16px Bold */}
                      <p 
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '16px',
                          fontWeight: '700',
                          color: card.iconColor,
                          marginBottom: '20px'
                        }}
                      >
                        {card.subtitle}
                      </p>
                      {/* E. 본문 설명 - 18px Regular */}
                      <p 
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '18px',
                          fontWeight: '400',
                          color: '#666',
                          lineHeight: '1.6',
                          marginBottom: 0
                        }}
                      >
                        {card.description}
                      </p>
                    </div>

                    {/* Hover Indicator */}
                    <div 
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: card.iconColor,
                        transform: 'scaleX(0)',
                        transformOrigin: 'left',
                        transition: 'transform 0.4s ease'
                      }}
                      className="group-hover:scale-x-100"
                    />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-8 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up">
                <div className="text-center mb-6">
                  {/* A. 상단 라벨 - 16px Bold */}
                  <div 
                    className="inline-block px-6 py-2 mb-4"
                    style={{
                      background: 'white',
                      border: '2px solid #0F214A',
                      borderRadius: '100px'
                    }}
                  >
                    <span 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '16px',
                        fontWeight: '700',
                        color: '#0F214A'
                      }}
                    >
                      {benefit.number}
                    </span>
                  </div>
                </div>

                <div 
                  style={{
                    background: 'linear-gradient(135deg, #0F214A 0%, #273b82 100%)',
                    borderRadius: '32px',
                    padding: '48px',
                    color: 'white',
                    minHeight: '320px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Decorative gradient */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: '300px',
                      height: '300px',
                      background: 'radial-gradient(circle, rgba(255, 107, 61, 0.15) 0%, transparent 70%)',
                      pointerEvents: 'none'
                    }}
                  />

                  {/* D. 섹션 제목 - 28px Bold */}
                  <h3 
                    className="mb-4 text-center"
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '28px',
                      fontWeight: '700',
                      lineHeight: '1.4',
                      position: 'relative'
                    }}
                  >
                    {benefit.title}
                  </h3>

                  {/* E. 본문 설명 - 18px Regular */}
                  <p 
                    className="mb-6 text-center"
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '18px',
                      fontWeight: '400',
                      lineHeight: '1.6',
                      color: 'rgba(255, 255, 255, 0.9)',
                      position: 'relative'
                    }}
                  >
                    {benefit.subtitle}
                  </p>

                  {/* A. 상단 라벨 - 16px Bold */}
                  <div className="text-center mb-8">
                    <span 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '16px',
                        fontWeight: '700',
                        color: '#FF6B3D',
                        position: 'relative'
                      }}
                    >
                      {benefit.highlight}
                    </span>
                  </div>

                  {/* Disaster Icons */}
                  {benefit.disasters && (
                    <div className="flex justify-center gap-6 mt-4">
                      {benefit.disasters.map((disaster, dIndex) => (
                        <div 
                          key={dIndex}
                          className="text-center"
                          style={{
                            width: '100px'
                          }}
                        >
                          <div 
                            className="mx-auto mb-3"
                            style={{
                              width: '80px',
                              height: '80px',
                              background: 'rgba(255, 255, 255, 0.1)',
                              borderRadius: '20px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              backdropFilter: 'blur(10px)',
                              border: '1px solid rgba(255, 255, 255, 0.2)'
                            }}
                          >
                            <disaster.icon size={36} style={{ color: disaster.color }} />
                          </div>
                          {/* A. 상단 라벨 - 16px Bold */}
                          <div 
                            style={{
                              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                              fontSize: '16px',
                              fontWeight: '700',
                              color: 'rgba(255, 255, 255, 0.9)'
                            }}
                          >
                            {disaster.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Calendar Feature */}
                  {benefit.features && (
                    <div className="flex justify-center mt-6">
                      <div 
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          borderRadius: '20px',
                          padding: '32px',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          maxWidth: '400px',
                          width: '100%'
                        }}
                      >
                        {/* Calendar illustration */}
                        <div className="text-center mb-4">
                          <Calendar size={48} style={{ color: '#FFB800', margin: '0 auto' }} />
                        </div>

                        {/* Feature badges - A. 상단 라벨 - 16px Bold */}
                        <div className="flex flex-wrap justify-center gap-2">
                          {benefit.features.map((feature, fIndex) => (
                            <div 
                              key={fIndex}
                              className="px-4 py-2"
                              style={{
                                background: fIndex === 0 ? '#FFB800' : 'rgba(255, 255, 255, 0.15)',
                                borderRadius: '100px',
                                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                                fontSize: '16px',
                                fontWeight: '700',
                                color: fIndex === 0 ? '#0F214A' : 'white'
                              }}
                            >
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Calculator Section */}
      <section style={{ background: '#F7F8FA', padding: '120px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '800px' }}>
          <ScrollReveal>
            <div className="text-center mb-16">
              {/* B. 메인 타이틀 - 44px Bold */}
              <h2 
                className="mb-4"
                style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '44px',
                  fontWeight: '700',
                  color: '#0F214A',
                  lineHeight: '1.4'
                }}
              >
                보험, 조건, 산출까지 계산은<br />
                태양광발전손해배상보험
              </h2>
              {/* E. 본문 설명 - 18px Regular */}
              <p 
                style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '18px',
                  fontWeight: '400',
                  color: '#666',
                  lineHeight: '1.6'
                }}
              >
                타이런트와일즈 × TPA 배상책임의 대표 있는 감각<br />
                보험 행복의 적금을 독립적으로 보여줍니다
              </p>
            </div>
          </ScrollReveal>

          {/* Calculator Card */}
          <ScrollReveal delay={200}>
            <div 
              style={{
                background: 'white',
                borderRadius: '32px',
                padding: '48px',
                border: '2px solid #FF6B3D',
                boxShadow: '0 12px 40px rgba(255, 107, 61, 0.15)'
              }}
            >
              {/* Icon */}
              <div className="text-center mb-8">
                <div 
                  className="inline-flex items-center justify-center mb-4"
                  style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #FF6B3D, #FF8C3D)',
                    borderRadius: '50%'
                  }}
                >
                  <Shield size={40} style={{ color: 'white' }} />
                </div>
                {/* D. 섹션 제목 - 28px Bold */}
                <h3 
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '28px',
                    fontWeight: '700',
                    color: '#0F214A',
                    marginBottom: '8px'
                  }}
                >
                  안전손해보험 - 1만원대만
                </h3>
                <p 
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '16px',
                    fontWeight: '400',
                    color: '#999'
                  }}
                >
                  (재)미래보험(주)
                </p>
              </div>

              {/* Form Fields */}
              <div className="space-y-6">
                {/* Capacity Selection */}
                <div>
                  {/* A. 상단 라벨 - 16px Bold */}
                  <label 
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '16px',
                      fontWeight: '700',
                      color: '#0F214A',
                      marginBottom: '12px',
                      display: 'block'
                    }}
                  >
                    모듈 용량
                  </label>
                  <div className="flex gap-3">
                    {["100kW", "250kW", "500kW"].map((cap, index) => (
                      <button
                        key={index}
                        style={{
                          flex: 1,
                          padding: '14px',
                          background: index === 0 ? '#FF6B3D' : '#F7FAFD',
                          color: index === 0 ? 'white' : '#666',
                          border: index === 0 ? 'none' : '1px solid rgba(15, 33, 74, 0.1)',
                          borderRadius: '12px',
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '16px',
                          fontWeight: '700',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {cap}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input Fields */}
                <div>
                  {/* A. 상단 라벨 - 16px Bold */}
                  <label 
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '16px',
                      fontWeight: '700',
                      color: '#0F214A',
                      marginBottom: '12px',
                      display: 'block'
                    }}
                  >
                    모듈 개수
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      placeholder="모듈"
                      style={{
                        flex: 1,
                        padding: '14px 20px',
                        background: '#F7FAFD',
                        border: '1px solid rgba(15, 33, 74, 0.1)',
                        borderRadius: '12px',
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '16px',
                        fontWeight: '400',
                        color: '#0F214A',
                        outline: 'none'
                      }}
                    />
                    <span 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '16px',
                        fontWeight: '400',
                        color: '#999'
                      }}
                    >
                      개
                    </span>
                    <input
                      type="text"
                      placeholder="인버터"
                      style={{
                        flex: 1,
                        padding: '14px 20px',
                        background: '#F7FAFD',
                        border: '1px solid rgba(15, 33, 74, 0.1)',
                        borderRadius: '12px',
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '16px',
                        fontWeight: '400',
                        color: '#0F214A',
                        outline: 'none'
                      }}
                    />
                    <span 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '16px',
                        fontWeight: '400',
                        color: '#999'
                      }}
                    >
                      개
                    </span>
                  </div>
                </div>

                {/* Insurance Period */}
                <div>
                  {/* A. 상단 라벨 - 16px Bold */}
                  <label 
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '16px',
                      fontWeight: '700',
                      color: '#0F214A',
                      marginBottom: '12px',
                      display: 'block'
                    }}
                  >
                    가입 연수
                  </label>
                  <input
                    type="text"
                    placeholder="가입기"
                    style={{
                      width: '100%',
                      padding: '14px 20px',
                      background: '#F7FAFD',
                      border: '1px solid rgba(15, 33, 74, 0.1)',
                      borderRadius: '12px',
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '16px',
                      fontWeight: '400',
                      color: '#0F214A',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Results */}
                <div 
                  style={{
                    background: '#F7FAFD',
                    borderRadius: '16px',
                    padding: '24px',
                    marginTop: '24px'
                  }}
                >
                  <div className="flex justify-between items-center mb-3">
                    {/* E. 본문 설명 - 18px Regular */}
                    <span 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '18px',
                        fontWeight: '400',
                        color: '#666'
                      }}
                    >
                      모듈
                    </span>
                    <span 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '18px',
                        fontWeight: '700',
                        color: '#FF6B3D'
                      }}
                    >
                      100,000원
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <span 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '18px',
                        fontWeight: '400',
                        color: '#666'
                      }}
                    >
                      인버터
                    </span>
                    <span 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '18px',
                        fontWeight: '700',
                        color: '#0F214A'
                      }}
                    >
                      연금특약자
                    </span>
                  </div>
                  <div 
                    className="pt-4 mt-4"
                    style={{
                      borderTop: '1px solid rgba(15, 33, 74, 0.1)'
                    }}
                  >
                    <div className="flex justify-between items-center">
                      <span 
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '18px',
                          fontWeight: '700',
                          color: '#0F214A'
                        }}
                      >
                        총 배상가액 단가 정산(연 건당당)
                      </span>
                      <span 
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '20px',
                          fontWeight: '700',
                          color: '#FF6B3D'
                        }}
                      >
                        연 200만원(약 18만원/월)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Submit Button - G. 버튼 텍스트 - 16px Bold */}
                <button
                  style={{
                    width: '100%',
                    padding: '18px',
                    background: 'linear-gradient(135deg, #FF6B3D, #FF8C3D)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '16px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    boxShadow: '0 8px 24px rgba(255, 107, 61, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  보험 가입하기 →
                </button>

                {/* Terms Notice */}
                <p 
                  className="text-center"
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '14px',
                    fontWeight: '400',
                    color: '#999',
                    lineHeight: '1.6'
                  }}
                >
                  * 하기 내용 시행 상태만으로도 무안 토를 검출이 상연청할가? 무더시연장되고 용적등특성에산정까지손답이 안하나 전체기후심청은지 할때계기수 * 추수합니다
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Required Documents Section */}
      <section style={{ background: 'white', padding: '120px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '800px' }}>
          <ScrollReveal>
            <div className="text-center mb-16">
              {/* B. 메인 타이틀 - 44px Bold */}
              <h2 
                style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '44px',
                  fontWeight: '700',
                  color: '#0F214A',
                  lineHeight: '1.4',
                  marginBottom: '16px'
                }}
              >
                필수 서류는 무엇인가요?
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "사업자등록증", icon: FileText },
              { title: "한국전력공사 연계신청확인증", icon: CheckCircle2 },
              { title: "발전사업허가서 or 신고서", icon: Shield },
              { title: "사전재해협약확인서", icon: Handshake }
            ].map((doc, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div 
                  className="group text-center p-8"
                  style={{
                    background: 'white',
                    borderRadius: '24px',
                    border: '1px solid rgba(15, 33, 74, 0.08)',
                    boxShadow: '0 4px 16px rgba(15, 33, 74, 0.04)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                >
                  <div 
                    className="mx-auto mb-4 group-hover:scale-110"
                    style={{
                      width: '64px',
                      height: '64px',
                      background: 'linear-gradient(135deg, #FF6B3D15, #FF8C3D15)',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <doc.icon size={32} style={{ color: '#FF6B3D' }} />
                  </div>
                  {/* E. 본문 설명 - 18px Regular */}
                  <div 
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '18px',
                      fontWeight: '400',
                      color: '#0F214A',
                      lineHeight: '1.6'
                    }}
                  >
                    {doc.title}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: 'linear-gradient(135deg, #0F214A 0%, #273b82 100%)', padding: '120px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              {/* B. 메인 타이틀 - 44px Bold */}
              <h2 
                className="text-white mb-8"
                style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '44px',
                  fontWeight: '700',
                  lineHeight: '1.4'
                }}
              >
                번거로운 행정 업무<br />
                전문가에게 맡기세요
              </h2>

              {/* E. 본문 설명 - 18px Regular */}
              <p 
                className="text-white mb-12"
                style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '18px',
                  fontWeight: '400',
                  lineHeight: '1.6',
                  opacity: 0.9
                }}
              >
                발전소 운영에만 집중하시고 나머지는 저희가 처리합니다
              </p>

              {/* G. 버튼 텍스트 - 16px Bold */}
              <button
                className="group"
                style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '16px',
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
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 40px rgba(255, 107, 61, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(255, 107, 61, 0.4)';
                }}
              >
                사무관리 서비스 문의
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}