import { Search, FileCheck, Shield, TrendingUp, CheckCircle2, AlertTriangle, ClipboardCheck } from "lucide-react";

export default function BusinessDueDiligence() {
  const inspectionItems = [
    {
      icon: FileCheck,
      title: "기술 실사",
      items: ["설계도면 검토", "설비 사양 확인", "시공 품질 평가", "성능 테스트"],
      color: "#FF6B3D"
    },
    {
      icon: Shield,
      title: "법률 실사",
      items: ["인허가 서류 검토", "계약서 검토", "소유권 확인", "분쟁 여부 조사"],
      color: "#00D9FF"
    },
    {
      icon: TrendingUp,
      title: "재무 실사",
      items: ["발전량 검증", "수익성 분석", "대출 현황 확인", "운영비 검토"],
      color: "#FF6B3D"
    },
    {
      icon: AlertTriangle,
      title: "리스크 평가",
      items: ["기술적 리스크", "재무적 리스크", "법적 리스크", "운영 리스크"],
      color: "#00D9FF"
    }
  ];

  const process = [
    { step: "01", title: "자료 수집", desc: "발전소 관련 모든 서류 및 데이터 수집" },
    { step: "02", title: "현장 실사", desc: "전문가 직접 방문하여 설비 상태 점검" },
    { step: "03", title: "분석 및 평가", desc: "수집된 데이터 종합 분석" },
    { step: "04", title: "보고서 작성", desc: "실사 결과 및 권고사항 정리" }
  ];

  const purposes = [
    {
      title: "발전소 매매",
      desc: "매수 전 발전소 상태 및 가치 정확한 평가",
      icon: Search
    },
    {
      title: "투자 검토",
      desc: "투자 의사결정을 위한 객관적 자료 확보",
      icon: TrendingUp
    },
    {
      title: "대출 심사",
      desc: "금융기관 대출 심사용 실사 보고서",
      icon: FileCheck
    },
    {
      title: "분쟁 해결",
      desc: "성능 미달, 계약 위반 등 분쟁 시 객관적 자료",
      icon: Shield
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
                DUE DILIGENCE
              </span>
            </div>
            
            <h1 style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: '700',
              lineHeight: '1.3',
              marginBottom: '24px'
            }}>
              태양광 기술실사
            </h1>
            
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '18px',
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.9)'
            }}>
              전문가의 객관적인 실사로<br className="hidden md:block" />
              안전한 투자와 거래를 지원합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Inspection Items - 하얀 배경 */}
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
              실사 항목
            </h2>
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '17px',
              color: '#666'
            }}>
              종합적인 실사로 정확한 평가를 제공합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inspectionItems.map((item, index) => (
              <div
                key={index}
                className="group p-8"
                style={{
                  background: 'white',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: '20px',
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div
                  className="w-16 h-16 mb-6 flex items-center justify-center"
                  style={{
                    background: `${item.color}15`,
                    borderRadius: '16px',
                    border: `1px solid ${item.color}20`
                  }}
                >
                  <item.icon size={32} style={{ color: item.color }} />
                </div>

                <h3 style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#0F214A',
                  marginBottom: '16px'
                }}>
                  {item.title}
                </h3>

                <div className="space-y-2">
                  {item.items.map((subItem, subIndex) => (
                    <div key={subIndex} className="flex items-start gap-2">
                      <div
                        className="mt-1"
                        style={{
                          width: '6px',
                          height: '6px',
                          background: item.color,
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
                        {subItem}
                      </span>
                    </div>
                  ))}
                </div>

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    borderRadius: '20px',
                    border: `2px solid ${item.color}`,
                    boxShadow: `0 8px 24px ${item.color}20`
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - 그레이 배경 */}
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
              실사 프로세스
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
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
                  marginBottom: '8px'
                }}>
                  {step.title}
                </h3>

                <p style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '15px',
                  color: '#666',
                  lineHeight: '1.6'
                }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Purposes - 하얀 배경 */}
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
              실사 목적
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {purposes.map((purpose, index) => (
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
                    background: index % 2 === 0 ? '#FF6B3D15' : '#00D9FF15',
                    borderRadius: '16px',
                    border: index % 2 === 0 ? '1px solid #FF6B3D20' : '1px solid #00D9FF20'
                  }}
                >
                  <purpose.icon size={32} style={{ color: index % 2 === 0 ? '#FF6B3D' : '#00D9FF' }} />
                </div>

                <h3 style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#0F214A',
                  marginBottom: '8px'
                }}>
                  {purpose.title}
                </h3>

                <p style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '15px',
                  color: '#666',
                  lineHeight: '1.5'
                }}>
                  {purpose.desc}
                </p>
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
              정확한 실사로<br />
              안전한 거래를 보장합니다
            </h2>

            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '18px',
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '40px'
            }}>
              전문가와 상담하고 신뢰할 수 있는 실사 보고서를 받아보세요
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
              기술실사 문의
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
