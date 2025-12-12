import { PageHero } from "../components/PageHero";
import { MessageSquare, User, Phone, Mail, FileText, Building2, HelpCircle } from "lucide-react";
import { useState } from "react";

export function InquiryOther() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    category: "일반 문의",
    subject: "",
    message: ""
  });

  const categories = [
    "일반 문의",
    "파트너십 제안",
    "투자 문의",
    "채용 문의",
    "미디어 문의",
    "제휴 문의",
    "기타"
  ];

  const faqItems = [
    {
      q: "태양광 설치가 가능한 최소 면적은?",
      a: "최소 300㎡ 이상의 옥상이나 부지가 필요합니다."
    },
    {
      q: "초기 투자 비용이 있나요?",
      a: "수익공유형 모델은 초기 비용이 전혀 없습니다. 모든 비용을 타이런트가 부담합니다."
    },
    {
      q: "발전 수익은 언제 받을 수 있나요?",
      a: "매월 정산하여 다음 달에 지급됩니다."
    },
    {
      q: "계약 기간은 어떻게 되나요?",
      a: "일반적으로 20년 장기 계약이며, 협의를 통해 조정 가능합니다."
    },
    {
      q: "유지보수는 누가 하나요?",
      a: "모든 유지보수 및 관리는 타이런트에서 무상으로 진행합니다."
    },
    {
      q: "건물 안전에 문제는 없나요?",
      a: "사전 구조 안전 진단을 통해 안전성을 확인한 후 설치합니다."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("문의가 접수되었습니다. 빠른 시일 내에 답변드리겠습니다.");
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ paddingTop: '80px' }}>
      <PageHero
        badge={{ text: "CONTACT US", color: "#FF6B3D" }}
        title="기타문의"
        description="궁금하신 사항이 있으시면 언제든지 문의해주세요"
      />

      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10 py-12 md:py-24">
        
        {/* 자주 묻는 질문 */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF6B3D]/10 border border-[#FF6B3D]/20 rounded-full mb-4">
              <HelpCircle className="w-4 h-4 text-[#FF6B3D]" />
              <span className="text-[#FF6B3D]" style={{ fontSize: '14px', fontWeight: '600' }}>
                FAQ
              </span>
            </div>
            <h2 className="text-[#0F214A]">자주 묻는 질문</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#FF6B3D] text-white rounded-full flex items-center justify-center" style={{ fontWeight: '700' }}>
                    Q
                  </div>
                  <h3 className="text-[#0F214A]" style={{ fontSize: '18px', fontWeight: '600', lineHeight: '1.4' }}>
                    {item.q}
                  </h3>
                </div>
                <div className="flex items-start gap-3 ml-11">
                  <p className="text-[#0F214A]/70" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 문의 양식 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <MessageSquare className="w-6 h-6 text-[#FF6B3D]" />
                <h2 className="text-[#0F214A]">문의하기</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 담당자 정보 */}
                <div className="space-y-6">
                  <h3 className="text-[#0F214A] pb-3 border-b border-gray-200" style={{ fontSize: '20px', fontWeight: '600' }}>
                    문의자 정보
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

                {/* 문의 내용 */}
                <div className="space-y-6">
                  <h3 className="text-[#0F214A] pb-3 border-b border-gray-200" style={{ fontSize: '20px', fontWeight: '600' }}>
                    문의 내용
                  </h3>

                  <div>
                    <label className="flex items-center gap-2 text-[#0F214A] mb-2" style={{ fontSize: '16px', fontWeight: '500' }}>
                      <MessageSquare className="w-4 h-4" />
                      문의 유형 <span className="text-[#FF6B3D]">*</span>
                    </label>
                    <select
                      required
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B3D] outline-none transition-colors"
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-[#0F214A] mb-2" style={{ fontSize: '16px', fontWeight: '500' }}>
                      <FileText className="w-4 h-4" />
                      제목 <span className="text-[#FF6B3D]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B3D] outline-none transition-colors"
                      placeholder="문의 제목을 입력해주세요"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-[#0F214A] mb-2" style={{ fontSize: '16px', fontWeight: '500' }}>
                      <FileText className="w-4 h-4" />
                      상세 내용 <span className="text-[#FF6B3D]">*</span>
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={10}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B3D] outline-none transition-colors resize-none"
                      placeholder="문의하실 내용을 상세히 작성해주세요."
                    />
                  </div>
                </div>

                {/* 개인정보 동의 */}
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <input type="checkbox" required className="mt-1" />
                  <p className="text-[#0F214A]/70" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                    개인정보 수집 및 이용에 동의합니다. 수집된 정보는 문의 답변 목적으로만 사용되며, 
                    답변 완료 후 일정 기간 후 파기됩니다.
                  </p>
                </div>

                {/* 제출 버튼 */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[#FF6B3D] text-white rounded-xl hover:bg-[#FF7C40] transition-all shadow-lg hover:shadow-xl"
                  style={{ fontSize: '18px', fontWeight: '600' }}
                >
                  문의하기
                </button>
              </form>
            </div>
          </div>

          {/* 사이드바 */}
          <div className="space-y-6">
            {/* 연락처 */}
            <div className="bg-[#0F214A] rounded-2xl p-6 text-white">
              <h3 className="text-white mb-6" style={{ fontSize: '20px', fontWeight: '600' }}>
                연락처
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#FF6B3D] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white/70 mb-1" style={{ fontSize: '14px' }}>대표 전화</p>
                    <p style={{ fontSize: '20px', fontWeight: '600' }}>1588-0000</p>
                    <p className="text-white/70 mt-1" style={{ fontSize: '13px' }}>
                      평일 09:00 - 18:00
                    </p>
                  </div>
                </div>
                
                <div className="h-px bg-white/20"></div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#FF6B3D] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white/70 mb-1" style={{ fontSize: '14px' }}>이메일</p>
                    <p style={{ fontSize: '16px', fontWeight: '500' }}>contact@tyrant.co.kr</p>
                    <p className="text-white/70 mt-1" style={{ fontSize: '13px' }}>
                      24시간 접수 가능
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 오시는 길 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-[#0F214A] mb-4" style={{ fontSize: '20px', fontWeight: '600' }}>
                오시는 길
              </h3>
              <div className="space-y-3">
                <p className="text-[#0F214A]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  서울특별시 강남구<br />
                  테헤란로 123<br />
                  타이런트빌딩 10층
                </p>
                <div className="h-px bg-gray-200"></div>
                <p className="text-[#0F214A]/70" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                  <strong>지하철:</strong> 2호선 역삼역 3번 출구<br />
                  <strong>버스:</strong> 146, 301, 740
                </p>
              </div>
            </div>

            {/* 응답 시간 */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <h3 className="text-[#0F214A] mb-4" style={{ fontSize: '18px', fontWeight: '600' }}>
                응답 시간 안내
              </h3>
              <ul className="space-y-2 text-[#0F214A]/70" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6B3D] mt-1">•</span>
                  <span>일반 문의: 영업일 기준 1-2일 이내</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6B3D] mt-1">•</span>
                  <span>긴급 문의: 당일 응답</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6B3D] mt-1">•</span>
                  <span>주말/공휴일: 익영업일 순차 처리</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}