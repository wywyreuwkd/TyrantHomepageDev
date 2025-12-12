import { PageHero } from "../components/PageHero";
import { UserPlus, User, Phone, Mail, FileText, Building2, Briefcase, MapPin, TrendingUp, Award, Shield, Users } from "lucide-react";
import { useState } from "react";

export function MemberSales() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    businessNumber: "",
    address: "",
    experience: "1년 미만",
    region: "",
    teamSize: "",
    revenue: "",
    message: ""
  });

  const experiences = ["1년 미만", "1-3년", "3-5년", "5-10년", "10년 이상"];

  const benefits = [
    { icon: TrendingUp, title: "수수료 정산", desc: "계약 체결 시 수수료 지급" },
    { icon: Award, title: "교육 지원", desc: "영업 노하우 및 기술 교육" },
    { icon: Shield, title: "브랜드 활용", desc: "타이런트 브랜드 사용 권한" },
    { icon: Users, title: "네트워킹", desc: "전국 영업사 네트워크" }
  ];

  const requirements = [
    "사업자등록증 보유 (개인/법인)",
    "태양광 관련 업종 경험 우대",
    "지역별 전담 영업 가능",
    "성실한 고객 응대 및 사후관리",
    "회사 영업 정책 준수",
    "최소 월 1건 이상 계약 추진"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("영업사 등록 신청이 완료되었습니다. 검토 후 연락드리겠습니다.");
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ paddingTop: '80px' }}>
      <PageHero
        badge={{ text: "MEMBER", color: "#FF6B3D" }}
        title="영업사 등록"
        description="타이런트 공식 영업 파트너로 함께 성장하세요"
      />

      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10 py-12 md:py-24">
        
        {/* 혜택 */}
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 등록 양식 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <UserPlus className="w-6 h-6 text-[#FF6B3D]" />
                <h2 className="text-[#0F214A]">영업사 등록 신청</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 기본 정보 */}
                <div className="space-y-6">
                  <h3 className="text-[#0F214A] pb-3 border-b border-gray-200" style={{ fontSize: '20px', fontWeight: '600' }}>
                    기본 정보
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center gap-2 text-[#0F214A] mb-2" style={{ fontSize: '16px', fontWeight: '500' }}>
                        <User className="w-4 h-4" />
                        대표자명 <span className="text-[#FF6B3D]">*</span>
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
                        상호명 <span className="text-[#FF6B3D]">*</span>
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

                    <div>
                      <label className="flex items-center gap-2 text-[#0F214A] mb-2" style={{ fontSize: '16px', fontWeight: '500' }}>
                        <Briefcase className="w-4 h-4" />
                        사업자등록번호 <span className="text-[#FF6B3D]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.businessNumber}
                        onChange={(e) => setFormData({ ...formData, businessNumber: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B3D] outline-none transition-colors"
                        placeholder="000-00-00000"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-[#0F214A] mb-2" style={{ fontSize: '16px', fontWeight: '500' }}>
                        <MapPin className="w-4 h-4" />
                        사업장 소재지 <span className="text-[#FF6B3D]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B3D] outline-none transition-colors"
                        placeholder="서울시 강남구"
                      />
                    </div>
                  </div>
                </div>

                {/* 영업 정보 */}
                <div className="space-y-6">
                  <h3 className="text-[#0F214A] pb-3 border-b border-gray-200" style={{ fontSize: '20px', fontWeight: '600' }}>
                    영업 정보
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center gap-2 text-[#0F214A] mb-2" style={{ fontSize: '16px', fontWeight: '500' }}>
                        <Award className="w-4 h-4" />
                        영업 경력 <span className="text-[#FF6B3D]">*</span>
                      </label>
                      <select
                        required
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B3D] outline-none transition-colors"
                      >
                        {experiences.map((exp) => (
                          <option key={exp} value={exp}>{exp}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-[#0F214A] mb-2" style={{ fontSize: '16px', fontWeight: '500' }}>
                        <MapPin className="w-4 h-4" />
                        희망 영업 지역 <span className="text-[#FF6B3D]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.region}
                        onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B3D] outline-none transition-colors"
                        placeholder="경기 남부"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-[#0F214A] mb-2" style={{ fontSize: '16px', fontWeight: '500' }}>
                        <Users className="w-4 h-4" />
                        영업팀 인원
                      </label>
                      <input
                        type="text"
                        value={formData.teamSize}
                        onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B3D] outline-none transition-colors"
                        placeholder="5명"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-[#0F214A] mb-2" style={{ fontSize: '16px', fontWeight: '500' }}>
                        <TrendingUp className="w-4 h-4" />
                        최근 1년 매출
                      </label>
                      <input
                        type="text"
                        value={formData.revenue}
                        onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B3D] outline-none transition-colors"
                        placeholder="5억원"
                      />
                    </div>
                  </div>
                </div>

                {/* 추가 사항 */}
                <div>
                  <label className="flex items-center gap-2 text-[#0F214A] mb-2" style={{ fontSize: '16px', fontWeight: '500' }}>
                    <FileText className="w-4 h-4" />
                    자기소개 및 보유 역량
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B3D] outline-none transition-colors resize-none"
                    placeholder="영업 경험, 보유 고객층, 강점 등을 자유롭게 작성해주세요."
                  />
                </div>

                {/* 개인정보 동의 */}
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <input type="checkbox" required className="mt-1" />
                  <p className="text-[#0F214A]/70" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                    개인정보 수집 및 이용에 동의하며, 영업사 등록 조건을 준수할 것을 약속합니다.
                  </p>
                </div>

                {/* 제출 버튼 */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[#FF6B3D] text-white rounded-xl hover:bg-[#FF7C40] transition-all shadow-lg hover:shadow-xl"
                  style={{ fontSize: '18px', fontWeight: '600' }}
                >
                  등록 신청하기
                </button>
              </form>
            </div>
          </div>

          {/* 사이드바 */}
          <div className="space-y-6">
            {/* 등록 조건 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-[#0F214A] mb-6" style={{ fontSize: '20px', fontWeight: '600' }}>
                등록 조건
              </h3>
              <ul className="space-y-3">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#FF6B3D] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#0F214A]/70" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                      {req}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 수수료 안내 */}
            <div className="bg-gradient-to-br from-[#FF6B3D] to-[#FF8C5C] rounded-2xl p-6 text-white">
              <h3 className="text-white mb-4" style={{ fontSize: '20px', fontWeight: '600' }}>
                수수료 안내
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span>신규 계약</span>
                  <span style={{ fontSize: '20px', fontWeight: '700' }}>3-5%</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span>상담 소개</span>
                  <span style={{ fontSize: '20px', fontWeight: '700' }}>1-2%</span>
                </div>
                <p className="text-white/90 mt-4" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                  * 계약 금액 및 조건에 따라 변동<br />
                  * 정산 주기: 월 1회
                </p>
              </div>
            </div>

            {/* 문의 */}
            <div className="bg-[#0F214A] rounded-2xl p-6 text-white">
              <h3 className="text-white mb-4" style={{ fontSize: '20px', fontWeight: '600' }}>
                담당자 문의
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
                    <p style={{ fontSize: '16px', fontWeight: '500' }}>partner@tyrant.co.kr</p>
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