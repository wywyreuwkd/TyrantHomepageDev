import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Plus, Upload, FolderOpen, Home, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blank Page | 타이런트 - 관리자",
  description: "타이런트 관리자 Blank Page 페이지",
};

export default function BlankPage() {
  
  return (
    <div className="py-6 md:px-6">
      {/* Page Header */}
      <div className="flex items-start justify-between gap-4 mb-12">
        <div>
          <h1 className="text-[24px] md:text-[28px] font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Blank Page
          </h1>
          <p className="text-[14px] mt-2 text-gray-500 dark:text-gray-400">
            Start building your content from scratch
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
            Pages
          </span>
          <ChevronRight size={12} className="text-gray-300 dark:text-gray-600" />
          <span className="text-[13px] font-semibold whitespace-nowrap text-gray-900 dark:text-gray-50">
            Blank Page
          </span>
        </nav>
      </div>

      {/* Content Canvas */}
      <div className="min-h-[1400px] w-full rounded-none border-none px-[120px] py-16 bg-white dark:bg-gray-800">
        {/* Document-style Title */}
        <div className="text-center mb-12">
          <h2 className="text-[28px] font-semibold text-[#243c84] tracking-[0.01em] mb-6 leading-[1.3]">
            Card Title Here
          </h2>
          
          {/* Subtle Divider */}
          <div className="w-[120px] h-px bg-[#243c84] opacity-10 mx-auto" />
        </div>

        {/* Guide Text */}
        <div className="text-center max-w-full mx-auto">
          <p className="text-[14px] leading-[1.8] tracking-[0.005em] text-slate-400 dark:text-gray-400">
            이 영역은 콘텐츠를 자유롭게 구성할 수 있는 빈 캔버스입니다.
            <br />
            필요한 컴포넌트와 레이아웃을 추가하여 페이지를 완성하세요.
          </p>
        </div>
      </div>
    </div>
  );
}
