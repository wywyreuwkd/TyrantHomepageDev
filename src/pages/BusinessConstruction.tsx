import { HardHat, Shield, Zap, Clock, Award, CheckCircle2, Target, ArrowRight, TrendingUp, Settings, FileText, Sparkles, Users, ThumbsUp } from "lucide-react";
import { SubNavigation } from "../components/SubNavigation";
import { PageHero } from "../components/PageHero";
import { ScrollReveal } from "../components/ScrollReveal";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface BusinessConstructionProps {
  onNavigate: (page: any) => void;
  currentPage: string;
}

export function BusinessConstruction({ onNavigate, currentPage }: BusinessConstructionProps) {
  const strengths = [
    {
      icon: "Target",
      title: "정밀한 사전조사",
      description: "3D 시뮬레이션 기반 최적 설계",
      color: "#FF6B3D"
    },
    {
      icon: "Zap",
      title: "고효율 장비",
      description: "A급 모듈과 인버터로 발전효율 극대화",
      color: "#0F214A"
    },
    {
      icon: "Shield",
      title: "안전 우선 시공",
      description: "내풍·내진 기준 준수 및 안전관리",
      color: "#FF6B3D"
    },
    {
      icon: "Clock",
      title: "신속한 공정",
      description: "체계적 프로세스로 공기 준수",
      color: "#0F214A"
    },
    {
      icon: "ThumbsUp",
      title: "품질 보증",
      description: "20년 이상 운영 안정성 보장",
      color: "#FF6B3D"
    },
    {
      icon: "Users",
      title: "전문 인력",
      description: "자체 시공팀의 풍부한 경험",
      color: "#0F214A"
    }
  ];

  const processes = [
    {
      step: "01",
      title: "현장 조사 및 분석",
      description: "부지 지형, 일조량, 음영, 전력 인프라 등을 정밀 조사하여 최적의 설치 방안을 도출합니다.",
      details: ["지형 및 일조량 분석", "3D 시뮬레이션 예상 발전량 산출", "전력 인프라 검토"],
      icon: "Target",
      image: "https://images.unsplash.com/photo-1568057373106-63057e421d1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlciUyMHNvbGFyJTIwcGFuZWwlMjBibHVlcHJpbnR8ZW58MXx8fHwxNzY0MDQ4ODA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      step: "02",
      title: "설계 및 인허가",
      description: "구조 설계, 전기 설계를 완료하고 필요한 모든 인허가를 원스톱으로 지원합니다.",
      details: ["구조 및 전기 설계", "개발행위허가 지원", "전기사업허가 대행"],
      icon: "FileText",
      image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwaW5zdGFsbGF0aW9uJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2NDA0ODUwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      step: "03",
      title: "장비 선정 및 조달",
      description: "검증된 고효율 모듈과 인버터를 선정하여 장기 운영 안정성을 확보합니다.",
      details: ["A급 제조사 장비 선정", "고효율 모듈 및 인버터", "장기 운영 보증"],
      icon: "Settings",
      image: "https://images.unsplash.com/photo-1726866492047-7f9516558c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYnVpbGRpbmclMjBzb2xhciUyMHBhbmVsc3xlbnwxfHx8fDE3NjQwNDg1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      step: "04",
      title: "전문 EPC 시공",
      description: "전 과정을 자체 전문팀이 직접 시공하여 품질을 보장합니다.",
      details: ["구조물 설치", "모듈 및 전기공사", "안전관리 최우선"],
      icon: "HardHat",
      image: "https://images.unsplash.com/photo-1761213230327-d89a8cc9cc63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBzYWZldHklMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY0MDQ4ODA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      step: "05",
      title: "테스트 및 시운전",
      description: "최적의 발전 성능을 검증하고 안정적인 운영을 준비합니다.",
      details: ["전기안전검사", "성능테스트", "계통연계 완료"],
      icon: "CheckCircle2",
      image: "https://images.unsplash.com/photo-1711884272371-cd61f372e2cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBvd2VyJTIwcGxhbnQlMjBjb25zdHJ1Y3Rpb24lMjBzaXRlfGVufDF8fHx8MTc2NDA0ODUwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      step: "06",
      title: "운영 및 유지관리",
      description: "준공 후에도 지속적인 관리 서비스를 제공합니다.",
      details: ["실시간 모니터링", "정기점검 서비스", "신속한 고장대응"],
      icon: "Sparkles",
      image: "https://images.unsplash.com/photo-1733578234132-f40198e27f8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHdvcmtlcnMlMjByb29mJTIwaW5zdGFsbGF0aW9ufGVufDF8fHx8MTc2NDA0ODUwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const stats = [
    { value: "50+", label: "누적 시공 프로젝트", icon: "Award" },
    { value: "120MW", label: "총 구축 용량", icon: "TrendingUp" },
    { value: "100%", label: "안전사고 Zero", icon: "Shield" },
    { value: "20년", label: "운영 보증", icon: "Clock" }
  ];

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      Target, Zap, Shield, Clock, ThumbsUp, Users, FileText, Settings, HardHat, CheckCircle2, Sparkles, Award, TrendingUp
    };
    return icons[iconName];
  };

  return (
    <div className="min-h-screen bg-white">
      <SubNavigation category="business" onNavigate={onNavigate} currentPage={currentPage} />
      
      <PageHero
        badge={{ text: "사업영역", color: "#FF6B3D" }}
        title="태양광 시공"
        description="전문 EPC 기술력으로 완성하는 고품질 태양광 발전소. 설계부터 시공, 운영까지 통합 솔루션을 제공합니다."
      />

      {/* 핵심 강점 */}
      <section className="bg-white py-15 md:py-30">
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <h2 
                style={{ 
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: 'clamp(32px, 5vw, 48px)', 
                  fontWeight: '700', 
                  lineHeight: '1.3',
                  color: '#0F214A',
                  marginBottom: '16px'
                }}
              >
                타이런트 <span style={{ color: '#FF6B3D' }}>EPC 핵심 강점</span>
              </h2>
              <p 
                style={{ 
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: 'clamp(16px, 3vw, 20px)', 
                  lineHeight: '1.6', 
                  color: '#5A6C7D',
                  maxWidth: '800px',
                  margin: '0 auto'
                }}
              >
                검증된 기술력과 풍부한 시공 경험으로 최고의 태양광 발전소를 구축합니다
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((strength, index) => {
              const IconComponent = getIcon(strength.icon);
              return (
                <ScrollReveal key={index} delay={index * 80}>
                  <div 
                    className="p-6 md:p-8 bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
                    style={{ borderRadius: '16px' }}
                  >
                    <div 
                      className="w-14 h-14 flex items-center justify-center mb-4"
                      style={{ 
                        backgroundColor: `${strength.color}15`,
                        borderRadius: '12px'
                      }}
                    >
                      <IconComponent style={{ width: '28px', height: '28px', color: strength.color }} />
                    </div>
                    <h3 
                      style={{ 
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '20px', 
                        fontWeight: '600', 
                        lineHeight: '1.4',
                        color: '#0F214A',
                        marginBottom: '8px'
                      }}
                    >
                      {strength.title}
                    </h3>
                    <p 
                      style={{ 
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '15px', 
                        lineHeight: '1.6', 
                        color: '#5A6C7D'
                      }}
                    >
                      {strength.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 시공 프로세스 */}
      <section className="bg-[#F8F9FA] py-15 md:py-30">
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-20">
              <h2 
                style={{ 
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: 'clamp(32px, 5vw, 48px)', 
                  fontWeight: '700', 
                  lineHeight: '1.3',
                  color: '#0F214A',
                  marginBottom: '16px'
                }}
              >
                체계적인 <span style={{ color: '#FF6B3D' }}>시공 프로세스</span>
              </h2>
              <p 
                style={{ 
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: 'clamp(16px, 3vw, 20px)', 
                  lineHeight: '1.6', 
                  color: '#5A6C7D'
                }}
              >
                현장조사부터 운영까지, 전 과정을 책임집니다
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-12 md:space-y-20">
            {processes.map((process, index) => {
              const isEven = index % 2 === 0;
              const IconComponent = getIcon(process.icon);
              
              return (
                <ScrollReveal key={index} delay={100}>
                  <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}>
                    <div className="w-full md:w-1/2">
                      <div 
                        className="relative overflow-hidden group"
                        style={{ borderRadius: '20px', height: '400px' }}
                      >
                        <ImageWithFallback
                          src={process.image}
                          alt={process.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div 
                          className="absolute top-6 left-6 w-16 h-16 flex items-center justify-center"
                          style={{ 
                            backgroundColor: '#FF6B3D',
                            borderRadius: '12px',
                            boxShadow: '0 4px 12px rgba(255, 107, 61, 0.3)'
                          }}
                        >
                          <span style={{ 
                            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                            fontSize: '24px',
                            fontWeight: '700',
                            color: 'white'
                          }}>{process.step}</span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full md:w-1/2">
                      <div 
                        className="inline-flex items-center gap-3 mb-4 px-4 py-2"
                        style={{ backgroundColor: '#0F214A15', borderRadius: '10px' }}
                      >
                        <IconComponent style={{ width: '24px', height: '24px', color: '#0F214A' }} />
                        <span style={{ 
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '14px',
                          fontWeight: '600',
                          color: '#0F214A',
                          letterSpacing: '0.05em'
                        }}>STEP {process.step}</span>
                      </div>

                      <h3 style={{ 
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: 'clamp(24px, 4vw, 36px)', 
                        fontWeight: '700', 
                        lineHeight: '1.3',
                        color: '#0F214A',
                        marginBottom: '16px'
                      }}>{process.title}</h3>

                      <p style={{ 
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: 'clamp(15px, 2.5vw, 18px)', 
                        lineHeight: '1.7', 
                        color: '#5A6C7D',
                        marginBottom: '20px'
                      }}>{process.description}</p>

                      <ul className="space-y-3">
                        {process.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <div style={{ width: '6px', height: '6px', backgroundColor: '#FF6B3D', borderRadius: '50%' }} />
                            <span style={{ 
                              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                              fontSize: '16px',
                              color: '#5A6C7D'
                            }}>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 통계 */}
      <section className="bg-[#0F214A] py-15 md:py-20">
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = getIcon(stat.icon);
              return (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <div 
                        className="w-14 h-14 flex items-center justify-center"
                        style={{ backgroundColor: 'rgba(255, 107, 61, 0.15)', borderRadius: '12px' }}
                      >
                        <IconComponent style={{ width: '28px', height: '28px', color: '#FF6B3D' }} />
                      </div>
                    </div>
                    <div style={{ 
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: 'clamp(32px, 5vw, 48px)', 
                      fontWeight: '700',
                      color: 'white',
                      marginBottom: '8px'
                    }}>{stat.value}</div>
                    <p style={{ 
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '15px',
                      color: '#C9D4E2'
                    }}>{stat.label}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-15 md:py-30">
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <ScrollReveal>
            <div 
              className="relative overflow-hidden p-8 md:p-12"
              style={{ 
                background: 'linear-gradient(135deg, #0F214A 0%, #15305A 100%)',
                borderRadius: '24px'
              }}
            >
              <div 
                className="absolute top-0 right-0 w-64 h-64 opacity-10"
                style={{ background: 'radial-gradient(circle, #FF6B3D 0%, transparent 70%)' }}
              />

              <div className="relative z-10 text-center">
                <h2 style={{ 
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: 'clamp(28px, 5vw, 40px)', 
                  fontWeight: '700', 
                  lineHeight: '1.3',
                  color: 'white',
                  marginBottom: '16px'
                }}>전문 EPC 시공 상담 받기</h2>
                <p style={{ 
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: 'clamp(16px, 3vw, 18px)', 
                  lineHeight: '1.6', 
                  color: '#C9D4E2',
                  marginBottom: '32px',
                  maxWidth: '600px',
                  margin: '0 auto 32px auto'
                }}>프로젝트 규모와 환경에 맞는 최적의 시공 솔루션을 제안해드립니다</p>
                <button
                  onClick={() => onNavigate('inquiry-solar')}
                  className="group inline-flex items-center gap-2 px-8 py-4 transition-all duration-300 hover:shadow-lg hover:scale-105"
                  style={{ 
                    backgroundColor: '#FF6B3D',
                    color: 'white',
                    borderRadius: '12px',
                    fontSize: '18px',
                    fontWeight: '600',
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  무료 상담 신청하기
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" style={{ width: '20px', height: '20px' }} />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}