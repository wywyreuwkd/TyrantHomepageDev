import type { Metadata } from "next";
import heroImage from "@public/company/group/193a3c4f3675ec919fc5fb94b34b71d0d292efdc.png";
import { HeroSectionFeat } from "@components/shared/HeroSectionFeat";
import { SetGroupCompanies } from "@components/sections/SetGroupCompanies";

export const metadata: Metadata = {
  title: "그룹사 소개",
  description: "타이런트 그룹사 소개 - 태양광 발전소 개발, 기자재 공급, 시공, 운영까지 토탈 에너지 솔루션을 제공합니다.",
};

export default function GroupCompanies() {
  return (
    <div className="min-h-screen pt-20">
      <HeroSectionFeat
        badge="GROUP COMPANIES"
        title={<>그룹사 소개</>}
        description={<>타이런트그룹은 Renewable Energy Total Solutions을 제공하기 위하여 태양광 발류제의 A부터 Z까지<br className="hidden md:block" /> 모든 영역에서 전문 서비스를 제공합니다.
              <br className="hidden md:block" /> 고객의 특정한Needs를 신속하고 정확하게 해결하기 위하여 그에 맞는 전문회사를 별도로 설립하였습니다.</>}
        backgroundImage={heroImage}/>

      <SetGroupCompanies />
    </div>
  );
}