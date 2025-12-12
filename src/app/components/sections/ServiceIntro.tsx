import { SolarOLogo } from "@components/shared/SolarOLogo";

const features = [
  {
    title: "SOLAR",
    items: [
      {
        label: "Opportunity",
        description: "기존에 없던 신개념 수익 기회",
      },
      {
        label: "Ownership",
        description: "내 지붕, 내 발전소(90%→100%)",
      },
    ],
  },
  {
    title: "zerO",
    items: [
      {
        label: "Zero Cost",
        description: "설치 비용 0원",
      },
      {
        label: "Zero Risk",
        description: "건물주의 신용공여 없음",
      },
      {
        label: "Zero Worries",
        description: "15년간 토탈케어솔루션",
      },
    ]
  },
  {
    title: "오(Five)",
    items: [
      {
        label: "5:5 수익",
        description: "공정한 5:5 수익 공유(15년간)",
      },
      {
        label: "5가지",
        description: "수익극대화 전략",
      },
    ],
  },
];

export function ServiceIntro() {
  return (
    <section id="service" className="bg-primary py-12 md:py-24">
      <div className="mx-auto px-6 md:px-10 max-w-[1280px]">
        {/* Single Section with Title and Cards */}
        <div className="bg-third shadow-sm rounded-2xl py-20 px-16">
          {/* Title Area */}
          <div className="mb-[24px]">
            <h2 className="color-white flex items-center gap-2 text-left text-4xl font-bold leading-[1.4] mb-4">
              솔라오 [ <SolarOLogo size="medium" /> ] 프로젝트는?
            </h2>
            <p className="color-white text-left leading-[140%] text-[18px]">
              건물주 부담 없이 태양광을 설치하고, 15년간 발생하는 수익을 함께 나누는 무상설치 수익공유 프로그램입니다.
            </p>
          </div>
          
          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-primary shadow-sm rounded-2xl leading-[140%] p-8"
              >
                <h3 className="color-white text-3xl mb-6 font-bold">
                  {feature.title.split('').map((char, i) => {
                    const shouldHighlight = 
                      (feature.title === "SOLAR" && char === "O") ||
                      (feature.title === "zerO" && char === "O") ||
                      (feature.title === "오(Five)" && char === "오");

                    return (
                      <span key={i} className={shouldHighlight ? "color-accent" : ""}>
                        {char}
                      </span>
                    );
                  })}
                </h3>
                <div className="space-y-4">
                  {feature.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <p className="color-accent mb-[6px] text-lg">{item.label}</p>
                      <p className="color-white text-[16px]">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}