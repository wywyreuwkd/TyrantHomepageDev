import type { Metadata } from "next";
import { HeroSection } from "@components/shared/HeroSection";
import { LabelAccent, LabelGray } from "@components/shared/SectionLabel";

export const metadata: Metadata = {
  title: "태양광 사업 분석",
  description: "태양광 개발 사업 전문가의 실질적인 사업성 분석. 형식적인 보고서가 아닌, 발주처에게 진정한 도움이 되는 리포트를 제공합니다.",
};

// 타이런트 분석 프로세스
const tyrantProcess = [
  {
    step: "STEP 01",
    title: "사전 실사",
    subtitle: "Pre-Site Survey",
    description: "사업 착수 전 필수 요건을 사전에 검증하여 리스크를 최소화합니다.",
    items: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
        title: "계통 확인",
        description: "한전 계통연계 가능 용량 및 연계 지점 사전 확인",
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        ),
        title: "지자체 조례 확인",
        description: "해당 지역 태양광 설치 관련 조례 및 규제 사항 검토",
      },
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    step: "STEP 02",
    title: "현장 실사",
    subtitle: "On-Site Survey",
    description: "현장의 실제 조건을 면밀히 분석하여 정확한 설계 데이터를 확보합니다.",
    items: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ),
        title: "음영 확인",
        description: "주변 건물, 수목 등에 의한 그림자 영향 정밀 분석",
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        ),
        title: "진입로 확인",
        description: "장비 및 자재 반입 가능 여부, 시공 접근성 검토",
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        ),
        title: "내부 구조물 확인",
        description: "지붕 구조, 하중 지지력, 전기 설비 현황 조사",
      },
    ],
    color: "from-emerald-500 to-emerald-600",
  },
  {
    step: "STEP 03",
    title: "실사 후 분석",
    subtitle: "Post-Survey Analysis",
    description: "수집된 데이터를 바탕으로 정밀한 기술 분석을 수행합니다.",
    items: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
          </svg>
        ),
        title: "가설계 및 용량 확인",
        description: "최적 배치 설계안 작성 및 설치 가능 용량 산정",
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        ),
        title: "PVsyst 발전량 분석",
        description: "국제 표준 시뮬레이션 툴을 통한 정밀 발전량 예측",
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        title: "공사원가 및 총사업비 확인",
        description: "실제 시공 경험 기반의 정확한 비용 산정",
      },
    ],
    color: "from-purple-500 to-purple-600",
  },
  {
    step: "STEP 04",
    title: "사업성 분석",
    subtitle: "Feasibility Analysis",
    description: "독립된 제3자 기관의 기술 검증을 통해 객관적인 사업성을 분석합니다.",
    items: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        ),
        title: "독립 기관 기술 검증",
        description: "제3자 전문기관의 객관적인 기술 검토 및 검증",
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        ),
        title: "정확한 사업성 분석 보고서",
        description: "실질적으로 도움이 되는 상세 분석 보고서 제공",
      },
    ],
    color: "from-accent to-[#e55a35]",
  },
];

// 비교 항목
const comparisonItems = [
  {
    category: "분석 주체",
    accounting: "회계사 (비전문가)",
    tyrant: "태양광 개발 전문가",
  },
  {
    category: "금융 전문성",
    accounting: "태양광 금융 경험 부족",
    tyrant: "15년+ 태양광 금융 전문가 보유",
  },
  {
    category: "데이터 수집",
    accounting: "발주처 제공 데이터 활용",
    tyrant: "직접 현장 실사 수행",
  },
  {
    category: "설치용량 산정",
    accounting: "발주처 제공 수치 그대로 사용",
    tyrant: "가설계 기반 정밀 용량 산정",
  },
  {
    category: "발전량 예측",
    accounting: "일반적인 발전시간 적용",
    tyrant: "PVsyst 시뮬레이션 분석",
  },
  {
    category: "사업비 검토",
    accounting: "발주처 제공 예산 기준",
    tyrant: "실제 시공 경험 기반 원가 산정",
  },
  {
    category: "리스크 분석",
    accounting: "형식적인 리스크 언급",
    tyrant: "계통, 조례, 음영 등 실질 리스크 검토",
  },
  {
    category: "금융조달 가능성",
    accounting: "형식적 리포트로 심사 탈락 위험",
    tyrant: "금융기관 심사 기준 충족 리포트",
  },
  {
    category: "보고서 목적",
    accounting: "금융조달을 위한 형식적 리포트",
    tyrant: "발주처에게 실질적으로 도움되는 리포트",
  },
];

