import type { Metadata } from "next";
import Link from "next/link";
import { Home, ChevronRight, Briefcase, Clock, FileText, Users, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Cards | 타이런트 - 관리자",
  description: "타이런트 관리자 Cards 페이지",
};

// Mock users for avatars
const users = [
  { initials: '김', color: '#3b82f6', online: true },
  { initials: '이', color: '#10b981', online: false },
  { initials: '박', color: '#f59e0b', online: true },
  { initials: '최', color: '#8b5cf6', online: false }
];

export default function Cards() {
  
  return (
    <div className="py-6 md:px-6">
      {/* Page Header */}
      <div className="flex items-start justify-between gap-4 mb-8">
        <div>
          <h1 className="text-[24px] md:text-[28px] font-bold tracking-tight text-gray-900 dark:text-gray-50">
            카드 컴포넌트
          </h1>
          <p className="text-[14px] mt-1 text-gray-600 dark:text-gray-400">
            실제 사용 중인 카드 패턴
          </p>
        </div>

        {/* Breadcrumb - PC만 표시 */}
        <nav className="hidden md:flex items-center gap-2 flex-shrink-0">
          <Link href="/main">
            <div className="flex items-center gap-1.5 cursor-pointer">
              <Home className="text-gray-400 dark:text-gray-600"
                size={14}/>
              <span className="text-[13px] font-medium whitespace-nowrap text-gray-600 dark:text-gray-400">
                홈
              </span>
            </div>
          </Link>
          <ChevronRight size={12} className="text-gray-300 dark:text-gray-600" />
          <span className="text-[13px] font-medium whitespace-nowrap text-gray-600 dark:text-gray-400">
            UI Elements
          </span>
          <ChevronRight size={12} className="text-gray-300 dark:text-gray-600" />
          <span className="text-[13px] font-semibold whitespace-nowrap text-gray-900 dark:text-gray-50">
            Cards
          </span>
        </nav>
      </div>

      {/* Group 1. KPI Cards (Wide) */}
      <div className="mb-12">
        <h2 className="text-[20px] font-semibold mb-2 text-gray-900 dark:text-gray-50">
          KPI 카드 (Wide)
        </h2>
        <p className="text-[13px] mb-6 text-gray-600 dark:text-gray-400">
          아이콘, 배지, 지표, 프로그레스바, 아바타를 포함한 통계 카드
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 - Projects (Wide) */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-5">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#EEF1F7] dark:bg-[#243c8420]">
                <Briefcase size={20} className="text-[#243c84]" />
              </div>
              <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-[#EEF1F7] dark:bg-[#243c8420] text-[#243c84] border border-[#D6DBE6] dark:border-[#243c84]">
                활성
              </span>
            </div>
            <div className="mb-4">
              <p className="text-[13px] mb-1 text-gray-600 dark:text-gray-400">전체 프로젝트</p>
              <p className="text-[28px] font-semibold text-gray-900 dark:text-gray-50">24</p>
            </div>
            <div className="mb-3">
              <div className="h-1 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-900">
                <div className="h-full rounded-full transition-all bg-[#243c84]" style={{ width: '78%' }} />
              </div>
              <p className="text-[10px] mt-1 text-gray-400 dark:text-gray-600">
                정상 진행 78%
              </p>
            </div>
            <div className="flex items-center justify-end gap-2">
              <div className="flex -space-x-2">
                {users.slice(0, 2).map((user, idx) => (
                  <div 
                    key={idx}
                    className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-medium border-2 relative text-white border-white dark:border-gray-800"
                    style={{ backgroundColor: user.color }}
                  >
                    {user.initials}
                    {user.online && (
                      <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full border bg-[#243c84] border-white dark:border-gray-800" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2 - Tasks in Progress (Wide) */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-5">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#EEF1F7] dark:bg-[#243c8420]">
                <Clock size={20} className="text-[#243c84]" />
              </div>
              <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-gray-100 dark:bg-[#6b728020] text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-600">
                처리중
              </span>
            </div>
            <div className="mb-4">
              <p className="text-[13px] mb-1 text-gray-600 dark:text-gray-400">진행중 업무</p>
              <p className="text-[28px] font-semibold text-gray-900 dark:text-gray-50">47</p>
            </div>
            <div className="mb-3">
              <div className="h-1 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-900">
                <div className="h-full rounded-full transition-all bg-gray-500" style={{ width: '65%' }} />
              </div>
              <p className="text-[10px] mt-1 text-gray-400 dark:text-gray-600">
                완료율 65%
              </p>
            </div>
            <div className="flex items-center justify-end gap-2">
              <div className="flex -space-x-2">
                {users.slice(2, 4).map((user, idx) => (
                  <div 
                    key={idx}
                    className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-medium border-2 relative text-white border-white dark:border-gray-800"
                    style={{ backgroundColor: user.color }}
                  >
                    {user.initials}
                    {user.online && (
                      <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full border bg-[#243c84] border-white dark:border-gray-800" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Group 2. KPI Cards (Compact) */}
      <div className="mb-12">
        <h2 className="text-[20px] font-semibold mb-2 text-gray-900 dark:text-gray-50">
          KPI 카드 (Compact)
        </h2>
        <p className="text-[13px] mb-6 text-gray-600 dark:text-gray-400">
          더 작은 크기의 통계 카드 (사이드바 등에 사용)
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 3 - Pending Documents (Compact) */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#EEF1F7] dark:bg-[#243c8420]">
                <FileText size={18} className="text-[#243c84]" />
              </div>
              <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-gray-100 dark:bg-[#6b728020] text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-600">
                대기중
              </span>
            </div>
            <div className="mb-3">
              <p className="text-[12px] mb-0.5 text-gray-600 dark:text-gray-400">미제출 서류</p>
              <p className="text-[22px] font-semibold text-gray-900 dark:text-gray-50">18</p>
            </div>
            <div className="mb-2">
              <div className="h-1 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-900">
                <div className="h-full rounded-full transition-all bg-gray-500" style={{ width: '82%' }} />
              </div>
              <p className="text-[9px] mt-1 text-gray-400 dark:text-gray-600">
                제출률 82%
              </p>
            </div>
            <div className="flex items-center justify-end">
              <div className="flex -space-x-2">
                {users.slice(0, 2).map((user, idx) => (
                  <div 
                    key={idx}
                    className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-medium border-2 relative text-white border-white dark:border-gray-800"
                    style={{ backgroundColor: user.color }}
                  >
                    {user.initials}
                    {user.online && (
                      <div className="absolute bottom-0 right-0 w-1.5 h-1.5 rounded-full border bg-[#243c84] border-white dark:border-gray-800" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 4 - Partners (Compact) */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#EEF1F7] dark:bg-[#243c8420]">
                <Users size={18} className="text-[#243c84]" />
              </div>
              <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-red-50 dark:bg-[#d8442c20] text-[#d8442c] border border-red-200 dark:border-[#d8442c]">
                확인필요
              </span>
            </div>
            <div className="mb-3">
              <p className="text-[12px] mb-0.5 text-gray-600 dark:text-gray-400">협력사 현황</p>
              <p className="text-[22px] font-semibold text-gray-900 dark:text-gray-50">12</p>
            </div>
            <div className="mb-2">
              <div className="h-1 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-900">
                <div className="h-full rounded-full transition-all bg-[#d8442c]" style={{ width: '91%' }} />
              </div>
              <p className="text-[9px] mt-1 text-gray-400 dark:text-gray-600">
                진행률 91%
              </p>
            </div>
            <div className="flex items-center justify-end">
              <div className="flex -space-x-2">
                {users.slice(2, 4).map((user, idx) => (
                  <div 
                    key={idx}
                    className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-medium border-2 relative text-white border-white dark:border-gray-800"
                    style={{ backgroundColor: user.color }}
                  >
                    {user.initials}
                    {user.online && (
                      <div className="absolute bottom-0 right-0 w-1.5 h-1.5 rounded-full border bg-[#243c84] border-white dark:border-gray-800" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Group 3. Icon Header Cards */}
      <div className="mb-12">
        <h2 className="text-[20px] font-semibold mb-2 text-gray-900 dark:text-gray-50">
          아이콘 헤더 카드
        </h2>
        <p className="text-[13px] mb-6 text-gray-600 dark:text-gray-400">
          주요 작업 및 정보를 아이콘으로 구분하는 카드 패턴
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Icon Card 1 - BarChart3 */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] p-5 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center flex-shrink-0">
                <BarChart3 size={24} className="text-[#243c84]" />
              </div>
              <div className="flex-1">
                <h3 className="text-[16px] font-semibold text-gray-900 dark:text-gray-50 mb-1">
                  발전시간/월 리포트
                </h3>
                <p className="text-[13px] text-gray-600 dark:text-gray-400">
                  Monthly Report
                </p>
              </div>
            </div>
            <p className="text-[14px] leading-relaxed text-gray-900 dark:text-gray-50">
              월별 발전소 가동 시간 및 성과를 분석한 데이터 리포트
            </p>
          </div>

          {/* Icon Card 2 - FileText */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] p-5 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center flex-shrink-0">
                <FileText size={24} className="text-[#243c84]" />
              </div>
              <div className="flex-1">
                <h3 className="text-[16px] font-semibold text-gray-900 dark:text-gray-50 mb-1">
                  입출금 내역/월 리포트
                </h3>
                <p className="text-[13px] text-gray-600 dark:text-gray-400">
                  Transaction Report
                </p>
              </div>
            </div>
            <p className="text-[14px] leading-relaxed text-gray-900 dark:text-gray-50">
              월별 입출금 내역과 정산 현황을 정리한 재무 리포트
            </p>
          </div>

          {/* Icon Card 3 - Clock */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] p-5 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center flex-shrink-0">
                <Clock size={24} className="text-[#243c84]" />
              </div>
              <div className="flex-1">
                <h3 className="text-[16px] font-semibold text-gray-900 dark:text-gray-50 mb-1">
                  자금 지급 (임대료)
                </h3>
                <p className="text-[13px] text-gray-600 dark:text-gray-400">
                  Payment Schedule
                </p>
              </div>
            </div>
            <p className="text-[14px] leading-relaxed text-gray-900 dark:text-gray-50">
              정기 임대료 지급 및 스케줄 관리 작업
            </p>
          </div>
        </div>
      </div>

      {/* Group 4. Summary Card */}
      <div>
        <h2 className="text-[20px] font-semibold mb-2 text-gray-900 dark:text-gray-50">
          요약 카드
        </h2>
        <p className="text-[13px] mb-6 text-gray-600 dark:text-gray-400">
          아이콘과 텍스트 리스트로 정보를 요약하는 카드
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[14px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              프로젝트 현황
            </h3>
            <div className="space-y-4">
              {/* Issue Item 1 */}
              <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-blue-100">
                  <Briefcase size={16} className="text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-[13px] font-medium mb-1 text-gray-900 dark:text-gray-50">
                    진행 프로젝트 24건
                  </p>
                  <p className="text-[11px] text-gray-600 dark:text-gray-400">
                    진행중 74%
                  </p>
                </div>
              </div>

              {/* Issue Item 2 */}
              <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-amber-100">
                  <Clock size={16} className="text-amber-600" />
                </div>
                <div className="flex-1">
                  <p className="text-[13px] font-medium mb-1 text-gray-900 dark:text-gray-50">
                    진행중 업무 47건
                  </p>
                  <p className="text-[11px] text-gray-600 dark:text-gray-400">
                    진행중 86%
                  </p>
                </div>
              </div>

              {/* Issue Item 3 */}
              <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-green-100">
                  <FileText size={16} className="text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-[13px] font-medium mb-1 text-gray-900 dark:text-gray-50">
                    계류중 서류 18건
                  </p>
                  <p className="text-[11px] text-gray-600 dark:text-gray-400">
                    대기중
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Placeholder for another summary card or chart */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[14px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              협력사 현황
            </h3>
            <div className="space-y-4">
              {/* Issue Item 1 */}
              <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-green-100">
                  <Users size={16} className="text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-[13px] font-medium mb-1 text-gray-900 dark:text-gray-50">
                    활성 협력사 12건
                  </p>
                  <p className="text-[11px] text-gray-600 dark:text-gray-400">
                    정상 운영중
                  </p>
                </div>
              </div>

              {/* Issue Item 2 */}
              <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-amber-100">
                  <FileText size={16} className="text-amber-600" />
                </div>
                <div className="flex-1">
                  <p className="text-[13px] font-medium mb-1 text-gray-900 dark:text-gray-50">
                    계약 갱신 필요 3건
                  </p>
                  <p className="text-[11px] text-gray-600 dark:text-gray-400">
                    검토중
                  </p>
                </div>
              </div>

              {/* Issue Item 3 */}
              <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-blue-100">
                  <BarChart3 size={16} className="text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-[13px] font-medium mb-1 text-gray-900 dark:text-gray-50">
                    성과 평가 진행중
                  </p>
                  <p className="text-[11px] text-gray-600 dark:text-gray-400">
                    분석 중
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
