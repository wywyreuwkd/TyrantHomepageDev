import type { Metadata } from "next";
import { HeroSection } from "@components/shared/HeroSection";
import { LabelAccent, LabelGray } from "@components/shared/SectionLabel";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "태양광 기자재 공급",
  description: "대량 구매를 통한 가격 혁신. 검증된 제조사의 고품질 자재를 합리적인 가격에 공급합니다.",
};

// 공급 제품
const products = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "태양광 모듈",
    desc: "국내외 검증된 제조사의 고효율 모듈을 안정적으로 공급합니다",
    brands: ["한화큐셀", "현대에너지솔루션", "LONGi Green Energy", "기타 A급 제조사"],
    color: "#FF6B3D"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "인버터",
    desc: "안정적인 전력 변환을 위한 고성능 인버터를 공급합니다",
    brands: ["Huawei", "Solis", "기타 검증 제조사"],
    color: "#00D9FF"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "구조물 및 이중지붕 자재",
    desc: "대상지별 최적화된 구조물과 방수 이중지붕 자재를 공급합니다",
    brands: ["포스맥 등 인증된 자재 사용", "맞춤형 구조물 설계", "이중지붕 방수 자재"],
    color: "#FF6B3D"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: "기타 자재",
    desc: "발전소 구축에 필요한 모든 부자재를 원스톱으로 공급합니다",
    brands: ["케이블 및 배선재", "접속함 및 분전함", "모니터링 시스템"],
    color: "#00D9FF"
  }
];

// 타이런트 강점
const advantages = [
  {
    title: "대량 구매",
    value: "규모의 경제",
    desc: "대량 구매를 통해 개별 구매 대비 획기적인 가격 혁신을 실현합니다",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: "검증된 품질",
    value: "A급 제조사",
    desc: "검증된 제조사의 고품질 자재만을 엄선하여 공급합니다",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "합리적 가격",
    value: "중간 마진 최소화",
    desc: "제조사 직접 계약으로 중간 유통 마진을 최소화합니다",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "신속 공급",
    value: "전국 물류망",
    desc: "전국 물류 네트워크를 통해 신속하고 안정적으로 공급합니다",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    )
  }
];

// 공급 프로세스
const processSteps = [
  {
    step: "STEP 01",
    title: "견적 요청",
    desc: "필요 자재 및 수량을 문의해 주세요",
    color: "from-[#FF6B3D] to-[#FF8C5A]"
  },
  {
    step: "STEP 02",
    title: "맞춤 견적",
    desc: "최적 제품 추천 및 경쟁력 있는 견적을 제공합니다",
    color: "from-[#00D9FF] to-[#00B8E6]"
  },
  {
    step: "STEP 03",
    title: "계약 체결",
    desc: "공급 계약 및 납품 일정을 협의합니다",
    color: "from-purple-500 to-purple-600"
  },
  {
    step: "STEP 04",
    title: "배송 및 지원",
    desc: "현장 배송 및 기술 지원 서비스를 제공합니다",
    color: "from-[#FF6B3D] to-[#e55a35]"
  }
];

