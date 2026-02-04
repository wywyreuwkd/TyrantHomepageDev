import type { Metadata } from "next";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";
import { CompanyInfoSection } from "@/components/section/settings/CompanyInfoSection";

export const metadata: Metadata = {
  title: "회사 정보 관리 | 타이런트 - 관리자",
  description: "타이런트 관리자 회사 정보 관리 페이지",
};

export default function CompanyInfo() {

  return (
    <div className="py-6 md:px-6">
      {/* Page Header */}
      <div className="flex items-start justify-between gap-4 mb-12">
        <div>
          <h1 className="text-[24px] md:text-[28px] font-bold tracking-tight text-gray-900 dark:text-gray-50">
            회사 정보 관리
          </h1>
          <p className="text-[14px] mt-2 text-gray-600 dark:text-gray-400">
            회사의 기본 정보와 사업자 등록 정보를 관리할 수 있습니다
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
            설정
          </span>
          <ChevronRight size={12} className="text-gray-300 dark:text-gray-600" />
          <span className="text-[13px] font-semibold whitespace-nowrap text-gray-900 dark:text-gray-50">
            회사 정보 관리
          </span>
        </nav>
      </div>

      {/* 회사 정보 관리 섹션 */}
      <CompanyInfoSection />
    </div>
  );
}
