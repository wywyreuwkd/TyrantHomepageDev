import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Home } from 'lucide-react';
import { NoticeListSection } from "@/components/section/notice/NoticeListSection";

export const metadata: Metadata = {
  title: "공지사항 목록 | 타이런트 - 관리자",
  description: "타이런트 관리자 공지사항 목록 페이지",
};

export default function NoticeList() {

  return (
    <div className="py-6 md:px-6">
      {/* Page Header */}
      <div className="flex items-start justify-between gap-4 mb-12">
        <div>
          <h1 className="text-[24px] md:text-[28px] font-bold tracking-[-0.02em] text-gray-900 dark:text-gray-50">
            공지사항
          </h1>
          <p className="text-[14px] mt-2 text-gray-600 dark:text-gray-400">
            중요한 공지사항과 업데이트 소식을 확인하세요
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
            공지시항
          </span>
          <ChevronRight size={12} className="text-gray-300 dark:text-gray-600" />
          <span className="text-[13px] font-semibold whitespace-nowrap text-gray-900 dark:text-gray-50">
            공지사항 목록
          </span>
        </nav>
      </div>
      
      {/* 공지사항 목록 섹션 */}
      <NoticeListSection />      
    </div>
  );
}
