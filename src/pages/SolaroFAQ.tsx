import { HelpCircle, ChevronDown, Search, MessageCircle, Phone, Mail } from "lucide-react";
import { SubNavigation } from "../components/SubNavigation";
import { PageHero } from "../components/PageHero";
import { ScrollReveal } from "../components/ScrollReveal";
import { useState } from "react";

interface SolaroFAQProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function SolaroFAQ({ onNavigate, currentPage }: SolaroFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("전체");

  // FAQ 카테고리
  const categories = ["전체", "무상설치", "수익공유", "시공/설치", "운영/관리", "계약/법률", "기술/설비"];

  // FAQ 데이터
  const faqData = [
    {
      category: "무상설치",
      question: "정말 초기 비용 없이 무상으로 설치가 가능한가요?",
      answer: "네, 가능합니다. 타이런트가 태양광 발전소 설치에 필요한 모든 비용(설계, 인허가, 자재, 시공, 준공)을 전액 투자하여 발전소를 구축합니다. 건물주님은 초기 투자금 없이 지붕만 제공하시면 됩니다. 발전소 완공 후 생산되는 전력으로 전기요금을 절감하시고, 남는 전력 판매 수익을 20년간 공유하시게 됩니다."
    },
    {
      category: "무상설치",
      question: "무상설치 조건이 있나요?",
      answer: "기본적으로 1) 지붕 면적 1,000㎡ 이상, 2) 20년 이상 건물 사용 가능, 3) 건물 구조 안정성, 4) 전력 사용량이 있는 시설이어야 합니다. 다만 건물 조건에 따라 유연하게 협의 가능하므로 먼저 무료 현장 조사를 신청해 주시기 바랍니다."
    },
    {
      category: "수익공유",
      question: "수익은 어떻게 배분되나요?",
      answer: "발전소에서 생산된 전력 중 자가소비 전력은 건물주님이 100% 전기요금 절감 혜택을 받으시고, 한전에 판매되는 남은 전력의 수익은 건물주와 타이런트가 협의한 비율로 공유합니다. 일반적으로 건물주 30~50%, 타이런트 50~70% 비율이며, 건물 조건과 협상에 따라 달라질 수 있습니다."
    },
    {
      category: "수익공유",
      question: "수익 공유 기간은 얼마나 되나요?",
      answer: "수익 공유 계약 기간은 20년입니다. 20년 후에는 발전소 소유권 이전 조건을 계약 시 협의하게 됩니다. 옵션으로는 1) 건물주에게 무상 양도, 2) 유상 양도, 3) 계약 연장 등이 있으며, 계약서에 명시됩니다."
    },
    {
      category: "시공/설치",
      question: "설치 기간은 얼마나 걸리나요?",
      answer: "프로젝트 규모와 인허가 진행 속도에 따라 다르지만, 일반적으로 계약 후 인허가 2~3개월, 시공 1~2개월로 총 3~5개월 정도 소요됩니다. 긴급한 경우 신속 진행도 가능하니 상담 시 말씀해 주세요."
    },
    {
      category: "시공/설치",
      question: "공사 중 건물 사용에 지장이 있나요?",
      answer: "지붕 위 작업이므로 건물 내부 사용에는 거의 지장이 없습니다. 다만 전기 계통 연결 시 일부 시간 동안 정전이 필요할 수 있으며, 이는 사전에 협의하여 업무에 지장이 없는 시간대에 진행합니다."
    },
    {
      category: "운영/관리",
      question: "유지보수는 누가 하나요?",
      answer: "유지보수는 타이런트가 20년간 전담합니다. 정기점검, 모니터링, 고장 수리, 청소 등 모든 관리를 타이런트가 책임지며, 건물주님은 별도의 관리 부담이 없습니다."
    },
    {
      category: "운영/관리",
      question: "태양광 발전소 모니터링은 어떻게 하나요?",
      answer: "전용 모니터링 시스템을 통해 PC와 스마트폰으로 실시간 발전량, 누적 수익, 설비 상태 등을 확인하실 수 있습니다. 이상 발생 시 SMS와 카카오톡으로 즉시 알림이 전송되며, 타이런트 관리팀이 신속하게 대응합니다."
    },
    {
      category: "계약/법률",
      question: "계약서에는 어떤 내용이 포함되나요?",
      answer: "계약서에는 1) 발전소 설치 범위 및 용량, 2) 수익 배분 비율, 3) 계약 기간(20년), 4) 유지보수 책임, 5) 20년 후 소유권 이전 조건, 6) 중도 해지 조건, 7) 보험 가입 등이 명시됩니다. 계약 전 충분한 검토 시간을 드립니다."
    },
    {
      category: "계약/법률",
      question: "중도에 계약 해지가 가능한가요?",
      answer: "계약은 20년 장기 계약이므로 일반적으로 중도 해지가 어렵습니다. 다만 건물 매각, 재건축 등 불가피한 사유 발생 시 협의하여 해지 조건을 정할 수 있으며, 이 경우 설치비용 등을 정산하게 됩니다. 구체적인 해지 조건은 계약서에 명시됩니다."
    },
    {
      category: "기술/설비",
      question: "사용하는 태양광 모듈과 인버터는 어떤 제품인가요?",
      answer: "국내외 A급 제조사의 검증된 제품만 사용합니다. 한화큐셀, 신성이엔지, LG전자, 현대에너지솔루션 등의 모듈과 SMA, Huawei, KACO 등의 인버터를 사용하며, 모두 25년 성능 보증이 제공됩니다."
    },
    {
      category: "기술/설비",
      question: "지붕에 하중 문제는 없나요?",
      answer: "설치 전 반드시 구조 안전진단을 실시합니다. 구조기술사의 검토를 거쳐 지붕 내하중 범위 내에서 안전하게 설계되며, 필요 시 보강 공사를 진행합니다. 태양광 설비의 하중은 일반적으로 10~15kg/㎡ 수준으로 건물 안전에 문제가 없습니다."
    },
    {
      category: "기술/설비",
      question: "비가 오거나 흐린 날에도 발전이 되나요?",
      answer: "네, 발전은 됩니다. 다만 맑은 날 대비 발전량이 감소합니다. 흐린 날은 맑은 날의 30~50%, 비 오는 날은 10~20% 수준으로 발전됩니다. 연간 발전량 예측 시 이러한 날씨 변수를 모두 고려하여 계산합니다."
    },
    {
      category: "무상설치",
      question: "지붕에 다른 설비(에어컨 실외기, 안테나 등)가 있어도 가능한가요?",
      answer: "가능합니다. 현장 조사 시 기존 설비 위치를 확인하여 피해서 설계합니다. 다만 기존 설비가 차지하는 면적만큼 태양광 설치 면적이 줄어들 수 있습니다."
    },
    {
      category: "운영/관리",
      question: "태양광 패널 청소는 어떻게 하나요?",
      answer: "연 1~2회 정기 청소를 타이런트에서 실시합니다. 일반적으로 비가 자연 세척 역할을 하지만, 미세먼지나 황사가 심한 지역은 더 자주 청소합니다. 청소 비용은 타이런트가 부담합니다."
    },
    {
      category: "수익공유",
      question: "전기요금 절감 효과는 얼마나 되나요?",
      answer: "건물의 전력 사용 패턴에 따라 다르지만, 낮 시간대 전력 사용이 많은 경우 월 전기요금의 20~40%까지 절감 가능합니다. 예를 들어 월 전기요금이 500만원인 건물이라면 100~200만원 절감할 수 있습니다."
    },
    {
      category: "계약/법률",
      question: "건물 소유자가 바뀌면 어떻게 되나요?",
      answer: "계약은 건물에 부속되므로, 건물 소유권이 이전되면 계약상 권리와 의무도 신규 소유자에게 승계됩니다. 이는 계약서와 부동산 등기에 명시되어 법적 보호를 받습니다. 매각 전 충분히 안내해 드립니다."
    },
    {
      category: "기술/설비",
      question: "화재나 자연재해로 인한 손상 시 어떻게 되나요?",
      answer: "모든 발전소는 화재보험, 재산종합보험에 가입되어 있습니다. 화재, 태풍, 낙뢰 등으로 인한 손상 발생 시 보험으로 복구되며, 복구 기간 동안의 매출 손실도 보험으로 보상받을 수 있습니다. 보험료는 타이런트가 부담합니다."
    }
  ];

  // 카테고리별 필터링
  const filteredFAQs = selectedCategory === "전체" 
    ? faqData 
    : faqData.filter(faq => faq.category === selectedCategory);

  // 문의 채널
  const contactChannels = [
    {
      icon: Phone,
      title: "전화 상담",
      info: "1588-XXXX",
      description: "평일 09:00 - 18:00"
    },
    {
      icon: MessageCircle,
      title: "카카오톡",
      info: "@솔라오",
      description: "실시간 채팅 상담"
    },
    {
      icon: Mail,
      title: "이메일",
      info: "contact@tyrant.com",
      description: "24시간 접수"
    }
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <PageHero
        badge={{ text: "FAQ", color: "#FF6B3D" }}
        title="자주 묻는 질문"
        description="태양광 무상설치 및 수익공유에 대한 궁금증을 해결해드립니다. 원하시는 답변을 찾지 못하셨다면 언제든 문의해주세요"
      />

      {/* Sub Navigation */}
      <SubNavigation category="business" currentPage={currentPage} onNavigate={onNavigate} />

      {/* 카테고리 필터 */}
      <section style={{ background: 'white', padding: '60px 0 40px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <ScrollReveal direction="up">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '16px',
                    fontWeight: selectedCategory === category ? '700' : '500',
                    padding: '12px 28px',
                    background: selectedCategory === category 
                      ? 'linear-gradient(135deg, #FF6B3D, #FF8C3D)' 
                      : 'white',
                    color: selectedCategory === category ? 'white' : '#666',
                    border: selectedCategory === category ? 'none' : '2px solid rgba(15, 33, 74, 0.1)',
                    borderRadius: '100px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: selectedCategory === category 
                      ? '0 4px 16px rgba(255, 107, 61, 0.3)' 
                      : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (selectedCategory !== category) {
                      e.currentTarget.style.borderColor = '#FF6B3D';
                      e.currentTarget.style.color = '#FF6B3D';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCategory !== category) {
                      e.currentTarget.style.borderColor = 'rgba(15, 33, 74, 0.1)';
                      e.currentTarget.style.color = '#666';
                    }
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ 리스트 */}
      <section style={{ background: '#F7FAFD', padding: '60px 0 120px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1000px' }}>
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 50} direction="up">
                <div
                  style={{
                    background: 'white',
                    borderRadius: '16px',
                    border: '1px solid rgba(15, 33, 74, 0.1)',
                    boxShadow: openIndex === index 
                      ? '0 8px 32px rgba(15, 33, 74, 0.12)' 
                      : '0 4px 16px rgba(15, 33, 74, 0.04)',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {/* 질문 */}
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    style={{
                      width: '100%',
                      padding: '24px 32px',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '16px',
                      textAlign: 'left'
                    }}
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          background: openIndex === index 
                            ? 'linear-gradient(135deg, #FF6B3D, #FF8C3D)' 
                            : 'rgba(15, 33, 74, 0.05)',
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <span
                          style={{
                            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                            fontSize: '18px',
                            fontWeight: '700',
                            color: openIndex === index ? 'white' : '#0F214A'
                          }}
                        >
                          Q
                        </span>
                      </div>
                      <div className="flex-1">
                        <div
                          className="inline-block px-3 py-1 mb-2"
                          style={{
                            background: 'rgba(255, 107, 61, 0.1)',
                            borderRadius: '6px'
                          }}
                        >
                          <span
                            style={{
                              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                              fontSize: '12px',
                              fontWeight: '700',
                              color: '#FF6B3D'
                            }}
                          >
                            {faq.category}
                          </span>
                        </div>
                        <p
                          style={{
                            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                            fontSize: '18px',
                            fontWeight: '600',
                            color: '#0F214A',
                            lineHeight: '1.6',
                            margin: 0
                          }}
                        >
                          {faq.question}
                        </p>
                      </div>
                    </div>
                    <ChevronDown
                      size={24}
                      style={{
                        color: openIndex === index ? '#FF6B3D' : '#0F214A',
                        transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'all 0.3s ease',
                        flexShrink: 0
                      }}
                    />
                  </button>

                  {/* 답변 */}
                  {openIndex === index && (
                    <div
                      style={{
                        padding: '0 32px 32px 32px',
                        borderTop: '1px solid rgba(15, 33, 74, 0.05)'
                      }}
                    >
                      <div className="flex items-start gap-4 pt-6">
                        <div
                          style={{
                            width: '40px',
                            height: '40px',
                            background: 'linear-gradient(135deg, #0F214A, #273b82)',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}
                        >
                          <span
                            style={{
                              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                              fontSize: '18px',
                              fontWeight: '700',
                              color: 'white'
                            }}
                          >
                            A
                          </span>
                        </div>
                        <p
                          style={{
                            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                            fontSize: '16px',
                            color: '#666',
                            lineHeight: '1.8',
                            margin: 0,
                            flex: 1
                          }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 문의 채널 */}
      <section style={{ background: 'white', padding: '120px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="mb-16 text-center">
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
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#0F214A',
                  letterSpacing: '1px'
                }}
              >
                CONTACT US
              </span>
            </div>
            <h2 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '50px',
                fontWeight: '700',
                color: '#0F214A',
                lineHeight: '1.4',
                marginBottom: '16px'
              }}
            >
              답변을 찾지 못하셨나요?
            </h2>
            <p 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '22px',
                fontWeight: '500',
                color: '#666',
                lineHeight: '1.6'
              }}
            >
              언제든 편하게 문의해주세요
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactChannels.map((channel, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up">
                <div
                  className="text-center p-8"
                  style={{
                    background: 'white',
                    borderRadius: '24px',
                    border: '2px solid rgba(15, 33, 74, 0.1)',
                    boxShadow: '0 8px 32px rgba(15, 33, 74, 0.08)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.borderColor = '#FF6B3D';
                    e.currentTarget.style.boxShadow = '0 16px 48px rgba(255, 107, 61, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(15, 33, 74, 0.1)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(15, 33, 74, 0.08)';
                  }}
                >
                  <div
                    className="mx-auto mb-4"
                    style={{
                      width: '80px',
                      height: '80px',
                      background: 'linear-gradient(135deg, #FF6B3D, #FF8C3D)',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 24px rgba(255, 107, 61, 0.3)'
                    }}
                  >
                    <channel.icon size={40} style={{ color: 'white' }} />
                  </div>

                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '24px',
                      fontWeight: '700',
                      color: '#0F214A'
                    }}
                  >
                    {channel.title}
                  </h3>

                  <p
                    className="mb-1"
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#FF6B3D'
                    }}
                  >
                    {channel.info}
                  </p>

                  <p
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '16px',
                      color: '#666'
                    }}
                  >
                    {channel.description}
                  </p>
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
              무료 상담 신청
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
              전문 상담사가 궁금하신 모든 것을 자세히 안내해드립니다
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
              무료 상담 신청하기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}