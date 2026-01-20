import type { Metadata } from "next";
import { HeroSection } from "@components/shared/HeroSection";
import { LabelAccent, LabelGray } from "@components/shared/SectionLabel";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "태양광 투자",
  description: "금융회사 발전사업 투자 경험과 국내외 태양광 발전소 개발 경험을 바탕으로 안정적인 수익 확보가 가능한 투자를 실행합니다.",
};

// 타이런트 투자의 강점
const strengths = [
  {
    title: "금융 + 개발 전문가",
    value: "실전 경험",
    desc: <>금융회사에서 발전사업 투자를 경험한 인력들과 국내/해외 태양광 발전소 개발 현장에서 경험한 인력들이 운영합니다</>,
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "위험요소 파악",
    value: "리스크 관리",
    desc: <>실질적인 태양광 발전소의 각종 개발단계에서의 위험요소들을 잘 파악하고,<br className="hidden md:block" />적절한 위험관리를 통해 안정적인 수익을 확보합니다</>,
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "맞춤 투자구조",
    value: "최적화 설계",
    desc: <>사업장 별로 적합한 투자구조 설계가 가능하며,<br className="hidden md:block" />해당 투자구조에 맞춘 자금 조달도 가능합니다</>,
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    )
  },
  {
    title: "저금리 조달",
    value: "분산 효과",
    desc: <>투자 사업장들의 분산 효과로 보험 효과를 기대하고,<br className="hidden md:block" />금융회사들의 우려 요소를 헷지하여 저금리 금융 조달이 가능합니다</>,
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

// 수익 전략
const revenueStrategies = [
  {
    step: "1차",
    title: "전기 현물 판매",
    desc: "발전된 전기를 현물 시장에 직접 판매하여 기본 수익을 확보합니다",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "#FF6B3D"
  },
  {
    step: "2차",
    title: "RPS 거래",
    desc: "신재생에너지 공급의무화(RPS) 제도를 활용한 REC 거래로 추가 수익을 창출합니다",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: "#00D9FF"
  },
  {
    step: "3차",
    title: "RE100 거래",
    desc: "RE100 인증 및 가중치를 활용하여 기업 고객 대상 프리미엄 전력 판매가 가능합니다",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "#FF6B3D"
  }
];

// 투자 프로세스
const investmentProcess = [
  {
    step: "STEP 01",
    title: "투자 상담",
    desc: "투자 목표 및 규모를 확인하고 최적의 투자 전략을 수립합니다",
    details: ["투자 목적 분석", "자금 규모 확인", "리스크 성향 파악"],
    color: "from-[#FF6B3D] to-[#FF8C5A]"
  },
  {
    step: "STEP 02",
    title: "투자구조 설계",
    desc: "사업 주체에게 가장 유리한 맞춤형 투자구조를 설계합니다",
    details: ["최적 구조 설계", "세무 최적화", "리스크 분산"],
    color: "from-[#00D9FF] to-[#00B8E6]"
  },
  {
    step: "STEP 03",
    title: "자금 조달",
    desc: "설계된 투자구조에 맞춰 저금리 금융 조달을 실행합니다",
    details: ["금융기관 협의", "PF 조건 협상", "자금 집행"],
    color: "from-purple-500 to-purple-600"
  },
  {
    step: "STEP 04",
    title: "운영 및 수익 관리",
    desc: "수익 극대화를 위한 최적의 판매 전략으로 운영합니다",
    details: ["발전소 운영", "수익금 배분", "정기 보고"],
    color: "from-[#FF6B3D] to-[#e55a35]"
  }
];

// 리스크 관리 항목
const riskManagementItems = [
  {
    category: "개발 리스크",
    items: ["인허가 리스크 사전 검토", "계통연계 가능 여부 확인", "부지 관련 법적 리스크 검토"]
  },
  {
    category: "운영 리스크",
    items: ["발전량 보험 가입", "전문 O&M 업체 관리", "실시간 모니터링 시스템"]
  },
  {
    category: "금융 리스크",
    items: ["분산 투자로 보험 효과", "재무 구조 최적화", "저금리 조달 구조 설계"]
  }
];

// 전문가 경험
const expertiseAreas = [
  "금융회사 발전사업 투자 경험",
  "국내 태양광 발전소 개발 경험",
  "해외 태양광 발전소 개발 경험",
  "프로젝트 파이낸싱 실무 경험",
  "투자구조 설계 전문성",
  "세무/법률 자문 네트워크"
];

export default function BusinessInvestment() {
  return (
    <div className="min-h-screen bg-primary pt-20">
      {/* Hero Section */}
      <HeroSection
        badge="SOLAR INVESTMENT"
        title={<>태양광 투자</>} //,<br /><span className="color-accent">전문가</span>가 설계합니다</>}
        description={
          <>
            금융회사에서 발전사업 투자를 경험한 인력들과
            <br className="hidden md:block" />
            국내/해외 태양광 발전소 개발 현장에서 경험한 인력들이 운영합니다.
            <br className="hidden md:block" />
            오랜 투자 성공 경험으로 안정적인 수익 확보가 가능한 투자를 실행합니다.
          </>
        }
      />

      {/* Strengths Section */}
      <section className="bg-gray-50 py-20 md:py-32">
        <div className="mx-auto px-6 md:px-10 max-w-[1280px]">
          <div className="text-center mb-16">
            <LabelGray label="WHY TYRANT" />
            <h2 className="text-2xl md:text-4xl font-bold color-primary leading-[140%] mb-6">
              타이런트 투자의 <span className="color-accent">차별성</span>
            </h2>
            <p className="text-lg text-gray-600 leading-[170%] max-w-3xl mx-auto">
              실질적인 태양광 발전소의 각종 개발단계에서의 위험요소들을 잘 파악하고
              <br className="hidden md:block" />
              적절한 위험관리를 통해 안정적인 수익확보가 가능한 투자를 실행합니다
            </p>
          </div>

          {/* Strengths Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-8 hover:border-accent/30 hover:shadow-lg transition-all text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-xl flex items-center justify-center color-accent">
                  {strength.icon}
                </div>
                <div className="text-xl font-black color-accent mb-2">{strength.value}</div>
                <h3 className="text-lg font-bold color-primary mb-3">{strength.title}</h3>
                <p className="text-sm text-gray-600 leading-[160%]">{strength.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Strategy Section */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400 rounded-full blur-[150px]"></div>
        </div>

        <div className="relative mx-auto px-6 md:px-10 py-20 md:py-32 max-w-[1280px]">
          <div className="text-center mb-16">
            <LabelAccent label="REVENUE STRATEGY" />
            <h2 className="text-2xl md:text-4xl font-bold color-white leading-[140%] mb-6">
              수익 극대화 전략
            </h2>
            <p className="text-lg color-white-90 leading-[170%] max-w-3xl mx-auto">
              수익 확대를 위해 다양한 판매 전략을 고려하여
              <br className="hidden md:block" />
              <span className="color-white font-semibold">최선의 투자 모델을 구성</span>합니다
            </p>
          </div>

          {/* Revenue Strategies */}
          <div className="grid md:grid-cols-3 gap-6">
            {revenueStrategies.map((strategy, index) => (
              <div
                key={index}
                className="bg-[rgba(21,48,90,0.3)] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-accent/30 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ 
                      background: `${strategy.color}20`,
                      border: `1px solid ${strategy.color}30`
                    }}
                  >
                    <div style={{ color: strategy.color }}>{strategy.icon}</div>
                  </div>
                  <div 
                    className="px-3 py-1 rounded-full text-sm font-bold"
                    style={{ 
                      background: `${strategy.color}20`,
                      color: strategy.color
                    }}
                  >
                    {strategy.step}
                  </div>
                </div>

                <h3 className="text-xl font-bold color-white mb-3">{strategy.title}</h3>
                <p className="text-base color-white-90 leading-[170%]">{strategy.desc}</p>
              </div>
            ))}
          </div>

          {/* Strategy Note */}
          <div className="mt-12 bg-accent/10 border border-accent/20 rounded-2xl p-8 text-center">
            <p className="text-lg color-white leading-[170%]">
              <span className="color-accent font-bold">전기 현물 판매</span>를 기본으로,
              <span className="color-accent font-bold"> RPS</span>와 
              <span className="color-accent font-bold"> RE100(가중치)</span> 거래를 종합적으로 고려하여
              <br className="hidden md:block" />
              각 사업장에 <span className="color-white font-semibold">최적화된 수익 전략</span>을 수립합니다
            </p>
          </div>
        </div>
      </section>

      {/* Expert Highlight */}
      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto px-6 md:px-10 max-w-[1280px]">
          <div
            className="rounded-3xl p-10 md:p-16"
            style={{ background: 'linear-gradient(135deg, #0F214A 0%, #1a3a6e 100%)' }}
          >
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
              {/* Left: Title */}
              <div className="lg:w-2/5">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/30 rounded-full mb-6">
                  <svg className="w-5 h-5 color-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm font-bold color-accent tracking-wider">EXPERTISE</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-[140%]">
                  <span className="text-[#FF6B3D]">금융</span>과 <span className="text-[#FF6B3D]">개발</span><br />
                  양쪽 경험을 보유한 전문가
                </h3>

                <p className="text-lg text-white/85 leading-[180%]">
                  금융회사에서 발전사업 투자를 경험한 인력들과 국내/해외 태양광 발전소 개발 현장에서 경험한 인력들이 함께 운영합니다.
                </p>
              </div>

              {/* Right: Expertise List */}
              <div className="lg:w-3/5">
                <div className="grid md:grid-cols-2 gap-4">
                  {expertiseAreas.map((area, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4"
                    >
                      <CheckCircle2 size={20} className="color-accent flex-shrink-0" />
                      <span className="text-base text-white/90">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Management */}
      <section className="bg-secondary py-20 md:py-32">
        <div className="mx-auto px-6 md:px-10 max-w-[1280px]">
          <div className="text-center mb-16">
            <LabelAccent label="RISK MANAGEMENT" />
            <h2 className="text-2xl md:text-4xl font-bold color-white leading-[140%] mb-6">
              체계적인 리스크 관리
            </h2>
            <p className="text-lg color-white-90 leading-[170%] max-w-3xl mx-auto">
              실질적인 개발단계에서의 위험요소들을 잘 파악하고
              <br className="hidden md:block" />
              적절한 위험관리를 통해 안정적인 수익을 확보합니다
            </p>
          </div>

          {/* Risk Categories */}
          <div className="grid md:grid-cols-3 gap-6">
            {riskManagementItems.map((category, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold color-primary mb-6 pb-4 border-b border-gray-100">
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="color-accent flex-shrink-0 mt-0.5" />
                      <span className="text-base text-gray-700 leading-[160%]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Diversification Highlight */}
      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto px-6 md:px-10 max-w-[1280px]">
          <div
            className="rounded-3xl p-10 md:p-16"
            style={{ background: 'linear-gradient(135deg, #0F214A 0%, #1a3a6e 100%)' }}
          >
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/30 rounded-full mb-8">
                <svg className="w-5 h-5 color-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span className="text-sm font-bold color-accent tracking-wider">PORTFOLIO DIVERSIFICATION</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-[140%]">
                <span className="text-[#FF6B3D]">분산 투자</span>를 통한 저금리 조달
              </h3>

              <p className="text-lg text-white/85 leading-[180%] mb-8">
                투자 사업장들의 <span className="text-white font-semibold">분산 효과</span>를 고려하여 보험 효과를 기대하고,
                <br className="hidden md:block" />
                이를 통해서 일반적으로 금융회사들이 우려하는 요소들을 헷지하여
                <br className="hidden md:block" />
                <span className="text-[#FF6B3D] font-semibold">저금리의 금융 조달</span>이 가능하도록 투자구조를 설계합니다.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 px-5 py-3 bg-white/10 rounded-full">
                  <CheckCircle2 size={18} className="color-accent" />
                  <span className="text-white font-medium">분산 투자 효과</span>
                </div>
                <div className="flex items-center gap-2 px-5 py-3 bg-white/10 rounded-full">
                  <CheckCircle2 size={18} className="color-accent" />
                  <span className="text-white font-medium">리스크 헷지</span>
                </div>
                <div className="flex items-center gap-2 px-5 py-3 bg-white/10 rounded-full">
                  <CheckCircle2 size={18} className="color-accent" />
                  <span className="text-white font-medium">저금리 금융 조달</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0a1628] py-20 md:py-32">
        <div className="mx-auto px-6 md:px-10 max-w-[1280px]">
          <div className="bg-gradient-to-br from-accent/20 via-accent/10 to-transparent border border-accent/30 rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-2xl md:text-4xl font-bold color-white leading-[140%] mb-6">
              태양광 투자, 전문가와 함께 시작하세요
            </h2>
            <p className="text-lg color-white-90 leading-[170%] max-w-2xl mx-auto mb-10">
              금융과 개발 양쪽 경험을 보유한 전문가들이
              <br className="hidden md:block" />
              <span className="color-accent font-semibold">사업 주체에게 가장 유리한 투자구조</span>를 설계해드립니다
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/consultation"
                className="
                  inline-flex items-center justify-center gap-2 px-8 py-4
                  bg-accent text-white font-bold text-lg
                  rounded-full hover:bg-accent-90
                  transition-all hover:scale-105
                  shadow-md min-w-[300px]
                "
              >
                투자 상담 신청
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
