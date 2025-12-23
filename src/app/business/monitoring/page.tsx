import type { Metadata } from "next";
import { HeroSection } from "@components/shared/HeroSection";
import { LabelAccent, LabelGray } from "@components/shared/SectionLabel";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "태양광 관리운영(모니터링)",
  description: "보수적 관리운영과 적극적 관리운영을 통해 태양광 발전소의 수익을 극대화합니다. 자체 개발 모니터링 시스템으로 실시간 관리.",
};

// 보수적 관리운영 항목
const conservativeItems = [
  {
    title: "목표 가동률 기준 설정",
    desc: "일평균 3.5시간 기준으로 정상 가동 가용 시간 중 적절한 가동률이 유지되는지 관리합니다",
    details: ["일평균 3.5시간 목표", "천재지변/계통정지 고려", "계획정비시간 반영", "가동률 지속 모니터링"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: "주요 설비별 관리 기준",
    desc: "인버터, 접속반, 통신장비 등 핵심 설비에 대한 체계적인 관리 기준을 수립하여 운영합니다",
    details: ["인버터: 장애 발생 시 48시간 이내 조치", "접속반/차단기: 월 1회 이상 점검", "통신장비: 상시 모니터링, 장애 즉시 알람"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: "실시간 모니터링 및 조기 경보",
    desc: "5분~15분 단위 데이터 수집 및 이상 징후 자동 알림 체계를 구축하여 운영합니다",
    details: ["인버터 상태/스트링별 전류 모니터링", "발전량/PR 실시간 추적", "5~15분 단위 데이터 수집", "발전량 급감/인버터 정지 자동 알림"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    )
  },
  {
    title: "고장 대응 및 복구 지침",
    desc: "발전시간 보장의 본질인 복구 시간 관리를 위해 고장 등급 분류 및 복구 지침을 수립합니다",
    details: ["고장 등급 분류 기준 설정", "등급별 복구 지침 수립", "복구 시간 목표 관리", "사후 분석 및 개선"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  }
];

// 적극적 관리운영 항목
const activeItems = [
  {
    title: "현물 판매를 통한 수익 극대화",
    desc: "발전된 전기를 현물 시장에 최적의 타이밍에 판매하여 수익을 극대화합니다",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "RE100 전환 등 수익 증대 방안 검토",
    desc: "시장 상황에 맞춰 RE100 전환 등 다양한 수익 증대 방안을 검토하고 적용합니다",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "환경/외부요인 관리를 통한 발전량 증대",
    desc: "잡초 제거, 수목 관리, 제설, 패널청소, 반사판 설치 등을 통해 발전량을 증대합니다",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  }
];

// 환경 관리 항목
const environmentItems = [
  "잡초 제거 및 수목 관리",
  "계절별 제설 작업",
  "패널 청소 및 관리",
  "반사판 설치 등 발전 증대 방안 적용",
  "음영 발생 요소 제거",
  "주변 환경 정비"
];

// 모니터링 시스템 특징
const systemFeatures = [
  {
    title: "자체 개발 시스템",
    desc: "AI 전문 IT 협력업체와 공동으로 개발/관리하는 모니터링 시스템 운영"
  },
  {
    title: "실시간 데이터 수집",
    desc: "5분~15분 단위로 발전소 전체 데이터를 수집하여 분석"
  },
  {
    title: "AI 기반 이상 탐지",
    desc: "머신러닝 알고리즘으로 이상 징후를 조기에 감지"
  },
  {
    title: "자동 알림 시스템",
    desc: "발전량 급감, 인버터 정지 등 이상 상황 즉시 알림"
  }
];

export default function BusinessMonitoring() {
  return (
    <div className="min-h-screen bg-primary pt-20">
      {/* Hero Section */}
      <HeroSection
        badge="O&M SERVICE"
        title={<>태양광 관리운영</>} //,<br /><span className="color-accent">체계적인 방침</span>으로 운영합니다</>}
        description={
          <>
            보수적 관리운영과 적극적 관리운영을 구분하여 체계적으로 운영합니다.
            <br className="hidden md:block" />
            자체 개발 모니터링 시스템으로 실시간 관리 및 수익 극대화를 실현합니다.
          </>
        }
      />

      {/* Two Policies Overview */}
      <section className="bg-gray-50 py-20 md:py-32">
        <div className="mx-auto px-6 md:px-10 max-w-[1280px]">
          <div className="text-center mb-16">
            <LabelGray label="OPERATION POLICY" />
            <h2 className="text-2xl md:text-4xl font-bold color-primary leading-[140%] mb-6">
              관리운영 <span className="color-accent">2가지 방침</span>
            </h2>
            <p className="text-lg text-gray-600 leading-[170%] max-w-3xl mx-auto">
              관리운영 규칙은 크게 <span className="font-bold text-[#0F214A]">보수적 관리운영방침</span>과
              <span className="font-bold text-[#0F214A]"> 적극적 관리운영방침</span>으로 구분되어 운영됩니다
            </p>
          </div>

          {/* Two Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* 보수적 관리운영 */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-[#00D9FF]/10 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-[#00D9FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold color-primary mb-3">보수적 관리운영방침</h3>
              <p className="text-base text-gray-600 leading-[170%] mb-6">
                태양광 발전소의 <span className="font-semibold text-[#0F214A]">발전시간 보장</span>을 위한 내부 관리지침으로,
                안정적인 운영과 고장 예방에 중점을 둡니다.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#00D9FF]/10 text-[#00D9FF] text-sm font-medium rounded-full">가동률 관리</span>
                <span className="px-3 py-1 bg-[#00D9FF]/10 text-[#00D9FF] text-sm font-medium rounded-full">설비 점검</span>
                <span className="px-3 py-1 bg-[#00D9FF]/10 text-[#00D9FF] text-sm font-medium rounded-full">실시간 모니터링</span>
                <span className="px-3 py-1 bg-[#00D9FF]/10 text-[#00D9FF] text-sm font-medium rounded-full">복구 지침</span>
              </div>
            </div>

            {/* 적극적 관리운영 */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-accent-10 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 color-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold color-primary mb-3">적극적 관리운영방침</h3>
              <p className="text-base text-gray-600 leading-[170%] mb-6">
                <span className="font-semibold text-[#0F214A]">수익 극대화</span>를 위한 전략적 운영방침으로,
                현물 판매 최적화와 발전량 증대에 중점을 둡니다.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent-10 color-accent text-sm font-medium rounded-full">현물 판매</span>
                <span className="px-3 py-1 bg-accent-10 color-accent text-sm font-medium rounded-full">RE100 전환</span>
                <span className="px-3 py-1 bg-accent-10 color-accent text-sm font-medium rounded-full">발전량 증대</span>
                <span className="px-3 py-1 bg-accent-10 color-accent text-sm font-medium rounded-full">환경 관리</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 보수적 관리운영방침 상세 */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400 rounded-full blur-[150px]"></div>
        </div>

        <div className="relative mx-auto px-6 md:px-10 py-20 md:py-32 max-w-[1280px]">
          <div className="text-center mb-16">
            <LabelAccent label="CONSERVATIVE POLICY" />
            <h2 className="text-2xl md:text-4xl font-bold color-white leading-[140%] mb-6">
              보수적 관리운영방침
            </h2>
            <p className="text-lg color-white-90 leading-[170%] max-w-3xl mx-auto">
              태양광 발전소의 <span className="color-white font-semibold">발전시간 보장</span>을 위한 내부 관리지침입니다
            </p>
          </div>

          {/* Conservative Items */}
          <div className="space-y-6">
            {conservativeItems.map((item, index) => (
              <div
                key={index}
                className="bg-[rgba(21,48,90,0.3)] backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-[#00D9FF]/20 rounded-xl flex items-center justify-center text-[#00D9FF]">
                      {item.icon}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold color-white mb-3">{item.title}</h3>
                    <p className="text-base color-white-90 leading-[170%] mb-6">{item.desc}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {item.details.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-3"
                        >
                          <CheckCircle2 size={16} className="text-[#00D9FF] flex-shrink-0" />
                          <span className="text-sm color-white-90">{detail}</span>
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

      {/* 적극적 관리운영방침 상세 */}
      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto px-6 md:px-10 max-w-[1280px]">
          <div className="text-center mb-16">
            <LabelGray label="ACTIVE POLICY" />
            <h2 className="text-2xl md:text-4xl font-bold color-primary leading-[140%] mb-6">
              적극적 관리운영방침
            </h2>
            <p className="text-lg text-gray-600 leading-[170%] max-w-3xl mx-auto">
              <span className="font-semibold text-[#0F214A]">수익 극대화</span>를 위한 전략적 운영방침입니다
            </p>
          </div>

          {/* Active Items */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {activeItems.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:border-accent/30 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 mb-6 bg-accent/10 rounded-xl flex items-center justify-center color-accent">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold color-primary mb-3">{item.title}</h3>
                <p className="text-base text-gray-600 leading-[160%]">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* 현물 판매 상세 */}
          <div
            className="rounded-2xl p-8 md:p-12 mb-6"
            style={{ background: 'linear-gradient(135deg, #0F214A 0%, #1a3a6e 100%)' }}
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              <div className="md:w-2/5">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/30 rounded-full mb-6">
                  <svg className="w-5 h-5 color-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-bold color-accent tracking-wider">SPOT MARKET</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  현물 판매 전략을 통한<br />
                  <span className="text-[#FF6B3D]">수익 극대화</span>
                </h3>
                <p className="text-base text-white/85 leading-[170%]">
                  전력시장 가격 변동을 분석하여 발전 전력을 최적의 시점에 현물 시장에 판매함으로써 장기 고정 수익 구조 대비 추가 수익을 창출합니다.
                </p>
              </div>

              <div className="md:w-3/5">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "전력시장(SMP) 가격 추이 상시 모니터링",
                    "시간대별 발전량·가격 분석 기반 판매 전략 수립",
                    "계절·수급 상황별 판매 시나리오 운영",
                    "고정계약(PPA)과 현물판매 병행 전략 적용",
                    "수익 변동성 관리 및 리스크 최소화 체계 구축"
                  ].map((item, index) => (
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

          {/* RE100 상세 */}
          <div
            className="rounded-2xl p-8 md:p-12 mb-6"
            style={{ background: 'linear-gradient(135deg, #0F214A 0%, #1a3a6e 100%)' }}
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              <div className="md:w-2/5">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/30 rounded-full mb-6">
                  <svg className="w-5 h-5 color-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-bold color-accent tracking-wider">RE100</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  RE100 연계 수익 모델을 통한<br />
                  <span className="text-[#FF6B3D]">추가 수익 창출</span>
                </h3>
                <p className="text-base text-white/85 leading-[170%]">
                  RE100 수요 확대에 대응하여 기업 전력 수요와 연계한 다양한 신재생에너지 수익 모델을 검토·적용합니다.
                </p>
              </div>

              <div className="md:w-3/5">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "RE100 기업 대상 전력 공급 가능성 검토",
                    "직접 PPA·가상 PPA(VPPA) 적용 방안 분석",
                    "REC·인증서 활용 수익 모델 검토",
                    "정책·제도 변화에 따른 신규 사업 기회 발굴",
                    "중장기 수익 구조 다각화 전략 수립"
                  ].map((item, index) => (
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

          {/* 환경 관리 상세 */}
          <div
            className="rounded-2xl p-8 md:p-12"
            style={{ background: 'linear-gradient(135deg, #0F214A 0%, #1a3a6e 100%)' }}
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              <div className="md:w-2/5">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/30 rounded-full mb-6">
                  <svg className="w-5 h-5 color-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  <span className="text-sm font-bold color-accent tracking-wider">ENVIRONMENT</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  환경/외부요인 관리를 통한<br />
                  <span className="text-[#FF6B3D]">발전량 증대</span>
                </h3>
                <p className="text-base text-white/85 leading-[170%]">
                  발전 방해 요소를 제거하고 발전 증대 방안을 적용하여 발전량을 극대화합니다.
                </p>
              </div>

              <div className="md:w-3/5">
                <div className="grid grid-cols-2 gap-3">
                  {environmentItems.map((item, index) => (
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

      {/* 자체 개발 모니터링 시스템 */}
      <section className="relative bg-[#0a1628] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent rounded-full blur-[150px]"></div>
        </div>

        <div className="relative mx-auto px-6 md:px-10 py-20 md:py-32 max-w-[1280px]">
          <div className="text-center mb-16">
            <LabelAccent label="MONITORING SYSTEM" />
            <h2 className="text-2xl md:text-4xl font-bold color-white leading-[140%] mb-6">
              자체 개발 모니터링 시스템
            </h2>
            <p className="text-lg color-white-90 leading-[170%] max-w-3xl mx-auto">
              <span className="color-accent font-semibold">AI 전문 IT 협력업체</span>와 공동으로 개발/관리하는
              <br className="hidden md:block" />
              모니터링 시스템을 운영합니다
            </p>
          </div>

          {/* System Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-[rgba(21,48,90,0.3)] backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-6 bg-accent/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 color-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold color-white mb-3">{feature.title}</h3>
                <p className="text-sm color-white-90 leading-[160%]">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* System Highlight */}
          <div className="mt-12 bg-accent/10 border border-accent/20 rounded-2xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-accent/20 rounded-2xl flex items-center justify-center border border-accent/30">
                  <svg className="w-10 h-10 color-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold color-white mb-3">
                  AI 기반 <span className="color-accent">스마트 모니터링</span>
                </h3>
                <p className="text-base color-white-90 leading-[170%]">
                  인버터 상태, 스트링별 전류, 발전량/PR, 통신상태 등에 대하여 실시간 모니터링 체계를 구축하고,
                  <br className="hidden md:block" />
                  이상 징후 발생 시 자동으로 알림을 발송하여 신속한 대응이 가능합니다.
                </p>
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
              체계적인 관리운영으로 수익을 극대화하세요
            </h2>
            <p className="text-lg color-white-90 leading-[170%] max-w-2xl mx-auto mb-10">
              보수적 관리운영과 적극적 관리운영을 통해
              <br className="hidden md:block" />
              <span className="color-accent font-semibold">안정적인 발전시간 보장과 수익 극대화</span>를 동시에 실현합니다
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
                관리 서비스 문의
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
