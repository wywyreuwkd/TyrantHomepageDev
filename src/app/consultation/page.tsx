import type { Metadata } from "next";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "상담 문의",
  description: "타이런트 태양광 상담 문의 페이지입니다. 전화, 이메일로 문의해 주세요.",
};

export default function ConsultationPage() {
  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent rounded-full blur-[200px]"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400 rounded-full blur-[200px]"></div>
        </div>

        <div className="relative mx-auto px-6 md:px-10 py-16 md:py-24 max-w-[1280px]">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
              CONSULTATION
            </span>
            <h1 className="text-[32px] md:text-[48px] font-bold leading-[130%] text-gray-900 mt-4">
              상담 문의
            </h1>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              태양광 발전에 관한 모든 궁금증을 해결해 드립니다.<br />
              전문 상담원이 친절하게 안내해 드리겠습니다.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* 전화 상담 */}
              <a 
                href="tel:02-504-1204"
                className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-accent/60 hover:shadow-xl transition-all hover:scale-[1.02]"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">전화 상담</h2>
                <p className="text-lg text-gray-500 mb-4">평일 09:00 ~ 18:00</p>
                <p className="text-3xl font-bold text-accent">02-504-1204</p>
              </a>

              {/* 이메일 문의 */}
              <a 
                href="mailto:solaro@tyrant.co.kr"
                className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-blue-400/60 hover:shadow-xl transition-all hover:scale-[1.02]"
              >
                <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">이메일 문의</h2>
                <p className="text-lg text-gray-500 mb-4">24시간 접수 가능</p>
                <p className="text-2xl font-bold text-blue-600">solaro@tyrant.co.kr</p>
              </a>
            </div>

            {/* 상담 안내 */}
            <div className="p-8 rounded-2xl bg-white border border-gray-200 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">상담 안내</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">상담 시간</h4>
                    <p className="text-gray-600">평일 09:00 ~ 18:00</p>
                    <p className="text-gray-400 text-sm">점심시간 12:00 ~ 13:00</p>
                    <p className="text-gray-400 text-sm">주말 및 공휴일 휴무</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">방문 상담</h4>
                    <p className="text-gray-600">경기도 과천시 과천대로7길 74</p>
                    <p className="text-base text-gray-600">B동 3층 302호</p>
                    <p className="text-gray-400 text-sm">방문 상담은 사전 예약 필수</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 상담 가능 항목 */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">상담 가능 항목</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <ConsultItem title="사업성 분석" description="수익률 및 투자 타당성 검토" />
                <ConsultItem title="무상설치 문의" description="솔라오 수익공유형 모델" />
                <ConsultItem title="시공 견적" description="지붕형, 지상형, 주차장" />
                <ConsultItem title="유지보수" description="모니터링 및 관리운영" />
                <ConsultItem title="인허가 대행" description="발전사업 허가 절차" />
                <ConsultItem title="기자재 구매" description="모듈, 인버터, 구조물" />
                <ConsultItem title="기술실사" description="발전소 성능 진단" />
                <ConsultItem title="투자 상담" description="태양광 발전소 투자" />
              </div>
            </div>

            {/* CTA */}
            <div className="text-center p-10 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                지금 바로 상담받으세요
              </h3>
              <p className="text-lg text-gray-300 mb-8">
                타이런트의 전문 상담원이 고객님의 상황에 맞는<br className="hidden md:block" />
                최적의 태양광 솔루션을 제안해 드립니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:02-504-1204"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-full transition-all hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  전화 상담하기
                </a>
                <a 
                  href="mailto:solaro@tyrant.co.kr"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-all hover:scale-105 border border-white/20"
                >
                  <Mail className="w-5 h-5" />
                  이메일 보내기
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ConsultItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-5 rounded-xl bg-white border border-gray-200 hover:border-accent/50 hover:shadow-md transition-all text-center">
      <h4 className="text-base font-semibold text-gray-900 mb-1">{title}</h4>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
}
