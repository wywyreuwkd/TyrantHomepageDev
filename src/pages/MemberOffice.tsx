import { PageHero } from "../components/PageHero";
import { Building2, MapPin, Phone, Mail, Clock, Wifi, Coffee, Printer, Users, Car, Shield, DollarSign } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function MemberOffice() {
  const facilities = [
    { icon: Wifi, name: "초고속 인터넷", desc: "기가 인터넷 무료 제공" },
    { icon: Coffee, name: "라운지", desc: "커피/음료 무료" },
    { icon: Printer, name: "사무기기", desc: "복합기, 프린터" },
    { icon: Users, name: "회의실", desc: "중/대형 회의실" },
    { icon: Car, name: "주차장", desc: "무료 주차 2시간" },
    { icon: Shield, name: "보안", desc: "24시간 출입통제" }
  ];

  const officeTypes = [
    {
      name: "1인실",
      size: "10㎡",
      capacity: "1-2인",
      price: "30만원/월",
      features: ["개별 냉난방", "책상/의자", "사물함", "인터넷"],
      available: 3
    },
    {
      name: "2인실",
      size: "15㎡",
      capacity: "2-3인",
      price: "50만원/월",
      features: ["개별 냉난방", "책상/의자 2set", "사물함", "인터넷", "소형 테이블"],
      available: 5
    },
    {
      name: "4인실",
      size: "25㎡",
      capacity: "4-5인",
      price: "90만원/월",
      features: ["개별 냉난방", "책상/의자 4set", "사물함", "인터넷", "회의 테이블", "화이트보드"],
      available: 2
    },
    {
      name: "전용 오피스",
      size: "50㎡~",
      capacity: "10인 이상",
      price: "별도 협의",
      features: ["독립 공간", "맞춤 인테리어", "전용 회의실", "사무가구 포함", "전용 입구"],
      available: 1
    }
  ];

  const benefits = [
    "타이런트 영업사/시공사 우대 요금",
    "계약 시 보증금 50% 할인",
    "회의실 이용료 50% 할인",
    "네트워킹 행사 우선 초대",
    "사업 상담 및 컨설팅 지원",
    "공동 수주 기회 제공"
  ];

  const location = {
    address: "서울특별시 강남구 테헤란로 123",
    building: "타이런트빌딩 8-9층",
    subway: "2호선 역삼역 3번 출구 도보 5분",
    bus: "146, 301, 740번 버스",
    parking: "건물 지하 1-3층 (2시간 무료)"
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ paddingTop: '80px' }}>
      <PageHero
        badge={{ text: "MEMBER OFFICE", color: "#FF6B3D" }}
        title="사무공간 소개"
        description="회원사 전용 프리미엄 오피스 공간을 제공합니다"
      />

      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10 py-12 md:py-24">
        
        {/* 공간 이미지 */}
        <div className="mb-16 grid md:grid-cols-2 gap-6">
          <div className="aspect-[4/3] bg-gradient-to-br from-[#0F214A] to-[#15305A] rounded-2xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"
              alt="오피스 공간"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] bg-gradient-to-br from-[#15305A] to-[#273b82] rounded-2xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800"
              alt="회의실"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 시설 안내 */}
        <div className="mb-16">
          <h2 className="text-[#0F214A] mb-8 text-center">제공 시설</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <div className="w-14 h-14 bg-[#FF6B3D]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <facility.icon className="w-7 h-7 text-[#FF6B3D]" />
                </div>
                <h3 className="text-[#0F214A] mb-1" style={{ fontSize: '16px', fontWeight: '600' }}>
                  {facility.name}
                </h3>
                <p className="text-[#0F214A]/60" style={{ fontSize: '13px' }}>
                  {facility.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 오피스 타입 */}
        <div className="mb-16">
          <h2 className="text-[#0F214A] mb-8 text-center">오피스 타입</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {officeTypes.map((office, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-[#FF6B3D] transition-all">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-[#0F214A] mb-2" style={{ fontSize: '24px', fontWeight: '600' }}>
                      {office.name}
                    </h3>
                    <div className="flex items-center gap-4 text-[#0F214A]/70" style={{ fontSize: '15px' }}>
                      <span>{office.size}</span>
                      <span>•</span>
                      <span>{office.capacity}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[#FF6B3D] mb-1" style={{ fontSize: '22px', fontWeight: '700' }}>
                      {office.price}
                    </p>
                    <p className="text-[#0F214A]/60" style={{ fontSize: '13px' }}>
                      입실 가능: {office.available}개
                    </p>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {office.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#FF6B3D] rounded-full"></div>
                      <span className="text-[#0F214A]/70" style={{ fontSize: '15px' }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-3 bg-[#0F214A] text-white rounded-xl hover:bg-[#15305A] transition-all" style={{ fontWeight: '600' }}>
                  입실 문의
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 회원사 혜택 */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-[#FF6B3D] to-[#FF8C5C] rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-white mb-4">회원사 특별 혜택</h2>
              <p className="text-white/90 mb-8" style={{ fontSize: '18px' }}>
                타이런트 영업사 및 시공사에게 특별한 혜택을 제공합니다
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-white text-[#FF6B3D] rounded-full flex items-center justify-center flex-shrink-0" style={{ fontWeight: '700', fontSize: '14px' }}>
                        {index + 1}
                      </div>
                      <span style={{ fontSize: '16px', fontWeight: '500' }}>
                        {benefit}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 오시는 길 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-[#FF6B3D]" />
              <h3 className="text-[#0F214A]" style={{ fontSize: '22px', fontWeight: '600' }}>
                오시는 길
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-[#0F214A]/70 mb-2" style={{ fontSize: '14px', fontWeight: '600' }}>
                  주소
                </p>
                <p className="text-[#0F214A]" style={{ fontSize: '18px', fontWeight: '500' }}>
                  {location.address}
                </p>
                <p className="text-[#0F214A]/70" style={{ fontSize: '16px' }}>
                  {location.building}
                </p>
              </div>

              <div className="h-px bg-gray-200"></div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-[#FF6B3D] mt-1" style={{ fontSize: '18px' }}>🚇</span>
                  <div>
                    <p className="text-[#0F214A]/70 mb-1" style={{ fontSize: '14px', fontWeight: '600' }}>
                      지하철
                    </p>
                    <p className="text-[#0F214A]" style={{ fontSize: '15px' }}>
                      {location.subway}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-[#FF6B3D] mt-1" style={{ fontSize: '18px' }}>🚌</span>
                  <div>
                    <p className="text-[#0F214A]/70 mb-1" style={{ fontSize: '14px', fontWeight: '600' }}>
                      버스
                    </p>
                    <p className="text-[#0F214A]" style={{ fontSize: '15px' }}>
                      {location.bus}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-[#FF6B3D] mt-1" style={{ fontSize: '18px' }}>🚗</span>
                  <div>
                    <p className="text-[#0F214A]/70 mb-1" style={{ fontSize: '14px', fontWeight: '600' }}>
                      주차
                    </p>
                    <p className="text-[#0F214A]" style={{ fontSize: '15px' }}>
                      {location.parking}
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-px bg-gray-200"></div>

              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800"
                  alt="위치 지도"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* 문의 및 입실 절차 */}
          <div className="space-y-6">
            {/* 문의 */}
            <div className="bg-[#0F214A] rounded-2xl p-8 text-white">
              <h3 className="text-white mb-6" style={{ fontSize: '22px', fontWeight: '600' }}>
                입실 문의
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#FF6B3D]" />
                  <div>
                    <p className="text-white/70" style={{ fontSize: '14px' }}>전화 문의</p>
                    <p style={{ fontSize: '20px', fontWeight: '600' }}>1588-0000</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#FF6B3D]" />
                  <div>
                    <p className="text-white/70" style={{ fontSize: '14px' }}>이메일</p>
                    <p style={{ fontSize: '17px', fontWeight: '500' }}>office@tyrant.co.kr</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#FF6B3D]" />
                  <div>
                    <p className="text-white/70" style={{ fontSize: '14px' }}>운영 시간</p>
                    <p style={{ fontSize: '17px', fontWeight: '500' }}>평일 09:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 입실 절차 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-[#0F214A] mb-6" style={{ fontSize: '22px', fontWeight: '600' }}>
                입실 절차
              </h3>
              <div className="space-y-4">
                {[
                  { step: "1", title: "상담 신청", desc: "전화 또는 이메일 문의" },
                  { step: "2", title: "현장 방문", desc: "오피스 공간 둘러보기" },
                  { step: "3", title: "계약 체결", desc: "임대차 계약서 작성" },
                  { step: "4", title: "입실", desc: "즉시 사용 가능" }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#FF6B3D] text-white rounded-full flex items-center justify-center" style={{ fontWeight: '700' }}>
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-[#0F214A] mb-1" style={{ fontSize: '17px', fontWeight: '600' }}>
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

            {/* 필수 서류 */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <h3 className="text-[#0F214A] mb-4" style={{ fontSize: '18px', fontWeight: '600' }}>
                입실 필수 서류
              </h3>
              <ul className="space-y-2 text-[#0F214A]/70" style={{ fontSize: '15px' }}>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#FF6B3D] rounded-full"></div>
                  <span>사업자등록증 사본</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#FF6B3D] rounded-full"></div>
                  <span>대표자 신분증 사본</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#FF6B3D] rounded-full"></div>
                  <span>법인등기부등본 (법인인 경우)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}