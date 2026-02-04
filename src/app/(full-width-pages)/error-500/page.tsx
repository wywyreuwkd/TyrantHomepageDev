import type { Metadata } from "next";
import Link from "next/link";
import { RefreshCw, Home, Mail, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "ERROR 500 | 타이런트 - 관리자",
  description: "타이런트 관리자 ERROR 500 페이지",
};

export default function Error500() {
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Page Header */}
      <div className="pt-12 px-12">
        <div className="flex items-start justify-between gap-4 mb-8">
          <div>
            <h1 className="text-[28px] font-bold tracking-tight text-gray-900 dark:text-gray-50">
              500 Error
            </h1>
            <p className="text-[14px] mt-2 text-gray-500 dark:text-gray-400">
              Internal server error template
            </p>
          </div>          
        </div>
      </div>

      {/* Error Content - Centered */}
      <div className="flex-1 flex items-center justify-center p-12">
        <div className="text-center max-w-[560px]">
          {/* Error Code */}
          <div className="text-[120px] font-extrabold text-[#d8442c] dark:text-[#ff6b55] leading-none mb-6 tracking-tight">
            500
          </div>

          {/* Error Title */}
          <h2 className="text-[28px] font-semibold mb-4 tracking-tight text-slate-900 dark:text-gray-50">
            Internal Server Error
          </h2>

          {/* Error Description */}
          <p className="text-[15px] leading-[1.7] mb-10 text-slate-500 dark:text-gray-300">
            죄송합니다. 서버에 일시적인 오류가 발생했습니다.
            <br />
            잠시 후 다시 시도해 주시기 바랍니다.
          </p>

          {/* Action Buttons */}
          <div className="flex gap-3 justify-center flex-wrap">
            
            <Link href="#">
              <button className="flex items-center gap-2 px-6 py-3 bg-[#d8442c] text-white border-none rounded-lg text-[14px] font-medium cursor-pointer transition-all hover:bg-[#b83620] hover:-translate-y-px">
                <RefreshCw size={16} />
                다시 시도
              </button>
            </Link>

            <Link href="/main">
              <button className="flex items-center gap-2 px-6 py-3 border rounded-lg text-[14px] font-medium cursor-pointer transition-all bg-white dark:bg-gray-700 text-[#243c84] dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 hover:border-[#243c84] dark:hover:border-gray-500">
                <Home size={16} />
                홈으로 돌아가기
              </button>
            </Link>
          </div>

          {/* Additional Help Text */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-[13px] leading-[1.6] text-slate-400 dark:text-gray-400">
              문제가 계속되면{' '}
              <Link className="no-underline font-medium hover:underline text-[#243c84] dark:text-blue-400"
                href="#">
                기술 지원팀에 문의
              </Link>
              해 주세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
