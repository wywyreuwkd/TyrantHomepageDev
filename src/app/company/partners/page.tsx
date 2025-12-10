import type { Metadata } from "next";
import { Building2, Handshake, Award, CheckCircle2, Zap, TrendingUp, Users, Shield } from "lucide-react";
import { ImageWithFallback } from "@components/shared/ImageWithFallback";

export const metadata: Metadata = {
  title: "파트너사",
  description: "타이런트와 함께하는 파트너사 소개 - 물류, 제조, 유통, 금융 등 다양한 산업 분야의 파트너와 협력하고 있습니다.",
};

export default function Partners() {
  const partnerCategories = [
    {
      icon: Building2,
      title: "물류 및 유통",
      count: "20+",
      color: "#FF6B3D",
      companies: [
        "CJ대한통운", "한진물류", "롯데글로벌로지스", "현대글로비스",
        "쿠팡 풀필먼트센터", "마켓컬리 물류센터"
      ]
    },
    {
      icon: Zap,
      title: "제조 및 산업",
      count: "15+",
      color: "#00D9FF",
      companies: [
        "현대제철", "포스코케미칼", "LG화학", "삼성전자",
        "SK이노베이션", "한화솔루션"
      ]
    },
    {
      icon: Users,
      title: "유통 및 리테일",
      count: "10+",
      color: "#FF6B3D",
      companies: [
        "이마트", "홈플러스", "롯데마트", "코스트코",
        "메가박스", "CGV"
      ]
    },
    {
      icon: Shield,
      title: "금융 및 투자",
      count: "8+",
      color: "#00D9FF",
      companies: [
        "신한금융투자", "KB증권", "산업은행", "기업은행",
        "한국투자증권", "미래에셋증권"
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "초기비용 Zero",
      desc: "설치부터 운영까지 모든 비용을 타이런트가 부담합니다",
      color: "#FF6B3D"
    },
    {
      icon: TrendingUp,
      title: "수익 공유",
      desc: "발전 수익의 일정 비율을 매월 정산하여 지급합니다",
      color: "#00D9FF"
    },
    {
      icon: Shield,
      title: "전주기 관리",
      desc: "설치, 모니터링, 유지보수까지 토탈 솔루션 제공",
      color: "#FF6B3D"
    },
    {
      icon: Award,
      title: "ESG 경영",
      desc: "탄소중립 달성 및 RE100 목표 달성에 기여합니다",
      color: "#00D9FF"
    }
  ];

  const certifications = [
    { name: "ISO 9001", desc: "품질경영시스템" },
    { name: "ISO 14001", desc: "환경경영시스템" },
    { name: "ISO 45001", desc: "안전보건경영" },
    { name: "KS 인증", desc: "한국산업표준" },
    { name: "NEP", desc: "신재생에너지설비" },
    { name: "특허 10+", desc: "기술 특허 보유" }
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
                PARTNERS
              </span>
            </div>
            
            <h1 style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: '700',
              lineHeight: '1.3',
              marginBottom: '24px'
            }}>
              신뢰를 기반으로<br />
              함께 성장합니다
            </h1>
            
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '18px',
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '32px'
            }}>
              국내 주요 기업들과 파트너십을 맺고<br className="hidden md:block" />
              친환경 에너지 전환을 함께 실현하고 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Benefits Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          {/* Section Header */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6" style={{
              background: 'rgba(255, 107, 61, 0.08)',
              border: '1px solid rgba(255, 107, 61, 0.2)',
              borderRadius: '100px'
            }}>
              <Handshake size={16} style={{ color: '#FF6B3D' }} />
              <span style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '13px',
                fontWeight: '700',
                color: '#FF6B3D',
                letterSpacing: '2px'
              }}>
                PARTNERSHIP BENEFITS
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
              파트너사 혜택
            </h2>

            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '17px',
              lineHeight: '1.6',
              color: '#666'
            }}>
              타이런트와 함께하는 기업들이 누리는 특별한 가치
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative"
                style={{
                  background: 'white',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: '20px',
                  padding: '32px 28px',
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div
                  className="mb-6 inline-flex p-3"
                  style={{
                    background: `linear-gradient(135deg, ${benefit.color}15, ${benefit.color}05)`,
                    borderRadius: '16px',
                    border: `1px solid ${benefit.color}20`
                  }}
                >
                  <benefit.icon size={28} style={{ color: benefit.color }} />
                </div>

                <h3 style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#0F214A',
                  lineHeight: '1.3',
                  marginBottom: '12px'
                }}>
                  {benefit.title}
                </h3>

                <p style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: '#666'
                }}>
                  {benefit.desc}
                </p>

                {/* Hover Effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    borderRadius: '20px',
                    border: `2px solid ${benefit.color}`,
                    boxShadow: `0 8px 24px ${benefit.color}20`
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Categories Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          {/* Section Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6" style={{
              background: 'rgba(0, 217, 255, 0.08)',
              border: '1px solid rgba(0, 217, 255, 0.2)',
              borderRadius: '100px'
            }}>
              <Building2 size={16} style={{ color: '#00D9FF' }} />
              <span style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '13px',
                fontWeight: '700',
                color: '#00D9FF',
                letterSpacing: '2px'
              }}>
                PARTNER COMPANIES
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
              주요 협력사
            </h2>

            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '17px',
              lineHeight: '1.6',
              color: '#666',
              maxWidth: '600px'
            }}>
              다양한 산업 분야의 선도 기업들과 함께 친환경 에너지 생태계를 구축하고 있습니다.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {partnerCategories.map((category, index) => (
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
                {/* Header */}
                <div className="flex items-center gap-4 mb-8 pb-6 border-b" style={{ borderColor: 'rgba(0, 0, 0, 0.06)' }}>
                  <div
                    className="p-3"
                    style={{
                      background: `linear-gradient(135deg, ${category.color}15, ${category.color}05)`,
                      borderRadius: '16px',
                      border: `1px solid ${category.color}20`
                    }}
                  >
                    <category.icon size={32} style={{ color: category.color }} />
                  </div>

                  <div className="flex-1">
                    <h3 style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '24px',
                      fontWeight: '600',
                      color: '#0F214A',
                      lineHeight: '1.3',
                      marginBottom: '4px'
                    }}>
                      {category.title}
                    </h3>
                    <div style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: category.color
                    }}>
                      {category.count} 파트너사
                    </div>
                  </div>
                </div>

                {/* Companies List */}
                <div className="grid grid-cols-2 gap-4">
                  {category.companies.map((company, companyIndex) => (
                    <div
                      key={companyIndex}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 size={16} style={{ color: category.color, flexShrink: 0 }} />
                      <span style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '15px',
                        color: '#333',
                        lineHeight: '1.4'
                      }}>
                        {company}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    borderRadius: '24px',
                    border: `2px solid ${category.color}`,
                    boxShadow: `0 12px 32px ${category.color}15`
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          {/* Section Header */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6" style={{
              background: 'rgba(255, 107, 61, 0.08)',
              border: '1px solid rgba(255, 107, 61, 0.2)',
              borderRadius: '100px'
            }}>
              <Award size={16} style={{ color: '#FF6B3D' }} />
              <span style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '13px',
                fontWeight: '700',
                color: '#FF6B3D',
                letterSpacing: '2px'
              }}>
                CERTIFICATIONS
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
              인증 및 자격
            </h2>

            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '17px',
              lineHeight: '1.6',
              color: '#666'
            }}>
              국제 표준 인증과 기술력을 바탕으로 최고의 서비스를 제공합니다
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group"
                style={{
                  background: 'white',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: '16px',
                  padding: '24px 20px',
                  textAlign: 'center',
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div
                  className="w-12 h-12 mx-auto mb-4 flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #FF6B3D15, #00D9FF15)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 107, 61, 0.2)'
                  }}
                >
                  <Award size={24} style={{ color: '#FF6B3D' }} />
                </div>

                <div style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#0F214A',
                  marginBottom: '6px',
                  lineHeight: '1.2'
                }}>
                  {cert.name}
                </div>

                <div style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '13px',
                  color: '#666',
                  lineHeight: '1.4'
                }}>
                  {cert.desc}
                </div>
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
              타이런트와 함께<br />
              친환경 미래를 만들어가세요
            </h2>

            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '18px',
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '40px'
            }}>
              지금 바로 파트너십을 시작하고<br className="hidden md:block" />
              지속 가능한 에너지 전환의 혜택을 누리세요
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                파트너십 문의
              </button>

              <button
                style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '16px',
                  fontWeight: '600',
                  padding: '16px 40px',
                  background: 'transparent',
                  color: 'white',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '100px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                자료 다운로드
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
