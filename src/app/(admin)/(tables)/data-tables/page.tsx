import type { Metadata } from "next";
import Link from "next/link";
import { Home, ChevronRight } from 'lucide-react';
import { DataTablesSection } from "@/components/section/tables/DataTablesSection";

export const metadata: Metadata = {
  title: "Data Tables | 타이런트 - 관리자",
  description: "타이런트 관리자 Data Tables 페이지",
};

export default function DataTables() {  

  return (
    <div className="contents-layout">
      {/* Page Header */}
      <div className="flex items-start justify-between gap-4 mb-12">
        <div>
          <h1 className="contents-title font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Data Tables
          </h1>
          <p className="contents-sub-title mt-2 text-gray-600 dark:text-gray-400">
            프로젝트에서 사용되는 데이터 테이블 스타일 및 고급 기능 예제를 확인합니다
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
            Data Tables
          </span>
        </nav>
      </div>

      {/* Data tables 섹션 */}
      <DataTablesSection />
    </div>
  );
}
