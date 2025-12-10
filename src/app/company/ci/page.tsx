import type { Metadata } from "next";
import { HeroSection } from "@components/shared/HeroSection";
import { ImageWithFallback } from "@components/shared/ImageWithFallback";
import { LabelGray, LabelWhite } from "@components/shared/SectionLabel";
import ciImageBlue from "@public/logo/main_logo_royalblue.png";
import ciImageTransparent from "@public/logo/main_logo_transparent.png";

export const metadata: Metadata = {
  title: "타이런트 CI 소개",
  description: "타이런트 CI 소개 - 타이런트의 브랜드 아이덴티티와 비전을 소개합니다.",
};

export default function CIIntro() {
  return (
    <div className="min-h-screen pt-20">
      <HeroSection
        badge="BRAND INTRODUCTION"
        title={<>타이런트 브랜드 소개</>}
        description={
          <>
            타이런트의 브랜드 아이덴티티와 비전을 소개합니다.
          </>
        }
      />

      {/* Brand Identity Section - White Background */}
      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto px-6 md:px-10 max-w-[1280px]">
          {/* Section Label */}
          <LabelGray label="BRAND IDENTITY" />
          <h2 className="text-2xl md:text-4xl font-bold color-primary leading-[140%] mb-12">
            타이런트의 브랜드 아이덴티티
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-start justify-between">
            {/* Left: CI Image */}
            <div className="flex">
              <div className="
                relative flex items-center justify-center
                w-full max-w-[600px] aspect-square bg-gray-50 rounded-3xl p-10 shadow-lg"
              >
                <div className="w-full h-full bg-white p-6">
                  <ImageWithFallback
                    src={ciImageBlue.src}
                    alt="CI Image"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Right: CI Description */}
            <div>
              <div className="space-y-8 color-gray-800 text-lg leading-[180%]">
                {/* 첫 번째 의미 */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="
                      w-8 h-8 bg-accent-10 rounded-lg flex items-center justify-center
                    ">
                      <span className="color-accent font-bold text-sm">01</span>
                    </div>
                    <h3 className="font-bold color-primary text-xl">혁신과 도전의 상징</h3>
                  </div>
                  <p className="mb-3">
                    <strong className="color-primary">왕관</strong>과 <strong className="color-primary">방패</strong>가 결합된 형태는 
                    '지배자(TYRANT)'를 상징하며, 중앙의 조형물은 <strong className="color-accent">태양광 모듈</strong>을 형상화했습니다.
                  </p>
                  <p className="color-gray-700 italic border-l-4 border-accent pl-4">
                    "태양광 시장의 패러다임을 전환시키겠다는 강력한 의지와 비전을 담고 있습니다."
                  </p>
                </div>

                {/* 두 번째 의미 */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="
                      w-8 h-8 bg-primary-10 rounded-lg flex items-center justify-center
                    ">
                      <span className="color-primary font-bold text-sm">02</span>
                    </div>
                    <h3 className="font-bold color-primary text-xl">지구를 위한 약속</h3>
                  </div>
                  <p className="mb-3">
                    <strong className="color-primary">왕관</strong>은 타이런트를, <strong className="color-primary">방패</strong>는 지구를 보호하는 의미를 담고 있습니다.
                  </p>
                  <p className="color-gray-700 italic border-l-4 border-primary pl-4">
                    "타이런트가 청정 에너지를 통해 지구 환경을 보호하겠다는 사명을 표현합니다."
                  </p>
                </div>

                {/* 브랜드 메시지 */}
                <p className="text-center text-xl font-medium color-primary pt-1">
                  타이런트는 이 두 가지 핵심 가치를 바탕으로<br className="hidden md:block" />
                  <span className="color-accent font-bold">지속 가능한 에너지의 미래</span>를 선도합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CI 규격 및 사용 규칙 */}
      <section className="bg-gray-50 py-20 md:py-32">
        <div className="mx-auto px-6 md:px-10 max-w-[1280px]">
          {/* Section Label */}
          <LabelWhite label="CI SPECIFICATION" />
          <h2 className="text-2xl md:text-4xl font-bold color-primary leading-[140%] mb-12">
            CI 규격 및 사용 규칙
          </h2>

          {/* 로고 규격 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* 로고 기본 규격 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold color-primary mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 color-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>
                로고 기본 규격
              </h3>
              <div className="flex justify-center mb-6">
                <div className="bg-gray-50 rounded-xl p-4 w-full max-w-[400px]">
                  <div className="w-full h-full bg-white p-6">
                    <ImageWithFallback
                      src={ciImageBlue.src}
                      alt="CI 규격"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  가로 세로 비율: <strong className="color-primary">1:1</strong>
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  심볼과 워드마크 간격: <strong className="color-primary">X = 로고 높이의 10%</strong>
                </p>
              </div>
            </div>

            {/* 최소 사용 크기 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold color-primary mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 color-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
                최소 사용 크기
              </h3>
              <div className="grid grid-cols-2 gap-6 mb-4">
                <div className="text-center">
                  <div className="
                    flex items-center justify-center
                    bg-gray-50 rounded-xl p-4 mb-2
                  ">
                    <div className="flex items-center justify-center w-56 h-40 bg-white p-4">
                      <div className="w-[80px] h-[50px]">
                        <ImageWithFallback
                          src={ciImageBlue.src}
                          alt="인쇄용 최소 크기"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm font-semibold color-primary">인쇄용</p>
                  <p className="text-xs text-gray-500">최소 가로 20mm</p>
                </div>
                <div className="text-center">
                  <div className="
                    flex items-center justify-center
                    bg-gray-50 rounded-xl p-4 mb-2
                  ">
                    <div className="flex items-center justify-center w-56 h-40 bg-white p-4">
                      <div className="w-[80px] h-[50px]">
                        <ImageWithFallback
                          src={ciImageBlue.src}
                          alt="디지털용 최소 크기"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm font-semibold color-primary">디지털용</p>
                  <p className="text-xs text-gray-500">최소 가로 80px</p>
                </div>
              </div>
              <div className="flex bg-gray-50 rounded-lg p-3 h-16">
                <p className="text-sm text-gray-500 flex items-center">
                  ⚠️ 최소 크기 이하로 사용 시 로고의 가독성이 저하될 수 있습니다.
                </p>
              </div>
            </div>
          </div>

          {/* 클리어 스페이스 & 사용 규칙 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* 클리어 스페이스 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold color-primary mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 color-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                클리어 스페이스 (여백 규정)
              </h3>
              <div className="flex justify-center mb-6">
                <div className="bg-gray-50 rounded-xl p-4 w-full max-w-[400px]">
                  <div className="flex relative items-center justify-center w-full h-full bg-white p-4">
                    <div className="border-2 border-dashed border-accent/50 p-6">
                      <div className="w-full h-[120px]">
                        <ImageWithFallback
                          src={ciImageBlue.src}
                          alt="클리어 스페이스"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="absolute top-1/2 -left-2 transform -translate-y-1/2 text-s color-accent font-bold">X</span>
                      <span className="absolute top-1/2 -right-2 transform -translate-y-1/2 text-s color-accent font-bold">X</span>
                      <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-s color-accent font-bold">X</span>
                      <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-s color-accent font-bold">X</span>
                    </div>    
                  </div>
                </div>
              </div>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  X = 심볼 높이의 <strong className="color-primary">25%</strong>
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  로고 주변에 항상 X만큼의 여백을 확보해 주세요.
                </p>
              </div>
            </div>

            {/* 배경색 적용 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold color-primary mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 color-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                배경색별 로고 적용
              </h3>
              <div className="grid grid-cols-2 gap-6 mb-12">
                <div className="text-center">
                  <div className="
                    flex items-center justify-center h-full
                    bg-white border-2 border-gray-200 rounded-xl p-4 mb-2 
                  ">
                    <div className="flex items-center justify-center w-[200px] h-[130px]">
                      <ImageWithFallback
                        src={ciImageBlue.src}
                        alt="밝은 배경"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">밝은 배경</p>
                </div>
                <div className="text-center">
                  <div className="
                    flex items-center justify-center h-full
                    bg-[#0F214A] rounded-xl p-4 mb-2 
                  ">
                    <div className="flex items-center justify-center w-[200px] h-[130px]">
                      <ImageWithFallback
                        src={ciImageTransparent.src}
                        alt="어두운 배경"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">어두운 배경 (화이트 버전)</p>
                </div>
              </div>
              <div className="flex bg-gray-50 rounded-lg p-3 h-20">
                <p className="text-sm text-gray-500 flex items-center">
                  💡 배경색에 따라 적절한 로고 버전을 사용해 주세요.
                </p>
              </div>
            </div>
          </div>

          {/* 사용 금지 사항 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold color-primary mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              사용 금지 사항
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* 금지 1: 비율 변경 */}
              <div className="text-center">
                <div className="relative bg-gray-50 rounded-xl p-4 mb-3 flex items-center justify-center h-28">
                  <div className="w-[80px] h-[50px]">
                    <ImageWithFallback
                      src={ciImageBlue.src}
                      alt="비율 변경 금지"
                      className="w-full h-full object-fill opacity-50"
                    />
                  </div>
                  <div className="absolute top-2 right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-700">비율 변경</p>
                <p className="text-xs text-gray-500">가로/세로 비율 왜곡 금지</p>
              </div>

              {/* 금지 2: 색상 변경 */}
              <div className="text-center">
                <div className="relative bg-gray-50 rounded-xl p-4 mb-3 flex items-center justify-center h-28">
                  <div className="w-[60px]">
                    <ImageWithFallback
                      src={ciImageBlue.src}
                      alt="색상 변경 금지"
                      className="w-full h-auto object-contain hue-rotate-90 opacity-50"
                    />
                  </div>
                  <div className="absolute top-2 right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-700">색상 변경</p>
                <p className="text-xs text-gray-500">지정 색상 외 사용 금지</p>
              </div>

              {/* 금지 3: 효과 추가 */}
              <div className="text-center">
                <div className="relative bg-gray-50 rounded-xl p-4 mb-3 flex items-center justify-center h-28">
                  <div className="w-[60px] drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                    <ImageWithFallback
                      src={ciImageBlue.src}
                      alt="효과 추가 금지"
                      className="w-full h-auto object-contain opacity-50"
                    />
                  </div>
                  <div className="absolute top-2 right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-700">효과 추가</p>
                <p className="text-xs text-gray-500">그림자, 외곽선 등 금지</p>
              </div>

              {/* 금지 4: 회전 */}
              <div className="text-center">
                <div className="relative bg-gray-50 rounded-xl p-4 mb-3 flex items-center justify-center h-28">
                  <div className="w-[60px] rotate-12">
                    <ImageWithFallback
                      src={ciImageBlue.src}
                      alt="회전 금지"
                      className="w-full h-auto object-contain opacity-50"
                    />
                  </div>
                  <div className="absolute top-2 right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-700">회전</p>
                <p className="text-xs text-gray-500">임의 회전 금지</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CI Color Palette Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto px-6 md:px-10 max-w-[1280px]">
          {/* Section Label */}
          <LabelGray label="COLOR PALETTE" />
          <h2 className="text-2xl md:text-4xl font-bold color-primary leading-[140%] mb-12">
            브랜드 컬러 시스템
          </h2>

          {/* Primary Colors */}
          <div className="mb-12">
            <h3 className="text-lg font-bold color-primary mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="color-primary font-bold text-sm">01</span>
              </div>
              메인 컬러
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Primary */}
              <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                <div className="w-full h-32 rounded-xl bg-[#0F214A] shadow-lg mb-4"></div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold color-primary text-lg">Primary</p>
                    <p className="text-sm text-gray-500">주요 배경, 제목</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-mono text-gray-600">#0F214A</p>
                    <p className="text-xs text-gray-400">RGB 15, 33, 74</p>
                  </div>
                </div>
              </div>

              {/* Secondary */}
              <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                <div className="w-full h-32 rounded-xl bg-[#15305A] shadow-lg mb-4"></div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold color-primary text-lg">Secondary</p>
                    <p className="text-sm text-gray-500">보조 배경, 카드</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-mono text-gray-600">#15305A</p>
                    <p className="text-xs text-gray-400">RGB 21, 48, 90</p>
                  </div>
                </div>
              </div>

              {/* Accent */}
              <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                <div className="w-full h-32 rounded-xl bg-[#FF6B3D] shadow-lg mb-4"></div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold color-primary text-lg">Accent</p>
                    <p className="text-sm text-gray-500">강조, 버튼, CTA</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-mono text-gray-600">#FF6B3D</p>
                    <p className="text-xs text-gray-400">RGB 255, 107, 61</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Neutral Colors */}
          <div className="mb-12">
            <h3 className="text-lg font-bold color-primary mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="color-primary font-bold text-sm">02</span>
              </div>
              중립 컬러
            </h3>
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
              <div className="flex gap-4 overflow-x-auto pb-2">
                {[
                  { name: 'White', hex: '#FFFFFF', rgb: '255, 255, 255' },
                  { name: 'Gray 50', hex: '#F9FAFB', rgb: '249, 250, 251' },
                  { name: 'Gray 200', hex: '#E5E7EB', rgb: '229, 231, 235' },
                  { name: 'Gray 500', hex: '#6B7280', rgb: '107, 114, 128' },
                  { name: 'Gray 700', hex: '#374151', rgb: '55, 65, 81' },
                  { name: 'Gray 900', hex: '#111827', rgb: '17, 24, 39' },
                ].map((color, index) => (
                  <div key={index} className="flex-shrink-0 text-center">
                    <div 
                      className="w-16 h-16 rounded-xl shadow-md mb-2 border border-gray-200"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <p className="text-xs font-semibold text-gray-700">{color.name}</p>
                    <p className="text-xs text-gray-400">{color.hex}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Color Usage Guide */}
          <div>
            <h3 className="text-lg font-bold color-primary mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="color-primary font-bold text-sm">03</span>
              </div>
              컬러 사용 가이드
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#0F214A] rounded-2xl p-6 text-white">
                <h4 className="font-bold text-lg mb-4">어두운 배경에서</h4>
                <div className="space-y-3">
                  <p className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-white rounded-full"></span>
                    제목: <span className="text-white font-semibold">White (#FFFFFF)</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-white/80 rounded-full"></span>
                    본문: <span className="text-white/80">White 80% Opacity</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-[#FF6B3D] rounded-full"></span>
                    강조: <span className="text-[#FF6B3D] font-semibold">Accent (#FF6B3D)</span>
                  </p>
                </div>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h4 className="font-bold text-lg color-primary mb-4">밝은 배경에서</h4>
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-[#0F214A] rounded-full"></span>
                    제목: <span className="color-primary font-semibold">Primary (#0F214A)</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-gray-700 rounded-full"></span>
                    본문: <span className="text-gray-700">Gray 700 (#374151)</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-[#FF6B3D] rounded-full"></span>
                    강조: <span className="color-accent font-semibold">Accent (#FF6B3D)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}