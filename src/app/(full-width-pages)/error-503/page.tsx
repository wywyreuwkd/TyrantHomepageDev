import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Home, Bell, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "ERROR 503 | 타이런트 - 관리자",
  description: "타이런트 관리자 ERROR 503 페이지",
};

export default function Error503() {
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Page Header */}
      <div className="pt-12 px-12">
        <div className="flex items-start justify-between gap-4 mb-8">
          <div>
            <h1 className="text-[28px] font-bold tracking-tight text-gray-900 dark:text-gray-50">
              503 Error
            </h1>
            <p className="text-[14px] mt-2 text-gray-500 dark:text-gray-400">
              Service unavailable error template
            </p>
          </div>          
        </div>
      </div>

      {/* Error Content - Centered */}
      <div className="flex-1 flex items-center justify-center p-12">
        <div className="text-center max-w-[560px]">
          {/* Error Code */}
          <div className="text-[120px] font-extrabold text-amber-500 dark:text-amber-400 leading-none mb-6 tracking-tight">
            503
          </div>

          {/* Error Title */}
          <h2 className="text-[28px] font-semibold mb-4 tracking-tight text-slate-900 dark:text-gray-50">
            Service Unavailable
          </h2>

          {/* Error Description */}
          <p className="text-[15px] leading-[1.7] mb-10 text-slate-500 dark:text-gray-300">
            죄송합니다. 현재 서비스 점검 중입니다.
            <br />
            빠른 시일 내에 정상화하도록 노력하겠습니다.
          </p>

          {/* Maintenance Info Card */}
          <div className="rounded-lg p-5 mb-10 bg-amber-50 dark:bg-amber-900 border border-amber-200 dark:border-amber-800">
            <div className="flex items-center gap-3 mb-2">
              <Clock size={18} className="text-amber-500 dark:text-amber-400" />
              <span className="text-[14px] font-semibold text-amber-900 dark:text-amber-200">
                예상 복구 시간
              </span>
            </div>
            <p className="text-[13px] leading-[1.6] m-0 text-amber-900 dark:text-amber-200">
              2026년 1월 8일 15:00 (약 2시간 후)
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="#">
              <button className="flex items-center gap-2 px-6 py-3 bg-amber-500 text-white border-none rounded-lg text-[14px] font-medium cursor-pointer transition-all hover:bg-amber-600 hover:-translate-y-px">
                <Bell size={16} />
                복구 알림 받기
              </button>
            </Link>

            <Link href="/main">
              <button className="flex items-center gap-2 px-6 py-3 border rounded-lg text-[14px] font-medium cursor-pointer transition-all bg-white dark:bg-gray-700 text-amber-500 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:bg-amber-50 dark:hover:bg-gray-600 hover:border-amber-500 dark:hover:border-gray-500">
                <Home size={16} />
                홈으로 돌아가기
              </button>
            </Link>
          </div>

          {/* Additional Help Text */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-[13px] leading-[1.6] text-slate-400 dark:text-gray-400">
              긴급한 문의사항은{' '}
              <Link className="no-underline font-medium hover:underline text-[#243c84] dark:text-blue-400"
                href="#">
                긴급 지원 라인
              </Link>
              으로 연락주세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
