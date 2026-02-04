import type { Metadata } from "next";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";
import { FileManagerSection } from "@/components/section/pages/FileManagerSection";

export const metadata: Metadata = {
  title: "File Manager | 타이런트 - 관리자",
  description: "타이런트 관리자 File Manager 페이지",
};

export default function FileManager() {

  return (
    <div className="contents-layout">
      {/* Page Header */}
      <div className="flex items-start justify-between gap-4 mb-12">
        <div>
          <h1 className="contents-title font-bold tracking-tight text-gray-900 dark:text-gray-50">
            File Manager
          </h1>
          <p className="contents-sub-title mt-2 text-gray-600 dark:text-gray-400">
            파일과 폴더를 효율적으로 관리하고 스토리지 사용량을 모니터링하세요
          </p>
        </div>

        {/* Breadcrumb - PC만 표시 */}
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
            Pages
          </span>
          <ChevronRight size={12} className="text-gray-300 dark:text-gray-600" />
          <span className="contents-breadcrumb font-semibold whitespace-nowrap text-gray-900 dark:text-gray-50">
            File Manager
          </span>
        </nav>
      </div>

      {/* File Manager 섹션 */}
      <FileManagerSection />
    </div>
  );
}
