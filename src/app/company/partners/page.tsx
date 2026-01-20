import type { Metadata } from "next";

import heroImage from "@public/company/partners/5c40c3b8806d8e368a627607ec5ce36893ea1596.png";
import { HeroSectionFeat } from "@components/shared/HeroSectionFeat";
import { PartnerGroup } from "@components/sections/PartnerGroup"

export const metadata: Metadata = {
  title: "파트너사",
  description: "타이런트와 함께하는 파트너사 소개 - 물류, 제조, 유통, 금융 등 다양한 산업 분야의 파트너와 협력하고 있습니다.",
};

export default function Partners() {  

  const activeTabFunction = (tabId: string) => console.log(tabId)

  return (    
    <div className="min-h-screen pt-20">
      <HeroSectionFeat
        badge="PARTNERS"
        title={<>협력사 소개</>}
        description={<>솔라오는 에너지 산업 생태계의 전문 파트너들과 함께 성장합니다.<br className="hidden md:block" /> 사업자문부터 시공·금융까지 검증된 협력사 네트워크를 통해 안정적이고 지속가능한 태양광 발전 사업을 실현합니다.</>}
        backgroundImage={heroImage}/>

      {/* Partner Network Section */}
      <section className="bg-white pt-[48px] pb-[200px]">
        
        <PartnerGroup />

      </section>
    </div>
  );
}
