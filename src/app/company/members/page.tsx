import type { Metadata } from "next";
import heroImage from "@public/company/member/ae884056394be5cd5ac56d94d8a7de7d6865cf86.png";
import { HeroSectionFeat } from "@components/shared/HeroSectionFeat";
import { CoreTeam } from "@components/sections/CoreTeam";

export const metadata: Metadata = {
  title: "핵심인력",
  description: "타이런트 그룹을 이끌어가는 핵심 리더들을 소개합니다.",
};

export default function Members() {
	return (
    <div className="min-h-screen pt-20">
      <HeroSectionFeat
        badge="KEY PERSONNEL"
        title={<>핵심인력</>}
        description={<>타이런트의 핵심 인력은 태양광 및 에너지 사업 전반에 대한 기획, 투자, 기술, 시공, 운영 분야에서<br className="hidden md:block" /> 축적된 전문성과 다양한 프로젝트 수행 경험을 바탕으로 구성되어 있습니다.
          <br className="hidden md:block" /> 각 분야별 전문 인력이 유기적으로 협업하며 그룹의 중장기 전략 수립과 안정적인 사업 성장을 이끌고 있습니다.</>}
        backgroundImage={heroImage}/>

      {/* Board Members Section */}
      <div className="mx-auto max-w px-6 md:px-10 my-[7.5rem]">
        <h2 className="font-['Pretendard,_-apple-system,_'Noto_Sans_KR',_sans-serif'] text-[clamp(2rem,5vw,3rem)] font-bold text-[#0E1C45] mb-6 leading-[1.3]">
          Leadership
        </h2>
        <p className="font-['Pretendard',_-apple-system,_'Noto_Sans_KR',_sans-serif] text-[1.125rem] font-normal text-gray-600 mb-[3.75rem] leading-[1.7]">
          타이런트의 주요 의사결정을 이끄는 핵심 리더십
        </p>

        {/* Team Grid */}
        <div>          
          <CoreTeam
            advisory={false} />
        </div>
      </div>    

      {/* Advisory Board Section */}
      <div className="mx-auto max-w px-6 md:px-10 mb-32">
        <h2 className="font-['Pretendard',_-apple-system,_-'Noto_Sans_KR',_sans-serif] text-[clamp(2rem,5vw,3rem)] font-bold text-[#0E1C45] mb-6 leading-[1.3]">
          Advisory Board
        </h2>
        <p className="font-sans text-[1.125rem] font-normal text-gray-600 mb-[3.75rem] leading-[1.7]">
          타이런트의 전문성을 강화하는 자문위원회
        </p>

        {/* Team Grid */}
        <div >
          <CoreTeam
            advisory={true} />          
        </div>
      </div>
    </div>    
  );
}