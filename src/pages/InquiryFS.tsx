import { PageHero } from "../components/PageHero";
import { BarChart3, User, Phone, Mail, FileText, Building2, MapPin, Zap, TrendingUp, DollarSign, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function InquiryFS() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    location: "",
    capacity: "",
    landArea: "",
    projectType: "옥상형",
    urgency: "1개월 이내",
    message: ""
  });

  const projectTypes = ["옥상형", "지상형", "수상형", "주차장형", "농지형"];
  const urgencies = ["1개월 이내", "2-3개월", "3-6개월", "6개월 이상", "미정"];

  const analysisItems = [
    { icon: BarChart3, title: "발전량 분석", desc: "일사량 데이터 기반 예상 발전량 산출" },
    { icon: DollarSign, title: "수익성 분석", desc: "투자비 대비 예상 수익률 계산" },
    { icon: TrendingUp, title: "경제성 분석", desc: "NPV, IRR, 회수기간 등 재무지표" },
    { icon: CheckCircle2, title: "리스크 분석", desc: "환경 및 법적 리스크 검토" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("사업성 분석 의뢰가 접수되었습니다. 담당자가 빠르게 연락드리겠습니다.");
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ paddingTop: '80px' }}>
      <PageHero
        badge={{ text: "FEASIBILITY STUDY", color: "#FF6B3D" }}
        title="사업성 분석"
        description="정확한 데이터 기반으로 태양광 발전 사업의 타당성을 검토합니다"
      />

      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10 py-12 md:py-24">
        
        {/* 분석 항목 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {analysisItems.map((item, index) => (
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
          {/* 의뢰 양식 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <BarChart3 className="w-6 h-6 text-[#FF6B3D]" />
                <h2 className="text-[#0F214A]">사업성 분석 의뢰</h2>
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

                {/* 사업 정보 */}
                <div className="space-y-6">
                  <h3 className="text-[#0F214A] pb-3 border-b border-gray-200" style={{ fontSize: '20px', fontWeight: '600' }}>
                    사업 정보
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center gap-2 text-[#0F214A] mb-2" style={{ fontSize: '16px', fontWeight: '500' }}>
                        <MapPin className="w-4 h-4" />
                        사업 위치 <span className="text-[#FF6B3D]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B3D] outline-none transition-colors"
                        placeholder="경기도 화성시"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-[#0F214A] mb-2" style={{ fontSize: '16px', fontWeight: '500' }}>
                        <Building2 className="w-4 h-4" />
                        사업 유형 <span className="text-[#FF6B3D]">*</span>
                      </label>
                      <select
                        required
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B3D] outline-none transition-colors"
                      >
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-[#0F214A] mb-2" style={{ fontSize: '16px', fontWeight: '500' }}>
                        <Zap className="w-4 h-4" />
                        예상 용량 (kW)
                      </label>
                      <input
                        type="text"
                        value={formData.capacity}
                        onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B3D] outline-none transition-colors"
                        placeholder="500kW"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-[#0F214A] mb-2" style={{ fontSize: '16px', fontWeight: '500' }}>
                        <Building2 className="w-4 h-4" />
                        부지/옥상 면적 (㎡)
                      </label>
                      <input
                        type="text"
                        value={formData.landArea}
                        onChange={(e) => setFormData({ ...formData, landArea: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B3D] outline-none transition-colors"
                        placeholder="3,000㎡"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="flex items-center gap-2 text-[#0F214A] mb-2" style={{ fontSize: '16px', fontWeight: '500' }}>
                        <TrendingUp className="w-4 h-4" />
                        분석 긴급도 <span className="text-[#FF6B3D]">*</span>
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
                    추가 정보 및 요청사항
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B3D] outline-none transition-colors resize-none"
                    placeholder="사업 배경, 투자 여력, 특이사항 등을 자유롭게 작성해주세요."
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
                  분석 의뢰하기
                </button>
              </form>
            </div>
          </div>

          {/* 사이드바 */}
          <div className="space-y-6">
            {/* 분석 절차 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-[#0F214A] mb-6" style={{ fontSize: '20px', fontWeight: '600' }}>
                분석 절차
              </h3>
              <div className="space-y-4">
                {[
                  { step: "1", title: "의뢰 접수", desc: "기본 정보 입력" },
                  { step: "2", title: "현장 조사", desc: "입지 및 환경 분석" },
                  { step: "3", title: "데이터 수집", desc: "일사량, 전력 등" },
                  { step: "4", title: "경제성 분석", desc: "투자비 및 수익 계산" },
                  { step: "5", title: "보고서 제출", desc: "상세 분석 리포트" }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#FF6B3D] text-white rounded-full flex items-center justify-center" style={{ fontWeight: '700' }}>
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-[#0F214A] mb-1" style={{ fontSize: '16px', fontWeight: '600' }}>
                        {item.title}
                      </h4>
                      <p className="text-[#0F214A]/60" style={{ fontSize: '14px' }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 분석 비용 */}
            <div className="bg-gradient-to-br from-[#FF6B3D] to-[#FF8C5C] rounded-2xl p-6 text-white">
              <h3 className="text-white mb-4" style={{ fontSize: '20px', fontWeight: '600' }}>
                분석 비용
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span>기본 분석</span>
                  <span style={{ fontSize: '20px', fontWeight: '700' }}>무료</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span>상세 분석</span>
                  <span style={{ fontSize: '20px', fontWeight: '700' }}>100만원~</span>
                </div>
                <p className="text-white/90 mt-4" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                  * 계약 시 분석비용 100% 환급<br />
                  * 소요기간: 1-2주
                </p>
              </div>
            </div>

            {/* 문의 */}
            <div className="bg-[#0F214A] rounded-2xl p-6 text-white">
              <h3 className="text-white mb-4" style={{ fontSize: '20px', fontWeight: '600' }}>
                상담 문의
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#FF6B3D]" />
                  <div>
                    <p className="text-white/70" style={{ fontSize: '14px' }}>전화</p>
                    <p style={{ fontSize: '18px', fontWeight: '600' }}>1588-0000</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#FF6B3D]" />
                  <div>
                    <p className="text-white/70" style={{ fontSize: '14px' }}>이메일</p>
                    <p style={{ fontSize: '16px', fontWeight: '500' }}>fs@tyrant.co.kr</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}