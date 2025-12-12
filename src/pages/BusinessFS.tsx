import { Calculator, TrendingUp, DollarSign, FileText, CheckCircle2, Shield, Award, Zap, Clock, FileSearch, ArrowRight, BarChart3, MapPin, Sun, Activity, AlertTriangle, PiggyBank, TrendingDown, Users, Building } from "lucide-react";
import { SubNavigation } from "../components/SubNavigation";
import { PageHero } from "../components/PageHero";
import { useState } from "react";
import { ScrollReveal } from "../components/ScrollReveal";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface BusinessFSProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function BusinessFS({ onNavigate, currentPage }: BusinessFSProps) {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  // 1. 프로젝트 개요 항목
  const projectOverview = [
    {
      icon: MapPin,
      title: "위치 분석",
      description: "부지의 지리적 위치, 접근성, 지형 조건 등을 종합적으로 분석합니다.",
      details: ["위도/경도 확인", "교통 접근성", "지형 및 경사도", "주변 환경 조사"]
    },
    {
      icon: Zap,
      title: "설비 용량",
      description: "최적의 태양광 설비 용량을 산정하고 설치 가능 용량을 검토합니다.",
      details: ["설치 가능 면적", "모듈 배치 계획", "인버터 용량", "계통 연계 용량"]
    },
    {
      icon: Clock,
      title: "사업 기간",
      description: "프로젝트의 전체 일정과 단계별 소요 기간을 명확히 제시합니다.",
      details: ["인허가 기간", "시공 기간", "운영 기간 (20년)", "ROI 예측 기간"]
    },
    {
      icon: Building,
      title: "EPC 개요",
      description: "설계, 조달, 시공(EPC)의 전체적인 계획과 실행 전략을 수립합니다.",
      details: ["설계 방안", "자재 조달 계획", "시공 일정", "품질 관리 체계"]
    }
  ];

  // 2. 발전량 분석
  const generationAnalysis = [
    {
      icon: Sun,
      title: "일사량 분석",
      percentage: "4.2",
      unit: "kWh/m²/day",
      description: "해당 지역의 연평균 일사량 데이터를 기상청 및 국제 데이터베이스를 통해 수집하고 분석합니다.",
      image: "https://images.unsplash.com/photo-1725308659447-bf1b10f6635a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGZhcm0lMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc2MzQ0MTUyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Activity,
      title: "모듈 효율",
      percentage: "21.5",
      unit: "%",
      description: "최신 고효율 태양광 모듈의 변환 효율을 분석하고 성능 저하율을 고려한 장기 발전량을 예측합니다.",
      image: "https://images.unsplash.com/photo-1742112125554-fdb788faedaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlciUyMHNvbGFyJTIwcGFuZWwlMjBpbnNwZWN0aW9ufGVufDF8fHx8MTc2MzQ0MTUyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: BarChart3,
      title: "발전량 예측",
      percentage: "1,450",
      unit: "MWh/년",
      description: "PVsyst 등 전문 시뮬레이션 프로그램을 활용하여 월별, 계절별, 연간 발전량을 정밀하게 예측합니다.",
      image: "https://images.unsplash.com/photo-1534951009808-766178b47a4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBncm93dGglMjBncmFwaHxlbnwxfHx8fDE3NjM0NDE1MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  // 3. 수익성 분석
  const profitabilityMetrics = [
    {
      title: "SMP + REC 수익",
      value: "연 1억 2,500만원",
      description: "계통한계가격(SMP)과 신재생에너지 공급인증서(REC) 판매를 통한 예상 연간 수익",
      breakdown: [
        { label: "SMP 수익", value: "7,200만원" },
        { label: "REC 수익", value: "5,300만원" }
      ],
      color: "#FF6B3D"
    },
    {
      title: "내부수익률 (IRR)",
      value: "12.5%",
      description: "20년 운영 기간 동안의 내부수익률로, 투자 대비 수익성을 나타내는 핵심 지표",
      breakdown: [
        { label: "목표 IRR", value: "10% 이상" },
        { label: "예상 IRR", value: "12.5%" }
      ],
      color: "#0F214A"
    },
    {
      title: "투자회수기간",
      value: "7.2년",
      description: "초기 투자금을 회수하는데 소요되는 기간으로, 단축될수록 투자 안정성이 높음",
      breakdown: [
        { label: "목표 기간", value: "10년 이내" },
        { label: "예상 기간", value: "7.2년" }
      ],
      color: "#FFB800"
    }
  ];

  // 4. 비용 분석
  const costAnalysis = [
    {
      category: "설비비 (CAPEX)",
      icon: Award,
      total: "12억 5,000만원",
      items: [
        { name: "태양광 모듈", amount: "5억 2,000만원", percentage: 42 },
        { name: "인버터", amount: "2억 3,000만원", percentage: 18 },
        { name: "구조물 및 설치", amount: "3억 원", percentage: 24 },
        { name: "전기공사", amount: "1억 5,000만원", percentage: 12 },
        { name: "기타 (설계, 인허가)", amount: "5,000만원", percentage: 4 }
      ]
    },
    {
      category: "운영비 (OPEX)",
      icon: TrendingDown,
      total: "연 2,500만원",
      items: [
        { name: "유지보수 비용", amount: "1,200만원", percentage: 48 },
        { name: "보험료", amount: "600만원", percentage: 24 },
        { name: "모니터링", amount: "300만원", percentage: 12 },
        { name: "세금 및 관리비", amount: "400만원", percentage: 16 }
      ]
    },
    {
      category: "금융비용",
      icon: PiggyBank,
      total: "연 4,800만원",
      items: [
        { name: "대출 원금", amount: "8억원", percentage: 64 },
        { name: "연 이자율", amount: "6.0%", percentage: 6 },
        { name: "연간 이자", amount: "4,800만원", percentage: 100 },
        { name: "상환 기간", amount: "15년", percentage: 0 }
      ]
    }
  ];

  // 5. 리스크 평가
  const riskFactors = [
    {
      category: "민원 리스크",
      level: "낮음",
      color: "#0F214A",
      issues: [
        "주변 주민 반대",
        "경관 훼손 우려",
        "반사광 민원",
        "소음 발생"
      ],
      mitigation: "주민 설명회 개최, 경관 조화 설계, 반사 방지 필름 적용"
    },
    {
      category: "인허가 리스크",
      level: "중간",
      color: "#FF6B3D",
      issues: [
        "개발행위허가",
        "전기사업허가",
        "농지전용허가",
        "산지전용허가"
      ],
      mitigation: "사전 협의 진행, 전문 행정사 활용, 단계별 체크리스트 관리"
    },
    {
      category: "기술적 리스크",
      level: "낮음",
      color: "#0F214A",
      issues: [
        "모듈 성능 저하",
        "인버터 고장",
        "계통 연계 지연",
        "설비 손상"
      ],
      mitigation: "A급 제조사 선정, 정기 점검, 보험 가입, 품질 보증"
    },
    {
      category: "재무적 리스크",
      level: "중간",
      color: "#FF6B3D",
      issues: [
        "SMP 가격 하락",
        "REC 가격 변동",
        "금리 인상",
        "발전량 미달"
      ],
      mitigation: "보수적 수익 예측, 고정가격 계약, 성능 보증, 보험 가입"
    }
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <PageHero
        badge={{ text: "사업영역", color: "#FF6B3D" }}
        title="태양광 사업성 분석 (FS)"
        description="데이터 기반의 정밀한 분석으로 성공적인 태양광 투자를 위한 의사결정을 지원합니다."
      />

      {/* Sub Navigation */}
      <SubNavigation category="business" currentPage={currentPage} onNavigate={onNavigate} />

      {/* 1. 프로젝트 개요 */}
      <section style={{ background: 'white', padding: '120px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="mb-16">
            <div 
              className="inline-block px-5 py-2 mb-4"
              style={{
                background: 'rgba(15, 33, 74, 0.05)',
                borderRadius: '100px',
                border: '2px solid #0F214A'
              }}
            >
              <span 
                style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '14px',
                  fontWeight: '700',
                  color: '#0F214A',
                  letterSpacing: '1px'
                }}
              >
                01. PROJECT OVERVIEW
              </span>
            </div>
            <h2 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '48px',
                fontWeight: '700',
                color: '#0F214A',
                lineHeight: '1.4',
                marginBottom: '16px'
              }}
            >
              프로젝트 개요
            </h2>
            <p 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '16px',
                color: '#666',
                lineHeight: '1.5'
              }}
            >
              태양광 발전 사업의 전체적인 윤곽을 파악합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projectOverview.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div
                  className="group cursor-pointer"
                  style={{
                    background: 'white',
                    borderRadius: '24px',
                    padding: '40px',
                    border: '1px solid rgba(15, 33, 74, 0.1)',
                    boxShadow: '0 4px 16px rgba(15, 33, 74, 0.04)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    minHeight: '320px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 16px 40px rgba(15, 33, 74, 0.12)';
                    e.currentTarget.style.borderColor = '#FF6B3D';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(15, 33, 74, 0.04)';
                    e.currentTarget.style.borderColor = 'rgba(15, 33, 74, 0.1)';
                  }}
                >
                  <div 
                    className="mb-6 group-hover:scale-110"
                    style={{
                      width: '64px',
                      height: '64px',
                      background: 'linear-gradient(135deg, #FF6B3D15, #FF8C3D15)',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    <item.icon size={32} style={{ color: '#FF6B3D' }} />
                  </div>

                  <h3 
                    className="mb-3"
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '24px',
                      fontWeight: '700',
                      color: '#0F214A'
                    }}
                  >
                    {item.title}
                  </h3>

                  <p 
                    className="mb-6"
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '15px',
                      color: '#666',
                      lineHeight: '1.7'
                    }}
                  >
                    {item.description}
                  </p>

                  <div className="space-y-2">
                    {item.details.map((detail, dIndex) => (
                      <div key={dIndex} className="flex items-center gap-2">
                        <div style={{
                          width: '6px',
                          height: '6px',
                          background: '#FF6B3D',
                          borderRadius: '50%'
                        }} />
                        <span 
                          style={{
                            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                            fontSize: '14px',
                            color: '#666'
                          }}
                        >
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 2. 발전량 분석 */}
      <section style={{ background: '#F7FAFD', padding: '120px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="mb-16">
            <div 
              className="inline-block px-5 py-2 mb-4"
              style={{
                background: 'white',
                borderRadius: '100px',
                border: '2px solid #0F214A'
              }}
            >
              <span 
                style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '14px',
                  fontWeight: '700',
                  color: '#0F214A',
                  letterSpacing: '1px'
                }}
              >
                02. GENERATION ANALYSIS
              </span>
            </div>
            <h2 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '48px',
                fontWeight: '700',
                color: '#0F214A',
                lineHeight: '1.4',
                marginBottom: '16px'
              }}
            >
              발전량 분석
            </h2>
            <p 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '16px',
                color: '#666',
                lineHeight: '1.5'
              }}
            >
              정밀한 시뮬레이션으로 연간 발전량을 예측합니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {generationAnalysis.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div
                  className="group overflow-hidden"
                  style={{
                    background: 'white',
                    borderRadius: '32px',
                    boxShadow: '0 8px 32px rgba(15, 33, 74, 0.08)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-12px)';
                    e.currentTarget.style.boxShadow = '0 20px 48px rgba(15, 33, 74, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(15, 33, 74, 0.08)';
                  }}
                >
                  {/* Image */}
                  <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                    <ImageWithFallback 
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                      className="group-hover:scale-110"
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to bottom, transparent 40%, rgba(0, 0, 0, 0.6))'
                    }} />
                    
                    {/* Icon Overlay */}
                    <div 
                      className="absolute bottom-4 left-4"
                      style={{
                        width: '56px',
                        height: '56px',
                        background: 'rgba(255, 107, 61, 0.9)',
                        borderRadius: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      <item.icon size={28} style={{ color: 'white' }} />
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '32px' }}>
                    <h3 
                      className="mb-4"
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '22px',
                        fontWeight: '700',
                        color: '#0F214A'
                      }}
                    >
                      {item.title}
                    </h3>

                    <div className="mb-4">
                      <span 
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '48px',
                          fontWeight: '700',
                          color: '#FF6B3D',
                          lineHeight: '1'
                        }}
                      >
                        {item.percentage}
                      </span>
                      <span 
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '18px',
                          fontWeight: '600',
                          color: '#999',
                          marginLeft: '8px'
                        }}
                      >
                        {item.unit}
                      </span>
                    </div>

                    <p 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '14px',
                        color: '#666',
                        lineHeight: '1.7'
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 수익성 분석 */}
      <section style={{ background: 'linear-gradient(135deg, #0F214A 0%, #273b82 100%)', padding: '120px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="text-center mb-16">
            <div 
              className="inline-block px-5 py-2 mb-4"
              style={{
                background: 'rgba(255, 107, 61, 0.15)',
                borderRadius: '100px',
                border: '2px solid rgba(255, 107, 61, 0.3)'
              }}
            >
              <span 
                style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '14px',
                  fontWeight: '700',
                  color: '#FF6B3D',
                  letterSpacing: '1px'
                }}
              >
                03. PROFITABILITY ANALYSIS
              </span>
            </div>
            <h2 
              className="text-white mb-4"
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '48px',
                fontWeight: '700',
                lineHeight: '1.4'
              }}
            >
              수익성 분석
            </h2>
            <p 
              className="text-white"
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '16px',
                opacity: 0.9,
                lineHeight: '1.5'
              }}
            >
              투자 대비 예상 수익률과 회수 기간을 정확히 분석합니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {profitabilityMetrics.map((metric, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div
                  className="group"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '32px',
                    padding: '40px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    minHeight: '380px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.borderColor = metric.color;
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = `0 16px 40px ${metric.color}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div 
                    className="inline-block px-4 py-2 mb-6"
                    style={{
                      background: `${metric.color}20`,
                      borderRadius: '100px',
                      border: `1px solid ${metric.color}40`
                    }}
                  >
                    <span 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '13px',
                        fontWeight: '600',
                        color: metric.color
                      }}
                    >
                      핵심 지표
                    </span>
                  </div>

                  <h3 
                    className="text-white mb-4"
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '24px',
                      fontWeight: '700'
                    }}
                  >
                    {metric.title}
                  </h3>

                  <div 
                    className="mb-6"
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '42px',
                      fontWeight: '700',
                      color: metric.color,
                      lineHeight: '1.2'
                    }}
                  >
                    {metric.value}
                  </div>

                  <p 
                    className="text-white mb-6"
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '14px',
                      opacity: 0.8,
                      lineHeight: '1.7'
                    }}
                  >
                    {metric.description}
                  </p>

                  <div className="space-y-3">
                    {metric.breakdown.map((item, bIndex) => (
                      <div 
                        key={bIndex}
                        className="flex justify-between items-center"
                        style={{
                          padding: '12px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          borderRadius: '12px'
                        }}
                      >
                        <span 
                          className="text-white"
                          style={{
                            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                            fontSize: '13px',
                            opacity: 0.8
                          }}
                        >
                          {item.label}
                        </span>
                        <span 
                          className="text-white"
                          style={{
                            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                            fontSize: '15px',
                            fontWeight: '600'
                          }}
                        >
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 비용 분석 */}
      <section style={{ background: 'white', padding: '120px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="mb-16">
            <div 
              className="inline-block px-5 py-2 mb-4"
              style={{
                background: 'rgba(15, 33, 74, 0.05)',
                borderRadius: '100px',
                border: '2px solid #0F214A'
              }}
            >
              <span 
                style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '14px',
                  fontWeight: '700',
                  color: '#0F214A',
                  letterSpacing: '1px'
                }}
              >
                04. COST ANALYSIS
              </span>
            </div>
            <h2 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '48px',
                fontWeight: '700',
                color: '#0F214A',
                lineHeight: '1.4',
                marginBottom: '16px'
              }}
            >
              비용 분석
            </h2>
            <p 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '16px',
                color: '#666',
                lineHeight: '1.5'
              }}
            >
              초기 투자비부터 운영비, 금융비용까지 상세하게 분석합니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {costAnalysis.map((cost, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div
                  className="group"
                  style={{
                    background: index === 0 ? 'linear-gradient(135deg, #0F214A, #273b82)' : '#F7FAFD',
                    borderRadius: '32px',
                    padding: '40px',
                    border: index === 0 ? 'none' : '1px solid rgba(15, 33, 74, 0.1)',
                    boxShadow: index === 0 ? '0 12px 40px rgba(15, 33, 74, 0.3)' : '0 4px 16px rgba(15, 33, 74, 0.04)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    minHeight: '480px'
                  }}
                  onMouseEnter={(e) => {
                    if (index !== 0) {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = '0 16px 40px rgba(15, 33, 74, 0.12)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (index !== 0) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(15, 33, 74, 0.04)';
                    }
                  }}
                >
                  <div 
                    className="mb-6"
                    style={{
                      width: '64px',
                      height: '64px',
                      background: index === 0 ? 'rgba(255, 107, 61, 0.15)' : 'rgba(15, 33, 74, 0.08)',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <cost.icon size={32} style={{ color: index === 0 ? '#FF6B3D' : '#0F214A' }} />
                  </div>

                  <h3 
                    className="mb-2"
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '24px',
                      fontWeight: '700',
                      color: index === 0 ? 'white' : '#0F214A'
                    }}
                  >
                    {cost.category}
                  </h3>

                  <div 
                    className="mb-6 pb-6"
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '32px',
                      fontWeight: '700',
                      color: index === 0 ? '#FF6B3D' : '#FF6B3D',
                      borderBottom: index === 0 ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(15, 33, 74, 0.1)'
                    }}
                  >
                    {cost.total}
                  </div>

                  <div className="space-y-3">
                    {cost.items.map((item, iIndex) => (
                      <div key={iIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span 
                            style={{
                              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                              fontSize: '14px',
                              color: index === 0 ? 'rgba(255, 255, 255, 0.9)' : '#666'
                            }}
                          >
                            {item.name}
                          </span>
                          <span 
                            style={{
                              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                              fontSize: '15px',
                              fontWeight: '600',
                              color: index === 0 ? 'white' : '#0F214A'
                            }}
                          >
                            {item.amount}
                          </span>
                        </div>
                        {item.percentage > 0 && (
                          <div 
                            style={{
                              width: '100%',
                              height: '6px',
                              background: index === 0 ? 'rgba(255, 255, 255, 0.1)' : 'rgba(15, 33, 74, 0.08)',
                              borderRadius: '3px',
                              overflow: 'hidden'
                            }}
                          >
                            <div 
                              style={{
                                width: `${item.percentage}%`,
                                height: '100%',
                                background: index === 0 ? '#FF6B3D' : 'linear-gradient(90deg, #0F214A, #273b82)',
                                borderRadius: '3px',
                                transition: 'width 0.6s ease'
                              }}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 리스크 평가 */}
      <section style={{ background: '#F7FAFD', padding: '120px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="mb-16">
            <div 
              className="inline-block px-5 py-2 mb-4"
              style={{
                background: 'white',
                borderRadius: '100px',
                border: '2px solid #0F214A'
              }}
            >
              <span 
                style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '14px',
                  fontWeight: '700',
                  color: '#0F214A',
                  letterSpacing: '1px'
                }}
              >
                05. RISK ASSESSMENT
              </span>
            </div>
            <h2 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '48px',
                fontWeight: '700',
                color: '#0F214A',
                lineHeight: '1.4',
                marginBottom: '16px'
              }}
            >
              리스크 평가
            </h2>
            <p 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '16px',
                color: '#666',
                lineHeight: '1.5'
              }}
            >
              사업 진행 시 발생 가능한 리스크를 사전에 파악하고 대응방안을 수립합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {riskFactors.map((risk, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div
                  className="group"
                  style={{
                    background: 'white',
                    borderRadius: '24px',
                    padding: '40px',
                    border: '1px solid rgba(15, 33, 74, 0.1)',
                    boxShadow: '0 4px 16px rgba(15, 33, 74, 0.04)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    minHeight: '380px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 16px 40px rgba(15, 33, 74, 0.12)';
                    e.currentTarget.style.borderColor = risk.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(15, 33, 74, 0.04)';
                    e.currentTarget.style.borderColor = 'rgba(15, 33, 74, 0.1)';
                  }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '24px',
                        fontWeight: '700',
                        color: '#0F214A'
                      }}
                    >
                      {risk.category}
                    </h3>
                    <div 
                      className="px-4 py-1.5"
                      style={{
                        background: `${risk.color}15`,
                        borderRadius: '100px',
                        border: `1px solid ${risk.color}`
                      }}
                    >
                      <span 
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '13px',
                          fontWeight: '600',
                          color: risk.color
                        }}
                      >
                        {risk.level}
                      </span>
                    </div>
                  </div>

                  <div 
                    className="mb-6 pb-6"
                    style={{
                      borderBottom: '1px solid rgba(15, 33, 74, 0.1)'
                    }}
                  >
                    <div 
                      className="mb-3"
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#666'
                      }}
                    >
                      주요 이슈
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {risk.issues.map((issue, iIndex) => (
                        <div 
                          key={iIndex}
                          className="flex items-center gap-2"
                        >
                          <AlertTriangle size={14} style={{ color: risk.color, flexShrink: 0 }} />
                          <span 
                            style={{
                              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                              fontSize: '13px',
                              color: '#666'
                            }}
                          >
                            {issue}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div 
                      className="mb-3"
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#666'
                      }}
                    >
                      완화 방안
                    </div>
                    <div 
                      className="p-4"
                      style={{
                        background: '#F7FAFD',
                        borderRadius: '12px',
                        borderLeft: `4px solid ${risk.color}`
                      }}
                    >
                      <p 
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '14px',
                          color: '#0F214A',
                          lineHeight: '1.7'
                        }}
                      >
                        {risk.mitigation}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: 'linear-gradient(135deg, #0F214A 0%, #273b82 100%)', padding: '120px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 
              className="text-white mb-8"
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '48px',
                fontWeight: '700',
                lineHeight: '1.4'
              }}
            >
              전문적인 사업성 분석으로<br />
              성공적인 투자를 시작하세요
            </h2>

            <p 
              className="text-white mb-12"
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '18px',
                lineHeight: '1.7',
                opacity: 0.9
              }}
            >
              지금 바로 문의하시면 전문 컨설턴트가 상담해드립니다
            </p>

            <button
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '18px',
                fontWeight: '700',
                padding: '20px 48px',
                background: 'linear-gradient(135deg, #FF6B3D, #FF8C3D)',
                color: 'white',
                border: 'none',
                borderRadius: '100px',
                cursor: 'pointer',
                boxShadow: '0 12px 32px rgba(255, 107, 61, 0.4)',
                transition: 'all 0.3s ease'
              }}
            >
              사업성 분석 문의
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}