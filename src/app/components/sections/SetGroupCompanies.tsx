"use client"

import tyrantHImage from "@public/company/group/73883878057403f82e8437ab7268bb6de37c0847.png";
import tyrantIImage from "@public/company/group/8127d37b5f90bbd65b04f3f149e4a502bd7cc39b.png";
import tyrantSImage from "@public/company/group/ee2d61b3d5215d8ad3d57116f3288e09148dd56e.png";
import tyrantEImage from "@public/company/group/84ee12a6aff96225a0c0fd277b11005d5c792af8.png";
import tyrantCImage from "@public/company/group/0bd0fb3e8c443b5858250cac71ad031644cb08f0.png";
import tyrantFImage from "@public/company/group/59bb2584cb7179167d14c59a62dcd60ea62b6a17.png";
import { FadeInUpAnimate } from "@components/shared/FadeInUpAnimate";
import { ImageWithFallback } from "@components/shared/ImageWithFallback";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const groupCompanies = [
  {
    name: "타이런트에이치",
    nameEn: "TYRANT H",
    fullName: "TYRANT-H Co., Ltd.",
    meaning: "Holdings",
    slogan: "타이런트 그룹의 전략 수립 및 그룹 운영 총괄",
    description: "타이런트에이치는 타이런트 그룹의 지주회사(Holdings)로서, 그룹 전체를 아우르는 전략 수립과 경영 관리의 중심 역할을 수행하고 있습니다. 각 계열사의 사업 방향과 성장 전략을 통합적으로 조율하며, 그룹 차원의 시너지 창출과 지속 가능한 성장을 이끄는 컨트롤 타워입니다.\n\n그룹 주요 의사결정, 중장기 전략 수립, 인력 운영 및 조직 관리, 본사 및 지사 사무실 관리 등 그룹 전반의 운영 체계를 총괄하며, 조직문화 조성 및 임직원 복지 기획을 통해 안정적이고 효율적인 그룹 경영 환경을 구축하고 있습니다.",
    color: "#273b82",
    letter: "H",
    imageUrl: tyrantHImage,
    services: []
  },
  {
    name: "타이런트아이",
    nameEn: "TYRANT I",
    fullName: "Tyrant-I Co., Ltd.",
    meaning: "Investments",
    slogan: "태양광 투자법인",
    description: "타이런트아이는 타이런트 그룹의 투자 전문 법인(Investments)으로, 태양광 및 신재생에너지 분야를 중심으로 성장 가능성이 높은 사업과 프로젝트에 전략적 투자를 진행하고 있습니다. 시장 분석과 투자 판단을 통해 그룹의 장기적인 가치 성장을 도모합니다.\n\n태양광 발전 사업을 포함한 다양한 에너지 관련 투자 활동을 수행하며, 안정적인 수익 구조 확보와 함께 그룹의 사업 포트폴리오를 확장하는 역할을 담당하고 있습니다.",
    color: "#273b82",
    letter: "I",
    imageUrl: tyrantIImage,
    services: []
  },
  {
    name: "타이런트에스",
    nameEn: "TYRANT S",
    fullName: "Tyrant-S Co., Ltd.",
    meaning: "Service",
    slogan: "고객관리, 계약관리, 자금관리 및 원발사무업무",
    description: "타이런트에스는 태양광 발전 사업의 효율적인 운영을 지원하는 서비스 전문 회사(Service)로, 발전 사업 전반에 걸친 실무 중심의 종합 운영 서비스를 제공합니다. 고객과 발전사업자를 연결하는 실질적인 운영 허브 역할을 수행합니다.\n\n고객관리, 계약관리, 자금관리 및 일반 사무업무를 비롯해 회계 및 세무관리, 보험 업무를 담당하며, 전력 거래(SMP) 및 신재생에너지 공급인증서(REC) 판매 등 발전사업 운영에 필요한 핵심 업무를 체계적으로 수행하고 있습니다.",
    color: "#0F214A",
    letter: "S",
    imageUrl: tyrantSImage,
    services: []
  },
  {
    name: "타이런트이",
    nameEn: "TYRANT E",
    fullName: "Tyrant-E Co., Ltd.",
    meaning: "E & C (Engineering & Construction)",
    slogan: "태양광 개발, 시공, 관리운영, 기자재 공급",
    description: "타이런트이는 태양광 발전 사업의 개발, 시공, 운영을 담당하는 E&C(Engineering & Construction) 전문 법인입니다. 발전소 구축의 전 과정에서 기술력과 현장 중심의 노하우를 바탕으로 안정적인 사업 수행을 지원합니다.\n\n태양광 발전소 개발, 시공, 관리운영은 물론 기자재 공급과 모니터링 서비스까지 제공하며, 발전소의 효율성과 안정성을 지속적으로 유지·개선하고 있습니다.",
    color: "#15305A",
    letter: "E",
    imageUrl: tyrantEImage,
    services: []
  },
  {
    name: "타이런트씨",
    nameEn: "TYRANT C",
    fullName: "Tyrant-C Co., Ltd.",
    meaning: "Consulting",
    slogan: "태양광 사업성분석 및 금융자문",
    description: "타이런트씨는 태양광 사업 전반에 대한 전문 컨설팅을 제공하는 컨설팅 법인(Consulting)으로, 사업의 타당성과 수익성을 객관적으로 분석하여 성공적인 사업 추진을 지원합니다.\n\n태양광 사업성 분석(FS), 태양광 금융 자문(PF), 태양광 기술 실사, 태양광 교육 등 전문 컨설팅 서비스를 제공하며, 사업 초기 기획 단계부터 실행 단계까지 전반적인 의사결정을 지원하고 있습니다.",
    color: "#0E1C45",
    letter: "C",
    imageUrl: tyrantCImage,
    services: []
  },
  {
    name: "타이런트에프",
    nameEn: "TYRANT F",
    fullName: "Tyrant-F Co., Ltd.",
    meaning: "Food & Beverage",
    slogan: "외식 사업부문",
    description: "타이런트에프는 외식 및 식음료 사업을 담당하는 Food & Beverage 계열사로, 다양한 외식 브랜드 운영을 통해 그룹의 사업 영역을 확장하고 있습니다. 안정적인 운영 시스템과 차별화된 메뉴 경쟁력을 기반으로 지속적인 성장을 추구합니다.\n\n함박스테이크 전문점 타박스, 냉면 전문점 타냉, 장모님 감자탕 등 다양한 외식 브랜드를 운영하며, 식음료 산업 전반에서 새로운 가치 창출을 이어가고 있습니다.",
    color: "#152556",
    letter: "F",
    imageUrl: tyrantFImage,
    services: []
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4 }
};

