import type { Metadata } from "next";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";
import { ButtonsSection } from "@/components/section/ui-elements/buttons/ButtonsSection";

export const metadata: Metadata = {
  title: "Buttons | 타이런트 - 관리자",
  description: "타이런트 관리자 Buttons 페이지",
};

export default function Buttons() {
  
  return (
    <div className="contents-layout">
      {/* Page Header */}
      <div className="flex items-start justify-between gap-4 mb-8">
        <div>
          <h1 className="contents-title font-bold tracking-tight text-gray-900 dark:text-gray-50">
            버튼 컴포넌트
          </h1>
          <p className="contents-sub-title mt-2 text-gray-600 dark:text-gray-400">
            실제 프로젝트에서 사용되는 전문적인 버튼 시스템
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
            UI Elements
          </span>
          <ChevronRight size={12} className="text-gray-300 dark:text-gray-600" />
          <span className="contents-breadcrumb font-semibold whitespace-nowrap text-gray-900 dark:text-gray-50">
            Buttons
          </span>
        </nav>
      </div>

      {/* Buttons 섹션 */}
      <ButtonsSection />
    </div>
  );
}
