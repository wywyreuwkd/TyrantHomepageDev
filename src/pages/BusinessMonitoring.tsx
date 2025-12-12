import { Activity, BarChart3, Bell, CheckCircle2, LineChart, Monitor, Settings, Smartphone } from "lucide-react";
import { SubNavigation } from "../components/SubNavigation";

interface BusinessMonitoringProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function BusinessMonitoring({ onNavigate, currentPage }: BusinessMonitoringProps) {
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

      {/* Sub Navigation */}
      <SubNavigation category="business" currentPage={currentPage} onNavigate={onNavigate} />

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
              실시간 모니터링 대시보드
            </h2>
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '17px',
              lineHeight: '1.6',
              color: '#666'
            }}>
              언제 어디서나 발전소 현황을 한눈에 확인하세요
            </p>
          </div>

          {/* Dashboard Mockup */}
          <div className="max-w-4xl mx-auto mb-24">
            <div 
              style={{
                background: 'linear-gradient(135deg, #0F214A 0%, #273b82 100%)',
                borderRadius: '32px',
                padding: '40px',
                boxShadow: '0 24px 64px rgba(15, 33, 74, 0.25)'
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8 pb-6" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div>
                  <div 
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '14px',
                      color: 'rgba(255, 255, 255, 0.6)',
                      marginBottom: '4px'
                    }}
                  >
                    발전소 이름
                  </div>
                  <div 
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '20px',
                      fontWeight: '600',
                      color: 'white'
                    }}
                  >
                    타이런트 제1발전소
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2" style={{ background: 'rgba(255, 107, 61, 0.15)', borderRadius: '12px' }}>
                  <div style={{ width: '8px', height: '8px', background: '#FF6B3D', borderRadius: '50%' }} />
                  <span style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#FF6B3D'
                  }}>
                    실시간 발전 중
                  </span>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {/* Today Revenue */}
                <div 
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    borderRadius: '20px',
                    padding: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div 
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '14px',
                      color: 'rgba(255, 255, 255, 0.6)',
                      marginBottom: '12px'
                    }}
                  >
                    오늘의 예상수익
                  </div>
                  <div 
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '36px',
                      fontWeight: '700',
                      color: 'white',
                      lineHeight: '1.2'
                    }}
                  >
                    444,770<span style={{ fontSize: '18px', fontWeight: '500', marginLeft: '4px' }}>원</span>
                  </div>
                </div>

                {/* Generation Time */}
                <div 
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    borderRadius: '20px',
                    padding: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div 
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '14px',
                      color: 'rgba(255, 255, 255, 0.6)',
                      marginBottom: '12px'
                    }}
                  >
                    발전 평균시간
                  </div>
                  <div 
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '36px',
                      fontWeight: '700',
                      color: 'white',
                      lineHeight: '1.2'
                    }}
                  >
                    2.77<span style={{ fontSize: '18px', fontWeight: '500', marginLeft: '4px' }}>시간</span>
                  </div>
                </div>

                {/* Total Generation */}
                <div 
                  style={{
                    background: 'rgba(255, 107, 61, 0.15)',
                    borderRadius: '20px',
                    padding: '24px',
                    border: '1px solid rgba(255, 107, 61, 0.3)'
                  }}
                >
                  <div 
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '14px',
                      color: 'rgba(255, 255, 255, 0.8)',
                      marginBottom: '12px'
                    }}
                  >
                    총 발전량
                  </div>
                  <div 
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '36px',
                      fontWeight: '700',
                      color: '#FF6B3D',
                      lineHeight: '1.2'
                    }}
                  >
                    2,277.70<span style={{ fontSize: '18px', fontWeight: '500', marginLeft: '4px' }}>kWh</span>
                  </div>
                </div>
              </div>

              {/* My Power Plant */}
              <div 
                style={{
                  background: 'white',
                  borderRadius: '24px',
                  padding: '32px'
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '18px',
                      fontWeight: '600',
                      color: '#0F214A'
                    }}
                  >
                    내 발전소 목록
                  </h3>
                  <button 
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '14px',
                      color: '#666',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    더보기 →
                  </button>
                </div>

                {/* Plant Card */}
                <div 
                  style={{
                    background: '#F7FAFD',
                    borderRadius: '20px',
                    padding: '24px',
                    border: '1px solid rgba(15, 33, 74, 0.08)',
                    marginBottom: '16px'
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span 
                          style={{
                            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                            fontSize: '18px',
                            fontWeight: '600',
                            color: '#0F214A'
                          }}
                        >
                          손에도 제1 발전소 1
                        </span>
                      </div>
                      <div 
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '14px',
                          color: '#666'
                        }}
                      >
                        94.32kW
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div 
                        className="px-3 py-1.5"
                        style={{
                          background: 'rgba(255, 107, 61, 0.1)',
                          borderRadius: '8px',
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '12px',
                          fontWeight: '600',
                          color: '#FF6B3D'
                        }}
                      >
                        전력거래
                      </div>
                      <div 
                        className="px-3 py-1.5"
                        style={{
                          background: 'rgba(76, 175, 80, 0.1)',
                          borderRadius: '8px',
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '12px',
                          fontWeight: '600',
                          color: '#4CAF50'
                        }}
                      >
                        발전량
                      </div>
                    </div>
                  </div>

                  {/* Status Indicator */}
                  <div className="flex items-center gap-2 mb-4 pb-4" style={{ borderBottom: '1px solid rgba(15, 33, 74, 0.08)' }}>
                    <div style={{ width: '32px', height: '32px', background: 'rgba(76, 175, 80, 0.15)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: '12px', height: '12px', background: '#4CAF50', borderRadius: '50%' }} />
                    </div>
                    <span 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '14px',
                        color: '#4CAF50',
                        fontWeight: '600'
                      }}
                    >
                      설비 정상 가동 중
                    </span>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div 
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '12px',
                          color: '#999',
                          marginBottom: '4px'
                        }}
                      >
                        발전량
                      </div>
                      <div 
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '20px',
                          fontWeight: '600',
                          color: '#0F214A'
                        }}
                      >
                        274.80<span style={{ fontSize: '12px', marginLeft: '2px' }}>kWh</span>
                      </div>
                    </div>
                    <div>
                      <div 
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '12px',
                          color: '#999',
                          marginBottom: '4px'
                        }}
                      >
                        발전시간
                      </div>
                      <div 
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '20px',
                          fontWeight: '600',
                          color: '#0F214A'
                        }}
                      >
                        2.85<span style={{ fontSize: '12px', marginLeft: '2px' }}>시간</span>
                      </div>
                    </div>
                    <div>
                      <div 
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '12px',
                          color: '#999',
                          marginBottom: '4px'
                        }}
                      >
                        예상수익
                      </div>
                      <div 
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '20px',
                          fontWeight: '600',
                          color: '#FF6B3D'
                        }}
                      >
                        53,873<span style={{ fontSize: '12px', marginLeft: '2px' }}>원</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SMP & REC */}
                <div className="grid grid-cols-2 gap-4">
                  <div 
                    style={{
                      background: '#F7FAFD',
                      borderRadius: '16px',
                      padding: '20px',
                      border: '1px solid rgba(15, 33, 74, 0.08)'
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span 
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '14px',
                          color: '#666'
                        }}
                      >
                        SMP
                      </span>
                      <span 
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '12px',
                          color: '#999'
                        }}
                      >
                        원/kWh
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span 
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '28px',
                          fontWeight: '700',
                          color: '#FF6B3D'
                        }}
                      >
                        105
                      </span>
                      <span 
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '14px',
                          fontWeight: '600',
                          color: '#E53E3E'
                        }}
                      >
                        ▲ 3.32
                      </span>
                    </div>
                  </div>

                  <div 
                    style={{
                      background: '#F7FAFD',
                      borderRadius: '16px',
                      padding: '20px',
                      border: '1px solid rgba(15, 33, 74, 0.08)'
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span 
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '14px',
                          color: '#666'
                        }}
                      >
                        REC 단가
                      </span>
                      <span 
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '12px',
                          color: '#999'
                        }}
                      >
                        원/REC
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span 
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '28px',
                          fontWeight: '700',
                          color: '#0F214A'
                        }}
                      >
                        72,100
                      </span>
                      <span 
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '14px',
                          fontWeight: '600',
                          color: '#3182CE'
                        }}
                      >
                        ▼ 2
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Monitoring Items Grid */}
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