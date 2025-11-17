import { HardHat, Award, Users, CheckCircle2, Hammer, Shield, Clock, FileCheck } from "lucide-react";

export function BusinessConstruction() {
  const features = [
    {
      icon: Award,
      title: "풍부한 시공 경험",
      desc: "100MW+ 누적 시공 실적",
      stats: "500+",
      label: "완공 프로젝트",
      color: "#FF6B3D"
    },
    {
      icon: Users,
      title: "전문 시공팀",
      desc: "자격증 보유 전문 인력",
      stats: "50+",
      label: "전문 인력",
      color: "#00D9FF"
    },
    {
      icon: Shield,
      title: "안전 관리",
      desc: "무사고 안전 시공",
      stats: "100%",
      label: "안전 관리",
      color: "#FF6B3D"
    },
    {
      icon: Clock,
      title: "정시 준공",
      desc: "계획된 일정 준수",
      stats: "95%+",
      label: "정시 준공률",
      color: "#00D9FF"
    }
  ];

  const constructionTypes = [
    {
      type: "지붕형",
      icon: HardHat,
      items: [
        "공장 지붕",
        "물류센터",
        "축사 및 창고",
        "공공건물"
      ],
      color: "#FF6B3D"
    },
    {
      type: "지상형",
      icon: Hammer,
      items: [
        "일반 부지",
        "산지 개발",
        "염해지역",
        "농업 병행형"
      ],
      color: "#00D9FF"
    },
    {
      type: "특수형",
      icon: Shield,
      items: [
        "수상 태양광",
        "주차장형",
        "BIPV",
        "추적식 시스템"
      ],
      color: "#FF6B3D"
    }
  ];

  const processSteps = [
    {
      phase: "착공 준비",
      duration: "1주",
      tasks: ["현장 측량", "안전 조치", "자재 반입", "인력 배치"]
    },
    {
      phase: "구조물 설치",
      duration: "2-4주",
      tasks: ["기초 공사", "구조물 설치", "수평 조정", "안전 검사"]
    },
    {
      phase: "전기 공사",
      duration: "2-3주",
      tasks: ["모듈 설치", "인버터 설치", "배선 작업", "접속함 설치"]
    },
    {
      phase: "시운전 및 준공",
      duration: "1-2주",
      tasks: ["계통 연계", "시운전", "성능 테스트", "준공 검사"]
    }
  ];

  const safetyStandards = [
    "산업안전보건법 준수",
    "전기안전관리법 준수",
    "정기 안전 교육 실시",
    "개인보호구 착용 의무화",
    "일일 안전 점검",
    "보험 가입 완료"
  ];

  return (
    <div className="min-h-screen bg-white" style={{ paddingTop: '80px' }}>
      {/* Hero Section - 네이비 배경 */}
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
                CONSTRUCTION
              </span>
            </div>
            
            <h1 style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: '700',
              lineHeight: '1.3',
              marginBottom: '24px'
            }}>
              태양광 시공
            </h1>
            
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '18px',
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '32px'
            }}>
              안전하고 정확한 시공으로<br className="hidden md:block" />
              최고 효율의 태양광 발전소를 만들어갑니다.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section - 하얀 배경 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6" style={{
              background: 'rgba(255, 107, 61, 0.08)',
              border: '1px solid rgba(255, 107, 61, 0.2)',
              borderRadius: '100px'
            }}>
              <HardHat size={16} style={{ color: '#FF6B3D' }} />
              <span style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '13px',
                fontWeight: '700',
                color: '#FF6B3D',
                letterSpacing: '2px'
              }}>
                WHY TYRANT
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
              타이런트 시공의 차별성
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative text-center p-8"
                style={{
                  background: 'white',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: '24px',
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)'
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

                <div className="mb-4">
                  <div style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '36px',
                    fontWeight: '700',
                    color: feature.color,
                    lineHeight: '1'
                  }}>
                    {feature.stats}
                  </div>
                  <div style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '14px',
                    color: '#999',
                    marginTop: '4px'
                  }}>
                    {feature.label}
                  </div>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Types - 그레이 배경 */}
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
              시공 유형
            </h2>
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '17px',
              lineHeight: '1.6',
              color: '#666'
            }}>
              다양한 유형의 태양광 발전소 시공 경험을 보유하고 있습니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {constructionTypes.map((type, index) => (
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
                    background: `${type.color}15`,
                    borderRadius: '20px',
                    border: `1px solid ${type.color}20`
                  }}
                >
                  <type.icon size={36} style={{ color: type.color }} />
                </div>

                <h3 style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '26px',
                  fontWeight: '600',
                  color: '#0F214A',
                  lineHeight: '1.3',
                  marginBottom: '20px'
                }}>
                  {type.type}
                </h3>

                <div className="space-y-3">
                  {type.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-3">
                      <CheckCircle2 size={18} style={{ color: type.color, flexShrink: 0 }} />
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

      {/* Process Section - 네이비 배경 */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0F214A] via-[#15305A] to-[#273b82] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF6B3D] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00D9FF] rounded-full blur-3xl"></div>
        </div>

        <div className="relative mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6" style={{
              background: 'rgba(0, 217, 255, 0.15)',
              border: '1px solid rgba(0, 217, 255, 0.3)',
              borderRadius: '100px'
            }}>
              <FileCheck size={16} style={{ color: '#00D9FF' }} />
              <span style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '13px',
                fontWeight: '700',
                color: '#00D9FF',
                letterSpacing: '2px'
              }}>
                PROCESS
              </span>
            </div>

            <h2 style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '40px',
              fontWeight: '700',
              lineHeight: '1.3',
              marginBottom: '16px'
            }}>
              시공 프로세스
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: '32px 28px'
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
                      {step.duration}
                    </span>
                  </div>

                  <h3 style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '22px',
                    fontWeight: '600',
                    lineHeight: '1.3',
                    marginBottom: '16px',
                    color: 'white'
                  }}>
                    {step.phase}
                  </h3>
                </div>

                <div className="space-y-3">
                  {step.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="flex items-start gap-2">
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
                        color: 'rgba(255, 255, 255, 0.9)',
                        lineHeight: '1.5'
                      }}>
                        {task}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section - 하얀 배경 */}
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
                안전 관리 기준
              </h2>
              <p style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '17px',
                color: '#666'
              }}>
                무사고 현장을 위한 철저한 안전 관리
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {safetyStandards.map((standard, index) => (
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
                    {standard}
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
              안전하고 정확한 시공<br />
              타이런트와 함께하세요
            </h2>

            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '18px',
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '40px'
            }}>
              전문 시공팀이 상담부터 준공까지 책임지고 진행합니다
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
              시공 문의하기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
