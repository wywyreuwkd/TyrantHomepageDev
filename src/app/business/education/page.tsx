import { GraduationCap, BookOpen, Users, Award, CheckCircle2, Clock, Calendar } from "lucide-react";

export default function BusinessEducation() {
  const programs = [
    {
      icon: BookOpen,
      title: "기초 과정",
      duration: "1일",
      target: "태양광 입문자",
      items: ["태양광 기본 이론", "발전 원리", "주요 설비", "사업 절차"],
      color: "#FF6B3D"
    },
    {
      icon: GraduationCap,
      title: "실무 과정",
      duration: "3일",
      target: "사업 준비자",
      items: ["사업성 분석", "인허가 실무", "시공 관리", "운영 관리"],
      color: "#00D9FF"
    },
    {
      icon: Award,
      title: "전문가 과정",
      duration: "5일",
      target: "전문가 양성",
      items: ["고급 설계", "기술 실사", "PF 구조", "세무/법무"],
      color: "#FF6B3D"
    },
    {
      icon: Users,
      title: "기업 맞춤",
      duration: "협의",
      target: "기업/단체",
      items: ["맞춤형 커리큘럼", "현장 실습", "컨설팅", "사후 지원"],
      color: "#00D9FF"
    }
  ];

  const curriculum = [
    {
      category: "이론 교육",
      topics: [
        "태양광 발전 원리 및 기술",
        "태양광 설비 및 자재",
        "발전량 예측 및 분석",
        "수익 구조 이해"
      ]
    },
    {
      category: "실무 교육",
      topics: [
        "사업성 분석 실습",
        "인허가 절차 및 서류",
        "설계 및 시공 실무",
        "O&M 관리 방법"
      ]
    },
    {
      category: "현장 실습",
      topics: [
        "발전소 현장 견학",
        "설비 점검 실습",
        "모니터링 시스템 사용",
        "문제 해결 실습"
      ]
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "수료증 발급",
      desc: "과정 이수 시 수료증 발급",
      color: "#FF6B3D"
    },
    {
      icon: Users,
      title: "전문가 강의",
      desc: "10년+ 경력 전문가 직접 강의",
      color: "#00D9FF"
    },
    {
      icon: BookOpen,
      title: "실무 자료",
      desc: "실무에 바로 활용 가능한 자료 제공",
      color: "#FF6B3D"
    },
    {
      icon: Calendar,
      title: "사후 지원",
      desc: "교육 후 1년간 무료 상담",
      color: "#00D9FF"
    }
  ];

  const schedule = [
    { time: "09:00 - 10:30", content: "이론 교육 (1부)" },
    { time: "10:40 - 12:00", content: "이론 교육 (2부)" },
    { time: "12:00 - 13:00", content: "점심 시간" },
    { time: "13:00 - 15:00", content: "실습 교육" },
    { time: "15:10 - 17:00", content: "Q&A 및 토론" }
  ];

  return (
    <div className="min-h-screen bg-white" style={{ paddingTop: '80px' }}>
      {/* Hero - 네이비 */}
      <section className="relative bg-gradient-to-br from-[#0F214A] via-[#15305A] to-[#273b82] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF6B3D] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative mx-auto px-6 md:px-10 py-20 md:py-32" style={{ maxWidth: '1280px' }}>
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-[#FF6B3D]/20 border border-[#FF6B3D]/30 mb-6" style={{ borderRadius: '100px' }}>
              <span style={{ 
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '14px',
                fontWeight: '600',
                color: '#FF6B3D'
              }}>
                EDUCATION
              </span>
            </div>
            
            <h1 style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: '700',
              lineHeight: '1.3',
              marginBottom: '24px'
            }}>
              태양광 교육
            </h1>
            
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '18px',
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '32px'
            }}>
              체계적인 교육 프로그램으로<br className="hidden md:block" />
              태양광 전문가로 성장하세요.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20" style={{ borderRadius: '100px' }}>
                <GraduationCap size={20} style={{ color: '#FF6B3D' }} />
                <span style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: 'white'
                }}>
                  전문가 강의
                </span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20" style={{ borderRadius: '100px' }}>
                <Award size={20} style={{ color: '#00D9FF' }} />
                <span style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: 'white'
                }}>
                  수료증 발급
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs - 하얀 배경 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="mb-16 text-center">
            <h2 style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '40px',
              fontWeight: '700',
              color: '#0F214A',
              marginBottom: '16px'
            }}>
              교육 프로그램
            </h2>
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '17px',
              color: '#666'
            }}>
              수준별 맞춤 교육으로 단계적 성장을 지원합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group p-8"
                style={{
                  background: 'white',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: '24px',
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div
                  className="w-16 h-16 mb-6 flex items-center justify-center"
                  style={{
                    background: `${program.color}15`,
                    borderRadius: '16px',
                    border: `1px solid ${program.color}20`
                  }}
                >
                  <program.icon size={32} style={{ color: program.color }} />
                </div>

                <div className="mb-6">
                  <h3 style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '22px',
                    fontWeight: '600',
                    color: '#0F214A',
                    marginBottom: '8px'
                  }}>
                    {program.title}
                  </h3>

                  <div className="flex gap-4 mb-3">
                    <div className="flex items-center gap-2">
                      <Clock size={14} style={{ color: '#999' }} />
                      <span style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '13px',
                        color: '#999'
                      }}>
                        {program.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={14} style={{ color: '#999' }} />
                      <span style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '13px',
                        color: '#999'
                      }}>
                        {program.target}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  {program.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-2">
                      <div
                        className="mt-1"
                        style={{
                          width: '6px',
                          height: '6px',
                          background: program.color,
                          borderRadius: '50%',
                          flexShrink: 0
                        }}
                      ></div>
                      <span style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '15px',
                        color: '#666',
                        lineHeight: '1.5'
                      }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    borderRadius: '24px',
                    border: `2px solid ${program.color}`,
                    boxShadow: `0 12px 32px ${program.color}15`
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum - 그레이 배경 */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="mb-16">
            <h2 style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '40px',
              fontWeight: '700',
              color: '#0F214A',
              marginBottom: '16px'
            }}>
              커리큘럼
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {curriculum.map((item, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: '20px',
                  padding: '32px',
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)'
                }}
              >
                <h3 style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '22px',
                  fontWeight: '600',
                  color: '#0F214A',
                  marginBottom: '20px'
                }}>
                  {item.category}
                </h3>

                <div className="space-y-3">
                  {item.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center gap-3">
                      <CheckCircle2 size={18} style={{ color: index % 2 === 0 ? '#FF6B3D' : '#00D9FF', flexShrink: 0 }} />
                      <span style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '16px',
                        color: '#333'
                      }}>
                        {topic}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule - 하얀 배경 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="max-w-3xl mx-auto">
            <div className="mb-12 text-center">
              <h2 style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '40px',
                fontWeight: '700',
                color: '#0F214A',
                marginBottom: '16px'
              }}>
                일일 교육 일정
              </h2>
            </div>

            <div className="space-y-4">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 p-6"
                  style={{
                    background: 'white',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    borderRadius: '16px',
                    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)'
                  }}
                >
                  <div
                    className="px-4 py-2"
                    style={{
                      background: index % 2 === 0 ? '#FF6B3D10' : '#00D9FF10',
                      borderRadius: '100px',
                      flexShrink: 0
                    }}
                  >
                    <span style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '15px',
                      fontWeight: '600',
                      color: index % 2 === 0 ? '#FF6B3D' : '#00D9FF'
                    }}>
                      {item.time}
                    </span>
                  </div>
                  <span style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '16px',
                    color: '#333'
                  }}>
                    {item.content}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits - 그레이 배경 */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="mb-12 text-center">
            <h2 style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '40px',
              fontWeight: '700',
              color: '#0F214A',
              marginBottom: '16px'
            }}>
              교육 혜택
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-8"
                style={{
                  background: 'white',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: '20px',
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)'
                }}
              >
                <div
                  className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                  style={{
                    background: `${benefit.color}15`,
                    borderRadius: '16px',
                    border: `1px solid ${benefit.color}20`
                  }}
                >
                  <benefit.icon size={32} style={{ color: benefit.color }} />
                </div>

                <h3 style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#0F214A',
                  marginBottom: '8px'
                }}>
                  {benefit.title}
                </h3>

                <p style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '15px',
                  color: '#666',
                  lineHeight: '1.5'
                }}>
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - 네이비 */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0F214A] via-[#15305A] to-[#273b82] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D9FF] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6B3D] rounded-full blur-3xl"></div>
        </div>

        <div className="relative mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '40px',
              fontWeight: '700',
              lineHeight: '1.3',
              marginBottom: '24px'
            }}>
              태양광 전문가의 길<br />
              지금 시작하세요
            </h2>

            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '18px',
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '40px'
            }}>
              체계적인 교육으로 성공적인 태양광 사업을 시작하세요
            </p>

            <button
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '16px',
                fontWeight: '600',
                padding: '16px 40px',
                background: '#FF6B3D',
                color: 'white',
                border: 'none',
                borderRadius: '100px',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(255, 107, 61, 0.3)'
              }}
            >
              교육 신청하기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
