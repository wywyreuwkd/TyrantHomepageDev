import { Building2, Zap, Database, TrendingUp, Shield, Users, Utensils } from "lucide-react";
import { SubNavigation } from "../components/SubNavigation";
import { PageHero } from "../components/PageHero";
import { motion } from "framer-motion";
import { useState } from "react";
import centerLogo from "figma:asset/dcebfce36b71594073b7a9a0555f77d0668a223e.png";

const groupCompanies = [
  {
    name: "타이런트아이",
    nameEn: "TYRANT I",
    fullName: "Tyrant-I Co., Ltd.",
    meaning: "Investments",
    description: "태양광 투자법인",
    color: "#273b82",
    icon: TrendingUp,
    services: ["태양광 투자법인", "프로젝트 투자", "자산 관리", "수익 창출"]
  },
  {
    name: "타이런트에스",
    nameEn: "TYRANT S",
    fullName: "Tyrant-S Co., Ltd.",
    meaning: "Service",
    description: "고객관리, 계약관리, 자금관리 및 원발사무업무",
    color: "#0F214A",
    icon: Building2,
    services: ["고객관리", "계약관리", "자금관리 및 원발사무업무", "회계 및 세무관리", "보험업무", "전력거래(SMP 및 REC 판매)"]
  },
  {
    name: "타이런트이",
    nameEn: "TYRANT E",
    fullName: "Tyrant-E Co., Ltd.",
    meaning: "E & C",
    description: "태양광 개발, 시공, 관리운영, 기자재 공급",
    color: "#15305A",
    icon: Zap,
    services: ["태양광 개발", "시공", "관리운영", "기자재 공급", "모니터링서비스"]
  },
  {
    name: "타이런트씨",
    nameEn: "TYRANT C",
    fullName: "Tyrant-C Co., Ltd.",
    meaning: "Consulting",
    description: "태양광 사업성분석 및 금융자문",
    color: "#0E1C45",
    icon: Shield,
    services: ["태양광 사업성분석(FS)", "태양광금융자문(PF)", "태양광기술설사", "태양광교육"]
  },
  {
    name: "타이런트에프",
    nameEn: "TYRANT F",
    fullName: "Tyrant-F C., Ltd.",
    meaning: "Food & beverage",
    description: "외식 사업부문",
    color: "#152556",
    icon: Utensils,
    services: ["타박스(찰박스테이크 전문점)", "타밥(냉면 전문점)", "장모님 감자탕"]
  }
];

const centerCompany = {
  name: "타이런트에이치",
  nameEn: "TYRANT H",
  fullName: "Tyrant-H Co., Ltd.",
  meaning: "Holdings",
  description: "타이런트 그룹의 전략 수립 및 그룹 운영 총괄",
  services: [
    "타이런트 그룹의 전략 수립",
    "그룹 주요의사결정",
    "인력관리",
    "분사 및 지사 사무실관리",
    "그룹관리",
    "조직문화 및 임직원복지 기획 관리"
  ]
};

interface GroupCompaniesProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function GroupCompanies({ onNavigate, currentPage }: GroupCompaniesProps) {
  const [selectedCompany, setSelectedCompany] = useState<number | null>(null);
  const [showCenterCompany, setShowCenterCompany] = useState(false);

