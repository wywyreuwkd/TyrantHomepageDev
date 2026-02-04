import type { Metadata } from "next";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";
import { ProgressbarSection } from "@/components/section/ui-elements/progressbar/ProgressbarSection";

export const metadata: Metadata = {
  title: "Progressbar | 타이런트 - 관리자",
  description: "타이런트 관리자 Progressbar 페이지",
};

export default function Progressbar() {
  
  return (
    <div className="contents-layout">
      {/* Page Header */}
      <div className="flex items-start justify-between gap-4 mb-12">
        <div>
          <h1 className="contents-title font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Progress Bars
          </h1>
          <p className="contents-sub-title mt-2 text-gray-600 dark:text-gray-400">
            실시간 진행 상태 표시 컴포넌트
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
            Progressbar
          </span>
        </nav>
      </div>

      {/* Progressbar 섹션 */}
      <ProgressbarSection />
    </div>
  );
}
