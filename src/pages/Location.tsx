import { MapPin, Phone, Mail, Clock, Car, Train } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { SubNavigation } from "../components/SubNavigation";

interface LocationProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Location({ onNavigate, currentPage }: LocationProps) {
  return (
    <div style={{ paddingTop: '80px' }}>
      <PageHero
        badge={{ text: "고객센터", color: "#FF6B3D" }}
        title="오시는 길"
        description="타이런트를 찾아오시는 길을 안내해 드립니다."
      />

      {/* Sub Navigation - Below Hero */}
      <SubNavigation category="customer" currentPage={currentPage} onNavigate={onNavigate} />

      {/* 메인 컨텐츠 */}
      <section style={{ 
        background: '#0F214A',
        padding: '80px 0'
      }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          
          {/* 지도 섹션 */}
          <div 
            className="bg-white overflow-hidden mb-12"
            style={{ 
              borderRadius: '24px',
              boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div style={{ width: '100%', height: '500px', position: 'relative' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.8537653348394!2d126.97817!3d37.56682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDM0JzAwLjYiTiAxMjbCsDU4JzQxLjQiRQ!5e0!3m2!1sko!2skr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* 정보 그리드 */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* 주소 및 연락처 */}
            <div 
              className="bg-gradient-to-br from-[#15305A] to-[#0E1C45] p-8"
              style={{ 
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <h3 
                className="text-white mb-6"
                style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '24px',
                  fontWeight: '700'
                }}
              >
                연락처 정보
              </h3>

              <div className="space-y-5">
                <div className="flex gap-4">
                  <div 
                    className="flex-shrink-0 flex items-center justify-center bg-[#FF6B3D] text-white"
                    style={{ width: '48px', height: '48px', borderRadius: '12px' }}
                  >
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p 
                      className="text-white/70 mb-1"
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '14px'
                      }}
                    >
                      주소
                    </p>
                    <p 
                      className="text-white"
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '16px',
                        lineHeight: '140%'
                      }}
                    >
                      서울특별시 중구 세종대로 110<br />
                      타이런트빌딩 10층
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div 
                    className="flex-shrink-0 flex items-center justify-center bg-[#FF6B3D] text-white"
                    style={{ width: '48px', height: '48px', borderRadius: '12px' }}
                  >
                    <Phone size={24} />
                  </div>
                  <div>
                    <p 
                      className="text-white/70 mb-1"
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '14px'
                      }}
                    >
                      전화
                    </p>
                    <p 
                      className="text-white"
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '16px'
                      }}
                    >
                      02-1234-5678
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div 
                    className="flex-shrink-0 flex items-center justify-center bg-[#FF6B3D] text-white"
                    style={{ width: '48px', height: '48px', borderRadius: '12px' }}
                  >
                    <Mail size={24} />
                  </div>
                  <div>
                    <p 
                      className="text-white/70 mb-1"
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '14px'
                      }}
                    >
                      이메일
                    </p>
                    <p 
                      className="text-white"
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '16px'
                      }}
                    >
                      contact@tyrant.co.kr
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div 
                    className="flex-shrink-0 flex items-center justify-center bg-[#FF6B3D] text-white"
                    style={{ width: '48px', height: '48px', borderRadius: '12px' }}
                  >
                    <Clock size={24} />
                  </div>
                  <div>
                    <p 
                      className="text-white/70 mb-1"
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '14px'
                      }}
                    >
                      운영시간
                    </p>
                    <p 
                      className="text-white"
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '16px',
                        lineHeight: '140%'
                      }}
                    >
                      평일 09:00 - 18:00<br />
                      주말 및 공휴일 휴무
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 교통편 안내 */}
            <div 
              className="bg-gradient-to-br from-[#15305A] to-[#0E1C45] p-8"
              style={{ 
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <h3 
                className="text-white mb-6"
                style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '24px',
                  fontWeight: '700'
                }}
              >
                교통편 안내
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div 
                      className="flex-shrink-0 flex items-center justify-center bg-[#FF6B3D] text-white"
                      style={{ width: '48px', height: '48px', borderRadius: '12px' }}
                    >
                      <Train size={24} />
                    </div>
                    <h4 
                      className="text-white"
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '18px',
                        fontWeight: '600'
                      }}
                    >
                      지하철
                    </h4>
                  </div>
                  <div 
                    className="ml-16 space-y-2"
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '15px',
                      lineHeight: '140%',
                      color: 'rgba(255, 255, 255, 0.9)'
                    }}
                  >
                    <p>• 1호선/2호선 시청역 3번 출구 (도보 5분)</p>
                    <p>• 2호선 을지로입구역 7번 출구 (도보 7분)</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div 
                      className="flex-shrink-0 flex items-center justify-center bg-[#FF6B3D] text-white"
                      style={{ width: '48px', height: '48px', borderRadius: '12px' }}
                    >
                      <Car size={24} />
                    </div>
                    <h4 
                      className="text-white"
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '18px',
                        fontWeight: '600'
                      }}
                    >
                      자동차
                    </h4>
                  </div>
                  <div 
                    className="ml-16 space-y-2"
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '15px',
                      lineHeight: '140%',
                      color: 'rgba(255, 255, 255, 0.9)'
                    }}
                  >
                    <p>• 네비게이션: "타이런트빌딩" 검색</p>
                    <p>• 주차: 건물 지하 주차장 이용 가능</p>
                    <p>• 주차 요금: 방문객 2시간 무료</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 방문 시 참고사항 */}
          <div 
            className="bg-gradient-to-r from-[#FF6B3D]/10 to-transparent p-8"
            style={{ 
              borderRadius: '24px',
              border: '1px solid rgba(255, 107, 61, 0.2)'
            }}
          >
            <h3 
              className="text-white mb-4"
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '20px',
                fontWeight: '700'
              }}
            >
              방문 시 참고사항
            </h3>
            <ul 
              className="space-y-2 text-white/90"
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '15px',
                lineHeight: '140%'
              }}
            >
              <li>• 방문 상담을 원하시는 경우, 사전 예약을 부탁드립니다.</li>
              <li>• 건물 1층 안내데스크에서 방문 접수 후 출입이 가능합니다.</li>
              <li>• 주차 공간이 제한적이므로 가급적 대중교통을 이용해 주시기 바랍니다.</li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}