export function SetGroupCompanies() {
  const [selectedCompany, setSelectedCompany] = useState<number>(0);
  const currentCompany = groupCompanies[selectedCompany];

  return(
    <div className="min-h-screen bg-[#F7FAFD]">
      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w py-10 px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {groupCompanies.map((company, index) => (
              <button
                key={index}
                onClick={() => setSelectedCompany(index)}
                className="relative transition-all duration-200 flex-1 text-center cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis font-pretendard text-[1.125rem] font-medium bg-white border border-[#0F214A] p-[1.25rem_1rem]"
                style={{                  
                  color: selectedCompany === index ? '#FF6B3D' : '#0F214A',                  
                  borderColor: selectedCompany === index ? '#FF6B3D' : '#0F214A'           
                }}>
                {company.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Company Detail Section */}
      <section>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCompany}
            {...fadeInUp}                      
            className="relative overflow-hidden company-detail-bg h-[37.5rem] bg-cover bg-[center_60%] bg-no-repeat"
            style={{ 
              backgroundImage: `url(${currentCompany.imageUrl.src})`
            }}>
            {/* Dark Overlay */}
            <div className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${currentCompany.color}70 0%, ${currentCompany.color}50 40%, ${currentCompany.color}30 100%)`,
              }}
            />

            {/* Content Container */}
            <div className="relative z-10 mx-auto px-6 md:px-10 py-16 md:py-24 max-w">
              {/* Empty - Content will be added below */}
            </div>        
          </motion.div>
        </AnimatePresence>     
      </section>

      {/* Company Description Section */}
      <section className="bg-white">
        <div key={selectedCompany} className="max-w mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-16">
            {/* Left: Company Name & Button */}
            <div>
              <h2 className="font-['Pretendard',-apple-system,'Noto_Sans_KR',sans-serif] text-[3rem] font-bold text-[#0F214A] leading-[1.2] tracking-[-0.03125rem] mb-2">
                {currentCompany.name}
              </h2>
              <p className="font-['Pretendard',_-apple-system,_-bold] text-[1.25rem] font-semibold text-[#6B7280] tracking-[0.5px] mb-8">
                {currentCompany.fullName}
              </p>
              <button
                className="flex items-center justify-center w-12 h-12 bg-[#0F214A] border-none rounded-full cursor-pointer transition-all duration-200 ease-in-out"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.background = '#273b82';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.background = '#0F214A';
                }}
                onClick={() => {
                  // TODO: 각 그룹사 웹사이트로 연결
                  console.log(`Navigate to ${currentCompany.name} website`);
                }}>
                <ArrowUpRight size={24} color="white" strokeWidth={2} />
              </button>
            </div>

            {/* Right: Company Description */}
            <div>
              {/* Meaning (Holdings) - Only for companies that have it */}
              {currentCompany.meaning && (
                <h3 className="font-['Pretendard,_-apple-system,_'Noto_Sans_KR',_sans-serif'] text-[1.5rem] font-bold text-[#0F214A] mb-[1.5rem] tracking-[-0.01875rem]">
                  {currentCompany.meaning}
                </h3>
              )}
                
              <p className="font-['Pretendard',_-apple-system,_-bold_'Noto_Sans_KR',_sans-serif] text-[1.125rem] font-normal text-gray-600 leading-[1.8] tracking-[-0.0125rem] whitespace-pre-line">
                {currentCompany.description}
              </p>

              {/* Services List - Only show if services exist */}
              {currentCompany.services.length > 0 && (
                <div className="mt-12">
                  <h4 className="font-['Pretendard',_-apple-system,_-bold] text-xl font-bold text-[#0F214A] mb-4">
                    주요 사업
                  </h4>
                  <div className="grid gap-3">
                    {currentCompany.services.map((service, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-2 w-1.5 h-1.5 bg-[#FF6B3D] rounded-full"/>
                        <span className="font-['Pretendard',_-apple-system,_-'Noto_Sans_KR',_sans-serif] text-[1rem] font-normal text-[#6B7280] leading-relaxed">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
