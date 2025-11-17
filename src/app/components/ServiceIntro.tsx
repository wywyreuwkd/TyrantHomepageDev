import { SolarOLogo } from "./SolarOLogo";

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
    ],
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
    <section id="service" className="bg-[#0F214A] py-15 md:py-30">
      <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
        {/* Single Section with Title and Cards */}
        <div className="bg-[#15305A] shadow-sm" style={{ borderRadius: '16px', paddingTop: '80px', paddingBottom: '80px', paddingLeft: '60px', paddingRight: '60px' }}>
          {/* Title Area */}
          <div style={{ marginBottom: '24px' }}>
            <h2 className="text-white text-left flex items-center gap-2" style={{ lineHeight: '140%', fontSize: '36px', fontWeight: 'bold', marginBottom: '16px' }}>
              솔라오 [ <SolarOLogo size="small" /> ] 프로젝트는?
            </h2>
            <p className="text-white text-left" style={{ lineHeight: '140%', fontSize: '18px' }}>
              건물주 부담 없이 태양광을 설치하고, 15년간 발생하는 수익을 함께 나누는 무상설치 수익공유 프로그램입니다.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8" style={{ marginTop: '60px' }}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#0F214A] shadow-sm"
                style={{ borderRadius: '16px', lineHeight: '140%', padding: '32px' }}
              >
                <h3 className="text-white" style={{ fontSize: '28px', marginBottom: '24px', fontWeight: 'bold' }}>
                  {feature.title.split('').map((char, i) => {
                    const shouldHighlight = 
                      (feature.title === "SOLAR" && char === "O") ||
                      (feature.title === "zerO" && char === "O") ||
                      (feature.title === "오(Five)" && char === "오");
                    
                    return (
                      <span key={i} className={shouldHighlight ? "text-[#FF6B3D]" : ""}>
                        {char}
                      </span>
                    );
                  })}
                </h3>
                <div className="space-y-4">
                  {feature.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <p className="text-[#FF6B3D]" style={{ marginBottom: '6px', fontSize: '18px' }}>{item.label}</p>
                      <p className="text-white" style={{ fontSize: '16px' }}>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}