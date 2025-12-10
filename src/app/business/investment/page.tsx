import { TrendingUp, DollarSign, PieChart, BarChart3, CheckCircle2, Shield, Calculator, Clock } from "lucide-react";

export default function BusinessInvestment() {
  const investmentTypes = [
    {
      title: "자산형 투자",
      desc: "발전소 지분 투자로 장기 수익 창출",
      returns: "연 8-12%",
      period: "20년",
      icon: PieChart,
      color: "#FF6B3D",
      features: [
        "안정적인 현금흐름",
        "세제 혜택",
        "자산 가치 상승",
        "인플레이션 헤지"
      ]
    },
    {
      title: "프로젝트 금융",
      desc: "발전소 개발 단계부터 참여",
      returns: "연 10-15%",
      period: "15-20년",
      icon: BarChart3,
      color: "#00D9FF",
      features: [
        "높은 수익률",
        "전문가 관리",
        "리스크 분산",
        "세무 최적화"
      ]
    }
  ];

  const investmentProcess = [
    {
      step: "01",
      title: "투자 상담",
      desc: "투자 목표 및 규모 확인",
      details: ["투자 목적 분석", "자금 규모 확인", "리스크 성향 파악"]
    },
    {
      step: "02",
      title: "사업 선정",
      desc: "최적의 투자 대상 선별",
      details: ["실사 보고서 검토", "수익성 분석", "리스크 평가"]
    },
    {
      step: "03",
      title: "투자 실행",
      desc: "계약 및 자금 집행",
      details: ["투자 계약 체결", "자금 납입", "지분 확정"]
    },
    {
      step: "04",
      title: "운영 관리",
      desc: "전문가의 체계적 관리",
      details: ["발전소 운영", "수익금 배분", "정기 보고"]
    }
  ];

  const advantages = [
    {
      icon: Shield,
      title: "안정적 수익",
      desc: "20년 장기 고정 수익 보장",
      color: "#FF6B3D"
    },
    {
      icon: TrendingUp,
      title: "높은 수익률",
      desc: "연 8-15% 예상 수익률",
      color: "#00D9FF"
    },
    {
      icon: DollarSign,
      title: "세제 혜택",
      desc: "다양한 세액공제 혜택",
      color: "#FF6B3D"
    },
    {
      icon: Calculator,
      title: "전문가 관리",
      desc: "운영부터 회계까지 토탈 케어",
      color: "#00D9FF"
    }
  ];

  const riskManagement = [
    "발전량 보험 가입",
    "전문 O&M 업체 관리",
    "정기적 설비 점검",
    "실시간 모니터링 시스템",
    "법률/회계 자문",
    "재무 구조 최적화"
  ];

  return (
    <div className="min-h-screen" style={{ paddingTop: '80px' }}>
      {/* Hero Section - 네이비 그라데이션 */}
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
                SOLAR INVESTMENT
              </span>
            </div>
            
            <h1 style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: '700',
              lineHeight: '1.3',
              marginBottom: '24px'
            }}>
              태양광 투자
            </h1>
            
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '18px',
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '32px'
            }}>
              안정적이고 지속가능한 수익을 원하신다면<br className="hidden md:block" />
              태양광 발전소 투자를 시작하세요.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-3">
                <TrendingUp size={24} style={{ color: '#FF6B3D' }} />
                <div>
                  <div style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '13px',
                    color: 'rgba(255, 255, 255, 0.7)',
                    marginBottom: '2px'
                  }}>
                    예상 수익률
                  </div>
                  <div style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '20px',
                    fontWeight: '700'
                  }}>
                    연 8-15%
                  </div>
                </div>
              </div>

              <div className="w-px h-12 bg-white/20"></div>

              <div className="flex items-center gap-3">
                <Clock size={24} style={{ color: '#00D9FF' }} />
                <div>
                  <div style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '13px',
                    color: 'rgba(255, 255, 255, 0.7)',
                    marginBottom: '2px'
                  }}>
                    투자 기간
                  </div>
                  <div style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '20px',
                    fontWeight: '700'
                  }}>
                    15-20년
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Types - 하얀 배경 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6" style={{
              background: 'rgba(255, 107, 61, 0.08)',
              border: '1px solid rgba(255, 107, 61, 0.2)',
              borderRadius: '100px'
            }}>
              <PieChart size={16} style={{ color: '#FF6B3D' }} />
              <span style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '13px',
                fontWeight: '700',
                color: '#FF6B3D',
                letterSpacing: '2px'
              }}>
                INVESTMENT OPTIONS
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
              투자 상품
            </h2>

            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '17px',
              lineHeight: '1.6',
              color: '#666'
            }}>
              투자 목적에 맞는 최적의 상품을 선택하세요
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {investmentTypes.map((type, index) => (
              <div
                key={index}
                className="group relative"
                style={{
                  background: 'white',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: '24px',
                  padding: '48px',
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div
                  className="mb-8 inline-flex p-4"
                  style={{
                    background: `${type.color}15`,
                    borderRadius: '20px',
                    border: `1px solid ${type.color}20`
                  }}
                >
                  <type.icon size={40} style={{ color: type.color }} />
                </div>

                <h3 style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '28px',
                  fontWeight: '600',
                  color: '#0F214A',
                  lineHeight: '1.3',
                  marginBottom: '12px'
                }}>
                  {type.title}
                </h3>

                <p style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: '#666',
                  marginBottom: '24px'
                }}>
                  {type.desc}
                </p>

                <div className="flex gap-6 mb-8 pb-8" style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
                  <div>
                    <div style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '13px',
                      color: '#999',
                      marginBottom: '4px'
                    }}>
                      예상 수익률
                    </div>
                    <div style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '24px',
                      fontWeight: '700',
                      color: type.color
                    }}>
                      {type.returns}
                    </div>
                  </div>
                  <div className="w-px bg-gray-200"></div>
                  <div>
                    <div style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '13px',
                      color: '#999',
                      marginBottom: '4px'
                    }}>
                      투자 기간
                    </div>
                    <div style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '24px',
                      fontWeight: '700',
                      color: '#0F214A'
                    }}>
                      {type.period}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {type.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle2 size={18} style={{ color: type.color, flexShrink: 0 }} />
                      <span style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '16px',
                        color: '#333'
                      }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    borderRadius: '24px',
                    border: `2px solid ${type.color}`,
                    boxShadow: `0 12px 32px ${type.color}15`
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section - 그레이 배경 */}
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
              투자 장점
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
                    background: `${adv.color}15`,
                    borderRadius: '16px',
                    border: `1px solid ${adv.color}20`
                  }}
                >
                  <adv.icon size={32} style={{ color: adv.color }} />
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

      {/* Process Section - 네이비 배경 */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0F214A] via-[#15305A] to-[#273b82] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF6B3D] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00D9FF] rounded-full blur-3xl"></div>
        </div>

        <div className="relative mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="mb-16">
            <h2 style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '40px',
              fontWeight: '700',
              lineHeight: '1.3',
              marginBottom: '16px'
            }}>
              투자 프로세스
            </h2>
          </div>

          <div className="space-y-8">
            {investmentProcess.map((step, index) => (
              <div
                key={index}
                className="group"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '24px',
                  padding: '40px',
                  transition: 'all 0.3s ease'
                }}
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="shrink-0">
                    <div
                      style={{
                        width: '80px',
                        height: '80px',
                        background: index % 2 === 0 
                          ? 'linear-gradient(135deg, #FF6B3D, #FF8C3D)' 
                          : 'linear-gradient(135deg, #00D9FF, #00B8E6)',
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: index % 2 === 0
                          ? '0 8px 24px rgba(255, 107, 61, 0.25)'
                          : '0 8px 24px rgba(0, 217, 255, 0.25)'
                      }}
                    >
                      <span style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '28px',
                        fontWeight: '700',
                        color: 'white'
                      }}>
                        {step.step}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '26px',
                      fontWeight: '600',
                      lineHeight: '1.3',
                      marginBottom: '12px',
                      color: 'white'
                    }}>
                      {step.title}
                    </h3>

                    <p style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '16px',
                      lineHeight: '1.6',
                      color: 'rgba(255, 255, 255, 0.8)',
                      marginBottom: '20px'
                    }}>
                      {step.desc}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {step.details.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className="px-4 py-2"
                          style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            borderRadius: '100px'
                          }}
                        >
                          <span style={{
                            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                            fontSize: '14px',
                            color: 'rgba(255, 255, 255, 0.9)'
                          }}>
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Management - 하얀 배경 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h2 style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '40px',
                fontWeight: '700',
                color: '#0F214A',
                lineHeight: '1.3',
                marginBottom: '16px'
              }}>
                리스크 관리
              </h2>
              <p style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '17px',
                color: '#666'
              }}>
                체계적인 리스크 관리로 안전한 투자를 보장합니다
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {riskManagement.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-6"
                  style={{
                    background: 'white',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    borderRadius: '16px',
                    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)'
                  }}
                >
                  <Shield size={20} style={{ color: '#FF6B3D', flexShrink: 0 }} />
                  <span style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '16px',
                    color: '#333',
                    lineHeight: '1.5'
                  }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - 네이비 배경 */}
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
              지금 바로 태양광 투자를<br />
              시작하세요
            </h2>

            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '18px',
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '40px'
            }}>
              투자 전문가와 상담하고 최적의 투자 전략을 수립하세요
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
              투자 상담 신청
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
