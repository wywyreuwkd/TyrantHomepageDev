import type { Metadata } from "next";
import Link from "next/link";
import { Home, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "시공 참여 조건 | 타이런트 - 관리자",
  description: "타이런트 관리자 시공 참여 조건 페이지",
};

export default function ParticipationCondition() {
  const conditions = [
    {
      number: '01',
      title: '원청',
      content: '대보에너지솔루션 + 대기업'
    },
    {
      number: '02',
      title: '하청',
      content: '협력 시공사'
    },
    {
      number: '03',
      title: '하청 금액',
      content: '9억/MW (VAT 미포함, All in.)',
      note: '※ 계통 지중 인입, 구조물 보강 필요 시 증액 협의'
    },
    {
      number: '04',
      title: '공사 범위',
      items: [
        '인허가',
        '시공',
        '계통연계',
        '누수방지 덧방',
        'KPX 계량기 설치',
        'Two Rail 지지 구조물 시공 (현장에 따라 판단)'
      ]
    },
    {
      number: '05',
      title: 'VAT 지급 조건',
      content: 'VAT는 환급 완료 시 지급'
    },
    {
      number: '06',
      title: '공사비 지급',
      subtitle: '(협의 가능)',
      items: [
        '착공신고 시 : 40%',
        '사용전검사 시 : 50%',
        'REC 설비 확인 시 : 10%'
      ]
    }
  ];
  
  return (
    <div className="py-6 md:px-6">
      {/* Page Header */}
      <div className="flex items-start justify-between gap-4 mb-12">
        <div className="flex-1">
          <h1 className="text-[24px] md:text-[28px] font-bold tracking-[-0.02em] text-gray-900 dark:text-gray-50">
            시공 참여 조건
          </h1>
          <p className="text-[14px] max-md:text-[13px] mt-2 text-gray-500 dark:text-gray-400">
            협력 시공사 계약 조건 및 공사비 지급 안내
          </p>
        </div>

        {/* Breadcrumb - PC만 표시 */}
        <nav className="hidden md:flex items-center gap-2 flex-shrink-0">
          <Link href="/main">
            <div className="flex items-center gap-1.5 cursor-pointer">
              <Home className="flex-shrink-0 text-gray-400 dark:text-gray-500"
                size={14}/>
              <span className="text-[13px] font-medium whitespace-nowrap text-gray-500 dark:text-gray-400">
                홈
              </span>
            </div>
          </Link>
          <ChevronRight size={12} className="flex-shrink-0 text-gray-300 dark:text-gray-600" />
          <span className="text-[13px] font-medium whitespace-nowrap text-gray-500 dark:text-gray-400">
            협력사 가이드라인
          </span>
          <ChevronRight size={12} className="flex-shrink-0 text-gray-300 dark:text-gray-600" />
          <span className="text-[13px] font-semibold whitespace-nowrap text-gray-900 dark:text-gray-50">
            시공 참여 조건
          </span>
        </nav>
      </div>

      {/* Cards Grid */}
      <div className="flex flex-col gap-6">
        {conditions.map((condition) => (
          <div className="rounded-[10px] border p-5 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            key={condition.number}>
            {/* Card Header */}
            <div className="mb-3 flex items-center gap-3">
              <span className="text-[13px] font-semibold text-[#243c84] px-2.5 py-1 rounded-md bg-[rgba(36,60,132,0.08)] dark:bg-[rgba(36,60,132,0.1)]">
                {condition.number}
              </span>
              <h3 className="text-[16px] font-semibold text-gray-900 dark:text-gray-50">
                {condition.title}
                {condition.subtitle && (
                  <span className="text-[14px] font-normal ml-1.5 text-gray-500 dark:text-gray-400">
                    {condition.subtitle}
                  </span>
                )}
              </h3>
            </div>

            {/* Card Content */}
            <div>
              {condition.content && (
                <p className="text-[14px] leading-[1.6] text-gray-700 dark:text-gray-300">
                  {condition.content}
                </p>
              )}

              {condition.items && (
                <div className="flex flex-col gap-2">
                  {condition.items.map((item, i) => (
                    <p className="text-[14px] leading-[1.6] pl-4 relative text-gray-700 dark:text-gray-300"
                      key={i}>
                      <span className="absolute left-0 text-gray-500 dark:text-gray-400">
                        •
                      </span>
                      {item}
                    </p>
                  ))}
                </div>
              )}

              {condition.note && (
                <p className="text-[13px] leading-[1.6] mt-3 text-gray-500 dark:text-gray-400">
                  {condition.note}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Notice */}
      <div className="mt-8 p-4 rounded-[10px] border text-center bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700">
        <p className="text-[13px] text-gray-500 dark:text-gray-400">
          ※ 상기 조건은 협의를 통해 조정 가능합니다.
        </p>
      </div>
    </div>
  );
}
