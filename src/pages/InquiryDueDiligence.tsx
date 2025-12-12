import { PageHero } from "../components/PageHero";
import { ClipboardCheck, User, Phone, Mail, FileText, Building2, Zap, Shield, AlertTriangle, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function InquiryDueDiligence() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    facilityLocation: "",
    capacity: "",
    installYear: "",
    inspectionType: "종합 실사",
    urgency: "1주일 이내",
    message: ""
  });

  const inspectionTypes = [
    "종합 실사",
    "전기 안전 점검",
    "구조물 안전 점검",
    "발전 효율 분석",
    "인수 전 실사",
    "정기 점검"
  ];

  const urgencies = ["1주일 이내", "2주일 이내", "1개월 이내", "협의 가능"];

  const inspectionItems = [
    { icon: Shield, title: "안전성 검토", desc: "전기/구조 안전 확인" },
    { icon: Zap, title: "발전 효율", desc: "실제 발전량 대비 평가" },
    { icon: AlertTriangle, title: "리스크 분석", desc: "잠재적 문제점 도출" },
    { icon: CheckCircle2, title: "개선 방안", desc: "최적화 제안" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("기술실사 신청이 접수되었습니다. 담당 엔지니어가 연락드리겠습니다.");
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ paddingTop: '80px' }}>
      <PageHero
        badge={{ text: "DUE DILIGENCE", color: "#FF6B3D" }}
        title="기술실사"
        description="태양광 발전소의 기술적 상태를 정밀 진단합니다"
      />

      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10 py-12 md:py-24">
        
        {/* 실사 항목 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {inspectionItems.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#FF6B3D]/10 rounded-xl flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-[#FF6B3D]" />
              </div>
              <h3 className="text-[#0F214A] mb-2" style={{ fontSize: '18px', fontWeight: '600' }}>
                {item.title}
              </h3>
              <p className="text-[#0F214A]/70" style={{ fontSize: '14px' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 신청 양식 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <ClipboardCheck className="w-6 h-6 text-[#FF6B3D]" />
                <h2 className="text-[#0F214A]">기술실사 신청</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 담당자 정보 */}
                <div className="space-y-6">
                  <h3 className="text-[#0F214A] pb-3 border-b border-gray-200" style={{ fontSize: '20px', fontWeight: '600' }}>
                    담당자 정보
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center gap-2 text-[#0F214A] mb-2" style={{ fontSize: '16px', fontWeight: '500' }}>
                        <User className="w-4 h-4" />
                        이름 <span className="text-[#FF6B3D]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B3D] outline-none transition-colors"
                        placeholder="홍길동"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-[#0F214A] mb-2" style={{ fontSize: '16px', fontWeight: '500' }}>
                        <Building2 className="w-4 h-4" />
                        회사명
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B3D] outline-none transition-colors"
                        placeholder="(주)타이런트"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-[#0F214A] mb-2" style={{ fontSize: '16px', fontWeight: '500' }}>
                        <Phone className="w-4 h-4" />
                        연락처 <span className="text-[#FF6B3D]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B3D] outline-none transition-colors"
                        placeholder="010-0000-0000"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-[#0F214A] mb-2" style={{ fontSize: '16px', fontWeight: '500' }}>
                        <Mail className="w-4 h-4" />
                        이메일 <span className="text-[#FF6B3D]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B3D] outline-none transition-colors"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>
                </div>

                {/* 시설 정보 */}
                <div className="space-y-6">
                  <h3 className="text-[#0F214A] pb-3 border-b border-gray-200" style={{ fontSize: '20px', fontWeight: '600' }}>
                    시설 정보
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center gap-2 text-[#0F214A] mb-2" style={{ fontSize: '16px', fontWeight: '500' }}>
                        <Building2 className="w-4 h-4" />
                        발전소 위치 <span className="text-[#FF6B3D]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.facilityLocation}
                        onChange={(e) => setFormData({ ...formData, facilityLocation: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B3D] outline-none transition-colors"
                        placeholder="경기도 화성시"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-[#0F214A] mb-2" style={{ fontSize: '16px', fontWeight: '500' }}>
                        <Zap className="w-4 h-4" />
                        설비 용량 (kW) <span className="text-[#FF6B3D]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.capacity}
                        onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B3D] outline-none transition-colors"
                        placeholder="500kW"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-[#0F214A] mb-2" style={{ fontSize: '16px', fontWeight: '500' }}>
                        <Building2 className="w-4 h-4" />
                        준공 연도
                      </label>
                      <input
                        type="text"
                        value={formData.installYear}
                        onChange={(e) => setFormData({ ...formData, installYear: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B3D] outline-none transition-colors"
                        placeholder="2020년"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-[#0F214A] mb-2" style={{ fontSize: '16px', fontWeight: '500' }}>
                        <ClipboardCheck className="w-4 h-4" />
                        실사 유형 <span className="text-[#FF6B3D]">*</span>
                      </label>
                      <select
                        required
                        value={formData.inspectionType}
                        onChange={(e) => setFormData({ ...formData, inspectionType: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B3D] outline-none transition-colors"
                      >
                        {inspectionTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="flex items-center gap-2 text-[#0F214A] mb-2" style={{ fontSize: '16px', fontWeight: '500' }}>
                        <ClipboardCheck className="w-4 h-4" />
                        희망 일정 <span className="text-[#FF6B3D]">*</span>
                      </label>
                      <select
                        required
                        value={formData.urgency}
                        onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B3D] outline-none transition-colors"
                      >
                        {urgencies.map((urgency) => (
                          <option key={urgency} value={urgency}>{urgency}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* 추가 사항 */}
                <div>
                  <label className="flex items-center gap-2 text-[#0F214A] mb-2" style={{ fontSize: '16px', fontWeight: '500' }}>
                    <FileText className="w-4 h-4" />
                    상세 요청사항
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B3D] outline-none transition-colors resize-none"
                    placeholder="점검이 필요한 특정 부분이나 우려사항 등을 자유롭게 작성해주세요."
                  />
                </div>

                {/* 개인정보 동의 */}
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <input type="checkbox" required className="mt-1" />
                  <p className="text-[#0F214A]/70" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                    개인정보 수집 및 이용에 동의합니다.
                  </p>
                </div>

                {/* 제출 버튼 */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[#FF6B3D] text-white rounded-xl hover:bg-[#FF7C40] transition-all shadow-lg hover:shadow-xl"
                  style={{ fontSize: '18px', fontWeight: '600' }}
                >
                  실사 신청하기
                </button>
              </form>
            </div>
          </div>

          {/* 사이드바 */}
          <div className="space-y-6">
            {/* 실사 항목 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-[#0F214A] mb-6" style={{ fontSize: '20px', fontWeight: '600' }}>
                주요 점검 항목
              </h3>
              <div className="space-y-4">
                {[
                  "전기 안전 (누전, 접지)",
                  "모듈 손상 및 오염도",
                  "인버터 작동 상태",
                  "구조물 부식 및 변형",
                  "케이블 열화 상태",
                  "발전 효율 측정",
                  "모니터링 시스템",
                  "안전 표지판 및 울타리"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6B3D] flex-shrink-0" />
                    <span className="text-[#0F214A]" style={{ fontSize: '15px' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 비용 안내 */}
            <div className="bg-gradient-to-br from-[#0F214A] to-[#15305A] rounded-2xl p-6 text-white">
              <h3 className="text-white mb-4" style={{ fontSize: '20px', fontWeight: '600' }}>
                실사 비용
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span>기본 점검</span>
                  <span style={{ fontSize: '20px', fontWeight: '700' }}>50만원~</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span>종합 실사</span>
                  <span style={{ fontSize: '20px', fontWeight: '700' }}>150만원~</span>
                </div>
                <p className="text-white/90 mt-4" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                  * 용량 및 거리에 따라 변동<br />
                  * 소요기간: 1-3일
                </p>
              </div>
            </div>

            {/* 문의 */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <h3 className="text-[#0F214A] mb-4" style={{ fontSize: '18px', fontWeight: '600' }}>
                긴급 점검 요청
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#FF6B3D]" />
                  <div>
                    <p className="text-[#0F214A]/70" style={{ fontSize: '14px' }}>긴급 전화</p>
                    <p className="text-[#0F214A]" style={{ fontSize: '18px', fontWeight: '600' }}>1588-0000</p>
                  </div>
                </div>
                <p className="text-[#0F214A]/70" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                  발전 중단, 화재 위험 등<br />
                  긴급 상황 시 즉시 연락주세요
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}