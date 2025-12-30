import type { Metadata } from "next";
import { HeroSection } from "@components/shared/HeroSection";
import { LabelAccent, LabelGray } from "@components/shared/SectionLabel";
import { RevenueTable, revenueData_roof, revenueData_roof_prepaid } from "@components/sections/RevenueTable";
import { CheckCircle2 } from "lucide-react";
import { 
  ProjectDiagram_Investment, ProjectDiagram_Cashflow, 
  ProjectDiagram_AfterLoan, ProjectDiagram_AfterInvestment,
} from "@components/sections/ProjectDiagram";

export const metadata: Metadata = {
  title: "솔라오 태양광 발전소 지붕 태양광 상품 수익 안내",
  description: "솔라오 상품은 태양광 발전소를 지붕에 무상 설치해주는 상품으로 별도의 비용 없이 태양광 발전소를 설치하고, 수익을 얻을 수 있는 상품임."
};

export default function RoofProduct() {
  return (
    <div className="min-h-screen bg-primary pt-20">
      {/* Hero Section */}
      <HeroSection
        badge="ROOF PRODUCT OVERVIEW"
        title={<>솔라오(지붕) 소개</>}
        description={
          <>
            <span>공장, 창고, 물류센터 등 건물의 지붕에 태양광 발전소를 설치하고, </span>
            <br className="hidden md:block" />
            <span>전기 판매 수익을 얻을 수 있는 상품입니다. </span>
            <br />
            <span>별도의 비용이 들지 않습니다. 타이런트에서 토탈케어솔루션을 제공합니다.</span>
          </>
        }
      />

      {/* Project Diagram Section */}
      <section className="bg-primary py-20 md:py-32">
        <div className="mx-auto px-6 md:px-10 max-w-[1280px]">
        <div className="text-left mb-12">
            <LabelAccent label="PROJECT DIAGRAM" />
            <h2 className="text-2xl md:text-4xl font-bold color-white leading-[140%] mb-6">
              <span>
                태양광 발전소 설치 및 수익 배분 과정
              </span>
            </h2>
            {/* 설명 텍스트 */}
            <div className="mt-4 text-left">
              <p className="text-xl color-gray-400 leading-[180%]">
                <span>최초 타이런트가 차입금을 포함하여 사업비를 조달 투자하여 태양광발전설비를 설치하고, 전기를 생산합니다. </span>
                <br className="hidden md:block" />
                <span>차입금에 대한 상환의무는 타이런트가 부담하며, 건물주의 신용 및 건물 소유권에 영향을 미치지 않습니다. </span>
              </p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-[1280px] mx-auto px-6 md:px-10 pb-12">
          <div className="min-w-0 bg-gray-100 rounded-2xl p-6">
            <h3 className="color-primary-dark-2 text-2xl font-bold leading-[140%] mb-6">
              [1단계] 사업비 지출 및 발전설비 설치
            </h3>
            <div className="overflow-x-auto">
              <div className="min-w-[500px]">
                <ProjectDiagram_Investment />
              </div>
            </div>
          </div>

          <div className="min-w-0 bg-gray-100 rounded-2xl p-6">
            <h3 className="color-primary-dark-2 text-2xl font-bold leading-[140%] mb-6">
              [2단계] 차입원리금 상환 구간
            </h3>
            <div className="overflow-x-auto">
              <div className="min-w-[500px]">
                <ProjectDiagram_Cashflow />
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-[1280px] mx-auto px-6 md:px-10 pb-12">
          <div className="min-w-0 bg-gray-100 rounded-2xl p-6">
            <h3 className="color-primary-dark-2 text-2xl font-bold leading-[140%] mb-6">
              [3단계] 차입금 상환후 관리운영 구간
            </h3>
            <div className="overflow-x-auto">
              <div className="min-w-[500px]">
                <ProjectDiagram_AfterLoan />
              </div>
            </div>
          </div>

          <div className="min-w-0 bg-gray-100 rounded-2xl p-6">
            <h3 className="color-primary-dark-2 text-2xl font-bold leading-[140%] mb-6">
              [4단계] 설비 이전 및 100% 수익 구간
            </h3>
            <div className="overflow-x-auto">
              <div className="min-w-[500px]">
                <ProjectDiagram_AfterInvestment />
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
                    자금의 조달 및 수익 배분에 관한 사항
                  </p>
                </div>
                <p className="bullet-list-item color-primary-dark-5 text-md leading-[160%] mb-4">
                  발전설비 설치 사업비는 타이런트 책임하에 차입금을 포함하여 조달합니다.
                </p>
                <p className="bullet-list-item color-primary-dark-5 text-md leading-[160%] mb-4">
                  특화된 사업 구조를 통해 건물주의 신용 및 건물 소유권에 대한 담보 설정 등의 영향 없이 자금을 조달합니다.
                </p>
                <p className="bullet-list-item color-primary-dark-5 text-md leading-[160%] mb-4">
                  사업 개시 후 발생되는 수익은 우선적으로 차입원리금 및 사업운영비 등 비용 지출 후 잔여이익을 건물주와 타이런트 간에 배분하는 방식으로 진행됩니다.
                </p>
              </div>

              <div className="bg-gray-200 border border-gray-300 rounded-xl leading-[140%] p-6">
                <div className="flex items-center gap-2 mb-6">
                  <CheckCircle2 size={22} className="color-accent flex-shrink-0 mt-0.5" />
                  <p className="color-primary-dark-5 text-lg font-bold">
                    사업 종료시 설비 소유권 이전에 관한 사항
                  </p>
                </div>
                <p className="bullet-list-item color-primary-dark-5 text-md leading-[160%] mb-4">
                  2단계 차입원리금 상환 구간은 최초 1년차 ~ 10년차 동안 이뤄지고, 3단계 관리운영 구간은 11년차 ~ 15년차 동안 이뤄집니다.
                </p>
                <p className="bullet-list-item color-primary-dark-5 text-md leading-[160%] mb-4">
                  최종적으로 사업 개시 후 15년차 이후 태양광발전법인의 지분 및 태양광발전설비의 소유권은 최초 체결된 계약에 의해 무상으로 건물주에게 양도됩니다.
                </p>
                <p className="bullet-list-item color-primary-dark-5 text-md leading-[160%] mb-4">
                  설치되는 태양광 패널의 적정 수명은 35년 수준이며, 따라서 15년차 이후 발생되는 수익은 모두 건물주에게 귀속됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Required Notice Box */}
        <div className="mx-auto px-6 md:px-10 max-w-[1280px] mt-12">
          <div className="bg-gray-100 shadow-sm rounded-2xl py-8 px-8">
            {/* Card 1 */}
            <div className="grid gap-8 items-start justify-center">
              <div className="bg-gray-200 border border-gray-300 rounded-xl leading-[140%] p-6">
                <div className="flex items-center gap-2 mb-6">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <p className="color-primary-dark-5 text-lg font-bold">
                    주요 고지사항
                  </p>
                </div>
                <p className="bullet-list-item color-primary-dark-5 text-md leading-[160%] mb-4">
                  위 설명 자료는 이해를 돕기 위해 단순화 하여 설명한 내용입니다. 자세한 내용은 타이런트 매니저에게 문의 주세요. 고객의 제반 상황을 고려한 상세 설명 및 제안을 받아보실 수 있습니다.
                </p>
                <p className="bullet-list-item color-primary-dark-5 text-md leading-[160%] mb-4">
                  고객의 제반 상황 등을 고려하여 상품의 구조가 변경될 수 있으며, 이때 계약의 실제 체결 내용은 상기 설명자료와 차이가 발생할 수 있습니다.
                </p>
                <p className="bullet-list-item color-primary-dark-5 text-md leading-[160%] mb-4">
                  본 홈페이지의 내용과 계약의 내용에 차이가 발생하는 경우, 실제 체결된 계약의 내용이 우선합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Table Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto px-6 md:px-10 max-w-[1280px]">
          <div className="text-left mb-16">
            <LabelGray label="REVENUE TABLE" />
            <h2 className="text-2xl md:text-4xl font-bold color-primary-dark-2 leading-[140%] mb-6">
              <span>
                솔라오(지붕) 상품 수익표
              </span>
            </h2>
            {/* 설명 텍스트 */}
            <div className="mt-4 text-left">
              <p className="text-xl color-gray-700 leading-[180%]">
                <span>일반적으로 약 2,000평 규모의 지붕에 1,000kW 규모의 태양광 발전소 설치가 가능합니다. </span>
                <br className="hidden md:block" />
                <span>2,000평 규모 공장을 보유한 건물주가 1,000kW 규모의 태양광 모듈을 설치하면 그로 인한 수익은 어느 정도일까요? </span>
                <br />
                아래는 주요 가정(SMP 130원/kWh, REC 75원/kWh 등) 하에서 건물주에게 제공되는 수익을 표로 정리한 것입니다.
              </p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-[1280px] mx-auto px-6 md:px-10 pb-12">
          <div className="min-w-0 bg-primary rounded-2xl p-6">
            <div className="flex items-end justify-between">
              <h3 className="color-gray-100 text-2xl font-bold leading-[140%] mb-6">
                건물주 기간 수익표(월지급 기준)
              </h3>
              <p className="color-gray-100 text-sm leading-[140%] mb-2">
                (단위: 천원)
              </p>
            </div>
            <div className="overflow-x-auto">
              <div className="min-w-[500px]">
                <RevenueTable />
              </div>
            </div>
            <p className="annotation-list-item color-gray-100 text-sm leading-[140%] mt-4">
              주요 가정: 설비용량 1,000kW, 일 평균 유효발전시간 3.5시간, SMP 130원/kWh, REC 75원/kWh, 차입금 상환기간 10년
            </p>
          </div>

          <div className="min-w-0 bg-primary rounded-2xl p-6">
            <div className="flex items-end justify-between">
              <h3 className="color-gray-100 text-2xl font-bold leading-[140%] mb-6">
                건물주 기간 수익표(2억원 선지급)
              </h3>
              <p className="color-gray-100 text-sm leading-[140%] mb-2">
                (단위: 천원)
              </p>
            </div>
            <div className="overflow-x-auto">
              <div className="min-w-[500px]">
                <RevenueTable data={revenueData_roof_prepaid} />
              </div>
            </div>
            <p className="annotation-list-item color-gray-100 text-sm leading-[140%] mt-4">
              주요 가정: 설비용량 1,000kW, 일 평균 유효발전시간 3.5시간, SMP 130원/kWh, REC 75원/kWh, 차입금 상환기간 10년
            </p>
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
                    단계별 수익 지급 구조
                  </p>
                </div>
                <p className="bullet-list-item color-white-90 text-md leading-[160%] mb-4">
                  "[1단계] 사업비 지출 및 발전설비 설치 구간"은 표에서 "0년차"로 표시됩니다. 이 구간에서는 필요한 계약이 체결되고, 타이런트의 책임 하에 사업비를 조달하여 발전설비를 설치합니다.
                </p>
                <p className="bullet-list-item color-white-90 text-md leading-[160%] mb-4">
                  "[2단계] 차입원리금 상환 구간"은 표에서 "1년차" ~ "10년차"로 표시됩니다. 이 구간에서 나오는 수익금은 차입금 상환에 우선적으로 사용되고, 잔여 이익을 배분합니다.
                </p>
                <p className="bullet-list-item color-white-90 text-md leading-[160%] mb-4">
                  "[3단계]"는 "11년차" ~ "15년차"에 해당하는 구간으로 차입금 상환이 완료된 후 이어지는 구간입니다. 사업운영비를 지급한 후 잔여 이익을 배분합니다.
                </p>
                <p className="bullet-list-item color-white-90 text-md leading-[160%] mb-4">
                  "[4단계]"는 "16년차" 이후 부터 이어지는 구간으로 발생되는 수입의 전액이 건물주에게 배분됩니다.
                </p>
              </div>

              <div className="bg-white/5 border border-white-10 rounded-xl leading-[140%] p-6">
                <div className="flex items-center gap-2 mb-6">
                  <CheckCircle2 size={22} className="color-accent flex-shrink-0 mt-0.5" />
                  <p className="color-white text-lg font-bold">
                    월지급 방식과 선지급 방식의 차이
                  </p>
                </div>
                <p className="bullet-list-item color-white-90 text-md leading-[160%] mb-4">
                  솔라오(지붕) 상품은 기본적으로 사업개시 후 매월 수익을 지급하는 방식으로 진행됩니다. 그럼에도, 초기 현금흐름이 필요하신 분들을 위하여 선지급 방식을 제공합니다.
                </p>
                <p className="bullet-list-item color-white-90 text-md leading-[160%] mb-4">
                  1,000kW 규모의 태양광 발전소 설치 기준으로 선지급금은 2억원 입니다. 선지급금의 지급은 사업개시 시점에 100% 지급됩니다.
                </p>
                <p className="bullet-list-item color-white-90 text-md leading-[160%] mb-4">
                  선지급금 지급 이후 "6년차" 부터는 다시 매월 수익이 배분되며, 이후 "[3단계]" 및 "[4단계]" 구간에서 발생되는 수익의 배분구조는 월지급 방식과 동일합니다.
                </p>
                <p className="bullet-list-item color-white-90 text-md leading-[160%] mb-4">
                  "16년차"가 되는 시점에 설비의 소유권이 건물주에게 무상으로 양도되는 점도 월지급 방식과 동일합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}