  return (
    <div className="min-h-screen" style={{ paddingTop: '80px', backgroundColor: '#F7FAFD' }}>

      {/* Sub Navigation - Below Hero */}
      <SubNavigation category="company" currentPage={currentPage} onNavigate={onNavigate} />

      {/* Hero Section */}
      <PageHero
        badge={{ text: 'GROUP COMPANIES', color: '#FF6B3D' }}
        title="그룹사 소개"
        description="타이런트그룹은 Renewable Energy Total Solutions를 제공하기 위하여 태양광발전의 A부터 Z까지 모든 영역에서 전문 서비스를 제공합니다.<br class='hidden md:block' />고객의 특정한 Needs를 신속하고 정확하게 해결하기 위하여 그에 맞는 전문회사를 별도로 설립하였습니다."
      />
      
      {/* Network Map Section */}
      <section className="mx-auto px-6 md:px-10 py-16 md:py-24" style={{ maxWidth: '1280px' }}>
        <div className="mb-16">
          <h2 style={{
            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
            fontSize: '48px',
            fontWeight: '700',
            color: '#0F214A',
            marginBottom: '16px'
          }}>
            조직도
          </h2>
          <p style={{
            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
            fontSize: '18px',
            lineHeight: '1.6',
            color: '#6B7280'
          }}>
            타이런트그룹은 Renewable Energy Total Solutions를 제공하기 위하여 태양광발전의 A부터 Z까지 모든 영역에서 전문 서비스를 제공합니다.<br />
            고객의 특정한 Needs를 신속하고 정확하게 해결하기 위하여 그에 맞는 전문회사를 별도로 설립하였습니다.
          </p>
        </div>

        {/* Organizational Chart */}
        <div className="mb-20">
          {/* Top Level - Holdings */}
          <div className="flex justify-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div
                onClick={() => setShowCenterCompany(!showCenterCompany)}
                className="bg-gradient-to-br from-[#273b82] to-[#15305A] text-white cursor-pointer hover:shadow-2xl transition-all duration-300"
                style={{
                  width: '280px',
                  padding: '32px',
                  borderRadius: '16px',
                  boxShadow: '0 8px 32px rgba(39, 59, 130, 0.25)',
                  border: '2px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="flex items-center justify-center mb-6">
                  <div 
                    className="w-20 h-20 flex items-center justify-center mb-6 mx-auto" 
                    style={{ 
                      borderRadius: '20px',
                      background: `linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.1))`,
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <span style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '40px',
                      fontWeight: '700',
                      color: 'white'
                    }}>
                      H
                    </span>
                  </div>
                </div>
                
                <div className="text-center">
                  <div style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '24px',
                    fontWeight: '700',
                    marginBottom: '6px'
                  }}>
                    타이런트에이치
                  </div>
                  
                  <div style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '13px',
                    fontWeight: '600',
                    color: 'rgba(255, 255, 255, 0.8)',
                    letterSpacing: '1px'
                  }}>
                    TYRANT H · Holdings
                  </div>
                </div>
              </div>

              {/* Vertical Line from Holdings */}
              <div 
                className="absolute left-1/2 transform -translate-x-1/2"
                style={{
                  width: '2px',
                  height: '60px',
                  background: 'linear-gradient(to bottom, #273b82, #E5E7EB)',
                  top: '100%'
                }}
              />
            </motion.div>
          </div>

          {/* Horizontal Line connecting all subsidiaries */}
          <div className="relative mb-8">
            <div 
              className="absolute left-0 right-0 mx-auto"
              style={{
                width: '90%',
                maxWidth: '1100px',
                height: '2px',
                backgroundColor: '#E5E7EB',
                top: '0'
              }}
            />
            
            {/* Vertical lines dropping to each company */}
            <div className="flex justify-center">
              <div className="grid grid-cols-5 gap-6" style={{ width: '90%', maxWidth: '1100px' }}>
                {groupCompanies.map((_, index) => (
                  <div key={index} className="flex justify-center">
                    <div 
                      style={{
                        width: '2px',
                        height: '40px',
                        background: 'linear-gradient(to bottom, #E5E7EB, transparent)',
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Level - 5 Subsidiaries */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6" style={{ width: '100%', maxWidth: '1200px' }}>
              {groupCompanies.map((company, index) => {
                const letters = ['I', 'S', 'E', 'C', 'F'];
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    onClick={() => setSelectedCompany(selectedCompany === index ? null : index)}
                    className="cursor-pointer"
                  >
                    <div
                      className="bg-white border-2 hover:shadow-xl transition-all duration-300 h-full"
                      style={{
                        borderRadius: '16px',
                        padding: '24px 20px',
                        borderColor: selectedCompany === index ? company.color : '#E5E7EB',
                        boxShadow: selectedCompany === index 
                          ? `0 8px 32px ${company.color}40` 
                          : '0 2px 8px rgba(0, 0, 0, 0.04)',
                        transform: selectedCompany === index ? 'translateY(-4px)' : 'translateY(0)'
                      }}
                    >
                      <div className="text-center">
                        <div 
                          className="w-14 h-14 flex items-center justify-center mx-auto mb-4"
                          style={{
                            borderRadius: '12px',
                            background: `linear-gradient(135deg, ${company.color}, ${company.color}dd)`,
                            boxShadow: `0 4px 12px ${company.color}40`
                          }}
                        >
                          <span style={{
                            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                            fontSize: '28px',
                            fontWeight: '700',
                            color: 'white'
                          }}>
                            {letters[index]}
                          </span>
                        </div>
                        
                        <h4 style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '18px',
                          fontWeight: '700',
                          color: '#0F214A',
                          marginBottom: '4px'
                        }}>
                          {company.name}
                        </h4>
                        
                        <p style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '11px',
                          fontWeight: '600',
                          color: '#999',
                          letterSpacing: '0.5px',
                          marginBottom: '12px'
                        }}>
                          {company.nameEn} · {company.meaning}
                        </p>
                        
                        <p style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '13px',
                          lineHeight: '1.5',
                          color: '#6B7280',
                          minHeight: '40px'
                        }}>
                          {company.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Holdings Detail Card */}
        {showCenterCompany && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-gray-200 overflow-hidden mb-12"
            style={{ borderRadius: '24px', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)' }}
          >
            <div className="grid md:grid-cols-[300px_1fr] gap-0">
              {/* Left: Company Name & Icon */}
              <div 
                className="p-10 flex flex-col justify-center items-center text-white relative overflow-hidden"
                style={{ 
                  background: 'linear-gradient(135deg, #273b82 0%, #15305A 100%)'
                }}
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                </div>
                
                <div className="relative z-10 text-center">
                  <div 
                    className="w-20 h-20 flex items-center justify-center mb-6 mx-auto" 
                    style={{ 
                      borderRadius: '20px',
                      background: `linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.1))`,
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <span style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '40px',
                      fontWeight: '700',
                      color: 'white'
                    }}>
                      H
                    </span>
                  </div>
                  
                  <h3 style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '28px',
                    fontWeight: '700',
                    marginBottom: '8px',
                    letterSpacing: '-0.5px'
                  }}>
                    {centerCompany.name}
                  </h3>
                  
                  <div style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'rgba(255, 255, 255, 0.8)',
                    letterSpacing: '1px'
                  }}>
                    {centerCompany.nameEn} · {centerCompany.meaning}
                  </div>
                </div>
              </div>

              {/* Right: Description & Services */}
              <div className="p-10">
                <p style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#0F214A',
                  marginBottom: '24px',
                  lineHeight: '1.6'
                }}>
                  {centerCompany.description}
                </p>
                
                <div className="mb-3" style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#6B7280',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  주요 역할
                </div>
                
                <div className="grid sm:grid-cols-2 gap-3">
                  {centerCompany.services.map((service, serviceIndex) => (
                    <div 
                      key={serviceIndex}
                      className="flex items-center gap-3 bg-gray-50 p-3"
                      style={{ borderRadius: '12px' }}
                    >
                      <div 
                        className="w-2 h-2 flex-shrink-0" 
                        style={{ 
                          backgroundColor: '#273b82',
                          borderRadius: '50%'
                        }}
                      ></div>
                      <span style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '15px',
                        color: '#374151',
                        fontWeight: '500'
                      }}>
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Selected Company Details */}
        {selectedCompany !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-gray-200 overflow-hidden"
            style={{ borderRadius: '24px', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)' }}
          >
            <div className="grid md:grid-cols-[300px_1fr] gap-0">
              {/* Left: Company Name & Icon */}
              <div 
                className="p-10 flex flex-col justify-center items-center text-white relative overflow-hidden"
                style={{ 
                  background: `linear-gradient(135deg, ${groupCompanies[selectedCompany].color} 0%, ${groupCompanies[selectedCompany].color}dd 100%)`
                }}
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                </div>
                
                <div className="relative z-10 text-center">
                  <div 
                    className="w-20 h-20 flex items-center justify-center mb-6 mx-auto" 
                    style={{ 
                      borderRadius: '20px',
                      background: `linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.1))`,
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <span style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '40px',
                      fontWeight: '700',
                      color: 'white'
                    }}>
                      {['I', 'S', 'E', 'C', 'F'][selectedCompany]}
                    </span>
                  </div>
                  
                  <h3 style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '28px',
                    fontWeight: '700',
                    marginBottom: '8px',
                    letterSpacing: '-0.5px'
                  }}>
                    {groupCompanies[selectedCompany].name}
                  </h3>
                  
                  <div style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'rgba(255, 255, 255, 0.8)',
                    letterSpacing: '1px'
                  }}>
                    {groupCompanies[selectedCompany].nameEn}
                  </div>
                </div>
              </div>

              {/* Right: Description & Services */}
              <div className="p-10">
                <p style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#0F214A',
                  marginBottom: '24px',
                  lineHeight: '1.6'
                }}>
                  {groupCompanies[selectedCompany].description}
                </p>
                
                <div className="mb-3" style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#6B7280',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  주요 사업
                </div>
                
                <div className="grid sm:grid-cols-2 gap-3">
                  {groupCompanies[selectedCompany].services.map((service, serviceIndex) => (
                    <div 
                      key={serviceIndex}
                      className="flex items-center gap-3 bg-gray-50 p-3"
                      style={{ borderRadius: '12px' }}
                    >
                      <div 
                        className="w-2 h-2 flex-shrink-0" 
                        style={{ 
                          backgroundColor: groupCompanies[selectedCompany].color,
                          borderRadius: '50%'
                        }}
                      ></div>
                      <span style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '15px',
                        color: '#374151',
                        fontWeight: '500'
                      }}>
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </section>

      {/* H.I.S.E.C Core Values Section */}
      <section className="mx-auto px-6 md:px-10 py-16 md:py-24" style={{ maxWidth: '1280px', backgroundColor: 'white' }}>
        <div className="mb-16">
          <h2 style={{
            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
            fontSize: '48px',
            fontWeight: '700',
            color: '#0F214A',
            marginBottom: '24px'
          }}>
            H.I.S.E.C Core Values
          </h2>
          
          <p style={{
            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
            fontSize: '18px',
            lineHeight: '1.6',
            color: '#6B7280',
            marginBottom: '0'
          }}>
            지속 가능한 에너지 혁신을 이루기 위한 타이런트의 핵심 가치입니다.
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {[
            {
              letter: 'H',
              title: 'Hope',
              description: '미래 에너지에 대한 긍정적 방향을 제시하고 더 나은 에너지 환경을 준비합니다.',
              color: '#273b82'
            },
            {
              letter: 'I',
              title: 'Innovation',
              description: '기술 혁신을 통해 에너지 산업의 새로운 가능성을 열고 변화를 선도합니다.',
              color: '#0F214A'
            },
            {
              letter: 'S',
              title: 'Sustainability',
              description: '지속 가능한 방식으로 에너지 자원을 활용해 친환경적인 미래를 만들어갑니다.',
              color: '#15305A'
            },
            {
              letter: 'E',
              title: 'Energy',
              description: '깨끗한 에너지를 중심에 두고 미래 세대를 위한 에너지 가치를 창출합니다.',
              color: '#0E1C45'
            },
            {
              letter: 'C',
              title: 'Collaboration',
              description: '다양한 주체와 함께 협력하여 조화로운 에너지 생태계를 구축합니다.',
              color: '#152556'
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div 
                className="bg-white border-2 border-gray-100 hover:border-[#FF6B3D] transition-all duration-300 h-full"
                style={{
                  borderRadius: '20px',
                  padding: '40px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                }}
              >
                <div className="flex items-start gap-6">
                  {/* Letter Icon */}
                  <div 
                    className="flex-shrink-0 w-16 h-16 flex items-center justify-center"
                    style={{
                      borderRadius: '16px',
                      background: `linear-gradient(135deg, ${value.color}, ${value.color}dd)`,
                      boxShadow: `0 4px 16px ${value.color}30`
                    }}
                  >
                    <span style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '32px',
                      fontWeight: '700',
                      color: 'white',
                      letterSpacing: '-1px'
                    }}>
                      {value.letter}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '32px',
                      fontWeight: '700',
                      color: '#0F214A',
                      marginBottom: '12px',
                      letterSpacing: '-0.5px'
                    }}>
                      {value.title}
                    </h3>
                    <p style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '17px',
                      fontWeight: '400',
                      lineHeight: '1.7',
                      color: '#6B7280',
                      marginBottom: '0'
                    }}>
                      {value.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div 
                  className="mt-6 h-1 w-0 group-hover:w-full transition-all duration-500"
                  style={{
                    background: `linear-gradient(90deg, ${value.color}, #FF6B3D)`,
                    borderRadius: '2px'
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            marginTop: '60px',
            paddingLeft: '0px',
            maxWidth: '800px'
          }}
        >
          {/* Top Accent Line */}
          <div 
            style={{
              width: '60px',
              height: '4px',
              background: 'linear-gradient(90deg, #273b82, #FF6B3D)',
              marginBottom: '32px',
              borderRadius: '2px'
            }}
          />
          
          <p style={{
            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
            fontSize: '28px',
            fontWeight: '600',
            lineHeight: '1.6',
            color: '#0F214A',
            marginBottom: '16px',
            letterSpacing: '-0.5px'
          }}>
            지속 가능한 에너지의 미래.
          </p>
          
          <p style={{
            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
            fontSize: '18px',
            fontWeight: '400',
            lineHeight: '1.7',
            color: '#6B7280',
            marginBottom: '0'
          }}>
            타이런트는 혁신과 협업을 통해 그 변화를 만들어갑니다.
          </p>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0F214A] via-[#15305A] to-[#273b82] text-white">
        <div className="mx-auto px-6 md:px-10 py-16 md:py-20 text-center" style={{ maxWidth: '1280px' }}>
          <h2 style={{
            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: '700',
            marginBottom: '16px'
          }}>
            타이런트 그룹과 함께하세요
          </h2>
          
          <p style={{
            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
            fontSize: '18px',
            lineHeight: '1.6',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '32px'
          }}>
            5개 전문 계열사의 토탈 솔루션으로 최상의 태양광 발전 서비스를 경험하세요
          </p>
          
          <button
            className="bg-[#FF6B3D] hover:bg-[#FF7C40] text-white transition-all hover:scale-105"
            style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontWeight: '600',
              borderRadius: '100px',
              padding: '16px 40px',
              fontSize: '17px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(255, 107, 61, 0.3)'
            }}
          >
            사업 문의하기
          </button>
        </div>
      </section>
    </div>
  );
}