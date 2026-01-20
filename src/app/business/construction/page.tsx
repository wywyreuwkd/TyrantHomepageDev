import type { Metadata } from "next";
import { HeroSection } from "@components/shared/HeroSection";
import { LabelAccent, LabelGray } from "@components/shared/SectionLabel";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "태양광 시공",
  description: "20여 회원 시공사들과 함께 태양광발전소 시공 표준을 만들고 실천합니다. 검증된 협력사 네트워크를 통한 고품질 시공 서비스.",
};

// 타이런트 시공의 강점
const strengths = [
  {
    title: "20+ 회원사",
    value: "검증된 협력사",
    desc: "태양광 시공 경력과 재무 현황을 고려하여 엄선된 높은 실력의 시공사들로 구성되어 있습니다",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "시공 표준",
    value: "지속적 업그레이드",
    desc: "주기적인 협력사 미팅을 통해 태양광발전소 시공 표준을 만들고 계속 업그레이드하고 있습니다",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "유기적 협업",
    value: "설계변경 즉시 대응",
    desc: "인허가, 설계 경험을 보유한 업체들로 현장 상황에 맞게 유기적으로 설계변경 및 시공 처리가 가능합니다",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  {
    title: "맞춤 시공",
    value: "현장별 최적화",
    desc: "시공 표준안과 전문가 경력을 활용하여 기본 품질 확보 및 개별 현장 맞춤 시공이 가능합니다",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    )
  }
];

// 전문 인력 현황
const experts = [
  { title: "전기기사", count: "00", color: "#FF6B3D" },
  { title: "전기산업기사", count: "00", color: "#00D9FF" },
  { title: "신재생에너지발전설비기사", count: "00", color: "#FF6B3D" },
  { title: "토목기사", count: "00", color: "#00D9FF" },
  { title: "건축기사", count: "00", color: "#FF6B3D" }
];

