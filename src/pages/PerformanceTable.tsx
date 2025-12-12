import { Table, Search, Filter, Download, ChevronDown, ChevronUp, Calendar, Building2, Zap, MapPin, TrendingUp } from "lucide-react";
import { SubNavigation } from "../components/SubNavigation";
import { PageHero } from "../components/PageHero";
import { ScrollReveal } from "../components/ScrollReveal";
import { useState } from "react";

interface PerformanceTableProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function PerformanceTable({ onNavigate, currentPage }: PerformanceTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRegion, setFilterRegion] = useState("전체");
  const [filterType, setFilterType] = useState("전체");
  const [filterStatus, setFilterStatus] = useState("전체");
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);

  // 프로젝트 데이터
  const projects = [
    { id: 1, name: "평택 물류센터", region: "경기", type: "물류창고", capacity: 1200, year: "2023", status: "운영중", generation: 1450, efficiency: 98.5 },
    { id: 2, name: "김포 산업단지", region: "경기", type: "지붕형", capacity: 800, year: "2023", status: "운영중", generation: 950, efficiency: 97.2 },
    { id: 3, name: "천안 저수지", region: "충남", type: "수상태양광", capacity: 2500, year: "2022", status: "운영중", generation: 3100, efficiency: 99.1 },
    { id: 4, name: "전주 태양광 발전소", region: "전북", type: "지상형", capacity: 3000, year: "2021", status: "운영중", generation: 3650, efficiency: 96.8 },
    { id: 5, name: "대구 물류센터", region: "대구", type: "물류창고", capacity: 2000, year: "2022", status: "운영중", generation: 2400, efficiency: 98.0 },
    { id: 6, name: "청주 산업단지", region: "충북", type: "지붕형", capacity: 1500, year: "2023", status: "운영중", generation: 1800, efficiency: 97.5 },
    { id: 7, name: "광주 저수지", region: "광주", type: "수상태양광", capacity: 2200, year: "2022", status: "운영중", generation: 2700, efficiency: 98.8 },
    { id: 8, name: "부산 산업단지", region: "부산", type: "지붕형", capacity: 1200, year: "2023", status: "운영중", generation: 1450, efficiency: 97.8 },
    { id: 9, name: "울산 저수지", region: "울산", type: "수상태양광", capacity: 3500, year: "2021", status: "운영중", generation: 4300, efficiency: 99.3 },
    { id: 10, name: "춘천 태양광 발전소", region: "강원", type: "지상형", capacity: 1500, year: "2023", status: "운영중", generation: 1800, efficiency: 96.5 },
    { id: 11, name: "제주 태양광 발전소", region: "제주", type: "지상형", capacity: 2800, year: "2022", status: "운영중", generation: 3450, efficiency: 98.2 },
    { id: 12, name: "의정부 공장", region: "경기", type: "지붕형", capacity: 500, year: "2024", status: "운영중", generation: 580, efficiency: 96.0 },
    { id: 13, name: "아산 물류센터", region: "충남", type: "물류창고", capacity: 1800, year: "2023", status: "운영중", generation: 2150, efficiency: 97.9 },
    { id: 14, name: "목포 산업단지", region: "전남", type: "지붕형", capacity: 900, year: "2024", status: "운영중", generation: 1050, efficiency: 96.8 },
    { id: 15, name: "원주 산업단지", region: "강원", type: "지붕형", capacity: 700, year: "2024", status: "운영중", generation: 820, efficiency: 97.1 },
    { id: 16, name: "서귀포 저수지", region: "제주", type: "수상태양광", capacity: 1600, year: "2023", status: "운영중", generation: 1950, efficiency: 98.6 },
    { id: 17, name: "인천 물류센터", region: "인천", type: "물류창고", capacity: 1400, year: "2023", status: "시공중", generation: 0, efficiency: 0 },
    { id: 18, name: "수원 산업단지", region: "경기", type: "지붕형", capacity: 1100, year: "2024", status: "시공중", generation: 0, efficiency: 0 },
  ];

  // 필터링
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = filterRegion === "전체" || project.region === filterRegion;
    const matchesType = filterType === "전체" || project.type === filterType;
    const matchesStatus = filterStatus === "전체" || project.status === filterStatus;
    
    return matchesSearch && matchesRegion && matchesType && matchesStatus;
  });

  // 정렬
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (!sortConfig) return 0;
    
    const aValue = a[sortConfig.key as keyof typeof a];
    const bValue = b[sortConfig.key as keyof typeof b];
    
    if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  // 정렬 핸들러
  const handleSort = (key: string) => {
    setSortConfig(current => {
      if (current?.key === key) {
        return { key, direction: current.direction === 'asc' ? 'desc' : 'asc' };
      }
      return { key, direction: 'asc' };
    });
  };

  // 통계 계산
  const stats = {
    totalProjects: filteredProjects.length,
    totalCapacity: filteredProjects.reduce((sum, p) => sum + p.capacity, 0),
    totalGeneration: filteredProjects.reduce((sum, p) => sum + p.generation, 0),
    avgEfficiency: filteredProjects.length > 0 
      ? (filteredProjects.reduce((sum, p) => sum + p.efficiency, 0) / filteredProjects.length).toFixed(1)
      : 0
  };

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <PageHero
        badge={{ text: "PERFORMANCE TABLE", color: "#FF6B3D" }}
        title="태양광 실적 표"
        description="전국 태양광 발전소의 상세 실적을 표 형태로 확인하세요. 필터링, 정렬, 검색 기능으로 원하는 정보를 쉽게 찾을 수 있습니다"
      />

      {/* Sub Navigation */}
      <SubNavigation category="performance" currentPage={currentPage} onNavigate={onNavigate} />

      {/* 통계 요약 */}
      <section style={{ background: 'white', padding: '60px 0 40px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1600px' }}>
          <div className="grid md:grid-cols-4 gap-6">
            <ScrollReveal direction="up" delay={0}>
              <div
                style={{
                  background: 'linear-gradient(135deg, #0F214A, #273b82)',
                  borderRadius: '20px',
                  padding: '32px',
                  boxShadow: '0 8px 32px rgba(15, 33, 74, 0.15)'
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Building2 size={32} style={{ color: '#FF6B3D' }} />
                  <span
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '16px',
                      color: 'rgba(255, 255, 255, 0.9)'
                    }}
                  >
                    총 프로젝트
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '40px',
                    fontWeight: '700',
                    color: '#FF6B3D'
                  }}
                >
                  {stats.totalProjects}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <div
                style={{
                  background: 'linear-gradient(135deg, #FF6B3D, #FF8C3D)',
                  borderRadius: '20px',
                  padding: '32px',
                  boxShadow: '0 8px 32px rgba(255, 107, 61, 0.3)'
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Zap size={32} style={{ color: 'white' }} />
                  <span
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '16px',
                      color: 'rgba(255, 255, 255, 0.95)'
                    }}
                  >
                    총 설치 용량
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '40px',
                    fontWeight: '700',
                    color: 'white'
                  }}
                >
                  {stats.totalCapacity.toLocaleString()}kW
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <div
                style={{
                  background: 'linear-gradient(135deg, #34C759, #30D158)',
                  borderRadius: '20px',
                  padding: '32px',
                  boxShadow: '0 8px 32px rgba(52, 199, 89, 0.3)'
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp size={32} style={{ color: 'white' }} />
                  <span
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '16px',
                      color: 'rgba(255, 255, 255, 0.95)'
                    }}
                  >
                    월 발전량
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '40px',
                    fontWeight: '700',
                    color: 'white'
                  }}
                >
                  {stats.totalGeneration.toLocaleString()}MWh
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300}>
              <div
                style={{
                  background: 'linear-gradient(135deg, #4A90E2, #5BA3F5)',
                  borderRadius: '20px',
                  padding: '32px',
                  boxShadow: '0 8px 32px rgba(74, 144, 226, 0.3)'
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Calendar size={32} style={{ color: 'white' }} />
                  <span
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '16px',
                      color: 'rgba(255, 255, 255, 0.95)'
                    }}
                  >
                    평균 효율
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '40px',
                    fontWeight: '700',
                    color: 'white'
                  }}
                >
                  {stats.avgEfficiency}%
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 필터 및 검색 */}
      <section style={{ background: '#F7FAFD', padding: '40px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1600px' }}>
          <ScrollReveal direction="up">
            <div
              style={{
                background: 'white',
                borderRadius: '20px',
                padding: '32px',
                border: '2px solid rgba(15, 33, 74, 0.1)',
                boxShadow: '0 4px 16px rgba(15, 33, 74, 0.05)'
              }}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                {/* 검색 */}
                <div className="lg:col-span-2">
                  <div
                    style={{
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Search
                      size={20}
                      style={{
                        position: 'absolute',
                        left: '16px',
                        color: '#666'
                      }}
                    />
                    <input
                      type="text"
                      placeholder="프로젝트명 검색..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '16px',
                        width: '100%',
                        padding: '14px 16px 14px 48px',
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

                {/* 지역 필터 */}
                <select
                  value={filterRegion}
                  onChange={(e) => setFilterRegion(e.target.value)}
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '16px',
                    padding: '14px 16px',
                    border: '2px solid rgba(15, 33, 74, 0.1)',
                    borderRadius: '12px',
                    outline: 'none',
                    cursor: 'pointer',
                    background: 'white'
                  }}
                >
                  <option value="전체">전체 지역</option>
                  <option value="경기">경기</option>
                  <option value="충남">충남</option>
                  <option value="충북">충북</option>
                  <option value="전북">전북</option>
                  <option value="전남">전남</option>
                  <option value="대구">대구</option>
                  <option value="부산">부산</option>
                  <option value="울산">울산</option>
                  <option value="강원">강원</option>
                  <option value="제주">제주</option>
                  <option value="광주">광주</option>
                  <option value="인천">인천</option>
                </select>

                {/* 타입 필터 */}
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '16px',
                    padding: '14px 16px',
                    border: '2px solid rgba(15, 33, 74, 0.1)',
                    borderRadius: '12px',
                    outline: 'none',
                    cursor: 'pointer',
                    background: 'white'
                  }}
                >
                  <option value="전체">전체 타입</option>
                  <option value="물류창고">물류창고</option>
                  <option value="지붕형">지붕형</option>
                  <option value="수상태양광">수상태양광</option>
                  <option value="지상형">지상형</option>
                </select>

                {/* 상태 필터 */}
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '16px',
                    padding: '14px 16px',
                    border: '2px solid rgba(15, 33, 74, 0.1)',
                    borderRadius: '12px',
                    outline: 'none',
                    cursor: 'pointer',
                    background: 'white'
                  }}
                >
                  <option value="전체">전체 상태</option>
                  <option value="운영중">운영중</option>
                  <option value="시공중">시공중</option>
                </select>
              </div>

              {/* 필터 리셋 버튼 */}
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setFilterRegion("전체");
                    setFilterType("전체");
                    setFilterStatus("전체");
                  }}
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '14px',
                    fontWeight: '600',
                    padding: '10px 24px',
                    background: '#F7FAFD',
                    color: '#666',
                    border: 'none',
                    borderRadius: '100px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#FF6B3D';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#F7FAFD';
                    e.currentTarget.style.color = '#666';
                  }}
                >
                  필터 초기화
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 프로젝트 테이블 */}
      <section style={{ background: '#F7FAFD', padding: '40px 0 120px 0' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1600px' }}>
          <ScrollReveal direction="up">
            <div
              style={{
                background: 'white',
                borderRadius: '20px',
                border: '2px solid rgba(15, 33, 74, 0.1)',
                boxShadow: '0 8px 32px rgba(15, 33, 74, 0.08)',
                overflow: 'hidden'
              }}
            >
              {/* 테이블 헤더 */}
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '1200px' }}>
                  <thead>
                    <tr style={{ background: 'linear-gradient(135deg, #0F214A, #273b82)' }}>
                      <th
                        onClick={() => handleSort('name')}
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '16px',
                          fontWeight: '700',
                          color: 'white',
                          padding: '20px 24px',
                          textAlign: 'left',
                          cursor: 'pointer',
                          userSelect: 'none',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        <div className="flex items-center gap-2">
                          프로젝트명
                          {sortConfig?.key === 'name' && (
                            sortConfig.direction === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                          )}
                        </div>
                      </th>
                      <th
                        onClick={() => handleSort('region')}
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '16px',
                          fontWeight: '700',
                          color: 'white',
                          padding: '20px 24px',
                          textAlign: 'center',
                          cursor: 'pointer',
                          userSelect: 'none',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        <div className="flex items-center justify-center gap-2">
                          지역
                          {sortConfig?.key === 'region' && (
                            sortConfig.direction === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                          )}
                        </div>
                      </th>
                      <th
                        onClick={() => handleSort('type')}
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '16px',
                          fontWeight: '700',
                          color: 'white',
                          padding: '20px 24px',
                          textAlign: 'center',
                          cursor: 'pointer',
                          userSelect: 'none',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        <div className="flex items-center justify-center gap-2">
                          타입
                          {sortConfig?.key === 'type' && (
                            sortConfig.direction === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                          )}
                        </div>
                      </th>
                      <th
                        onClick={() => handleSort('capacity')}
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '16px',
                          fontWeight: '700',
                          color: 'white',
                          padding: '20px 24px',
                          textAlign: 'center',
                          cursor: 'pointer',
                          userSelect: 'none',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        <div className="flex items-center justify-center gap-2">
                          설치용량
                          {sortConfig?.key === 'capacity' && (
                            sortConfig.direction === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                          )}
                        </div>
                      </th>
                      <th
                        onClick={() => handleSort('year')}
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '16px',
                          fontWeight: '700',
                          color: 'white',
                          padding: '20px 24px',
                          textAlign: 'center',
                          cursor: 'pointer',
                          userSelect: 'none',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        <div className="flex items-center justify-center gap-2">
                          준공년도
                          {sortConfig?.key === 'year' && (
                            sortConfig.direction === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                          )}
                        </div>
                      </th>
                      <th
                        onClick={() => handleSort('generation')}
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '16px',
                          fontWeight: '700',
                          color: 'white',
                          padding: '20px 24px',
                          textAlign: 'center',
                          cursor: 'pointer',
                          userSelect: 'none',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        <div className="flex items-center justify-center gap-2">
                          월발전량
                          {sortConfig?.key === 'generation' && (
                            sortConfig.direction === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                          )}
                        </div>
                      </th>
                      <th
                        onClick={() => handleSort('efficiency')}
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '16px',
                          fontWeight: '700',
                          color: 'white',
                          padding: '20px 24px',
                          textAlign: 'center',
                          cursor: 'pointer',
                          userSelect: 'none',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        <div className="flex items-center justify-center gap-2">
                          효율
                          {sortConfig?.key === 'efficiency' && (
                            sortConfig.direction === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                          )}
                        </div>
                      </th>
                      <th
                        onClick={() => handleSort('status')}
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '16px',
                          fontWeight: '700',
                          color: 'white',
                          padding: '20px 24px',
                          textAlign: 'center',
                          cursor: 'pointer',
                          userSelect: 'none',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        <div className="flex items-center justify-center gap-2">
                          상태
                          {sortConfig?.key === 'status' && (
                            sortConfig.direction === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                          )}
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedProjects.map((project, index) => (
                      <tr
                        key={project.id}
                        style={{
                          borderBottom: '1px solid rgba(15, 33, 74, 0.05)',
                          background: index % 2 === 0 ? 'white' : '#F7FAFD',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#FFF5F1';
                          e.currentTarget.style.transform = 'scale(1.01)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = index % 2 === 0 ? 'white' : '#F7FAFD';
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      >
                        <td
                          style={{
                            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                            fontSize: '16px',
                            fontWeight: '600',
                            color: '#0F214A',
                            padding: '20px 24px',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {project.name}
                        </td>
                        <td
                          style={{
                            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                            fontSize: '16px',
                            color: '#666',
                            padding: '20px 24px',
                            textAlign: 'center',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {project.region}
                        </td>
                        <td
                          style={{
                            padding: '20px 24px',
                            textAlign: 'center',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          <span
                            style={{
                              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                              fontSize: '14px',
                              fontWeight: '700',
                              color: 'white',
                              background: project.type === '물류창고' ? '#FF6B3D' : 
                                         project.type === '지붕형' ? '#0F214A' :
                                         project.type === '수상태양광' ? '#4A90E2' : '#34C759',
                              padding: '6px 16px',
                              borderRadius: '100px',
                              display: 'inline-block'
                            }}
                          >
                            {project.type}
                          </span>
                        </td>
                        <td
                          style={{
                            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                            fontSize: '16px',
                            fontWeight: '700',
                            color: '#FF6B3D',
                            padding: '20px 24px',
                            textAlign: 'center',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {project.capacity.toLocaleString()}kW
                        </td>
                        <td
                          style={{
                            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                            fontSize: '16px',
                            color: '#666',
                            padding: '20px 24px',
                            textAlign: 'center',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {project.year}
                        </td>
                        <td
                          style={{
                            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                            fontSize: '16px',
                            fontWeight: '600',
                            color: '#0F214A',
                            padding: '20px 24px',
                            textAlign: 'center',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {project.generation > 0 ? `${project.generation.toLocaleString()}MWh` : '-'}
                        </td>
                        <td
                          style={{
                            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                            fontSize: '16px',
                            fontWeight: '600',
                            color: project.efficiency >= 98 ? '#34C759' : project.efficiency >= 95 ? '#4A90E2' : '#666',
                            padding: '20px 24px',
                            textAlign: 'center',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {project.efficiency > 0 ? `${project.efficiency}%` : '-'}
                        </td>
                        <td
                          style={{
                            padding: '20px 24px',
                            textAlign: 'center',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          <span
                            style={{
                              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                              fontSize: '14px',
                              fontWeight: '700',
                              color: project.status === '운영중' ? '#34C759' : '#FF6B3D',
                              background: project.status === '운영중' ? 'rgba(52, 199, 89, 0.1)' : 'rgba(255, 107, 61, 0.1)',
                              padding: '6px 16px',
                              borderRadius: '100px',
                              display: 'inline-block'
                            }}
                          >
                            {project.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* 결과 없음 */}
              {sortedProjects.length === 0 && (
                <div
                  style={{
                    padding: '80px 40px',
                    textAlign: 'center'
                  }}
                >
                  <Filter size={48} style={{ color: '#CCC', marginBottom: '16px' }} />
                  <p
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#666',
                      marginBottom: '8px'
                    }}
                  >
                    검색 결과가 없습니다
                  </p>
                  <p
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '16px',
                      color: '#999'
                    }}
                  >
                    다른 검색어나 필터를 시도해보세요
                  </p>
                </div>
              )}

              {/* 엑셀 다운로드 버튼 */}
              <div
                style={{
                  padding: '24px',
                  borderTop: '2px solid rgba(15, 33, 74, 0.05)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <p
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '16px',
                    color: '#666'
                  }}
                >
                  총 <strong style={{ color: '#FF6B3D' }}>{sortedProjects.length}</strong>개의 프로젝트
                </p>

                <button
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '16px',
                    fontWeight: '700',
                    padding: '12px 28px',
                    background: 'linear-gradient(135deg, #0F214A, #273b82)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '100px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(15, 33, 74, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Download size={20} />
                  엑셀 다운로드
                </button>
              </div>
            </div>
          </ScrollReveal>
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
              귀사의 프로젝트도 시작하세요
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
              전국 173개 발전소의 성공 사례와 함께하세요
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