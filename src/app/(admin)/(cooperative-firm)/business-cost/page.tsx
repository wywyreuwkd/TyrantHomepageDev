import type { Metadata } from "next";
import React from 'react';
import Link from "next/link";
import { Menu, Check, Home, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "사업비 안내 | 타이런트 - 관리자",
  description: "타이런트 관리자 사업비 안내 페이지",
};

export default function BusinessCost() {
  const costData = [
    { 
      category: '기자재',
      subcategory: '(육상시공/고정)',
      items: [
        { amount: '1.5억', detail: '모듈' },
        { amount: '0.5억', detail: '인버터' },
        { amount: '1.0억', detail: '구조물' },
        { amount: '1.0억', detail: '삼원계도금강판(덕방)' }
      ]
    },
    { 
      category: '기타',
      subcategory: '',
      items: [
        { amount: '5.0억', detail: '인허가(구조안전진단 포함), 설계 및 엔지니어링, 전기공사, 구조물공사, 계통공사 등' }
      ]
    },
    { 
      category: '영업비',
      subcategory: '',
      items: [
        { amount: '0.5억', detail: '-' }
      ]
    }
  ];

  return (
    <div className="py-6 md:px-6">
      {/* Page Header */}
      <div className="flex items-start justify-between gap-4 mb-12">
        <div>
          <h1 className="text-[24px] md:text-[28px] font-bold tracking-[-0.02em] text-gray-900 dark:text-gray-50">
            사업비 안내
          </h1>
          <p className="text-[14px] mt-2 text-gray-500 dark:text-gray-400">
            프로젝트 예산 및 비용 구성 안내
          </p>
        </div>

        {/* Breadcrumb - PC만 표시 */}
        <nav className="hidden md:flex items-center gap-2 flex-shrink-0">
          <Link href="/main">
            <div className="flex items-center gap-1.5 cursor-pointer">
              <Home className="text-gray-400 dark:text-gray-500"
                size={14} />
              <span className="text-[13px] font-medium whitespace-nowrap text-gray-500 dark:text-gray-400">
                홈
              </span>
            </div>
          </Link>
          <ChevronRight size={12} className="text-gray-300 dark:text-gray-600" />
          <span className="text-[13px] font-medium whitespace-nowrap text-gray-500 dark:text-gray-400">
            협력사 가이드라인
          </span>
          <ChevronRight size={12} className="text-gray-300 dark:text-gray-600" />
          <span className="text-[13px] font-semibold whitespace-nowrap text-gray-900 dark:text-gray-50">
            사업비 안내
          </span>
        </nav>
      </div>

      {/* Main Card Container */}
      <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-[20px] overflow-hidden shadow-[0_1px_3px_0_rgba(0,0,0,0.03)] dark:shadow-none">
        {/* Hero Summary Section */}
        <div className="px-8 pt-8 pb-8 border-b border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 max-md:gap-6">
            {/* Left: Core Information */}
            <div>
              <h2 className="text-[20px] font-bold mb-6 text-gray-900 dark:text-gray-100">
                기준 사업비 안내
              </h2>
              
              {/* Amount */}
              <div className="flex items-baseline gap-2 mb-8 max-md:mb-6">
                <span className="text-[44px] max-md:text-[32px] font-bold tracking-[-0.02em] leading-[1.1] text-[#243c84] dark:text-[#5a7bc8]">
                  총 9.5억 원
                </span>
                <span className="text-[16px] max-md:text-[14px] font-medium text-gray-500">
                  / 1MW
                </span>
              </div>

              {/* Bullet Points */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 bg-[#243c84] dark:bg-[#5a7bc8]">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <p className="text-[15px] max-md:text-[13px] leading-[1.7] text-gray-600 dark:text-gray-300">
                    본 기준 사업비는 일반적인 사업 현장을 기준으로 1MW 규모 프로젝트에 대한 기준사업비를 의미합니다.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 bg-[#243c84] dark:bg-[#5a7bc8]">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <p className="text-[15px] max-md:text-[13px] leading-[1.7] text-gray-600 dark:text-gray-300">
                    합리적인 사유에 따라 추가 협의가 가능합니다.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 bg-[#243c84] dark:bg-[#5a7bc8]">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <p className="text-[15px] max-md:text-[13px] leading-[1.7] text-gray-600 dark:text-gray-300">
                    시공비는 기자재 및 기타 비용을 포함한 All-in-One 가격입니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Key Facts Card */}
            <div className="rounded-[10px] p-6 max-md:p-5 border bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700">
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-[13px] font-medium text-gray-500 dark:text-gray-400">
                    영업비
                  </span>
                  <span className="text-[15px] font-semibold text-gray-900 dark:text-gray-100">
                    5,000만 원
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-[13px] font-medium text-gray-500 dark:text-gray-400">
                    시공비 (All-in)
                  </span>
                  <span className="text-[15px] font-semibold text-gray-900 dark:text-gray-100">
                    9.0억 원
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-[13px] font-medium text-gray-500 dark:text-gray-400">
                    VAT
                  </span>
                  <span className="text-[13px] font-medium text-[#d8442c]">
                    환급 시점 지급
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cost Breakdown Table Section */}
        <div className="px-8 pt-8 pb-6">
          <h2 className="text-[20px] font-bold mb-6 text-gray-900 dark:text-gray-100">
            비용 구성 상세
          </h2>
        </div>

        {/* Desktop Table */}
        <div className="overflow-x-auto max-md:hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-[#FAFBFC] dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <th className="px-8 py-4 text-left text-[12px] font-semibold tracking-wider uppercase text-gray-500 dark:text-gray-400 w-[25%]">
                  구분
                </th>
                <th className="px-8 py-4 text-right text-[12px] font-semibold tracking-wider uppercase text-gray-500 dark:text-gray-400 w-[20%]">
                  금액(원)
                </th>
                <th className="px-8 py-4 text-left text-[12px] font-semibold tracking-wider uppercase text-gray-500 dark:text-gray-400 w-[55%]">
                  세부내용
                </th>
              </tr>
            </thead>
            <tbody>
              {costData.map((categoryRow, categoryIndex) => 
                categoryRow.items.map((item, itemIndex) => (
                  <tr className={categoryIndex === costData.length - 1 && itemIndex === categoryRow.items.length - 1 ? '' : 'border-b border-gray-100 dark:border-gray-700'}
                    key={`${categoryIndex}-${itemIndex}`}>
                    {/* Category Column - only show on first row */}
                    <td className={`px-8 py-5 ${itemIndex === 0 ? 'align-top' : 'align-middle'}`}>
                      {itemIndex === 0 && (
                        <>
                          <div className="text-[14px] font-semibold text-gray-900 dark:text-gray-50">
                            {categoryRow.category}
                          </div>
                          {categoryRow.subcategory && (
                            <div className="text-[13px] mt-1 text-gray-500 dark:text-gray-400">
                              {categoryRow.subcategory}
                            </div>
                          )}
                        </>
                      )}
                    </td>
                    
                    {/* Amount Column */}
                    <td className="px-8 py-5 text-right text-[14px] font-semibold text-gray-700 dark:text-gray-300">
                      {item.amount}
                    </td>
                    
                    {/* Detail Column */}
                    <td className="px-8 py-5 text-[14px] leading-[1.6] text-gray-500 dark:text-gray-400">
                      {item.detail}
                    </td>
                  </tr>
                ))
              )}
              
              {/* Total Row */}
              <tr className="bg-gray-50 dark:bg-gray-900 border-t-2 border-gray-300 dark:border-gray-600">
                <td className="px-8 py-5 text-[15px] font-bold text-gray-900 dark:text-gray-100">
                  합계
                </td>
                <td className="px-8 py-5 text-right text-[16px] font-bold text-[#243c84] dark:text-[#5a7bc8]">
                  9.5억
                </td>
                <td className="px-8 py-5 text-[14px] text-gray-500 dark:text-gray-400">
                  VAT는 환급시점에 지급
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="max-md:block hidden px-6 pb-6">
          <div className="space-y-4">
            {costData.map((categoryRow, categoryIndex) => (
              <div className="rounded-[10px] border overflow-hidden bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700"
                key={categoryIndex}>
                {/* Category Header */}
                <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="text-[14px] font-semibold text-gray-900 dark:text-gray-50">
                    {categoryRow.category}
                  </div>
                  {categoryRow.subcategory && (
                    <div className="text-[13px] mt-1 text-gray-500 dark:text-gray-400">
                      {categoryRow.subcategory}
                    </div>
                  )}
                </div>
                
                {/* Items */}
                {categoryRow.items.map((item, itemIndex) => (
                  <div className={`px-5 py-4 ${itemIndex > 0 ? 'border-t border-gray-200 dark:border-gray-700' : ''}`}
                    key={itemIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[13px] font-medium text-gray-500 dark:text-gray-400">
                        금액
                      </span>
                      <span className="text-[15px] font-semibold text-gray-700 dark:text-gray-300">
                        {item.amount}
                      </span>
                    </div>
                    <div>
                      <div className="text-[13px] font-medium mb-1 text-gray-500 dark:text-gray-400">
                        세부내용
                      </div>
                      <div className="text-[13px] leading-[1.6] text-gray-500 dark:text-gray-400">
                        {item.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
            
            {/* Mobile Total */}
            <div className="rounded-[10px] border-2 overflow-hidden bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-600">
              <div className="px-5 py-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[15px] font-bold text-gray-900 dark:text-gray-100">
                    합계
                  </span>
                  <span className="text-[18px] font-bold text-[#243c84] dark:text-[#5a7bc8]">
                    9.5억
                  </span>
                </div>
                <div className="text-[13px] text-gray-500 dark:text-gray-400">
                  VAT는 환급시점에 지급
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="px-8 pb-8 pt-2">
          <p className="text-[13px] text-gray-400 dark:text-gray-500">
            ※ 추가 예비비 편성: 합리적인 공사비 증가 사유 발생 시 추가 협의 가능
          </p>
        </div>
      </div>
    </div>
  );
}