// 시공 유형
const constructionTypes = [
  {
    type: "지붕형",
    desc: "공장, 물류센터, 축사 등 다양한 지붕에 최적화된 시공",
    items: ["공장 지붕", "물류센터", "축사 및 창고"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    type: "지상형",
    desc: "주차장, 나대지 등 부지 특성에 맞는 구조물 시공",
    items: ["일반 부지", "주차장", "나대지"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    type: "특수형",
    desc: "수상 태양광 등 특수 환경에 최적화된 솔루션",
    items: ["수상 태양광", "농업 병행형"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  }
];

// 시공 프로세스
const processSteps = [
  {
    step: "STEP 01",
    phase: "착공 준비",
    duration: "1주",
    tasks: ["현장 측량", "안전 조치", "자재 반입", "인력 배치"],
    color: "from-[#FF6B3D] to-[#FF8C5A]"
  },
  {
    step: "STEP 02",
    phase: "구조물 설치",
    duration: "2-4주",
    tasks: ["기초 공사", "구조물 설치", "수평 조정", "안전 검사"],
    color: "from-[#00D9FF] to-[#00B8E6]"
  },
  {
    step: "STEP 03",
    phase: "전기 공사",
    duration: "2-3주",
    tasks: ["모듈 설치", "인버터 설치", "배선 작업", "접속함 설치"],
    color: "from-purple-500 to-purple-600"
  },
  {
    step: "STEP 04",
    phase: "시운전 및 준공",
    duration: "1-2주",
    tasks: ["계통 연계", "시운전", "성능 테스트", "준공 검사"],
    color: "from-[#FF6B3D] to-[#e55a35]"
  }
];

// 협력사 미팅 특징
const meetingFeatures = [
  "주기적인 협력사 미팅 진행",
  "시공 표준 공동 개발 및 업그레이드",
  "현장 경험 및 노하우 공유",
  "품질 관리 기준 통일",
  "안전 관리 표준 수립",
  "설계변경 대응 프로세스 확립"
];

export default function BusinessConstruction() {
  return (
    <div className="min-h-screen bg-primary pt-20">
      {/* Hero Section */}
      <HeroSection
        badge="SOLAR CONSTRUCTION"
        title={<>태양광 시공</>} //,<br /><span className="color-accent">20여 협력사들</span>과 함께합니다</>}
        description={
          <>
            검증된 시공사들이 주기적으로 모여 태양광발전소 시공 표준을 만들고 실천합니다.
            <br className="hidden md:block" />
            시공 표준안과 전문가 경력을 활용하여 고품질 시공 서비스를 제공합니다.
          </>
        }
      />

      {/* Strengths Section */}
      <section className="bg-gray-50 py-20 md:py-32">
        <div className="mx-auto px-6 md:px-10 max-w-[1280px]">
          <div className="text-center mb-16">
            <LabelGray label="WHY TYRANT" />
            <h2 className="text-2xl md:text-4xl font-bold color-primary leading-[140%] mb-6">
              타이런트 시공의 <span className="color-accent">차별성</span>
            </h2>
            <p className="text-lg text-gray-600 leading-[170%] max-w-3xl mx-auto">
              태양광 시공 경력과 재무 현황을 고려하여 엄선된
              <br className="hidden md:block" />
              높은 실력의 협력사들과 함께합니다
            </p>
          </div>

          {/* Strengths Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-8 hover:border-accent/30 hover:shadow-lg transition-all text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-xl flex items-center justify-center color-accent">
                  {strength.icon}
                </div>
                <div className="text-xl font-black color-accent mb-2">{strength.value}</div>
                <h3 className="text-lg font-bold color-primary mb-3">{strength.title}</h3>
                <p className="text-sm text-gray-600 leading-[160%]">{strength.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Highlight */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400 rounded-full blur-[150px]"></div>
        </div>

        <div className="relative mx-auto px-6 md:px-10 py-20 md:py-32 max-w-[1280px]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <LabelAccent label="COLLABORATION" />
              <h2 className="text-2xl md:text-4xl font-bold color-white leading-[140%] mb-6">
                주기적인 <span className="color-accent">협력사 미팅</span>
              </h2>
              <p className="text-lg color-white-90 leading-[170%]">
                타이런트와 협력사들은 주기적으로 모여 미팅을 진행합니다.
                <br className="hidden md:block" />
                이 미팅을 통해 태양광발전소 <span className="color-white font-semibold">시공 표준을 만들고 계속 업그레이드</span>하고 있습니다.
              </p>
            </div>

            {/* Meeting Features */}
            <div className="grid md:grid-cols-2 gap-4">
              {meetingFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-6 py-4"
                >
                  <CheckCircle2 size={20} className="color-accent flex-shrink-0" />
                  <span className="text-base color-white-90">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expert Highlight - 전문 인력 */}
      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto px-6 md:px-10 max-w-[1280px]">
          <div className="text-center mb-16">
            <LabelGray label="EXPERTS" />
            <h2 className="text-2xl md:text-4xl font-bold color-primary leading-[140%] mb-6">
              전문 인력 현황
            </h2>
            <p className="text-lg text-gray-600 leading-[170%] max-w-2xl mx-auto">
              당사 및 협력사들을 통틀어 다양한 분야의
              <br className="hidden md:block" />
              전문 자격증 보유 인력이 함께합니다
            </p>
          </div>

          {/* Expert Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {experts.map((expert, index) => (
              <div
                key={index}
                className="text-center bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all"
              >
                <div 
                  className="text-4xl md:text-5xl font-black mb-2"
                  style={{ color: expert.color }}
                >
                  {expert.count}
                </div>
                <div className="text-xs text-gray-500 mb-2">명</div>
                <h3 className="text-sm md:text-base font-bold color-primary leading-tight">{expert.title}</h3>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              * 실제 인원은 추후 업데이트 예정입니다
            </p>
          </div>
        </div>
      </section>

      {/* Construction Types */}
      <section className="bg-gray-50 py-20 md:py-32">
        <div className="mx-auto px-6 md:px-10 max-w-[1280px]">
          <div className="text-center mb-16">
            <LabelGray label="CONSTRUCTION TYPES" />
            <h2 className="text-2xl md:text-4xl font-bold color-primary leading-[140%] mb-6">
              시공 유형
            </h2>
            <p className="text-lg text-gray-600 leading-[170%] max-w-2xl mx-auto">
              다양한 유형의 태양광 발전소 시공 경험을 보유하고 있습니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {constructionTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-8 hover:border-accent/30 hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 mb-6 bg-accent/10 rounded-xl flex items-center justify-center color-accent">
                  {type.icon}
                </div>

                <h3 className="text-2xl font-bold color-primary mb-2">{type.type}</h3>
                <p className="text-base text-gray-600 leading-[160%] mb-6">{type.desc}</p>

                <div className="space-y-2">
                  {type.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="color-accent flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative bg-[#0a1628] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent rounded-full blur-[150px]"></div>
        </div>

        <div className="relative mx-auto px-6 md:px-10 py-20 md:py-32 max-w-[1280px]">
          <div className="text-center mb-16">
            <LabelAccent label="CONSTRUCTION PROCESS" />
            <h2 className="text-2xl md:text-4xl font-bold color-white leading-[140%] mb-6">
              시공 프로세스
            </h2>
            <p className="text-lg color-white-90 leading-[170%] max-w-2xl mx-auto">
              체계적인 프로세스로 안전하고 정확한 시공을 진행합니다
            </p>
          </div>

          {/* Process Timeline */}
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative bg-[rgba(21,48,90,0.3)] backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 overflow-hidden"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                  <div className="flex-shrink-0 flex items-center gap-4">
                    <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${step.color} rounded-full`}>
                      <span className="text-white text-sm font-bold tracking-wider">{step.step}</span>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 bg-white/10 rounded-full text-sm color-accent font-semibold">
                      {step.duration}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold color-white mb-4">{step.phase}</h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {step.tasks.map((task, taskIndex) => (
                        <div
                          key={taskIndex}
                          className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2"
                        >
                          <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                          <span className="text-sm color-white-90">{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flexible Response Highlight */}
      <section className="bg-gray-50 py-20 md:py-32">
        <div className="mx-auto px-6 md:px-10 max-w-[1280px]">
          <div
            className="rounded-3xl p-10 md:p-16"
            style={{ background: 'linear-gradient(135deg, #0F214A 0%, #1a3a6e 100%)' }}
          >
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/30 rounded-full mb-8">
                <svg className="w-5 h-5 color-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span className="text-sm font-bold color-accent tracking-wider">FLEXIBLE RESPONSE</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-[140%]">
                현장 상황에 맞는 <span className="text-[#FF6B3D]">유기적 대응</span>
              </h3>

              <p className="text-lg text-white/85 leading-[180%] mb-8">
                협력사들은 현장에 대한 <span className="text-white font-semibold">인허가, 설계 경험</span>을 보유하고 있습니다.
                <br className="hidden md:block" />
                이 경험을 토대로 현장 상황을 적절하게 반영하여
                <br className="hidden md:block" />
                <span className="text-[#FF6B3D] font-semibold">유기적으로 설계변경 및 시공 업무처리</span>가 가능합니다.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 px-5 py-3 bg-white/10 rounded-full">
                  <CheckCircle2 size={18} className="color-accent" />
                  <span className="text-white font-medium">인허가 경험 보유</span>
                </div>
                <div className="flex items-center gap-2 px-5 py-3 bg-white/10 rounded-full">
                  <CheckCircle2 size={18} className="color-accent" />
                  <span className="text-white font-medium">설계변경 즉시 대응</span>
                </div>
                <div className="flex items-center gap-2 px-5 py-3 bg-white/10 rounded-full">
                  <CheckCircle2 size={18} className="color-accent" />
                  <span className="text-white font-medium">현장 맞춤 시공</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0a1628] py-20 md:py-32">
        <div className="mx-auto px-6 md:px-10 max-w-[1280px]">
          <div className="bg-gradient-to-br from-accent/20 via-accent/10 to-transparent border border-accent/30 rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-2xl md:text-4xl font-bold color-white leading-[140%] mb-6">
              검증된 협력사와 함께하는 고품질 시공
            </h2>
            <p className="text-lg color-white-90 leading-[170%] max-w-2xl mx-auto mb-10">
              시공 표준안과 전문가 경력을 활용하여
              <br className="hidden md:block" />
              <span className="color-accent font-semibold">기본적인 시공 품질 확보 및 개별 현장 맞춤 시공</span>이 가능합니다
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/consultation"
                className="
                  inline-flex items-center justify-center gap-2 px-8 py-4
                  bg-accent text-white font-bold text-lg
                  rounded-full hover:bg-accent-90
                  transition-all hover:scale-105
                  shadow-md min-w-[300px]
                "
              >
                시공 문의하기
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
