import { Server, Zap, Battery, Shield, CheckCircle2, TrendingUp, DollarSign, Leaf, AlertCircle, Globe, BarChart3, Calendar } from "lucide-react";
import { SubNavigation } from "../components/SubNavigation";
import { PageHero } from "../components/PageHero";
import { ScrollReveal } from "../components/ScrollReveal";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface BusinessDataCenterProps {
  onNavigate: (page: any) => void;
  currentPage: string;
}

export function BusinessDataCenter({ onNavigate, currentPage }: BusinessDataCenterProps) {
  // 주요 특징 및 동향
  const keyFeatures = [
    {
      icon: Leaf,
      title: "재생에너지 활용",
      description: "태양광, 풍력 등 재생에너지원을 활용하여 전력을 공급하며, 에너지저장장치(ESS)를 연계해 전력 공급의 안정성을 높입니다.",
      stats: "100%",
      label: "재생에너지",
      color: "#FF6B3D",
      image: "https://images.unsplash.com/photo-1628206554160-63e8c921e398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJlbmV3YWJsZSUyMGVuZXJneXxlbnwxfHx8fDE3NjMzOTAyMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: BarChart3,
      title: "지방 분산형 구축",
      description: "전력망 과부하 문제 해결과 지역 사회의 데이터센터 구축을 주실합니다. 한국의 해발 '솔라시드'가 대표적인 예입니다.",
      stats: "지역균형",
      label: "발전",
      color: "#0F214A",
      image: "https://images.unsplash.com/flagged/photo-1579274216947-86eaa4b00475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwc2VydmVyc3xlbnwxfHx8fDE3NjMzOTAwNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Calendar,
      title: "시장 성장",
      description: "데이터센터 현장 태양광 발전 시장은 2025년 284억 달러 규모에서 2035년까지 1,140억 달러 규모로 급성장할 것으로 예측됩니다.",
      stats: "2035년",
      label: "1,140억 달러",
      color: "#FF6B3D",
      image: "https://images.unsplash.com/photo-1668097613569-3405bb63262b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHRlY2hub2xvZ3klMjBzdXN0YWluYWJsZXxlbnwxfHx8fDE3NjMzNjg0NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Globe,
      title: "글로벌 기업들의 투자",
      description: "구글, 마이크로소프트 등 글로벌 IT 기업들은 RE100 달성 목표로 대양광 발전, 연료전지 등 다양한 신재생에너지 도입을 확대하고 있습니다.",
      stats: "RE100",
      label: "달성 목표",
      color: "#0F214A",
      image: "https://images.unsplash.com/photo-1600428235269-c326df6361fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBzdG9yYWdlJTIwYmF0dGVyeXxlbnwxfHx8fDE3NjM0NDI1OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  // 장점
  const advantages = [
    {
      icon: Leaf,
      title: "환경 친화적",
      description: "탄소 배출량을 줄여 기후 변화 대응에 기여합니다.",
      color: "#FF6B3D"
    },
    {
      icon: DollarSign,
      title: "운영 비용 절감",
      description: "장기적으로 전기 요금을 변동에 영향을 덜 받으며 운영 비용을 크게 절감할 수 있습니다.",
      color: "#0F214A"
    },
    {
      icon: Battery,
      title: "에너지 독립성",
      description: "자체 에너지 생산으로 외부 의존도를 낮추 수 있습니다.",
      color: "#FF6B3D"
    },
    {
      icon: TrendingUp,
      title: "지역 경제 활성화",
      description: "대규모 데이터센터 단지 조성 시 지역 사회의 일자리 창출과 연관 산업 유치 효과를 가져올 수 있습니다.",
      color: "#0F214A"
    }
  ];

  // 고려사항
  const considerations = [
    {
      title: "간헐성",
      issue: "태양광 발전은 일상량에 따라 전력 생산량이 달라지므로 안정적인 전력 공급을 위해 ESS나 다른 에너지원과의 연계가 필요합니다.",
      color: "#FF6B3D",
      icon: AlertCircle
    },
    {
      title: "초기 투자 비용",
      issue: "태양광 패널, 인버터, ESS 등 초기 설치 비용이 상당히 높습니다. 다만 정부 지원 정책이나 전력 판매 수익으로 장기적으로 회수 가능합니다.",
      color: "#0F214A",
      icon: DollarSign
    },
    {
      title: "부지 선정",
      issue: "효율적인 데이터센터 구축 및 충분한 일조량을 확보하기 위해 적절한 부지를 선정하는 것이 중요합니다.",
      color: "#FF6B3D",
      icon: Server
    },
    {
      title: "기술 통합",
      issue: "데이터센터 전력 시스템과 태양광 발전 시스템의 연계와 통합 기술 신뢰도 확보가 필요합니다.",
      color: "#0F214A",
      icon: Shield
    }
  ];

  // 시장 성장 데이터
  const marketGrowth = [
    { year: "2025", value: 284, label: "284억 달러" },
    { year: "2027", value: 450, label: "450억 달러" },
    { year: "2030", value: 720, label: "720억 달러" },
    { year: "2033", value: 950, label: "950억 달러" },
    { year: "2035", value: 1140, label: "1,140억 달러" }
  ];

  const maxValue = 1140;

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <PageHero
        badge={{ text: "사업영역", color: "#FF6B3D" }}
        title="데이터센터"
        description="태양광 데이터센터는 데이터센터 운영에 필요한 전력을 태양광 발전으로 충당하는 시설입니다. 이는 전 세계적으로 증가하는 데이터센터 전력 소비 문제에 대한 친환경적인 해결책으로 주목받고 있으며, RE100(재생에너지 100% 사용) 달성을 위한 핵심 솔루션 중 하나입니다."
      />

      {/* Sub Navigation */}
      <SubNavigation category="business" currentPage={currentPage} onNavigate={onNavigate} />

      {/* Introduction Section */}
      <section style={{ background: 'linear-gradient(135deg, #0F214A 0%, #273b82 100%)', padding: '100px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="max-w-4xl mx-auto">
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
                    fontSize: '14px',
                    fontWeight: '700',
                    color: '#FF6B3D',
                    letterSpacing: '1px'
                  }}
                >
                  SOLAR DATA CENTER
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <h2 
                className="text-white mb-6"
                style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '42px',
                  fontWeight: '700',
                  lineHeight: '1.4'
                }}
              >
                친환경 고효율 데이터센터의<br />
                미래를 선도합니다
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <p 
                className="text-white mb-12"
                style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '17px',
                  lineHeight: '1.8',
                  opacity: 0.9
                }}
              >
                태양광 데이터센터는 데이터센터 운영에 필요한 전력을 태양광 발전으로 충당하는 시설입니다. 
                이는 전 세계적으로 증가하는 데이터센터 전력 소비 문제에 대한 친환경적인 해결책으로 주목받고 
                있으며, RE100(재생에너지 100% 사용) 달성을 위한 핵심 솔루션 중 하나입니다.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Zap, label: "재생에너지", value: "100%" },
                { icon: Leaf, label: "탄소배출", value: "0%" },
                { icon: Shield, label: "가동률", value: "99.99%" }
              ].map((stat, index) => (
                <ScrollReveal key={index} delay={300 + index * 100} direction="up">
                  <div 
                    className="p-6 text-center"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '20px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <div 
                      className="mx-auto mb-4"
                      style={{
                        width: '56px',
                        height: '56px',
                        background: 'rgba(255, 107, 61, 0.15)',
                        borderRadius: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <stat.icon size={28} style={{ color: '#FF6B3D' }} />
                    </div>
                    <div 
                      className="text-white mb-2"
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '32px',
                        fontWeight: '700'
                      }}
                    >
                      {stat.value}
                    </div>
                    <div 
                      className="text-white"
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '14px',
                        opacity: 0.8
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 주요 특징 및 동향 */}
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
                  fontSize: '14px',
                  fontWeight: '700',
                  color: '#0F214A',
                  letterSpacing: '1px'
                }}
              >
                KEY FEATURES & TRENDS
              </span>
            </div>
            <h2 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '48px',
                fontWeight: '700',
                color: '#0F214A',
                lineHeight: '1.4',
                marginBottom: '16px'
              }}
            >
              주요 특징 및 동향
            </h2>
            <p 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '16px',
                color: '#666',
                lineHeight: '1.5'
              }}
            >
              태양광 데이터센터의 핵심 특징과 글로벌 시장 동향
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {keyFeatures.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up">
                <div
                  className="group overflow-hidden"
                  style={{
                    background: 'white',
                    borderRadius: '32px',
                    border: '1px solid rgba(15, 33, 74, 0.1)',
                    boxShadow: '0 8px 32px rgba(15, 33, 74, 0.08)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 20px 48px rgba(15, 33, 74, 0.15)';
                    e.currentTarget.style.borderColor = feature.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(15, 33, 74, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(15, 33, 74, 0.1)';
                  }}
                >
                  {/* Image */}
                  <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                    <ImageWithFallback 
                      src={feature.image}
                      alt={feature.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                      className="group-hover:scale-110"
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to bottom, transparent 40%, rgba(0, 0, 0, 0.7))'
                    }} />
                    
                    {/* Stats Overlay */}
                    <div 
                      className="absolute top-4 right-4 px-4 py-2"
                      style={{
                        background: feature.color,
                        borderRadius: '100px',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      <div 
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '18px',
                          fontWeight: '700',
                          color: 'white'
                        }}
                      >
                        {feature.stats}
                      </div>
                      <div 
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '11px',
                          color: 'white',
                          opacity: 0.9,
                          textAlign: 'center'
                        }}
                      >
                        {feature.label}
                      </div>
                    </div>

                    {/* Icon */}
                    <div 
                      className="absolute bottom-4 left-4"
                      style={{
                        width: '56px',
                        height: '56px',
                        background: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <feature.icon size={28} style={{ color: feature.color }} />
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '32px' }}>
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
                        fontSize: '15px',
                        color: '#666',
                        lineHeight: '1.7'
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 시장 성장 전망 */}
      <section style={{ background: '#F7FAFD', padding: '120px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1000px' }}>
          <div className="text-center mb-16">
            <h2 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '48px',
                fontWeight: '700',
                color: '#0F214A',
                lineHeight: '1.4',
                marginBottom: '16px'
              }}
            >
              시장 성장 전망
            </h2>
            <p 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '16px',
                color: '#666',
                lineHeight: '1.5'
              }}
            >
              데이터센터 현장 태양광 발전 시장 규모 예측 (2025~2035)
            </p>
          </div>

          <div 
            style={{
              background: 'white',
              borderRadius: '32px',
              padding: '60px',
              border: '1px solid rgba(15, 33, 74, 0.1)',
              boxShadow: '0 8px 32px rgba(15, 33, 74, 0.08)'
            }}
          >
            {/* Chart */}
            <div className="space-y-6">
              {marketGrowth.map((data, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#0F214A'
                      }}
                    >
                      {data.year}년
                    </span>
                    <span 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '18px',
                        fontWeight: '700',
                        color: index === marketGrowth.length - 1 ? '#FF6B3D' : '#0F214A'
                      }}
                    >
                      {data.label}
                    </span>
                  </div>
                  <div 
                    style={{
                      width: '100%',
                      height: '16px',
                      background: 'rgba(15, 33, 74, 0.08)',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      position: 'relative'
                    }}
                  >
                    <div 
                      style={{
                        width: `${(data.value / maxValue) * 100}%`,
                        height: '100%',
                        background: index === marketGrowth.length - 1 
                          ? 'linear-gradient(90deg, #FF6B3D, #FF8C3D)' 
                          : 'linear-gradient(90deg, #0F214A, #273b82)',
                        borderRadius: '8px',
                        transition: 'width 1s ease',
                        boxShadow: index === marketGrowth.length - 1 
                          ? '0 4px 12px rgba(255, 107, 61, 0.3)' 
                          : 'none'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div 
              className="mt-8 p-6"
              style={{
                background: '#FFF5F0',
                borderRadius: '20px',
                borderLeft: '4px solid #FF6B3D'
              }}
            >
              <p 
                style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '15px',
                  color: '#0F214A',
                  lineHeight: '1.7'
                }}
              >
                <strong>2025년 284억 달러</strong>에서 <strong>2035년 1,140억 달러</strong>로 약 <strong>4배 성장</strong>이 예상됩니다. 
                이는 글로벌 기업들의 RE100 달성 목표와 친환경 데이터센터에 대한 수요 증가가 주요 원인입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 장점 */}
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
                  fontSize: '14px',
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
                fontSize: '48px',
                fontWeight: '700',
                color: '#0F214A',
                lineHeight: '1.4',
                marginBottom: '16px'
              }}
            >
              장점
            </h2>
            <p 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '16px',
                color: '#666',
                lineHeight: '1.5'
              }}
            >
              태양광 데이터센터가 제공하는 핵심 가치
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {advantages.map((adv, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up">
                <div
                  className="group text-center p-8"
                  style={{
                    background: index % 2 === 0 
                      ? 'linear-gradient(135deg, #0F214A, #273b82)' 
                      : '#F7FAFD',
                    borderRadius: '24px',
                    border: index % 2 === 0 ? 'none' : '1px solid rgba(15, 33, 74, 0.1)',
                    boxShadow: index % 2 === 0 
                      ? '0 8px 32px rgba(15, 33, 74, 0.3)' 
                      : '0 4px 16px rgba(15, 33, 74, 0.04)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    minHeight: '280px'
                  }}
                  onMouseEnter={(e) => {
                    if (index % 2 !== 0) {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = '0 16px 40px rgba(15, 33, 74, 0.12)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (index % 2 !== 0) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(15, 33, 74, 0.04)';
                    }
                  }}
                >
                  <div 
                    className="mx-auto mb-6"
                    style={{
                      width: '72px',
                      height: '72px',
                      background: index % 2 === 0 
                        ? 'rgba(255, 107, 61, 0.15)' 
                        : 'rgba(15, 33, 74, 0.08)',
                      borderRadius: '18px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <adv.icon size={36} style={{ color: index % 2 === 0 ? '#FF6B3D' : '#0F214A' }} />
                  </div>

                  <h3 
                    className="mb-4"
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '22px',
                      fontWeight: '700',
                      color: index % 2 === 0 ? 'white' : '#0F214A'
                    }}
                  >
                    {adv.title}
                  </h3>

                  <p 
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '15px',
                      color: index % 2 === 0 ? 'rgba(255, 255, 255, 0.9)' : '#666',
                      lineHeight: '1.7'
                    }}
                  >
                    {adv.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 고려사항 */}
      <section style={{ background: '#F7FAFD', padding: '120px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="mb-16">
            <div 
              className="inline-block px-5 py-2 mb-4"
              style={{
                background: 'white',
                borderRadius: '100px',
                border: '2px solid #0F214A'
              }}
            >
              <span 
                style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '14px',
                  fontWeight: '700',
                  color: '#0F214A',
                  letterSpacing: '1px'
                }}
              >
                CONSIDERATIONS
              </span>
            </div>
            <h2 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '48px',
                fontWeight: '700',
                color: '#0F214A',
                lineHeight: '1.4',
                marginBottom: '16px'
              }}
            >
              고려사항
            </h2>
            <p 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '16px',
                color: '#666',
                lineHeight: '1.5'
              }}
            >
              태양광 데이터센터 구축 시 반드시 검토해야 할 사항들
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {considerations.map((item, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up">
                <div
                  className="group"
                  style={{
                    background: 'white',
                    borderRadius: '24px',
                    padding: '40px',
                    border: '1px solid rgba(15, 33, 74, 0.1)',
                    boxShadow: '0 4px 16px rgba(15, 33, 74, 0.04)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    minHeight: '240px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 16px 40px rgba(15, 33, 74, 0.12)';
                    e.currentTarget.style.borderColor = item.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(15, 33, 74, 0.04)';
                    e.currentTarget.style.borderColor = 'rgba(15, 33, 74, 0.1)';
                  }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div 
                      style={{
                        width: '56px',
                        height: '56px',
                        background: `${item.color}15`,
                        borderRadius: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <item.icon size={28} style={{ color: item.color }} />
                    </div>

                    <div style={{ flex: 1 }}>
                      <h3 
                        className="mb-3"
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '24px',
                          fontWeight: '700',
                          color: '#0F214A'
                        }}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <p 
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '15px',
                      color: '#666',
                      lineHeight: '1.7'
                    }}
                  >
                    {item.issue}
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
              친환경 고효율 데이터센터<br />
              지금 시작하세요
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
              RE100 달성과 탄소중립을 위한 최적의 솔루션을 제공합니다
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
              데이터센터 문의
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}