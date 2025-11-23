import { Activity, BarChart3, Bell, CheckCircle2, LineChart, Monitor, Settings, Smartphone } from "lucide-react";

export function BusinessMonitoring() {
  const features = [
    {
      icon: Monitor,
      title: "실시간 모니터링",
      desc: "발전량, 수익 실시간 확인",
      color: "#FF6B3D"
    },
    {
      icon: Bell,
      title: "이상 알림",
      desc: "문제 발생 시 즉시 알림",
      color: "#00D9FF"
    },
    {
      icon: BarChart3,
      title: "통계 분석",
      desc: "기간별 발전 데이터 분석",
      color: "#FF6B3D"
    },
    {
      icon: Smartphone,
      title: "모바일 앱",
      desc: "언제 어디서나 확인 가능",
      color: "#00D9FF"
    }
  ];

  const monitoringData = [
    {
      category: "발전량 관리",
      items: [
        "실시간 발전량 확인",
        "일/월/년 발전량 통계",
        "목표 대비 달성률",
        "예상 발전량 비교"
      ],
      icon: LineChart,
      color: "#FF6B3D"
    },
    {
      category: "설비 관리",
      items: [
        "인버터 상태 모니터링",
        "모듈 성능 추적",
        "고장 감지 및 알림",
        "점검 이력 관리"
      ],
      icon: Settings,
      color: "#00D9FF"
    },
    {
      category: "수익 관리",
      items: [
        "실시간 수익 계산",
        "월별 정산 내역",
        "SMP/REC 가격 추적",
        "투자 수익률 분석"
      ],
      icon: BarChart3,
      color: "#FF6B3D"
    }
  ];

  const services = [
    {
      title: "정기 점검",
      desc: "월 1회 전문가 현장 점검",
      items: ["육안 검사", "성능 측정", "청소 상태 확인", "점검 보고서"]
    },
    {
      title: "긴급 출동",
      desc: "문제 발생 시 24시간 대응",
      items: ["24시간 콜센터", "긴급 출동 서비스", "즉시 수리", "원인 분석"]
    },
    {
      title: "성능 최적화",
      desc: "발전 효율 극대화",
      items: ["모듈 청소", "각도 조정", "배선 점검", "인버터 최적화"]
    },
    {
      title: "보고서 제공",
      desc: "상세한 운영 리포트",
      items: ["월간 리포트", "연간 리포트", "세무 자료", "보험 자료"]
    }
  ];

  const benefits = [
    "발전 효율 5-10% 향상",
    "고장 조기 발견으로 손실 최소화",
    "체계적인 데이터 관리",
    "세무/보험 자료 자동 제공",
    "전문가의 지속적인 관리",
    "안심하고 수익 창출"
  ];

  return (
    <div className="min-h-screen bg-white" style={{ paddingTop: '80px' }}>
      {/* Hero Section - 네이비 배경 */}
      <section className="relative bg-gradient-to-br from-[#0F214A] via-[#15305A] to-[#273b82] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-96 h-96 bg-[#FF6B3D] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#00D9FF] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative mx-auto px-6 md:px-10 py-20 md:py-32" style={{ maxWidth: '1280px' }}>
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-[#00D9FF]/20 border border-[#00D9FF]/30 mb-6" style={{ borderRadius: '100px' }}>
              <span style={{ 
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '14px',
                fontWeight: '600',
                color: '#00D9FF'
              }}>
                O&M SERVICE
              </span>
            </div>
            
            <h1 style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: '700',
              lineHeight: '1.3',
              marginBottom: '24px',
              color: 'white'
            }}>
              태양광 관리운영<br/>
              (모니터링)
            </h1>
            
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '18px',
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '32px'
            }}>
              실시간 모니터링과 전문가의 체계적인 관리로<br className="hidden md:block" />
              태양광 발전소의 수익을 극대화합니다.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20" style={{ borderRadius: '100px' }}>
                <Activity size={20} style={{ color: '#FF6B3D' }} />
                <span style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: 'white'
                }}>
                  24시간 실시간 모니터링
                </span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20" style={{ borderRadius: '100px' }}>
                <CheckCircle2 size={20} style={{ color: '#00D9FF' }} />
                <span style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: 'white'
                }}>
                  전문가 정기 점검
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - 네이비 배경 */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0F214A] via-[#15305A] to-[#273b82] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF6B3D] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00D9FF] rounded-full blur-3xl"></div>
        </div>

        <div className="relative mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6" style={{
              background: 'rgba(255, 107, 61, 0.15)',
              border: '1px solid rgba(255, 107, 61, 0.3)',
              borderRadius: '100px'
            }}>
              <Monitor size={16} style={{ color: '#FF6B3D' }} />
              <span style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '13px',
                fontWeight: '700',
                color: '#FF6B3D',
                letterSpacing: '2px'
              }}>
                KEY FEATURES
              </span>
            </div>

            <h2 style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '40px',
              fontWeight: '700',
              lineHeight: '1.3',
              marginBottom: '16px'
            }}>
              핵심 기능
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px'
                }}
              >
                <div
                  className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                  style={{
                    background: `${feature.color}20`,
                    borderRadius: '16px',
                    border: `1px solid ${feature.color}30`
                  }}
                >
                  <feature.icon size={32} style={{ color: feature.color }} />
                </div>

                <h3 style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '20px',
                  fontWeight: '600',
                  marginBottom: '8px',
                  color: 'white'
                }}>
                  {feature.title}
                </h3>

                <p style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '15px',
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.5'
                }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring Data - 하얀 배경 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="mb-16 text-center">
            <h2 style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '40px',
              fontWeight: '700',
              color: '#0F214A',
              lineHeight: '1.3',
              marginBottom: '16px'
            }}>
              모니터링 항목
            </h2>
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '17px',
              lineHeight: '1.6',
              color: '#666'
            }}>
              발전소 운영에 필요한 모든 데이터를 실시간으로 확인하세요
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {monitoringData.map((data, index) => (
              <div
                key={index}
                className="group"
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
                    background: `${data.color}15`,
                    borderRadius: '20px',
                    border: `1px solid ${data.color}20`
                  }}
                >
                  <data.icon size={36} style={{ color: data.color }} />
                </div>

                <h3 style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '24px',
                  fontWeight: '600',
                  color: '#0F214A',
                  lineHeight: '1.3',
                  marginBottom: '20px'
                }}>
                  {data.category}
                </h3>

                <div className="space-y-3">
                  {data.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-3">
                      <CheckCircle2 size={18} style={{ color: data.color, flexShrink: 0 }} />
                      <span style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '16px',
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
                    border: `2px solid ${data.color}`,
                    boxShadow: `0 12px 32px ${data.color}15`
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - 그레이 배경 */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="mb-16">
            <h2 style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '40px',
              fontWeight: '700',
              color: '#0F214A',
              lineHeight: '1.3',
              marginBottom: '16px'
            }}>
              관리 서비스
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: '20px',
                  padding: '32px',
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)'
                }}
              >
                <h3 style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '22px',
                  fontWeight: '600',
                  color: '#0F214A',
                  lineHeight: '1.3',
                  marginBottom: '8px'
                }}>
                  {service.title}
                </h3>

                <p style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: '#666',
                  marginBottom: '20px'
                }}>
                  {service.desc}
                </p>

                <div className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-2">
                      <div
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
                        color: '#666'
                      }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits - 네이비 배경 */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0F214A] via-[#15305A] to-[#273b82] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D9FF] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6B3D] rounded-full blur-3xl"></div>
        </div>

        <div className="relative mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h2 style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '40px',
                fontWeight: '700',
                lineHeight: '1.3',
                marginBottom: '16px'
              }}>
                관리 효과
              </h2>
              <p style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '17px',
                color: 'rgba(255, 255, 255, 0.8)'
              }}>
                전문적인 관리로 얻을 수 있는 실질적인 혜택
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-6"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px'
                  }}
                >
                  <CheckCircle2 size={20} style={{ color: '#FF6B3D', flexShrink: 0 }} />
                  <span style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '16px',
                    color: 'rgba(255, 255, 255, 0.9)',
                    lineHeight: '1.5'
                  }}>
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - 하얀 배경 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '40px',
              fontWeight: '700',
              color: '#0F214A',
              lineHeight: '1.3',
              marginBottom: '24px'
            }}>
              전문가의 체계적인 관리로<br />
              수익을 극대화하세요
            </h2>

            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '18px',
              lineHeight: '1.7',
              color: '#666',
              marginBottom: '40px'
            }}>
              지금 바로 문의하시면 모니터링 시스템을 무료로 체험해보실 수 있습니다
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
              관리 서비스 문의
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}