import type { Metadata } from "next";
import { HeroSection } from "@components/shared/HeroSection";
import { LabelAccent, LabelGray } from "@components/shared/SectionLabel";
import { SolarOLogo } from "@components/shared/SolarOLogo";
import { RevenueDiagramRenderer, RevenueDiagramSolarO } from "@components/sections/RevenueDiagram";
import { CheckCircle2 } from "lucide-react";

import { CustomBarChart, solarOData, traditionalData } from "@components/sections/BarChart";
import { WhyNow } from "@/app/components/sections/WhyNow";
import { Download } from "lucide-react";

export const metadata: Metadata = {
  title: "솔라오 상품 전체 개요",
  description: "태양광 발전 개발 상품인 솔라오 상품의 전체적인 내용에 대해서 소개",
};

const features = [
  {
    title: "SOLAR",
    items: [
      {
        label: "Opportunity",
        description: "기존에 없던 신개념 수익 기회",
      },
      {
        label: "Ownership",
        description: "내 지붕, 내 발전소(90%→100%)",
      },
    ],
  },
  {
    title: "zerO",
    items: [
      {
        label: "Zero Cost",
        description: "설치 비용 0원",
      },
      {
        label: "Zero Risk",
        description: "건물주의 신용공여 없음",
      },
      {
        label: "Zero Worries",
        description: "15년간 토탈케어솔루션",
      },
    ]
  },
  {
    title: "오(Five)",
    items: [
      {
        label: "5:5 수익",
        description: "공정한 5:5 수익 공유(15년간)",
      },
      {
        label: "5가지",
        description: "수익극대화 전략",
      },
    ],
  },
];

