import { Send, Phone, Mail, MapPin, User, Building2, MessageSquare, FileText, Calendar, CheckCircle2 } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { ScrollReveal } from "../components/ScrollReveal";
import { useState } from "react";

interface InquiryProps {
  onNavigate: (page: string) => void;
  currentPage: string;
  initialTab?: string;
}

export function Inquiry({ onNavigate, currentPage, initialTab = "태양광 접수" }: InquiryProps) {
  const [selectedTab, setSelectedTab] = useState(initialTab);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    address: "",
    roofArea: "",
    buildingType: "",
    message: ""
  });

  // 탭 메뉴
  const tabs = [
    { id: "태양광 접수", icon: FileText, color: "#FF6B3D" },
    { id: "기자재 구매", icon: Building2, color: "#0F214A" },
    { id: "사업성 분석", icon: CheckCircle2, color: "#4A90E2" },
    { id: "기술실사", icon: FileText, color: "#34C759" },
    { id: "태양광 교육", icon: User, color: "#AF52DE" },
    { id: "기타문의", icon: MessageSquare, color: "#FF6B3D" }
  ];

  // 문의 유형별 안내 텍스트
  const tabDescriptions: { [key: string]: { title: string; description: string } } = {
    "태양광 접수": {
      title: "태양광 무상설치 신청",
      description: "건물주님의 지붕에 무료로 태양광 발전소를 설치해드립니다. 초기 투자 없이 전기요금 절감과 수익 창출이 가능합니다."
    },
    "기자재 구매": {
      title: "태양광 기자재 구매 문의",
      description: "태양광 모듈, 인버터, 구조물 등 검증된 A급 기자재를 경쟁력 있는 가격으로 공급해드립니다."
    },
    "사업성 분석": {
      title: "태양광 사업성 분석(FS) 의뢰",
      description: "전문가의 정밀한 사업성 분석으로 투자 타당성을 검토하고 최적의 수익 모델을 제시해드립니다."
    },
    "기술실사": {
      title: "태양광 기술실사 의뢰",
      description: "발전소 매입/매각 전 전문가의 기술실사를 통해 설비 상태와 발전 효율을 정확하게 평가해드립니다."
    },
    "태양광 교육": {
      title: "태양광 전문 교육 신청",
      description: "태양광 사업의 A to Z를 배울 수 있는 전문 교육 프로그램입니다. 초보자부터 전문가까지 맞춤형 교육을 제공합니다."
    },
    "기타문의": {
      title: "기타 문의사항",
      description: "태양광 사업과 관련된 모든 궁금증을 문의해주세요. 전문 상담사가 신속하게 답변해드립니다."
    }
  };

  // 폼 제출 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.");
    // 실제로는 서버로 데이터 전송
  };

  // 문의 안내 정보
  const contactInfo = [
    {
      icon: Phone,
      title: "전화 문의",
      content: "1588-XXXX",
      sub: "평일 09:00 - 18:00"
    },
    {
      icon: Mail,
      title: "이메일",
      content: "contact@tyrant.com",
      sub: "24시간 접수 가능"
    },
    {
      icon: MapPin,
      title: "방문 상담",
      content: "서울시 강남구 테헤란로",
      sub: "사전 예약 필수"
    }
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <PageHero
        badge={{ text: "INQUIRY", color: "#FF6B3D" }}
        title="사업접수 및 문의"
        description="태양광 무상설치부터 기자재 구매, 사업성 분석까지 모든 문의를 받습니다. 전문 상담사가 친절하게 안내해드립니다"
      />

      {/* 탭 메뉴 */}
      <section style={{ background: 'white', padding: '40px 0 0 0', borderBottom: '2px solid #F7FAFD' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <ScrollReveal direction="up">
            <div className="flex flex-wrap justify-center gap-3">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTab(tab.id)}
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '16px',
                    fontWeight: selectedTab === tab.id ? '700' : '500',
                    padding: '16px 32px',
                    background: selectedTab === tab.id 
                      ? `linear-gradient(135deg, ${tab.color}, ${tab.color}DD)` 
                      : 'white',
                    color: selectedTab === tab.id ? 'white' : '#666',
                    border: selectedTab === tab.id ? 'none' : '2px solid rgba(15, 33, 74, 0.1)',
                    borderRadius: '100px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: selectedTab === tab.id 
                      ? `0 8px 24px ${tab.color}40` 
                      : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  onMouseEnter={(e) => {
                    if (selectedTab !== tab.id) {
                      e.currentTarget.style.borderColor = tab.color;
                      e.currentTarget.style.color = tab.color;
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedTab !== tab.id) {
                      e.currentTarget.style.borderColor = 'rgba(15, 33, 74, 0.1)';
                      e.currentTarget.style.color = '#666';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  <tab.icon size={20} />
                  {tab.id}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 문의 폼 섹션 */}
      <section style={{ background: '#F7FAFD', padding: '80px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* 왼쪽: 안내 정보 */}
            <div className="lg:col-span-1">
              <ScrollReveal direction="left">
                <div
                  style={{
                    background: 'linear-gradient(135deg, #0F214A, #273b82)',
                    borderRadius: '24px',
                    padding: '40px',
                    boxShadow: '0 8px 32px rgba(15, 33, 74, 0.15)',
                    height: '100%'
                  }}
                >
                  <h3
                    className="text-white mb-4"
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '32px',
                      fontWeight: '700',
                      lineHeight: '1.4'
                    }}
                  >
                    {tabDescriptions[selectedTab].title}
                  </h3>

                  <p
                    className="text-white mb-8"
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '18px',
                      lineHeight: '1.7',
                      opacity: 0.9
                    }}
                  >
                    {tabDescriptions[selectedTab].description}
                  </p>

                  {/* 연락처 정보 */}
                  <div className="space-y-6 mt-12">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div
                          style={{
                            width: '48px',
                            height: '48px',
                            background: 'rgba(255, 107, 61, 0.2)',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}
                        >
                          <info.icon size={24} style={{ color: '#FF6B3D' }} />
                        </div>
                        <div>
                          <p
                            style={{
                              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                              fontSize: '14px',
                              color: 'rgba(255, 255, 255, 0.7)',
                              marginBottom: '4px'
                            }}
                          >
                            {info.title}
                          </p>
                          <p
                            style={{
                              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                              fontSize: '18px',
                              fontWeight: '700',
                              color: 'white',
                              marginBottom: '2px'
                            }}
                          >
                            {info.content}
                          </p>
                          <p
                            style={{
                              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                              fontSize: '14px',
                              color: 'rgba(255, 255, 255, 0.6)'
                            }}
                          >
                            {info.sub}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 빠른 상담 신청 안내 */}
                  <div
                    className="mt-8 p-6"
                    style={{
                      background: 'rgba(255, 107, 61, 0.1)',
                      borderRadius: '16px',
                      border: '2px solid rgba(255, 107, 61, 0.3)'
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '16px',
                        color: '#FF6B3D',
                        fontWeight: '700',
                        marginBottom: '8px'
                      }}
                    >
                      ⚡ 빠른 상담 안내
                    </p>
                    <p
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '14px',
                        color: 'rgba(255, 255, 255, 0.8)',
                        lineHeight: '1.6'
                      }}
                    >
                      문의 접수 후 평균 2시간 이내 연락드립니다. 급하신 경우 전화로 문의해주세요.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* 오른쪽: 문의 폼 */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="right">
                <div
                  style={{
                    background: 'white',
                    borderRadius: '24px',
                    padding: '48px',
                    border: '2px solid rgba(15, 33, 74, 0.1)',
                    boxShadow: '0 8px 32px rgba(15, 33, 74, 0.08)'
                  }}
                >
                  <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      {/* 이름 */}
                      <div>
                        <label
                          style={{
                            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                            fontSize: '16px',
                            fontWeight: '600',
                            color: '#0F214A',
                            display: 'block',
                            marginBottom: '12px'
                          }}
                        >
                          이름 <span style={{ color: '#FF6B3D' }}>*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="홍길동"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          style={{
                            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                            fontSize: '16px',
                            width: '100%',
                            padding: '16px',
                            border: '2px solid rgba(15, 33, 74, 0.1)',
                            borderRadius: '12px',
                            outline: 'none',
                            transition: 'all 0.3s ease'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = '#FF6B3D';
                            e.target.style.boxShadow = '0 0 0 3px rgba(255, 107, 61, 0.1)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = 'rgba(15, 33, 74, 0.1)';
                            e.target.style.boxShadow = 'none';
                          }}
                        />
                      </div>

                      {/* 회사명 */}
                      <div>
                        <label
                          style={{
                            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                            fontSize: '16px',
                            fontWeight: '600',
                            color: '#0F214A',
                            display: 'block',
                            marginBottom: '12px'
                          }}
                        >
                          회사명
                        </label>
                        <input
                          type="text"
                          placeholder="타이런트"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          style={{
                            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                            fontSize: '16px',
                            width: '100%',
                            padding: '16px',
                            border: '2px solid rgba(15, 33, 74, 0.1)',
                            borderRadius: '12px',
                            outline: 'none',
                            transition: 'all 0.3s ease'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = '#FF6B3D';
                            e.target.style.boxShadow = '0 0 0 3px rgba(255, 107, 61, 0.1)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = 'rgba(15, 33, 74, 0.1)';
                            e.target.style.boxShadow = 'none';
                          }}
                        />
                      </div>

                      {/* 연락처 */}
                      <div>
                        <label
                          style={{
                            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                            fontSize: '16px',
                            fontWeight: '600',
                            color: '#0F214A',
                            display: 'block',
                            marginBottom: '12px'
                          }}
                        >
                          연락처 <span style={{ color: '#FF6B3D' }}>*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="010-1234-5678"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          style={{
                            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                            fontSize: '16px',
                            width: '100%',
                            padding: '16px',
                            border: '2px solid rgba(15, 33, 74, 0.1)',
                            borderRadius: '12px',
                            outline: 'none',
                            transition: 'all 0.3s ease'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = '#FF6B3D';
                            e.target.style.boxShadow = '0 0 0 3px rgba(255, 107, 61, 0.1)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = 'rgba(15, 33, 74, 0.1)';
                            e.target.style.boxShadow = 'none';
                          }}
                        />
                      </div>

                      {/* 이메일 */}
                      <div>
                        <label
                          style={{
                            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                            fontSize: '16px',
                            fontWeight: '600',
                            color: '#0F214A',
                            display: 'block',
                            marginBottom: '12px'
                          }}
                        >
                          이메일 <span style={{ color: '#FF6B3D' }}>*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="example@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          style={{
                            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                            fontSize: '16px',
                            width: '100%',
                            padding: '16px',
                            border: '2px solid rgba(15, 33, 74, 0.1)',
                            borderRadius: '12px',
                            outline: 'none',
                            transition: 'all 0.3s ease'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = '#FF6B3D';
                            e.target.style.boxShadow = '0 0 0 3px rgba(255, 107, 61, 0.1)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = 'rgba(15, 33, 74, 0.1)';
                            e.target.style.boxShadow = 'none';
                          }}
                        />
                      </div>
                    </div>

                    {/* 태양광 접수 전용 필드 */}
                    {selectedTab === "태양광 접수" && (
                      <>
                        <div className="mb-6">
                          <label
                            style={{
                              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                              fontSize: '16px',
                              fontWeight: '600',
                              color: '#0F214A',
                              display: 'block',
                              marginBottom: '12px'
                            }}
                          >
                            건물 주소 <span style={{ color: '#FF6B3D' }}>*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="서울시 강남구 테헤란로 123"
                            value={formData.address}
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            style={{
                              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                              fontSize: '16px',
                              width: '100%',
                              padding: '16px',
                              border: '2px solid rgba(15, 33, 74, 0.1)',
                              borderRadius: '12px',
                              outline: 'none',
                              transition: 'all 0.3s ease'
                            }}
                            onFocus={(e) => {
                              e.target.style.borderColor = '#FF6B3D';
                              e.target.style.boxShadow = '0 0 0 3px rgba(255, 107, 61, 0.1)';
                            }}
                            onBlur={(e) => {
                              e.target.style.borderColor = 'rgba(15, 33, 74, 0.1)';
                              e.target.style.boxShadow = 'none';
                            }}
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <label
                              style={{
                                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                                fontSize: '16px',
                                fontWeight: '600',
                                color: '#0F214A',
                                display: 'block',
                                marginBottom: '12px'
                              }}
                            >
                              지붕 면적 (㎡)
                            </label>
                            <input
                              type="text"
                              placeholder="예: 2000"
                              value={formData.roofArea}
                              onChange={(e) => setFormData({ ...formData, roofArea: e.target.value })}
                              style={{
                                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                                fontSize: '16px',
                                width: '100%',
                                padding: '16px',
                                border: '2px solid rgba(15, 33, 74, 0.1)',
                                borderRadius: '12px',
                                outline: 'none',
                                transition: 'all 0.3s ease'
                              }}
                              onFocus={(e) => {
                                e.target.style.borderColor = '#FF6B3D';
                                e.target.style.boxShadow = '0 0 0 3px rgba(255, 107, 61, 0.1)';
                              }}
                              onBlur={(e) => {
                                e.target.style.borderColor = 'rgba(15, 33, 74, 0.1)';
                                e.target.style.boxShadow = 'none';
                              }}
                            />
                          </div>

                          <div>
                            <label
                              style={{
                                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                                fontSize: '16px',
                                fontWeight: '600',
                                color: '#0F214A',
                                display: 'block',
                                marginBottom: '12px'
                              }}
                            >
                              건물 용도
                            </label>
                            <select
                              value={formData.buildingType}
                              onChange={(e) => setFormData({ ...formData, buildingType: e.target.value })}
                              style={{
                                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                                fontSize: '16px',
                                width: '100%',
                                padding: '16px',
                                border: '2px solid rgba(15, 33, 74, 0.1)',
                                borderRadius: '12px',
                                outline: 'none',
                                cursor: 'pointer',
                                background: 'white'
                              }}
                            >
                              <option value="">선택해주세요</option>
                              <option value="공장">공장</option>
                              <option value="물류창고">물류창고</option>
                              <option value="축사">축사</option>
                              <option value="창고">창고</option>
                              <option value="기타">기타</option>
                            </select>
                          </div>
                        </div>
                      </>
                    )}

                    {/* 문의 내용 */}
                    <div className="mb-8">
                      <label
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '16px',
                          fontWeight: '600',
                          color: '#0F214A',
                          display: 'block',
                          marginBottom: '12px'
                        }}
                      >
                        문의 내용 <span style={{ color: '#FF6B3D' }}>*</span>
                      </label>
                      <textarea
                        required
                        rows={6}
                        placeholder="궁금하신 내용을 자세히 작성해주세요"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '16px',
                          width: '100%',
                          padding: '16px',
                          border: '2px solid rgba(15, 33, 74, 0.1)',
                          borderRadius: '12px',
                          outline: 'none',
                          resize: 'vertical',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#FF6B3D';
                          e.target.style.boxShadow = '0 0 0 3px rgba(255, 107, 61, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(15, 33, 74, 0.1)';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    {/* 개인정보 동의 */}
                    <div className="mb-8 p-4" style={{ background: '#F7FAFD', borderRadius: '12px' }}>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          required
                          style={{
                            width: '20px',
                            height: '20px',
                            marginTop: '2px',
                            cursor: 'pointer'
                          }}
                        />
                        <span
                          style={{
                            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                            fontSize: '14px',
                            color: '#666',
                            lineHeight: '1.6'
                          }}
                        >
                          개인정보 수집 및 이용에 동의합니다. <span style={{ color: '#FF6B3D' }}>*</span>
                          <br />
                          <span style={{ fontSize: '12px', color: '#999' }}>
                            수집된 정보는 상담 목적으로만 사용되며, 별도 동의 없이 제3자에게 제공되지 않습니다.
                          </span>
                        </span>
                      </label>
                    </div>

                    {/* 제출 버튼 */}
                    <button
                      type="submit"
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '18px',
                        fontWeight: '700',
                        width: '100%',
                        padding: '20px',
                        background: 'linear-gradient(135deg, #FF6B3D, #FF8C3D)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '100px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 8px 24px rgba(255, 107, 61, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 12px 32px rgba(255, 107, 61, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 107, 61, 0.3)';
                      }}
                    >
                      <Send size={20} />
                      문의 접수하기
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 처리 프로세스 안내 */}
      <section style={{ background: 'white', padding: '120px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="mb-16 text-center">
            <h2
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '32px',
                fontWeight: '700',
                color: '#0F214A',
                lineHeight: '1.4',
                marginBottom: '16px'
              }}
            >
              문의 처리 프로세스
            </h2>
            <p
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '20px',
                color: '#666',
                lineHeight: '1.6'
              }}
            >
              빠르고 정확한 상담을 위한 4단계 프로세스
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "문의 접수", desc: "온라인 폼 작성" },
              { step: "02", title: "담당자 배정", desc: "전문 상담사 배정" },
              { step: "03", title: "상담 진행", desc: "전화/방문 상담" },
              { step: "04", title: "솔루션 제안", desc: "맞춤 제안서 제공" }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up">
                <div
                  className="text-center p-6"
                  style={{
                    background: 'white',
                    borderRadius: '20px',
                    border: '2px solid rgba(15, 33, 74, 0.1)',
                    boxShadow: '0 4px 16px rgba(15, 33, 74, 0.05)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(15, 33, 74, 0.12)';
                    e.currentTarget.style.borderColor = '#FF6B3D';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(15, 33, 74, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(15, 33, 74, 0.1)';
                  }}
                >
                  <div
                    className="mx-auto mb-4"
                    style={{
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, #FF6B3D, #FF8C3D)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 6px 20px rgba(255, 107, 61, 0.3)'
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '20px',
                        fontWeight: '700',
                        color: 'white'
                      }}
                    >
                      {item.step}
                    </span>
                  </div>

                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '22px',
                      fontWeight: '700',
                      color: '#0F214A'
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '16px',
                      color: '#666',
                      lineHeight: '1.5'
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}