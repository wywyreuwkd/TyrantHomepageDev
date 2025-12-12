import { PageHero } from "../components/PageHero";
import { GraduationCap, User, Phone, Mail, FileText, Users, Calendar, BookOpen, Award } from "lucide-react";
import { useState } from "react";

export function InquiryEducation() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    courseType: "기초 과정",
    participants: "",
    preferredDate: "",
    location: "온라인",
    message: ""
  });

  const courses = [
    {
      name: "기초 과정",
      duration: "1일 (8시간)",
      topics: ["태양광 발전 원리", "시스템 구성", "설치 기초", "안전 교육"],
      target: "입문자"
    },
    {
      name: "실무 과정",
      duration: "3일 (24시간)",
      topics: ["시공 실무", "전기 배선", "구조물 설치", "인버터 연결"],
      target: "시공자"
    },
    {
      name: "운영 과정",
      duration: "2일 (16시간)",
      topics: ["모니터링", "유지보수", "고장 진단", "효율 관리"],
      target: "운영자"
    },
    {
      name: "사업자 과정",
      duration: "1일 (8시간)",
      topics: ["사업 구조", "수익 모델", "계약 실무", "리스크 관리"],
      target: "사업자"
    }
  ];

  const benefits = [
    { icon: Award, title: "수료증 발급", desc: "교육 이수 후 정식 수료증" },
    { icon: Users, title: "실무 중심", desc: "현장 경험 기반 교육" },
    { icon: BookOpen, title: "자료 제공", desc: "상세한 교육 자료 제공" },
    { icon: GraduationCap, title: "전문 강사", desc: "20년 경력 전문가 직접 교육" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("교육 신청이 접수되었습니다. 교육 담당자가 연락드리겠습니다.");
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ paddingTop: '80px' }}>
      <PageHero
        badge={{ text: "EDUCATION", color: "#FF6B3D" }}
        title="태양광 교육"
        description="태양광 발전 전문가 양성을 위한 체계적인 교육 프로그램"
      />

      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10 py-12 md:py-24">
        
        {/* 교육 혜택 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
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

        {/* 교육 과정 소개 */}
        <div className="mb-16">
          <h2 className="text-[#0F214A] mb-8 text-center">교육 과정</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-[#0F214A] mb-2" style={{ fontSize: '24px', fontWeight: '600' }}>
                      {course.name}
                    </h3>
                    <p className="text-[#FF6B3D]" style={{ fontSize: '16px', fontWeight: '600' }}>
                      {course.duration}
                    </p>
                  </div>
                  <span className="px-4 py-2 bg-[#0F214A]/5 text-[#0F214A] rounded-lg" style={{ fontSize: '14px', fontWeight: '600' }}>
                    {course.target}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-[#0F214A]/70" style={{ fontSize: '16px', fontWeight: '600' }}>
                    교육 내용
                  </h4>
                  <ul className="space-y-2">
                    {course.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[#0F214A]/70">
                        <span className="w-1.5 h-1.5 bg-[#FF6B3D] rounded-full"></span>
                        <span style={{ fontSize: '15px' }}>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 신청 양식 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-6 h-6 text-[#FF6B3D]" />
                <h2 className="text-[#0F214A]">교육 신청</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 신청자 정보 */}
                <div className="space-y-6">
                  <h3 className="text-[#0F214A] pb-3 border-b border-gray-200" style={{ fontSize: '20px', fontWeight: '600' }}>
                    신청자 정보
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
                        <Users className="w-4 h-4" />
                        회사명/소속
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

                {/* 교육 정보 */}
                <div className="space-y-6">
                  <h3 className="text-[#0F214A] pb-3 border-b border-gray-200" style={{ fontSize: '20px', fontWeight: '600' }}>
                    교육 정보
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center gap-2 text-[#0F214A] mb-2" style={{ fontSize: '16px', fontWeight: '500' }}>
                        <BookOpen className="w-4 h-4" />
                        교육 과정 <span className="text-[#FF6B3D]">*</span>
                      </label>
                      <select
                        required
                        value={formData.courseType}
                        onChange={(e) => setFormData({ ...formData, courseType: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B3D] outline-none transition-colors"
                      >
                        {courses.map((course) => (
                          <option key={course.name} value={course.name}>
                            {course.name} ({course.duration})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-[#0F214A] mb-2" style={{ fontSize: '16px', fontWeight: '500' }}>
                        <Users className="w-4 h-4" />
                        교육 인원
                      </label>
                      <input
                        type="text"
                        value={formData.participants}
                        onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B3D] outline-none transition-colors"
                        placeholder="예: 10명"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-[#0F214A] mb-2" style={{ fontSize: '16px', fontWeight: '500' }}>
                        <Calendar className="w-4 h-4" />
                        희망 일정
                      </label>
                      <input
                        type="text"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B3D] outline-none transition-colors"
                        placeholder="2025년 3월"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-[#0F214A] mb-2" style={{ fontSize: '16px', fontWeight: '500' }}>
                        <GraduationCap className="w-4 h-4" />
                        교육 방식 <span className="text-[#FF6B3D]">*</span>
                      </label>
                      <select
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B3D] outline-none transition-colors"
                      >
                        <option value="온라인">온라인</option>
                        <option value="오프라인">오프라인 (본사)</option>
                        <option value="출장">출장 교육</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* 추가 사항 */}
                <div>
                  <label className="flex items-center gap-2 text-[#0F214A] mb-2" style={{ fontSize: '16px', fontWeight: '500' }}>
                    <FileText className="w-4 h-4" />
                    추가 요청사항
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B3D] outline-none transition-colors resize-none"
                    placeholder="특별히 집중하고 싶은 주제나 궁금한 사항을 자유롭게 작성해주세요."
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
                  교육 신청하기
                </button>
              </form>
            </div>
          </div>

          {/* 사이드바 */}
          <div className="space-y-6">
            {/* 교육 일정 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-[#0F214A] mb-6" style={{ fontSize: '20px', fontWeight: '600' }}>
                정기 교육 일정
              </h3>
              <div className="space-y-4">
                {[
                  { date: "2025.03.15", course: "기초 과정", status: "모집중" },
                  { date: "2025.03.22", course: "실무 과정", status: "모집중" },
                  { date: "2025.04.05", course: "운영 과정", status: "예정" },
                  { date: "2025.04.19", course: "사업자 과정", status: "예정" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <p className="text-[#0F214A]" style={{ fontSize: '16px', fontWeight: '600' }}>
                        {item.course}
                      </p>
                      <p className="text-[#0F214A]/60" style={{ fontSize: '14px' }}>
                        {item.date}
                      </p>
                    </div>
                    <span 
                      className="px-3 py-1 rounded-lg text-white"
                      style={{ 
                        fontSize: '13px', 
                        fontWeight: '600',
                        backgroundColor: item.status === "모집중" ? "#FF6B3D" : "#0F214A"
                      }}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 교육 비용 */}
            <div className="bg-gradient-to-br from-[#FF6B3D] to-[#FF8C5C] rounded-2xl p-6 text-white">
              <h3 className="text-white mb-4" style={{ fontSize: '20px', fontWeight: '600' }}>
                교육 비용
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span>개인 (1일)</span>
                  <span style={{ fontSize: '20px', fontWeight: '700' }}>30만원</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span>기업 (10명 이상)</span>
                  <span style={{ fontSize: '20px', fontWeight: '700' }}>할인 적용</span>
                </div>
                <p className="text-white/90 mt-4" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                  * 교재 및 식사 포함<br />
                  * 단체 교육 별도 문의
                </p>
              </div>
            </div>

            {/* 문의 */}
            <div className="bg-[#0F214A] rounded-2xl p-6 text-white">
              <h3 className="text-white mb-4" style={{ fontSize: '20px', fontWeight: '600' }}>
                교육 문의
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
                    <p style={{ fontSize: '16px', fontWeight: '500' }}>edu@tyrant.co.kr</p>
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