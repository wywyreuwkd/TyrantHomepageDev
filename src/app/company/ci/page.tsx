import type { Metadata } from "next";
import symbolOnly from "@public/company/ci/42084a9ed76544286cbbc6eee3e051e537b81c35.png";
import logoFull from "@public/company/ci/a26d32a4cda9524da2386b79a668d32e665e1946.png";
import logoWhite from "@public/company/ci/3fb5962f0aa17706d99f08acf5c416487fbf672c.png";
import gridBg from "@public/company/ci/073d468b9bb86925e090b7c0e7cb758f3010def0.png";
import logoColor from "@public/company/ci/a5215c768663ee32771a49d95bffc285eeb7af00.png";
import logoWhiteNew from "@public/company/ci/13c15213d4d1e130ecb248755a4dd2576470cb4b.png";
import minSizeImage from "@public/company/ci/21d09c22ba51c32b946dd7b478e6d5e505f24dc7.png";
import marginGuideImage from "@public/company/ci/769f00ead45b726a6184a9a4659eaa2086af68e6.png";
import ciGridGuide from "@public/company/ci/9e30975e0f4207a09d7be6ad01d32ffbbcf0ec46.png";
import ciBasicGuide from "@public/company/ci/1e051337ae8b29d2bba2daebf6aecfa4ed6c6c8b.png";
import ciBasicGuideClean from "@public/company/ci/25fbc3d89627a357c8a4cefc030a685b7196e85e.png";
import ciBasicGuideNew from "@public/company/ci/4a024ff88715077c438b7cce09be1fa5819b3fe8.png";
import prohibitIcon from "@public/company/ci/c32ac952f6a244c81d0e12a3fb974a41ff4f65db.png";
import heroImage from "@public/company/ci/d5281f16428ffc18e72b68e4af3bd29c20e629bd.png";
import { InteractiveLogoFrame } from "@components/sections/InteractiveLogoFrame";
import { HeroSectionFeat } from "@components/shared/HeroSectionFeat";
import { FadeInUpAnimate } from "@components/shared/FadeInUpAnimate";
import { ImageWithFallback } from "@components/shared/ImageWithFallback";
import { LabelGray, LabelWhite } from "@components/shared/SectionLabel";

export const metadata: Metadata = {
  title: "타이런트 CI 소개",
  description: "타이런트 CI 소개 - 타이런트의 브랜드 아이덴티티와 비전을 소개합니다.",
};

