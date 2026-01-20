import type { Metadata } from "next";
import { HeroSection } from "@components/shared/HeroSection";
import { LabelAccent, LabelGray } from "@components/shared/SectionLabel";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "태양광 사무관리",
  description: "10년 이상 축적된 태양광 발전소 운영 관리 경험을 바탕으로 안정적인 관리와 적극적인 수익 증대 전략을 제공합니다.",
};

// 핵심 강점 항목
const coreStrengths = [
  {
    title: "10년+ 운영 경험",
    desc: "다수의 태양광 발전소를 장기간 직접 운영하며 축적한 노하우를 바탕으로 체계적인 운영·사무관리 서비스를 제공합니다",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "개발·시공 경험 기반",
    desc: "직접 발전소를 개발하고 시공한 경험을 보유하여 설계·시공·운영 간의 연계를 이해하고 현실적인 관리 방안을 제안합니다",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "규모의 경제 실현",
    desc: "다수의 발전소를 직접 운영하며 운영 자원의 공동 활용과 표준화된 관리 체계를 통해 비용 절감 효과를 제공합니다",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: "신속한 문제 해결",
    desc: "의사결정 구조가 단순하고 현장 이해도가 높은 조직으로서 신속한 대응과 근본적인 문제 해결이 가능합니다",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

// 전문 인력
const professionals = [
  { title: "회계사", desc: "재무·세무 전문 관리" },
  { title: "전기기사", desc: "전기설비 전문 관리" },
  { title: "신재생에너지발전설비기사", desc: "발전설비 전문 관리" }
];

// 통합 사무관리 항목
const adminServices = [
  {
    category: "발전 실적 관리",
    items: ["발전량 모니터링 및 분석", "수익 정산 지원", "성과 리포트 제공"]
  },
  {
    category: "운영 비용 관리",
    items: ["비용 구조 분석", "비용 절감 방안 도출", "예산 계획 수립"]
  },
  {
    category: "설비 상태 관리",
    items: ["정기 점검 관리", "유지보수 연계", "설비 이력 관리"]
  }
];

// 맞춤 상담 항목
const consultingItems = [
  "세무 상담 및 구조 검토",
  "수익 구조 개선 방향 제안",
  "장기 운영 전략 검토",
  "매각·투자 전략 검토",
  "규제·정책 변화 대응 자문"
];

export default function OperationPage() {
  return (
    <div className="min-h-screen bg-primary pt-20">
      {/* Hero Section */}
      <HeroSection
        badge="OFFICE MANAGEMENT"
        title={<>태양광 사무관리</>} //,<br />오랜 <span className="color-accent">경험</span>하의 <span className="color-accent">체계적인</span> 사무관리</>}
        description="개발부터 운영까지, 태양광 발전 전 주기를 이해하는 전문 운영사입니다. 10년 이상의 실질적인 발전소 운영 경험을 기반으로 안정적인 관리와 적극적인 수익 증대 전략을 제공합니다."
      />

      {/* 핵심 강점 Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="text-center mb-16">
            <LabelAccent label="OUR STRENGTHS" />
            <h2 className="text-3xl md:text-4xl font-bold color-primary mt-4 mb-4">
              사무관리를 타이런트에 맡겨야 하는 이유
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              단순 사무업무 대행이 아닌, 직접 발전소 개발 및 시공 경험을 보유한 회사로서<br className="hidden md:block" />
              <span className="font-semibold text-[#0F214A]">현실적인 관리 방안 및 수익 증대 전략 제안</span>이 가능합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreStrengths.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-8 hover:border-accent/30 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 mb-6 bg-accent/10 rounded-xl flex items-center justify-center color-accent">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold color-primary mb-3">{item.title}</h3>
                <p className="text-base text-gray-600 leading-[160%]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 전문 인력 Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <div className="lg:w-2/5">
              <LabelAccent label="PROFESSIONALS" />
              <h2 className="text-3xl md:text-4xl font-bold color-primary mt-4 mb-6">
                다수의 전문 인력 기반<br />종합 서비스
              </h2>
              <p className="text-lg text-gray-600 leading-[170%]">
                당사는 회계, 전기, 신재생에너지 분야의 전문 인력을 내부 또는 협업 체계로 보유하고 있습니다.
                이를 통해 <span className="font-semibold text-[#0F214A]">운영·재무·설비 관리 전반에 걸친 전문적인 서비스</span>를 안정적으로 제공합니다.
              </p>
            </div>

            <div className="lg:w-3/5">
              <div className="grid md:grid-cols-3 gap-6">
                {professionals.map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-8 rounded-2xl"
                    style={{ background: 'linear-gradient(135deg, #0F214A 0%, #1a3a6e 100%)' }}
                  >
                    <div className="w-16 h-16 mx-auto mb-6 bg-accent/20 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 color-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-white/80">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 통합 사무관리 Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="text-center mb-16">
            <LabelGray label="INTEGRATED MANAGEMENT" />
            <h2 className="text-3xl md:text-4xl font-bold color-primary mt-4 mb-4">
              운영·재무·설비를 아우르는 통합 사무관리
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              태양광 발전소 운영에 필요한 행정·재무·설비 관리 업무를 통합적으로 관리하여<br className="hidden md:block" />
              <span className="font-semibold text-[#0F214A]">발전소 소유자의 부담을 최소화</span>합니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {adminServices.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 mb-6 bg-accent/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 color-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold color-primary mb-4">{service.category}</h3>
                <div className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="color-accent flex-shrink-0" />
                      <span className="text-base text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 맞춤 상담 Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div
            className="rounded-2xl p-8 md:p-12"
            style={{ background: 'linear-gradient(135deg, #0F214A 0%, #1a3a6e 100%)' }}
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              <div className="md:w-2/5">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/30 rounded-full mb-6">
                  <svg className="w-5 h-5 color-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span className="text-sm font-bold color-accent tracking-wider">CONSULTING</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  발전소 소유자 관점의<br />
                  <span className="text-[#FF6B3D]">맞춤 상담 제공</span>
                </h3>
                <p className="text-base text-white/85 leading-[170%]">
                  단순 관리 대행을 넘어, 발전소 소유자의 입장에서 실제로 필요한 상담과 의사결정 지원을 제공합니다.
                </p>
              </div>

              <div className="md:w-3/5">
                <div className="grid grid-cols-2 gap-3">
                  {consultingItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                    >
                      <CheckCircle2 size={18} className="color-accent flex-shrink-0" />
                      <span className="text-sm text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 핵심 요약 CTA Section */}
      <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F214A 0%, #1a3a6e 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6B3D] rounded-full blur-3xl"></div>
        </div>

        <div className="relative mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="max-w-3xl mx-auto text-center">
            <LabelAccent label="SUMMARY" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-8">
              실무 중심의 전문 사무관리 서비스
            </h2>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-10 mb-10">
              <p className="text-lg md:text-xl text-white leading-[180%]">
                <span className="font-bold text-[#FF6B3D]">직접 개발·시공·운영</span>을 수행해 온 경험을 바탕으로,<br />
                태양광 발전소의 <span className="font-bold text-accent">안정적인 운영</span>과 <span className="font-bold text-accent">지속적인 수익 극대화</span>를 지원하는<br />
                <span className="font-bold text-white">실무 중심의 전문 사무관리 서비스</span>를 제공합니다.
              </p>
            </div>

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
                관리 서비스 문의
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