export default function BusinessMaterials() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <HeroSection
        badge="SOLAR MATERIALS"
        title={<>태양광 기자재공급</>} //,<br /><span className="color-accent">규모의 경제</span>로 공급합니다</>}
        description={
          <>
            대량 구매를 통한 가격 혁신.
            <br className="hidden md:block" />
            검증된 제조사의 고품질 자재를 합리적인 가격에 공급합니다.
          </>
        }
      />

      {/* Key Value Section - 밝은 배경 */}
      <section className="bg-gray-50 py-20 md:py-32">
        <div className="mx-auto px-6 md:px-10 max-w-[1280px]">
          <div className="text-center mb-16">
            <LabelGray label="WHY TYRANT" />
            <h2 className="text-2xl md:text-4xl font-bold color-primary leading-[140%] mb-6">
              타이런트의 <span className="color-accent">경쟁력</span>
            </h2>
            <p className="text-lg text-gray-600 leading-[170%] max-w-2xl mx-auto">
              대량 구매와 제조사 직접 계약으로
              <br className="hidden md:block" />
              고품질 자재를 합리적인 가격에 공급합니다
            </p>
          </div>

          {/* Advantages Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-8 hover:border-accent/30 hover:shadow-lg transition-all text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-xl flex items-center justify-center color-accent">
                  {adv.icon}
                </div>
                <div className="text-2xl font-black color-accent mb-2">{adv.value}</div>
                <h3 className="text-lg font-bold color-primary mb-3">{adv.title}</h3>
                <p className="text-sm text-gray-600 leading-[160%]">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section - 다크 배경 */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent rounded-full blur-[150px]"></div>
        </div>

        <div className="relative mx-auto px-6 md:px-10 py-20 md:py-32 max-w-[1280px]">
          <div className="text-center mb-16">
            <LabelAccent label="PRODUCT LINEUP" />
            <h2 className="text-2xl md:text-4xl font-bold color-white leading-[140%] mb-6">
              공급 제품
            </h2>
            <p className="text-lg color-white-90 leading-[170%] max-w-3xl mx-auto">
              태양광 발전소 구축에 필요한 모든 자재를
              <br className="hidden md:block" />
              <span className="color-white font-semibold">원스톱으로 공급합니다</span>
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-[rgba(21,48,90,0.3)] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-accent/30 transition-all"
              >
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                  style={{ 
                    background: `${product.color}20`,
                    border: `1px solid ${product.color}30`
                  }}
                >
                  <div style={{ color: product.color }}>{product.icon}</div>
                </div>

                <h3 className="text-xl font-bold color-white mb-3">{product.title}</h3>
                <p className="text-base color-white-90 leading-[170%] mb-6">{product.desc}</p>

                <div className="space-y-2">
                  {product.brands.map((brand, brandIndex) => (
                    <div key={brandIndex} className="flex items-center gap-2">
                      <CheckCircle2 size={16} style={{ color: product.color }} className="flex-shrink-0" />
                      <span className="text-sm color-white-90">{brand}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - 밝은 배경 */}
      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto px-6 md:px-10 max-w-[1280px]">
          <div className="text-center mb-16">
            <LabelGray label="SUPPLY PROCESS" />
            <h2 className="text-2xl md:text-4xl font-bold color-primary leading-[140%] mb-6">
              공급 프로세스
            </h2>
            <p className="text-lg text-gray-600 leading-[170%] max-w-2xl mx-auto">
              간편한 절차로 필요한 자재를 빠르게 공급받으세요
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all"
              >
                <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${step.color} rounded-full mb-6`}>
                  <span className="text-white text-sm font-bold tracking-wider">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold color-primary mb-3">{step.title}</h3>
                <p className="text-base text-gray-600 leading-[160%]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Highlight - 그라데이션 박스 */}
      <section className="bg-gray-50 py-20 md:py-32">
        <div className="mx-auto px-6 md:px-10 max-w-[1280px]">
          <div
            className="rounded-3xl p-10 md:p-16"
            style={{ background: 'linear-gradient(135deg, #0F214A 0%, #1a3a6e 100%)' }}
          >
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/30 rounded-full mb-8">
                <svg className="w-5 h-5 color-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span className="text-sm font-bold color-accent tracking-wider">ECONOMIES OF SCALE</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-[140%]">
                대량 구매를 통한 <span className="text-[#FF6B3D]">가격 혁신</span>
              </h3>

              <p className="text-lg text-white/85 leading-[180%] mb-8">
                타이런트는 다수의 프로젝트를 동시에 진행하며 축적된 구매력을 바탕으로
                <br className="hidden md:block" />
                <span className="text-white font-semibold">규모의 경제를 실현</span>합니다.
                <br className="hidden md:block" />
                개별 구매 대비 획기적인 가격 경쟁력으로 고객의 사업성을 높여드립니다.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 px-5 py-3 bg-white/10 rounded-full">
                  <CheckCircle2 size={18} className="color-accent" />
                  <span className="text-white font-medium">제조사 직접 계약</span>
                </div>
                <div className="flex items-center gap-2 px-5 py-3 bg-white/10 rounded-full">
                  <CheckCircle2 size={18} className="color-accent" />
                  <span className="text-white font-medium">중간 마진 최소화</span>
                </div>
                <div className="flex items-center gap-2 px-5 py-3 bg-white/10 rounded-full">
                  <CheckCircle2 size={18} className="color-accent" />
                  <span className="text-white font-medium">품질 보증</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0a1628] py-20 md:py-32">
        <div className="mx-auto px-6 md:px-10 max-w-[1280px]">
          <div className="bg-gradient-to-br from-accent/20 via-accent/10 to-transparent border border-accent/30 rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-2xl md:text-4xl font-bold color-white leading-[140%] mb-6">
              합리적인 가격으로 고품질 자재를 공급받으세요
            </h2>
            <p className="text-lg color-white-90 leading-[170%] max-w-2xl mx-auto mb-10">
              지금 바로 문의하시면
              <br className="hidden md:block" />
              <span className="color-accent font-semibold">맞춤 견적</span>을 받아보실 수 있습니다
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="
                  inline-flex items-center gap-2 px-8 py-4
                  bg-accent text-white font-bold text-lg
                  rounded-full hover:bg-[#e55a35]
                  transition-all hover:scale-105
                  shadow-[0_8px_24px_rgba(255,107,61,0.4)]
                "
              >
                견적 문의하기
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="tel:02-504-1204"
                className="
                  inline-flex items-center gap-2 px-8 py-4
                  bg-white/10 text-white font-bold text-lg
                  border border-white/20 rounded-full
                  hover:bg-white/20 transition-all
                "
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                02-504-1204
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
