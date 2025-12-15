import type { Metadata } from "next";
import { HeroSection } from "@components/shared/HeroSection";
import { ImageWithFallback } from "@components/shared/ImageWithFallback";
import { LabelAccent } from "@components/shared/SectionLabel";
import ceoImage from "@public/solar/ceo_image.png";

export const metadata: Metadata = {
  title: "회사소개",
  description: "타이런트는 태양광 발전 전문 기업으로, 수익공유형 무상설치 모델을 통해 기업과 함께 성장하며 탄소중립 사회 실현에 기여합니다.",
};

export default function CompanyIntro() {
  return (
    <div className="min-h-screen bg-primary pt-20">
      <HeroSection
        badge="ABOUT TYRANT"
        title={<>청정 에너지로<br />지속 가능한 미래를 만듭니다</>}
        description={
          <>
            타이런트는 태양광 발전 전문 기업으로, 수익공유형 무상설치 모델을 통해
            <br className="hidden md:block" />
            기업과 함께 성장하며 탄소중립 사회 실현에 기여하고 있습니다. 강준호
          </>
        }
      />

      {/* CEO Message Section - Tech Style */}
      <section className="relative bg-primary overflow-hidden">
        {/* Simple Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[150px]"></div>
        </div>

        <div className="relative mx-auto px-6 md:px-10 py-24 md:py-32 max-w-[1280px]">
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-16 md:gap-20 items-start">
            {/* Left: CEO Image -45% */}
            <div className="lg:sticky lg:top-32">
              <div className="relative overflow-hidden rounded-3xl h-full">
                <ImageWithFallback
                  src={ceoImage.src}
                  alt="CEO Image"
                  className="w-full h-full object-cover min-h-[500px] md:min-h-[800px]"
                />

                {/* Blue Tech Overlay */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-overlay"></div>

                {/* Thin Neon Lines */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Top-left Corner */}
                  <div className="absolute top-0 left-0 w-32 h-32">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#00D9FF] via-[#0080FF] to-transparent shadow-[0_0_10px_rgba(0,217,255,0.6)]"></div>
                    <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-[#00D9FF] via-[#0080FF] to-transparent shadow-[0_0_10px_rgba(0,217,255,0.6)]"></div>
                  </div>

                  {/* Bottom-right Corner */}
                  <div className="absolute bottom-0 right-0 w-32 h-32">
                    <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-[#FF6B3D] via-[#FF8C3D] to-transparent shadow-[0_0_10px_rgba(255,107,61,0.6)]"></div>
                    <div className="absolute bottom-0 right-0 w-[2px] h-full bg-gradient-to-t from-[#FF6B3D] via-[#FF8C3D] to-transparent shadow-[0_0_10px_rgba(255,107,61,0.6)]"></div>
                  </div>
                </div>
                {/* Premium Border Glow */}
                <div 
                  className="absolute inset-0"
                  style={{ 
                    borderRadius: '24px',
                    border: '1px solid rgba(0, 217, 255, 0.3)',
                    boxShadow: '0 0 30px rgba(0, 217, 255, 0.15), inset 0 0 20px rgba(0, 128, 255, 0.1)'
                  }}
                ></div>
              </div>
            </div>

            {/* Right: Message Content - 55% */}
            <div className="lg:pl-8">
              {/* Label: CEO MESSAGE */}
              <LabelAccent label="CEO MESSAGE" />

              {/* Title - H2: 40px / Bold */}
              <h2
                className="
                  text-[32px] md:text-[40px] font-bold leading-[130%]
                  color-white mb-12 max-w-[650px]
                "
              >
                대표 인사말
              </h2>

              {/* Message Content - Body: 19px / Regular / Line Height 175% / Paragraph Spacing: 20px */}
              <div className="max-w-[650px]">
                <div className="text-lg md:text-xl leading-[175%] color-white-90 font-normal">
                  <p className="mb-5">
                    고객 여러분 안녕하십니까.
                  </p>

                  <p className="mb-5">
                    타이런트는 친환경 에너지 전환과 지속 가능한 미래를 위해 설립된 이래,<br />
                    태양광 분야에서 혁신과 책임 있는 기술경영을 바탕으로 성장해왔습니다.
                  </p>

                  {/* Quote - 22px / Semi-bold / 브랜드 포인트 컬러 */}
                  <p className="
                    text-xl font-light color-white-90 leading-[175%]
                    mb-5 py-6 pl-6 border-l-[3px] border-accent
                  ">
                    우리는 탄소 중립 시대를 앞당기는 <span className="color-accent font-semibold">에너지 패러다임 전환</span>을 목표로<br />
                    발전 효율은 높이고, 고객의 부담은 낮추는 <span className="color-accent font-semibold">솔라제로(SOLAR ZERO)</span> 솔루션을 제공하고 있습니다.
                  </p>

                  <p className="mb-5">
                    이를 통해 누구나 깨끗한 에너지를 선택할 수 있는 사회를 만들고자 합니다.
                  </p>

                  <p className="mb-5">
                    또한 스마트 모니터링, 예측 기반 운영관리, 안전 시스템 고도화 등<br />
                    미래 에너지 시장을 선도할 수 있는 핵심 기술을 연구하며,<br />
                    고객이 안심하고 사용할 수 있는 <span className="color-white font-bold">전기간 토탈 솔루션</span>을 구축하고 있습니다.
                  </p>

                  <p className="mb-5">
                    급변하는 글로벌 경쟁 속에서,<br />
                    타이런트는 ESG경영 실천과 지역사회 상생을 기반으로<br />
                    환경과 경제가 조화를 이루는 가치를 지속적으로 확대해 나가겠습니다.
                  </p>

                  <p className="mb-5">
                    앞으로도 타이런트는 새로운 가능성에 도전하며,<br />
                    신뢰할 수 있는 에너지 파트너로서<br />
                    깨끗한 미래를 향해 함께 나아가겠습니다.
                  </p>

                  <p className="mb-5">
                    여러분의 변함없는 관심과 성원에 깊이 감사드리며,<br />
                    더 나은 내일을 약속드리겠습니다.
                  </p>

                  <p className="mb-8">
                    감사합니다.
                  </p>
                </div>

                {/* CEO Signature */}
                <div className="pt-10 mt-4 border-t border-white-20">
                  <div className="
                    flex items-baseline gap-4 whitespace-nowrap
                    text-xl md:text-2xl font-bold color-white leading-[160%]
                  ">
                    <span className="color-accent">타이런트그룹</span>
                    <span>회장</span>
                    <span></span>
                    <span className="
                      color-white font-normal text-[60px] md:text-[90px] tracking-wider
                      font-signature-nanum-brush-script italic
                    ">
                      조경석
                    </span>
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