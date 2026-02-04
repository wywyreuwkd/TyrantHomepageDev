import type { Metadata } from "next";
import Link from "next/link";
import { Menu, Check, AlertTriangle, XCircle, Info, Home, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Badge | 타이런트 - 관리자",
  description: "타이런트 관리자 Badge 페이지",
};

export default function Badge() {
  
  return (
    <div className="py-6 md:px-6">
      {/* Page Header */}
      <div className="flex items-start justify-between gap-4 mb-8">
        <div>
          <h1 className="text-[24px] md:text-[28px] font-bold tracking-tight text-gray-900 dark:text-gray-50">
            배지 컴포넌트
          </h1>
          <p className="text-[14px] mt-1 text-gray-600 dark:text-gray-400">
            상태 표시와 분류를 위한 배지 컴포넌트
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
            Badge
          </span>
        </nav>
      </div>

      {/* Basic Badges Section */}
      <div className="mb-12">
        <h2 className="text-[20px] font-semibold mb-6 text-gray-900 dark:text-gray-50">
          기본 배지
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Primary / Default */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              Primary / Default
            </h3>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="h-6 px-2.5 rounded-full text-xs font-medium inline-flex items-center bg-[#EEF1F7] border border-[#D6DBE6] text-[#1F2A44]">
                Default
              </span>
              <span className="h-6 px-2.5 rounded-full text-xs font-medium inline-flex items-center bg-[#EEF1F7] border border-[#D6DBE6] text-[#1F2A44]">
                Primary
              </span>
              <span className="h-6 px-2.5 rounded-full text-xs font-medium inline-flex items-center bg-[#EEF1F7] border border-[#D6DBE6] text-[#1F2A44]">
                Beta
              </span>
              <span className="h-6 px-2.5 rounded-full text-xs font-medium inline-flex items-center bg-[#EEF1F7] border border-[#D6DBE6] text-[#1F2A44]">
                NEW
              </span>
            </div>
          </div>

          {/* Active / Success */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              Active / Success
            </h3>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="h-6 px-2.5 rounded-full text-xs font-medium inline-flex items-center bg-[#F0F7F4] border border-[#CFE9DD] text-[#166534]">
                Active
              </span>
              <span className="h-6 px-2.5 rounded-full text-xs font-medium inline-flex items-center bg-[#F0F7F4] border border-[#CFE9DD] text-[#166534]">
                Success
              </span>
              <span className="h-6 px-2.5 rounded-full text-xs font-medium inline-flex items-center bg-[#F0F7F4] border border-[#CFE9DD] text-[#166534]">
                Member
              </span>
            </div>
          </div>

          {/* Warning */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              Warning
            </h3>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="h-6 px-2.5 rounded-full text-xs font-medium inline-flex items-center bg-[#FFFBEB] border border-[#FDE68A] text-[#92400E]">
                Warning
              </span>
              <span className="h-6 px-2.5 rounded-full text-xs font-medium inline-flex items-center bg-[#FFFBEB] border border-[#FDE68A] text-[#92400E]">
                Pending
              </span>
            </div>
          </div>

          {/* Error */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              Error
            </h3>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="h-6 px-2.5 rounded-full text-xs font-medium inline-flex items-center bg-[#FEF2F2] border border-[#FECACA] text-[#991B1B]">
                Error
              </span>
              <span className="h-6 px-2.5 rounded-full text-xs font-medium inline-flex items-center bg-[#FEF2F2] border border-[#FECACA] text-[#991B1B]">
                Inactive
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              Info
            </h3>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="h-6 px-2.5 rounded-full text-xs font-medium inline-flex items-center bg-[#F1F5F9] border border-[#CBD5E1] text-[#334155]">
                Info
              </span>
              <span className="h-6 px-2.5 rounded-full text-xs font-medium inline-flex items-center bg-[#F1F5F9] border border-[#CBD5E1] text-[#334155]">
                Internal
              </span>
            </div>
          </div>

          {/* Neutral / System */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              Neutral / System
            </h3>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="h-6 px-2.5 rounded-full text-xs font-medium inline-flex items-center bg-[#F9FAFB] border border-[#E5E7EB] text-[#6B7280]">
                Neutral
              </span>
              <span className="h-6 px-2.5 rounded-full text-xs font-medium inline-flex items-center bg-[#F9FAFB] border border-[#E5E7EB] text-[#6B7280]">
                System
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Icon Badges Section */}
      <div className="mb-12">
        <h2 className="text-[20px] font-semibold mb-6 text-gray-900 dark:text-gray-50">
          아이콘 배지
        </h2>
        <p className="text-[14px] mb-6 text-gray-600 dark:text-gray-400">
          의미가 명확할 때만 왼쪽 아이콘 사용 (아이콘 크기: 12px, 간격: 6px)
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Success with Icon */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              Success 아이콘
            </h3>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="h-6 px-2.5 rounded-full text-xs font-medium inline-flex items-center gap-1.5 bg-[#F0F7F4] border border-[#CFE9DD] text-[#166534]">
                <Check size={12} />
                Active
              </span>
              <span className="h-6 px-2.5 rounded-full text-xs font-medium inline-flex items-center gap-1.5 bg-[#F0F7F4] border border-[#CFE9DD] text-[#166534]">
                <Check size={12} />
                Verified
              </span>
            </div>
          </div>

          {/* Warning with Icon */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              Warning 아이콘
            </h3>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="h-6 px-2.5 rounded-full text-xs font-medium inline-flex items-center gap-1.5 bg-[#FFFBEB] border border-[#FDE68A] text-[#92400E]">
                <AlertTriangle size={12} />
                Warning
              </span>
              <span className="h-6 px-2.5 rounded-full text-xs font-medium inline-flex items-center gap-1.5 bg-[#FFFBEB] border border-[#FDE68A] text-[#92400E]">
                <AlertTriangle size={12} />
                Pending
              </span>
            </div>
          </div>

          {/* Error with Icon */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              Error 아이콘
            </h3>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="h-6 px-2.5 rounded-full text-xs font-medium inline-flex items-center gap-1.5 bg-[#FEF2F2] border border-[#FECACA] text-[#991B1B]">
                <XCircle size={12} />
                Error
              </span>
              <span className="h-6 px-2.5 rounded-full text-xs font-medium inline-flex items-center gap-1.5 bg-[#FEF2F2] border border-[#FECACA] text-[#991B1B]">
                <XCircle size={12} />
                Inactive
              </span>
            </div>
          </div>

          {/* Info with Icon */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              Info 아이콘
            </h3>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="h-6 px-2.5 rounded-full text-xs font-medium inline-flex items-center gap-1.5 bg-[#F1F5F9] border border-[#CBD5E1] text-[#334155]">
                <Info size={12} />
                Info
              </span>
              <span className="h-6 px-2.5 rounded-full text-xs font-medium inline-flex items-center gap-1.5 bg-[#F1F5F9] border border-[#CBD5E1] text-[#334155]">
                <Info size={12} />
                Notice
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Solid Badges Section */}
      <div className="mb-12">
        <h2 className="text-[20px] font-semibold mb-6 text-gray-900 dark:text-gray-50">
          Solid 배지 (제한적 사용)
        </h2>
        <p className="text-[14px] mb-6 text-gray-600 dark:text-gray-400">
          상태 강조나 CTA 근처에서만 사용 권장
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Solid Primary */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              Solid Primary
            </h3>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="h-6 px-2.5 rounded-full text-xs font-medium inline-flex items-center bg-[#243c84] text-white">
                Admin
              </span>
              <span className="h-6 px-2.5 rounded-full text-xs font-medium inline-flex items-center bg-[#243c84] text-white">
                Premium
              </span>
              <span className="h-6 px-2.5 rounded-full text-xs font-medium inline-flex items-center gap-1.5 bg-[#243c84] text-white">
                <Check size={12} />
                Verified
              </span>
            </div>
          </div>

          {/* Solid Error */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              Solid Error
            </h3>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="h-6 px-2.5 rounded-full text-xs font-medium inline-flex items-center bg-[#DC2626] text-white">
                Critical
              </span>
              <span className="h-6 px-2.5 rounded-full text-xs font-medium inline-flex items-center bg-[#DC2626] text-white">
                Urgent
              </span>
              <span className="h-6 px-2.5 rounded-full text-xs font-medium inline-flex items-center gap-1.5 bg-[#DC2626] text-white">
                <XCircle size={12} />
                Blocked
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 사용 예시 섹션 */}
      <div>
        <h2 className="text-[20px] font-semibold mb-6 text-gray-900 dark:text-gray-50">
          사용 예시
        </h2>
        
        <div className="grid grid-cols-1 gap-6">
          {/* List Item Example */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              리스트 아이템
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#243c84] text-white text-xs font-semibold">
                    김
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-gray-900 dark:text-gray-50">김민수</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">admin@company.com</p>
                  </div>
                </div>
                <span className="h-6 px-2.5 rounded-full text-xs font-medium inline-flex items-center bg-[#1F2A44] text-white">
                  Admin
                </span>
              </div>
              
              <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#1e40af] text-white text-xs font-semibold">
                    이
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-gray-900 dark:text-gray-50">이지은</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">member@company.com</p>
                  </div>
                </div>
                <span className="h-6 px-2.5 rounded-full text-xs font-medium inline-flex items-center gap-1.5 bg-[#F0F7F4] border border-[#CFE9DD] text-[#166534]">
                  <Check size={12} />
                  Active
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#2563eb] text-white text-xs font-semibold">
                    박
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-gray-900 dark:text-gray-50">박준호</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">pending@company.com</p>
                  </div>
                </div>
                <span className="h-6 px-2.5 rounded-full text-xs font-medium inline-flex items-center gap-1.5 bg-[#FFFBEB] border border-[#FDE68A] text-[#92400E]">
                  <AlertTriangle size={12} />
                  Pending
                </span>
              </div>
            </div>
          </div>

          {/* Project Status Example */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              프로젝트 상태
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                <div>
                  <p className="text-[14px] font-medium mb-1 text-gray-900 dark:text-gray-50">김천시 태양광 발전소 프로젝트</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">접수일: 2024.01.18</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#1E40AF] flex-shrink-0" />
                  <span className="text-[14px] font-medium text-gray-900 dark:text-gray-50">
                    신규접수
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                <div>
                  <p className="text-[14px] font-medium mb-1 text-gray-900 dark:text-gray-50">영주시 태양광 발전소 프로젝트</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">접수일: 2024.01.15</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#9CA3AF] flex-shrink-0" />
                  <span className="text-[14px] font-medium text-gray-900 dark:text-gray-50">
                    시공사 배정
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                <div>
                  <p className="text-[14px] font-medium mb-1 text-gray-900 dark:text-gray-50">포항시 태양광 발전소 프로젝트</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">접수일: 2024.01.12</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#D97706] flex-shrink-0" />
                  <span className="text-[14px] font-medium text-gray-900 dark:text-gray-50">
                    실사
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                <div>
                  <p className="text-[14px] font-medium mb-1 text-gray-900 dark:text-gray-50">경주시 태양광 발전소 프로젝트</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">접수일: 2024.01.08</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#7C3AED] flex-shrink-0" />
                  <span className="text-[14px] font-medium text-gray-900 dark:text-gray-50">
                    발전사업허가 접수요청
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                <div>
                  <p className="text-[14px] font-medium mb-1 text-gray-900 dark:text-gray-50">구미시 태양광 발전소 프로젝트</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">접수일: 2023.12.15</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#059669] flex-shrink-0" />
                  <span className="text-[14px] font-medium text-gray-900 dark:text-gray-50">
                    운영
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
