import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import ceoImage from "../assets/e1eaffd9dd03e97649563fdb53c07145f7f5b620.png";

export function CompanyIntro() {
  return (
    <div className="min-h-screen bg-white" style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F214A] via-[#15305A] to-[#273b82] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF6B3D] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative mx-auto px-6 md:px-10 py-20 md:py-32" style={{ maxWidth: '1280px' }}>
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-[#FF6B3D]/20 border border-[#FF6B3D]/30 mb-6" style={{ borderRadius: '100px' }}>
              <span style={{ 
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '14px',
                fontWeight: '600',
                color: '#FF6B3D'
              }}>
                ABOUT TYRANT
              </span>
            </div>
            
            <h1 style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: '700',
              lineHeight: '1.3',
              marginBottom: '24px'
            }}>
              청정 에너지로<br />
              지속 가능한 미래를 만듭니다
            </h1>
            
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '18px',
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '32px'
            }}>
              타이런트는 태양광 발전 전문 기업으로, 수익공유형 무상설치 모델을 통해<br className="hidden md:block" />
              기업과 함께 성장하며 탄소중립 사회 실현에 기여하고 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* CEO Message Section - Tech Style */}
      <section className="relative bg-[#0F214A] overflow-hidden">
        {/* Simple Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF6B3D] rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[150px]"></div>
        </div>

        <div className="relative mx-auto px-6 md:px-10 py-24 md:py-32" style={{ maxWidth: '1280px' }}>
          <div className="flex flex-col lg:flex-row gap-16 md:gap-20 items-start">
            {/* Left: CEO Image - 45% */}
            <div className="w-full lg:w-[45%] lg:sticky lg:top-32">
              <div className="relative overflow-hidden" style={{ borderRadius: '24px', height: '100%' }}>
                <ImageWithFallback
                  src={ceoImage}
                  alt="CEO"
                  className="w-full h-full object-cover"
                  style={{ minHeight: '800px' }}
                />
                
                {/* Blue Tech Overlay */}
                <div className="absolute inset-0 pointer-events-none" style={{ 
                  background: 'linear-gradient(135deg, rgba(15, 33, 74, 0.3) 0%, rgba(0, 100, 200, 0.2) 100%)' 
                }}></div>
                
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

                  {/* Horizontal Tech Lines */}
                  <div 
                    className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#00D9FF] to-transparent opacity-70 shadow-[0_0_8px_rgba(0,217,255,0.8)]"
                    style={{ top: '30%' }}
                  ></div>
                  <div 
                    className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#0080FF] to-transparent opacity-50 shadow-[0_0_6px_rgba(0,128,255,0.6)]"
                    style={{ top: '60%' }}
                  ></div>
                  
                  {/* Vertical Tech Line */}
                  <div 
                    className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-[#00D9FF] to-transparent opacity-40"
                    style={{ left: '70%' }}
                  ></div>
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
            <div className="w-full lg:w-[55%] lg:pl-8">
              {/* Label */}
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 mb-8"
                style={{
                  background: 'rgba(255, 107, 61, 0.1)',
                  border: '1px solid rgba(255, 107, 61, 0.3)',
                  borderRadius: '100px'
                }}
              >
                <div className="w-1.5 h-1.5 bg-[#FF6B3D] rounded-full"></div>
                <span style={{ 
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '13px',
                  fontWeight: '700',
                  color: '#FF6B3D',
                  letterSpacing: '2px'
                }}>
                  CEO MESSAGE
                </span>
              </div>

              {/* Title - H2: 40px / Bold */}
              <h2 style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '40px',
                fontWeight: '700',
                color: 'white',
                lineHeight: '1.3',
                marginBottom: '48px',
                maxWidth: '650px'
              }}>
                대표 인사말
              </h2>

              {/* Message Content - Body: 19px / Regular / Line Height 175% / Paragraph Spacing: 20px */}
              <div style={{ maxWidth: '650px' }}>
                <div style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '19px',
                  lineHeight: '1.75',
                  color: 'rgba(255, 255, 255, 0.88)',
                  fontWeight: '400'
                }}>
                  <p style={{ marginBottom: '20px' }}>
                    고객 여러분 안녕하십니까.
                  </p>
                  
                  <p style={{ marginBottom: '20px' }}>
                    타이런트는 친환경 에너지 전환과 지속 가능한 미래를 위해 설립된 이래,<br />
                    태양광 분야에서 혁신과 책임 있는 기술경영을 바탕으로 성장해왔습니다.
                  </p>

                  {/* Quote - 22px / Semi-bold / 브랜드 포인트 컬러 */}
                  <p style={{ 
                    marginBottom: '20px',
                    fontSize: '19px',
                    fontWeight: '300',
                    color: 'rgba(255, 255, 255, 0.88)',
                    lineHeight: '1.75',
                    padding: '24px 0',
                    borderLeft: '3px solid #FF6B3D',
                    paddingLeft: '24px'
                  }}>
                    우리는 탄소 중립 시대를 앞당기는 <span style={{ color: '#FF6B3D', fontWeight: '600' }}>에너지 패러다임 전환</span>을 목표로<br />
                    발전 효율은 높이고, 고객의 부담은 낮추는 <span style={{ color: '#FF6B3D', fontWeight: '600' }}>솔라제로(SOLAR ZERO)</span> 솔루션을 제공하고 있습니다.
                  </p>

                  <p style={{ marginBottom: '20px' }}>
                    이를 통해 누구나 깨끗한 에너지를 선택할 수 있는 사회를 만들고자 합니다.
                  </p>

                  <p style={{ marginBottom: '20px' }}>
                    또한 스마트 모니터링, 예측 기반 운영관리, 안전 시스템 고도화 등<br />
                    미래 에너지 시장을 선도할 수 있는 핵심 기술을 연구하며,<br />
                    고객이 안심하고 사용할 수 있는 <span style={{ color: 'white', fontWeight: '700' }}>전주기(全기간) 토탈 솔루션</span>을 구축하고 있습니다.
                  </p>

                  <p style={{ marginBottom: '20px' }}>
                    급변하는 글로벌 경쟁 속에서,<br />
                    타이런트는 ESG경영 실천과 지역사회 상생을 기반으로<br />
                    환경과 경제가 조화를 이루는 가치를 지속적으로 확대해 나가겠습니다.
                  </p>

                  <p style={{ marginBottom: '20px' }}>
                    앞으로도 타이런트는 새로운 가능성에 도전하며,<br />
                    신뢰할 수 있는 에너지 파트너로서<br />
                    깨끗한 미래를 향해 함께 나아가겠습니다.
                  </p>

                  <p style={{ marginBottom: '20px' }}>
                    여러분의 변함없는 관심과 성원에 깊이 감사드리며,<br />
                    더 나은 내일을 약속드리겠습니다.
                  </p>

                  <p style={{ marginBottom: '32px' }}>
                    감사합니다.
                  </p>
                </div>

                {/* CEO Signature */}
                <div 
                  className="pt-10 mt-4 border-t"
                  style={{ borderColor: 'rgba(255, 255, 255, 0.15)' }}
                >
                  <div style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '21px',
                    fontWeight: '700',
                    color: 'white',
                    lineHeight: '1.6'
                  }}>
                    <span style={{ color: '#FF6B3D' }}>타이런트</span> 대표이사 <span style={{ 
                      color: 'white', 
                      fontWeight: '400', 
                      fontSize: '32px',
                      fontFamily: 'Brush Script MT, cursive, serif',
                      fontStyle: 'italic',
                      letterSpacing: '1px'
                    }}>홍길동</span>
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