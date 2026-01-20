import type { Metadata } from "next";
import { Hero } from "@components/sections/Hero";
import { ServiceIntro } from "@components/sections/ServiceIntro";
import { Process } from "@components/sections/Process";
import { RevenueComparison } from "@components/sections/RevenueComparison";
import { WhyNow } from "@components/sections/WhyNow";

import { MainHero } from "@components/sections/MainHero";
import { MainBusinessCards } from "@components/sections/MainBusinessCards";
import { MainCompanyOverview } from "@components/sections/MainCompanyOverview";
import { MainZendeskBanner } from "@components/sections/MainZendeskBanner";

export const metadata: Metadata = {
  title: "홈",
  description: "태양광 발전 전문 기업 타이런트. 수익공유형 무상설치 모델을 통해 고객(기업)과 함께 성장하며 탄소중립 사회 실현에 기여합니다.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-primary color-white">
      <MainHero />
      <MainBusinessCards />
      <MainCompanyOverview />
      <MainZendeskBanner />

      {/*<Hero />*/}
      {/* <ServiceIntro />
      <Process />
      <div className="hidden md:block">
        <RevenueComparison />
      </div>
      <WhyNow /> */}
    </div>
  );
}
