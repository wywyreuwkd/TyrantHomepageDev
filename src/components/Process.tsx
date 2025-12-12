import { TrendingUp, Calculator, ShieldCheck, Building2, Sparkles } from "lucide-react";
import growthIcon from "figma:asset/cd21f5ddad357a23798669126012353c05b6d833.png";
import calculatorIcon from "figma:asset/13ab5d1600690f1f1559b9433ad7938746be4b37.png";
import shieldIcon from "figma:asset/8ecc655aa6b4d4083d406d7f2828d809249184aa.png";
import buildingIcon from "figma:asset/c8e880a76bd95743870cfe9e538fec72b1509c97.png";
import profitIcon from "figma:asset/6dec7f81de47d9c29f018397d168ab8df2bc0bf5.png";

const strategies = [
  {
    icon: TrendingUp,
    customIcon: growthIcon,
    number: "01",
    title: "가장 비싸게 판매",
    titleLine1: "가장 비싸게",
    titleLine2: "판매",
    description: "SMP 판매로 전력을 가장 비싸게 판매합니다.",
  },
  {
    icon: Calculator,
    customIcon: calculatorIcon,
    number: "02",
    title: "합리적 사업비 설계",
    titleLine1: "합리적 사업비",
    titleLine2: "설계",
    description: "시장 합리적 견적으로 사업비를 최적화합니다.",
  },
  {
    icon: ShieldCheck,
    customIcon: shieldIcon,
    number: "03",
    title: "보증보험 완전 제거",
    titleLine1: "보증보험 완전",
    titleLine2: "제거",
    description: "불필요한 보증보험을 완전 제거합니다.",
  },
  {
    icon: Building2,
    customIcon: buildingIcon,
    number: "04",
    title: "규모의 경제를 통한 효율화",
    titleLine1: "규모의 경제를",
    titleLine2: "통한 효율화",
    description: "네트워크와 규모로 수익성을 높입니다.",
  },
  {
    icon: Sparkles,
    customIcon: profitIcon,
    number: "05",
    title: "기대 이상의 잠재이익",
    titleLine1: "기대 이상의",
    titleLine2: "잠재이익",
    description: "RE100/CBAM 등으로 추가 수익을 창출합니다.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-[#0F214A] py-15 md:py-30">
      <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
        {/* Title Section */}
        <div className="text-center mb-16">
          {/* 메인 타이틀 - 64px Bold */}
          <h2 
            className="text-white text-center mb-4" 
            style={{ 
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: 'clamp(40px, 7vw, 64px)', 
              fontWeight: '700', 
              lineHeight: '1.2',
              letterSpacing: '-0.02em',
              width: 'auto',
              margin: '0 auto 16px auto'
            }}
          >
            <span style={{ display: 'block' }}>건물주의</span>
            <span style={{ display: 'block' }}>수익 극대화를 위한</span>
          </h2>
          {/* 강조 포인트 - 48px Bold */}
          <p 
            className="text-center mb-4"
            style={{ 
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: 'clamp(32px, 6vw, 48px)',
              fontWeight: '700',
              lineHeight: '1.3',
              color: '#F15A2A',
              textShadow: '0 0 40px rgba(241, 90, 42, 0.5)',
              letterSpacing: '-0.02em'
            }}
          >
            5가지 혁신적 전략
          </p>
          {/* 서브 타이틀 - 24px Medium → PC: 29px (24px × 1.2) */}
          <p 
            className="text-center"
            style={{ 
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: 'clamp(20px, 4vw, 29px)', 
              lineHeight: '1.5', 
              color: '#E0E7F1',
              fontWeight: '500',
              width: 'auto',
              wordBreak: 'keep-all',
              letterSpacing: '-0.01em'
            }}
          >
            솔라오만의 차별화된 전략으로 건물주의 수익을 최대화합니다.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {strategies.map((strategy, index) => (
            <div
              key={index}
              className="bg-[#1B2E4A] hover:bg-[#223655] transition-all"
              style={{ 
                borderRadius: '16px', 
                padding: '24px'
              }}
            >
              {/* Icon - 모바일 30% 증가 */}
              <div className="mb-4 md:mb-5 flex items-center justify-center">
                <div 
                  className="bg-[#F15A2A]/10 flex items-center justify-center md:w-[74px] md:h-[74px]" 
                  style={{ 
                    borderRadius: '12px',
                    width: '62px',
                    height: '62px'
                  }}
                >
                  {strategy.customIcon ? (
                    <img 
                      src={strategy.customIcon} 
                      alt={strategy.title} 
                      className="md:w-[37px] md:h-[37px]" 
                      style={{ 
                        color: '#F15A2A',
                        width: '31px',
                        height: '31px'
                      }} 
                    />
                  ) : (
                    <strategy.icon 
                      className="md:w-[37px] md:h-[37px]" 
                      style={{ 
                        color: '#F15A2A',
                        width: '31px',
                        height: '31px'
                      }} 
                    />
                  )}
                </div>
              </div>

              {/* Number - 모바일: 21px, PC: 23px (20px × 1.15) */}
              <div 
                className="text-center mb-2 md:mb-3" 
                style={{ 
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: 'clamp(21px, 4vw, 23px)', 
                  fontWeight: '600', 
                  color: '#F15A2A',
                  lineHeight: '1.4'
                }}
              >
                {strategy.number}
              </div>

              {/* Title - 모바일: 26px, PC: 29px (25px × 1.15) */}
              <h3 
                className="text-white text-center mb-3 md:mb-4" 
                style={{ 
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: 'clamp(26px, 5vw, 29px)', 
                  fontWeight: '600', 
                  lineHeight: '1.4', 
                  width: 'auto',
                  letterSpacing: '-0.01em'
                }}
              >
                {strategy.titleLine1}
                <br />
                {strategy.titleLine2}
              </h3>

              {/* Description - 모바일: 21px, PC: 23px (20px × 1.15) */}
              <p 
                className="text-center" 
                style={{ 
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: 'clamp(21px, 4.5vw, 23px)', 
                  lineHeight: '1.6', 
                  color: '#C9D4E2', 
                  fontWeight: '400', 
                  width: 'auto', 
                  wordBreak: 'keep-all' 
                }}
              >
                {strategy.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}