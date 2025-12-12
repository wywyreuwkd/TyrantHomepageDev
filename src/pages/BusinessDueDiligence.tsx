import { useState } from "react";
import { Eye, Thermometer, Camera, ClipboardCheck, Users, Search, Shield, Award, Building2 } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { PageHero } from "../components/PageHero";
import { SubNavigation } from "../components/SubNavigation";
import { ScrollReveal } from "../components/ScrollReveal";
import partnersImage from "figma:asset/bb8782603cfdcf6f3951d2bd48acf9468428847f.png";
import choiJaeHwangPhoto from "figma:asset/8c54d59690985b36ba345dda0aee00047f4dd155.png";
import hanwhaLogo from "figma:asset/6dd5d990e58ff130a57c6256fa7a5f60c7be0b9d.png";
import certificationPage1 from "figma:asset/e7fba9c5494e4b91adf9812c8606c4b7bc80ca92.png";
import certificationPage2 from "figma:asset/9cdc47de4a24dc0e57bee3d175f533808af1a309.png";
import { HanwhaSystemsCard } from "../components/HanwhaSystemsCard";
import { DaeboCard } from "../components/DaeboCard";
import { PartnersCarousel } from "../components/PartnersCarousel";
import { SimplePartnerCards } from "../components/SimplePartnerCards";

