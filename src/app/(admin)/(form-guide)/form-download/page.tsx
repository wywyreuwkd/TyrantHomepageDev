
import type { Metadata } from "next";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";
import { FormDownloadSection } from "@/components/section/form-download/FormDownloadSection";

export const metadata: Metadata = {
  title: "서식 다운로드 | 타이런트 - 관리자",
  description: "타이런트 관리자 서식 다운로드 페이지",
};

export default function FormDownload() {
  return (
    <div className="contents-layout">
      {/* Page Header */}
      <div className="flex items-start justify-between gap-4 mb-8">
        <div>
          <h1 className="contents-title font-bold tracking-[-0.02em] text-gray-900 dark:text-gray-50">
            서식 안내
          </h1>
          <p className="contents-sub-title mt-2 text-gray-500 dark:text-gray-400">
            프로젝트 진행을 위한 필수 서식 다운로드
          </p>
        </div>

        {/* Breadcrumb - PC만 표시 */}
        <nav className="hidden md:flex items-center gap-2 flex-shrink-0">
          <Link href="/main">
            <div className="flex items-center gap-1.5 cursor-pointer">
              <Home className="flex-shrink-0 text-gray-400 dark:text-gray-500"
                size={14}/>
              <span className="contents-breadcrumb font-medium whitespace-nowrap text-gray-500 dark:text-gray-400">
                홈
              </span>
            </div>
          </Link>
          <ChevronRight size={12} className="flex-shrink-0 text-gray-300 dark:text-gray-600" />
          <span className="contents-breadcrumb font-medium whitespace-nowrap text-gray-500 dark:text-gray-400">
            서식 안내
          </span>
          <ChevronRight size={12} className="flex-shrink-0 text-gray-300 dark:text-gray-600" />
          <span className="contents-breadcrumb font-semibold whitespace-nowrap text-gray-900 dark:text-gray-50">
            서식 다운로드
          </span>
        </nav>
      </div>

      {/* 다운로드 섹션 */}
      <FormDownloadSection />
    </div>
  );
}
