import type { Metadata } from "next";
import Link from "next/link";
import { Home, ChevronRight, Sparkles, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: "Ribbons | 타이런트 - 관리자",
  description: "타이런트 관리자 Ribbons 페이지",
};

export default function Ribbons() {
  
  return (
    <div className="contents-layout">
      {/* Page Header */}
      <div className="flex items-start justify-between gap-4 mb-12">
        <div>
          <h1 className="contents-title font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Ribbons
          </h1>
          <p className="contents-sub-title mt-2 text-gray-600 dark:text-gray-400">
            리본 및 배지 컴포넌트
          </p>
        </div>

        <nav className="hidden md:flex items-center gap-2 flex-shrink-0">
          <Link href="/main">
            <div className="flex items-center gap-1.5 cursor-pointer">
              <Home className="text-gray-400 dark:text-gray-600"
                size={14}/>
              <span className="contents-breadcrumb font-medium whitespace-nowrap text-gray-600 dark:text-gray-400">
                홈
              </span>
            </div>
          </Link>
          <ChevronRight size={12} className="text-gray-300 dark:text-gray-600" />
          <span className="contents-breadcrumb font-medium whitespace-nowrap text-gray-600 dark:text-gray-400">
            UI Elements
          </span>
          <ChevronRight size={12} className="text-gray-300 dark:text-gray-600" />
          <span className="contents-breadcrumb font-semibold whitespace-nowrap text-gray-900 dark:text-gray-50">
            Ribbons
          </span>
        </nav>
      </div>

      {/* Corner Ribbons */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-[#243c84]" />
          <h2 className="text-base font-semibold tracking-tight text-gray-900 dark:text-gray-50">
            코너 리본
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Success Ribbon */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] p-6 relative overflow-hidden min-h-[140px]">
            <div className="absolute top-0 right-0 bg-green-500 text-white py-2 px-4 text-xs font-semibold rounded-bl-[10px]">
              완료
            </div>
            <div className="text-sm font-semibold mb-2 text-gray-900 dark:text-gray-50">
              프로젝트 A
            </div>
            <div className="text-[13px] text-gray-600 dark:text-gray-400">
              모든 작업이 완료되었습니다.
            </div>
          </div>

          {/* Pending Ribbon */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] p-6 relative overflow-hidden min-h-[140px]">
            <div className="absolute top-0 right-0 bg-amber-500 text-white py-2 px-4 text-xs font-semibold rounded-bl-[10px]">
              대기
            </div>
            <div className="text-sm font-semibold mb-2 text-gray-900 dark:text-gray-50">
              프로젝트 B
            </div>
            <div className="text-[13px] text-gray-600 dark:text-gray-400">
              승인 대기 중입니다.
            </div>
          </div>

          {/* Urgent Ribbon */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] p-6 relative overflow-hidden min-h-[140px]">
            <div className="absolute top-0 right-0 bg-[#d8442c] text-white py-2 px-4 text-xs font-semibold rounded-bl-[10px]">
              긴급
            </div>
            <div className="text-sm font-semibold mb-2 text-gray-900 dark:text-gray-50">
              프로젝트 C
            </div>
            <div className="text-[13px] text-gray-600 dark:text-gray-400">
              긴급 처리가 필요합니다.
            </div>
          </div>

          {/* New Ribbon */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] p-6 relative overflow-hidden min-h-[140px]">
            <div className="absolute top-0 right-0 bg-[#243c84] text-white py-2 px-4 text-xs font-semibold rounded-bl-[10px]">
              신규
            </div>
            <div className="text-sm font-semibold mb-2 text-gray-900 dark:text-gray-50">
              프로젝트 D
            </div>
            <div className="text-[13px] text-gray-600 dark:text-gray-400">
              새로 추가된 프로젝트입니다.
            </div>
          </div>
        </div>
      </div>

      {/* Top Bar Ribbons */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-[#243c84]" />
          <h2 className="text-base font-semibold tracking-tight text-gray-900 dark:text-gray-50">
            상단 바 리본
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] overflow-hidden">
            <div className="h-1 bg-[#243c84]" />
            <div className="p-5">
              <div className="text-sm font-semibold mb-2 text-gray-900 dark:text-gray-50">
                기본 프로젝트
              </div>
              <div className="text-[13px] text-gray-600 dark:text-gray-400">
                진행 중인 작업입니다.
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] overflow-hidden">
            <div className="h-1 bg-green-500" />
            <div className="p-5">
              <div className="text-sm font-semibold mb-2 text-gray-900 dark:text-gray-50">
                완료된 프로젝트
              </div>
              <div className="text-[13px] text-gray-600 dark:text-gray-400">
                모든 작업이 완료되었습니다.
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] overflow-hidden">
            <div className="h-1 bg-[#d8442c]" />
            <div className="p-5">
              <div className="text-sm font-semibold mb-2 text-gray-900 dark:text-gray-50">
                주의 필요
              </div>
              <div className="text-[13px] text-gray-600 dark:text-gray-400">
                확인이 필요한 항목입니다.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inline Badges */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-[#243c84]" />
          <h2 className="text-base font-semibold tracking-tight text-gray-900 dark:text-gray-50">
            인라인 배지
          </h2>
        </div>
        
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  프로젝트 A
                </div>
                <span className="py-0.5 px-2.5 bg-green-100 dark:bg-green-950 text-green-600 dark:text-green-500 text-xs font-semibold rounded-md">
                  활성
                </span>
              </div>
              <div className="text-[13px] text-gray-600 dark:text-gray-400">
                2024-01-16
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  프로젝트 B
                </div>
                <span className="py-0.5 px-2.5 bg-amber-100 dark:bg-amber-950 text-amber-500 dark:text-amber-400 text-xs font-semibold rounded-md">
                  대기
                </span>
              </div>
              <div className="text-[13px] text-gray-600 dark:text-gray-400">
                2024-01-15
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  프로젝트 C
                </div>
                <span className="py-0.5 px-2.5 bg-red-100 dark:bg-red-950 text-[#d8442c] dark:text-red-400 text-xs font-semibold rounded-md">
                  긴급
                </span>
              </div>
              <div className="text-[13px] text-gray-600 dark:text-gray-400">
                2024-01-16
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Corner Badges */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-[#243c84]" />
          <h2 className="text-base font-semibold tracking-tight text-gray-900 dark:text-gray-50">
            코너 배지
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] p-5 relative">
            <div className="absolute top-3 right-3 bg-indigo-100 dark:bg-slate-900 text-[#243c84] dark:text-blue-300 py-1 px-3 rounded-md text-xs font-semibold flex items-center gap-1">
              <Sparkles size={12} />
              신규
            </div>
            <div className="text-sm font-semibold mb-2 text-gray-900 dark:text-gray-50">
              새로운 기능
            </div>
            <div className="text-[13px] text-gray-600 dark:text-gray-400">
              새롭게 추가된 기능입니다.
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] p-5 relative">
            <div className="absolute top-3 right-3 bg-green-100 dark:bg-green-950 text-green-600 dark:text-green-500 py-1 px-3 rounded-md text-xs font-semibold flex items-center gap-1">
              <TrendingUp size={12} />
              인기
            </div>
            <div className="text-sm font-semibold mb-2 text-gray-900 dark:text-gray-50">
              인기 항목
            </div>
            <div className="text-[13px] text-gray-600 dark:text-gray-400">
              가장 많이 사용됩니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