export default function CIIntro() {
  return (
    <div className="min-h-screen pt-20">
      <HeroSectionFeat
        badge="CI INTRODUCTION"
        title={<>CI 소개</>}
        description={<>타이런트의 CI는 브랜드의 철학과 방향성을 담은 시각적 기준입니다.<br className="hidden md:block" /> 일관된 아이덴티티 시스템을 통해 모든 접점에서 동일한 브랜드 가치를 전달합니다.</>}
        backgroundImage={heroImage}/>

      {/* CI 소개 섹션 */}
      <section className="bg-white pt-[3.75rem] px-[1.5rem] flex justify-center md:pt-[7.5rem] md:px-[7.5rem]">
        <div className="max-w m-0 m-auto container-h-padding-m w-full md:cotainer-h-padding">          
          <FadeInUpAnimate
            contents={
              <div>
                <h2 className="text-40 font-bold mb-6 color-primary-dark-3 text-left">          
                  브랜드 아이덴티티
                </h2>            
                <p className="text-lg color-[#4B5563] mb-[60px] leading-[1.7] text-left">
                  명확한 구조와 기준을 통해 타이런트의 브랜드 아이덴티티를 시각적으로 구현합니다.
                </p>
              </div>    
            }>
          </FadeInUpAnimate>
        </div>
      </section>

      {/* 인터랙티브 로고 프레임 & 로고 다운로드 버튼 섹션 */}
      <InteractiveLogoFrame />
      
      {/* 상징적 의미 섹션 */}
      <section className="bg-white pb-[3.75rem] px-[1.5rem] flex justify-center md:pb-[7.5rem] md:px-[7.5rem]">
        <FadeInUpAnimate
          contents={
            <div className="max-w m-0 m-auto container-h-padding-m w-full md:cotainer-h-padding">
              <h3 className="text-[2.188rem] font-bold color-primary-dark-3 mb-4 text-left">
                상징적 의미
              </h3>
              <p className="text-xl font-bold color-primary-dark-3 mb-8 text-left">
                Symbolic Meaning
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 tracking-normal text-left">
                혁신과 도전의 상징 왕관과 방패가 결합된 형태는 '지배자(TYRANT)'를 상징하며, 중앙의 조형은 태양광 모듈을 형상화했습니다. 이는 태양광 시장의 패러다임을 전환시키겠다는 타이런트의 강력한 의지와 비전을 담고 있습니다.
              </p>
              <h4 className="text-xl font-bold color-primary-dark-3 mb-4 text-left">
                지구를 위한 약속
              </h4>
              <p className="text-lg text-gray-600 leading-relaxed tracking-normal text-left">
                왕관은 타이런트를, 방패는 지구를 보호하는 의미를 담고 있습니다. 타이런트는 청정 에너지를 통해 지구 환경을 보호하겠다는 사명을 표현합니다. 타이런트는 이 두 가지 핵심 가치를 바탕으로
                <strong className="font-bold color-primary-dark-3">
                  &nbsp;지속 가능한 에너지의 미래를 선도
                </strong>
                합니다.
              </p>
            </div>
          }>
        </FadeInUpAnimate>
      </section>

      {/* 로고 사용 규정 섹션 */}
      <section className="bg-[#F8FAFC] py-[3.75rem] px-[1.5rem] flex md:py-[7.5rem] md:px-[7.5rem]">
        <div className="max-w mx-auto m-0 container-h-padding-m w-full md:cotainer-h-padding">
          <FadeInUpAnimate
            contents={
              <div>
                <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold mb-4 color-primary-dark-3 text-left">
                  CI 사용 규정
                </h2>          
                <p className="text-lg text-gray-500 mb-20 leading-relaxed text-left">
                  타이런트 CI의 일관된 사용을 위한 기본 기준을 정의합니다.
                </p>
              </div>
            }>
          </FadeInUpAnimate>

          <div initial="initial" viewport={{ once: true }} className="mb-[3.75rem]">
            {/* 1x2x1 레이아웃 */}
            <div className="flex flex-col gap-8">
              {/* CI 기본규격 카드 - 전체 너비 */}
              <div className="bg-white py-12 px-10 rounded-2xl border border-gray-200 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                <FadeInUpAnimate
                  contents={
                    <div>
                      <h3 className="text-2xl font-bold mb-4 color-primary-dark-3 tracking-[-0.02em]">
                        CI 기본규격
                      </h3>
                
                      <p className="text-lg text-gray-500 leading-[1.7] mb-8">
                        심볼 + 워드마크 가로형 조합이며, 심볼 비율 1:1, 심볼–워드마크 격 X (심볼 높이의 10%)를 준수합니다.
                      </p>
                
                      <div className="bg-white p-[2.5rem] rounded-[0.75rem] text-center border border-gray-200 flex items-center justify-center">
                        <ImageWithFallback className="w-full max-w-[37.5rem] h-auto" src={ciBasicGuideNew.src} alt="CI 기본규격 그리드 가이드"/>
                      </div>
                    </div>
                  }>
                </FadeInUpAnimate>
              </div>

              {/* 최소크기 + 보호여백 - 2열 */}
              <div className="grid gap-6 md:grid-cols-2">
                {/* 최소 크기 카드 */}
                <div className="bg-white p-12 px-10 rounded-[1.25rem] border border-gray-200 shadow-sm">
                  <FadeInUpAnimate
                    contents={
                      <div>
                        <h3 className="text-2xl font-bold mb-4 color-primary-dark-3 tracking-[-0.02em]">
                          최소 크기
                        </h3>                  
                        <p className="text-lg text-gray-500 leading-relaxed mb-10">
                          최소 크기 이하로 사용 시 로고의 가독성이 저하될 수 있습니다.
                        </p>                  
                        <div className="grid gap-6 md:grid-cols-2">
                          {/* 인쇄용 */}
                          <div>
                            <h4 className="text-base font-bold color-primary-dark-3 mb-4">
                              인쇄용
                            </h4>
                            <div className="relative flex flex-col items-center justify-center h-[15rem] p-8 gap-6 bg-[#F9FAFB] rounded-xl border border-gray-200">
                              <ImageWithFallback className="w-20 h-auto" src={logoFull.src} alt="인쇄용 최소 크기"/>
                        
                              {/* 가로 화살표 - 로고 너비만큼 */}
                              <div className="relative flex w-20 flex-col items-center gap-2">
                                <div className="w-full h-0.5 bg-[#6B7898] relative">
                                  {/* 왼쪽 화살표 */}
                                  <div className="absolute -left-[0.0625rem] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[0.25rem] border-y-transparent border-r-[0.375rem] border-r-[#6B7898]" />
                                  {/* 오른쪽 화살표 */}
                                  <div className="absolute -right-[0.0625rem] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[0.25rem] border-t-transparent border-b-[0.25rem] border-b-transparent border-l-[0.375rem] border-l-[#6B7898]" />
                                </div>
                                <span className="text-sm font-bold text-[#6B7898] whitespace-nowrap">
                                  최소 가로 20mm
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* 디지털용 */}
                          <div>
                            <h4 className="text-base font-bold text-[#0E1C45] mb-4">
                              디지털용
                            </h4>
                            <div className="relative flex flex-col items-center justify-center h-[15rem] gap-6 p-8 bg-[#F9FAFB] rounded-xl border border-gray-200">
                              <ImageWithFallback className="w-40 h-auto" src={logoFull.src} alt="디지털용 최소 크기" />
                        
                              {/* 가로 화살표 - 로고 너비만큼 */}
                              <div className="relative flex w-40 flex-col items-center gap-2">
                                <div className="relative h-0.5 w-full bg-[#6B7898]">
                                  {/* 왼쪽 화살표 */}
                                  <div className="absolute -left-[0.0625rem] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[0.25rem] border-y-transparent border-r-[0.375rem] border-r-[#6B7898]" />
                                  {/* 오른쪽 화살표 */}
                                  <div className="absolute -right-[0.0625rem] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[0.25rem] border-t-transparent border-b-[0.25rem] border-b-transparent border-left-[0.375rem] border-l-[#6B7898]" />
                                </div>
                                <span className="text-sm font-bold text-[#6B7898] whitespace-nowrap">
                                  최소 가로 80px
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    }>
                  </FadeInUpAnimate>
                </div>

                {/* 보호 여백 카드 */}
                <div className="bg-white p-[2.5rem_3rem] rounded-[1.25rem] border border-gray-200 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                  <FadeInUpAnimate
                    contents={
                      <div>
                        <h3 className="text-2xl font-bold mb-4 color-primary-dark-3 tracking-[-0.02em]">
                          보호 여백
                        </h3>                  
                        <p className="text-lg text-gray-500 leading-relaxed mb-8">
                          A는 로고 구성 요소를 기준으로 정의된 최소 단위이며,
                          로고의 확대·축소 시에도 동일한 비율로 유지되어야 합니다.
                        </p>                  
                        <div className="bg-white p-5 rounded-[12px] text-center border border-gray-200 min-h-[15rem] flex items-center justify-center">
                          <ImageWithFallback className="w-full max-w-full h-auto" src={marginGuideImage.src} alt="보호 여백 가이드" />
                        </div>
                      </div>
                    }>
                  </FadeInUpAnimate>                  
                </div>
              </div>  

              {/* 배경별 적용 카드 - 전체 너비 */}
              <div className="bg-white py-[3rem] px-[2.5rem] rounded-[1.25rem] border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                <FadeInUpAnimate
                  contents={
                    <div>
                      <h3 className="text-[1.5rem] font-bold mb-4 text-[#0E1C45] tracking-[-0.02em]">
                        배경별 적용
                      </h3>                
                      <p className="text-gray-500 leading-relaxed mb-12">
                        배경색에 따라 적절한 로고 버전을 사용해 주세요.
                      </p>
                    </div>
                  }>
                </FadeInUpAnimate>                

                {/* 2단 텍스트 규정 구조 */}
                <div className="grid gap-16 md:grid-cols-2">
                  {/* Light Background */}
                  <div>
                    <FadeInUpAnimate
                      contents={
                        <div>
                          <h4 className="text-[1.125rem] font-semibold text-[#0E1C45] mb-4 leading-normal">
                            Light Background
                          </h4>                    
                          <p className="text-base font-normal text-[#6B7280] leading-[1.6] mb-6">
                            기본 컬러 로고를 사용하며,<br />
                            충분한 대비가 확보된 배경에서만 사용한다.
                          </p>
                        </div>
                      }>
                    </FadeInUpAnimate>                    
                    {/* 로고 예시 */}
                    <div className="bg-gray-50 p-8 px-6 rounded-xl flex items-center justify-center min-h-[7.5rem]">
                      <ImageWithFallback className="h-10" src={logoFull.src} alt="Light Background 로고" />
                    </div>
                  </div>

                  {/* Dark Background */}
                  <div>
                    <FadeInUpAnimate
                      contents={
                        <div>
                          <h4 className="text-[1.125rem] font-semibold text-[#0E1C45] mb-4 leading-normal">
                            Dark Background
                          </h4>                    
                          <p className="text-base font-normal text-gray-500 leading-relaxed mb-6">
                            White 로고 버전을 사용하며,<br />
                            가독성을 해치는 배경에서는 사용을 금지한다.
                          </p>
                        </div>
                      }>
                    </FadeInUpAnimate>                  
                    {/* 로고 예시 */}
                    <div className="bg-[#0E1C45] py-8 px-6 rounded-xl flex items-center justify-center min-h-[7.5rem]">
                      <ImageWithFallback className="h-10" src={logoWhite.src} alt="Dark Background 로고" />
                    </div>
                  </div>
                </div>
              </div>

              {/* 사용 금지사항 카드 - 전체 너비 */}
              <div className="bg-white py-12 px-10 rounded-2xl border border-gray-200 shadow-sm">
                <FadeInUpAnimate
                  contents={
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-[#0E1C45] tracking-tight">
                        사용 금지사항
                      </h3>                
                      <p className="text-lg text-gray-500 leading-relaxed mb-12">
                        브랜드 일관성 유지를 위해 다음과 같은 로고 사용은 금지됩니다.
                      </p>
                    </div>
                  }>
                </FadeInUpAnimate>                

                {/* 4 Cards in One Row - Enterprise CI Style */}
                <div className="grid gap-4 md:grid-cols-4">
                  {/* 01. 비율 왜곡 금지 */}
                  <div className="bg-[#FAFAFA] border border-[#E5E7EB] rounded-xl py-6 px-5 flex flex-col gap-4">
                    {/* Index Number */}
                    <div className="text-xs font-normal text-gray-400 tracking-widest">
                      01
                    </div>

                    {/* Title */}
                    <h4 className="text-sm font-bold text-[#0E1C45] leading-[1.4] m-0">
                      비율 왜곡 금지
                    </h4>

                    {/* Visual Example Area */}
                    <div className="relative bg-white border border-[#E5E7EB] rounded-[0.5rem] h-[8.75rem] flex items-center justify-center bg-[linear-gradient(rgba(229,231,235,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(229,231,235,0.3)_1px,transparent_1px)] bg-[length:0.625rem_0.625rem]">
                      {/* Incorrect Logo */}
                      <ImageWithFallback className="h-6 scale-x-[1.5] block" src={logoFull.src} alt="왜곡된 로고" />
                      
                      {/* Simple Red X Mark */}
                      <div className="absolute top-2 right-2 w-5 h-5 flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <line x1="4" y1="4" x2="16" y2="16" stroke="#DC2626" strokeWidth="2" strokeLinecap="round"/>
                          <line x1="16" y1="4" x2="4" y2="16" stroke="#DC2626" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>

                    {/* Regulation Text */}
                    <p className="text-xs font-normal text-[#6B7280] leading-normal m-0">
                      로고의 가로·세로 비율 변경 금지
                    </p>
                  </div>

                  {/* 02. 색상 변경 금지 */}
                  <div className="bg-[#FAFAFA] border border-[#E5E7EB] rounded-xl py-6 px-5 flex flex-col gap-4">
                    {/* Index Number */}
                    <div className="text-xs font-normal text-[#9CA3AF] tracking-wider">
                      02
                    </div>

                    {/* Title */}
                    <h4 className="text-sm font-bold text-[#0E1C45] leading-[1.4] m-0">
                      색상 변경 금지
                    </h4>

                    {/* Visual Example Area */}
                    <div className="relative bg-white border border-[#E5E7EB] rounded-[0.5rem] h-[8.75rem] flex items-center justify-center bg-[linear-gradient(rgba(229,231,235,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(229,231,235,0.3)_1px,transparent_1px)] bg-[length:0.625rem_0.625rem]">
                      {/* Incorrect Logo */}
                      <ImageWithFallback className="h-6 hue-rotate-120 block" src={logoFull.src} alt="색상 변경된 로고" />
                      
                      {/* Simple Red X Mark */}
                      <div className="absolute top-[0.5rem] right-[0.5rem] w-[1.25rem] h-[1.25rem] flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <line x1="4" y1="4" x2="16" y2="16" stroke="#DC2626" strokeWidth="2" strokeLinecap="round"/>
                          <line x1="16" y1="4" x2="4" y2="16" stroke="#DC2626" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>

                    {/* Regulation Text */}
                    <p className="text-xs font-normal text-[#6B7280] leading-normal m-0">
                      지정된 CI 컬러 외 색상 사용 금지
                    </p>
                  </div>

                  {/* 03. 회전 및 기울임 금지 */}
                  <div className="bg-[#FAFAFA] border border-gray-200 rounded-xl py-6 px-5 flex flex-col gap-4">
                    {/* Index Number */}
                    <div className="text-xs font-normal text-gray-400 tracking-widest">
                      03
                    </div>

                    {/* Title */}
                    <h4 className="text-[0.875rem] font-bold text-[#0E1C45] leading-[1.4] m-0">
                      회전 및 기울임 금지
                    </h4>

                    {/* Visual Example Area */}
                    <div className="relative bg-white border border-[#E5E7EB] rounded-[0.5rem] h-[8.75rem] flex items-center justify-center bg-[linear-gradient(rgba(229,231,235,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(229,231,235,0.3)_1px,transparent_1px)] bg-[length:0.625rem_0.625rem]">
                      {/* Incorrect Logo */}
                      <ImageWithFallback className="h-6 rotate-[15deg] block" src={logoFull.src} alt="회전된 로고" />
                      
                      {/* Simple Red X Mark */}
                      <div className="absolute top-2 right-2 w-5 h-5 flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <line x1="4" y1="4" x2="16" y2="16" stroke="#DC2626" strokeWidth="2" strokeLinecap="round"/>
                          <line x1="16" y1="4" x2="4" y2="16" stroke="#DC2626" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>

                    {/* Regulation Text */}
                    <p className="text-xs font-normal text-gray-500 leading-normal m-0">
                      로고의 회전, 기울임 효과 사용 금지
                    </p>
                  </div>

                  {/* 04. 효과 추가 금지 */}
                  <div className="bg-[#FAFAFA] border border-[#E5E7EB] rounded-[12px] p-[1.5rem_1.25rem] flex flex-col gap-[1rem]">
                    {/* Index Number */}
                    <div className="text-xs font-normal text-gray-400 tracking-widest">
                      04
                    </div>

                    {/* Title */}
                    <h4 className="text-sm font-bold text-[#0E1C45] leading-relaxed m-0">
                      효과 추가 금지
                    </h4>

                    {/* Visual Example Area */}
                    <div className="relative bg-white border border-[#E5E7EB] rounded-[0.5rem] h-[8.75rem] flex items-center justify-center bg-[linear-gradient(rgba(229,231,235,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(229,231,235,0.3)_1px,transparent_1px)] bg-[length:0.625rem_0.625rem]">
                      {/* Incorrect Logo */}
                      <ImageWithFallback className="h-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] block" src={logoFull.src} alt="효과 추가된 로고" />
                      
                      {/* Simple Red X Mark */}
                      <div className="absolute top-2 right-2 w-5 h-5 flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <line x1="4" y1="4" x2="16" y2="16" stroke="#DC2626" strokeWidth="2" strokeLinecap="round"/>
                          <line x1="16" y1="4" x2="4" y2="16" stroke="#DC2626" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>

                    {/* Regulation Text */}
                    <p className="text-xs font-normal text-gray-500 leading-normal m-0">
                      그림자, 외곽선 등 그래픽 효과 추가 금지
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CI 컬러 시스템 섹션 */}
      <section className="bg-white py-[3.75rem] px-[1.5rem] flex md:py-[7.5rem] md:px-[7.5rem]">
        <div className="max-w mx-auto m-0 container-h-padding-m w-full md:cotainer-h-padding">
          <FadeInUpAnimate
            contents={
              <div>
                <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold mb-4 text-[#0E1C45] text-left">
                  CI 컬러 시스템
                </h2>
          
                <p className="text-lg text-gray-500 mb-16 leading-relaxed text-left">
                  타이런트의 브랜드 아이덴티티를 구성하는 핵심 색상입니다. TYRANT NAVY는 신뢰와 전문성을, TYRANT RED는 혁신과 열정을 상징합니다.
                </p>
              </div>
            }>
          </FadeInUpAnimate>
        
          {/* Main Color */}
          <div>
            <FadeInUpAnimate
              contents={
                <h3 className="text-2xl font-bold text-[#0E1C45] mb-8 text-left">
                  Main Color
                </h3>
              }>
            </FadeInUpAnimate>
            <div className="grid gap-6 md:grid-cols-2">
              {/* TYRANT NAVY */}
              <div className="bg-[#263b82] rounded-none px-10 py-12 min-h-[15rem] flex flex-col justify-start">
                <FadeInUpAnimate
                  contents={
                    <div>
                      <div className="text-4xl font-bold text-white mb-8 tracking-[-0.02em]">
                        TYRANT NAVY
                      </div>
                      <div>
                        <div className="text-sm text-white/85 mb-1 font-normal leading-relaxed">
                          HEX : #263b82
                        </div>
                        <div className="text-sm text-white/85 mb-1 font-normal leading-relaxed">
                          Process Color : C85 M75 Y20 K5
                        </div>
                        <div className="text-sm text-white/85 font-normal leading-relaxed">
                          RGB : R38 G59 B130
                        </div>
                      </div>
                    </div>
                  }>
                </FadeInUpAnimate>                
              </div>

              {/* TYRANT RED */}
              <div className="bg-[#d7442a] rounded-none p-[3rem] min-h-[15rem] flex flex-col justify-start">
                <FadeInUpAnimate
                  contents={
                    <div>
                      <div className="text-4xl font-bold text-white mb-8 tracking-[-0.02em]">
                        TYRANT RED
                      </div>
                      <div>
                        <div className="text-sm text-white/85 mb-1 font-normal leading-relaxed">
                          HEX : #d7442a
                        </div>
                        <div className="text-sm text-white/85 mb-1 font-normal leading-relaxed">
                          Process Color : C0 M80 Y90 K0
                        </div>
                        <div className="text-sm text-white/85 font-normal leading-relaxed">
                          RGB : R215 G68 B42
                        </div>
                      </div>
                    </div>
                  }>
                </FadeInUpAnimate>                
              </div>
            </div>
          </div>

          {/* Color Usage Ratio */}
          <div className="mt-20">
            <FadeInUpAnimate
              contents={
                <div>
                  <h3 className="text-2xl font-semibold text-[#0E1C45] mb-6 text-left">
                    Color Usage Ratio
                  </h3>

                  <p className="text-lg font-normal text-[#4B5563] leading-[1.7] mb-12 text-left">
                    TYRANT NAVY는 브랜드의 기본 컬러로 전체 디자인에서 주요 비중으로 사용한다.<br />
                    TYRANT RED는 강조 요소에 한해 제한적으로 사용한다.
                  </p>
                </div>
              }>
            </FadeInUpAnimate>            

            {/* 좌우 레이아웃 */}
            <div className="grid grid-cols-2 gap-12 items-start">
              <FadeInUpAnimate
                contents={
                  <div>
                    {/* 좌측: 비율 텍스트 */}
                    <div className="flex flex-col gap-6">
                      {/* TYRANT NAVY */}
                      <div>
                        <div className="text-lg font-semibold text-[#263b82] mb-2">
                          TYRANT NAVY
                        </div>
                        <div className="text-base font-normal text-gray-500 leading-relaxed">
                          Primary Color (70–80%)
                        </div>
                      </div>

                      {/* TYRANT RED */}
                      <div>
                        <div className="text-lg font-semibold text-[#d7442a] mb-2">
                          TYRANT RED
                        </div>
                        <div className="text-base font-normal text-gray-500 leading-relaxed">
                          Accent Color (20–30%)
                        </div>
                      </div>
                    </div>
                  </div>
                }>
              </FadeInUpAnimate>              

              {/* 우측: 비율 바 */}
              <div className="flex flex-col gap-6">
                {/* NAVY 바 */}
                <div>
                  <div className="text-sm font-normal text-gray-500 mb-3">
                    70–80%
                  </div>
                  <div className="w-full h-12 bg-[#F3F4F6] rounded-lg overflow-hidden">
                    <div className="w-[75%] h-full bg-[#263b82] rounded-[0.5rem]" />
                  </div>
                </div>

                {/* RED 바 */}
                <div>
                  <div className="text-sm font-normal text-gray-500 mb-3">
                    20–30%
                  </div>
                  <div className="w-full h-12 bg-gray-100 rounded-lg overflow-hidden">
                    <div className="w-1/4 h-full bg-[#d7442a] rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}