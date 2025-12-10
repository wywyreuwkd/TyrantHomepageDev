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
    <section id="process" className="bg-primary py-12 md:py-24">
      <div className="mx-auto px-6 md:px-10 max-w-[1280px]">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="color-white mb-6 text-[48px] font-black tracking-[-0.5px] leading-[140%]">
            건물주의 수익 극대화를 위한{' '}
            <span className="inline-block color-accent font-black [text-shadow:0_0_40px_rgba(255,107,61,0.5)]">
              5가지 혁신적 전략
            </span>
          </h2>
          <p className="leading-[160%] text-[#E0E7F1] text-xl font-medium">
            솔라오만의 차별화된 전략으로 건물주의 수익을 최대화합니다.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {strategies.map((strategy, index) => (
            <div
              key={index}
              className="bg-[#1B2E4A] hover:bg-[#223655] transition-all rounded-2xl p-8"
            >
              {/* Icon */}
              <div className="mb-4 flex items-center justify-center">
                <div className="w-12 h-12 bg-accent-10 flex items-center justify-center rounded-xl">
                  <strategy.icon className="w-6 h-6 color-accent" />
                </div>
              </div>

              {/* Number */}
              <div className="color-accent text-center mb-2 text-sm font-bold">
                {strategy.number}
              </div>

              {/* Title */}
              <h3 className="color-white text-center mb-3 text-lg font-bold leading-[140%]">
                {strategy.title}
              </h3>

              {/* Description */}
              <p className="text-center text-medium leading-[140%] color-muted2">
                {strategy.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}