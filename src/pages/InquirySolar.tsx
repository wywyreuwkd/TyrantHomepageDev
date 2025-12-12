import { PageHero } from "../components/PageHero";
import { Building2, MapPin, Zap, Calendar, User, Phone, Mail, FileText, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function InquirySolar() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    location: "",
    facilityType: "물류센터",
    capacity: "",
    roofArea: "",
    installDate: "",
    message: ""
  });

  const facilityTypes = [
    "물류센터",
    "공장",
    "창고",
    "건물 옥상",
    "주차장",
    "유휴부지",
    "기타"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("태양광 설치 신청이 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.");
  };

  const benefits = [
    { icon: Zap, title: "초기비용 Zero", desc: "설치비용 전액 무상 지원" },
    { icon: Building2, title: "수익 공유", desc: "발전 수익의 일정 비율 지급" },
    { icon: CheckCircle2, title: "전문 관리", desc: "설치부터 유지보수까지 토탈 케어" },
    { icon: Calendar, title: "20년 보증", desc: "장기 발전량 및 품질 보증" }
  ];

  return (
    <div className="min-h-screen bg-gray-50" style={{ paddingTop: '80px' }}>
      <PageHero
        badge={{ text: "INQUIRY", color: "#FF6B3D" }}
        title="태양광 접수"
        description="무상 설치 수익 공유형 태양광 발전 시스템을 신청하세요"
      />

      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10 py-12 md:py-24">
        
        {/* 혜택 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 bg-[#FF6B3D]/10 rounded-xl flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-[#FF6B3D]" />
              </div>
              <h3 className="text-[#0F214A] mb-2" style={{ fontSize: '18px', fontWeight: '600' }}>
                {benefit.title}
              </h3>
              <p className="text-[#0F214A]/70" style={{ fontSize: '14px' }}>
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 신청 양식 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <FileText className="w-6 h-6 text-[#FF6B3D]" />
                <h2 className="text-[#0F214A]">태양광 설치 신청서</h2>
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
                        회사명 <span className="text-[#FF6B3D]">*</span>
                      </label>
                      <input
                        type="text"
                        required
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
                        <MapPin className="w-4 h-4" />
                        설치 위치 <span className="text-[#FF6B3D]">*</span>
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
                        시설 종류 <span className="text-[#FF6B3D]">*</span>
                      </label>
                      <select
                        required
                        value={formData.facilityType}
                        onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B3D] outline-none transition-colors"
                      >
                        {facilityTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-[#0F214A] mb-2" style={{ fontSize: '16px', fontWeight: '500' }}>
                        <Zap className="w-4 h-4" />
                        희망 용량 (kW)
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
                        옥상/부지 면적 (㎡)
                      </label>
                      <input
                        type="text"
                        value={formData.roofArea}
                        onChange={(e) => setFormData({ ...formData, roofArea: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B3D] outline-none transition-colors"
                        placeholder="3,000㎡"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-[#0F214A] mb-2" style={{ fontSize: '16px', fontWeight: '500' }}>
                        <Calendar className="w-4 h-4" />
                        희망 설치시기
                      </label>
                      <input
                        type="text"
                        value={formData.installDate}
                        onChange={(e) => setFormData({ ...formData, installDate: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B3D] outline-none transition-colors"
                        placeholder="2025년 상반기"
                      />
                    </div>
                  </div>
                </div>

                {/* 추가 사항 */}
                <div>
                  <label className="flex items-center gap-2 text-[#0F214A] mb-2" style={{ fontSize: '16px', fontWeight: '500' }}>
                    <FileText className="w-4 h-4" />
                    추가 문의사항
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B3D] outline-none transition-colors resize-none"
                    placeholder="추가로 문의하실 내용이 있으시면 자유롭게 작성해주세요."
                  />
                </div>

                {/* 개인정보 동의 */}
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <input type="checkbox" required className="mt-1" />
                  <p className="text-[#0F214A]/70" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                    개인정보 수집 및 이용에 동의합니다. 수집된 정보는 상담 및 서비스 제공 목적으로만 사용됩니다.
                  </p>
                </div>

                {/* 제출 버튼 */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[#FF6B3D] text-white rounded-xl hover:bg-[#FF7C40] transition-all shadow-lg hover:shadow-xl"
                  style={{ fontSize: '18px', fontWeight: '600' }}
                >
                  신청서 제출하기
                </button>
              </form>
            </div>
          </div>

          {/* 안내 정보 */}
          <div className="space-y-6">
            {/* 진행 절차 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-[#0F214A] mb-6" style={{ fontSize: '20px', fontWeight: '600' }}>
                진행 절차
              </h3>
              <div className="space-y-4">
                {[
                  { step: "1", title: "신청서 접수", desc: "온라인 신청서 제출" },
                  { step: "2", title: "현장 실사", desc: "전문가 방문 조사" },
                  { step: "3", title: "사업성 검토", desc: "발전량 및 수익성 분석" },
                  { step: "4", title: "계약 체결", desc: "수익공유 계약 진행" },
                  { step: "5", title: "설치 및 운영", desc: "시공 및 발전 시작" }
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

            {/* 문의 안내 */}
            <div className="bg-[#0F214A] rounded-2xl p-6 text-white">
              <h3 className="text-white mb-4" style={{ fontSize: '20px', fontWeight: '600' }}>
                빠른 상담
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#FF6B3D]" />
                  <div>
                    <p className="text-white/70" style={{ fontSize: '14px' }}>전화 문의</p>
                    <p style={{ fontSize: '18px', fontWeight: '600' }}>1588-0000</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#FF6B3D]" />
                  <div>
                    <p className="text-white/70" style={{ fontSize: '14px' }}>이메일</p>
                    <p style={{ fontSize: '16px', fontWeight: '500' }}>solar@tyrant.co.kr</p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-white/70" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                평일 09:00 - 18:00<br />
                (주말 및 공휴일 휴무)
              </p>
            </div>

            {/* 주의사항 */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <h3 className="text-[#0F214A] mb-4" style={{ fontSize: '18px', fontWeight: '600' }}>
                필수 확인사항
              </h3>
              <ul className="space-y-2 text-[#0F214A]/70" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6B3D] mt-1">•</span>
                  <span>최소 설치 면적: 300㎡ 이상</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6B3D] mt-1">•</span>
                  <span>건물 안전진단 필요</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6B3D] mt-1">•</span>
                  <span>한전 계약 용량 확인 필수</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6B3D] mt-1">•</span>
                  <span>인허가 절차 약 2-3개월 소요</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}