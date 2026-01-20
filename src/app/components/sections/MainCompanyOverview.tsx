"use client"

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, PenTool, FileCheck, CircleDollarSign, HardHat, Settings, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

// 핵심 서비스 데이터
const coreServices = [
  {
    icon: MapPin,
    title: "부지 발굴",
    description: "전국 산업단지, 물류센터, 유휴부지 등 최적의 사업지를 발굴하고 확보합니다",
    details: ["입지 분석", "토지주 협상", "계약 체결"]
  },
  {
    icon: PenTool,
    title: "설계",
    description: "대상지 특성을 반영한 최적 시스템 설계 및 구조물 안전성을 검토합니다",
    details: ["전기설계", "구조설계", "토목설계"]
  },
  {
    icon: FileCheck,
    title: "인허가 진행",
    description: "발전사업 허가부터 전기사업 등록까지 복잡한 전 과정을 대행합니다",
    details: ["발전사업허가", "개발행위허가", "전기사업등록"]
  },
  {
    icon: CircleDollarSign,
    title: "금융 조달",
    description: "경력 15년 이상의 발전사업 금융 전문가가 최적의 금융 솔루션을 제공합니다",
    details: ["사업성 분석", "금융구조 설계", "투자자 매칭"]
  },
  {
    icon: HardHat,
    title: "시공",
    description: "검증된 협력사 네트워크를 통해 품질 높은 발전소를 건설합니다",
    details: ["품질 관리", "공정 관리", "안전 관리"]
  },
  {
    icon: Settings,
    title: "관리",
    description: "발전소 준공 이후에도 안정적인 운영과 수익 극대화를 지원합니다",
    details: ["실시간 모니터링", "유지보수", "수익 정산"]
  }
];

export function MainCompanyOverview() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative py-32 md:py-40 bg-primary overflow-hidden">
      {/* 배경 효과 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative mx-auto px-6 md:px-10 max-w-[1280px]">
        {/* 섹션 헤더 */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* 배지 */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 rounded-full border border-accent/50 bg-accent/5">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-sm font-semibold text-accent tracking-wider">CORE SERVICES</span>
          </div>

          <h2 className="text-accent text-[clamp(32px,5vw,48px)] font-bold leading-[1.2] tracking-[-0.02em] mb-6">
            핵심 서비스
          </h2>
          
          <p className="text-white/80 text-lg md:text-xl max-w-[700px] mx-auto leading-relaxed">
            사업지 발굴부터 설계, 인허가, 금융조달, 시공, 관리까지<br className="hidden md:block" />
            태양광 발전소 개발의 <span className="text-white font-semibold">전 과정을 원스톱으로 지원</span>합니다
          </p>
        </motion.div>

        {/* 서비스 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {coreServices.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative p-8 rounded-2xl bg-primary-dark-1 border border-white/10 hover:border-accent/30 transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 * index, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* 아이콘 */}
              <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/15 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
              </div>

              {/* 타이틀 */}
              <h3 className="text-white text-xl font-bold mb-3 tracking-[-0.01em]">
                {service.title}
              </h3>

              {/* 설명 */}
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* 세부 항목 리스트 */}
              <div className="space-y-2.5">
                {service.details.map((detail) => (
                  <div key={detail} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent" strokeWidth={2.5} />
                    </div>
                    <span className="text-white/70 text-sm">{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 하단 CTA */}
        <motion.div 
          className="mt-16 md:mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-white/50 mb-6">
            태양광 발전사업에 관심이 있으신가요?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/consultation"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-accent hover:bg-accent-hover text-white font-semibold transition-all duration-300"
            >
              무료 상담 신청
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link 
              href="/company"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold border border-white/10 transition-all duration-300"
            >
              회사 소개 보기
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
