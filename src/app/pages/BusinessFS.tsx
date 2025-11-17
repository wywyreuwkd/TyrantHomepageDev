import { FileSearch, CheckCircle2, TrendingUp, Calculator, BarChart3, MapPin, Clock, DollarSign } from "lucide-react";

export function BusinessFS() {
  const analysisItems = [
    {
      icon: MapPin,
      title: "입지 분석",
      desc: "일조량, 음영, 접근성 등 현장 조건 종합 평가",
      color: "#FF6B3D"
    },
    {
      icon: Calculator,
      title: "수익성 계산",
      desc: "발전량 예측, 투자비용, 예상 수익률 정밀 분석",
      color: "#00D9FF"
    },
    {
      icon: BarChart3,
      title: "재무 모델링",
      desc: "20년 장기 현금흐름, IRR, NPV 시뮬레이션",
      color: "#FF6B3D"
    },
    {
      icon: FileSearch,
      title: "리스크 분석",
      desc: "기술적, 재무적, 법적 리스크 사전 검토",
      color: "#00D9FF"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "현장 방문 및 조사",
      desc: "전문가 직접 방문하여 지붕/부지 상태, 구조물, 인프라 확인",
      items: ["지붕/토지 면적 측정", "구조물 안정성 검토", "전력 인프라 조사", "음영 분석"]
    },
    {
      step: "02",
      title: "발전량 시뮬레이션",
      desc: "기상 데이터 기반 연간 발전량 및 계절별 패턴 예측",
      items: ["일조량 데이터 분석", "PVsyst 시뮬레이션", "손실률 계산", "발전량 예측"]
    },
    {
      step: "03",
      title: "경제성 분석",
      desc: "투자비, 운영비, 수익 구조를 고려한 재무 모델 구축",
      items: ["초기 투자비 산정", "운영비 추정", "수익률 계산", "회수기간 분석"]
    },
    {
      step: "04",
      title: "보고서 작성 및 제출",
      desc: "종합 분석 결과를 보고서로 작성하여 의사결정 지원",
      items: ["사업성 평가 결과", "리스크 요인 정리", "투자 권고안", "실행 계획"]
    }
  ];

  const deliverables = [
    "현장 조사 보고서 (사진, 도면 포함)",
    "발전량 시뮬레이션 결과",
    "20년 재무 모델 (Excel)",
    "투자 수익률 분석 (IRR, NPV, 회수기간)",
    "리스크 평가 및 완화 방안",
    "사업 타당성 종합 의견서"
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
                FEASIBILITY STUDY
              </span>
            </div>
            
            <h1 style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: '700',
              lineHeight: '1.3',
              marginBottom: '24px'
            }}>
              태양광 사업성 분석 (FS)
            </h1>
            
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '18px',
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '32px'
            }}>
              데이터 기반의 정밀한 분석으로<br className="hidden md:block" />
              성공적인 태양광 투자를 위한 의사결정을 지원합니다.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-3">
                <Clock size={20} style={{ color: '#FF6B3D' }} />
                <div>
                  <div style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '13px',
                    color: 'rgba(255, 255, 255, 0.7)',
                    marginBottom: '2px'
                  }}>
                    소요기간
                  </div>
                  <div style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '17px',
                    fontWeight: '600'
                  }}>
                    5~7 영업일
                  </div>
                </div>
              </div>

              <div className="w-px h-12 bg-white/20"></div>

              <div className="flex items-center gap-3">
                <DollarSign size={20} style={{ color: '#00D9FF' }} />
                <div>
                  <div style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '13px',
                    color: 'rgba(255, 255, 255, 0.7)',
                    marginBottom: '2px'
                  }}>
                    분석 비용
                  </div>
                  <div style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '17px',
                    fontWeight: '600'
                  }}>
                    별도 문의
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Items Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6" style={{
              background: 'rgba(255, 107, 61, 0.08)',
              border: '1px solid rgba(255, 107, 61, 0.2)',
              borderRadius: '100px'
            }}>
              <FileSearch size={16} style={{ color: '#FF6B3D' }} />
              <span style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '13px',
                fontWeight: '700',
                color: '#FF6B3D',
                letterSpacing: '2px'
              }}>
                ANALYSIS SCOPE
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
              핵심 분석 항목
            </h2>

            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '17px',
              lineHeight: '1.6',
              color: '#666'
            }}>
              투자 의사결정에 필요한 모든 요소를 종합적으로 검토합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {analysisItems.map((item, index) => (
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
                    background: `linear-gradient(135deg, ${item.color}15, ${item.color}05)`,
                    borderRadius: '16px',
                    border: `1px solid ${item.color}20`
                  }}
                >
                  <item.icon size={28} style={{ color: item.color }} />
                </div>

                <h3 style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#0F214A',
                  lineHeight: '1.3',
                  marginBottom: '12px'
                }}>
                  {item.title}
                </h3>

                <p style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: '#666'
                }}>
                  {item.desc}
                </p>

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

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6" style={{
              background: 'rgba(0, 217, 255, 0.08)',
              border: '1px solid rgba(0, 217, 255, 0.2)',
              borderRadius: '100px'
            }}>
              <TrendingUp size={16} style={{ color: '#00D9FF' }} />
              <span style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '13px',
                fontWeight: '700',
                color: '#00D9FF',
                letterSpacing: '2px'
              }}>
                ANALYSIS PROCESS
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
              분석 프로세스
            </h2>

            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '17px',
              lineHeight: '1.6',
              color: '#666',
              maxWidth: '600px'
            }}>
              체계적인 4단계 프로세스로 정확하고 신뢰할 수 있는 분석 결과를 제공합니다
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
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
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Step Number */}
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

                  {/* Content */}
                  <div className="flex-1">
                    <h3 style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '26px',
                      fontWeight: '600',
                      color: '#0F214A',
                      lineHeight: '1.3',
                      marginBottom: '12px'
                    }}>
                      {step.title}
                    </h3>

                    <p style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '16px',
                      lineHeight: '1.6',
                      color: '#666',
                      marginBottom: '20px'
                    }}>
                      {step.desc}
                    </p>

                    <div className="grid md:grid-cols-2 gap-3">
                      {step.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center gap-2">
                          <CheckCircle2 
                            size={16} 
                            style={{ color: index % 2 === 0 ? '#FF6B3D' : '#00D9FF', flexShrink: 0 }} 
                          />
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
                  </div>
                </div>

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    borderRadius: '24px',
                    border: index % 2 === 0 ? '2px solid #FF6B3D' : '2px solid #00D9FF',
                    boxShadow: index % 2 === 0 
                      ? '0 12px 32px rgba(255, 107, 61, 0.15)'
                      : '0 12px 32px rgba(0, 217, 255, 0.15)'
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
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
              제공 산출물
            </h2>

            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '17px',
              lineHeight: '1.6',
              color: '#666'
            }}>
              분석 완료 후 받으실 수 있는 상세 자료
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, index) => (
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
                <CheckCircle2 size={20} style={{ color: '#FF6B3D', flexShrink: 0 }} />
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
              전문적인 사업성 분석으로<br />
              성공적인 투자를 시작하세요
            </h2>

            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '18px',
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '40px'
            }}>
              지금 바로 문의하시면 전문 컨설턴트가 상담해드립니다
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
              사업성 분석 문의하기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
