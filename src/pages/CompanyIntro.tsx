import ceoImage from "figma:asset/931ff7bd1e494bf9b6b98c405914e772b588ac5a.png";
import ceoBadge from "figma:asset/c39f2d3618a5f7904cb0facb78c0fef201ce7a7b.png";
import tyrantLogo from "figma:asset/85ccf97bd276aca0384cf0628c0fb20c697e7a79.png";
import ciDiagram from "figma:asset/d0814be1ceaf21387986110f7c3366d233036de7.png";
import symbolOnly from "figma:asset/42084a9ed76544286cbbc6eee3e051e537b81c35.png";
import logoFull from "figma:asset/a26d32a4cda9524da2386b79a668d32e665e1946.png";
import tyrantCILogo from "figma:asset/85289144f2a642dde8ec51638caa252f457ee5f8.png";
import tyrantShield from "figma:asset/5d770599dc6710a0305a2fdae54fa54c69686230.png";
import crownIcon from "figma:asset/128cea821f26881de6338c5500ffbce18ad0d1f4.png";
import solarModuleIcon from "figma:asset/cc766bcbcc303b064a4c1cba9ba27fc408eb989b.png";
import logoGray from "figma:asset/781a5b49f14f9ea1755f9304bb3b8c6876fabb23.png";
import { motion } from 'framer-motion';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { PageHero } from '../components/PageHero';
import { SubNavigation } from '../components/SubNavigation';
import { Download } from 'lucide-react';

interface CompanyIntroProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function CompanyIntro({ onNavigate, currentPage }: CompanyIntroProps) {
  const handleDownload = (fileType: string) => {
    // Mock download function
    alert(`${fileType} 다운로드가 시작됩니다.`);
  };

