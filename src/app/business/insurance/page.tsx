import { Shield, FileText, Handshake, CheckCircle2, DollarSign, Clock } from "lucide-react";

export default function BusinessInsurance() {
  const services = [
    {
      icon: Shield,
      title: "발전량 보험",
      desc: "자연재해로 인한 발전량 손실 보상",
      coverage: "최대 80% 보상",
      color: "#FF6B3D"
    },
    {
      icon: FileText,
      title: "재산 종합보험",
      desc: "화재, 도난, 파손 등 재산 피해 보장",
      coverage: "설비 가액 100%",
      color: "#00D9FF"
    },
    {
      icon: Handshake,
      title: "배상 책임보험",
      desc: "제3자에 대한 배상 책임 커버",
      coverage: "최대 10억원",
      color: "#FF6B3D"
    }
  ];

  const adminServices = [
    {
      category: "회계 관리",
      items: ["수익 정산", "세무 신고 대행", "부가세 환급", "장부 작성"]
    },
    {
      category: "보험 관리",
      items: ["보험 가입 대행", "보험금 청구", "갱신 관리", "보상 협의"]
    },
    {
      category: "법무 지원",
      items: ["계약서 검토", "분쟁 조정", "법률 자문", "소송 지원"]
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
            <div className="inline-block px-4 py-2 bg-[#FF6B3D]/20 border border-[#FF6B3D]/30 mb-6" style={{ borderRadius: '100px' }}>
              <span style={{ 
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '14px',
                fontWeight: '600',
                color: '#FF6B3D'
              }}>
                ADMINISTRATION & INSURANCE
              </span>
            </div>
            
            <h1 style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: '700',
              lineHeight: '1.3',
              marginBottom: '24px'
            }}>
              태양광 사무관리<br/>(보험)
            </h1>
            
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '18px',
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.9)'
            }}>
              회계, 세무, 보험까지<br className="hidden md:block" />
              발전소 운영의 모든 행정 업무를 대행합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Insurance Services - 하얀 배경 */}
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
              보험 서비스
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group text-center p-10"
                style={{
                  background: 'white',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: '24px',
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div
                  className="w-20 h-20 mx-auto mb-8 flex items-center justify-center"
                  style={{
                    background: `${service.color}15`,
                    borderRadius: '20px',
                    border: `1px solid ${service.color}20`
                  }}
                >
                  <service.icon size={40} style={{ color: service.color }} />
                </div>

                <h3 style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '24px',
                  fontWeight: '600',
                  color: '#0F214A',
                  marginBottom: '12px'
                }}>
                  {service.title}
                </h3>

                <p style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '16px',
                  color: '#666',
                  marginBottom: '20px',
                  lineHeight: '1.6'
                }}>
                  {service.desc}
                </p>

                <div
                  className="inline-block px-4 py-2"
                  style={{
                    background: `${service.color}10`,
                    borderRadius: '100px'
                  }}
                >
                  <span style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '15px',
                    fontWeight: '600',
                    color: service.color
                  }}>
                    {service.coverage}
                  </span>
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

      {/* Admin Services - 그레이 배경 */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="mb-16">
            <h2 style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '40px',
              fontWeight: '700',
              color: '#0F214A',
              marginBottom: '16px'
            }}>
              사무 관리 서비스
            </h2>
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '17px',
              color: '#666'
            }}>
              복잡한 행정 업무는 전문가에게 맡기세요
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {adminServices.map((service, index) => (
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
              번거로운 행정 업무<br />
              전문가에게 맡기세요
            </h2>

            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '18px',
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '40px'
            }}>
              발전소 운영에만 집중하시고 나머지는 저희가 처리합니다
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
              사무관리 서비스 문의
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
