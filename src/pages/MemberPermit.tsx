import { PageHero } from "../components/PageHero";
import { ClipboardList, Search, TrendingUp, Clock, CheckCircle2, AlertCircle, FileText, Lock } from "lucide-react";
import { useState } from "react";

export function MemberPermit() {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: ""
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const features = [
    {
      icon: FileText,
      title: "실시간 진행현황",
      desc: "인허가 단계별 진행상황 확인"
    },
    {
      icon: Clock,
      title: "일정 관리",
      desc: "예상 완료일 및 지연 알림"
    },
    {
      icon: CheckCircle2,
      title: "서류 관리",
      desc: "제출 서류 및 보완사항 확인"
    },
    {
      icon: TrendingUp,
      title: "통계 분석",
      desc: "지역별/유형별 평균 처리기간"
    }
  ];

  const permitSteps = [
    { step: "1", name: "접수", status: "완료", date: "2025.01.15" },
    { step: "2", name: "현장조사", status: "완료", date: "2025.01.22" },
    { step: "3", name: "검토", status: "진행중", date: "진행중" },
    { step: "4", name: "보완", status: "대기", date: "-" },
    { step: "5", name: "승인", status: "대기", date: "-" }
  ];

  const recentProjects = [
    {
      id: "2025-001",
      name: "화성 물류센터 태양광",
      location: "경기 화성시",
      capacity: "500kW",
      status: "검토중",
      progress: 60
    },
    {
      id: "2025-002",
      name: "평택 공장 옥상 태양광",
      location: "경기 평택시",
      capacity: "300kW",
      status: "승인완료",
      progress: 100
    },
    {
      id: "2024-156",
      name: "이천 물류창고 태양광",
      location: "경기 이천시",
      capacity: "700kW",
      status: "보완요청",
      progress: 40
    }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제로는 API 호출
    if (loginForm.username && loginForm.password) {
      setIsLoggedIn(true);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "완료":
      case "승인완료":
        return "bg-green-100 text-green-700";
      case "진행중":
      case "검토중":
        return "bg-blue-100 text-blue-700";
      case "대기":
        return "bg-gray-100 text-gray-600";
      case "보완요청":
        return "bg-amber-100 text-amber-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ paddingTop: '80px' }}>
      <PageHero
        badge={{ text: "MEMBER SYSTEM", color: "#FF6B3D" }}
        title="인허가접수 관리시스템"
        description="태양광 인허가 진행 상황을 실시간으로 확인하세요"
      />

      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10 py-12 md:py-24">
        
        {/* 시스템 기능 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#FF6B3D]/10 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-[#FF6B3D]" />
              </div>
              <h3 className="text-[#0F214A] mb-2" style={{ fontSize: '18px', fontWeight: '600' }}>
                {feature.title}
              </h3>
              <p className="text-[#0F214A]/70" style={{ fontSize: '14px' }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {!isLoggedIn ? (
          /* 로그인 화면 */
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-[#0F214A] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-[#0F214A] mb-2">회원 로그인</h2>
                <p className="text-[#0F214A]/70">등록된 회원사만 이용 가능합니다</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="text-[#0F214A] mb-2 block" style={{ fontSize: '16px', fontWeight: '500' }}>
                    아이디
                  </label>
                  <input
                    type="text"
                    required
                    value={loginForm.username}
                    onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B3D] outline-none transition-colors"
                    placeholder="회원 아이디를 입력하세요"
                  />
                </div>

                <div>
                  <label className="text-[#0F214A] mb-2 block" style={{ fontSize: '16px', fontWeight: '500' }}>
                    비밀번호
                  </label>
                  <input
                    type="password"
                    required
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B3D] outline-none transition-colors"
                    placeholder="비밀번호를 입력하세요"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#FF6B3D] text-white rounded-xl hover:bg-[#FF7C40] transition-all shadow-lg hover:shadow-xl"
                  style={{ fontSize: '18px', fontWeight: '600' }}
                >
                  로그인
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-[#0F214A]/70" style={{ fontSize: '14px' }}>
                  회원가입 문의: <a href="tel:1588-0000" className="text-[#FF6B3D] font-semibold">1588-0000</a>
                </p>
              </div>
            </div>

            {/* 이용 안내 */}
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <h3 className="text-[#0F214A] mb-4 flex items-center gap-2" style={{ fontSize: '18px', fontWeight: '600' }}>
                <AlertCircle className="w-5 h-5 text-blue-600" />
                이용 안내
              </h3>
              <ul className="space-y-2 text-[#0F214A]/70" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6B3D] mt-1">•</span>
                  <span>등록된 영업사 및 시공사만 이용 가능합니다</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6B3D] mt-1">•</span>
                  <span>인허가 진행 중인 프로젝트만 조회됩니다</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6B3D] mt-1">•</span>
                  <span>보안을 위해 주기적으로 비밀번호를 변경해주세요</span>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          /* 로그인 후 대시보드 */
          <div className="space-y-8">
            {/* 헤더 */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-[#0F214A] mb-2">안녕하세요, 타이런트님</h2>
                <p className="text-[#0F214A]/70">현재 진행 중인 프로젝트: <strong>3건</strong></p>
              </div>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="px-6 py-3 bg-gray-200 text-[#0F214A] rounded-xl hover:bg-gray-300 transition-colors"
                style={{ fontWeight: '600' }}
              >
                로그아웃
              </button>
            </div>

            {/* 검색 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="프로젝트명, 위치, 접수번호로 검색"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B3D] outline-none transition-colors"
                  />
                </div>
                <button className="px-8 py-3 bg-[#FF6B3D] text-white rounded-xl hover:bg-[#FF7C40] transition-all" style={{ fontWeight: '600' }}>
                  검색
                </button>
              </div>
            </div>

            {/* 진행 중인 프로젝트 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-[#0F214A] mb-6" style={{ fontSize: '22px', fontWeight: '600' }}>
                진행 중인 프로젝트
              </h3>
              
              <div className="space-y-4">
                {recentProjects.map((project, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-[#FF6B3D] transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-[#0F214A]" style={{ fontSize: '18px', fontWeight: '600' }}>
                            {project.name}
                          </h4>
                          <span className={`px-3 py-1 rounded-lg ${getStatusColor(project.status)}`} style={{ fontSize: '13px', fontWeight: '600' }}>
                            {project.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-[#0F214A]/70" style={{ fontSize: '15px' }}>
                          <span>접수번호: {project.id}</span>
                          <span>•</span>
                          <span>{project.location}</span>
                          <span>•</span>
                          <span>{project.capacity}</span>
                        </div>
                      </div>
                      <button className="px-4 py-2 text-[#FF6B3D] border-2 border-[#FF6B3D] rounded-lg hover:bg-[#FF6B3D] hover:text-white transition-all" style={{ fontWeight: '600' }}>
                        상세보기
                      </button>
                    </div>
                    
                    {/* 진행률 */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[#0F214A]/70" style={{ fontSize: '14px' }}>진행률</span>
                        <span className="text-[#0F214A]" style={{ fontSize: '14px', fontWeight: '600' }}>{project.progress}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#FF6B3D] rounded-full transition-all"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 인허가 단계 예시 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-[#0F214A] mb-6" style={{ fontSize: '22px', fontWeight: '600' }}>
                인허가 진행 단계 (예시)
              </h3>
              
              <div className="grid md:grid-cols-5 gap-4">
                {permitSteps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center ${
                      step.status === "완료" ? "bg-green-500" : 
                      step.status === "진행중" ? "bg-blue-500" : 
                      "bg-gray-300"
                    } text-white`} style={{ fontSize: '20px', fontWeight: '700' }}>
                      {step.step}
                    </div>
                    <p className="text-[#0F214A] mb-1" style={{ fontSize: '16px', fontWeight: '600' }}>
                      {step.name}
                    </p>
                    <p className={`px-3 py-1 rounded-lg inline-block ${getStatusColor(step.status)}`} style={{ fontSize: '13px', fontWeight: '600' }}>
                      {step.status}
                    </p>
                    <p className="text-[#0F214A]/60 mt-2" style={{ fontSize: '13px' }}>
                      {step.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 공지사항 */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <h3 className="text-[#0F214A] mb-4 flex items-center gap-2" style={{ fontSize: '18px', fontWeight: '600' }}>
                <AlertCircle className="w-5 h-5 text-amber-600" />
                중요 공지
              </h3>
              <ul className="space-y-2 text-[#0F214A]/70" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6B3D] mt-1">•</span>
                  <span>2025년 REC 가중치 변경에 따른 서류 보완 요청이 있을 수 있습니다</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6B3D] mt-1">•</span>
                  <span>농지 전용 허가 기준이 강화되었습니다 (2025.01.01 시행)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6B3D] mt-1">•</span>
                  <span>한전 계통연계 대기 기간이 평균 2-3주 증가하고 있습니다</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}