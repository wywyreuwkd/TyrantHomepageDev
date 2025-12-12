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
        <div className="bg-[#15305A] shadow-sm" style={{ borderRadius: '16px', paddingTop: '60px', paddingBottom: '60px', paddingLeft: '24px', paddingRight: '24px' }}>
          {/* Title Area */}
          <div style={{ marginBottom: '24px', width: '100%' }}>
            {/* 모바일 버전 - 3줄 */}
            <div className="block md:hidden" style={{ marginBottom: 'clamp(24px, 5vw, 32px)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '12px', flexWrap: 'nowrap' }}>
                <h2 
                  className="text-white"
                  style={{ 
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: 'clamp(32px, 6vw, 54px)', 
                    lineHeight: '1.2',
                    margin: 0,
                    letterSpacing: '-0.02em',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <span style={{ fontWeight: '700' }}>솔라오 SOLAR</span>
                </h2>
                <div 
                  className="rounded-full" 
                  style={{ 
                    width: 'clamp(50px, 9vw, 75px)', 
                    height: 'clamp(50px, 9vw, 75px)',
                    border: 'clamp(10px, 1.8vw, 15px) solid #FF6B3D',
                    backgroundColor: 'transparent',
                    flexShrink: 0
                  }}
                />
              </div>
              <h2 
                className="text-white"
                style={{ 
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: 'clamp(32px, 6vw, 54px)', 
                  fontWeight: '700', 
                  lineHeight: '1.2',
                  margin: 0,
                  letterSpacing: '-0.02em'
                }}
              >
                프로젝트는?
              </h2>
            </div>

            {/* PC 버전 - 2줄 */}
            <div className="hidden md:block" style={{ marginBottom: 'clamp(24px, 5vw, 32px)' }}>
              {/* 첫 번째 줄: 솔라오 | SOLAR O */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <h2 
                  className="text-white"
                  style={{ 
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: 'clamp(48px, 8vw, 72px)', 
                    lineHeight: '1.2',
                    margin: 0,
                    letterSpacing: '-0.02em'
                  }}
                >
                  <span style={{ fontWeight: '700' }}>솔라오</span>
                  <span style={{ fontWeight: '400', fontSize: '0.7em' }}> | </span>
                  <span style={{ fontWeight: '700' }}>SOLAR</span>
                </h2>
                <div 
                  className="rounded-full" 
                  style={{ 
                    width: 'clamp(68px, 11vw, 102px)', 
                    height: 'clamp(68px, 11vw, 102px)',
                    border: 'clamp(14px, 2.2vw, 20px) solid #FF6B3D',
                    backgroundColor: 'transparent',
                    flexShrink: 0
                  }}
                />
              </div>
              {/* 두 번째 줄: 프로젝트는? */}
              <h2 
                className="text-white"
                style={{ 
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: 'clamp(48px, 8vw, 72px)', 
                  fontWeight: '400', 
                  lineHeight: '1.2',
                  margin: 0,
                  letterSpacing: '-0.02em'
                }}
              >
                프로젝트는?
              </h2>
            </div>

            {/* 본문 - 24px Regular */}
            <p 
              className="text-white text-left md:text-left" 
              style={{ 
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                lineHeight: '1.6', 
                fontSize: 'clamp(16px, 4vw, 24px)',
                fontWeight: '400',
                wordBreak: 'keep-all',
                width: 'auto'
              }}
            >
              투자자가 건물주의 지붕에 태양광 발전소를 무상으로 설치(건물주 지분 90%)하고,<br />
              15년간 발생하는 추가수익을 건물주와 투자자가 5:5로 공유하며,<br />
              16년 차에 건물주가 발전소를 100% 인수 받는 신개념 프로젝트입니다.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8" style={{ marginTop: '60px' }}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#0F214A] shadow-sm"
                style={{ borderRadius: '16px', lineHeight: '1.4', padding: '32px' }}
              >
                {/* 카드 타이틀 - 36px Bold */}
                <h3 
                  className="text-white" 
                  style={{ 
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '36px', 
                    marginBottom: '24px', 
                    fontWeight: '700',
                    lineHeight: '1.4',
                    letterSpacing: '-0.01em'
                  }}
                >
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
                      {/* 카드 라벨 - 20px Semibold */}
                      <p 
                        className="text-[#FF6B3D]" 
                        style={{ 
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          marginBottom: '6px', 
                          fontSize: '20px',
                          fontWeight: '600',
                          lineHeight: '1.4'
                        }}
                      >
                        {item.label}
                      </p>
                      {/* 본문 - 18px Regular */}
                      <p 
                        className="text-white" 
                        style={{ 
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '18px',
                          fontWeight: '400',
                          lineHeight: '1.6'
                        }}
                      >
                        {item.description}
                      </p>
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