import { Server, Zap, Snowflake, Shield, CheckCircle2, TrendingUp, DollarSign, Cpu } from "lucide-react";

export default function BusinessDataCenter() {
  const features = [
    {
      icon: Zap,
      title: "안정적 전력",
      desc: "태양광으로 생산한 안정적인 전력 공급",
      color: "#FF6B3D"
    },
    {
      icon: Snowflake,
      title: "냉각 시스템",
      desc: "에너지 효율적인 냉각 솔루션",
      color: "#00D9FF"
    },
    {
      icon: Shield,
      title: "보안 시스템",
      desc: "24시간 물리적/논리적 보안",
      color: "#FF6B3D"
    },
    {
      icon: Server,
      title: "최신 인프라",
      desc: "고성능 서버 및 네트워크 장비",
      color: "#00D9FF"
    }
  ];

  const advantages = [
    {
      title: "전력비 절감",
      desc: "태양광 자가발전으로 최대 70% 절감",
      icon: DollarSign,
      stats: "70%",
      label: "절감",
      color: "#FF6B3D"
    },
    {
      title: "친환경",
      desc: "재생에너지 100% 사용",
      icon: Shield,
      stats: "100%",
      label: "재생에너지",
      color: "#00D9FF"
    },
    {
      title: "고가용성",
      desc: "99.99% 가동률 보장",
      icon: TrendingUp,
      stats: "99.99%",
      label: "가동률",
      color: "#FF6B3D"
    },
    {
      title: "확장성",
      desc: "필요에 따라 유연한 확장",
      icon: Cpu,
      stats: "무제한",
      label: "확장 가능",
      color: "#00D9FF"
    }
  ];

  const services = [
    {
      category: "코로케이션",
      items: ["랙 단위 임대", "전용 공간 제공", "전력/냉각 제공", "24시간 모니터링"]
    },
    {
      category: "클라우드",
      items: ["가상 서버", "스토리지", "네트워크", "보안 서비스"]
    },
    {
      category: "관리형 서비스",
      items: ["서버 관리", "백업", "보안 관리", "기술 지원"]
    }
  ];

  return (
    <div className="min-h-screen bg-white" style={{ paddingTop: '80px' }}>
      {/* Hero - 네이비 */}
      <section className="relative bg-gradient-to-br from-[#0F214A] via-[#15305A] to-[#273b82] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF6B3D] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
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
                DATA CENTER
              </span>
            </div>
            
            <h1 style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: '700',
              lineHeight: '1.3',
              marginBottom: '24px'
            }}>
              데이터센터
            </h1>
            
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '18px',
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '32px'
            }}>
              태양광 발전과 데이터센터의 결합<br className="hidden md:block" />
              친환경 고효율 데이터센터 솔루션을 제공합니다.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20" style={{ borderRadius: '100px' }}>
                <Zap size={20} style={{ color: '#FF6B3D' }} />
                <span style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: 'white'
                }}>
                  태양광 자가발전
                </span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20" style={{ borderRadius: '100px' }}>
                <Shield size={20} style={{ color: '#00D9FF' }} />
                <span style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: 'white'
                }}>
                  99.99% 가동률
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features - 하얀 배경 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="mb-16 text-center">
            <h2 style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '40px',
              fontWeight: '700',
              color: '#0F214A',
              marginBottom: '16px'
            }}>
              핵심 기능
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-8"
                style={{
                  background: 'white',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: '20px',
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div
                  className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                  style={{
                    background: `${feature.color}15`,
                    borderRadius: '16px',
                    border: `1px solid ${feature.color}20`
                  }}
                >
                  <feature.icon size={32} style={{ color: feature.color }} />
                </div>

                <h3 style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#0F214A',
                  marginBottom: '8px'
                }}>
                  {feature.title}
                </h3>

                <p style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '15px',
                  color: '#666',
                  lineHeight: '1.5'
                }}>
                  {feature.desc}
                </p>

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    borderRadius: '20px',
                    border: `2px solid ${feature.color}`,
                    boxShadow: `0 8px 24px ${feature.color}20`
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages - 그레이 배경 */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="mb-16 text-center">
            <h2 style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '40px',
              fontWeight: '700',
              color: '#0F214A',
              marginBottom: '16px'
            }}>
              경쟁력
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

                <div className="mb-4">
                  <div style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '32px',
                    fontWeight: '700',
                    color: adv.color,
                    lineHeight: '1'
                  }}>
                    {adv.stats}
                  </div>
                  <div style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '14px',
                    color: '#999',
                    marginTop: '4px'
                  }}>
                    {adv.label}
                  </div>
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

      {/* Services - 하얀 배경 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="mb-16">
            <h2 style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '40px',
              fontWeight: '700',
              color: '#0F214A',
              marginBottom: '16px'
            }}>
              제공 서비스
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
                  marginBottom: '20px'
                }}>
                  {service.category}
                </h3>

                <div className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-3">
                      <CheckCircle2 size={18} style={{ color: index % 2 === 0 ? '#FF6B3D' : '#00D9FF', flexShrink: 0 }} />
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - 네이비 */}
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
              친환경 고효율 데이터센터<br />
              지금 시작하세요
            </h2>

            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '18px',
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '40px'
            }}>
              전력비를 절감하고 친환경 인증을 받으세요
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
                boxShadow: '0 8px 24px rgba(255, 107, 61, 0.3)'
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
