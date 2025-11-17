import { TrendingUp, Calculator, ShieldCheck, Building2, Sparkles } from "lucide-react";

const strategies = [
  {
    icon: TrendingUp,
    number: "01",
    title: "가장 비싸게 판매",
    description: "SMP 판매로 전력을 가장 비싸게 판매합니다.",
  },
  {
    icon: Calculator,
    number: "02",
    title: "합리적 사업비 설계",
    description: "시장 합리적 견적으로 사업비를 최적화합니다.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "보증보험 완전 제거",
    description: "불필요한 보증보험을 완전 제거합니다.",
  },
  {
    icon: Building2,
    number: "04",
    title: "규모의 경제를 통한 효율화",
    description: "네트워크와 규모로 수익성을 높입니다.",
  },
  {
    icon: Sparkles,
    number: "05",
    title: "기대 이상의 잠재이익",
    description: "RE100/CBAM 등으로 추가 수익을 창출합니다.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-[#0F214A] py-15 md:py-30">
      <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 
            className="text-white mb-6" 
            style={{ 
              fontSize: '48px', 
              fontWeight: '900', 
              lineHeight: '140%',
              letterSpacing: '-0.5px'
            }}
          >
            건물주의 수익 극대화를 위한{' '}
            <span 
              className="text-[#FF6B3D]" 
              style={{ 
                display: 'inline-block',
                textShadow: '0 0 40px rgba(255, 107, 61, 0.5)',
                fontWeight: '900'
              }}
            >
              5가지 혁신적 전략
            </span>
          </h2>
          <p 
            style={{ 
              fontSize: '20px', 
              lineHeight: '160%', 
              color: '#E0E7F1',
              fontWeight: '500'
            }}
          >
            솔라오만의 차별화된 전략으로 건물주의 수익을 최대화합니다.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {strategies.map((strategy, index) => (
            <div
              key={index}
              className="bg-[#1B2E4A] hover:bg-[#223655] transition-all"
              style={{ borderRadius: '16px', padding: '24px' }}
            >
              {/* Icon */}
              <div className="mb-4 flex items-center justify-center">
                <div className="w-12 h-12 bg-[#FF6B3D]/10 flex items-center justify-center" style={{ borderRadius: '12px' }}>
                  <strategy.icon className="w-6 h-6 text-[#FF6B3D]" />
                </div>
              </div>

              {/* Number */}
              <div className="text-[#FF6B3D] text-center mb-2" style={{ fontSize: '14px', fontWeight: 'bold' }}>
                {strategy.number}
              </div>

              {/* Title */}
              <h3 className="text-white text-center mb-3" style={{ fontSize: '18px', fontWeight: 'bold', lineHeight: '140%' }}>
                {strategy.title}
              </h3>

              {/* Description */}
              <p className="text-center" style={{ fontSize: '14px', lineHeight: '140%', color: '#C9D4E2' }}>
                {strategy.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}