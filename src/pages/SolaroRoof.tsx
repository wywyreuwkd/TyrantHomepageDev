import { Header } from '../components/Header';
import { PageHero } from '../components/PageHero';
import { ScrollReveal } from '../components/ScrollReveal';
import { Check } from 'lucide-react';
import { useState } from 'react';
import structureImage from 'figma:asset/5ca6da501976960e09f4dc2ff5a5e103a35146da.png';
import waterproofImage from 'figma:asset/0c52578c9b5b1614c9a4b2d46c9acf92eeeccee1.png';
import reinforcementImage from 'figma:asset/bdb546d80da64e6495df9f8a73f39225c6594b6a.png';
import flexibleImage from 'figma:asset/3c64395cc2f8307a58b1dbe9217e0824f158c6c2.png';
import metalRoofDiagram from 'figma:asset/893312c9e7e5bde722201671a01eb059e1a00933.png';
import installStep01 from 'figma:asset/16f18ece8335085a63d0cb2e0d8fc6d2836772dd.png';
import installStep02 from 'figma:asset/d84017b3fbeebe24db191f70cfe9e0508e6465dc.png';
import installStep03 from 'figma:asset/211d0471ce7abe7ea785e5d4fba8670d9564947c.png';
import installStep04 from 'figma:asset/08cb4ebdd438cf86b1bdd81df0fc67d0081a97a5.png';
import installStep05 from 'figma:asset/a9f62103dab39a964c008d1f63af1a2bcdf7cac1.png';
import installStep06 from 'figma:asset/08822bc43a2fd79389401046e43fec43d1bf451a.png';
import installStep07 from 'figma:asset/48061338755cc0084d622303ec364c569375b0fd.png';
import installStep08 from 'figma:asset/77cc9ad5c9a7fb5a2872bbb2f56473e66d90eb98.png';
import installRow1 from 'figma:asset/aaa153a04f6f9b3c834e29a90c970b440843554a.png';
import installRow2 from 'figma:asset/9c33c20461abb6864339f4c5b6d9cbbbb6957a8b.png';

interface SolaroRoofProps {
  onNavigate: (page: "home" | "company" | "group" | "history" | "partners" | 
    "business-fs" | "business-development" | "business-materials" | 
    "business-construction" | "business-investment" | "business-monitoring" | 
    "business-insurance" | "business-duediligence" | "business-datacenter" | 
    "business-education" | "solaro-roof" | "location" | "sitemap" | "related-sites") => void;
  currentPage: string;
}

