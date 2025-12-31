import type { Metadata } from "next";
import { HeroSection } from "@components/shared/HeroSection";
import { LabelAccent, LabelGray } from "@components/shared/SectionLabel";
import { RevenueTable, revenueData_parkingPublic, revenueData_parkingPrivate } from "@components/sections/RevenueTable";
import { CheckCircle2 } from "lucide-react";
import { 
  ProjectDiagramParking_Investment, ProjectDiagramParking_Cashflow, 
  ProjectDiagramParking_AfterLoan, ProjectDiagramParking_AfterInvestment,
} from "@components/sections/ProjectDiagram";

export const metadata: Metadata = {
  title: "솔라오 태양광 발전소 주차장 태양광 상품 수익 안내",
  description: "솔라오 상품은 태양광 발전소를 개인소유 주차장 및 공공 소유 주차장에 무상 설치해주는 상품으로 별도의 비용 없이 태양광 발전소를 설치하고, 수익을 얻을 수 있는 상품임."
};

export default function ParkingProduct() {
  return (
    <div className="min-h-screen bg-primary pt-20">
      {/* Hero Section */}
      <HeroSection
        badge="PARKING PRODUCT OVERVIEW"
        title={<>솔라파킹(주차장) 소개</>}
        description={
          <>
            <span>주차장에 태양광 발전소를 설치하고, </span>
            <br className="hidden md:block" />
            <span>전기 판매 수익을 얻을 수 있는 상품입니다. </span>
            <br />
            <span>별도의 비용이 들지 않습니다. 타이런트에서 토탈케어솔루션을 제공합니다.</span>
          </>
        }
      />


      {/* Revenue Table Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto px-6 md:px-10 max-w-[1280px]">
          <div className="text-left mb-16">
            <LabelGray label="REVENUE TABLE" />
            <h2 className="text-2xl md:text-4xl font-bold color-primary-dark-2 leading-[140%] mb-6">
              <span>
                솔라파킹(주차장) 상품 수익표
              </span>
            </h2>
            {/* 설명 텍스트 */}
            <div className="mt-4 text-left">
              <p className="text-xl color-gray-700 leading-[180%]">
                <span>일반적으로 약 2,000평 규모의 주차장에 1,000kW 규모의 태양광 발전소 설치가 가능합니다. </span>
                <br className="hidden md:block" />
                <span>2,000평 규모 주차장을 보유한 사업주가 1,000kW 규모의 태양광 모듈을 설치하면 그로 인한 수익은 어느 정도일까요? </span>
                <br />
                아래는 주요 가정(SMP 130원/kWh, REC 75원/kWh 등) 하에서 사업주에게 제공되는 수익을 표로 정리한 것입니다.
              </p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-[1280px] mx-auto px-6 md:px-10 pb-12">
          <div className="min-w-0 bg-primary rounded-2xl p-6">
            <div className="flex items-end justify-between">
              <h3 className="color-gray-100 text-2xl font-bold leading-[140%] mb-6">
                지자체 공영 주차장 기간 수익표
              </h3>
              <p className="color-gray-100 text-sm leading-[140%] mb-2">
                (단위: 천원)
              </p>
            </div>
            <div className="overflow-x-auto">
              <div className="min-w-[500px]">
                <RevenueTable data={revenueData_parkingPublic} />
              </div>
            </div>
            <p className="annotation-list-item color-gray-100 text-sm leading-[140%] mt-4">
              주요 가정: 설비용량 1,000kW, 일 평균 유효발전시간 3.5시간, SMP 130원/kWh, REC 75원/kWh, 차입금 상환기간 15년
            </p>
          </div>

          <div className="min-w-0 bg-primary rounded-2xl p-6">
            <div className="flex items-end justify-between">
              <h3 className="color-gray-100 text-2xl font-bold leading-[140%] mb-6">
                개인 소유 주차장 기간 수익표
              </h3>
              <p className="color-gray-100 text-sm leading-[140%] mb-2">
                (단위: 천원)
              </p>
            </div>
            <div className="overflow-x-auto">
              <div className="min-w-[500px]">
                <RevenueTable data={revenueData_parkingPrivate} />
              </div>
            </div>
            <p className="annotation-list-item color-gray-100 text-sm leading-[140%] mt-4">
              주요 가정: 설비용량 1,000kW, 일 평균 유효발전시간 3.5시간, SMP 130원/kWh, REC 75원/kWh, 차입금 상환기간 15년
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
                    솔라파킹(주차장) 상품 구조
                  </p>
                </div>
                <p className="bullet-list-item color-white-90 text-md leading-[160%] mb-4">
                  솔라파킹(주차장)은 기본적으로 임대차 사업 방식으로 진행됩니다. 최초 사업개시 시점에 태양광 발전설비를 설치하고, 이후 매월 임대료를 지급하는 방식으로 진행됩니다.
                </p>
                <p className="bullet-list-item color-white-90 text-md leading-[160%] mb-4">
                  15년의 임대기간이 완료되는 시점에 발전설비의 소유권은 사업주에게 무상으로 양도됩니다. (지자체 공영 주차장의 경우 21년차에 소유권 양도가 이뤄집니다.)
                </p>
                <p className="bullet-list-item color-white-90 text-md leading-[160%] mb-4">
                  발전설비의 적정 수명은 35년 수준이며, 소유권 양도 이후의 전기판매 수익은 모두 사업주에게 귀속됩니다.
                </p>
              </div>

              <div className="bg-white/5 border border-white-10 rounded-xl leading-[140%] p-6">
                <div className="flex items-center gap-2 mb-6">
                  <CheckCircle2 size={22} className="color-accent flex-shrink-0 mt-0.5" />
                  <p className="color-white text-lg font-bold">
                    솔라파킹(주차장)의 장점
                  </p>
                </div>
                <p className="bullet-list-item color-white-90 text-md leading-[160%] mb-4">
                  기존 주차 공간을 그대로 활용하면서 추가 수익을 확보할 수 있습니다. 동일한 공간에 주차 기능과 발전 기능을 동시에 얻을 수 있어 효율적입니다.
                </p>
                <p className="bullet-list-item color-white-90 text-md leading-[160%] mb-4">
                  태양광 패널은 차량 차양 역할을 수행하여 직사광선, 우천, 적설로부터 차량을 보호합니다. 주차장 이용자의 만족도를 높일 수 있습니다.
                </p>
                <p className="bullet-list-item color-white-90 text-md leading-[160%] mb-4">
                  구조물 선택에 따라 미관 효과도 얻을 수 있습니다. 브랜딩이 중요한 사업장의 경우 솔라파킹을 통해서 미관, 이용자의 편의 및 환경을 생각하는 브랜딩 효과를 얻을 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}