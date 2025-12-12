import { MapPin, Building2, Zap, Calendar, TrendingUp, Search, Filter, Award, CheckCircle2 } from "lucide-react";
import { SubNavigation } from "../components/SubNavigation";
import { PageHero } from "../components/PageHero";
import { ScrollReveal } from "../components/ScrollReveal";
import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface PerformanceMapProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function PerformanceMap({ onNavigate, currentPage }: PerformanceMapProps) {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  // 지역별 프로젝트 데이터
  const projectsByRegion = {
    "서울/경기": [
      { id: 1, name: "평택 물류센터", type: "물류창고", capacity: "1,200kW", year: "2023", status: "운영중" },
      { id: 2, name: "김포 산업단지", type: "지붕형", capacity: "800kW", year: "2023", status: "운영중" },
      { id: 3, name: "의정부 공장", type: "지붕형", capacity: "500kW", year: "2024", status: "운영중" },
    ],
    "충청": [
      { id: 4, name: "천안 저수지", type: "수상태양광", capacity: "2,500kW", year: "2022", status: "운영중" },
      { id: 5, name: "청주 산업단지", type: "지붕형", capacity: "1,500kW", year: "2023", status: "운영중" },
      { id: 6, name: "아산 물류센터", type: "물류창고", capacity: "1,800kW", year: "2023", status: "운영중" },
    ],
    "전라": [
      { id: 7, name: "전주 태양광 발전소", type: "지상형", capacity: "3,000kW", year: "2021", status: "운영중" },
      { id: 8, name: "광주 저수지", type: "수상태양광", capacity: "2,200kW", year: "2022", status: "운영중" },
      { id: 9, name: "목포 산업단지", type: "지붕형", capacity: "900kW", year: "2024", status: "운영중" },
    ],
    "경상": [
      { id: 10, name: "대구 물류센터", type: "물류창고", capacity: "2,000kW", year: "2022", status: "운영중" },
      { id: 11, name: "부산 산업단지", type: "지붕형", capacity: "1,200kW", year: "2023", status: "운영중" },
      { id: 12, name: "울산 저수지", type: "수상태양광", capacity: "3,500kW", year: "2021", status: "운영중" },
    ],
    "강원": [
      { id: 13, name: "춘천 태양광 발전소", type: "지상형", capacity: "1,500kW", year: "2023", status: "운영중" },
      { id: 14, name: "원주 산업단지", type: "지붕형", capacity: "700kW", year: "2024", status: "운영중" },
    ],
    "제주": [
      { id: 15, name: "제주 태양광 발전소", type: "지상형", capacity: "2,800kW", year: "2022", status: "운영중" },
      { id: 16, name: "서귀포 저수지", type: "수상태양광", capacity: "1,600kW", year: "2023", status: "운영중" },
    ]
  };

  // 지역별 통계
  const regionStats = {
    "서울/경기": { count: 35, capacity: "45,000kW", avgSize: "1,286kW" },
    "충청": { count: 28, capacity: "38,500kW", avgSize: "1,375kW" },
    "전라": { count: 42, capacity: "52,000kW", avgSize: "1,238kW" },
    "경상": { count: 38, capacity: "48,200kW", avgSize: "1,268kW" },
    "강원": { count: 18, capacity: "22,000kW", avgSize: "1,222kW" },
    "제주": { count: 12, capacity: "18,000kW", avgSize: "1,500kW" }
  };

  // 전체 통계
  const totalStats = {
    totalProjects: 173,
    totalCapacity: "223,700kW",
    operatingProjects: 165,
    constructionProjects: 8
  };

  // 프로젝트 타입별 색상
  const typeColors: { [key: string]: string } = {
    "물류창고": "#FF6B3D",
    "지붕형": "#0F214A",
    "수상태양광": "#4A90E2",
    "지상형": "#34C759",
    "주차장": "#AF52DE"
  };

  // 지역 클릭 핸들러
  const handleRegionClick = (region: string) => {
    setSelectedRegion(region);
    setSelectedProject(null);
  };

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <PageHero
        badge={{ text: "PERFORMANCE MAP", color: "#FF6B3D" }}
        title="태양광 실적 지도"
        description="전국 173개 태양광 발전소의 위치와 현황을 한눈에 확인하세요. 지역별 실적과 프로젝트 상세 정보를 인터랙티브 지도로 제공합니다"
      />

      {/* Sub Navigation */}
      <SubNavigation category="performance" currentPage={currentPage} onNavigate={onNavigate} />

      {/* 전체 통계 */}
      <section style={{ background: 'white', padding: '80px 0 60px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="grid md:grid-cols-4 gap-6">
            <ScrollReveal direction="up" delay={0}>
              <div
                className="text-center p-8"
                style={{
                  background: 'linear-gradient(135deg, #0F214A, #273b82)',
                  borderRadius: '24px',
                  boxShadow: '0 8px 32px rgba(15, 33, 74, 0.15)'
                }}
              >
                <div
                  className="mx-auto mb-4"
                  style={{
                    width: '60px',
                    height: '60px',
                    background: 'rgba(255, 107, 61, 0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Building2 size={32} style={{ color: '#FF6B3D' }} />
                </div>
                <p
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '36px',
                    fontWeight: '700',
                    color: '#FF6B3D',
                    marginBottom: '8px'
                  }}
                >
                  {totalStats.totalProjects}
                </p>
                <p
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '16px',
                    color: 'rgba(255, 255, 255, 0.9)'
                  }}
                >
                  총 프로젝트
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <div
                className="text-center p-8"
                style={{
                  background: 'linear-gradient(135deg, #FF6B3D, #FF8C3D)',
                  borderRadius: '24px',
                  boxShadow: '0 8px 32px rgba(255, 107, 61, 0.3)'
                }}
              >
                <div
                  className="mx-auto mb-4"
                  style={{
                    width: '60px',
                    height: '60px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Zap size={32} style={{ color: 'white' }} />
                </div>
                <p
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '36px',
                    fontWeight: '700',
                    color: 'white',
                    marginBottom: '8px'
                  }}
                >
                  {totalStats.totalCapacity}
                </p>
                <p
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '16px',
                    color: 'rgba(255, 255, 255, 0.95)'
                  }}
                >
                  총 설치 용량
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <div
                className="text-center p-8"
                style={{
                  background: 'linear-gradient(135deg, #34C759, #30D158)',
                  borderRadius: '24px',
                  boxShadow: '0 8px 32px rgba(52, 199, 89, 0.3)'
                }}
              >
                <div
                  className="mx-auto mb-4"
                  style={{
                    width: '60px',
                    height: '60px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <CheckCircle2 size={32} style={{ color: 'white' }} />
                </div>
                <p
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '36px',
                    fontWeight: '700',
                    color: 'white',
                    marginBottom: '8px'
                  }}
                >
                  {totalStats.operatingProjects}
                </p>
                <p
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '16px',
                    color: 'rgba(255, 255, 255, 0.95)'
                  }}
                >
                  운영중
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300}>
              <div
                className="text-center p-8"
                style={{
                  background: 'linear-gradient(135deg, #4A90E2, #5BA3F5)',
                  borderRadius: '24px',
                  boxShadow: '0 8px 32px rgba(74, 144, 226, 0.3)'
                }}
              >
                <div
                  className="mx-auto mb-4"
                  style={{
                    width: '60px',
                    height: '60px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <TrendingUp size={32} style={{ color: 'white' }} />
                </div>
                <p
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '36px',
                    fontWeight: '700',
                    color: 'white',
                    marginBottom: '8px'
                  }}
                >
                  {totalStats.constructionProjects}
                </p>
                <p
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '16px',
                    color: 'rgba(255, 255, 255, 0.95)'
                  }}
                >
                  시공중
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 인터랙티브 지도 섹션 */}
      <section style={{ background: '#F7FAFD', padding: '80px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="mb-12 text-center">
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
              전국 태양광 발전소 지도
            </h2>
            <p
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '20px',
                color: '#666',
                lineHeight: '1.6'
              }}
            >
              지역을 클릭하여 상세 프로젝트를 확인하세요
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* 지도 영역 */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="left">
                <div
                  style={{
                    background: 'white',
                    borderRadius: '24px',
                    padding: '40px',
                    border: '2px solid rgba(15, 33, 74, 0.1)',
                    boxShadow: '0 8px 32px rgba(15, 33, 74, 0.08)',
                    minHeight: '600px'
                  }}
                >
                  {/* 간단한 한국 지도 시각화 */}
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '550px',
                      background: 'linear-gradient(135deg, #F7FAFD, #E8F0F9)',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      gap: '24px',
                      padding: '40px'
                    }}
                  >
                    {/* 지역 버튼들 */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl">
                      {Object.keys(regionStats).map((region, index) => (
                        <button
                          key={region}
                          onClick={() => handleRegionClick(region)}
                          style={{
                            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                            fontSize: '18px',
                            fontWeight: '700',
                            padding: '24px 20px',
                            background: selectedRegion === region
                              ? 'linear-gradient(135deg, #FF6B3D, #FF8C3D)'
                              : 'white',
                            color: selectedRegion === region ? 'white' : '#0F214A',
                            border: selectedRegion === region ? 'none' : '2px solid rgba(15, 33, 74, 0.1)',
                            borderRadius: '16px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: selectedRegion === region
                              ? '0 8px 24px rgba(255, 107, 61, 0.3)'
                              : '0 4px 16px rgba(15, 33, 74, 0.05)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                            alignItems: 'center'
                          }}
                          onMouseEnter={(e) => {
                            if (selectedRegion !== region) {
                              e.currentTarget.style.transform = 'translateY(-4px)';
                              e.currentTarget.style.boxShadow = '0 8px 24px rgba(15, 33, 74, 0.12)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (selectedRegion !== region) {
                              e.currentTarget.style.transform = 'translateY(0)';
                              e.currentTarget.style.boxShadow = '0 4px 16px rgba(15, 33, 74, 0.05)';
                            }
                          }}
                        >
                          <MapPin size={24} style={{ color: selectedRegion === region ? 'white' : '#FF6B3D' }} />
                          <span>{region}</span>
                          <span style={{ fontSize: '14px', fontWeight: '500', opacity: 0.9 }}>
                            {regionStats[region as keyof typeof regionStats].count}개 발전소
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* 지역 정보 사이드바 */}
            <div className="lg:col-span-1">
              <ScrollReveal direction="right">
                <div
                  style={{
                    background: 'white',
                    borderRadius: '24px',
                    padding: '32px',
                    border: '2px solid rgba(15, 33, 74, 0.1)',
                    boxShadow: '0 8px 32px rgba(15, 33, 74, 0.08)',
                    minHeight: '600px'
                  }}
                >
                  {selectedRegion ? (
                    <>
                      <div className="mb-6">
                        <h3
                          style={{
                            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                            fontSize: '28px',
                            fontWeight: '700',
                            color: '#0F214A',
                            marginBottom: '16px'
                          }}
                        >
                          {selectedRegion}
                        </h3>

                        {/* 지역 통계 */}
                        <div className="space-y-3 mb-6">
                          <div
                            style={{
                              background: '#F7FAFD',
                              borderRadius: '12px',
                              padding: '16px',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center'
                            }}
                          >
                            <span
                              style={{
                                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                                fontSize: '16px',
                                color: '#666'
                              }}
                            >
                              발전소 수
                            </span>
                            <span
                              style={{
                                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                                fontSize: '20px',
                                fontWeight: '700',
                                color: '#FF6B3D'
                              }}
                            >
                              {regionStats[selectedRegion as keyof typeof regionStats].count}개
                            </span>
                          </div>

                          <div
                            style={{
                              background: '#F7FAFD',
                              borderRadius: '12px',
                              padding: '16px',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center'
                            }}
                          >
                            <span
                              style={{
                                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                                fontSize: '16px',
                                color: '#666'
                              }}
                            >
                              총 용량
                            </span>
                            <span
                              style={{
                                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                                fontSize: '20px',
                                fontWeight: '700',
                                color: '#0F214A'
                              }}
                            >
                              {regionStats[selectedRegion as keyof typeof regionStats].capacity}
                            </span>
                          </div>

                          <div
                            style={{
                              background: '#F7FAFD',
                              borderRadius: '12px',
                              padding: '16px',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center'
                            }}
                          >
                            <span
                              style={{
                                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                                fontSize: '16px',
                                color: '#666'
                              }}
                            >
                              평균 규모
                            </span>
                            <span
                              style={{
                                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                                fontSize: '20px',
                                fontWeight: '700',
                                color: '#0F214A'
                              }}
                            >
                              {regionStats[selectedRegion as keyof typeof regionStats].avgSize}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* 프로젝트 리스트 */}
                      <div>
                        <h4
                          style={{
                            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                            fontSize: '18px',
                            fontWeight: '700',
                            color: '#0F214A',
                            marginBottom: '12px'
                          }}
                        >
                          주요 프로젝트
                        </h4>

                        <div className="space-y-3 max-h-96 overflow-y-auto">
                          {projectsByRegion[selectedRegion as keyof typeof projectsByRegion]?.map((project) => (
                            <div
                              key={project.id}
                              onClick={() => setSelectedProject(project)}
                              style={{
                                background: selectedProject?.id === project.id ? '#F7FAFD' : 'white',
                                border: `2px solid ${selectedProject?.id === project.id ? '#FF6B3D' : 'rgba(15, 33, 74, 0.1)'}`,
                                borderRadius: '12px',
                                padding: '16px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateX(4px)';
                                e.currentTarget.style.boxShadow = '0 4px 16px rgba(15, 33, 74, 0.1)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateX(0)';
                                e.currentTarget.style.boxShadow = 'none';
                              }}
                            >
                              <div className="flex items-start justify-between mb-2">
                                <h5
                                  style={{
                                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                                    fontSize: '16px',
                                    fontWeight: '700',
                                    color: '#0F214A'
                                  }}
                                >
                                  {project.name}
                                </h5>
                                <span
                                  style={{
                                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                                    fontSize: '12px',
                                    fontWeight: '700',
                                    color: 'white',
                                    background: typeColors[project.type] || '#666',
                                    padding: '4px 10px',
                                    borderRadius: '6px'
                                  }}
                                >
                                  {project.type}
                                </span>
                              </div>
                              <div className="flex items-center gap-4 text-sm">
                                <span style={{ color: '#666', fontSize: '14px' }}>
                                  ⚡ {project.capacity}
                                </span>
                                <span style={{ color: '#666', fontSize: '14px' }}>
                                  📅 {project.year}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <div
                      className="flex flex-col items-center justify-center"
                      style={{ height: '100%', minHeight: '500px' }}
                    >
                      <MapPin size={64} style={{ color: '#FF6B3D', marginBottom: '24px' }} />
                      <p
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '20px',
                          fontWeight: '600',
                          color: '#0F214A',
                          textAlign: 'center',
                          marginBottom: '12px'
                        }}
                      >
                        지역을 선택해주세요
                      </p>
                      <p
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '16px',
                          color: '#666',
                          textAlign: 'center'
                        }}
                      >
                        지도에서 원하는 지역을 클릭하면<br />해당 지역의 프로젝트 정보를 확인할 수 있습니다
                      </p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 프로젝트 타입별 범례 */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="mb-12 text-center">
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
              프로젝트 타입별 분류
            </h2>
            <p
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '20px',
                color: '#666',
                lineHeight: '1.6'
              }}
            >
              다양한 형태의 태양광 발전소
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {Object.keys(typeColors).map((type, index) => (
              <ScrollReveal key={type} delay={index * 100} direction="up">
                <div
                  className="text-center p-6"
                  style={{
                    background: 'white',
                    borderRadius: '20px',
                    border: `3px solid ${typeColors[type]}`,
                    boxShadow: '0 4px 16px rgba(15, 33, 74, 0.05)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(15, 33, 74, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(15, 33, 74, 0.05)';
                  }}
                >
                  <div
                    className="mx-auto mb-3"
                    style={{
                      width: '60px',
                      height: '60px',
                      background: typeColors[type],
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Building2 size={30} style={{ color: 'white' }} />
                  </div>
                  <p
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '18px',
                      fontWeight: '700',
                      color: '#0F214A'
                    }}
                  >
                    {type}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: 'linear-gradient(135deg, #0F214A 0%, #273b82 100%)', padding: '120px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-white mb-8"
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '48px',
                fontWeight: '700',
                lineHeight: '1.4'
              }}
            >
              귀사의 발전소도 함께하세요
            </h2>

            <p
              className="text-white mb-12"
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '18px',
                lineHeight: '1.7',
                opacity: 0.9
              }}
            >
              전국 173개 발전소와 함께하는 태양광 무상설치
            </p>

            <button
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '18px',
                fontWeight: '700',
                padding: '20px 48px',
                background: 'linear-gradient(135deg, #FF6B3D, #FF8C3D)',
                color: 'white',
                border: 'none',
                borderRadius: '100px',
                cursor: 'pointer',
                boxShadow: '0 12px 32px rgba(255, 107, 61, 0.4)',
                transition: 'all 0.3s ease'
              }}
            >
              무료 상담 신청하기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}