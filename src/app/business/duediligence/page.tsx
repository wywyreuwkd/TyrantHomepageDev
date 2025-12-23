import type { Metadata } from "next";
import { HeroSection } from "@components/shared/HeroSection";
import { LabelAccent, LabelGray } from "@components/shared/SectionLabel";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "태양광 기술실사",
  description: "태양광 사업의 리스크를 사전에 검증하는 기술실사 기반 토탈 솔루션. 개발·시공·운영 경험을 바탕으로 한 전문 기술실사 서비스를 제공합니다.",
};

// 신규 사업 기술실사 항목
const newProjectItems = [
  {
    title: "인허가 요소 분석",
    items: ["개발행위, 산지·농지 관련 규제 검토", "환경·경관·법적 제약 사항 분석", "지자체별 태양광 조례 검토"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    title: "계통 연계 검토",
    items: ["인근 계통 현황 분석", "한전 연계 가능성 및 제약 요소 검토", "예상 계통 연계 방식 및 리스크 분석"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "기술·설비 검토",
    items: ["예상 발전 용량 및 배치 적정성", "모듈·인버터·구조물 기술적 적합성", "발전량 및 성능 저하 요인 분석"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  }
];

// 토탈 솔루션 연계 항목
const totalSolutionItems = [
  { title: "전체 사업비 산정", subtitle: "CAPEX", desc: "설비, 공사, 인허가 비용 등 전체 초기 투자비 산정" },
  { title: "예상 운영비 분석", subtitle: "OPEX", desc: "유지보수, 보험, 관리비 등 운영 비용 분석" },
  { title: "발전량 기반 수익성", subtitle: "Revenue", desc: "PVsyst 시뮬레이션 기반 정밀 수익성 분석" },
  { title: "금융 구조 검토", subtitle: "Finance", desc: "자금 조달 가능성 및 금융 구조 설계" },
  { title: "투자 구조 제안", subtitle: "Investment", desc: "사업주에게 최적화된 투자 모델 제안" }
];

// 운영 중 발전소 실사 항목 (상세)
const operatingPlantDetailItems = [
  {
    title: "설비 상태 및 성능 분석",
    items: ["모듈·인버터·접속반 상태 점검", "PCS 효율 및 출력 분석", "구조물·케이블 열화 상태 진단"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    )
  },
  {
    title: "발전 저하 요인 분석",
    items: ["발전량 추이 분석 및 저하 원인 진단", "음영·오염·손상에 의한 손실 분석", "인버터 고장 이력 및 정지 시간 분석"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: "개선 방안 및 수익 분석",
    items: ["설비 교체·보강 방안 제시", "개선 시 예상 비용 산정", "추가 발전량 및 수익 증대 효과 분석"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  }
];

// 차별성
const differentiators = [
  {
    title: "실무 중심 기술실사",
    desc: "직접 개발·시공·운영 경험을 보유한 전문가가 수행",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "실제 사업 관점 분석",
    desc: "단순 체크리스트가 아닌 실질적인 사업 관점의 분석",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: "연속성 있는 서비스",
    desc: "기술 검토 → 사업성 분석 → 자금 조달까지 원스톱 제공",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: "다각적 관점의 리포트",
    desc: "투자자·금융기관·발전소 소유자 모두를 고려한 분석",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  }
];

export default function DueDiligencePage() {
  return (
    <div className="min-h-screen bg-primary pt-20">
      {/* Hero Section */}
      <HeroSection
        badge="TECHNICAL DUE DILIGENCE"
        title={<>태양광 기술실사</>} //,<br /><span className="color-accent">리스크</span>를 사전에 검증합니다</>}
        description={
          <>
            개발·시공·운영을 직접 수행해 온 경험을 바탕으로
            <br className="hidden md:block" />
            신규 개발 예정 부지부터 운영 중인 발전소까지
            <br className="hidden md:block" />
            전문적인 태양광 기술실사 서비스를 제공합니다.
          </>
        }
      />

      {/* 신규 사업 기술실사 Section */}
      <section className="bg-gray-50 py-20 md:py-32">
        <div className="mx-auto px-6 md:px-10 max-w-[1280px]">
          <div className="text-center mb-16">
            <LabelGray label="NEW PROJECT" />
            <h2 className="text-2xl md:text-4xl font-bold color-primary leading-[140%] mb-6">
              신규 태양광 발전사업 <span className="color-accent">기술실사</span>
            </h2>
            <p className="text-lg text-gray-600 leading-[170%] max-w-3xl mx-auto">
              개발을 검토 중인 태양광 부지에 대해
              <br className="hidden md:block" />
              <span className="font-semibold text-[#0F214A]">인허가·계통·기술·설비 전반을 아우르는 전문 기술실사 리포트</span>를 제공합니다
            </p>
          </div>

          {/* 검토 항목 Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {newProjectItems.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-8 hover:border-accent/30 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 mb-6 bg-accent/10 rounded-xl flex items-center justify-center color-accent">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold color-primary mb-4">{item.title}</h3>
                <div className="space-y-3">
                  {item.items.map((subItem, subIndex) => (
                    <div key={subIndex} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="color-accent flex-shrink-0 mt-1" />
                      <span className="text-base text-gray-600 leading-[160%]">{subItem}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 결과 Highlight */}
          <div 
            className="rounded-2xl p-8 md:p-10"
            style={{ background: 'linear-gradient(to right, #0F214A, #15305A)' }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg className="w-7 h-7 text-[#FF6B3D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold text-white">기술실사 결과 제공</h3>
            </div>
            <p className="text-center text-lg text-white/90 leading-[170%]">
              <span className="text-[#FF6B3D] font-semibold">사업 추진 가능성</span>, 
              <span className="text-[#FF6B3D] font-semibold"> 주요 리스크</span>, 
              <span className="text-[#FF6B3D] font-semibold"> 대응 방향</span>을 명확히 제시하여
              <br className="hidden md:block" />
              사업 의사결정에 실질적인 도움을 드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* 토탈 솔루션 연계 Section */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400 rounded-full blur-[150px]"></div>
        </div>

        <div className="relative mx-auto px-6 md:px-10 py-20 md:py-32 max-w-[1280px]">
          <div className="text-center mb-16">
            <LabelAccent label="TOTAL SOLUTION" />
            <h2 className="text-2xl md:text-4xl font-bold color-white leading-[140%] mb-6">
              사업성 분석과 연계한 <span className="color-accent">토탈 솔루션</span>
            </h2>
            <p className="text-lg color-white-90 leading-[170%] max-w-3xl mx-auto">
              기술실사 결과는 당사가 제공하는 「태양광 사업성 분석」 서비스와 연계되어
              <br className="hidden md:block" />
              <span className="color-white font-semibold">단순 기술 검토를 넘어 사업 전체를 아우르는 종합 검토</span>가 가능합니다
            </p>
          </div>

          {/* Solution Flow */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {totalSolutionItems.map((item, index) => (
              <div
                key={index}
                className="bg-[rgba(21,48,90,0.5)] backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-accent/30 transition-all"
              >
                <div className="text-sm font-bold color-accent mb-2">{item.subtitle}</div>
                <h4 className="text-base font-bold color-white mb-2">{item.title}</h4>
                <p className="text-xs color-white-90 leading-[160%]">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Arrow Note */}
          <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg className="w-6 h-6 color-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <span className="text-lg font-bold color-white">원스톱 서비스</span>
            </div>
            <p className="text-lg color-white leading-[170%]">
              <span className="color-accent font-bold">기술 검증</span>부터 
              <span className="color-accent font-bold"> 재무·투자·자금 조달</span>까지
              <br className="hidden md:block" />
              하나의 흐름으로 연결된 토탈 솔루션을 제공합니다
            </p>
          </div>
        </div>
      </section>

      {/* 운영 중 발전소 실사 Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto px-6 md:px-10 max-w-[1280px]">
          <div className="text-center mb-16">
            <LabelGray label="OPERATING PLANT" />
            <h2 className="text-2xl md:text-4xl font-bold color-primary leading-[140%] mb-6">
              운영 중 발전소 <span className="color-accent">기술 진단</span>
            </h2>
            <p className="text-lg text-gray-600 leading-[170%] max-w-3xl mx-auto">
              현재 운영 중인 태양광 발전소를 대상으로
              <br className="hidden md:block" />
              <span className="font-semibold text-[#0F214A]">기술적 요소 전반에 대한 정밀 분석 서비스</span>를 제공합니다
            </p>
          </div>

          {/* 검토 항목 Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {operatingPlantDetailItems.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:border-accent/30 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 mb-6 bg-accent/10 rounded-xl flex items-center justify-center color-accent">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold color-primary mb-4">{item.title}</h3>
                <div className="space-y-3">
                  {item.items.map((subItem, subIndex) => (
                    <div key={subIndex} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="color-accent flex-shrink-0 mt-1" />
                      <span className="text-base text-gray-600 leading-[160%]">{subItem}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 결과 Highlight */}
          <div 
            className="rounded-2xl p-8 md:p-10"
            style={{ background: 'linear-gradient(to right, #0F214A, #15305A)' }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg className="w-7 h-7 text-[#FF6B3D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <h3 className="text-xl font-bold text-white">기술 진단 결과 제공</h3>
            </div>
            <p className="text-center text-lg text-white/90 leading-[170%]">
              <span className="text-[#FF6B3D] font-semibold">운영 효율 개선</span>, 
              <span className="text-[#FF6B3D] font-semibold"> 수익성 향상</span>, 
              <span className="text-[#FF6B3D] font-semibold"> 장기 자산 가치 제고</span>를 위한
              <br className="hidden md:block" />
              구체적인 개선 방안과 예상 효과를 제시합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 차별성 Section */}
      <section className="relative bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-accent rounded-full blur-[150px]"></div>
        </div>

        <div className="relative mx-auto px-6 md:px-10 py-20 md:py-32 max-w-[1280px]">
          <div className="text-center mb-16">
            <LabelAccent label="WHY TYRANT" />
            <h2 className="text-2xl md:text-4xl font-bold color-white leading-[140%] mb-6">
              타이런트 기술실사의 <span className="color-accent">차별성</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-accent/30 transition-all"
              >
                <div className="w-14 h-14 mx-auto mb-6 bg-accent/20 rounded-xl flex items-center justify-center color-accent">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold color-white mb-3">{item.title}</h3>
                <p className="text-sm color-white-90 leading-[160%]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 핵심 요약 & CTA Section */}
      <section className="bg-[#0a1628] py-20 md:py-32">
        <div className="mx-auto px-6 md:px-10 max-w-[1280px]">
          {/* Summary */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <LabelAccent label="SUMMARY" />
            <h2 className="text-2xl md:text-4xl font-bold color-white leading-[140%] mb-8">
              기술·사업·재무를 아우르는<br />
              <span className="color-accent">종합 분석 서비스</span>
            </h2>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-10">
              <p className="text-lg md:text-xl text-white leading-[180%]">
                당사의 태양광 기술실사 서비스는
                <br />
                <span className="font-bold text-[#FF6B3D]">사업 추진 전 리스크를 최소화</span>하고
                <br />
                <span className="font-bold text-accent">사업 추진 후 수익성을 극대화</span>하기 위한
                <br />
                <span className="font-bold text-white">기술·사업·재무를 아우르는 종합 분석 서비스</span>입니다.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-accent/20 via-accent/10 to-transparent border border-accent/30 rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-2xl md:text-4xl font-bold color-white leading-[140%] mb-6">
              태양광 사업의 리스크, 사전에 검증하세요
            </h2>
            <p className="text-lg color-white-90 leading-[170%] max-w-2xl mx-auto mb-10">
              개발·시공·운영 경험을 보유한 전문가가
              <br className="hidden md:block" />
              <span className="color-accent font-semibold">실질적인 사업 관점</span>에서 기술실사를 수행합니다
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="
                  inline-flex items-center gap-2 px-8 py-4
                  bg-accent text-white font-bold text-lg
                  rounded-full hover:bg-[#e55a35]
                  transition-all hover:scale-105
                  shadow-[0_8px_24px_rgba(255,107,61,0.4)]
                "
              >
                기술실사 문의
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="tel:02-504-1204"
                className="
                  inline-flex items-center gap-2 px-8 py-4
                  bg-white/10 text-white font-bold text-lg
                  border border-white/20 rounded-full
                  hover:bg-white/20 transition-all
                "
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                02-504-1204
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