  return (
    <div className="min-h-screen" style={{ paddingTop: '80px', backgroundColor: '#F7FAFD' }}>

      {/* Sub Navigation - Below Hero */}
      <SubNavigation category="company" currentPage={currentPage} onNavigate={onNavigate} />

      {/* Hero Section */}
      <PageHero
        badge={{ text: 'ABOUT TYRANT', color: '#FF6B3D' }}
        title="청정 에너지로<br />지속 가능한 미래를 만듭니다"
        description="타이런트는 태양광 발전 전문 기업으로, 수익공유형 무상설치 모델을 통해<br class='hidden md:block' />기업과 함께 성장하며 탄소중립 사회 실현에 기여하고 있습니다."
      />
      
      {/* Content Wrapper with Animation */}
      <motion.div
        key={currentPage}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* CEO Message Section */}
        <section className="relative overflow-hidden" style={{ background: '#15305A' }}>
          {/* Simple Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF6B3D] rounded-full blur-[150px]"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#15305A] rounded-full blur-[150px]"></div>
          </div>

          <div className="relative mx-auto px-6 md:px-20 py-24 md:py-32" style={{ maxWidth: '1280px' }}>
            <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-start">
              {/* Left: CEO Image */}
              <div className="w-full lg:w-[420px] lg:sticky lg:top-32">
                <div className="relative overflow-hidden" style={{ borderRadius: '20px', height: '100%' }}>
                  <ImageWithFallback
                    src={ceoImage}
                    alt="CEO"
                    className="w-full h-full object-cover"
                    style={{ minHeight: '650px' }}
                  />
                  
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 pointer-events-none" style={{ 
                    background: 'linear-gradient(135deg, rgba(15, 33, 74, 0.15) 0%, rgba(0, 100, 200, 0.05) 100%)' 
                  }}></div>
                  
                  {/* Border */}
                  <div 
                    className="absolute inset-0"
                    style={{ 
                      borderRadius: '20px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                    }}
                  ></div>
                </div>
              </div>

              {/* Right: Message Content */}
              <div className="w-full lg:flex-1 lg:pl-8">
                {/* Badge - CEO MESSAGE */}
                <div 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '12px 28px',
                    background: 'rgba(255, 107, 61, 0.1)',
                    border: '1.5px solid #FF6B3D',
                    borderRadius: '100px',
                    marginBottom: '24px'
                  }}
                >
                  <span style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#FF6B3D',
                    display: 'inline-block'
                  }}></span>
                  <span style={{ 
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '15px',
                    fontWeight: '700',
                    color: '#FF6B3D',
                    letterSpacing: '0.5px'
                  }}>
                    CEO MESSAGE
                  </span>
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '48px',
                  fontWeight: '700',
                  color: '#FFFFFF',
                  lineHeight: '1.3',
                  marginBottom: '24px',
                  marginTop: 0
                }}>
                  대표 인사말
                </h3>

                {/* Subtitle */}
                <div style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '16px',
                  fontWeight: '400',
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: '1.7',
                  marginBottom: '48px'
                }}>
                  <p style={{ margin: '0 0 4px 0' }}>
                    고객의 행복을 만드는 대보정보통신.
                  </p>
                  <p style={{ margin: '0' }}>
                    모두를 위한 IT세상을 만들어 갑니다.
                  </p>
                </div>

                {/* Emphasis Quote with Orange Line */}
                <div style={{ 
                  marginBottom: '48px',
                  paddingLeft: '20px',
                  borderLeft: '3px solid #FF6B3D',
                  maxWidth: '650px'
                }}>
                  <p style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#FFFFFF',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    오랜 시간 축적된 역량과 경험을 바탕으로<br />
                    고객과 함께 새로운 미래를 선도하겠습니다.
                  </p>
                </div>

                {/* Main Content */}
                <div style={{ maxWidth: '650px' }}>
                  <div style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '18px',
                    lineHeight: '1.8',
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontWeight: '400'
                  }}>
                    <p style={{ marginBottom: '24px', marginTop: 0 }}>
                      대보정보통신은 1996년 창립 이래 지능형 교통시스템 개발 및 운영사업을 비롯여 교통, 항공, 철도, 국방 등 국가 기반 시설의 정보화를 선도해온 IT 서비스 기업입니다.
                    </p>

                    <p style={{ marginBottom: '24px' }}>
                      인공지능 시대의 새로운 패러다임은 산업의 경계를 넘어 일상생활에까지 혁신의 물결을 일으키고 있습니다. 이와 같은 변화 속에서 고객 니즈 또한 다양화되고 세분화되고 있습니다.
                    </p>

                    <p style={{ marginBottom: '24px' }}>
                      공인인증 혁신으로 고객의 IT 경쟁력 향상을 위해 노력해 온 대보정보통신은 지금까지의 성과에 만족하지 않고, 오늘도 미래를 준비하는 데 최선을 다하고 있습니다. 국내 지능형 교통시장 선두기업의 명성에 걸맞게 C-ITS, 스마트 물류 등 미래 교통의 핵심 기술 개발은 물론 자율주행을 위한 도로 인프라 개발, IoT를 활용한 스마트 기술 개발, 그리고 인공지능 솔루션 유통 플랫폼 등 지속적인 성장과 변화를 추구하고 있습니다.
                    </p>
                  </div>

                  {/* Closing */}
                  <p style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '18px',
                    lineHeight: '1.8',
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontWeight: '400',
                    marginTop: '32px',
                    marginBottom: '16px'
                  }}>
                    감사합니다.
                  </p>

                  {/* Signature */}
                  <div style={{
                    marginTop: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '18px',
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontWeight: '500'
                    }}>
                      대표이사
                    </span>
                    <span style={{
                      fontFamily: 'Brush Script MT, cursive',
                      fontSize: '32px',
                      color: '#FFFFFF',
                      fontWeight: '400',
                      marginLeft: '4px'
                    }}>
                      조경석
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CI Section - Corporate Identity */}
        <section className="relative overflow-hidden" style={{ background: '#FFFFFF', paddingTop: '120px', paddingBottom: '80px' }}>
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.015]" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #273b82 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>

          <div className="relative mx-auto px-6 md:px-20" style={{ maxWidth: '1280px' }}>
            {/* Section Header - Left/Right Split - 모바일 반응형 */}
            <div className="relative mb-16 md:mb-24">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
                {/* Left: Title - 4 columns */}
                <div className="md:col-span-4">
                  <h2 style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '48px',
                    fontWeight: '700',
                    color: '#1B2B55',
                    lineHeight: '1.33',
                    textAlign: 'left',
                    margin: '0'
                  }}>
                    타이런트 CI
                  </h2>
                </div>
                
                {/* Right: Description - 8 columns */}
                <div className="md:col-span-8">
                  <div className="md:pl-8">
                    <p style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '18px',
                      fontWeight: '400',
                      color: '#4B5563',
                      lineHeight: '1.7',
                      textAlign: 'left',
                      margin: '0'
                    }}>
                      타이런트 심볼은 기업의 비전과 철학을 담은 공식 브랜드 자산입니다. 심볼의 형태와 색상은 태양광 산업의 혁신성과 지속 가능한 미래를 상징하며, 모든 환경에서 동일한 기준으로 관리·사용되어야 합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CI System - 우리은행/삼성 스타일 규칙적 레이아웃 */}
            <div className="mb-20 md:mb-32">
              
              {/* 1. CI 심볼 */}
              <div style={{
                background: '#F8F9FB',
                padding: '80px 40px',
                borderRadius: '0px',
                marginBottom: '160px'
              }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                  <div style={{ marginBottom: '40px' }}>
                    <img
                      src={symbolOnly}
                      alt="타이런트 심볼마크"
                      style={{ 
                        width: '180px',
                        height: 'auto',
                        display: 'block',
                        margin: '0 auto'
                      }}
                    />
                  </div>
                  <p style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '16px',
                    fontWeight: '400',
                    color: '#4B5563',
                    lineHeight: '1.8',
                    margin: 0
                  }}>
                    태양광 혁신과 지구 보호라는 타이런트의 핵심 가치를 상징합니다.
                  </p>
                </div>
              </div>

              {/* 2. CI 의미 */}
              <div style={{ marginBottom: '160px', marginTop: '200px' }}>
                <h3 style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '48px',
                  fontWeight: '700',
                  color: '#1B2B55',
                  marginBottom: '16px',
                  textAlign: 'left'
                }}>
                  심볼 아이덴티티
                </h3>
                <p style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '18px',
                  fontWeight: '400',
                  color: '#6B7280',
                  lineHeight: '28px',
                  maxWidth: '600px',
                  marginBottom: '48px'
                }}>
                  왕관, 태양광 모듈, 방패로 구성된 심볼은 타이런트의 핵심 가치를 담고 있습니다.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Card 1 */}
                  <div style={{
                    background: '#F7F8FA',
                    padding: '40px',
                    borderRadius: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center'
                  }}>
                    <div style={{ 
                      marginBottom: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <img
                        src={crownIcon}
                        alt="왕관"
                        style={{ 
                          width: '56px',
                          height: '56px',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                    <h4 style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '20px',
                      fontWeight: '700',
                      color: '#273b82',
                      marginBottom: '8px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      TYRANT CROWN
                    </h4>
                    <p style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '16px',
                      fontWeight: '500',
                      color: '#6B7280',
                      marginBottom: '16px'
                    }}>
                      왕관
                    </p>
                    <p style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '16px',
                      fontWeight: '400',
                      color: '#6B7280',
                      lineHeight: '1.6',
                      margin: 0
                    }}>
                      리더십과 강한 추진력을 상징
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div style={{
                    background: '#F7F8FA',
                    padding: '40px',
                    borderRadius: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center'
                  }}>
                    <div style={{ 
                      marginBottom: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <img
                        src={solarModuleIcon}
                        alt="태양광 모듈"
                        style={{ 
                          width: '56px',
                          height: '56px',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                    <h4 style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '20px',
                      fontWeight: '700',
                      color: '#273b82',
                      marginBottom: '8px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      SOLAR MODULE
                    </h4>
                    <p style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '16px',
                      fontWeight: '500',
                      color: '#6B7280',
                      marginBottom: '16px'
                    }}>
                      태양광 모듈
                    </p>
                    <p style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '16px',
                      fontWeight: '400',
                      color: '#6B7280',
                      lineHeight: '1.6',
                      margin: 0
                    }}>
                      태양광 시장을 혁신하고자 하는 타이런트의 의지
                    </p>
                  </div>

                  {/* Card 3 */}
                  <div style={{
                    background: '#F7F8FA',
                    padding: '40px',
                    borderRadius: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center'
                  }}>
                    <div style={{ 
                      marginBottom: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <img
                        src={tyrantShield}
                        alt="방패"
                        style={{ 
                          width: '56px',
                          height: '56px',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                    <h4 style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '20px',
                      fontWeight: '700',
                      color: '#273b82',
                      marginBottom: '8px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      EARTH SHIELD
                    </h4>
                    <p style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '16px',
                      fontWeight: '500',
                      color: '#6B7280',
                      marginBottom: '16px'
                    }}>
                      방패
                    </p>
                    <p style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '16px',
                      fontWeight: '400',
                      color: '#6B7280',
                      lineHeight: '1.6',
                      margin: 0
                    }}>
                      지구 보호와 기업의 지속 가능한 성장을 상징
                    </p>
                  </div>
                </div>

                {/* 심볼 해석 - 간결한 노트 스타일 */}
                <div style={{ 
                  marginTop: '60px',
                  padding: '20px',
                  background: '#F8F9FB',
                  borderLeft: '3px solid #273b82'
                }}>
                  <p style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '15px',
                    fontWeight: '400',
                    color: '#6B7280',
                    lineHeight: '1.7',
                    margin: 0
                  }}>
                    * 타이런트의 심볼은 왕관·방패, 태양광 모듈과 지구 형상을 결합해 에너지 리더십과 지속가능성, 지구 보호 의지를 시각적으로 표현한 상징입니다.
                  </p>
                </div>
              </div>

              {/* 3. 브랜드 컬러 */}
              <div style={{ marginBottom: '160px' }}>
                <h3 style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '48px',
                  fontWeight: '700',
                  color: '#1B2B55',
                  marginBottom: '20px',
                  textAlign: 'left'
                }}>
                  색상 규정
                </h3>
                <p style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '18px',
                  fontWeight: '400',
                  color: '#6B7280',
                  marginBottom: '40px',
                  lineHeight: '1.6'
                }}>
                  타이런트 심볼은 아래 두 가지 컬러를 기본으로 구성되며, 사용 환경에 따라 단색 또는 보조 색상 적용이 가능합니다.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {/* Color 1 */}
                  <div>
                    <div style={{
                      background: '#263b82',
                      height: '120px',
                      borderRadius: '0px',
                      marginBottom: '16px',
                      border: '1px solid #E5E7EB'
                    }}></div>
                    <p style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#1B2B55',
                      marginBottom: '4px'
                    }}>
                      Primary Navy
                    </p>
                    <p style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '13px',
                      fontWeight: '400',
                      color: '#6B7280',
                      margin: 0
                    }}>
                      #263b82
                    </p>
                  </div>

                  {/* Color 2 */}
                  <div>
                    <div style={{
                      background: '#d7442a',
                      height: '120px',
                      borderRadius: '0px',
                      marginBottom: '16px',
                      border: '1px solid #E5E7EB'
                    }}></div>
                    <p style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#1B2B55',
                      marginBottom: '4px'
                    }}>
                      Point Red
                    </p>
                    <p style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '13px',
                      fontWeight: '400',
                      color: '#6B7280',
                      margin: 0
                    }}>
                      #d7442a
                    </p>
                  </div>
                </div>
              </div>

              {/* 4. 로고타입 */}
              <div>
                <h3 style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '48px',
                  fontWeight: '700',
                  color: '#1B2B55',
                  marginBottom: '16px',
                  textAlign: 'left'
                }}>
                  로고타입
                </h3>
                <p style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '18px',
                  fontWeight: '400',
                  color: '#6B7280',
                  marginBottom: '48px',
                  lineHeight: '1.6'
                }}>
                  심볼마크와 워드마크는 각각 단독으로 사용이 가능합니다.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* 심볼마크 */}
                  <div style={{
                    background: '#F8F9FB',
                    padding: '50px 40px',
                    borderRadius: '0px',
                    border: '1px solid #E5E7EB',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    minHeight: '280px'
                  }}>
                    <div style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      marginBottom: '24px'
                    }}>
                      <img
                        src={symbolOnly}
                        alt="타이런트 심볼마크"
                        style={{ 
                          maxWidth: '100px',
                          maxHeight: '100px',
                          width: 'auto',
                          height: 'auto',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                    <p style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#4B5563',
                      margin: 0
                    }}>
                      심볼마크
                    </p>
                  </div>

                  {/* 워드마크 */}
                  <div style={{
                    background: '#F8F9FB',
                    padding: '50px 40px',
                    borderRadius: '0px',
                    border: '1px solid #E5E7EB',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    minHeight: '280px'
                  }}>
                    <div style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      marginBottom: '24px'
                    }}>
                      <img
                        src={tyrantCILogo}
                        alt="타이런트 워드마크"
                        style={{ 
                          maxWidth: '180px',
                          maxHeight: '100px',
                          width: 'auto',
                          height: 'auto',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                    <p style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#4B5563',
                      margin: 0
                    }}>
                      워드마크
                    </p>
                  </div>

                  {/* 풀버전 로고 */}
                  <div style={{
                    background: '#F8F9FB',
                    padding: '50px 40px',
                    borderRadius: '0px',
                    border: '1px solid #E5E7EB',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    minHeight: '280px'
                  }}>
                    <div style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      marginBottom: '24px'
                    }}>
                      <img
                        src={logoFull}
                        alt="타이런트 풀버전 로고"
                        style={{ 
                          maxWidth: '180px',
                          maxHeight: '100px',
                          width: 'auto',
                          height: 'auto',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                    <p style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#4B5563',
                      margin: 0
                    }}>
                      풀버전
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* CI Asset Download Section */}
        <section className="relative overflow-hidden" style={{ background: '#FAFBFC', paddingTop: '100px', paddingBottom: '100px' }}>
          <div className="relative mx-auto px-6 md:px-20" style={{ maxWidth: '1280px' }}>
            
            {/* Section Title */}
            <div style={{ marginBottom: '60px', textAlign: 'left' }}>
              <h3 style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '48px',
                fontWeight: '700',
                color: '#1B2B55',
                marginBottom: '12px',
                lineHeight: '1.3'
              }}>
                CI Asset 다운로드
              </h3>
              <p style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '18px',
                fontWeight: '400',
                color: '#6B7280',
                lineHeight: '1.6',
                margin: 0
              }}>
                브랜드 커뮤니케이션을 위한 공식 CI 파일을 제공합니다.
              </p>
            </div>

            {/* Logo Preview and Download Buttons */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left: Logo Preview */}
              <div>
                {/* Color Logo */}
                <div style={{
                  background: '#FFFFFF',
                  padding: '60px',
                  borderRadius: '0px',
                  border: '1px solid #E5E7EB',
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '240px'
                }}>
                  <img
                    src={logoFull}
                    alt="타이런트 컬러 로고"
                    style={{ 
                      maxWidth: '360px',
                      width: '100%',
                      height: 'auto'
                    }}
                  />
                </div>
                <p style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#6B7280',
                  textAlign: 'center',
                  margin: 0
                }}>
                  컬러 로고
                </p>

                {/* Gray Logo */}
                <div style={{
                  background: '#F5F7FA',
                  padding: '60px',
                  borderRadius: '0px',
                  border: '1px solid #E5E7EB',
                  marginTop: '32px',
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '240px'
                }}>
                  <img
                    src={logoGray}
                    alt="타이런트 그레이 로고"
                    style={{ 
                      maxWidth: '360px',
                      width: '100%',
                      height: 'auto'
                    }}
                  />
                </div>
                <p style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#6B7280',
                  textAlign: 'center',
                  margin: 0
                }}>
                  단색 로고
                </p>
              </div>

              {/* Right: Download Buttons */}
              <div style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                <div style={{
                  background: '#FFFFFF',
                  padding: '48px',
                  borderRadius: '0px',
                  border: '1px solid #E5E7EB'
                }}>
                  <h4 style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '24px',
                    fontWeight: '700',
                    color: '#1B2B55',
                    marginBottom: '12px'
                  }}>
                    파일 다운로드
                  </h4>
                  <p style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '15px',
                    fontWeight: '400',
                    color: '#6B7280',
                    lineHeight: '1.6',
                    marginBottom: '36px'
                  }}>
                    타이런트 CI는 브랜드 가이드라인에 따라 사용해야 하며,<br />
                    무단 변형 및 왜곡을 금지합니다.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {/* AI Download Button */}
                    <button
                      onClick={() => handleDownload('AI 파일')}
                      style={{
                        width: '100%',
                        height: '56px',
                        padding: '0 24px',
                        borderRadius: '0px',
                        background: '#263b82',
                        color: '#FFFFFF',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '16px',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px',
                        transition: 'all 0.2s ease',
                        letterSpacing: '0.3px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#152556';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#263b82';
                      }}
                    >
                      <Download size={20} strokeWidth={2} />
                      AI 원본 다운로드
                    </button>

                    {/* PNG Download Button */}
                    <button
                      onClick={() => handleDownload('PNG 파일')}
                      style={{
                        width: '100%',
                        height: '56px',
                        padding: '0 24px',
                        borderRadius: '0px',
                        background: '#FFFFFF',
                        color: '#263b82',
                        border: '2px solid #263b82',
                        cursor: 'pointer',
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '16px',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px',
                        transition: 'all 0.2s ease',
                        letterSpacing: '0.3px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#F5F7FA';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#FFFFFF';
                      }}
                    >
                      <Download size={20} strokeWidth={2} />
                      PNG 파일 다운로드
                    </button>
                  </div>

                  {/* Additional Info */}
                  <div style={{
                    marginTop: '32px',
                    padding: '20px',
                    background: '#F8F9FB',
                    borderRadius: '0px',
                    borderLeft: '3px solid #273b82'
                  }}>
                    <p style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '13px',
                      fontWeight: '500',
                      color: '#6B7280',
                      lineHeight: '1.7',
                      margin: 0
                    }}>
                      <strong style={{ color: '#273b82', fontWeight: '600' }}>파일 포맷 안내</strong><br />
                      AI : 편집 가능한 벡터 파일 (Adobe Illustrator)<br />
                      PNG : 고해상도 투명 배경 이미지 파일
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Financial Highlights Section */}
        <section className="relative overflow-hidden" style={{ background: '#FFFFFF', paddingTop: '120px', paddingBottom: '120px' }}>
          <div className="relative mx-auto px-6 md:px-20" style={{ maxWidth: '1280px' }}>
            
            {/* Section Header */}
            <div style={{ marginBottom: '60px', textAlign: 'left' }}>
              <h2 style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '48px',
                fontWeight: '700',
                color: '#1B2B55',
                marginBottom: '12px',
                lineHeight: '1.3'
              }}>
                재무 하이라이트
              </h2>
              <p style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '16px',
                fontWeight: '500',
                color: '#9CA3AF',
                marginBottom: '16px',
                lineHeight: '1.5',
                letterSpacing: '0.5px'
              }}>
                Financial Highlights
              </p>
              <p style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '18px',
                fontWeight: '400',
                color: '#6B7280',
                lineHeight: '1.6',
                margin: 0,
                maxWidth: '800px'
              }}>
                타이런트의 주요 재무 지표를 연도별로 제공합니다. 수치는 확정 공시 기준에 따라 순차적으로 업데이트됩니다.
              </p>
            </div>

            {/* Financial Table */}
            <div style={{ 
              overflowX: 'auto',
              marginBottom: '24px'
            }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                background: '#FFFFFF',
                border: '1px solid #E5E7EB'
              }}>
                {/* Table Head */}
                <thead>
                  <tr style={{ 
                    background: '#F8F9FB',
                    borderBottom: '2px solid #263b82'
                  }}>
                    <th style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '16px',
                      fontWeight: '700',
                      color: '#1B2B55',
                      textAlign: 'left',
                      padding: '20px 24px',
                      borderRight: '1px solid #E5E7EB'
                    }}>
                      구분
                    </th>
                    <th style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '16px',
                      fontWeight: '700',
                      color: '#1B2B55',
                      textAlign: 'right',
                      padding: '20px 24px',
                      borderRight: '1px solid #E5E7EB'
                    }}>
                      2024
                    </th>
                    <th style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '16px',
                      fontWeight: '700',
                      color: '#1B2B55',
                      textAlign: 'right',
                      padding: '20px 24px',
                      borderRight: '1px solid #E5E7EB'
                    }}>
                      2025
                    </th>
                    <th style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '16px',
                      fontWeight: '700',
                      color: '#1B2B55',
                      textAlign: 'right',
                      padding: '20px 24px'
                    }}>
                      2026<span style={{ 
                        fontSize: '13px', 
                        fontWeight: '500',
                        color: '#6B7280',
                        marginLeft: '4px'
                      }}>(예정)</span>
                    </th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                  {/* Row 1: 매출액 */}
                  <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                    <td style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '15px',
                      fontWeight: '600',
                      color: '#374151',
                      padding: '20px 24px',
                      borderRight: '1px solid #E5E7EB',
                      background: '#FAFBFC'
                    }}>
                      매출액
                    </td>
                    <td style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '15px',
                      fontWeight: '500',
                      color: '#4B5563',
                      textAlign: 'right',
                      padding: '20px 24px',
                      borderRight: '1px solid #E5E7EB'
                    }}>
                      -
                    </td>
                    <td style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '15px',
                      fontWeight: '500',
                      color: '#4B5563',
                      textAlign: 'right',
                      padding: '20px 24px',
                      borderRight: '1px solid #E5E7EB'
                    }}>
                      -
                    </td>
                    <td style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '15px',
                      fontWeight: '500',
                      color: '#9CA3AF',
                      textAlign: 'right',
                      padding: '20px 24px'
                    }}>
                      -
                    </td>
                  </tr>

                  {/* Row 2: 영업이익 */}
                  <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                    <td style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '15px',
                      fontWeight: '600',
                      color: '#374151',
                      padding: '20px 24px',
                      borderRight: '1px solid #E5E7EB',
                      background: '#FAFBFC'
                    }}>
                      영업이익
                    </td>
                    <td style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '15px',
                      fontWeight: '500',
                      color: '#4B5563',
                      textAlign: 'right',
                      padding: '20px 24px',
                      borderRight: '1px solid #E5E7EB'
                    }}>
                      -
                    </td>
                    <td style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '15px',
                      fontWeight: '500',
                      color: '#4B5563',
                      textAlign: 'right',
                      padding: '20px 24px',
                      borderRight: '1px solid #E5E7EB'
                    }}>
                      -
                    </td>
                    <td style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '15px',
                      fontWeight: '500',
                      color: '#9CA3AF',
                      textAlign: 'right',
                      padding: '20px 24px'
                    }}>
                      -
                    </td>
                  </tr>

                  {/* Row 3: 자산총계 */}
                  <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                    <td style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '15px',
                      fontWeight: '600',
                      color: '#374151',
                      padding: '20px 24px',
                      borderRight: '1px solid #E5E7EB',
                      background: '#FAFBFC'
                    }}>
                      자산총계
                    </td>
                    <td style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '15px',
                      fontWeight: '500',
                      color: '#4B5563',
                      textAlign: 'right',
                      padding: '20px 24px',
                      borderRight: '1px solid #E5E7EB'
                    }}>
                      -
                    </td>
                    <td style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '15px',
                      fontWeight: '500',
                      color: '#4B5563',
                      textAlign: 'right',
                      padding: '20px 24px',
                      borderRight: '1px solid #E5E7EB'
                    }}>
                      -
                    </td>
                    <td style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '15px',
                      fontWeight: '500',
                      color: '#9CA3AF',
                      textAlign: 'right',
                      padding: '20px 24px'
                    }}>
                      -
                    </td>
                  </tr>

                  {/* Row 4: 부채총계 */}
                  <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                    <td style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '15px',
                      fontWeight: '600',
                      color: '#374151',
                      padding: '20px 24px',
                      borderRight: '1px solid #E5E7EB',
                      background: '#FAFBFC'
                    }}>
                      부채총계
                    </td>
                    <td style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '15px',
                      fontWeight: '500',
                      color: '#4B5563',
                      textAlign: 'right',
                      padding: '20px 24px',
                      borderRight: '1px solid #E5E7EB'
                    }}>
                      -
                    </td>
                    <td style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '15px',
                      fontWeight: '500',
                      color: '#4B5563',
                      textAlign: 'right',
                      padding: '20px 24px',
                      borderRight: '1px solid #E5E7EB'
                    }}>
                      -
                    </td>
                    <td style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '15px',
                      fontWeight: '500',
                      color: '#9CA3AF',
                      textAlign: 'right',
                      padding: '20px 24px'
                    }}>
                      -
                    </td>
                  </tr>

                  {/* Row 5: 자본총계 */}
                  <tr>
                    <td style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '15px',
                      fontWeight: '600',
                      color: '#374151',
                      padding: '20px 24px',
                      borderRight: '1px solid #E5E7EB',
                      background: '#FAFBFC'
                    }}>
                      자본총계
                    </td>
                    <td style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '15px',
                      fontWeight: '500',
                      color: '#4B5563',
                      textAlign: 'right',
                      padding: '20px 24px',
                      borderRight: '1px solid #E5E7EB'
                    }}>
                      -
                    </td>
                    <td style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '15px',
                      fontWeight: '500',
                      color: '#4B5563',
                      textAlign: 'right',
                      padding: '20px 24px',
                      borderRight: '1px solid #E5E7EB'
                    }}>
                      -
                    </td>
                    <td style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '15px',
                      fontWeight: '500',
                      color: '#9CA3AF',
                      textAlign: 'right',
                      padding: '20px 24px'
                    }}>
                      -
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Notice */}
            <div style={{
              padding: '16px 20px',
              background: '#F8F9FB',
              borderLeft: '3px solid #263b82',
              marginTop: '24px'
            }}>
              <p style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '14px',
                fontWeight: '500',
                color: '#6B7280',
                margin: 0,
                lineHeight: '1.6'
              }}>
                ※ 수치는 공시 확정 후 순차적으로 업데이트 됩니다.
              </p>
            </div>

            {/* Additional Info Box */}
            <div style={{
              marginTop: '40px',
              padding: '32px',
              background: '#FAFBFC',
              border: '1px solid #E5E7EB',
              borderRadius: '0px'
            }}>
              <h4 style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '18px',
                fontWeight: '700',
                color: '#1B2B55',
                marginBottom: '12px'
              }}>
                단위 안내
              </h4>
              <p style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '15px',
                fontWeight: '400',
                color: '#6B7280',
                lineHeight: '1.6',
                margin: 0
              }}>
                모든 재무 수치는 백만 원(million KRW) 단위로 표시됩니다.<br />
                상세한 재무 정보는 공시 자료를 통해 확인하실 수 있습니다.
              </p>
            </div>

          </div>
        </section>

      </motion.div>
    </div>
  );
}