export default function FSAnalysisPage() {
  return (
    <div className="min-h-screen bg-primary pt-20">
      {/* Hero Section */}
      <HeroSection
        badge="F/S ANALYSIS SERVICE"
        title={<>태양광 사업 분석,<br /><span className="color-accent">전문가</span>가 다릅니다</>}
        description={
          <>
            대부분의 사업성 검토보고서는 회계법인에서 작성합니다.
            <br className="hidden md:block" />
            하지만 태양광 사업의 본질을 이해하는 전문가의 분석은 다릅니다.
          </>
        }
      />

      {/* Problem Statement Section */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500 rounded-full blur-[150px]"></div>
        </div>

        <div className="relative mx-auto px-6 md:px-10 py-20 md:py-32 max-w-[1280px]">
          <div className="max-w-4xl mx-auto text-center">
            <LabelAccent label="THE PROBLEM" />
            <h2 className="text-2xl md:text-4xl font-bold color-white leading-[140%] mb-8">
              기존 사업성 검토보고서의 한계
            </h2>

            {/* Quote Box */}
            <div className="bg-[rgba(255,107,61,0.1)] border border-accent/30 rounded-2xl p-8 md:p-12 mb-12">
              <p className="text-lg md:text-xl color-white-90 leading-[180%] mb-6">
                대부분의 사업성 검토보고서를 작성하는 <span className="color-accent font-bold">회계법인</span>은
                <br className="hidden md:block" />
                <span className="color-white font-semibold">태양광 사업의 본질에 대한 이해도가 낮을 수밖에 없습니다.</span>
              </p>
              <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
            </div>

            {/* Problem Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-[rgba(21,48,90,0.5)] border border-white/10 rounded-2xl p-6">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold color-white mb-2">형식적인 분석</h3>
                <p className="text-base color-white-90 leading-[170%]">
                  발주업체로부터 받은 예상설치용량, 발전시간 등 주요 키값을 그대로 사용
                </p>
              </div>

              <div className="bg-[rgba(21,48,90,0.5)] border border-white/10 rounded-2xl p-6">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold color-white mb-2">단순 제공 목적</h3>
                <p className="text-base color-white-90 leading-[170%]">
                  실질적인 사업 검토보다 금융회사 제공을 위한 형식적인 리포트에 그침
                </p>
              </div>

              <div className="bg-[rgba(21,48,90,0.5)] border border-white/10 rounded-2xl p-6">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold color-white mb-2">현장 검증 부재</h3>
                <p className="text-base color-white-90 leading-[170%]">
                  실제 현장 조건을 반영하지 못한 책상 위 분석으로 예측 오차 발생
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative bg-[#0a1628] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent rounded-full blur-[150px]"></div>
        </div>

        <div className="relative mx-auto px-6 md:px-10 py-20 md:py-32 max-w-[1280px]">
          <div className="text-center mb-16">
            <LabelAccent label="TYRANT SOLUTION" />
            <h2 className="text-2xl md:text-4xl font-bold color-white leading-[140%] mb-6">
              태양광 개발 <span className="color-accent">전문가</span>의 분석은 다릅니다
            </h2>
            <p className="text-lg color-white-90 leading-[170%] max-w-3xl mx-auto">
              타이런트는 15년 이상의 태양광 개발 경험을 바탕으로
              <br className="hidden md:block" />
              <span className="color-white font-semibold">형식적인 보고서가 아닌, 실질적으로 발주처에게 도움이 되는 리포트</span>를 제공합니다.
            </p>
          </div>

          {/* Finance Expert Highlight */}
          <div className="bg-gradient-to-r from-accent/20 via-accent/10 to-transparent border border-accent/30 rounded-2xl p-8 md:p-10 mb-12">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 color-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold color-white mb-4">
                  <span className="color-accent">금융 전문가</span>가 함께 합니다
                </h3>
                <p className="text-lg color-white-90 leading-[180%] mb-4">
                  타이런트에는 <span className="color-white font-bold">15년 이상 태양광 개발 금융업무를 경험한 전문가</span>들이 있습니다.
                  <br className="hidden md:block" />
                  단순한 사업성 분석을 넘어, <span className="color-accent font-semibold">실질적으로 금융조달이 가능한 수준의 리포트</span>를 제공합니다.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm color-white">
                    <svg className="w-4 h-4 color-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    금융기관 심사 기준 충족
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm color-white">
                    <svg className="w-4 h-4 color-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    PF 대출 승인율 극대화
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm color-white">
                    <svg className="w-4 h-4 color-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    투자자 신뢰도 확보
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Process Timeline */}
          <div className="space-y-8">
            {tyrantProcess.map((process, index) => (
              <div
                key={index}
                className="relative bg-[rgba(21,48,90,0.3)] backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${process.color} opacity-10 blur-3xl`}></div>

                {/* Step Badge */}
                <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                  <div className="flex-shrink-0">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${process.color} rounded-full`}>
                      <span className="text-white text-sm font-bold tracking-wider">{process.step}</span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="mb-6">
                      <h3 className="text-2xl md:text-3xl font-bold color-white mb-1">{process.title}</h3>
                      <p className="text-sm color-white-90 opacity-70 tracking-wider">{process.subtitle}</p>
                    </div>
                    <p className="text-lg color-white-90 leading-[170%] mb-8">{process.description}</p>

                    {/* Items Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {process.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-accent/30 transition-all"
                        >
                          <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center color-accent mb-4">
                            {item.icon}
                          </div>
                          <h4 className="text-base font-bold color-white mb-2">{item.title}</h4>
                          <p className="text-sm color-white-90 leading-[160%]">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto px-6 md:px-10 max-w-[1280px]">
          <div className="text-center mb-16">
            <LabelGray label="COMPARISON" />
            <h2 className="text-2xl md:text-4xl font-bold color-primary leading-[140%] mb-6">
              회계법인 vs 타이런트
            </h2>
            <p className="text-lg text-gray-600 leading-[170%] max-w-2xl mx-auto">
              같은 사업성 검토보고서라도 누가 작성하느냐에 따라
              <br className="hidden md:block" />
              그 가치와 신뢰도가 달라집니다.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr>
                  <th className="text-left py-4 px-6 bg-gray-100 rounded-tl-xl">
                    <span className="text-base font-bold color-primary">비교 항목</span>
                  </th>
                  <th className="text-center py-4 px-6 bg-gray-200">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-base font-bold text-gray-600">기존 회계법인</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-6 bg-accent rounded-tr-xl">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-base font-bold text-white">타이런트</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="py-5 px-6 border-b border-gray-100">
                      <span className="text-base font-semibold color-primary">{item.category}</span>
                    </td>
                    <td className="py-5 px-6 border-b border-gray-100 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="text-base text-gray-600">{item.accounting}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 border-b border-gray-100 text-center bg-accent/5">
                      <div className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5 color-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-base color-primary font-medium">{item.tyrant}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Result Highlight */}
          <div 
            className="mt-12 rounded-2xl p-8 md:p-12"
            style={{ background: 'linear-gradient(to right, #0F214A, #15305A)' }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <svg className="w-8 h-8 text-[#FF6B3D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl md:text-2xl font-bold text-white">타이런트의 결론</h3>
            </div>
            <div className="text-center mb-6">
              <p className="text-lg md:text-xl text-white leading-[170%]">
                <span className="text-[#FF6B3D] font-bold">형식적으로 제공되는 사업성분석 자료가 아닌</span>
                <br />
                <span className="text-white font-semibold">실질적으로 발주처에게 도움이 되는 리포트를 제공합니다.</span>
              </p>
            </div>
            <div className="w-16 h-[2px] bg-[#FF6B3D]/50 mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-white/80 leading-[170%] text-center max-w-2xl mx-auto">
              15년 이상의 <span className="text-[#FF6B3D] font-semibold">태양광 금융 전문가</span>가 작성하는 리포트이기에,
              <br className="hidden md:block" />
              <span className="text-white font-semibold">금융기관 심사를 통과할 수 있는 수준의 보고서</span>를 제공합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Why Expert Section */}
      <section className="relative bg-gradient-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-accent rounded-full blur-[150px]"></div>
        </div>

        <div className="relative mx-auto px-6 md:px-10 py-20 md:py-32 max-w-[1280px]">
          <div className="text-center mb-16">
            <LabelAccent label="WHY TYRANT" />
            <h2 className="text-2xl md:text-4xl font-bold color-white leading-[140%] mb-6">
              태양광 <span className="color-accent">최고의 전문가</span>들을 만나세요
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
              <div className="text-3xl md:text-5xl font-black color-accent mb-4">15+</div>
              <h3 className="text-base md:text-lg font-bold color-white mb-2">년 업력</h3>
              <p className="text-xs md:text-sm color-white-90 leading-[160%]">태양광 개발 사업 경험</p>
            </div>

            <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
              <div className="text-3xl md:text-5xl font-black color-accent mb-4">15+</div>
              <h3 className="text-base md:text-lg font-bold color-white mb-2">년 금융 경력</h3>
              <p className="text-xs md:text-sm color-white-90 leading-[160%]">태양광 개발 금융 전문가</p>
            </div>

            <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
              <div className="text-3xl md:text-5xl font-black color-accent mb-4">500+</div>
              <h3 className="text-base md:text-lg font-bold color-white mb-2">MW</h3>
              <p className="text-xs md:text-sm color-white-90 leading-[160%]">누적 개발 용량</p>
            </div>

            <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
              <div className="text-3xl md:text-5xl font-black color-accent mb-4">98%</div>
              <h3 className="text-base md:text-lg font-bold color-white mb-2">예측 정확도</h3>
              <p className="text-xs md:text-sm color-white-90 leading-[160%]">발전량 예측 적중률</p>
            </div>

            <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 col-span-2 md:col-span-1">
              <div className="text-3xl md:text-5xl font-black color-accent mb-4">100%</div>
              <h3 className="text-base md:text-lg font-bold color-white mb-2">현장 실사</h3>
              <p className="text-xs md:text-sm color-white-90 leading-[160%]">직접 현장 방문 분석</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0a1628] py-20 md:py-32">
        <div className="mx-auto px-6 md:px-10 max-w-[1280px]">
          <div className="bg-gradient-to-br from-accent/20 via-accent/10 to-transparent border border-accent/30 rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-2xl md:text-4xl font-bold color-white leading-[140%] mb-6">
              금융조달이 가능한 사업성 분석이 필요하신가요?
            </h2>
            <p className="text-lg color-white-90 leading-[170%] max-w-2xl mx-auto mb-10">
              태양광 개발 전문가와 금융 전문가가 함께 분석합니다.
              <br className="hidden md:block" />
              형식적인 보고서가 아닌, <span className="color-accent font-semibold">실질적으로 금융조달이 가능한 수준</span>의 리포트를 제공합니다.
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
                무료 상담 신청
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
