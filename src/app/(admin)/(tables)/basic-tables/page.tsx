import type { Metadata } from "next";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";
import { BasicTablesSection } from "@/components/section/tables/BasicTablesSection";

export const metadata: Metadata = {
  title: "Basic Tables | 타이런트 - 관리자",
  description: "타이런트 관리자 Basic Tables 페이지",
};

export default function BasicTables() {

  return (
    <div className="contents-layout">
      {/* Page Header */}
      <div className="flex items-start justify-between gap-4 mb-12">
        <div>
          <h1 className="contents-title font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Basic Tables
          </h1>
          <p className="contents-sub-title mt-2 text-gray-600 dark:text-gray-400">
            프로젝트에서 사용되는 테이블 디자인 가이드 및 예제를 확인합니다
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
            Tables
          </span>
          <ChevronRight size={12} className="text-gray-300 dark:text-gray-600" />
          <span className="contents-breadcrumb font-semibold whitespace-nowrap text-gray-900 dark:text-gray-50">
            Basic Tables
          </span>
        </nav>
      </div>

      {/* Basic tables 섹션 */}
      <BasicTablesSection />
    </div>
  );
}