export default function SolaroRoof({ onNavigate, currentPage }: SolaroRoofProps) {
  const [activeTab, setActiveTab] = useState(0);

  const technicalSpecs = [
    {
      id: 0,
      title: '경량화 / 폴입강도 / 응력분산',
      description: '구조물 중량 최소화 및 응력 균등 분산 설계',
      image: structureImage,
      details: '구조물 중량 및 지붕 재료 손상률 최소화'
    },
    {
      id: 1,
      title: '방수력 / 구조강도 / 지붕보호',
      description: '완벽한 방수 시스템과 고강도 구조 설계',
      image: waterproofImage,
      details: '하중(공작물) 분산 및 방수 최적화'
    },
    {
      id: 2,
      title: '설치환경에 따라 보강시공',
      description: '다양한 환경에 최적화된 맞춤형 시공 방식',
      image: reinforcementImage,
      details: '구조물 안정성 높여주는 고강도 설계'
    },
    {
      id: 3,
      title: '지붕재료에 따라 유연한 시공',
      description: '모든 지붕 재질에 호환 가능한 유연한 설치 시스템',
      image: flexibleImage,
      details: '투포탑 태양광에 최적화된 방식'
    }
  ];

  const installations = [
    {
      image: installStep01,
      title: '(특허) 레일(Rail) 시공',
      subtitle: 'Rail Installation',
      description: '내식성이 우수한 재질 사용으로 장기간 안정적인 시스템 구축',
      badge: 'STEP 01'
    },
    {
      image: installStep02,
      title: '100 × 100 포스트(Post) 기초',
      subtitle: 'Post Foundation',
      description: 'Layer 추가로 인한 방수력 증가 및 구조 안정성 강화',
      badge: 'STEP 02'
    },
    {
      image: installStep03,
      title: 'SUS Bolt / Zinc Plate Bolt',
      subtitle: 'Premium Hardware',
      description: '방수 최적화와 고강도 체결로 안정성 강화',
      badge: 'STEP 03'
    },
    {
      image: installStep04,
      title: '퍼린(Purlin), 거더(Girder)',
      subtitle: 'Structural Framework',
      description: '단일 시공 대비 4배 저렴한 시공비로 경제성 극대화',
      badge: 'STEP 04'
    },
    {
      image: installStep05,
      title: '태양광 모듈설치',
      subtitle: 'Solar Module Installation',
      description: '고효율 태양광 모듈 설치로 최대 발전량 확보',
      badge: 'STEP 05'
    },
    {
      image: installStep06,
      title: '3차 방수 커버 설치',
      subtitle: 'Waterproof System',
      description: '완벽한 3차 방수 시스템으로 누수 걱정 제로',
      badge: 'STEP 06'
    },
    {
      image: installStep07,
      title: '남측 설치전경',
      subtitle: 'South Installation',
      description: '최적화된 발전 효율을 위한 남측 배치 완료',
      badge: 'STEP 07'
    },
    {
      image: installStep08,
      title: '북측 설치전경',
      subtitle: 'North Installation',
      description: '전체 지붕 활용 극대화로 수익성 향상',
      badge: 'STEP 08'
    }
  ];

  return (
    <div style={{ fontFamily: 'Pretendard, sans-serif' }}>
      <Header onNavigate={onNavigate} currentPage={currentPage} />
      
      {/* Hero Section */}
      <PageHero 
        badge={{
          text: '태양광 상품소개',
          color: '#F15A2A'
        }}
        title="솔라오 (지붕)"
        description="건물주 부담 없는 무상설치, 수익은 함께 나누는 지붕 태양광"
      />

      {/* Introduction Section - 대기업 스타일 */}
      <section className="bg-white py-15 md:py-30">
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <ScrollReveal>
            <div className="text-left mb-12 md:mb-20">
              {/* 상단 라벨 */}
              <div className="inline-block mb-8 px-6 py-2" style={{ 
                backgroundColor: '#FF6A39', 
                borderRadius: '100px'
              }}>
                <span style={{ 
                  color: 'white', 
                  fontSize: '16px', 
                  fontWeight: '700'
                }}>
                  참고자료
                </span>
              </div>
              
              {/* 메인 타이틀 */}
              <h2 
                className="mb-6" 
                style={{ 
                  fontSize: '44px', 
                  fontWeight: '700', 
                  lineHeight: '140%',
                  textAlign: 'left'
                }}
              >
                <span style={{ color: '#0C2C57' }}>EPC 솔루션 | 지붕 방수 </span>
                <span style={{ color: '#8C8C8C' }}>(1/2)</span>
              </h2>
              
              {/* 서브 카피 */}
              <p 
                style={{ 
                  fontSize: '20px', 
                  lineHeight: '150%', 
                  color: '#666',
                  fontWeight: '500',
                  textAlign: 'left',
                  wordBreak: 'keep-all',
                  maxWidth: '900px'
                }}
              >
                지붕방수 솔루션 [RRI 공법(Roof-top Rail Installation)] 특허출원
              </p>
            </div>
          </ScrollReveal>

          {/* Tab Navigation - 대기업 스타일 버튼 */}
          <div className="flex flex-col md:flex-row md:flex-wrap gap-3 md:gap-4 mb-12">
            {technicalSpecs.map((spec) => (
              <button
                key={spec.id}
                onClick={() => setActiveTab(spec.id)}
                className="transition-all duration-300 w-full md:w-auto"
                style={{
                  backgroundColor: activeTab === spec.id ? 'white' : '#F8F9FA',
                  border: `2px solid ${activeTab === spec.id ? '#FF6A39' : '#E5E7EB'}`,
                  color: activeTab === spec.id ? '#FF6A39' : '#666',
                  fontWeight: '700',
                  fontSize: window.innerWidth < 768 ? '20px' : '18px',
                  borderRadius: '12px',
                  padding: window.innerWidth < 768 ? '20px 24px' : '18px 36px',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  boxShadow: activeTab === spec.id 
                    ? '0 4px 16px rgba(255, 106, 57, 0.15), 0 2px 8px rgba(0, 0, 0, 0.06)' 
                    : '0 2px 8px rgba(0, 0, 0, 0.04)',
                  transform: activeTab === spec.id ? 'translateY(-2px)' : 'translateY(0)'
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== spec.id) {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== spec.id) {
                    e.currentTarget.style.backgroundColor = '#F8F9FA';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                기술사양 {String(spec.id + 1).padStart(2, '0')}
              </button>
            ))}
          </div>

          {/* Main Content Card - 대기업 스타일 */}
          <div 
            className="bg-white rounded-2xl overflow-hidden mb-20"
            style={{ 
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)'
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left: Image Area */}
              <div className="bg-[#F8F9FA] p-6 md:p-16 flex items-center justify-center">
                <div className="w-full max-w-[500px]">
                  <div 
                    className="bg-white rounded-2xl p-4 md:p-10"
                    style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)' }}
                  >
                    <img 
                      src={technicalSpecs[activeTab].image}
                      alt={technicalSpecs[activeTab].title}
                      className="w-full h-auto transition-opacity duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Right: Content Area */}
              <div className="bg-white p-6 md:p-16 flex flex-col justify-center">
                <div className="space-y-8">
                  {/* Badge */}
                  <div 
                    className="inline-flex items-center gap-2 px-5 py-2.5"
                    style={{ 
                      backgroundColor: '#0F214A', 
                      borderRadius: '100px',
                      width: 'fit-content'
                    }}
                  >
                    <span style={{ 
                      color: 'white', 
                      fontSize: '15px', 
                      fontWeight: '700',
                      letterSpacing: '0.3px'
                    }}>
                      ● 기술 사양 {String(activeTab + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <div>
                    <h3 
                      style={{ 
                        fontSize: 'clamp(28px, 4vw, 38px)', 
                        fontWeight: '700',
                        lineHeight: '140%',
                        letterSpacing: '-0.01em',
                        color: '#0C2C57',
                        marginBottom: '16px'
                      }}
                    >
                      {technicalSpecs[activeTab].title}
                    </h3>
                    
                    <p 
                      style={{ 
                        fontSize: '18px', 
                        lineHeight: '165%',
                        fontWeight: '500',
                        color: '#666'
                      }}
                    >
                      {technicalSpecs[activeTab].description}
                    </p>
                  </div>

                  {/* Feature Box - 대기업 스타일 */}
                  <div 
                    className="p-6 rounded-2xl"
                    style={{ 
                      backgroundColor: '#F0F4F8',
                      border: '1px solid #D8E1E9'
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: '#0F214A' }}
                        >
                          <Check size={18} color="white" strokeWidth={3} />
                        </div>
                      </div>
                      <p style={{ 
                        color: '#0C2C57', 
                        fontSize: '18px', 
                        lineHeight: '165%',
                        fontWeight: '600'
                      }}>
                        {technicalSpecs[activeTab].details}
                      </p>
                    </div>
                  </div>

                  {/* Navigation Dots */}
                  <div className="flex items-center gap-3 pt-4">
                    {technicalSpecs.map((spec) => (
                      <button
                        key={spec.id}
                        onClick={() => setActiveTab(spec.id)}
                        className="transition-all duration-300"
                        style={{
                          width: activeTab === spec.id ? '32px' : '10px',
                          height: '10px',
                          borderRadius: '100px',
                          backgroundColor: activeTab === spec.id ? '#0F214A' : '#D1D5DB',
                          border: 'none',
                          cursor: 'pointer'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Features - 대기업 스타일 */}
          <ScrollReveal>
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  '구조물 중량 및 지붕 재료 손상률 최소화',
                  '하중(공작물) 분산 및 방수 최적화',
                  '구조물 안정성 높여주는 고강도 설계',
                  '루프탑 태양광에 최적화된 방식'
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-5 p-8 bg-white rounded-2xl"
                    style={{ 
                      border: '1px solid #E5E7EB',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                    }}
                  >
                    <div 
                      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: '#0F214A' }}
                    >
                      <Check size={22} color="white" strokeWidth={3} />
                    </div>
                    <p style={{ 
                      fontSize: '19px', 
                      fontWeight: '600',
                      color: '#0C2C57',
                      lineHeight: '140%'
                    }}>
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* Technical Details Card */}
              <div 
                className="bg-white rounded-2xl overflow-hidden mt-12"
                style={{ 
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)'
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Left: Image */}
                  <div className="bg-[#F8F9FA] p-12 md:p-16 flex items-center justify-center">
                    <div className="w-full max-w-[450px]">
                      <div 
                        className="bg-white rounded-2xl p-8"
                        style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)' }}
                      >
                        <img 
                          src={metalRoofDiagram} 
                          alt="금속 지붕 단면 구조 및 사양"
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right: Features List */}
                  <div className="bg-white p-10 md:p-16 flex flex-col justify-center">
                    <div className="space-y-8">
                      <div 
                        className="inline-block px-5 py-2" 
                        style={{ 
                          backgroundColor: '#FFF5EF', 
                          borderRadius: '100px',
                          border: '1px solid #FFE5DD',
                          width: 'fit-content'
                        }}
                      >
                        <span style={{ 
                          color: '#FF6A39', 
                          fontSize: '15px', 
                          fontWeight: '700',
                          letterSpacing: '0.3px'
                        }}>
                          주요 특징
                        </span>
                      </div>

                      <div className="space-y-6">
                        {[
                          '내식성이 우수한 재질',
                          'Layer 추가로 인한 방수력 증가',
                          '양면 모듈에 유리한 반사율 증가효과 (수익증가)',
                          '단일 시공의 4배 대비 저렴한 시공비'
                        ].map((feature, index) => (
                          <div key={index} className="flex items-start gap-4">
                            <div className="flex-shrink-0 mt-2">
                              <div 
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: '#FF6A39' }}
                              />
                            </div>
                            <p style={{ 
                              fontSize: '18px', 
                              lineHeight: '165%',
                              color: '#0C2C57',
                              fontWeight: '500'
                            }}>
                              {feature}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Bottom Label */}
                      <div 
                        className="pt-8"
                        style={{ borderTop: '1px solid #E5E7EB' }}
                      >
                        <p style={{
                          fontSize: '20px',
                          fontWeight: '700',
                          color: '#0C2C57',
                          textAlign: 'left',
                          lineHeight: '140%'
                        }}>
                          포스맥 재질 판넬 닷댐 방수시공
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Installation Process Section - 대기업 스타일 */}
      <section className="bg-[#F8F9FA] py-15 md:py-30">
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <ScrollReveal>
            <div className="text-left mb-16 md:mb-20">
              {/* 상단 라벨 */}
              <div className="inline-block mb-8 px-6 py-2" style={{ 
                backgroundColor: '#FF6A39', 
                borderRadius: '100px'
              }}>
                <span style={{ 
                  color: 'white', 
                  fontSize: '16px', 
                  fontWeight: '700'
                }}>
                  참고자료
                </span>
              </div>
              
              {/* 메인 타이틀 */}
              <h2 
                className="mb-6" 
                style={{ 
                  fontSize: '44px', 
                  fontWeight: '700', 
                  lineHeight: '140%',
                  textAlign: 'left'
                }}
              >
                <span style={{ color: '#0C2C57' }}>EPC 솔루션 | 지붕 방수 </span>
                <span style={{ color: '#8C8C8C' }}>(2/2)</span>
              </h2>
              
              {/* 서브 카피 */}
              <p 
                style={{ 
                  fontSize: '20px', 
                  lineHeight: '150%', 
                  color: '#666',
                  fontWeight: '500',
                  textAlign: 'left',
                  wordBreak: 'keep-all',
                  maxWidth: '900px'
                }}
              >
                지붕방수 솔루션 [RRI 공법(Roof-top Rail Installation)] 특허출원
              </p>
            </div>
          </ScrollReveal>

          {/* Installation Grid - 대기업 스타일 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {installations.map((installation, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <div 
                  className="bg-white overflow-hidden transition-all duration-300 group"
                  style={{ 
                    borderRadius: '16px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
                    border: '1px solid #E5E7EB'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.06)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden" style={{ height: '220px' }}>
                    <img 
                      src={installation.image} 
                      alt={installation.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content Container */}
                  <div style={{ padding: '24px' }}>
                    <p 
                      style={{ 
                        fontSize: '13px', 
                        color: '#FF6A39',
                        fontWeight: '600',
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase',
                        marginBottom: '8px'
                      }}
                    >
                      {installation.subtitle}
                    </p>
                    <h3 
                      style={{ 
                        fontSize: 'clamp(18px, 3.5vw, 22px)', 
                        fontWeight: '700', 
                        lineHeight: '140%',
                        letterSpacing: '-0.01em',
                        color: '#0C2C57',
                        marginBottom: '12px'
                      }}
                    >
                      {installation.title}
                    </h3>
                    <p 
                      style={{ 
                        fontSize: '15px', 
                        lineHeight: '165%', 
                        color: '#666',
                        fontWeight: '400'
                      }}
                    >
                      {installation.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}