export default function SolarOProduct() {
  return (
    <div className="min-h-screen bg-primary pt-20">
      {/* Hero Section */}
      <HeroSection
        badge="SOLAR O PRODUCT OVERVIEW"
        title={<>솔라오 상품 소개</>}
        description={
          <>
            사업자의 이익 극대화에 초점을 맞춘 솔라오 프로젝트
            <br/>
            <span>부담 없이 설치하고, 전기 판매 수익을 얻을 수 있는 프로그램입니다. </span>
            <br className="hidden md:block" />
            <span>15년간 토탈케어솔루션을 제공하며, 공정한 5:5 수익 공유를 실행합니다.</span>
          </>
        }
      />

      {/* Service Intro Section */}
      <section className="bg-primary-dark-5 py-12 md:py-24">
        <div className="mx-auto px-6 md:px-10 max-w-[1280px]">
          {/* Single Section with Title and Cards */}
          <div className="bg-third shadow-sm rounded-2xl py-20 px-6 md:px-16">
            {/* Title Area */}
            <div className="mb-[24px]">
              <h2 className="color-white flex flex-wrap items-center gap-2 text-left text-2xl sm:text-4xl font-bold leading-[140%] mb-4">
                <span className="flex items-center gap-2">
                  <span className="hidden sm:inline">솔라오 [ <SolarOLogo size="medium" /> ]</span>
                  <span className="inline sm:hidden">솔라오 [ <SolarOLogo size="small" /> ]</span>
                </span>
                <span className="block sm:inline">프로젝트는?</span>
              </h2>
              <p className="color-white text-left leading-[140%] text-[18px]">
                건물주 부담 없이 태양광을 설치하고, 15년간 발생하는 수익을 함께 나누는 무상설치 수익공유 프로그램입니다.
              </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-primary-dark-4 shadow-sm rounded-2xl leading-[140%] p-8"
                >
                  <h3 className="color-white text-3xl mb-6 font-bold">
                    {feature.title.split('').map((char, i) => {
                      const shouldHighlight = 
                        (feature.title === "SOLAR" && char === "O") ||
                        (feature.title === "zerO" && char === "O") ||
                        (feature.title === "오(Five)" && char === "오");
                      
                      return (
                        <span key={i} className={shouldHighlight ? "color-accent" : ""}>
                          {char}
                        </span>
                      )
                    })}
                  </h3>
                  <div className="space-y-4">
                    {feature.items.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        <p className="color-accent mb-[6px] text-lg">{item.label}</p>
                        <p className="color-white text-[16px]">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="bg-primary-dark-4 py-20 md:py-32">
        <div className="mx-auto px-6 md:px-10 max-w-[1280px]">
          <div className="text-left mb-16">
            <LabelAccent label="CORE FEATURES" />
            <h2 className="text-2xl md:text-4xl font-bold color-white leading-[140%] mb-6">
              <span className="flex flex-wrap items-center gap-2">
                <span>
                  <span className="hidden sm:inline">솔라오 [ <SolarOLogo size="medium" /> ]</span>
                  <span className="inline sm:hidden">솔라오 [ <SolarOLogo size="small" /> ]</span>
                </span>
              <span className="block sm:inline">핵심 특징</span>
              </span>
            </h2>
          </div>

          {/* 일반적인 특징 (타 태양광 상품에도 있는 특징) */}
          <div className="mb-16">
            <h3 className="text-xl md:text-2xl font-bold color-white mb-8 flex items-center gap-4">
              <div className="w-4 h-4 border-2 border-accent bg-accent-90 rounded-sm"></div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span>일반적인 특징</span>
                <span className="text-white/60 text-lg font-normal">(타 태양광 상품에도 있는 특징)</span>
              </div>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-accent/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 color-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold color-white mb-3">모든 사업비용은 투자자가 부담</h4>
                    <div className="text-lg color-white-90 leading-[170%]">
                      <p className="mb-2">
                        기존에 제공되고 있는 임대차 방식의 태양광 설치 사업 구조에서는 건물주의 비용 부담 없이 무상 설치 후 매월 임대료를 지급하는 방식으로 진행되었습니다.
                      </p>
                      <p>
                        솔라오 상품 또한 지붕에 태양광 발전소를 설치하는 상품으로, 건물주의 비용 없이 태양광 발전소를 설치하고, 이익을 쉐어합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-accent/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 color-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold color-white mb-2">발전시간 보장 및 책임관리운영</h4>
                    <div className="text-lg color-white-90 leading-[170%]">
                      <p className="mb-2">
                        임대차 방식의 사업구조 하에서는 발전 생산량과 무관하게 건물주에게 고정의 임대료가 지급되며, 발전사업자의 책임 하에 관리/유지보수가 이루어집니다.
                      </p>
                      <p>
                        솔라오 상품은 발전 수익을 건물주와 쉐어하는 상품으로, 시공사에 의해 발전시간이 보장되고, 타이런트가 책임있는 관리운영을 수행합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 솔라오 핵심 특징 3가지 (다른 태양광 상품에는 없는 특징) */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold color-white mb-8 flex items-center gap-4">
              <div className="w-4 h-4 border-2 border-accent bg-accent-90 rounded-sm"></div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span>솔라오 핵심 특징</span>
                <span className="color-accent text-lg font-normal">(타 태양광 상품에는 없는 특징)</span>
              </div>
            </h3>

            <div className="space-y-6">
              {/* 특징 1: 지분 구조 */}
              <div className="border border-white-90 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold color-white mb-2">최초 발전소(SPC) 지분 구조</h3>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <span className="px-4 py-2 bg-accent-10 rounded-full text-md color-accent font-semibold">
                        <span className="font-bold">건물주:</span> 90% → 16년 차에 100% 보유
                      </span>
                      <span className="px-4 py-2 bg-white/10 rounded-full text-md color-white font-semibold">
                        <span className="font-bold">투자자:</span> 10% → 16년 차에 건물주에 양도
                      </span>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4 pl-14">
                  <div className="bg-white/5 border border-white-10 rounded-xl p-4">
                    <div className="flex items-start gap-2 mb-2">
                      <CheckCircle2 size={22} className="color-accent flex-shrink-0 mt-0.5" />
                      <span className="text-lg font-bold color-white">태양광 철거리스크 구조적 해결</span>
                    </div>
                    <p className="text-md color-white-90 leading-[160%] pl-6">
                      <span>다른 태양광 상품의 경우 철거리스크에 대한 우려로 보증보험 등 보증 조건을 요구합니다. </span>
                      <br className="hidden md:block" />
                      <span>솔라오 사업에는 보증보험, 대기업 보증 등이 필요하지 않습니다.</span>
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white-10 rounded-xl p-4">
                    <div className="flex items-start gap-2 mb-2">
                      <CheckCircle2 size={22} className="color-accent flex-shrink-0 mt-0.5" />
                      <span className="text-lg font-bold color-white">태양광 운영리스크 구조적 해결</span>
                    </div>
                    <p className="text-md color-white-90 leading-[160%] pl-6">건물주와 투자자 간의 이해가 같도록 구조적으로 설계되어, 신속한 관리운영이 가능합니다.</p>
                  </div>
                  <div className="bg-white/5 border border-white-10 rounded-xl p-4">
                    <div className="flex items-start gap-2 mb-2">
                      <CheckCircle2 size={22} className="color-accent flex-shrink-0 mt-0.5" />
                      <span className="text-lg font-bold color-white">지분 양도시 세금 이슈 완화</span>
                    </div>
                    <p className="text-md color-white-90 leading-[160%] pl-6">
                      <span>기존 임대차 태양광 상품의 경우, 20년 후 취득시 취득/증여세가 발생될 수 있습니다. </span>
                      <br className="hidden md:block" />
                      <span>솔라오는 구조적으로 해당 이슈를 완화시켰습니다.</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* 특징 2: 건물주 신용공여 없음 */}
              <div className="border border-white-90 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold color-white mb-2">공장주 신용공여 없음</h3>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <span className="px-4 py-2 bg-accent-10 rounded-full text-md color-accent font-semibold">
                        건물주의 연대보증, 건물 담보 등 신용공여 불필요
                      </span>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 pl-14">
                  <div className="bg-white/5 border border-white-10 rounded-xl p-4">
                    <div className="flex items-start gap-2 mb-2">
                      <CheckCircle2 size={22} className="color-accent flex-shrink-0 mt-0.5" />
                      <span className="text-lg font-bold color-white">개인 소유 건물도 사업 진행 가능</span>
                    </div>
                    <p className="text-md color-white-90 leading-[160%] pl-6">
                      <span>그동안 개인 소유 건물에 적용 가능한 태양광 상품이 없어서 아쉬웠던 부분을 솔라오에서 해결했습니다. </span>
                      <br className="hidden md:block" />
                      <span>법인 소유 건물 뿐만 아니라 개인 소유 건물도 태양광 사업 가능합니다.</span>
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white-10 rounded-xl p-4">
                    <div className="flex items-start gap-2 mb-2">
                      <CheckCircle2 size={22} className="color-accent flex-shrink-0 mt-0.5" />
                      <span className="text-lg font-bold color-white">개인 및 법인 신용도 상관 없이 진행 가능</span>
                    </div>
                    <p className="text-md color-white-90 leading-[160%] pl-6">
                      <span>기존 태양광 상품의 경우, 법인 소유 건물에 대하여 신용도 B 이상인 경우만 진행 가능했습니다. </span>
                      <br className="hidden md:block" />
                      <span>솔라오는 건물 소유주의 신용도 상관 없이 진행 가능합니다.</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* 특징 3: 전력 및 REC 현물 판매 */}
              <div className="border border-white-90 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold color-white mb-2">전력 및 REC 현물 판매</h3>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <span className="px-4 py-2 bg-accent-10 rounded-full text-md color-accent font-semibold">
                        고정가 계약이 아닌 시장가 판매로 높은 매출 달성 가능
                      </span>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 pl-14">
                  <div className="bg-white/5 border border-white-10 rounded-xl p-4">
                    <div className="flex items-start gap-2 mb-2">
                      <CheckCircle2 size={22} className="color-accent flex-shrink-0 mt-0.5" />
                      <span className="text-lg font-bold color-white">높은 매출 달성 가능</span>
                    </div>
                    <p className="text-md color-white-90 leading-[160%] pl-6">
                      <span>전력거래소 직접 판매를 통해 고정가 대비 30% 이상 높은 매출 달성이 가능합니다. </span>
                      <br className="hidden md:block" />
                      <span>기존의 상품 구조의 경우 고정가 계약으로 매출이 제한되어 아쉬운 부분을 솔라오에서 해결했습니다.</span>
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white-10 rounded-xl p-4">
                    <div className="flex items-start gap-2 mb-2">
                      <CheckCircle2 size={22} className="color-accent flex-shrink-0 mt-0.5" />
                      <span className="text-lg font-bold color-white">RE100 전환 가능</span>
                    </div>
                    <p className="text-md color-white-90 leading-[160%] pl-6">
                      <span>RE100 참여 기업들에 대한 RE100 이행 솔루션 제공. </span>
                      <br className="hidden md:block" />
                      <span>RE100 전환이 필요한 기업들에 대하여, 별도의 투자자 협의를 통하여 RE100 전환 솔루션을 제공합니다.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Comparison Section */}
      <section className="bg-gray-50 py-20 md:py-32">
        <div className="mx-auto px-6 md:px-10 max-w-[1280px]">
          <div className="text-left mb-12">
            <LabelGray label="REVENUE COMPARISON" />
            <h2 className="text-2xl md:text-4xl font-bold color-primary-dark-2 leading-[140%] mb-6">
              <span>
                구조 차이에 따른 수익률 비교 그래프
              </span>
            </h2>
            {/* 설명 텍스트 */}
            <div className="mt-4 text-left">
              <p className="text-xl color-gray-700 leading-[180%]">
                기존 지붕 임대차 방식의 사업구조 하에서는 전력 생산 수입으로 안정적인 임대 수익을 제공합니다.
                <br className="hidden md:block" />
                반면, 새롭게 설계된 솔라오 상품의 사업구조 하에서는 전기 판매 수익을 건물주와 배분합니다. 주요한 가정 하에서 건물주에게 제공되는 수익을 비교해 보겠습니다.
              </p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-[1280px] mx-auto px-6 md:px-10 pb-12">
          {/* 솔라오 수익 배분 */}
          <div className="min-w-0">
            <h3 className="color-primary-dark-2 text-2xl font-bold leading-[140%] mb-2">
              솔라오 상품 수익 배분
            </h3>
            <p className="color-gray-700 text-sm leading-[140%] mb-6">
              (20년, MW당 약 25.7억)
            </p>
            <div className="overflow-x-auto">
              <div className="min-w-[500px]">
                <CustomBarChart data={solarOData} />
              </div>
            </div>
          </div>

          {/* 기존 사업방식 수익 배분 */}
          <div className="min-w-0">
            <h3 className="color-primary-dark-2 text-2xl font-bold leading-[140%] mb-2">
              임대차 사업방식 수익 배분
            </h3>
            <p className="color-gray-700 text-sm leading-[140%] mb-6">
              (20년, MW당 약 8억)
            </p>
            <div className="overflow-x-auto">
              <div className="min-w-[500px]">
                <CustomBarChart data={traditionalData} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Highlight Box */}
        <div className="mx-auto px-6 md:px-10 max-w-[1280px]">
          <div className="bg-primary-dark-4 shadow-sm rounded-2xl py-8 px-8">
            {/* Card 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-start justify-center">
              <div className="bg-white/5 border border-white-10 rounded-xl leading-[140%] p-6">
                <div className="flex items-center gap-2 mb-6">
                  <CheckCircle2 size={22} className="color-accent flex-shrink-0 mt-0.5" />
                  <p className="color-white text-lg font-bold">
                    솔라오 이익 배분 구조
                  </p>
                </div>
                <p className="bullet-list-item color-white-90 text-md leading-[160%] mb-4">
                  주어진 가정 하에서, 사업개시 후 10년 동안 약 5.3억원이 건물주에게 이익으로 배분됩니다.
                </p>
                <p className="bullet-list-item color-white-90 text-md leading-[160%] mb-4">
                  11년차 이후 15년차 까지 5년 동안 약 5.7억원이 건물주에게 이익으로 배분됩니다.
                </p>
                <p className="bullet-list-item color-white-90 text-md leading-[160%] mb-4">
                  16년차 이후 부터는 발생되는 수입의 전액이 건물주에게 배분됩니다. 현재 가정 하에서는 매년 약 2.94억원 수준으로 추정됩니다.
                </p>
                <p className="annotation-list-item color-gray-200 text-sm leading-[140%] mt-4">
                  주요 가정: 설비용량 1,000kW, 일 평균 유효발전시간 3.5시간, SMP 130원/kWh, REC 75원/kWh, 차입금 상환기간 10년
                </p>
              </div>

              <div className="bg-white/5 border border-white-10 rounded-xl leading-[140%] p-6">
                <div className="flex items-center gap-2 mb-6">
                  <CheckCircle2 size={22} className="color-accent flex-shrink-0 mt-0.5" />
                  <p className="color-white text-lg font-bold">
                    임대차 사업방식 수익 배분 구조
                  </p>
                </div>
                <p className="bullet-list-item color-white-90 text-md leading-[160%] mb-4">
                  최근까지 주로 사용되어 오던 임대차 사업방식의 경우 가용한 사업구조 상의 한계로 고정된 수익 배분만이 가능했습니다.
                </p>
                <p className="bullet-list-item color-white-90 text-md leading-[160%] mb-4">
                  주어진 가정 하에서, 사업개시 후 일정하게 연 4천만원 수준의 고정 수익이 건물주에게 배분됩니다.
                </p>
                <p className="bullet-list-item color-white-90 text-md leading-[160%] mb-4">
                  전력 가격의 변동에 무관하게 일정한 수익이 배분된다는 장점이 있는 반면, 발전사업에서 기대되는 초과수익은 배분되지 않습니다.
                </p>
                <p className="annotation-list-item color-gray-200 text-sm leading-[140%] mt-4">
                  주요 가정: 설비용량 1,000kW, 일 평균 유효발전시간 3.5시간, SMP 130원/kWh, REC 75원/kWh, 차입금 상환기간 10년
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-primary-dark-5 py-20 md:py-32">
        <div className="mx-auto px-6 md:px-10 max-w-[1280px]">
          <div className="text-left mb-12">
            <LabelAccent label="HOW IT WORKS" />
            <h2 className="text-2xl md:text-4xl font-bold color-white leading-[140%] mb-6">
              사업구조에 따른 이익 배분 흐름 비교
            </h2>
            {/* 설명 텍스트 */}
            <div className="mt-4 text-left">
              <p className="text-xl color-gray-400 leading-[180%]">
                <span>솔라오 상품이 건물주에게 제공하는 수익은 기존에 사용되는 임대차 사업구조 대비 약 3배 수준의 이익을 제공합니다. </span>
                <br className="hidden md:block" />
                <span>동일하게 지분에 태양광 패널을 설치하고, 전기를 생산하는 사업구조에서 어떻게 이러한 차이가 발생되는 걸까요?</span>
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-[1280px] mx-auto pb-12">
            {/* 임대차 방식(기존 방식)의 이익 배분 흐름 */}
            <div className="min-w-0 bg-gray-100 rounded-2xl p-6">
              <h3 className="color-primary-dark-2 text-2xl font-bold leading-[140%] mb-6">
                임대차 방식(기존 방식)의 이익 배분 흐름
              </h3>
              <div className="overflow-x-auto">
                <div className="min-w-[500px]">
                  <RevenueDiagramRenderer />
                </div>
              </div>
            </div>

            {/* 솔라오 상품의 이익 배분 흐름 */}
            <div className="min-w-0 bg-gray-100 rounded-2xl p-6">
              <h3 className="color-primary-dark-2 text-2xl font-bold leading-[140%] mb-6">
                솔라오 상품의 이익 배분 흐름
              </h3>
              <div className="overflow-x-auto">
                <div className="min-w-[500px]">
                  <RevenueDiagramSolarO />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Highlight Box */}
        <div className="mx-auto px-6 md:px-10 max-w-[1280px]">
          <div className="bg-gray-100 shadow-sm rounded-2xl py-8 px-8">
            {/* Card 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-start justify-center">
              <div className="bg-gray-200 border border-gray-300 rounded-xl leading-[140%] p-6">
                <div className="flex items-center gap-2 mb-6">
                  <CheckCircle2 size={22} className="color-accent flex-shrink-0 mt-0.5" />
                  <p className="color-primary-dark-5 text-lg font-bold">
                    전기판매 수익의 차이
                  </p>
                </div>
                <p className="bullet-list-item color-primary-dark-5 text-md leading-[160%] mb-4">
                  임대차 방식의 사업구조는 기본적으로 현금흐름의 안정성에 초점이 맞춰져 있습니다. 그래서, 전기 시장 가격에 영향을 받지 않도록 주요 발전사업자와 장기 고정가 계약을 체결합니다.
                </p>
                <p className="bullet-list-item color-primary-dark-5 text-md leading-[160%] mb-4">
                  이러한 고정가 계약은 혹시라도 전기 시장 가격이 하락하더라도 전체적인 사업 운영 비용과 임대료를 안정적으로 지급할 수 있도록 보장하는 역할을 합니다.
                </p>
                <p className="bullet-list-item color-primary-dark-5 text-md leading-[160%] mb-4">
                  솔라오 상품은 기본적으로 시장가 판매를 통한 전기 판매 수익 확보를 추구합니다. 이를 통해 전기 시장 가격의 변동에 따라 전기 판매 수익을 최대화할 수 있습니다.
                </p>
              </div>

              <div className="bg-gray-200 border border-gray-300 rounded-xl leading-[140%] p-6">
                <div className="flex items-center gap-2 mb-6">
                  <CheckCircle2 size={22} className="color-accent flex-shrink-0 mt-0.5" />
                  <p className="color-primary-dark-5 text-lg font-bold">
                    사업 운영 비용의 차이
                  </p>
                </div>
                <p className="bullet-list-item color-primary-dark-5 text-md leading-[160%] mb-4">
                  안정성에 초점을 맞춘 사업구조는 비용에도 영향을 미칩니다. 각종 보증보험료 및 보증 성격의 비용들이 발생하고, 이 비용은 생각보다 높은 편입니다.
                </p>
                <p className="bullet-list-item color-primary-dark-5 text-md leading-[160%] mb-4">
                  건물주에게 제공되는 임대수익이 한정적이고, 이에 따라 사업 유인이 크지 않다보니, 건물주들을 유치하는 영업비와 초기 개발비 등이 높게 책정될 수 밖에 없습니다.
                </p>
                <p className="bullet-list-item color-primary-dark-5 text-md leading-[160%] mb-4">
                  타이런트는 오랜 태양광 발전 사업 경험을 통해 이 사업의 위험 한계를 이해하고 있으며, 이러한 이해를 바탕으로 위험을 통제하기 위한 사업구조를 설계하고, 이를 솔라오 상품에 적용하였습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Proposal Download Section */}
      <section className="bg-primary-dark-4 py-20 md:py-32">
        <div className="mx-auto px-6 md:px-10 max-w-[1280px]">
          <div className="text-left mb-12">
            <LabelAccent label="DOWNLOAD" />
            <h2 className="text-2xl md:text-4xl font-bold color-white leading-[140%] mb-6">
              상품설명자료 다운받기
            </h2>
            <p className="text-xl color-gray-400 leading-[180%]">
              솔라오 상품에 대한 상세 자료를 다운로드하여 확인하실 수 있습니다.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* 솔라오 상품설명서 */}
            <a
              href="/productProposal/solaro_product_guide.pdf"
              download="솔라오 상품설명서.pdf"
              className="group flex items-center gap-4 p-6 bg-white border border-gray-300 rounded-2xl hover:border-accent/30 hover:bg-gray-200 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-200 border border-primary flex items-center justify-center flex-shrink-0 group-hover:bg-gray-100 transition-colors duration-300">
                <Download className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold color-primary mb-1 group-hover:color-accent transition-colors duration-300">
                  솔라오 상품설명서
                </h3>
                <p className="text-sm color-primary-dark-2 truncate">PDF 다운로드</p>
              </div>
            </a>

            {/* 산단 태양광 무상설치지원사업 핵심요약서 */}
            {/* <a
              href="/productProposal/solar_summary_full.pdf"
              download="산단 태양광 무상설치지원사업 핵심요약서.pdf"
              className="group flex items-center gap-4 p-6 bg-white border border-gray-300 rounded-2xl hover:border-accent/30 hover:bg-gray-200 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-200 border border-primary flex items-center justify-center flex-shrink-0 group-hover:bg-gray-100 transition-colors duration-300">
                <Download className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold color-primary mb-1 group-hover:color-accent transition-colors duration-300">
                  산단 태양광 무상설치지원사업 핵심요약서
                </h3>
                <p className="text-sm color-primary-dark-2 truncate">PDF 다운로드</p>
              </div>
            </a> */}

            {/* 산단 태양광 무상설치지원사업 핵심요약서(1장) */}
            {/* <a
              href="/productProposal/solar_summary_onepage.pdf"
              download="산단 태양광 무상설치지원사업 핵심요약서(1장).pdf"
              className="group flex items-center gap-4 p-6 bg-white border border-gray-300 rounded-2xl hover:border-accent/30 hover:bg-gray-200 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-200 border border-primary flex items-center justify-center flex-shrink-0 group-hover:bg-gray-100 transition-colors duration-300">
                <Download className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold color-primary mb-1 group-hover:color-accent transition-colors duration-300">
                  산단 태양광 무상설치지원사업 핵심요약서(1장)
                </h3>
                <p className="text-sm color-primary-dark-2 truncate">PDF 다운로드</p>
              </div>
            </a> */}

            {/* 산단 태양광 무상설치지원사업 금융상품소개 */}
            {/* <a
              href="/productProposal/solar_finance_product.pdf"
              download="산단 태양광 무상설치지원사업 금융상품소개.pdf"
              className="group flex items-center gap-4 p-6 bg-white border border-gray-300 rounded-2xl hover:border-accent/30 hover:bg-gray-200 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-200 border border-primary flex items-center justify-center flex-shrink-0 group-hover:bg-gray-100 transition-colors duration-300">
                <Download className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold color-primary mb-1 group-hover:color-accent transition-colors duration-300">
                  산단 태양광 무상설치지원사업 금융상품소개
                </h3>
                <p className="text-sm color-primary-dark-2 truncate">PDF 다운로드</p>
              </div>
            </a> */}
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <WhyNow />
    </div>
  )
}