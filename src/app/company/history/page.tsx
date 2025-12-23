import type { Metadata } from "next";
import heroImage from "@public/company/history/0332e5bfb49c6598167bf95726765eaa4d563113.png";
import { HeroSectionFeat } from "@components/shared/HeroSectionFeat";
import { SetCompanyHistory } from "@components/sections/SetCompanyHistory";

export const metadata: Metadata = {
  title: "연혁",
  description: "타이런트의 성장 역사 - 2020년 창립 이래 태양광 발전 분야에서 지속적인 혁신과 성장을 이어왔습니다.",
};

export default function CompanyHistory() {
  return (
    <div className="min-h-screen pt-20">      
      <HeroSectionFeat
        badge="COMPANY HISTORY"
        title={<>연혁</>}
        description={<>1990년대부터 지속 가능한 에너지 미래를 향한 비전을 품고, 체계적인 성장을 거듭하며<br className="hidden md:block" /> 대한민국 신재생에너지 산업을 선도하는 기업으로 발전해왔습니다.</>}
        backgroundImage={heroImage}/>

      <SetCompanyHistory />
    </div>
  );
}
