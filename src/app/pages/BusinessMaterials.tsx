import { Package, Shield, TrendingDown, Zap, CheckCircle2, Star, Award, Clock } from "lucide-react";

export function BusinessMaterials() {
  const products = [
    {
      category: "태양광 모듈",
      brands: ["한화큐셀", "LG전자", "신성이엔지", "현대에너지솔루션"],
      icon: Package,
      color: "#FF6B3D"
    },
    {
      category: "인버터",
      brands: ["SMA", "Huawei", "LS일렉트릭", "효성중공업"],
      icon: Zap,
      color: "#00D9FF"
    },
    {
      category: "구조물",
      brands: ["국내 A급 제조사", "맞춤형 구조물 설계", "내구성 보장"],
      icon: Shield,
      color: "#FF6B3D"
    },
    {
      category: "기타 자재",
      brands: ["케이블", "접속함", "모니터링 시스템", "안전 장비"],
      icon: Star,
      color: "#00D9FF"
    }
  ];

  const advantages = [
    {
      icon: TrendingDown,
      title: "최저가 보장",
      desc: "제조사 직접 계약으로 중간 마진 최소화",
      color: "#FF6B3D"
    },
    {
      icon: Shield,
      title: "품질 보증",
      desc: "A급 제품만 공급, 장기 품질 보증",
      color: "#00D9FF"
    },
    {
      icon: Clock,
      title: "신속 배송",
      desc: "전국 물류망 확보로 빠른 배송",
      color: "#FF6B3D"
    },
    {
      icon: Award,
      title: "기술 지원",
      desc: "설치 및 운영 관련 기술 지원 서비스",
      color: "#00D9FF"
    }
  ];

  const processSteps = [
    { step: "01", title: "견적 요청", desc: "필요 자재 및 수량 문의" },
    { step: "02", title: "맞춤 견적", desc: "최적 제품 추천 및 견적 제공" },
    { step: "03", title: "계약 체결", desc: "공급 계약 및 일정 협의" },
    { step: "04", title: "배송 및 설치", desc: "현장 배송 및 기술 지원" }
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
            <div className="inline-block px-4 py-2 bg-[#FF6B3D]/20 border border-[#FF6B3D]/30 mb-6" style={{ borderRadius: '100px' }}>
              <span style={{ 
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '14px',
                fontWeight: '600',
                color: '#FF6B3D'
              }}>
                SOLAR MATERIALS
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
              태양광 기자재 공급
            </h1>
            
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '18px',
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '32px'
            }}>
              검증된 A급 제조사의 고품질 태양광 자재를<br className="hidden md:block" />
              합리적인 가격으로 공급합니다.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20" style={{ borderRadius: '100px' }}>
                <Package size={20} style={{ color: '#FF6B3D' }} />
                <span style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: 'white'
                }}>
                  제조사 직접 계약
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
                  품질 보증
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section - 네이비 배경 */}
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
              <Package size={16} style={{ color: '#FF6B3D' }} />
              <span style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '13px',
                fontWeight: '700',
                color: '#FF6B3D',
                letterSpacing: '2px'
              }}>
                PRODUCT LINEUP
              </span>
            </div>

            <h2 style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '40px',
              fontWeight: '700',
              lineHeight: '1.3',
              marginBottom: '16px'
            }}>
              공급 제품
            </h2>

            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '17px',
              lineHeight: '1.6',
              color: 'rgba(255, 255, 255, 0.8)'
            }}>
              국내외 검증된 제조사의 프리미엄 제품을 공급합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group relative"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '24px',
                  padding: '40px',
                  transition: 'all 0.3s ease'
                }}
              >
                <div
                  className="mb-6 inline-flex p-4"
                  style={{
                    background: `${product.color}20`,
                    borderRadius: '20px',
                    border: `1px solid ${product.color}30`
                  }}
                >
                  <product.icon size={36} style={{ color: product.color }} />
                </div>

                <h3 style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '26px',
                  fontWeight: '600',
                  lineHeight: '1.3',
                  marginBottom: '20px',
                  color: 'white'
                }}>
                  {product.category}
                </h3>

                <div className="space-y-3">
                  {product.brands.map((brand, brandIndex) => (
                    <div key={brandIndex} className="flex items-center gap-3">
                      <CheckCircle2 size={18} style={{ color: product.color, flexShrink: 0 }} />
                      <span style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '16px',
                        color: 'rgba(255, 255, 255, 0.9)',
                        lineHeight: '1.5'
                      }}>
                        {brand}
                      </span>
                    </div>
                  ))}
                </div>

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    borderRadius: '24px',
                    border: `2px solid ${product.color}`,
                    boxShadow: `0 12px 32px ${product.color}30`
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section - 하얀 배경 */}
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
              타이런트의 강점
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, index) => (
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

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    borderRadius: '20px',
                    border: `2px solid ${adv.color}`,
                    boxShadow: `0 8px 24px ${adv.color}20`
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - 그레이 배경 */}
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
              공급 프로세스
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative p-8"
                style={{
                  background: 'white',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: '20px',
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)'
                }}
              >
                <div
                  className="w-14 h-14 mb-6 flex items-center justify-center"
                  style={{
                    background: index % 2 === 0 
                      ? 'linear-gradient(135deg, #FF6B3D, #FF8C3D)' 
                      : 'linear-gradient(135deg, #00D9FF, #00B8E6)',
                    borderRadius: '14px',
                    boxShadow: index % 2 === 0
                      ? '0 6px 20px rgba(255, 107, 61, 0.25)'
                      : '0 6px 20px rgba(0, 217, 255, 0.25)'
                  }}
                >
                  <span style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '20px',
                    fontWeight: '700',
                    color: 'white'
                  }}>
                    {step.step}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '22px',
                  fontWeight: '600',
                  color: '#0F214A',
                  lineHeight: '1.3',
                  marginBottom: '8px'
                }}>
                  {step.title}
                </h3>

                <p style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: '#666'
                }}>
                  {step.desc}
                </p>
              </div>
            ))}
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
              최적의 자재로<br />
              성공적인 발전소를 만드세요
            </h2>

            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '18px',
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '40px'
            }}>
              지금 바로 문의하시면 맞춤 견적을 받아보실 수 있습니다
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
              견적 문의하기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}