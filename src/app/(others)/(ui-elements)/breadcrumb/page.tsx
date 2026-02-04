import type { Metadata } from "next";
import Link from "next/link";
import { Menu, Home, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Breadcrumb | 타이런트 - 관리자",
  description: "타이런트 관리자 Breadcrumb 페이지",
};

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  maxDepth?: number;
}

function BreadcrumbUtil({ items, maxDepth = 4 }: BreadcrumbProps) {
  // Handle overflow when items exceed max depth
  const displayItems = items.length > maxDepth
    ? [
        items[0],
        { label: '…', href: undefined },
        ...items.slice(items.length - (maxDepth - 2))
      ]
    : items;

  return (
    <nav className="flex items-center gap-2">
      {/* Home Icon */}
      <Home size={14} className="text-gray-400 flex-shrink-0" />

      {displayItems.map((item, index) => {
        const isLast = index === displayItems.length - 1;
        const isEllipsis = item.label === '…';

        return (
          <div key={index} className="flex items-center gap-2">
            {/* Separator */}
            {index > 0 && (
              <ChevronRight size={12} className="text-gray-300 flex-shrink-0" />
            )}

            {/* Breadcrumb Item */}
            {isEllipsis ? (
              <span className="text-[13px] font-medium text-gray-400 cursor-default">
                {item.label}
              </span>
            ) : isLast ? (
              <span className="text-[13px] font-semibold text-gray-900 dark:text-gray-50 cursor-default whitespace-nowrap">
                {item.label}
              </span>
            ) : (
              <Link className="text-[13px] font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 no-underline cursor-pointer transition-colors whitespace-nowrap"
                href={item.href || '#'}>
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
  
export default function Breadcrumb() {

  return (
    <div className="contents-layout">
      {/* Page Header */}
      <div className="flex items-start justify-between gap-4 mb-8">
        <div>
          <h1 className="contents-title font-bold tracking-tight text-gray-900 dark:text-gray-50">
            브레드크럼 컴포넌트
          </h1>
          <p className="contents-sub-title mt-2 text-gray-600 dark:text-gray-400">
            페이지 계층 구조 네비게이션
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
            Breadcrumb
          </span>
        </nav>
      </div>

      {/* Basic Breadcrumbs Section */}
      <div className="mb-12">
        <h2 className="text-[20px] font-semibold mb-6 text-gray-900 dark:text-gray-50">
          기본 브레드크럼
        </h2>
        
        <div className="grid grid-cols-1 gap-6">
          {/* 2 Depth */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              2 Depth
            </h3>
            <BreadcrumbUtil items={[
              { label: '대시보드', href: '#' },
              { label: '프로젝트' }
            ]} />
          </div>

          {/* 3 Depth */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              3 Depth
            </h3>
            <BreadcrumbUtil items={[
              { label: '대시보드', href: '#' },
              { label: '프로젝트', href: '#' },
              { label: '프로젝트 상세' }
            ]} />
          </div>

          {/* 4 Depth */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              4 Depth (최대)
            </h3>
            <BreadcrumbUtil items={[
              { label: '대시보드', href: '#' },
              { label: '프로젝트', href: '#' },
              { label: 'ABC 프로젝트', href: '#' },
              { label: '설정' }
            ]} />
          </div>
        </div>
      </div>

      {/* Overflow Handling Section */}
      <div className="mb-12">
        <h2 className="text-[20px] font-semibold mb-6 text-gray-900 dark:text-gray-50">
          오버플로우 처리
        </h2>
        <p className="text-[14px] mb-6 text-gray-600 dark:text-gray-400">
          최대 깊이(4)를 초과하면 중간 경로가 생략 기호(…)로 표시됩니다
        </p>
        
        <div className="grid grid-cols-1 gap-6">
          {/* 5 Depth with Overflow */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              5 Depth (오버플로우)
            </h3>
            <BreadcrumbUtil items={[
              { label: '대시보드', href: '#' },
              { label: '프로젝트', href: '#' },
              { label: 'ABC 프로젝트', href: '#' },
              { label: '문서', href: '#' },
              { label: '상세 페이지' }
            ]} />
          </div>

          {/* 6 Depth with Overflow */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              6 Depth (오버플로우)
            </h3>
            <BreadcrumbUtil items={[
              { label: '대시보드', href: '#' },
              { label: '프로젝트', href: '#' },
              { label: 'ABC 프로젝트', href: '#' },
              { label: '문서', href: '#' },
              { label: '2024년', href: '#' },
              { label: '1월 보고서' }
            ]} />
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div>
        <h2 className="text-[20px] font-semibold mb-6 text-gray-900 dark:text-gray-50">
          실제 사용 예시
        </h2>
        
        <div className="grid grid-cols-1 gap-6">
          {/* E-commerce Example */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              E-Commerce 카테고리
            </h3>
            <BreadcrumbUtil items={[
              { label: '홈', href: '#' },
              { label: '전자제품', href: '#' },
              { label: '노트북', href: '#' },
              { label: 'MacBook Pro 16인치' }
            ]} />
          </div>

          {/* Settings Example */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              설정 페이지
            </h3>
            <BreadcrumbUtil items={[
              { label: '대시보드', href: '#' },
              { label: '설정', href: '#' },
              { label: '계정 설정' }
            ]} />
          </div>

          {/* User Management Example */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              사용자 관리
            </h3>
            <BreadcrumbUtil items={[
              { label: '관리자', href: '#' },
              { label: '사용자 관리', href: '#' },
              { label: '김철수' }
            ]} />
          </div>

          {/* Documentation Example */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              문서 시스템
            </h3>
            <BreadcrumbUtil items={[
              { label: '문서', href: '#' },
              { label: '가이드', href: '#' },
              { label: '시작하기', href: '#' },
              { label: '설치 방법' }
            ]} />
          </div>
        </div>
      </div>

      {/* Design Specs */}
      <div className="mt-12 rounded-xl border p-6 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
          디자인 스펙
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[13px] text-gray-600 dark:text-gray-400">
          <div>
            <strong className="text-gray-900 dark:text-gray-50">아이콘:</strong> 14px, #9CA3AF
          </div>
          <div>
            <strong className="text-gray-900 dark:text-gray-50">텍스트:</strong> 13px, 500 weight
          </div>
          <div>
            <strong className="text-gray-900 dark:text-gray-50">링크 색상:</strong> #6B7280 → #1F2A44 (hover)
          </div>
          <div>
            <strong className="text-gray-900 dark:text-gray-50">현재 페이지:</strong> 13px, 600 weight, #1F2A44
          </div>
          <div>
            <strong className="text-gray-900 dark:text-gray-50">구분자:</strong> {'>'}, 12px, #D1D5DB
          </div>
          <div>
            <strong className="text-gray-900 dark:text-gray-50">간격:</strong> 8px
          </div>
          <div>
            <strong className="text-gray-900 dark:text-gray-50">최대 깊이:</strong> 4
          </div>
          <div>
            <strong className="text-gray-900 dark:text-gray-50">오버플로우:</strong> … (#9CA3AF)
          </div>
        </div>
      </div>
    </div>
  );
}
