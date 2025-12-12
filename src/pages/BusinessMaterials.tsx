import { Package, Shield, TrendingDown, Zap, CheckCircle2, Star, Award, Clock, Download, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { SubNavigation } from "../components/SubNavigation";
import { PageHero } from "../components/PageHero";
import { ScrollReveal } from "../components/ScrollReveal";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface BusinessMaterialsProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function BusinessMaterials({ onNavigate, currentPage }: BusinessMaterialsProps) {
  const productModules = [
    {
      name: "High Efficiency 모듈",
      model: "HE-650W",
      power: "650",
      efficiency: "22.5",
      image: "https://images.unsplash.com/photo-1723177548474-b58ada59986b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwbW9kdWxlfGVufDF8fHx8MTc2MzQzNjIyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["N-Type 셀 적용", "양면발전 가능", "25년 출력보증"]
    },
    {
      name: "Standard 모듈",
      model: "ST-550W",
      power: "550",
      efficiency: "21.2",
      image: "https://images.unsplash.com/photo-1723177548474-b58ada59986b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwbW9kdWxlfGVufDF8fHx8MTc2MzQzNjIyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["PERC 기술", "고내구성", "20년 출력보증"]
    },
    {
      name: "Premium 모듈",
      model: "PR-700W",
      power: "700",
      efficiency: "23.1",
      image: "https://images.unsplash.com/photo-1723177548474-b58ada59986b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwbW9kdWxlfGVufDF8fHx8MTc2MzQzNjIyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["최신 TOPCon 기술", "저온계수 우수", "30년 출력보증"]
    }
  ];

  const supplyProjects = [
    {
      title: "인천 물류센터",
      capacity: "3.2MW",
      location: "인천광역시",
      year: "2024",
      image: "https://images.unsplash.com/photo-1723177548474-b58ada59986b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc29sYXIlMjBwYW5lbHN8ZW58MXx8fHwxNzYzMzk1Njg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "김포 산업단지",
      capacity: "5.8MW",
      location: "경기도 김포시",
      year: "2024",
      image: "https://images.unsplash.com/photo-1626793369994-a904d2462888?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGluc3RhbGxhdGlvbiUyMHByb2plY3R8ZW58MXx8fHwxNzYzNDM2MjMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "평택 제조공장",
      capacity: "2.1MW",
      location: "경기도 평택시",
      year: "2023",
      image: "https://images.unsplash.com/photo-1612045224533-7a6c7e8a49ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwZmFjdG9yeXxlbnwxfHx8fDE3NjM0MzYyMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const partners = [
    { name: "한화큐셀", category: "태양광 모듈" },
    { name: "LG전자", category: "태양광 모듈" },
    { name: "신성이엔지", category: "태양광 모듈" },
    { name: "SMA", category: "인버터" },
    { name: "Huawei", category: "인버터" },
    { name: "LS일렉트릭", category: "인버터" }
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <PageHero
        badge={{ text: "사업영역", color: "#FF6B3D" }}
        title="태양광 기자재 공급"
        description="검증된 A급 제조사의 고품질 태양광 자재를 합리적인 가격으로 공급합니다."
      />

      {/* Sub Navigation */}
      <SubNavigation category="business" currentPage={currentPage} onNavigate={onNavigate} />

      {/* Big Intro Section with Image */}
      <section style={{ background: '#F7FAFD', padding: '0', position: 'relative', overflow: 'hidden' }}>
        <div className="grid lg:grid-cols-2" style={{ minHeight: '600px' }}>
          {/* Left - Image */}
          <div style={{ position: 'relative', minHeight: '500px' }}>
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1612045224533-7a6c7e8a49ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwZmFjdG9yeXxlbnwxfHx8fDE3NjM0MzYyMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Solar Panel Factory"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                top: 0,
                left: 0
              }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(15, 33, 74, 0.7), transparent)'
            }} />
          </div>

          {/* Right - Content */}
          <div className="flex items-center px-6 md:px-16 py-16">
            <div>
              <div 
                className="inline-block px-4 py-2 mb-6"
                style={{
                  background: 'rgba(255, 107, 61, 0.1)',
                  border: '1px solid rgba(255, 107, 61, 0.3)',
                  borderRadius: '100px'
                }}
              >
                <span style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#FF6B3D'
                }}>
                  SOLAR MATERIALS
                </span>
              </div>

              <h2 
                className="mb-6"
                style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '48px',
                  fontWeight: '700',
                  lineHeight: '1.4',
                  color: '#0F214A'
                }}
              >
                품질경쟁력과<br />
                가격경쟁력을 모두
              </h2>

              <p 
                className="mb-10"
                style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '16px',
                  lineHeight: '1.5',
                  color: '#666'
                }}
              >
                국내외 검증된 A급 제조사와의 직접 계약을 통해 중간 마진을 최소화하고, 
                최고 품질의 태양광 기자재를 합리적인 가격으로 공급합니다.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Package, label: "공급 용량", value: "100MW+" },
                  { icon: Award, label: "제조사", value: "10+" },
                  { icon: Clock, label: "평균 납기", value: "7일" }
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="text-center p-5"
                    style={{
                      background: 'white',
                      border: '1px solid rgba(15, 33, 74, 0.1)',
                      borderRadius: '16px'
                    }}
                  >
                    <div className="flex justify-center mb-2">
                      <stat.icon size={24} style={{ color: '#FF6B3D' }} />
                    </div>
                    <div 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '20px',
                        fontWeight: '500',
                        color: '#0F214A',
                        marginBottom: '4px'
                      }}
                    >
                      {stat.value}
                    </div>
                    <div 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '12px',
                        color: '#666'
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Modules Section - Similar to First Image */}
      <section style={{ background: '#0F214A', padding: '120px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1400px' }}>
          <div className="text-center mb-20">
            <div 
              className="inline-block px-4 py-2 mb-6"
              style={{
                background: 'rgba(255, 107, 61, 0.15)',
                border: '1px solid rgba(255, 107, 61, 0.3)',
                borderRadius: '100px'
              }}
            >
              <span style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '14px',
                fontWeight: '700',
                color: '#FF6B3D',
                letterSpacing: '1px'
              }}>
                PRODUCT LINEUP
              </span>
            </div>

            <h2 
              className="text-white mb-4"
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '48px',
                fontWeight: '700',
                lineHeight: '1.4'
              }}
            >
              태양광 모듈 라인업
            </h2>

            <p 
              className="text-white/80"
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '16px',
                lineHeight: '1.5'
              }}
            >
              고효율 · 고출력 · 고신뢰성 태양광 모듈을 공급합니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-0">
            {productModules.map((product, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up">
                <div 
                  className="group"
                  style={{
                    background: '#F7FAFD',
                    borderRight: index < 2 ? '1px solid rgba(15, 33, 74, 0.1)' : 'none',
                    padding: '60px 40px',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'white';
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 24px 48px rgba(15, 33, 74, 0.2)';
                    e.currentTarget.style.zIndex = '10';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#F7FAFD';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.zIndex = '1';
                  }}
                >
                  {/* Product Image Placeholder */}
                  <div 
                    className="mb-8 mx-auto flex items-center justify-center"
                    style={{
                      width: '200px',
                      height: '200px',
                      background: 'linear-gradient(135deg, rgba(15, 33, 74, 0.05), rgba(15, 33, 74, 0.02))',
                      borderRadius: '20px',
                      border: '2px solid rgba(15, 33, 74, 0.1)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    {/* Solar panel grid illustration */}
                    <div className="absolute inset-0 grid grid-cols-4 gap-1 p-4">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div 
                          key={i} 
                          style={{
                            background: 'rgba(15, 33, 74, 0.1)',
                            borderRadius: '4px'
                          }}
                        />
                      ))}
                    </div>
                    <Package size={48} style={{ color: '#0F214A', opacity: 0.2, zIndex: 1 }} />
                  </div>

                  <h3 
                    className="text-center mb-3"
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '24px',
                      fontWeight: '600',
                      color: '#0F214A'
                    }}
                  >
                    {product.model}
                  </h3>

                  <p 
                    className="text-center mb-6"
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '14px',
                      color: '#666'
                    }}
                  >
                    {product.name}
                  </p>

                  {/* Specs */}
                  <div className="space-y-4 mb-6">
                    <div className="text-center">
                      <div 
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '12px',
                          color: '#666',
                          marginBottom: '4px'
                        }}
                      >
                        출력
                      </div>
                      <div 
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '32px',
                          fontWeight: '700',
                          color: '#0F214A'
                        }}
                      >
                        {product.power}<span style={{ fontSize: '18px', fontWeight: '500' }}>Wp</span>
                      </div>
                    </div>

                    <div className="text-center">
                      <div 
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '12px',
                          color: '#666',
                          marginBottom: '4px'
                        }}
                      >
                        효율
                      </div>
                      <div 
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '32px',
                          fontWeight: '700',
                          color: '#0F214A'
                        }}
                      >
                        {product.efficiency}<span style={{ fontSize: '18px', fontWeight: '500' }}>%</span>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-8">
                    {product.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2">
                        <div style={{
                          width: '4px',
                          height: '4px',
                          background: '#FF6B3D',
                          borderRadius: '50%'
                        }} />
                        <span 
                          style={{
                            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                            fontSize: '14px',
                            color: '#666'
                          }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Download Button */}
                  <button
                    className="w-full flex items-center justify-center gap-2 group/btn"
                    style={{
                      padding: '14px',
                      background: 'white',
                      border: '1px solid rgba(255, 107, 61, 0.3)',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#FF6B3D'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#FF6B3D';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'white';
                      e.currentTarget.style.color = '#FF6B3D';
                    }}
                  >
                    제품 카탈로그
                    <Download size={16} className="group-hover/btn:translate-y-1 transition-transform" />
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Projects - Similar to Second Image */}
      <section style={{ background: '#F7FAFD', padding: '120px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1400px' }}>
          <div className="text-center mb-20">
            <h2 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '48px',
                fontWeight: '700',
                color: '#0F214A',
                lineHeight: '1.4',
                marginBottom: '16px'
              }}
            >
              타이런트 대표 납품실적
            </h2>

            <p 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '16px',
                lineHeight: '1.5',
                color: '#666'
              }}
            >
              품질경쟁력과 가격경쟁력을 갖춘 고효율·고출력·친환경 태양광 모듈
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {supplyProjects.map((project, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up">
                <div
                  className="group cursor-pointer overflow-hidden"
                  style={{
                    background: 'white',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    height: '400px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 24px 48px rgba(15, 33, 74, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Image */}
                  <div style={{ position: 'relative', height: '100%', overflow: 'hidden' }}>
                    <ImageWithFallback 
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                      className="group-hover:scale-110"
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to bottom, transparent 40%, rgba(0, 0, 0, 0.7))'
                    }} />
                    
                    {/* Bottom Left - Capacity and Location */}
                    <div className="absolute bottom-8 left-8">
                      <div 
                        className="text-white mb-2"
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '56px',
                          fontWeight: '700',
                          lineHeight: '1'
                        }}
                      >
                        {project.capacity.replace('MW', '')}<span style={{ fontSize: '24px', fontWeight: '500' }}>MW</span>
                      </div>
                      <div 
                        className="text-white"
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '18px',
                          fontWeight: '500'
                        }}
                      >
                        {project.location}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Slider Indicator */}
          <div className="flex justify-center gap-2">
            {supplyProjects.map((_, index) => (
              <div
                key={index}
                style={{
                  width: index === 0 ? '32px' : '8px',
                  height: '8px',
                  background: index === 0 ? '#0F214A' : 'rgba(15, 33, 74, 0.2)',
                  borderRadius: '100px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.width = '32px';
                  e.currentTarget.style.background = '#0F214A';
                }}
                onMouseLeave={(e) => {
                  if (index !== 0) {
                    e.currentTarget.style.width = '8px';
                    e.currentTarget.style.background = 'rgba(15, 33, 74, 0.2)';
                  }
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Partner Brands */}
      <section style={{ background: '#0F214A', padding: '100px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1400px' }}>
          <div className="text-center mb-16">
            <h2 
              className="text-white mb-4"
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '48px',
                fontWeight: '700',
                lineHeight: '1.4'
              }}
            >
              공급 제조사
            </h2>
            <p 
              className="text-white/80"
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '16px',
                lineHeight: '1.5'
              }}
            >
              국내외 검증된 프리미엄 제조사 제품을 공급합니다
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="text-center p-6"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(255, 107, 61, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <div 
                  className="text-white mb-2"
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '18px',
                    fontWeight: '600'
                  }}
                >
                  {partner.name}
                </div>
                <div 
                  className="text-white/60"
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '12px'
                  }}
                >
                  {partner.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Premium Features */}
      <section style={{ background: 'white', padding: '120px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1400px' }}>
          {/* Top Features with Stars */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: "2021년 기준 태양전지 셀 20GW,",
                subtitle: "모듈 28GW 생산능력 보유"
              },
              {
                title: "고효율·고출력·친환경",
                subtitle: "태양광 모듈"
              },
              {
                title: "라이젠 글리어를 통한",
                subtitle: "현지화 서비스 제공"
              }
            ].map((feature, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up">
                <div className="text-center">
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        size={24} 
                        style={{ 
                          fill: '#FFB800',
                          color: '#FFB800'
                        }} 
                      />
                    ))}
                  </div>
                  
                  <div 
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '18px',
                      fontWeight: '600',
                      color: '#0F214A',
                      lineHeight: '1.5'
                    }}
                  >
                    {feature.title}
                  </div>
                  <div 
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '18px',
                      fontWeight: '600',
                      color: '#0F214A',
                      lineHeight: '1.5'
                    }}
                  >
                    {feature.subtitle}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Main Title */}
          <div className="text-center mb-16">
            <h2 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '48px',
                fontWeight: '700',
                color: '#0F214A',
                lineHeight: '1.4'
              }}
            >
              타이런트 한국 총판 대리점
            </h2>
          </div>

          {/* Three Benefit Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Dark Navy */}
            <ScrollReveal delay={0} direction="up">
              <div
                className="group relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #0F214A 0%, #273b82 100%)',
                  borderRadius: '32px',
                  padding: '48px 40px',
                  minHeight: '400px',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 24px 48px rgba(15, 33, 74, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <h3 
                  className="mb-6"
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '28px',
                    fontWeight: '700',
                    color: 'white',
                    lineHeight: '1.4'
                  }}
                >
                  경쟁력 있는<br />
                  모듈 가격
                </h3>

                {/* Illustration - Chart/Graph */}
                <div className="mt-auto flex justify-center">
                  <div style={{ 
                    width: '180px', 
                    height: '180px',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    gap: '12px',
                    padding: '20px'
                  }}>
                    {/* Simple bar chart illustration */}
                    {[60, 80, 100, 70].map((height, i) => (
                      <div
                        key={i}
                        style={{
                          width: '32px',
                          height: `${height}px`,
                          background: i === 2 
                            ? 'linear-gradient(to top, #FF6B3D, #FF8C3D)' 
                            : 'rgba(255, 255, 255, 0.2)',
                          borderRadius: '8px',
                          transition: 'all 0.3s ease',
                          position: 'relative'
                        }}
                        className="group-hover:scale-110"
                      >
                        {i === 0 && (
                          <div style={{
                            position: 'absolute',
                            top: '-30px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '48px',
                            height: '48px',
                            background: '#FF6B3D',
                            borderRadius: '50%',
                            border: '3px solid white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '24px'
                          }}>
                            🎯
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2 - Medium Navy */}
            <ScrollReveal delay={100} direction="up">
              <div
                className="group relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #15305A 0%, #3B5A8E 100%)',
                  borderRadius: '32px',
                  padding: '48px 40px',
                  minHeight: '400px',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 24px 48px rgba(21, 48, 90, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <h3 
                  className="mb-6"
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '28px',
                    fontWeight: '700',
                    color: 'white',
                    lineHeight: '1.4'
                  }}
                >
                  인기 모듈<br />
                  물량 확보 완료
                </h3>

                {/* Illustration - Solar Panels */}
                <div className="mt-auto flex justify-center">
                  <div style={{ 
                    width: '200px', 
                    height: '180px',
                    position: 'relative',
                    transform: 'perspective(600px) rotateX(15deg)',
                    transition: 'all 0.4s ease'
                  }}
                  className="group-hover:rotateX-0">
                    {/* Solar panel illustration */}
                    <div className="grid grid-cols-3 gap-2">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div
                          key={i}
                          style={{
                            background: 'linear-gradient(135deg, #4A6BA5 0%, #5B7DB8 100%)',
                            borderRadius: '8px',
                            height: '50px',
                            border: '2px solid rgba(255, 255, 255, 0.4)',
                            boxShadow: '0 4px 12px rgba(74, 107, 165, 0.3)',
                            transition: 'all 0.3s ease',
                            transitionDelay: `${i * 50}ms`
                          }}
                          className="group-hover:scale-105"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3 - Light Navy */}
            <ScrollReveal delay={200} direction="up">
              <div
                className="group relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #3B5A8E 0%, #6D8EC9 100%)',
                  borderRadius: '32px',
                  padding: '48px 40px',
                  minHeight: '400px',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 24px 48px rgba(59, 90, 142, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <h3 
                  className="mb-6"
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '28px',
                    fontWeight: '700',
                    color: 'white',
                    lineHeight: '1.4'
                  }}
                >
                  최적의 모듈·인버터<br />
                  조합 추천
                </h3>

                {/* Illustration - Thumbs Up */}
                <div className="mt-auto flex justify-center">
                  <div 
                    style={{ 
                      fontSize: '120px',
                      lineHeight: '1',
                      transition: 'all 0.4s ease'
                    }}
                    className="group-hover:scale-110"
                  >
                    👍
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Similar to Third Image */}
      <section style={{ background: '#F7FAFD', padding: '120px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '800px' }}>
          <div className="text-center mb-16">
            <h2 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '48px',
                fontWeight: '700',
                color: '#0F214A',
                lineHeight: '1.4',
                marginBottom: '16px'
              }}
            >
              태양광 모듈·인버터 문의하기
            </h2>
            <p 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '16px',
                lineHeight: '1.5',
                color: '#666'
              }}
            >
              제품 문의 및 견적 요청을 남겨주시면 빠르게 연락드리겠습니다
            </p>
          </div>

          <div 
            style={{
              background: 'white',
              borderRadius: '32px',
              padding: '60px 50px',
              boxShadow: '0 8px 32px rgba(15, 33, 74, 0.08)'
            }}
          >
            <form className="space-y-6">
              {/* Name and Contact */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="성함"
                    style={{
                      width: '100%',
                      padding: '18px 20px',
                      background: '#F7FAFD',
                      border: '1px solid rgba(15, 33, 74, 0.1)',
                      borderRadius: '12px',
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '16px',
                      color: '#0F214A',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#FF6B3D';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 107, 61, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(15, 33, 74, 0.1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="연락처"
                    style={{
                      width: '100%',
                      padding: '18px 20px',
                      background: '#F7FAFD',
                      border: '1px solid rgba(15, 33, 74, 0.1)',
                      borderRadius: '12px',
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '16px',
                      color: '#0F214A',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#FF6B3D';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 107, 61, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(15, 33, 74, 0.1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <input
                  type="text"
                  placeholder="설치주소"
                  style={{
                    width: '100%',
                    padding: '18px 20px',
                    background: '#F7FAFD',
                    border: '1px solid rgba(15, 33, 74, 0.1)',
                    borderRadius: '12px',
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '16px',
                    color: '#0F214A',
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#FF6B3D';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 107, 61, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(15, 33, 74, 0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  placeholder="문의내용"
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '18px 20px',
                    background: '#F7FAFD',
                    border: '1px solid rgba(15, 33, 74, 0.1)',
                    borderRadius: '12px',
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '16px',
                    color: '#0F214A',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    resize: 'vertical'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#FF6B3D';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 107, 61, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(15, 33, 74, 0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Checkboxes */}
              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    style={{
                      width: '20px',
                      height: '20px',
                      marginTop: '2px',
                      accentColor: '#FF6B3D'
                    }}
                  />
                  <span 
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '14px',
                      color: '#666',
                      lineHeight: '1.5'
                    }}
                  >
                    내용과 무관한 글, 광고성 글을 등록할 시 법적 책임을 받을 수 있습니다.
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    style={{
                      width: '20px',
                      height: '20px',
                      marginTop: '2px',
                      accentColor: '#FF6B3D'
                    }}
                  />
                  <span 
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '14px',
                      color: '#666',
                      lineHeight: '1.5'
                    }}
                  >
                    <a href="#" style={{ color: '#FF6B3D', textDecoration: 'underline' }}>개인정보취급방침</a>에 대한 내용을 읽었으며 이에 동의합니다.
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    style={{
                      width: '20px',
                      height: '20px',
                      marginTop: '2px',
                      accentColor: '#FF6B3D'
                    }}
                  />
                  <span 
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '14px',
                      color: '#666',
                      lineHeight: '1.5',
                      fontWeight: '600'
                    }}
                  >
                    전체동의
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 group"
                style={{
                  padding: '20px',
                  background: '#FF6B3D',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '16px',
                  fontWeight: '600',
                  boxShadow: '0 8px 24px rgba(255, 107, 61, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(255, 107, 61, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 107, 61, 0.3)';
                }}
              >
                문의하기
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}