interface BusinessDueDiligenceProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function BusinessDueDiligence({ onNavigate, currentPage }: BusinessDueDiligenceProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const qualityChecks = [
    {
      title: "육안 검사",
      percentage: "97%",
      description: "태양광 모듈의 외관, 변색, 오염 상태를\n육안으로 직접 확인하여 초기 결함을\n신속하게 파악합니다",
      image: "https://images.unsplash.com/photo-1689561800626-cc4f71cd8c7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwaW5zcGVjdGlvbnxlbnwxfHx8fDE3NjM0NDA3Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "열화상 검사",
      percentage: "49%",
      description: "고성능 열화상 카메라로 모듈의 온도 분포를\n측정하여 핫스팟, 셀 손상 등 눈에 보이지\n않는 결함을 정밀 분석합니다",
      image: "https://images.unsplash.com/photo-1616957694627-65afa7668d07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVybWFsJTIwaW1hZ2luZyUyMGNhbWVyYXxlbnwxfHx8fDE3NjMzNzg2ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const inspectionMethods = [
    {
      icon: Eye,
      title: "육안 검사",
      subtitle: "Visual Inspection",
      image: "https://images.unsplash.com/photo-1689561800626-cc4f71cd8c7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwaW5zcGVjdGlvbnxlbnwxfHx8fDE3NjM0NDA3Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Thermometer,
      title: "적외선 검사",
      subtitle: "IR Thermography",
      image: "https://images.unsplash.com/photo-1616957694627-65afa7668d07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVybWFsJTIwaW1hZ2luZyUyMGNhbWVyYXxlbnwxfHx8fDE3NjMzNzg2ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Camera,
      title: "비접촉 측정",
      subtitle: "Non-Contact Test",
      image: "https://images.unsplash.com/photo-1760963301666-582b92218a19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlciUyMGluc3BlY3Rpb24lMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzYzNDQwNzI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: ClipboardCheck,
      title: "외관 검사",
      subtitle: "Appearance Check",
      image: "https://images.unsplash.com/photo-1689561800626-cc4f71cd8c7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwaW5zcGVjdGlvbnxlbnwxfHx8fDE3NjM0NDA3Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const processSteps = [
    {
      icon: Users,
      title: "전문 엔지니어",
      description: "다년간의 현장 경험을 보유한\n전문 엔지니어가 직접 실사를\n진행합니다",
      details: "현장 경험 10년 이상 보유"
    },
    {
      icon: Search,
      title: "첨단 장비 보유",
      description: "최신 드론, 열화상 카메라 등\n정밀 측정 장비로 정확한\n데이터를 수집합니다",
      details: "드론, 열화상 카메라 등 첨단 장비"
    },
    {
      icon: Shield,
      title: "철저한 안전관리",
      description: "산업안전보건법 준수 및\n안전 장비 착용으로 안전한\n작업 환경을 보장합니다",
      details: "산업안전보건법 준수 및 보험 가입"
    }
  ];

  const trackRecord = [
    { category: "상반기", year2022: "7,000", year2023: "8,500" },
    { category: "하반기", year2022: "6,800", year2023: "9,200" },
    { category: "상반기", year2022: "7,500", year2023: "10,300" },
    { category: "하반기", year2022: "8,200", year2023: "11,800" },
    { category: "상반기", year2022: "9,100", year2023: "13,500" },
    { category: "총계", year2022: "38,600 MW", year2023: "53,300 MW" }
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <PageHero
        badge={{ text: "사업영역", color: "#FF6B3D" }}
        title="태양광 기술실사"
        description="전문가의 객관적인 실사로 안전한 투자와 거래를 지원합니다."
      />

      {/* Sub Navigation */}
      <SubNavigation category="business" currentPage={currentPage} onNavigate={onNavigate} />

      {/* Quality Check Statistics */}
      <section style={{ background: 'white', padding: '120px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
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
              태양광 설비 점검으로
            </h2>
            <p 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '16px',
                color: '#666',
                lineHeight: '1.5'
              }}
            >
              정밀한 진단으로 발전소 성능을 최적화합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {qualityChecks.map((check, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up">
                <div 
                  className="group overflow-hidden"
                  style={{
                    background: 'white',
                    borderRadius: '32px',
                    border: '1px solid rgba(15, 33, 74, 0.1)',
                    boxShadow: '0 8px 32px rgba(15, 33, 74, 0.08)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 20px 48px rgba(15, 33, 74, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(15, 33, 74, 0.08)';
                  }}
                >
                  {/* Image */}
                  <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
                    <ImageWithFallback 
                      src={check.image}
                      alt={check.title}
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
                  </div>

                  {/* Content */}
                  <div style={{ padding: '40px' }}>
                    <div 
                      className="mb-6"
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '72px',
                        fontWeight: '700',
                        color: '#FF6B3D',
                        lineHeight: '1'
                      }}
                    >
                      {check.percentage}
                    </div>

                    <h3 
                      className="mb-4"
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '28px',
                        fontWeight: '700',
                        color: '#0F214A',
                        lineHeight: '1.3'
                      }}
                    >
                      {check.title}
                    </h3>

                    <p 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '15px',
                        color: '#666',
                        lineHeight: '1.7',
                        whiteSpace: 'pre-line'
                      }}
                    >
                      {check.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Inspection Methods */}
      <section style={{ background: '#F7FAFD', padding: '120px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
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
              열화 모듈 추출 분석 주변
            </h2>
            <p 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '16px',
                color: '#666',
                lineHeight: '1.5'
              }}
            >
              다양한 검사 방법으로 정밀한 실사를 진행합니다
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {inspectionMethods.map((method, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up">
                <div 
                  className="group text-center"
                  style={{
                    background: 'white',
                    borderRadius: '24px',
                    padding: '32px 24px',
                    border: '1px solid rgba(15, 33, 74, 0.08)',
                    boxShadow: '0 4px 16px rgba(15, 33, 74, 0.04)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(15, 33, 74, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(15, 33, 74, 0.04)';
                  }}
                >
                  {/* Background Image on Hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                    style={{
                      backgroundImage: `url(${method.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />

                  {/* Icon */}
                  <div 
                    className="mx-auto mb-4 relative"
                    style={{
                      width: '80px',
                      height: '80px',
                      background: 'linear-gradient(135deg, #FF6B3D15, #FF8C3D15)',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <method.icon size={40} style={{ color: '#FF6B3D' }} className="group-hover:scale-110 transition-transform" />
                  </div>

                  {/* Title */}
                  <h3 
                    className="mb-2 relative"
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '18px',
                      fontWeight: '700',
                      color: '#0F214A'
                    }}
                  >
                    {method.title}
                  </h3>

                  {/* Subtitle */}
                  <p 
                    className="relative"
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '13px',
                      color: '#999',
                      letterSpacing: '0.5px'
                    }}
                  >
                    {method.subtitle}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section style={{ background: 'white', padding: '120px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
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
              기술실사 업무 프로세스
            </h2>
            <p 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '16px',
                color: '#666',
                lineHeight: '1.5'
              }}
            >
              체계적인 프로세스로 정확한 실사를 제공합니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up">
                <div 
                  className="group text-center"
                  style={{
                    background: index === 1 ? 'linear-gradient(135deg, #0F214A, #273b82)' : 'white',
                    borderRadius: '32px',
                    padding: '48px 32px',
                    border: index === 1 ? 'none' : '1px solid rgba(15, 33, 74, 0.1)',
                    boxShadow: index === 1 ? '0 12px 40px rgba(15, 33, 74, 0.3)' : '0 4px 16px rgba(15, 33, 74, 0.04)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    minHeight: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => {
                    if (index !== 1) {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = '0 12px 32px rgba(15, 33, 74, 0.12)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (index !== 1) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(15, 33, 74, 0.04)';
                    }
                  }}
                >
                  {/* Icon */}
                  <div 
                    className="mx-auto mb-6"
                    style={{
                      width: '100px',
                      height: '100px',
                      background: index === 1 
                        ? 'rgba(255, 107, 61, 0.15)' 
                        : 'linear-gradient(135deg, #0F214A15, #273b8215)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: index === 1 ? '2px solid rgba(255, 107, 61, 0.3)' : 'none'
                    }}
                  >
                    <step.icon size={48} style={{ color: index === 1 ? '#FF6B3D' : '#0F214A' }} />
                  </div>

                  {/* Title */}
                  <h3 
                    className="mb-4"
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '28px',
                      fontWeight: '700',
                      color: index === 1 ? 'white' : '#0F214A',
                      lineHeight: '1.3'
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="mb-6"
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '15px',
                      color: index === 1 ? 'rgba(255, 255, 255, 0.85)' : '#666',
                      lineHeight: '1.7',
                      whiteSpace: 'pre-line'
                    }}
                  >
                    {step.description}
                  </p>

                  {/* Details Badge */}
                  <div 
                    className="inline-block px-5 py-2.5 mx-auto"
                    style={{
                      background: index === 1 ? 'rgba(255, 107, 61, 0.2)' : 'rgba(15, 33, 74, 0.05)',
                      borderRadius: '100px',
                      border: index === 1 ? '1px solid rgba(255, 107, 61, 0.3)' : '1px solid rgba(15, 33, 74, 0.1)'
                    }}
                  >
                    <span 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '13px',
                        fontWeight: '600',
                        color: index === 1 ? '#FFB800' : '#0F214A'
                      }}
                    >
                      {step.details}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project Partners Section */}
      <section style={{ background: 'white', padding: '120px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="mb-16 text-center">
            <div 
              className="inline-block px-5 py-2 mb-4"
              style={{
                background: 'rgba(255, 107, 61, 0.08)',
                borderRadius: '100px',
                border: '2px solid rgba(255, 107, 61, 0.2)'
              }}
            >
              <span 
                style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '14px',
                  fontWeight: '700',
                  color: '#FF6B3D',
                  letterSpacing: '1px'
                }}
              >
                PROJECT PARTNERS
              </span>
            </div>
            <h2 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '40px',
                fontWeight: '700',
                color: '#0F214A',
                lineHeight: '1.4',
                marginBottom: '12px'
              }}
            >
              프로젝트 참여사 소개
            </h2>
            <p 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '15px',
                color: '#666',
                lineHeight: '1.5'
              }}
            >
              타이런트는 산업 선도 기업들과 협업하여<br />
              EPC 및 기술 기반 강화를 통해 안정적인 솔루션을 제공합니다
            </p>
          </div>

          {/* Partners Carousel */}
          <ScrollReveal direction="up" delay={0}>
            <PartnersCarousel />
          </ScrollReveal>
          
          {/* OLD: Partners Cards Grid - REPLACED WITH CAROUSEL */}
          <div className="grid md:grid-cols-3 gap-8" style={{ display: 'none' }}>
            {/* HANGANG ASSET - 최재황 상무 */}
            <ScrollReveal direction="up" delay={0}>
              <div 
                className="group"
                style={{
                  background: 'white',
                  borderRadius: '32px',
                  padding: '0',
                  minHeight: '720px',
                  position: 'relative',
                  overflow: 'hidden',
                  border: '2px solid #0F214A',
                  boxShadow: '0 12px 40px rgba(15, 33, 74, 0.15)',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 56px rgba(15, 33, 74, 0.3)';
                  e.currentTarget.style.borderColor = '#FF6B3D';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(15, 33, 74, 0.15)';
                  e.currentTarget.style.borderColor = '#0F214A';
                }}
              >
                {/* Profile Photo Section */}
                <div style={{ 
                  position: 'relative',
                  height: '280px',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, #0F214A 0%, #273b82 100%)'
                }}>
                  <img 
                    src={choiJaeHwangPhoto} 
                    alt="최재황 상무"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top'
                    }}
                  />
                  {/* Overlay Gradient */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '100px',
                    background: 'linear-gradient(to top, rgba(15, 33, 74, 0.9), transparent)'
                  }} />
                  
                  {/* Name Badge */}
                  <div 
                    style={{
                      position: 'absolute',
                      bottom: '20px',
                      left: '32px',
                      right: '32px'
                    }}
                  >
                    <div 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '28px',
                        fontWeight: '700',
                        color: 'white',
                        marginBottom: '4px'
                      }}
                    >
                      최재황 상무
                    </div>
                    <div 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#FF6B3D',
                        letterSpacing: '1px'
                      }}
                    >
                      HANGANG ASSET
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div style={{ padding: '36px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Main Role */}
                  <div 
                    className="mb-6 p-5"
                    style={{
                      background: '#F7FAFD',
                      borderRadius: '20px',
                      border: '2px solid #0F214A'
                    }}
                  >
                    <div 
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '12px',
                        fontWeight: '600',
                        color: '#FF6B3D',
                        marginBottom: '10px',
                        letterSpacing: '0.5px'
                      }}
                    >
                      MAIN ROLE
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <div 
                          style={{
                            width: '6px',
                            height: '6px',
                            background: '#0F214A',
                            borderRadius: '50%',
                            marginTop: '10px',
                            marginRight: '12px',
                            flexShrink: 0
                          }}
                        />
                        <div 
                          style={{
                            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                            fontSize: '18px',
                            fontWeight: '700',
                            color: '#0F214A',
                            lineHeight: '1.6'
                          }}
                        >
                          신재생에너지 전문 투자사
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div 
                          style={{
                            width: '6px',
                            height: '6px',
                            background: '#0F214A',
                            borderRadius: '50%',
                            marginTop: '10px',
                            marginRight: '12px',
                            flexShrink: 0
                          }}
                        />
                        <div 
                          style={{
                            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                            fontSize: '18px',
                            fontWeight: '700',
                            color: '#0F214A',
                            lineHeight: '1.6'
                          }}
                        >
                          상품 및 투자구조 설계, 자산관리 등
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Education & Certification */}
                  <div className="mb-5">
                    <div 
                      className="flex items-center gap-2 mb-3"
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '14px',
                        fontWeight: '700',
                        color: '#0F214A'
                      }}
                    >
                      <Award size={18} style={{ color: '#FF6B3D' }} />
                      최종학력 / 전문자격
                    </div>
                    <div className="space-y-1.5 pl-7">
                      {['연세대 경영학과', '공인회계사(KICPA)', '전기기사', '전기공사기사', '신재생에너지발전설비기사', '투자자산운용사(금융투자상품, SOC)'].map((item, idx) => (
                        <div key={idx} className="flex items-start">
                          <div 
                            style={{
                              width: '4px',
                              height: '4px',
                              background: '#FF6B3D',
                              borderRadius: '50%',
                              marginTop: '7px',
                              marginRight: '10px',
                              flexShrink: 0
                            }}
                          />
                          <span 
                            style={{
                              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                              fontSize: '13px',
                              color: '#666',
                              lineHeight: '1.5',
                              fontWeight: '500'
                            }}
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Career */}
                  <div className="mb-6">
                    <div 
                      className="flex items-center gap-2 mb-3"
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '14px',
                        fontWeight: '700',
                        color: '#0F214A'
                      }}
                    >
                      <Building2 size={18} style={{ color: '#FF6B3D' }} />
                      주요경력사항
                    </div>
                    <div className="space-y-1.5 pl-7">
                      {[
                        '한화자산운용 인프라사업본부',
                        '한화에너지 태양광 IPP사업팀',
                        '한화큐셀코리아 투자금융팀',
                        'SDN(불가리아 주재원)',
                        '한영회계법인 감사본부'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start">
                          <div 
                            style={{
                              width: '4px',
                              height: '4px',
                              background: '#0F214A',
                              borderRadius: '50%',
                              marginTop: '7px',
                              marginRight: '10px',
                              flexShrink: 0
                            }}
                          />
                          <span 
                            style={{
                              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                              fontSize: '13px',
                              color: '#333',
                              lineHeight: '1.5',
                              fontWeight: '500'
                            }}
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Badge */}
                  <div 
                    className="mt-auto pt-5"
                    style={{
                      borderTop: '1px solid rgba(15, 33, 74, 0.1)'
                    }}
                  >
                    <div 
                      className="inline-flex items-center gap-2 px-4 py-2"
                      style={{
                        background: 'rgba(15, 33, 74, 0.08)',
                        borderRadius: '100px',
                        border: '1px solid rgba(15, 33, 74, 0.15)'
                      }}
                    >
                      <Building2 size={16} style={{ color: '#FF6B3D' }} />
                      <span 
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '13px',
                          fontWeight: '600',
                          color: '#0F214A'
                        }}
                      >
                        Investment Partner
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 한화시스템 */}
            <ScrollReveal direction="up" delay={100}>
              <HanwhaSystemsCard />
            </ScrollReveal>

            {/* DAEBO */}
            <ScrollReveal direction="up" delay={200}>
              <DaeboCard />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 전력기술인 보유 현황 Section - Page 1/2 */}
      <section style={{ background: 'white', padding: '120px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <ScrollReveal direction="up" delay={0}>
            <div className="mb-12">
              <h2 
                style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '40px',
                  fontWeight: '700',
                  color: '#0F214A',
                  lineHeight: '1.4',
                  marginBottom: '8px'
                }}
              >
                전력기술인 보유 현황
              </h2>
              <p 
                style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '18px',
                  fontWeight: '500',
                  color: '#666',
                  marginBottom: '4px'
                }}
              >
                대보에너지솔루션 (1/2)
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <div 
              style={{
                background: 'white',
                borderRadius: '24px',
                padding: '32px',
                border: '1px solid rgba(15, 33, 74, 0.1)',
                boxShadow: '0 8px 32px rgba(15, 33, 74, 0.08)'
              }}
            >
              <img 
                src={certificationPage1}
                alt="전력기술인 보유 현황 - 대보에너지솔루션 (1/2)"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
                }}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 전력기술인 보유 현황 Section - Page 2/2 */}
      <section style={{ background: '#F7FAFD', padding: '120px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <ScrollReveal direction="up" delay={0}>
            <div className="mb-12">
              <h2 
                style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '40px',
                  fontWeight: '700',
                  color: '#0F214A',
                  lineHeight: '1.4',
                  marginBottom: '8px'
                }}
              >
                전력기술인 보유 현황
              </h2>
              <p 
                style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '18px',
                  fontWeight: '500',
                  color: '#666',
                  marginBottom: '4px'
                }}
              >
                대보에너지솔루션 (2/2)
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <div 
              style={{
                background: 'white',
                borderRadius: '24px',
                padding: '32px',
                border: '1px solid rgba(15, 33, 74, 0.1)',
                boxShadow: '0 8px 32px rgba(15, 33, 74, 0.08)'
              }}
            >
              <img 
                src={certificationPage2}
                alt="전력기술인 보유 현황 - 대보에너지솔루션 (2/2)"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
                }}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Track Record Table */}
      <section style={{ background: '#F7FAFD', padding: '120px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1000px' }}>
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
              기술실사 실적
            </h2>
            <p 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '16px',
                color: '#666',
                lineHeight: '1.5'
              }}
            >
              연도별 실사 용량 현황
            </p>
          </div>

          <ScrollReveal direction="up" delay={100}>
            <div 
              style={{
                background: 'white',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid rgba(15, 33, 74, 0.1)',
                boxShadow: '0 8px 32px rgba(15, 33, 74, 0.08)'
              }}
            >
              {/* Header */}
              <div className="grid grid-cols-3" style={{ background: '#0F214A' }}>
                <div 
                  style={{
                    padding: '20px',
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '16px',
                    fontWeight: '700',
                    color: 'white',
                    textAlign: 'center',
                    borderRight: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  구분/년도
                </div>
                <div 
                  style={{
                    padding: '20px',
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '16px',
                    fontWeight: '700',
                    color: 'white',
                    textAlign: 'center',
                    borderRight: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  2022년
                </div>
                <div 
                  style={{
                    padding: '20px',
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '16px',
                    fontWeight: '700',
                    color: 'white',
                    textAlign: 'center'
                  }}
                >
                  2023년
                </div>
              </div>

              {/* Subheader */}
              <div className="grid grid-cols-3" style={{ background: '#E8F0FE' }}>
                <div 
                  style={{
                    padding: '16px',
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#0F214A',
                    textAlign: 'center',
                    borderRight: '1px solid rgba(15, 33, 74, 0.1)'
                  }}
                >
                  용량(MW)
                </div>
                <div 
                  style={{
                    padding: '16px',
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#0F214A',
                    textAlign: 'center',
                    borderRight: '1px solid rgba(15, 33, 74, 0.1)'
                  }}
                >
                  실사 용량
                </div>
                <div 
                  style={{
                    padding: '16px',
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#0F214A',
                    textAlign: 'center'
                  }}
                >
                  실사 용량
                </div>
              </div>

              {/* Rows */}
              {trackRecord.map((row, index) => (
                <div 
                  key={index}
                  className="grid grid-cols-3"
                  style={{
                    background: index === trackRecord.length - 1 ? '#FFF5F0' : (index % 2 === 0 ? '#F7FAFD' : 'white'),
                    borderTop: '1px solid rgba(15, 33, 74, 0.05)'
                  }}
                >
                  <div 
                    style={{
                      padding: '18px',
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '15px',
                      fontWeight: index === trackRecord.length - 1 ? '700' : '500',
                      color: index === trackRecord.length - 1 ? '#FF6B3D' : '#0F214A',
                      textAlign: 'center',
                      borderRight: '1px solid rgba(15, 33, 74, 0.05)'
                    }}
                  >
                    {row.category}
                  </div>
                  <div 
                    style={{
                      padding: '18px',
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '15px',
                      fontWeight: index === trackRecord.length - 1 ? '700' : '500',
                      color: index === trackRecord.length - 1 ? '#FF6B3D' : '#333',
                      textAlign: 'center',
                      borderRight: '1px solid rgba(15, 33, 74, 0.05)'
                    }}
                  >
                    {row.year2022}
                  </div>
                  <div 
                    style={{
                      padding: '18px',
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '15px',
                      fontWeight: index === trackRecord.length - 1 ? '700' : '500',
                      color: index === trackRecord.length - 1 ? '#0F214A' : '#333',
                      textAlign: 'center'
                    }}
                  >
                    {row.year2023}
                  </div>
                </div>
              ))}

              {/* Footer Note */}
              <div 
                style={{
                  padding: '20px',
                  background: '#F7FAFD',
                  borderTop: '1px solid rgba(15, 33, 74, 0.1)',
                  textAlign: 'center'
                }}
              >
                <p 
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '13px',
                    color: '#999',
                    lineHeight: '1.5'
                  }}
                >
                  * 2023년 기준 누적 실사 용량입니다
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: 'linear-gradient(135deg, #0F214A 0%, #273b82 100%)', padding: '120px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 
              className="text-white mb-8"
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '48px',
                fontWeight: '700',
                lineHeight: '1.4'
              }}
            >
              정확한 실사로<br />
              안전한 거래를 보장합니다
            </h2>

            <p 
              className="text-white mb-12"
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '18px',
                lineHeight: '1.7',
                opacity: 0.9
              }}
            >
              전문가와 상담하고 신뢰할 수 있는 실사 보고서를 받아보세요
            </p>

            <button
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '18px',
                fontWeight: '700',
                padding: '20px 48px',
                background: 'linear-gradient(135deg, #FF6B3D, #FF8C3D)',
                color: 'white',
                border: 'none',
                borderRadius: '100px',
                cursor: 'pointer',
                boxShadow: '0 12px 32px rgba(255, 107, 61, 0.4)',
                transition: 'all 0.3s ease'
              }}
            >
              기술실사 문의
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}