import type { Metadata } from "next";

import heroImage from "@public/company/ci/0f40b7bf4f0ccd71a835eddba089cbcaa120cdd0.png";
import logotypeNew from "@public/company/ci/a71b82adb7bb1cdbf69b3e7c96dbfab5768a3ff6.png";
import logotypeVariationSmall from "@public/company/ci/b0d3145ca010210e4eef47416c4a78a3a34542c6.png";
import minSizeCombined from "@public/company/ci/eea9907e2a899aa201d9c360cb9830ba3c88e7ff.png";
import reversedComparison from "@public/company/ci/cb982e6e4262e1cc2b531bb04c746b06a6dc9195.png";
import clearSpaceGuide from "@public/company/ci/ec28af6426804fd82418adee50c8c5d9e45a2ac3.png";
import stationeryImage from "@public/company/ci/67551d6ac945663a072ca1864f2956f9689a337a.png";
import posterApplication from "@public/company/ci/d0ed2a8a8d8f68cd7b7efb4df84985d8e63fe8c8.png";
import conferenceApplication from "@public/company/ci/4a0f03a35dad1344eb587989e9e74d5b1edb27d9.png";

import { HeroSectionFeat } from "@components/shared/HeroSectionFeat";
import { FadeInUpAnimate } from "@components/shared/FadeInUpAnimate";
import { InteractiveLogoFrame } from "@components/sections/InteractiveLogoFrame";
import { ImageWithFallback } from "@components/shared/ImageWithFallback";
import { LogoTypeImageSection } from "@components/sections/LogoTypeImageSection";
import { Download, Sun, Moon } from "lucide-react";

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
      <section className="bg-white flex justify-center pt-[60px] pb-[60px] px-5 md:pt-[120px] md:pb-[120px] md:px-10">
        <div className="max-w mx-auto w-full px-5 md:px-10">
      	  <FadeInUpAnimate
            contents={
              <div>
                <h2 className="text-[32px] mb-4 md:text-[clamp(32px,5vw,48px)] md:mb-6 font-bold text-[#0E1C45] text-left">
                  브랜드 아이덴티티
                </h2>

                <p className="text-base mb-10 md:text-lg md:mb-[60px] text-[#4B5563] leading-[1.7] text-left">
                  명확한 구조와 기준을 통해 타이런트의 브랜드 아이덴티티를 시각적으로 구현합니다.
                </p>
              
                {/* 인터랙티브 로고 프레임 & 로고 다운로드 버튼 섹션 */}
                <InteractiveLogoFrame />

                {/* 상징적 의미 텍스트 영역 */}
                <div>
                  <h3 className="text-[28px] mb-3 md:text-[35px] md:mb-4 font-bold text-[#0E1C45] text-left">
                    상징적 의미
                  </h3>
                  <p className="text-base mb-5 md:text-xl md:mb-8 font-bold text-[#0E1C45] text-left">
                    Symbolic Meaning
                  </p>

                  <p className="text-[15px] mb-6 md:text-lg md:mb-8 text-[#4B5563] leading-[1.7] text-left">
                    혁신과 도전의 상징 왕관과 방패가 결합된 형태는 '지배자(TYRANT)'를 상징하며, 중앙의 조형은 태양광 모듈을 형상화했습니다. 이는 태양광 시장의 패러다임을 전환시키겠다는 타이런트의 강력한 의지와 비전을 담고 있습니다.
                  </p>

                  <h4 className="text-base mb-5 md:text-xl md:mb-4 font-bold text-[#0E1C45] text-left">
                    지구를 위한 약속
                  </h4>
                  <p className="text-[15px] md:text-lg text-[#4B5563] leading-[1.7] text-left">
                    왕관은 타이런트를, 방패는 지구를 보호하는 의미를 담고 있습니다. 타이런트는 청정 에너지를 통해 지구 환경을 보호하겠다는 사명을 표현합니다. 타이런트는 이 두 가지 핵심 가치를 바탕으로 <strong className="font-bold text-[#0E1C45]">지속 가능한 에너지의 미래를 선도</strong>합니다.
                  </p>
                </div>
              </div>
            }>
          </FadeInUpAnimate>
        </div>
      </section>
      
      {/* Minimum Size 섹션 */}
      <section className="bg-white pt-[60px] pb-[60px] px-5 md:pt-[120px] md:pb-[120px] md:px-6">
        <div className="max-w mx-auto px-5 md:px-10">
          {/* 상단 가로선 */}
          <div className="w-full h-px bg-[#D1D5DB] mb-10 md:mb-20" />

          <div className="relative">
            {/* 세로선 */}
            <div className="md:absolute md:left-[calc(280px+24px)] md:top-[-80px] md:bottom-[-340px] md:w-px md:bg-[#D1D5DB] md:pointer-events-none md:z-[1]" />

            <div className="flex flex-col gap-8 md:flex-row md:gap-20 items-start relative z-[2]">
              {/* 왼쪽: 고정 폭 텍스트 컬럼 */}
              <div className="w-full md:w-[280px] shrink-0">
                <h2 className="text-[32px] mb-6 md:text-[60px] md:mb-20 font-bold text-[#0E1C45] text-left leading-[1.2] w-full">
                  Logotype;<br/>Minimum size
                </h2>
                
                <p className="text-[15px] leading-[1.7] md:text-lg md:leading-[1.8] text-[#4B5563] text-left w-full m-0">
                  기본 형태의 레터마크를 적용 할 수 있는 최소 사이즈는 좌우너비 20mm(인쇄), 90px(디지털) 이다. 이는 최소한의 가독성을 확보하기 위한 장치로, 충분한 공간이 확보한 경우 가급적 최소사이즈 이상의 적용을 권한다.
                </p>
              </div>

              {/* 오른쪽: 이미지 */}
              <div className="flex-1 sm:w-full sm:max-w-full">
                <ImageWithFallback src={minSizeCombined.src} alt="Logotype Minimum Size" className="w-full h-auto block"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logotype Reversed 섹션 */}
      <section className="bg-white pt-[60px] pb-[60px] px-5 md:pt-[120px] md:pb-[120px] md:px-6">
        <div className="max-w mx-auto px-5 md:px-10">
          {/* 상단 가로선 */}
          <div className="w-full h-px bg-[#D1D5DB] mb-10 md:mb-20" />

          <div className="relative">
            {/* 세로선 */}
            <div className="md:absolute md:left-[calc(280px+24px)] md:top-[-80px] md:bottom-[-340px] md:w-px md:bg-[#D1D5DB] md:pointer-events-none md:z-[1]" />

            <div
              className="flex flex-col gap-8 md:flex-row md:gap-20 items-start relative z-[2]">
              {/* 왼쪽: 고정 폭 텍스트 컬럼 */}
              <div className="w-full md:w-[280px] shrink-0">
                <h2 className="text-[32px] mb-6 md:text-[60px] md:mb-20 font-bold text-[#0E1C45] text-left leading-[1.2] w-full">
                  Logotype;<br/>Reversed
                </h2>
                
                <p className="text-[15px] leading-[1.7] md:text-lg md:leading-[1.8] text-[#4B5563] text-left w-full m-0">
                  Primary버전의 레터마크가 주로 쓰이도록 한다. 다만 배경의 색이 명도60% 이상의 어둡거나 짙은 색의 면 혹은 이미지일 경우, 로고의 시인성과 가독성이 급격히 떨어지는 것을 방지하기 위해 백색 레터마크를 사용하는 것을 권한다.
                </p>
              </div>

              {/* 오른쪽: 이미지 */}
              <div className="flex-1 sm:w-full sm:max-w-full">
                <ImageWithFallback src={reversedComparison.src} alt="Logotype Reversed Comparison" className="w-full h-auto block"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logotype Clear Space 섹션 */}
      <section className="bg-white pt-[60px] pb-[60px] px-5 md:pt-[120px] md:pb-[120px] md:px-6">
        <div className="max-w mx-auto px-5 md:px-10">
          {/* 상단 가로선 */}
          <div className="w-full h-px bg-[#D1D5DB] mb-10 md:mb-20" />

          <div className="relative">
            {/* 세로선 */}
            <div className="md:absolute md:left-[calc(280px+24px)] md:top-[-80px] md:bottom-[-340px] md:w-px md:bg-[#D1D5DB] md:pointer-events-none md:z-[1]" />

            <div className="flex flex-col gap-8 md:flex-row md:gap-20 items-start relative z-[2]">
              {/* 왼쪽: 고정 폭 텍스트 컬럼 */}
              <div className="w-full md:w-[280px] shrink-0">
                <h2 className="text-[32px] mb-6 md:text-[60px] md:mb-20 font-bold text-[#0E1C45] text-left leading-[1.2] w-full">
                  Logotype;<br/>Clear space
                </h2>
                
                <div className="text-[15px] leading-[1.7] md:text-lg md:leading-[1.8] text-[#4B5563] text-left w-full">
                  <p className="m-0 mb-6">
                    로고의 변형을 막고 아이덴티티를 온전히, 효과적으로 전달 하기 위해 최소한의 공간을 보장 받아야 한다.
                  </p>
                  
                  <p className="m-0 mb-6">
                    항상 최소 공간 규정의 준수를 통해 반드시 레터마크가 가진 디자인 아이덴티티를 보호하도록 한다.
                  </p>
                  
                  <p className="m-0">
                    단, 만약에 물리적 공간(벽, 구조물 등)에 레터마크를 적용 해야 하는 상황에서 그 공간의 크기가 너무 작고 변형이 불가할 경우 레터마크의 크기가 지나치게 작아지는 상황을 피하기 위해 최소 공간 규정을 따를 수 없는 경우는 예외로 한다.
                  </p>
                </div>
              </div>

              {/* 오른쪽: 이미지 */}
              <div className="flex-1 sm:w-full sm:max-w-full">
                <ImageWithFallback src={clearSpaceGuide.src} alt="Logotype Clear Space Guide" className="w-full h-auto block"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logotype Don'ts 섹션 */}
      <LogoTypeImageSection />

      {/* Colors 섹션 */}
      <section className="bg-white pt-[60px] pb-[60px] px-5 md:pt-[120px] md:pb-[480px] md:px-6">
        <div className="max-w mx-auto px-5 md:px-10">
          {/* 상단 가로선 */}
          <div className="w-full h-px bg-[#D1D5DB] mb-10 md:mb-20" />

          <div className="relative">
            {/* 세로선 */}
            <div className="md:absolute md:left-[calc(280px+24px)] md:top-[-80px] md:bottom-[-340px] md:w-px md:bg-[#D1D5DB] md:pointer-events-none md:z-[1]" />

            <div className="flex flex-col gap-8 md:flex-row md:gap-20 items-start relative z-[2]">
              {/* 왼쪽: 고정 폭 텍스트 컬럼 */}
              <div className="w-full md:w-[280px] shrink-0">
                <h2 className="text-[32px] mb-6 md:text-[60px] md:mb-20 font-bold text-[#0E1C45] text-left leading-[1.2] w-full">
                  Colors
                </h2>
                
                <div className="text-[15px] leading-[1.7] md:text-lg md:leading-[1.8] text-[#4B5563] text-left w-full">
                  <p className="m-0 mb-6">
                    대표 색상은 심볼에 쓰인 Tyrant Blue 색이다.
                  </p>
                  
                  <p className="m-0 mb-6">
                    하지만 지나친 대표색상의 남용으로 어두운 분위기가 되지 않도록 색조합 시 Main Base 컬러인 화이트를 위주로 구성하며, 명분할 필요 시 쿨그레이 계열 3종의 Primary Shades를 적용한다.
                  </p>
                  
                  <p className="m-0">
                    또한 Tyrant Red의 경우, 반드시 악센트 컬러로만 활용하여, 전체적인 색의 조합이 깨끗하고 무겁지 않으면서 Tyrant Blue 색상이 믿음감과 안정감을 더할 수 있도록 한다.
                  </p>
                </div>
              </div>

              {/* 오른쪽: 컬러 시스템 */}
              <div className="flex-1 w-full max-w-full">
                {/* Primary Shades */}
                <div className="mb-[60px]">
                  <h3 className="text-lg md:text-xl font-bold text-[#1F2937] mb-6">
                    Primary Shades
                  </h3>
                  
                  <div className="flex flex-col gap-5 md:flex-row md:gap-0">
                    {/* Shade 1 */}
                    <div className="flex-1 sm:w-full">
                      <div className="w-full h-20 bg-[#98a1a5] mb-4" />
                      <div className="flex justify-between text-[11px] md:text-[13px] leading-[1.6] text-[#1F2937] font-medium pr-0 md:pr-5">
                        <div>
                          <div className="font-bold mb-1">CMYK:</div>
                          <div>43</div>
                          <div>30</div>
                          <div>30</div>
                          <div>0</div>
                        </div>
                        <div>
                          <div className="font-bold mb-1">RGB:</div>
                          <div>152</div>
                          <div>161</div>
                          <div>165</div>
                        </div>
                        <div>
                          <div className="font-bold mb-1">HEX#:</div>
                          <div>98a1a5</div>
                        </div>
                      </div>
                    </div>

                    {/* Shade 2 */}
                    <div className="flex-1 sm:w-full">
                      <div className="w-full h-20 bg-[#c1cacf] mb-4" />
                      <div className="flex justify-between text-[11px] md:text-[13px] leading-[1.6] text-[#1F2937] font-medium px-0 md:px-[10px]">
                        <div>
                          <div className="font-bold mb-1">CMYK:</div>
                          <div>24</div>
                          <div>14</div>
                          <div>14</div>
                          <div>0</div>
                        </div>
                        <div>
                          <div className="font-bold mb-1">RGB:</div>
                          <div>193</div>
                          <div>202</div>
                          <div>207</div>
                        </div>
                        <div>
                          <div className="font-bold mb-1">HEX#:</div>
                          <div>c1cacf</div>
                        </div>
                      </div>
                    </div>

                    {/* Shade 3 */}
                    <div className="flex-1 sm:w-full">
                      <div className="w-full h-20 bg-[#e0e4e6] mb-4" />
                      <div className="flex justify-between text-[11px] md:text-[13px] leading-[1.6] text-[#1F2937] font-medium pl-0 md:pl-5">
                        <div>
                          <div className="font-bold mb-1">CMYK:</div>
                          <div>11</div>
                          <div>6</div>
                          <div>6</div>
                          <div>0</div>
                        </div>
                        <div>
                          <div className="font-bold mb-1">RGB:</div>
                          <div>224</div>
                          <div>228</div>
                          <div>230</div>
                        </div>
                        <div>
                          <div className="font-bold mb-1">HEX#:</div>
                          <div>e0e4e6</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Supporting Base, Main Base, Accent */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-0 mb-[60px]">
                  {/* Supporting Base (Tyrant Blue) */}
                  <div className="flex-1">
                    <h3 className="text-lg mb-3 md:text-base mb-4 font-bold text-[#1F2937]">
                      Supporting Base (Tyrant Blue)
                    </h3>
                    
                    <div className="w-full h-[100px] bg-[#263b82] border border-[#E5E7EB] mb-4" />
                    
                    <div className="flex justify-between text-[11px] md:text-[13px] leading-[1.6] text-[#1F2937] font-medium pr-0 md:pr-5">
                      <div>
                        <div className="font-bold mb-1">CMYK:</div>
                        <div>85</div>
                        <div>75</div>
                        <div>20</div>
                        <div>5</div>
                      </div>
                      <div>
                        <div className="font-bold mb-1">RGB:</div>
                        <div>38</div>
                        <div>59</div>
                        <div>130</div>
                      </div>
                      <div>
                        <div className="font-bold mb-1">HEX#:</div>
                        <div>263b82</div>
                      </div>
                    </div>
                  </div>

                  {/* Main Base */}
                  <div className="flex-1">
                    <h3 className="text-lg mb-3 md:text-base mb-4 font-bold text-[#1F2937]">
                      Main Base
                    </h3>
                    
                    <div className="w-full h-[100px] bg-white border border-[#E5E7EB] mb-4" />
                    
                    <div className="flex justify-between text-[11px] md:text-[13px] leading-[1.6] text-[#1F2937] font-medium px-0 md:px-[10px]">
                      <div>
                        <div className="font-bold mb-1">CMYK:</div>
                        <div>0</div>
                        <div>0</div>
                        <div>0</div>
                        <div>0</div>
                      </div>
                      <div>
                        <div className="font-bold mb-1">RGB:</div>
                        <div>255</div>
                        <div>255</div>
                        <div>255</div>
                      </div>
                      <div>
                        <div className="font-bold mb-1">HEX#:</div>
                        <div>FFFFFF</div>
                      </div>
                    </div>
                  </div>

                  {/* Accent (Tyrant Red) */}
                  <div className="flex-1">
                    <h3 className="text-lg mb-3 md:text-base mb-4 font-bold text-[#1F2937]">
                      Accent (Tyrant Red)
                    </h3>
                    
                    <div className="w-full h-[100px] bg-[#d7442a] border border-[#E5E7EB] mb-4" />
                    
                    <div className="flex justify-between text-[11px] md:text-[13px] leading-[1.6] text-[#1F2937] font-medium pl-0 md:pl-5">
                      <div>
                        <div className="font-bold mb-1">CMYK:</div>
                        <div>0</div>
                        <div>80</div>
                        <div>90</div>
                        <div>0</div>
                      </div>
                      <div>
                        <div className="font-bold mb-1">RGB:</div>
                        <div>215</div>
                        <div>68</div>
                        <div>42</div>
                      </div>
                      <div>
                        <div className="font-bold mb-1">HEX#:</div>
                        <div>d7442a</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Color Usage Ratio */}
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-[#1F2937] mb-6">
                    Color Usage Ratio
                  </h3>
                  
                  <div className="w-full h-40 flex border border-[#E5E7EB] overflow-hidden">
                    {/* Tyrant Blue - 25% */}
                    <div className="w-[25%] h-full bg-[#263b82]" />
                    
                    {/* 연한 그레이 - 6% */}
                    <div className="w-[6%] h-full bg-[#e0e4e6]" />
                    
                    {/* 중간 그레이 - 6% */}
                    <div className="w-[6%] h-full bg-[#c1cacf]" />
                    
                    {/* 진한 그레이 - 6% */}
                    <div className="w-[6%] h-full bg-[#98a1a5]" />
                    
                    {/* Tyrant Red - 2% */}
                    <div className="w-[2%] h-full bg-[#e7442a]" />
                    
                    {/* White - 55% */}
                    <div className="w-[55%] h-full bg-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application 섹션 */}
      <section className="bg-white pt-[60px] pb-[60px] px-5 md:pt-[120px] md:pb-[480px] md:px-6">
        <div className="max-w mx-auto px-5 md:px-10">
          <div>
            {/* 타이틀 */}
            <h2 className="text-[32px] mb-4 md:text-[60px] md:mb-6 font-bold text-[#0E1C45] text-left leading-[1.2]">
              Application
            </h2>
            
            <p className="text-[15px] mb-10 leading-[1.7] md:text-lg md:mb-[60px] md:leading-[1.8] text-[#4B5563] text-left">
              타이런트의 브랜드 아이덴티티가 다양한 매체에서 표현된 예시입니다.
            </p>

            {/* Stationery 이미지 */}
            <div className="w-full">
              <img src={stationeryImage.src} alt="Stationery Application" className="w-full h-auto block"/>
            </div>

            {/* Poster 이미지 */}
            <div className="w-full mt-10 md:mt-[60px]">
              <img src={posterApplication.src} alt="Poster Application" className="w-full h-auto block"/>
            </div>

            {/* Conference 이미지 */}
            <div className="w-full mt-10 md:mt-[60px]">
              <img src={conferenceApplication.src} alt="Conference Application" className="w-full h-auto block"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
        