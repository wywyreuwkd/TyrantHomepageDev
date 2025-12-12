import { MapPin, FileCheck, Building2, TrendingUp, CheckCircle2, Award, Zap, Clock, Users, ArrowRight, Target, Shield, DollarSign } from "lucide-react";
import { SubNavigation } from "../components/SubNavigation";
import { PageHero } from "../components/PageHero";
import { ScrollReveal } from "../components/ScrollReveal";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface BusinessDevelopmentProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function BusinessDevelopment({ onNavigate, currentPage }: BusinessDevelopmentProps) {
  const developmentServices = [
    {
      icon: MapPin,
      title: "부지 발굴 및 확보",
      desc: "전국 산업단지, 물류센터, 유휴부지를 발굴하고 임대차 계약을 체결합니다. 입지 분석부터 토지주 협상까지 전 과정을 전문적으로 진행합니다.",
      features: ["입지 분석 및 타당성 검토", "토지주/건물주 협상", "장기 임대차 계약 체결", "부지 확보 전략 수립"],
      image: "https://images.unsplash.com/photo-1725308659447-bf1b10f6635a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGZhcm0lMjBhZXJpYWx8ZW58MXx8fHwxNzYzNDM1OTYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: FileCheck,
      title: "인허가 대행",
      desc: "발전사업 허가부터 전기사업 등록까지 복잡한 인허가 절차를 원스톱으로 처리합니다. 한전 계통연계 협의 등 모든 과정을 대행합니다.",
      features: ["발전사업 허가 신청", "개발행위 허가", "한전 계통연계 협의", "전기사업 등록"],
      image: "https://images.unsplash.com/photo-1648135327756-b606e2eb8caa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlciUyMHNvbGFyJTIwcGFuZWx8ZW58MXx8fHwxNzYzNDM1OTYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Building2,
      title: "설계 및 엔지니어링",
      desc: "최적화된 시스템 설계와 구조물 안전성 검토를 진행합니다. 전기, 구조, 토목 설계를 통해 최고의 효율을 실현합니다.",
      features: ["전기설계 (PCS, 인버터)", "구조설계 및 안전성 검토", "토목설계 및 배수계획", "최적 용량 산정"],
      image: "https://images.unsplash.com/photo-1668097613572-40b7c11c8727?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwaW5zdGFsbGF0aW9ufGVufDF8fHx8MTc2MzM2NTI3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: DollarSign,
      title: "금융 조달 지원",
      desc: "프로젝트 파이낸싱과 투자유치를 지원합니다. 최적의 금융구조를 설계하고 세무 및 법률 자문을 제공합니다.",
      features: ["PF 금융 주선", "투자자 연결 및 IR 지원", "세무 및 법률 자문", "최적 금융구조 설계"],
      image: "https://images.unsplash.com/photo-1723177548474-b58ada59986b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc29sYXIlMjBlbmVyZ3l8ZW58MXx8fHwxNzYzNDE4NzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const projectTypes = [
    {
      title: "산업단지 태양광",
      desc: "공장 지붕형 및 부지형 태양광 발전소 개발로 전력비를 절감하고 ESG 경영을 실천합니다.",
      capacity: "500kW ~ 3MW",
      icon: Building2,
      features: ["무상설치 가능", "수익공유 모델", "전력요금 절감"],
      image: "https://images.unsplash.com/photo-1723177548474-b58ada59986b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc29sYXIlMjBlbmVyZ3l8ZW58MXx8fHwxNzYzNDE4NzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "물류센터 태양광",
      desc: "대형 물류센터 지붕을 활용하여 대규모 태양광 발전소를 구축하고 안정적인 수익을 창출합니다.",
      capacity: "1MW ~ 5MW",
      icon: MapPin,
      features: ["대규모 용량", "안정적 수익", "ESG 경영 기여"],
      image: "https://images.unsplash.com/photo-1726866492047-7f9516558c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBzb2xhciUyMHBhbmVsc3xlbnwxfHx8fDE3NjM0MjA1OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "유휴부지 태양광",
      desc: "나대지, 임야 등 유휴부지를 활용하여 토지 가치를 극대화하고 지역 경제를 활성화합니다.",
      capacity: "100kW ~ 10MW+",
      icon: Target,
      features: ["장기 임대수익", "토지 활용도 극대화", "지역 경제 활성화"],
      image: "https://images.unsplash.com/photo-1725308659447-bf1b10f6635a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGZhcm0lMjBhZXJpYWx8ZW58MXx8fHwxNzYzNDM1OTYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const trackRecord = [
    { label: "누적 개발 용량", value: "100MW+", icon: Zap },
    { label: "완료 프로젝트", value: "50+", icon: CheckCircle2 },
    { label: "협력 금융기관", value: "10+", icon: Building2 },
    { label: "평균 인허가 기간", value: "4개월", icon: Clock }
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <PageHero
        badge={{ text: "사업영역", color: "#FF6B3D" }}
        title="태양광 개발"
        description="부지 발굴부터 금융 조달까지, 태양광 발전소 개발의 모든 과정을 책임집니다."
      />

      {/* Sub Navigation */}
      <SubNavigation category="business" currentPage={currentPage} onNavigate={onNavigate} />

      {/* Big Impact Section with Image */}
      <section style={{ background: '#F7FAFD', padding: '0', position: 'relative', overflow: 'hidden' }}>
        <div className="grid lg:grid-cols-2" style={{ minHeight: '600px' }}>
          {/* Left - Image */}
          <div style={{ position: 'relative', minHeight: '500px' }}>
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBvd2VyJTIwcGxhbnR8ZW58MXx8fHwxNzYzNDM1OTY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Solar Power Plant"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                top: 0,
                left: 0
              }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(15, 33, 74, 0.7), transparent)'
            }} />
          </div>

          {/* Right - Content */}
          <div className="flex items-center px-6 md:px-16 py-16">
            <div>
              <div 
                className="inline-block px-4 py-2 mb-6"
                style={{
                  background: 'rgba(255, 107, 61, 0.1)',
                  border: '1px solid rgba(255, 107, 61, 0.3)',
                  borderRadius: '100px'
                }}
              >
                <span style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#FF6B3D'
                }}>
                  SOLAR DEVELOPMENT
                </span>
              </div>

              <h2 
                className="mb-6"
                style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '48px',
                  fontWeight: '700',
                  lineHeight: '1.4',
                  color: '#0F214A'
                }}
              >
                체계적인 프로세스로<br />
                성공을 실현합니다
              </h2>

              <p 
                className="mb-10"
                style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '16px',
                  lineHeight: '1.5',
                  color: '#666'
                }}
              >
                타이런트는 부지 발굴부터 인허가, 설계, 금융조달까지 태양광 발전소 개발의 
                모든 단계를 원스톱으로 제공합니다. 풍부한 경험과 전문성으로 안정적이고 
                수익성 높은 프로젝트를 완성합니다.
              </p>

              {/* Track Record Stats */}
              <div className="grid grid-cols-2 gap-4">
                {trackRecord.map((stat, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-5"
                    style={{
                      background: 'white',
                      border: '1px solid rgba(15, 33, 74, 0.1)',
                      borderRadius: '16px'
                    }}
                  >
                    <div 
                      className="flex items-center justify-center"
                      style={{
                        width: '48px',
                        height: '48px',
                        background: 'rgba(255, 107, 61, 0.1)',
                        borderRadius: '12px',
                        flexShrink: 0
                      }}
                    >
                      <stat.icon size={24} style={{ color: '#FF6B3D' }} />
                    </div>
                    <div>
                      <div 
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '12px',
                          lineHeight: '1.5',
                          color: '#666',
                          marginBottom: '2px'
                        }}
                      >
                        {stat.label}
                      </div>
                      <div 
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '20px',
                          fontWeight: '500',
                          color: '#0F214A'
                        }}
                      >
                        {stat.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services with Large Cards + Images */}
      <section style={{ background: '#0F214A', padding: '120px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1400px' }}>
          <div className="text-center mb-20">
            <div 
              className="inline-block px-4 py-2 mb-6"
              style={{
                background: 'rgba(255, 107, 61, 0.15)',
                border: '1px solid rgba(255, 107, 61, 0.3)',
                borderRadius: '100px'
              }}
            >
              <span style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '14px',
                fontWeight: '700',
                color: '#FF6B3D',
                letterSpacing: '1px'
              }}>
                CORE SERVICES
              </span>
            </div>

            <h2 
              className="text-white mb-4"
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '48px',
                fontWeight: '700',
                lineHeight: '1.4'
              }}
            >
              핵심 서비스
            </h2>

            <p 
              className="text-white/80"
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '16px',
                lineHeight: '1.5'
              }}
            >
              태양광 발전소 개발의 모든 과정을 원스톱으로 지원합니다
            </p>
          </div>

          <div className="space-y-12">
            {developmentServices.map((service, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up">
                <div 
                  className={`grid lg:grid-cols-2 gap-0 overflow-hidden group ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
                  style={{
                    borderRadius: '32px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = 'rgba(255, 107, 61, 0.4)';
                    e.currentTarget.style.boxShadow = '0 24px 48px rgba(255, 107, 61, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Image */}
                  <div 
                    className={index % 2 === 1 ? 'lg:col-start-2' : ''}
                    style={{ position: 'relative', minHeight: '400px', overflow: 'hidden' }}
                  >
                    <ImageWithFallback 
                      src={service.image}
                      alt={service.title}
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
                      background: 'linear-gradient(to bottom, transparent, rgba(15, 33, 74, 0.3))'
                    }} />
                  </div>

                  {/* Content */}
                  <div 
                    className={`flex items-center p-12 lg:p-16 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                  >
                    <div>
                      <div
                        className="mb-6 inline-flex p-4"
                        style={{
                          background: 'rgba(255, 107, 61, 0.15)',
                          borderRadius: '20px',
                          border: '1px solid rgba(255, 107, 61, 0.3)'
                        }}
                      >
                        <service.icon size={40} style={{ color: '#FF6B3D' }} />
                      </div>

                      <h3 
                        className="text-white mb-4"
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '32px',
                          fontWeight: '700',
                          lineHeight: '1.4'
                        }}
                      >
                        {service.title}
                      </h3>

                      <p 
                        className="text-white/80 mb-8"
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '16px',
                          lineHeight: '1.5'
                        }}
                      >
                        {service.desc}
                      </p>

                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle2 
                              size={20} 
                              style={{ 
                                color: '#FF6B3D', 
                                flexShrink: 0
                              }} 
                            />
                            <span 
                              className="text-white"
                              style={{
                                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                                fontSize: '16px'
                              }}
                            >
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types - Large Image Cards */}
      <section style={{ background: '#F7FAFD', padding: '120px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1400px' }}>
          <div className="text-center mb-20">
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
              프로젝트 유형
            </h2>

            <p 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '16px',
                lineHeight: '1.5',
                color: '#666'
              }}
            >
              다양한 유형의 태양광 발전소 개발 경험을 보유하고 있습니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectTypes.map((type, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up">
                <div
                  className="group cursor-pointer overflow-hidden"
                  style={{
                    background: 'white',
                    borderRadius: '24px',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 24px 48px rgba(15, 33, 74, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Image */}
                  <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
                    <ImageWithFallback 
                      src={type.image}
                      alt={type.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                      className="group-hover:scale-110"
                    />
                    <div 
                      className="absolute top-4 right-4 px-3 py-2"
                      style={{
                        background: 'rgba(255, 107, 61, 0.95)',
                        borderRadius: '100px',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      <span 
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '12px',
                          fontWeight: '600',
                          color: 'white'
                        }}
                      >
                        {type.capacity}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div 
                      className="mb-4 inline-flex p-3"
                      style={{
                        background: 'rgba(255, 107, 61, 0.1)',
                        borderRadius: '12px'
                      }}
                    >
                      <type.icon size={28} style={{ color: '#FF6B3D' }} />
                    </div>

                    <h3 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '24px',
                        fontWeight: '600',
                        color: '#0F214A',
                        marginBottom: '12px',
                        lineHeight: '1.5'
                      }}
                    >
                      {type.title}
                    </h3>

                    <p 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '14px',
                        lineHeight: '1.5',
                        color: '#666',
                        marginBottom: '16px'
                      }}
                    >
                      {type.desc}
                    </p>

                    <div className="space-y-2">
                      {type.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex}
                          className="flex items-center gap-2"
                        >
                          <div style={{
                            width: '4px',
                            height: '4px',
                            background: '#FF6B3D',
                            borderRadius: '50%'
                          }} />
                          <span 
                            style={{
                              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                              fontSize: '14px',
                              color: '#333'
                            }}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Image + Stats */}
      <section style={{ background: '#0F214A', padding: '0', position: 'relative', overflow: 'hidden' }}>
        <div className="grid lg:grid-cols-2">
          {/* Right - Image */}
          <div className="lg:order-2" style={{ position: 'relative', minHeight: '600px' }}>
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1648135327756-b606e2eb8caa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlciUyMHNvbGFyJTIwcGFuZWx8ZW58MXx8fHwxNzYzNDM1OTYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Solar Engineer"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                top: 0,
                left: 0
              }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to left, rgba(15, 33, 74, 0.7), transparent)'
            }} />
          </div>

          {/* Left - Content */}
          <div className="lg:order-1 flex items-center px-6 md:px-16 py-20">
            <div>
              <h2 
                className="text-white mb-6"
                style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '48px',
                  fontWeight: '700',
                  lineHeight: '1.4'
                }}
              >
                타이런트의<br />
                경쟁력
              </h2>

              <p 
                className="text-white/80 mb-12"
                style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '16px',
                  lineHeight: '1.5'
                }}
              >
                검증된 실적과 전문성으로 최고의 개발 서비스를 제공합니다
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: TrendingUp, title: "풍부한 개발 실적", desc: "누적 100MW+ 프로젝트 개발 경험" },
                  { icon: Users, title: "전국 네트워크", desc: "지자체 및 토지주 협력 네트워크 보유" },
                  { icon: Zap, title: "원스톱 서비스", desc: "기획부터 준공까지 토탈 솔루션" },
                  { icon: Award, title: "금융 전문성", desc: "최적의 PF 구조 설계 및 투자유치" }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-6"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '20px',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <div 
                      className="mb-4 inline-flex p-3"
                      style={{
                        background: 'rgba(255, 107, 61, 0.15)',
                        borderRadius: '12px'
                      }}
                    >
                      <item.icon size={28} style={{ color: '#FF6B3D' }} />
                    </div>

                    <h3 
                      className="text-white mb-2"
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '20px',
                        fontWeight: '500',
                        lineHeight: '1.5'
                      }}
                    >
                      {item.title}
                    </h3>

                    <p 
                      className="text-white/70"
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '14px',
                        lineHeight: '1.5'
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        style={{ 
          background: 'linear-gradient(135deg, #0F214A 0%, #273b82 100%)',
          padding: '100px 0',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B3D] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6B3D] rounded-full blur-3xl"></div>
        </div>

        <div className="relative mx-auto px-6 md:px-10 text-center" style={{ maxWidth: '1280px' }}>
          <h2 
            className="text-white mb-6"
            style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '48px',
              fontWeight: '700',
              lineHeight: '1.4'
            }}
          >
            태양광 발전소 개발,<br />
            지금 시작하세요
          </h2>

          <p 
            className="text-white/90 mb-12"
            style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '16px',
              lineHeight: '1.5'
            }}
          >
            전문가와 상담하고 최적의 개발 계획을 수립하세요
          </p>

          <button
            className="inline-flex items-center gap-2 group"
            style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '16px',
              fontWeight: '600',
              padding: '18px 40px',
              background: '#FF6B3D',
              color: 'white',
              border: 'none',
              borderRadius: '100px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 24px rgba(255, 107, 61, 0.4)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(255, 107, 61, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 107, 61, 0.4)';
            }}
          >
            개발 프로젝트 문의하기
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}
