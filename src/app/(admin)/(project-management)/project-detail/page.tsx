import type { Metadata } from "next";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";
import { ProjectDetailSection } from "@/components/section/project-management/ProjectDetailSection";

export const metadata: Metadata = {
  title: "프로젝트 정보조회 | 타이런트 - 관리자",
  description: "타이런트 관리자 프로젝트 정보조회 페이지",
};

export default function ProjectDetail() {
	
  return (
  	<div className="py-6 md:px-6">
      {/* Page Header */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          {/* Mobile: Title + Back Button */}
          <div className="md:hidden flex items-start justify-between w-full">
            <h1 className="text-[24px] font-bold tracking-[-0.02em] leading-[1.25] text-gray-900 dark:text-gray-50">
              프로젝트 정보조회
            </h1>
            <Link href="/project-list">
              <button className="px-4 py-2 rounded-lg text-[14px] font-semibold transition-all whitespace-nowrap border-none bg-slate-100 dark:bg-gray-700 text-slate-600 dark:text-gray-300">
                목록으로
              </button>
            </Link>
          </div>

          {/* Desktop: Title + Subtitle */}
          <div className="hidden md:block">
            <h1 className="text-[28px] font-bold tracking-[-0.02em] mb-2 leading-[1.25] text-gray-900 dark:text-gray-50">
              프로젝트 정보조회
            </h1>
            <p className="text-[14px] text-gray-600 dark:text-gray-400">
              선택한 프로젝트의 상세 정보를 조회하고 수정할 수 있습니다
            </p>
          </div>

          {/* Breadcrumb - Hidden on mobile */}
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
              프로젝트 관리
            </span>            
            <ChevronRight size={12} className="text-gray-300 dark:text-gray-600" />            
            <span className="text-[13px] font-medium whitespace-nowrap text-gray-600 dark:text-gray-400">
              <Link href="/project-list">
                프로젝트 조회
              </Link>
            </span>            
            <ChevronRight size={12} className="text-gray-300 dark:text-gray-600" />
            <span className="text-[13px] font-semibold whitespace-nowrap text-gray-900 dark:text-gray-50">
              프로젝트 정보조회
            </span>
          </nav>
        </div>
      </div>
    
      {/* 프로젝트 정보조회 섹션 */}
      <ProjectDetailSection />
    </div>
  );
}