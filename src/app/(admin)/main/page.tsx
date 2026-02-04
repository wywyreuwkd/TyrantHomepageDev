import type { Metadata } from "next";
import React from "react";
import { Pin } from "lucide-react";
import { MainBarChartSection } from "@/components/section/main/MainBarChartSection";
import { MainLineChartSection } from "@/components/section/main/MainLineChartSection"

export const metadata: Metadata = {
  title: "메인 | 타이런트 - 관리자",
  description: "타이런트 관리자 메인 페이지",
};

export default function Main() {
  const recentActions = [
    { title: '신규 협력사 등록 승인 완료', company: '㈜태양에너지 외 2개사', status: '처리완료', date: '2024.01.18' },
    { title: '김천시 태양광 발전소 중도금 정산', company: '㈜그린시공', status: '검토중', date: '2024.01.18' },
    { title: '영주시 태양광 발전소 최종 검수', company: '㈜선파워', status: '검수완료', date: '2024.01.17' },
    { title: '포항시 태양광 발전소 계약 체결', company: '㈜에코솔라', status: '진행중', date: '2024.01.16' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case '처리완료':
      case '검수완료':
        return '#10b981'; // 초록색
      case '검토중':
        return '#f59e0b'; // 노란색
      case '진행중':
        return '#243c84'; // 브랜드 컬러
      default:
        return '#6b7280'; // 그레이
    }
  };

  const announcementNotices = [
    { id: 1, title: '2024년 태양광 발전사업 협력사 모집 공고', category: '중요', author: '관리자', date: '2024.03.15', views: 1247 },
    { id: 2, title: '협력사 가이드라인 v2.1 업데이트 안내', category: '일반', author: '관리자', date: '2024.03.10', views: 892 },
    { id: 3, title: '1분기 우수 협력사 선정 결과', category: '중요', author: '관리자', date: '2024.03.05', views: 1534 },
    { id: 4, title: '시공 안전 교육 이수 필수화 안내', category: '일반', author: '관리자', date: '2024.02.28', views: 756 },
    { id: 5, title: '계약서 양식 개정 사항 공지', category: '일반', author: '관리자', date: '2024.02.20', views: 623 },
  ];

  return (
    <div className="contents-layout">
      {/* Page Header */}
      <div className="mb-16 max-md:mb-12">
        <h1 className="contents-title font-bold mb-3 tracking-[-0.02em] text-gray-900 dark:text-gray-50">
          협력사 관리 시스템
        </h1>
        <p className="text-[15px] max-md:text-[14px] text-gray-600 dark:text-gray-400">
          태양광 발전사업 협력사 운영 및 관리 통합 플랫폼
        </p>
      </div>

      {/* SECTION 1: 시스템 개요 */}
      <div className="mb-16 max-md:mb-12">
        <h2 className="text-[13px] font-bold mb-6 tracking-[0.1em] text-[#243c84]">
          SYSTEM OVERVIEW
        </h2>
        <p className="text-[15px] leading-[1.8] max-w-4xl max-md:text-[14px] text-gray-600 dark:text-gray-300">
          본 시스템은 태양광 발전사업 협력사의 등록, 프로젝트 참여, 공정 관리 및 정산 과정을 통합적으로 관리하기 위한 운영 시스템입니다. 
          협력사는 본 시스템을 통해 사업 참여 조건 확인, 프로젝트 진행 현황 조회, 계약 및 정산 관련 자료 관리를 수행할 수 있습니다.
        </p>
      </div>

      {/* Divider */}
      <div className="mb-16 max-md:mb-12 border-t border-gray-200 dark:border-gray-700" />

      {/* SECTION 2: 운영 현황 요약 */}
      <div className="mb-16 max-md:mb-12">
        <h2 className="text-[13px] font-bold mb-8 tracking-[0.1em] max-md:mb-6 text-[#243c84]">
          OPERATIONAL STATUS
        </h2>
        <p className="text-[15px] leading-[1.8] mb-12 max-w-4xl max-md:text-[14px] max-md:mb-8 text-gray-600 dark:text-gray-300">
          현재 등록된 협력사와 진행 중인 프로젝트 현황을 기준으로 시스템 운영 상태를 요약하여 제공합니다. 
          각 프로젝트는 계약, 시공, 검수, 정산 단계로 구분되어 관리됩니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-md:gap-6">
          {/* Card 1 */}
          <div className="rounded-[10px] p-6 border max-md:p-5 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <p className="text-[11px] font-semibold tracking-[0.1em] text-gray-600 dark:text-gray-400">
                REGISTERED PARTNERS
              </p>
              <span className="h-[22px] px-2 rounded-full text-[11px] font-medium inline-flex items-center bg-[#EEF1F7] dark:bg-gray-800 border border-[#D6DBE6] dark:border-gray-700 text-[#1F2A44] dark:text-gray-400">
                활성
              </span>
            </div>
            <p className="text-[40px] font-bold mb-2 max-md:text-[32px] tracking-[-0.02em] leading-[1] text-gray-600 dark:text-gray-300">
              187
            </p>
            <p className="text-[14px] max-md:text-[13px] text-gray-400 dark:text-gray-600">
              개사
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="rounded-[10px] p-6 border max-md:p-5 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <p className="text-[11px] font-semibold tracking-[0.1em] text-gray-600 dark:text-gray-400">
                ONGOING PROJECTS
              </p>
              <span className="h-[22px] px-2 rounded-full text-[11px] font-medium inline-flex items-center bg-[#EEF1F7] dark:bg-gray-800 border border-[#D6DBE6] dark:border-gray-700 text-[#1F2A44] dark:text-gray-400">
                진행중
              </span>
            </div>
            <p className="text-[40px] font-bold mb-2 max-md:text-[32px] tracking-[-0.02em] leading-[1] text-gray-600 dark:text-gray-300">
              34
            </p>
            <p className="text-[14px] max-md:text-[13px] text-gray-400 dark:text-gray-600">
              건
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="rounded-[10px] p-6 border max-md:p-5 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <p className="text-[11px] font-semibold tracking-[0.1em] text-gray-600 dark:text-gray-400">
                COMPLETED IN 2024
              </p>
              <span className="h-[22px] px-2 rounded-full text-[11px] font-medium inline-flex items-center bg-[#F0F7F4] dark:bg-gray-800 border border-[#CFE9DD] dark:border-gray-700 text-[#166534] dark:text-gray-400">
                완료
              </span>
            </div>
            <p className="text-[40px] font-bold mb-2 max-md:text-[32px] tracking-[-0.02em] leading-[1] text-gray-600 dark:text-gray-300">
              128
            </p>
            <p className="text-[14px] max-md:text-[13px] text-gray-400 dark:text-gray-600">
              건
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mb-16 max-md:mb-12 border-t border-gray-200 dark:border-gray-700" />

      {/* SECTION 3: 프로젝트 상태 분포 */}
      <MainBarChartSection />

      {/* Divider */}
      <div className="mb-16 max-md:mb-12 border-t border-gray-200 dark:border-gray-700" />

      {/* SECTION 4: 월별 처리 흐름 */}
      <MainLineChartSection />

      {/* Divider */}
      <div className="mb-16 max-md:mb-12 border-t border-gray-200 dark:border-gray-700" />

      {/* SECTION 5: 최근 처리 내역 */}
      <div className="mb-16 max-md:mb-12">
        <h2 className="text-[13px] font-bold mb-8 tracking-[0.1em] max-md:mb-6 text-[#243c84]">
          RECENT ACTIVITIES
        </h2>
        <p className="text-[15px] leading-[1.8] mb-12 max-w-4xl max-md:text-[14px] max-md:mb-8 text-gray-600 dark:text-gray-300">
          최근 프로젝트 관련 처리 내역과 협력사 확인이 필요한 주요 항목을 안내합니다. 
          각 항목은 시스템 내 상세 화면을 통해 확인할 수 있습니다.
        </p>

        <div className="space-y-6 max-md:space-y-4">
          {recentActions.map((action, index) => (
            <div 
              key={index}
              className={`grid grid-cols-1 md:grid-cols-[1fr_120px_100px] gap-4 pb-6 max-md:pb-4 ${
                index < recentActions.length - 1 ? 'border-b border-gray-200 dark:border-gray-700' : ''
              }`}
            >
              <div>
                <h3 className="text-[15px] font-medium mb-2 max-md:text-[14px] text-gray-900 dark:text-gray-100">
                  {action.title}
                </h3>
                <p className="text-[13px] max-md:text-[12px] text-gray-600 dark:text-gray-400">
                  {action.company}
                </p>
              </div>
              <div className="flex items-start max-md:order-last">
                <div className="flex items-center gap-2">
                  <span 
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ 
                      backgroundColor: getStatusColor(action.status)
                    }}
                  />
                  <span className="text-[13px] max-md:text-[12px] text-gray-600 dark:text-gray-400">
                    {action.status}
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-[13px] max-md:text-[12px] text-gray-400 dark:text-gray-600">
                  {action.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="mb-16 max-md:mb-12 border-t border-gray-200 dark:border-gray-700" />

      {/* SECTION 6: 공지사항 */}
      <div className="mb-16 max-md:mb-12">
        <div className="flex items-center justify-between mb-8 max-md:mb-6">
          <h2 className="text-[13px] font-bold tracking-[0.1em] text-[#243c84]">
            ANNOUNCEMENTS
          </h2>
          <button className="text-[13px] font-medium px-4 py-2 transition-opacity hover:opacity-70 text-[#243c84]">
            전체 보기
          </button>
        </div>
        
        <p className="text-[15px] leading-[1.8] mb-12 max-w-4xl max-md:text-[14px] max-md:mb-8 text-gray-600 dark:text-gray-300">
          시스템 운영 정책 변경, 일정 안내 등 협력사에게 필요한 공지사항을 확인할 수 있습니다.
        </p>

        {/* Notice List Container */}
        <div className="rounded-lg border overflow-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          {/* Table Header (PC Only) */}
          <div className="hidden md:grid md:grid-cols-12 gap-4 px-5 py-4 border-b bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <div className="col-span-1 text-sm text-gray-600 dark:text-gray-400">번호</div>
            <div className="col-span-6 text-sm text-gray-600 dark:text-gray-400">제목</div>
            <div className="col-span-1 text-sm text-gray-600 dark:text-gray-400">분류</div>
            <div className="col-span-2 text-sm text-gray-600 dark:text-gray-400">작성자</div>
            <div className="col-span-1 text-sm text-gray-600 dark:text-gray-400">등록일</div>
            <div className="col-span-1 text-sm text-right text-gray-600 dark:text-gray-400">조회</div>
          </div>

          {/* Notice Items */}
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {announcementNotices.map((notice, index) => (
              <div
                key={notice.id}
                className="px-4 md:px-5 py-4 transition-colors cursor-pointer bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900"
              >
                {/* Mobile Layout */}
                <div className="md:hidden">
                  <div className="flex items-start gap-2 mb-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`inline-block px-2 py-0.5 rounded text-xs ${
                          notice.category === '중요' 
                            ? 'bg-red-50 text-[#d8442c]' 
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                        }`}>
                          {notice.category}
                        </span>
                      </div>
                      <h3 className={`text-sm mb-2 break-words ${
                        notice.category === '중요' 
                          ? 'text-[#243c84] font-semibold' 
                          : 'text-gray-900 dark:text-gray-100 font-normal'
                      }`}>
                        {notice.title}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400">
                        <span>{notice.author}</span>
                        <span>{notice.date}</span>
                        <span>조회 {notice.views}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PC Layout */}
                <div className="hidden md:grid md:grid-cols-12 gap-4 items-center">
                  <div className="col-span-1 text-sm text-gray-600 dark:text-gray-400">
                    {notice.category === '중요' ? (
                      <Pin className="w-4 h-4 text-[#243c84]" />
                    ) : (
                      <span>{announcementNotices.length - index}</span>
                    )}
                  </div>
                  <div className="col-span-6">
                    <div className="flex items-center gap-2">
                      {notice.category === '중요' && (
                        <Pin className="w-4 h-4 flex-shrink-0 text-[#243c84]" />
                      )}
                      <span className={`text-sm ${
                        notice.category === '중요' 
                          ? 'text-[#243c84] font-semibold' 
                          : 'text-gray-900 dark:text-gray-100 font-normal'
                      }`}>
                        {notice.title}
                      </span>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <span className={`inline-block px-2 py-1 rounded text-xs ${
                      notice.category === '중요' 
                        ? 'bg-red-50 text-[#d8442c]' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                    }`}>
                      {notice.category}
                    </span>
                  </div>
                  <div className="col-span-2 text-sm text-gray-600 dark:text-gray-400">
                    {notice.author}
                  </div>
                  <div className="col-span-1 text-sm text-gray-600 dark:text-gray-400">
                    {notice.date}
                  </div>
                  <div className="col-span-1 text-sm text-right text-gray-600 dark:text-gray-400">
                    {notice.views}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
