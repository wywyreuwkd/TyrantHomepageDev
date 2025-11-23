import { Lightbulb, FileCheck, Map, Users, Zap, Building2, CheckCircle2, TrendingUp } from "lucide-react";

export function BusinessDevelopment() {
  const services = [
    {
      icon: Map,
      title: "부지 발굴",
      desc: "전국 산업단지, 물류센터, 유휴부지 발굴 및 확보",
      color: "#FF6B3D",
      items: ["입지 분석", "토지주 협상", "계약 체결"]
    },
    {
      icon: FileCheck,
      title: "인허가 진행",
      desc: "발전사업 허가부터 전기사업 등록까지 전 과정 대행",
      color: "#00D9FF",
      items: ["발전사업허가", "개발행위허가", "전기사업등록"]
    },
    {
      icon: Building2,
      title: "설계 및 설계",
      desc: "최적 시스템 설계 및 구조물 안전성 검토",
      color: "#FF6B3D",
      items: ["전기설계", "구조설계", "토목설계"]
    },
    {
      icon: Users,
      title: "금융 조달",
      desc: "PF, 투자유치 등 최적의 금융 솔루션 제공",
      color: "#00D9FF",
      items: ["프로젝트금융", "투자유치", "세무컨설팅"]
    }
  ];

  const process = [
    {
      phase: "기획 단계",
      duration: "1~2개월",
      steps: [
        "부지 발굴 및 현장 실사",
        "사업성 분석 (FS)",
        "사업 구조 설계",
        "토지주/건물주 협상"
      ]
    },
    {
      phase: "인허가 단계",
      duration: "3~6개월",
      steps: [
        "발전사업 허가 신청",
        "개발행위 허가",
        "한전 계통연계 검토",
        "각종 인허가 취득"
      ]
    },
    {
      phase: "설계 단계",
      duration: "1~2개월",
      steps: [
        "전기/구조/토목 설계",
        "안전성 검토",
        "자재 사양 확정",
        "시공 계획 수립"
      ]
    },
    {
      phase: "금융 단계",
      duration: "1~3개월",
      steps: [
        "금융기관 협의",
        "PF 조건 협상",
        "투자자 유치",
        "자금 조달 완료"
      ]
    }
  ];

  const advantages = [
    {
      title: "풍부한 개발 경험",
      desc: "100MW+ 프로젝트 개발 실적",
      icon: TrendingUp
    },
    {
      title: "전국 네트워크",
      desc: "지자체, 토지주 협력 네트워크",
      icon: Map
    },
    {
      title: "원스톱 서비스",
      desc: "기획부터 준공까지 토탈 솔루션",
      icon: Zap
    },
    {
      title: "금융 전문성",
      desc: "최적의 금융 구조 설계",
      icon: Building2
    }
  ];

  return (
    <div className="min-h-screen bg-white" style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F214A] via-[#15305A] to-[#273b82] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF6B3D] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
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
                SOLAR DEVELOPMENT
              </span>
            </div>
            
            <h1 style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: '700',
              lineHeight: '1.3',
              marginBottom: '24px'
            }}>
              태양광 개발
            </h1>
            
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '18px',
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '32px'
            }}>
              부지 발굴부터 금융 조달까지<br className="hidden md:block" />
              태양광 발전소 개발의 모든 과정을 책임집니다.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6" style={{
              background: 'rgba(255, 107, 61, 0.08)',
              border: '1px solid rgba(255, 107, 61, 0.2)',
              borderRadius: '100px'
            }}>
              <Lightbulb size={16} style={{ color: '#FF6B3D' }} />
              <span style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '13px',
                fontWeight: '700',
                color: '#FF6B3D',
                letterSpacing: '2px'
              }}>
                CORE SERVICES
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
              핵심 서비스
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative"
                style={{
                  background: 'white',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: '24px',
                  padding: '40px',
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div
                  className="mb-6 inline-flex p-4"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}15, ${service.color}05)`,
                    borderRadius: '20px',
                    border: `1px solid ${service.color}20`
                  }}
                >
                  <service.icon size={36} style={{ color: service.color }} />
                </div>

                <h3 style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '26px',
                  fontWeight: '600',
                  color: '#0F214A',
                  lineHeight: '1.3',
                  marginBottom: '12px'
                }}>
                  {service.title}
                </h3>

                <p style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: '#666',
                  marginBottom: '24px'
                }}>
                  {service.desc}
                </p>

                <div className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-3">
                      <CheckCircle2 size={18} style={{ color: service.color, flexShrink: 0 }} />
                      <span style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '15px',
                        color: '#333'
                      }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    borderRadius: '24px',
                    border: `2px solid ${service.color}`,
                    boxShadow: `0 12px 32px ${service.color}15`
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6" style={{
              background: 'rgba(0, 217, 255, 0.08)',
              border: '1px solid rgba(0, 217, 255, 0.2)',
              borderRadius: '100px'
            }}>
              <Zap size={16} style={{ color: '#00D9FF' }} />
              <span style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '13px',
                fontWeight: '700',
                color: '#00D9FF',
                letterSpacing: '2px'
              }}>
                DEVELOPMENT PROCESS
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
              개발 프로세스
            </h2>

            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '17px',
              lineHeight: '1.6',
              color: '#666',
              maxWidth: '600px'
            }}>
              체계적인 단계별 프로세스로 안정적인 프로젝트 개발을 진행합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((phase, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: '20px',
                  padding: '32px 28px',
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)'
                }}
              >
                <div className="mb-6">
                  <div
                    className="inline-flex items-center justify-center px-4 py-2 mb-3"
                    style={{
                      background: index % 2 === 0 
                        ? 'linear-gradient(135deg, #FF6B3D, #FF8C3D)' 
                        : 'linear-gradient(135deg, #00D9FF, #00B8E6)',
                      borderRadius: '100px',
                      boxShadow: index % 2 === 0
                        ? '0 4px 12px rgba(255, 107, 61, 0.25)'
                        : '0 4px 12px rgba(0, 217, 255, 0.25)'
                    }}
                  >
                    <span style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '13px',
                      fontWeight: '700',
                      color: 'white'
                    }}>
                      {phase.duration}
                    </span>
                  </div>

                  <h3 style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '22px',
                    fontWeight: '600',
                    color: '#0F214A',
                    lineHeight: '1.3',
                    marginBottom: '4px'
                  }}>
                    {phase.phase}
                  </h3>
                </div>

                <div className="space-y-3">
                  {phase.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start gap-2">
                      <div
                        className="mt-1"
                        style={{
                          width: '6px',
                          height: '6px',
                          background: index % 2 === 0 ? '#FF6B3D' : '#00D9FF',
                          borderRadius: '50%',
                          flexShrink: 0
                        }}
                      ></div>
                      <span style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '15px',
                        color: '#666',
                        lineHeight: '1.5'
                      }}>
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="mb-12 text-center">
            <h2 style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '40px',
              fontWeight: '700',
              color: '#0F214A',
              lineHeight: '1.3',
              marginBottom: '16px'
            }}>
              타이런트의 경쟁력
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, index) => (
              <div
                key={index}
                className="text-center p-8"
                style={{
                  background: 'white',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: '20px',
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)'
                }}
              >
                <div
                  className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                  style={{
                    background: index % 2 === 0 
                      ? 'linear-gradient(135deg, #FF6B3D15, #FF6B3D05)'
                      : 'linear-gradient(135deg, #00D9FF15, #00D9FF05)',
                    borderRadius: '16px',
                    border: index % 2 === 0 ? '1px solid #FF6B3D20' : '1px solid #00D9FF20'
                  }}
                >
                  <adv.icon size={32} style={{ color: index % 2 === 0 ? '#FF6B3D' : '#00D9FF' }} />
                </div>

                <h3 style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#0F214A',
                  marginBottom: '8px'
                }}>
                  {adv.title}
                </h3>

                <p style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '15px',
                  color: '#666',
                  lineHeight: '1.5'
                }}>
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0F214A] via-[#15305A] to-[#273b82] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D9FF] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6B3D] rounded-full blur-3xl"></div>
        </div>

        <div className="relative mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '40px',
              fontWeight: '700',
              lineHeight: '1.3',
              marginBottom: '24px'
            }}>
              태양광 발전소 개발<br />
              지금 시작하세요
            </h2>

            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '18px',
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '40px'
            }}>
              전문가와 상담하고 최적의 개발 계획을 수립하세요
            </p>

            <button
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '16px',
                fontWeight: '600',
                padding: '16px 40px',
                background: '#FF6B3D',
                color: 'white',
                border: 'none',
                borderRadius: '100px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 24px rgba(255, 107, 61, 0.3)'
              }}
            >
              개발 문의하기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
