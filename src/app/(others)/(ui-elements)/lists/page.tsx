import type { Metadata } from "next";
import Link from "next/link";
import { Home, ChevronRight, FileText, Calendar, User, Eye, Pin } from 'lucide-react';

export const metadata: Metadata = {
  title: "Lists | 타이런트 - 관리자",
  description: "타이런트 관리자 Lists 페이지",
};

export default function Lists() {
  
  return (
    <div className="contents-layout">
      {/* Page Header */}
      <div className="flex items-start justify-between gap-4 mb-8">
        <div>
          <h1 className="contents-title font-bold tracking-tight text-gray-900 dark:text-gray-50">
            리스트 컴포넌트
          </h1>
          <p className="contents-sub-title mt-2 text-gray-600 dark:text-gray-400">
            프로젝트에서 사용하는 리스트 UI 패턴
          </p>
        </div>

        {/* Breadcrumb */}
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
            Lists
          </span>
        </nav>
      </div>

      {/* Table List */}
      <div className="mb-8">
        <h2 className="text-[20px] font-semibold mb-2 text-gray-900 dark:text-gray-50">
          Table List
        </h2>
        <p className="text-[13px] mb-6 text-gray-600 dark:text-gray-400">
          프로젝트 리스트 등에서 사용하는 테이블 형식 리스트
        </p>
        
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-800">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                  <th className="px-6 py-4 text-left text-[13px] font-semibold text-gray-600 dark:text-gray-400">
                    프로젝트명
                  </th>
                  <th className="px-6 py-4 text-left text-[13px] font-semibold text-gray-600 dark:text-gray-400">
                    영업사
                  </th>
                  <th className="px-6 py-4 text-left text-[13px] font-semibold text-gray-600 dark:text-gray-400">
                    진행상태
                  </th>
                  <th className="px-6 py-4 text-left text-[13px] font-semibold text-gray-600 dark:text-gray-400">
                    접수일자
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1 */}
                <tr className="border-b border-gray-200 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="px-6 py-4 text-[14px] font-medium text-gray-700 dark:text-gray-300">
                    서울 강남구 태양광 설치
                  </td>
                  <td className="px-6 py-4 text-[14px] text-gray-600 dark:text-gray-400">
                    한국에너지
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-[12px] font-medium bg-blue-100 text-blue-800">
                      진행중
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[14px] text-gray-600 dark:text-gray-400">
                    2026-01-15
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="border-b border-gray-200 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="px-6 py-4 text-[14px] font-medium text-gray-700 dark:text-gray-300">
                    부산 해운대 발전소 구축
                  </td>
                  <td className="px-6 py-4 text-[14px] text-gray-600 dark:text-gray-400">
                    동부솔라
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-[12px] font-medium bg-green-100 text-green-800">
                      완료
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[14px] text-gray-600 dark:text-gray-400">
                    2026-01-10
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="px-6 py-4 text-[14px] font-medium text-gray-700 dark:text-gray-300">
                    대구 달서구 주택 태양광
                  </td>
                  <td className="px-6 py-4 text-[14px] text-gray-600 dark:text-gray-400">
                    선광에너지
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-[12px] font-medium bg-yellow-100 text-yellow-800">
                      검토중
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[14px] text-gray-600 dark:text-gray-400">
                    2026-01-08
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Notice List */}
      <div className="mb-8">
        <h2 className="text-[20px] font-semibold mb-2 text-gray-900 dark:text-gray-50">
          Notice List
        </h2>
        <p className="text-[13px] mb-6 text-gray-600 dark:text-gray-400">
          공지사항 등에서 사용하는 카드 형식 리스트
        </p>
        
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-800">
          {/* Pinned Notice */}
          <div className="flex items-center gap-4 px-6 py-4 cursor-pointer border-b border-gray-200 dark:border-gray-700 bg-blue-50/50 hover:bg-blue-50/80 dark:bg-blue-900/10 dark:hover:bg-blue-900/20 transition-colors">
            <Pin size={16} className="text-blue-500 shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-red-100 text-red-800">
                  중요
                </span>
                <h3 className="text-[14px] font-medium truncate text-gray-900 dark:text-gray-300">
                  [중요] 2026년 1월 시스템 점검 안내
                </h3>
              </div>
              <div className="flex items-center gap-3 text-[12px] text-gray-400 dark:text-gray-500">
                <span className="flex items-center gap-1">
                  <User size={12} />
                  관리자
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  2026-01-15
                </span>
                <span className="flex items-center gap-1">
                  <Eye size={12} />
                  245
                </span>
              </div>
            </div>
          </div>

          {/* Regular Notice 1 */}
          <div className="flex items-center gap-4 px-6 py-4 cursor-pointer border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <FileText size={16} className="text-gray-400 dark:text-gray-500 shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                  일반
                </span>
                <h3 className="text-[14px] font-medium truncate text-gray-900 dark:text-gray-300">
                  2026년 1분기 협력사 간담회 일정 안내
                </h3>
              </div>
              <div className="flex items-center gap-3 text-[12px] text-gray-400 dark:text-gray-500">
                <span className="flex items-center gap-1">
                  <User size={12} />
                  운영팀
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  2026-01-13
                </span>
                <span className="flex items-center gap-1">
                  <Eye size={12} />
                  156
                </span>
              </div>
            </div>
          </div>

          {/* Regular Notice 2 */}
          <div className="flex items-center gap-4 px-6 py-4 cursor-pointer border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <FileText size={16} className="text-gray-400 dark:text-gray-500 shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                  일반
                </span>
                <h3 className="text-[14px] font-medium truncate text-gray-900 dark:text-gray-300">
                  설 연휴 고객센터 운영 안내
                </h3>
              </div>
              <div className="flex items-center gap-3 text-[12px] text-gray-400 dark:text-gray-500">
                <span className="flex items-center gap-1">
                  <User size={12} />
                  고객지원팀
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  2026-01-12
                </span>
                <span className="flex items-center gap-1">
                  <Eye size={12} />
                  98
                </span>
              </div>
            </div>
          </div>

          {/* Regular Notice 3 */}
          <div className="flex items-center gap-4 px-6 py-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <FileText size={16} className="text-gray-400 dark:text-gray-500 shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                  일반
                </span>
                <h3 className="text-[14px] font-medium truncate text-gray-900 dark:text-gray-300">
                  신규 협력사 등록 절차 안내
                </h3>
              </div>
              <div className="flex items-center gap-3 text-[12px] text-gray-400 dark:text-gray-500">
                <span className="flex items-center gap-1">
                  <User size={12} />
                  운영팀
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  2026-01-11
                </span>
                <span className="flex items-center gap-1">
                  <Eye size={12} />
                  234
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
